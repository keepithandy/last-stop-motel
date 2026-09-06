import { VERSION, DIFFICULTIES, GUESTS, NAMES, NIGHTS, EVENTS, UPGRADES, STAFF, REQUESTS } from "./content.js";
const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const round = (n) => Math.round(n * 100) / 100;
function random(s) {
  s.seed = Math.imul(s.seed, 1664525) + 1013904223 >>> 0;
  return s.seed / 4294967296;
}
const pick = (s, a) => a[Math.floor(random(s) * a.length)];
function newGame(difficulty = "standard", seed = Date.now()) {
  const config = Object.hasOwn(DIFFICULTIES, difficulty) ? DIFFICULTIES[difficulty] : DIFFICULTIES.standard;
  const s = { version: VERSION, schema: 1, difficulty: Object.hasOwn(DIFFICULTIES, difficulty) ? difficulty : "standard", seed: seed >>> 0, night: 1, phase: "prep", minute: 0, cash: config.cash, debt: config.debt, rep: 50, supplies: 12, rate: "standard", rooms: [], upgrades: [], staff: [], energy: 100, playerJob: null, queue: [], arrivals: [], eventIndex: 0, event: null, eventHistory: [], history: [], log: [], notifications: [], achievements: [], stats: { hosted: 0, turned: 0, requests: 0, earned: 0, spent: 0, cleaned: 0, repaired: 0, upgraded: 0 }, ledger: { income: 0, expenses: 0, tips: 0, guests: 0 }, endless: false, loan: false, emergencyDelivery: false, lastReport: null, seenIntro: false, outcome: null, nextId: 1 };
  for (let i = 0; i < 10; i++) s.rooms.push({ id: i + 1, number: 101 + i, open: i < 6, quality: i === 3 ? 1 : 0, clean: i === 1 ? 35 : i === 4 ? 50 : 100, condition: i === 4 ? 48 : 82, guest: null, job: null, request: null, quiet: i >= 3 });
  log(s, "The keys are yours. Welcome to Last Stop Motel.");
  return s;
}
function log(s, message) {
  s.log.unshift({ night: s.night, time: Math.floor(s.minute), message });
  s.log = s.log.slice(0, 50);
}
function notify(s, message, type = "info") {
  s.notifications.push({ id: s.nextId++, message, type });
  s.notifications = s.notifications.slice(-10);
}
function unlock(s, id) {
  if (!s.achievements.includes(id)) {
    s.achievements.push(id);
    notify(s, `Achievement: ${id}`, "achievement");
  }
}
function pay(s, amount) {
  if (s.cash < amount) return false;
  s.cash = round(s.cash - amount);
  s.ledger.expenses += amount;
  s.stats.spent += amount;
  return true;
}
function earn(s, amount, tip = false) {
  s.cash = round(s.cash + amount);
  s.stats.earned += amount;
  if (tip) s.ledger.tips += amount;
  else s.ledger.income += amount;
}
function nightInfo(s) {
  return NIGHTS[Math.min(s.night - 1, 6)];
}
function roomPrice(s, r) {
  return ({ value: 75, standard: 100, premium: 130 }[s.rate] || 100) + r.quality * 25;
}
function roomStatus(r) {
  return !r.open ? "Closed" : r.job ? { clean: "Cleaning", repair: "Repairing", service: "Guest service" }[r.job.type] || "Working" : r.guest ? "Occupied" : r.clean < 75 ? "Needs cleaning" : r.condition < 35 ? "Needs repair" : "Ready";
}
function quote(s, r, g) {
  const price = roomPrice(s, r);
  let happiness = 88;
  happiness -= Math.max(0, g.comfort - r.quality) * 14;
  happiness += Math.max(0, r.quality - g.comfort) * 4;
  happiness -= Math.max(0, 80 - r.condition) * 0.35;
  if (g.quiet && !r.quiet && !s.upgrades.includes("insulation")) happiness -= 12;
  if (s.upgrades.includes("coffee")) happiness += 6;
  if (s.upgrades.includes("garden")) happiness += 4;
  if (s.rate === "value") happiness += 5;
  return { price, happiness: clamp(Math.round(happiness), 10, 100), affordable: price <= g.budget };
}
function guest(s, index) {
  const archetype = pick(s, GUESTS.filter((g) => s.night > 2 || g.comfort < 2));
  return { ...archetype, id: "g" + s.nextId++, name: pick(s, NAMES), budget: archetype.budget + (s.night > 4 ? 10 : 0), arrive: 20 + index * 29 + Math.floor(random(s) * 12), patience: Math.round(80 * DIFFICULTIES[s.difficulty].patience), wait: 0 };
}
function openNight(s) {
  if (s.phase !== "prep") return fail("This night has already opened.");
  if (s.playerJob || s.rooms.some((r) => r.job)) return fail("Finish the current work before opening.");
  s.phase = "night";
  s.minute = 0;
  s.queue = [];
  s.event = null;
  s.eventIndex = 0;
  s.emergencyDelivery = false;
  s.ledger = { income: 0, expenses: 0, tips: 0, guests: 0 };
  let demand = nightInfo(s).demand + (s.upgrades.includes("sign") ? 1 : 0) + (s.rep >= 80 ? 1 : 0) + (s.endless ? Math.min(4, Math.floor((s.night - 7) / 3)) : 0);
  s.arrivals = Array.from({ length: demand }, (_, i) => guest(s, i));
  const span = 390 / Math.max(1, demand - 1);
  s.arrivals.forEach((g, i) => g.arrive = Math.round(8 + i * span));
  s.energy = clamp(s.energy + 20, 0, 100);
  log(s, `Night ${s.night}: ${nightInfo(s).title}. The office is open.`);
  return ok("The vacancy light is on.");
}
const ok = (message) => ({ ok: true, message });
const fail = (message) => ({ ok: false, message });
function canManage(s) {
  return ["prep", "night"].includes(s.phase) && !s.event;
}
function checkIn(s, guestId, roomId) {
  if (s.phase !== "night" || s.event) return fail("The office is not taking check-ins right now.");
  const g = s.queue.find((g2) => g2.id === guestId), r = s.rooms.find((r2) => r2.id === Number(roomId));
  if (!g || !r) return fail("Select a waiting guest and a room.");
  if (roomStatus(r) !== "Ready") return fail("That room is not ready.");
  const q = quote(s, r, g);
  if (!q.affordable) return fail("That room costs more than this guest\u2019s budget. Lower the rate or choose another room.");
  r.guest = { ...g, happiness: q.happiness, paid: q.price, requestAt: s.minute + 45 + Math.floor(random(s) * 100), requestMade: false };
  r.request = null;
  s.queue = s.queue.filter((x) => x.id !== guestId);
  earn(s, q.price);
  s.stats.hosted++;
  s.ledger.guests++;
  log(s, `${g.name} checked into ${r.number} for $${q.price}.`);
  unlock(s, "first");
  if (s.rooms.filter((r2) => r2.guest).length >= 6) unlock(s, "full");
  if (s.stats.hosted >= 50) unlock(s, "fifty");
  return ok(`${g.name} \u2192 Room ${r.number} \xB7 +$${q.price}`);
}
function turnAway(s, id) {
  if (!canManage(s) || s.phase !== "night") return fail("The desk is closed.");
  const g = s.queue.find((g2) => g2.id === id);
  if (!g) return fail("That guest has left.");
  s.queue = s.queue.filter((x) => x.id !== id);
  s.stats.turned++;
  log(s, `${g.name} was referred to another motel.`);
  return ok("You gave them directions to the next motel.");
}
function jobCost(type, r) {
  return type === "clean" ? { cash: 0, supplies: 1, duration: 26 } : type === "repair" ? { cash: 18, supplies: 1, duration: 34 } : { cash: 0, supplies: r.request?.supplies || 0, duration: r.request?.duration || 12 };
}
function startJob(s, roomId, type, worker = "player") {
  if (!canManage(s)) return fail("Finish the current decision first.");
  const r = s.rooms.find((r2) => r2.id === Number(roomId));
  if (!r?.open || r.job) return fail("That room is unavailable or already being worked on.");
  if (type === "clean" && (r.guest || r.clean >= 100)) return fail("Only empty rooms that need cleaning can be cleaned.");
  if (type === "repair" && r.condition >= 100) return fail("This room is already in good repair.");
  if (type === "service" && (!r.guest || !r.request)) return fail("There is no request in this room.");
  if (!["clean", "repair", "service"].includes(type)) return fail("Unknown task.");
  if (worker === "player" && s.playerJob) return fail("You are already working. Let the current task finish.");
  const employee = worker === "player" ? null : s.staff.find((x) => x.id === worker);
  if (worker !== "player" && (!employee || employee.job || !employee.active)) return fail("That staff member is unavailable.");
  const cost = jobCost(type, r);
  if (s.supplies < cost.supplies) return fail("You need more supplies. Order them from the office.");
  if (s.cash < cost.cash) return fail("You need $18 for replacement parts.");
  pay(s, cost.cash);
  s.supplies -= cost.supplies;
  const speed = employee ? STAFF.find((x) => x.id === employee.id)?.speed || 1 : 1;
  const energyFactor = s.energy < 25 ? 1.3 : 1;
  let duration = cost.duration * energyFactor / speed;
  if (type === "clean" && s.upgrades.includes("laundry")) duration *= 0.65;
  if (type === "repair" && s.upgrades.includes("tools")) duration *= 0.65;
  r.job = { type, worker, remaining: duration, total: duration };
  if (employee) employee.job = r.id;
  else s.playerJob = r.id;
  s.energy = clamp(s.energy - 3, 0, 100);
  return ok(`${type === "clean" ? "Cleaning" : type === "repair" ? "Repairing" : "Helping"} room ${r.number}.`);
}
function finishJob(s, r) {
  const { type, worker } = r.job;
  if (type === "clean") {
    r.clean = 100;
    s.stats.cleaned++;
  }
  if (type === "repair") {
    r.condition = 100;
    s.stats.repaired++;
    if (r.guest) r.guest.happiness = clamp(r.guest.happiness + 5, 0, 100);
  }
  if (type === "service") {
    if (r.guest) {
      r.guest.happiness = clamp(r.guest.happiness + 12, 0, 100);
      s.stats.requests++;
      earn(s, 4, true);
      if (s.stats.requests >= 10) unlock(s, "care");
    }
    r.request = null;
  }
  if (worker === "player") s.playerJob = null;
  else {
    const employee = s.staff.find((x) => x.id === worker);
    if (employee) employee.job = null;
  }
  r.job = null;
  notify(s, `Room ${r.number}: ${type === "clean" ? "clean and ready" : type === "repair" ? "repairs complete" : "request resolved"}.`, "success");
}
function autoStaff(s) {
  for (const w of s.staff) {
    if (!w.active || w.job) continue;
    let r, type;
    if (w.id === "rosa") {
      type = "clean";
      r = s.rooms.find((r2) => r2.open && !r2.guest && !r2.job && r2.clean < 75);
    }
    if (w.id === "eli") {
      type = "repair";
      r = s.rooms.find((r2) => r2.open && !r2.job && r2.condition < 65);
    }
    if (w.id === "june") {
      type = "service";
      r = s.rooms.find((r2) => r2.open && !r2.job && r2.request);
    }
    if (r) startJob(s, r.id, type, w.id);
  }
}
function tick(s, minutes) {
  if (!["prep", "night"].includes(s.phase) || s.event) return;
  let remaining = clamp(Number(minutes) || 0, 0, 60);
  while (remaining > 0 && !s.event && ["prep", "night"].includes(s.phase)) {
    const dt = Math.min(1, remaining);
    remaining -= dt;
    autoStaff(s);
    for (const r of s.rooms) {
      if (r.job) {
        r.job.remaining -= dt;
        if (r.job.remaining <= 0) finishJob(s, r);
      }
    }
    if (s.phase === "prep") continue;
    s.minute = Math.min(480, s.minute + dt);
    const due = s.arrivals.filter((g) => g.arrive <= s.minute);
    s.arrivals = s.arrivals.filter((g) => g.arrive > s.minute);
    for (const g of due) {
      s.queue.push(g);
      notify(s, `${g.name} is waiting at the office.`);
    }
    for (const g of [...s.queue]) {
      g.wait += dt;
      if (g.wait >= g.patience) {
        s.queue = s.queue.filter((x) => x.id !== g.id);
        s.rep = clamp(s.rep - 1, 0, 100);
        s.stats.turned++;
        log(s, `${g.name} left after waiting too long.`);
        notify(s, "A traveler left the queue. \u22121 reputation.", "warning");
      }
    }
    for (const r of s.rooms) {
      if (!r.guest) continue;
      const g = r.guest;
      if (!g.requestMade && s.minute >= g.requestAt && s.minute < 440) {
        g.requestMade = true;
        if (random(s) < 0.7) {
          r.request = { ...pick(s, REQUESTS), remaining: 95, total: 95 };
          notify(s, `Room ${r.number} has a guest request.`);
        }
      }
      if (r.request && !r.job) {
        r.request.remaining -= dt;
        if (r.request.remaining <= 0) {
          g.happiness = clamp(g.happiness - 18, 0, 100);
          r.request = null;
          log(s, `Room ${r.number}'s request was left unanswered.`);
        }
      }
    }
    const times = [115, 300];
    if (s.eventIndex < 2 && s.minute >= times[s.eventIndex]) {
      const key = nightInfo(s).events[s.eventIndex];
      s.event = key;
      s.eventIndex++;
      log(s, EVENTS[key].title);
      break;
    }
    if (s.minute >= 480) {
      endNight(s);
      break;
    }
  }
  checkAchievements(s);
}
function checkAchievements(s) {
  if (s.rep >= 80) unlock(s, "kind");
  if (s.rooms.some((r) => r.quality === 3)) unlock(s, "luxury");
  if (s.rooms.every((r) => r.open)) unlock(s, "expand");
  if (s.staff.length === 3) unlock(s, "team");
}
function chooseEvent(s, index) {
  if (!s.event) return fail("There is no decision waiting.");
  const choice = EVENTS[s.event]?.choices[index];
  if (!choice) return fail("Choose an available response.");
  if (s.cash < (choice.cost || 0)) return fail("You do not have enough cash.");
  if (s.supplies + Math.min(0, choice.supplies || 0) < 0) return fail("You do not have enough supplies.");
  if (choice.cost) pay(s, choice.cost);
  if (choice.cash) earn(s, choice.cash, true);
  if (choice.rep) s.rep = clamp(s.rep + choice.rep, 0, 100);
  if (choice.energy) s.energy = clamp(s.energy + choice.energy, 0, 100);
  if (choice.supplies) s.supplies += choice.supplies;
  for (const r of s.rooms.filter((r2) => r2.open)) {
    if (choice.happiness && r.guest) r.guest.happiness = clamp(r.guest.happiness + choice.happiness, 0, 100);
    if (choice.condition) r.condition = clamp(r.condition + choice.condition, 0, 100);
  }
  if (choice.special === "review") {
    const rooms = s.rooms.filter((r) => r.open);
    s.rep = clamp(s.rep + (rooms.reduce((n, r) => n + r.quality, 0) / rooms.length >= 1 ? 6 : 2), 0, 100);
  }
  if (choice.special === "grant" && s.rep >= 70) {
    s.debt = Math.max(0, s.debt - 250);
    notify(s, "Heritage grant approved. Your debt fell by $250.", "success");
  }
  if (choice.extra) {
    const g = guest(s, 0);
    g.arrive = s.minute + 10;
    s.arrivals.push(g);
  }
  s.eventHistory.push({ night: s.night, event: s.event, choice: index });
  log(s, choice.label);
  s.event = null;
  checkAchievements(s);
  return ok(choice.label);
}
function buySupplies(s, count = 6) {
  if (!canManage(s)) return fail("Finish the current decision first.");
  if (![6, 12].includes(count)) return fail("Choose six or twelve supplies.");
  const cost = count === 12 ? 82 : 45;
  if (!pay(s, cost)) return fail(`You need $${cost} for this delivery.`);
  s.supplies += count;
  return ok(`${count} supplies delivered.`);
}
function emergencySupplies(s) {
  if (!canManage(s)) return fail("Finish the current decision first.");
  if (s.emergencyDelivery) return fail("The supplier can only extend credit once per night.");
  s.supplies += 4;
  s.debt += 45;
  s.emergencyDelivery = true;
  log(s, "Four supplies ordered on credit. $45 added to the debt.");
  return ok("4 supplies delivered. $45 added to your debt.");
}
function setRate(s, rate) {
  if (!canManage(s) || !["value", "standard", "premium"].includes(rate)) return fail("Choose an available room rate.");
  s.rate = rate;
  return ok("Room rates updated. Existing bookings keep their price.");
}
function upgradeRoom(s, id) {
  if (s.phase !== "prep") return fail("Renovations happen between nights.");
  const r = s.rooms.find((r2) => r2.id === Number(id));
  if (!r?.open || r.job || r.quality >= 3) return fail("This room cannot be upgraded right now.");
  const cost = [130, 190, 270][r.quality];
  if (!pay(s, cost)) return fail(`You need $${cost} for this renovation.`);
  r.quality++;
  r.clean = 100;
  r.condition = 100;
  s.stats.upgraded++;
  checkAchievements(s);
  return ok(`Room ${r.number} is now quality ${r.quality}.`);
}
function expandRoom(s, id) {
  if (s.phase !== "prep") return fail("Reopen rooms between nights.");
  const r = s.rooms.find((r2) => r2.id === Number(id));
  if (!r || r.open) return fail("This room is already open.");
  const cost = 280 + (s.rooms.filter((r2) => r2.open).length - 6) * 60;
  if (!pay(s, cost)) return fail(`You need $${cost} to reopen the next room.`);
  r.open = true;
  r.clean = 100;
  r.condition = 100;
  r.quality = 0;
  checkAchievements(s);
  return ok(`Room ${r.number} is open for business.`);
}
function buyUpgrade(s, id) {
  if (s.phase !== "prep") return fail("Install improvements between nights.");
  const u = UPGRADES.find((u2) => u2.id === id);
  if (!u || s.upgrades.includes(id)) return fail("That improvement is already installed.");
  if (!pay(s, u.cost)) return fail(`You need $${u.cost} for this improvement.`);
  s.upgrades.push(id);
  if (["sign", "garden"].includes(id)) s.rep = clamp(s.rep + 4, 0, 100);
  return ok(`${u.name} installed.`);
}
function hireStaff(s, id) {
  if (s.phase !== "prep") return fail("Hire your team between nights.");
  const w = STAFF.find((w2) => w2.id === id);
  if (!w || s.staff.some((w2) => w2.id === id)) return fail("That person is already on the team.");
  if (!pay(s, w.hire)) return fail(`You need $${w.hire} to hire ${w.name}.`);
  s.staff.push({ id, active: true, job: null });
  checkAchievements(s);
  return ok(`${w.name} joined the team.`);
}
function toggleStaff(s, id) {
  if (s.phase !== "prep") return fail("Set shifts before opening.");
  const w = s.staff.find((w2) => w2.id === id);
  if (!w || w.job) return fail("Wait until this task is finished.");
  w.active = !w.active;
  return ok(`${STAFF.find((x) => x.id === id).name} is ${w.active ? "working" : "off"} tonight.`);
}
function rest(s) {
  if (!canManage(s) || s.playerJob) return fail("Finish your current task first.");
  if (!pay(s, 12)) return fail("You need $12 for a meal break.");
  s.energy = clamp(s.energy + 35, 0, 100);
  return ok("A hot meal. Team energy restored by 35.");
}
function takeLoan(s) {
  if (!canManage(s) || s.loan || s.endless) return fail("The emergency loan is unavailable.");
  s.cash += 350;
  s.debt += 450;
  s.loan = true;
  log(s, "Emergency loan accepted: $350 now, $450 due at the end.");
  return ok("$350 received. $450 added to the debt.");
}
function endNight(s) {
  let happiness = 0, guests = 0, repChange = 0;
  for (const r of s.rooms) {
    if (r.job) {
      if (r.job.worker === "player") s.playerJob = null;
      else {
        const w = s.staff.find((w2) => w2.id === r.job.worker);
        if (w) w.job = null;
      }
      r.job = null;
    }
    if (!r.guest) continue;
    const g = r.guest;
    guests++;
    if (r.request) g.happiness = clamp(g.happiness - 12, 0, 100);
    happiness += g.happiness;
    const tip = g.happiness >= 75 ? Math.round(g.tip * (g.happiness / 100)) : 0;
    if (tip) earn(s, tip, true);
    repChange += g.happiness >= 85 ? 1.5 : g.happiness >= 65 ? 0.4 : g.happiness >= 45 ? -1 : -3;
    r.clean = clamp(r.clean - 50 - Math.floor(random(s) * 25), 0, 100);
    r.condition = clamp(r.condition - (7 + random(s) * 8) * DIFFICULTIES[s.difficulty].wear, 0, 100);
    r.guest = null;
    r.request = null;
  }
  s.rep = clamp(round(s.rep + repChange), 0, 100);
  const wages = s.staff.filter((w) => w.active).reduce((n, w) => n + STAFF.find((x) => x.id === w.id).wage, 0);
  const utilities = 45 + s.rooms.filter((r) => r.open).length * 5;
  const credit = s.endless ? s.debt : 0;
  const expenses = wages + utilities + credit;
  if (s.endless) s.debt = 0;
  s.cash = round(s.cash - expenses);
  s.ledger.expenses += expenses;
  s.stats.spent += expenses;
  const report = { night: s.night, ...s.ledger, wages, utilities, credit, profit: round(s.ledger.income + s.ledger.tips - s.ledger.expenses), happiness: guests ? Math.round(happiness / guests) : 0, repChange: round(repChange), rep: s.rep, cash: s.cash };
  s.lastReport = report;
  s.history.push(report);
  s.queue = [];
  s.arrivals = [];
  s.playerJob = null;
  s.energy = clamp(s.energy + 35, 0, 100);
  s.phase = "report";
  checkAchievements(s);
  log(s, `Sunrise. ${guests} guests; net $${report.profit}.`);
  if (s.cash < 0) {
    s.outcome = { won: false, title: "The light goes quiet", text: "The bills overtook the register. The motel closes, but every traveler you helped will remember the stop.", reason: "insolvent" };
    s.phase = "ending";
  } else if (s.night === 7 && !s.endless) {
    const won = s.cash >= s.debt && s.rep >= 40;
    if (won) {
      s.stats.spent += s.debt;
      s.cash = round(s.cash - s.debt);
      s.debt = 0;
      unlock(s, "finish");
      if (s.difficulty === "hard") unlock(s, "hard");
      if (s.rep >= 85) unlock(s, "perfect");
      if (!s.loan) unlock(s, "honest");
    }
    s.outcome = { won, title: won ? s.rep >= 85 ? "A roadside landmark" : "A place worth keeping" : s.cash < s.debt ? "One week wasn\u2019t enough" : "An empty reputation", text: won ? s.rep >= 85 ? "The debt is gone. The rooms are full. People are taking the long way just to stay here. Your dad\u2019s little motel has become a destination." : "At sunrise, you settle the last of the debt. The keys are yours for good. Somewhere out on Route 86, another traveler is looking for your light." : s.cash < s.debt ? "You kept the doors open, but the final balance falls short. Next time, weigh every renovation against the cash you need at sunrise." : "The debt is covered, but too many guests left unhappy. A motel is more than its rooms. Next time, make room for the people.", reason: won ? "paid" : s.cash < s.debt ? "debt" : "reputation" };
    s.phase = "ending";
  }
}
function nextNight(s) {
  if (s.phase !== "report") return fail("Finish the current night first.");
  s.night++;
  s.phase = "prep";
  s.minute = 0;
  s.eventIndex = 0;
  s.event = null;
  s.emergencyDelivery = false;
  return ok(`Prepare for night ${s.night}.`);
}
function continueEndless(s) {
  if (s.phase !== "ending" || !s.outcome?.won) return fail("Finish the campaign successfully to unlock endless mode.");
  s.endless = true;
  s.phase = "prep";
  s.night++;
  s.minute = 0;
  s.outcome = null;
  s.eventIndex = 0;
  s.event = null;
  return ok("The road goes on. Welcome to endless mode.");
}
function score(s) {
  return Math.max(0, Math.round(s.stats.hosted * 40 + s.rep * 25 + s.rooms.filter((r) => r.open).reduce((n, r) => n + r.quality * 100, 0) + Math.max(0, s.cash - s.debt) + (s.outcome?.won ? 2e3 : 0)));
}
function serialize(s) {
  return JSON.stringify({ format: "last-stop-motel", schema: 1, savedAt: (/* @__PURE__ */ new Date()).toISOString(), state: s });
}
function deserialize(text) {
  const data = JSON.parse(text);
  if (data?.format !== "last-stop-motel" || data.schema !== 1) throw new Error("This is not a compatible Last Stop Motel save.");
  const raw = data.state;
  if (!raw || !Object.hasOwn(DIFFICULTIES, raw.difficulty) || !Number.isInteger(raw.night) || raw.night < 1 || raw.night > 1e5 || !["prep", "night", "report", "ending"].includes(raw.phase)) throw new Error("The save contains invalid game data.");
  const base = newGame(raw.difficulty, raw.seed), num = (v, a, b) => typeof v === "number" && Number.isFinite(v) && v >= a && v <= b;
  for (const k of ["cash", "debt", "rep", "supplies", "energy", "minute", "nextId", "seed"]) if (!num(raw[k], k === "cash" ? -1e5 : 0, k === "rep" || k === "energy" ? 100 : k === "minute" ? 480 : 4294967295)) throw new Error(`Invalid ${k} in save.`);
  if (!Array.isArray(raw.rooms) || raw.rooms.length !== 10 || !Array.isArray(raw.queue) || !Array.isArray(raw.arrivals) || !Array.isArray(raw.staff) || !Array.isArray(raw.history) || !Array.isArray(raw.upgrades) || !Array.isArray(raw.achievements)) throw new Error("The save is incomplete.");
  const validGuest = (g) => g === null || g && typeof g.id === "string" && g.id.length < 80 && typeof g.name === "string" && g.name.length < 100 && GUESTS.some((a) => a.title === g.title) && num(g.budget, 0, 1e4) && num(g.wait, 0, 1e3) && num(g.patience, 1, 1e3) && num(g.comfort, 0, 3) && typeof g.quiet === "boolean" && num(g.tip, 0, 1e3) && num(g.arrive, 0, 1e5) && num(g.color, 0, 16777215);
  const validRequest = (r) => r === null || r && REQUESTS.some((x) => x.id === r.id) && num(r.remaining, 0, 1e3) && num(r.total, 1, 1e3) && num(r.supplies, 0, 5) && num(r.duration, 1, 1e3);
  const validJob = (j) => j === null || j && ["clean", "repair", "service"].includes(j.type) && ["player", ...STAFF.map((x) => x.id)].includes(j.worker) && num(j.remaining, 0, 1e3) && num(j.total, 1, 1e3);
  for (let i = 0; i < 10; i++) {
    const r = raw.rooms[i];
    if (!r || r.id !== i + 1 || r.number !== 101 + i || typeof r.open !== "boolean" || typeof r.quiet !== "boolean" || !Number.isInteger(r.quality) || !num(r.quality, 0, 3) || !num(r.clean, 0, 100) || !num(r.condition, 0, 100) || !validGuest(r.guest) || !validRequest(r.request) || !validJob(r.job)) throw new Error("A room in the save is invalid.");
    if (r.guest && (!num(r.guest.happiness, 0, 100) || !num(r.guest.paid, 0, 1e4) || !num(r.guest.requestAt, 0, 1e4) || typeof r.guest.requestMade !== "boolean")) throw new Error("Invalid guest data.");
  }
  if (!raw.queue.every((g) => g !== null && validGuest(g)) || !raw.arrivals.every((g) => g !== null && validGuest(g)) || raw.queue.length > 100 || raw.arrivals.length > 100 || !raw.upgrades.every((id) => UPGRADES.some((x) => x.id === id)) || new Set(raw.upgrades).size !== raw.upgrades.length || raw.staff.length > 3) throw new Error("Invalid bookings or improvements.");
  if (!raw.staff.every((w) => STAFF.some((x) => x.id === w.id) && typeof w.active === "boolean" && (w.job === null || Number.isInteger(w.job) && w.job >= 1 && w.job <= 10)) || new Set(raw.staff.map((x) => x.id)).size !== raw.staff.length) throw new Error("Invalid staff data.");
  if (!["value", "standard", "premium"].includes(raw.rate) || raw.event !== null && !Object.hasOwn(EVENTS, raw.event) || !Number.isInteger(raw.eventIndex) || !num(raw.eventIndex, 0, 2)) throw new Error("Invalid campaign state.");
  for (const k of Object.keys(base.stats)) if (!num(raw.stats?.[k], 0, 1e10)) throw new Error("Invalid statistics.");
  for (const k of Object.keys(base.ledger)) if (!num(raw.ledger?.[k], 0, 1e10)) throw new Error("Invalid ledger.");
  if (!raw.history.every((r) => r && ["night", "income", "expenses", "tips", "guests", "wages", "utilities", "profit", "happiness", "repChange", "rep", "cash"].every((k) => num(r[k], -1e10, 1e10)))) throw new Error("Invalid night history.");
  const workers = /* @__PURE__ */ new Set();
  for (const r of raw.rooms.filter((r2) => r2.job)) {
    const w = r.job.worker;
    if (workers.has(w) || w === "player" && raw.playerJob !== r.id || w !== "player" && !raw.staff.some((x) => x.id === w && x.job === r.id)) throw new Error("Invalid job assignment.");
    workers.add(w);
  }
  if (raw.playerJob !== null && !raw.rooms.some((r) => r.id === raw.playerJob && r.job?.worker === "player")) throw new Error("Invalid player assignment.");
  for (const w of raw.staff) if (w.job !== null && !raw.rooms.some((r) => r.id === w.job && r.job?.worker === w.id)) throw new Error("Invalid staff assignment.");
  for (const k of ["endless", "loan", "emergencyDelivery", "seenIntro"]) if (typeof raw[k] !== "boolean") throw new Error("Invalid game flags.");
  if (raw.phase === "ending" && (!raw.outcome || typeof raw.outcome.won !== "boolean" || typeof raw.outcome.title !== "string" || typeof raw.outcome.text !== "string")) throw new Error("Invalid ending.");
  if (raw.phase === "report" && (!raw.lastReport || !raw.history.some((r) => r.night === raw.night && r.night === raw.lastReport.night))) throw new Error("Missing nightly report.");
  const clean = {};
  for (const key of Object.keys(base)) clean[key] = raw[key] ?? base[key];
  clean.playerJob = raw.playerJob;
  clean.event = raw.event;
  clean.outcome = raw.outcome;
  clean.notifications = [];
  clean.log = Array.isArray(raw.log) ? raw.log.slice(0, 50).filter((x) => x && typeof x.message === "string" && x.message.length < 500 && num(x.night, 0, 1e5) && num(x.time, 0, 480)) : [];
  clean.eventHistory = Array.isArray(raw.eventHistory) ? raw.eventHistory.filter((x) => x && Object.hasOwn(EVENTS, x.event) && Number.isInteger(x.choice) && EVENTS[x.event].choices[x.choice]) : [];
  clean.lastReport = raw.lastReport && raw.history.some((x) => x.night === raw.lastReport.night) ? raw.history.find((x) => x.night === raw.lastReport.night) : null;
  return clean;
}
export {
  buySupplies,
  buyUpgrade,
  checkIn,
  chooseEvent,
  clamp,
  continueEndless,
  deserialize,
  emergencySupplies,
  expandRoom,
  hireStaff,
  log,
  newGame,
  nextNight,
  nightInfo,
  openNight,
  quote,
  random,
  rest,
  roomPrice,
  roomStatus,
  score,
  serialize,
  setRate,
  startJob,
  takeLoan,
  tick,
  toggleStaff,
  turnAway,
  unlock,
  upgradeRoom
};
