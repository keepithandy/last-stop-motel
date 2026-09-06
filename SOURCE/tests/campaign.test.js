import test from "node:test";
import assert from "node:assert/strict";
import * as E from "../src/engine.js";
import { EVENTS, DIFFICULTIES, STAFF } from "../src/content.js";
function resolveEvent(s) {
  const choices = EVENTS[s.event].choices;
  const feasible = choices.map((c, i) => ({ c, i })).filter(({ c }) => s.cash >= (c.cost || 0) && s.supplies + Math.min(0, c.supplies || 0) >= 0);
  const pick = feasible.sort((a, b) => (b.c.rep || 0) * 8 + (b.c.happiness || 0) * 2 - (b.c.cost || 0) + (b.c.special === "grant" ? 1e3 : 0) - ((a.c.rep || 0) * 8 + (a.c.happiness || 0) * 2 - (a.c.cost || 0) + (a.c.special === "grant" ? 1e3 : 0)))[0];
  assert.ok(pick, "Every event needs an affordable response");
  assert.ok(E.chooseEvent(s, pick.i).ok);
}
function prepare(s, strategy = "careful") {
  if (strategy === "invest" && s.night === 2) {
    E.expandRoom(s, 7);
    E.hireStaff(s, "rosa");
  }
  if (strategy === "invest" && s.night === 3) {
    E.buyUpgrade(s, "coffee");
    E.upgradeRoom(s, 1);
  }
  if (s.supplies < 10 && s.cash >= 82) E.buySupplies(s, 12);
  let steps = 0;
  while (steps++ < 1e3) {
    const r = s.rooms.find((r2) => r2.open && !r2.job && (r2.clean < 75 || r2.condition < 60));
    if (r && !s.playerJob) {
      if (s.supplies === 0) {
        if (s.cash >= 45) E.buySupplies(s, 6);
        else E.emergencySupplies(s);
      }
      const result = E.startJob(s, r.id, r.clean < 75 ? "clean" : "repair");
      assert.ok(result.ok, result.message);
    }
    if (!r && !s.rooms.some((r2) => r2.job)) break;
    E.tick(s, 1);
  }
  assert.ok(steps < 1e3, "Preparation must finish");
  assert.ok(E.openNight(s).ok);
}
function simulate(difficulty, seed, strategy = "careful", roundtrip = false) {
  let s = E.newGame(difficulty, seed);
  let steps = 0;
  while (s.phase !== "ending" && steps++ < 1e4) {
    if (s.phase === "prep") prepare(s, strategy);
    if (s.phase === "report") {
      assert.ok(E.nextNight(s).ok);
      continue;
    }
    if (s.event) {
      resolveEvent(s);
      continue;
    }
    for (const g of [...s.queue]) {
      const options = s.rooms.filter((r) => E.roomStatus(r) === "Ready" && E.quote(s, r, g).affordable).sort((a, b) => E.quote(s, b, g).happiness - E.quote(s, a, g).happiness || E.roomPrice(s, b) - E.roomPrice(s, a));
      if (options.length) assert.ok(E.checkIn(s, g.id, options[0].id).ok);
      else E.turnAway(s, g.id);
    }
    if (!s.playerJob) {
      const r = s.rooms.find((r2) => r2.request && !r2.job);
      if (r) {
        if (s.supplies === 0 && s.cash >= 45) E.buySupplies(s, 6);
        E.startJob(s, r.id, "service");
      }
    }
    E.tick(s, 1);
    if (roundtrip && steps % 37 === 0) s = E.deserialize(E.serialize(s));
  }
  assert.ok(steps < 1e4, "Campaign terminates");
  return s;
}
test("all three difficulties can finish the full campaign across varied seeds", () => {
  for (const difficulty of Object.keys(DIFFICULTIES)) for (let seed = 1; seed <= 24; seed++) {
    const s = simulate(difficulty, seed, seed % 2 ? "careful" : "invest", seed === 1);
    assert.equal(s.night, 7);
    assert.equal(s.history.length, 7);
    assert.equal(s.eventHistory.length, 14);
    assert.equal(s.phase, "ending");
    assert.ok(s.outcome.won, `${difficulty} seed ${seed}: cash=${s.cash}, debt=${s.debt}, rep=${s.rep}`);
    assert.equal(s.debt, 0);
  }
});
test("a completed campaign continues into playable endless nights", () => {
  const s = simulate("standard", 8);
  assert.ok(E.continueEndless(s).ok);
  assert.equal(s.night, 8);
  assert.equal(s.phase, "prep");
  assert.equal(s.debt, 0);
  prepare(s);
  while (s.phase === "night") {
    if (s.event) resolveEvent(s);
    else E.tick(s, 1);
  }
  assert.equal(s.phase, "report");
  assert.ok(E.nextNight(s).ok);
  assert.equal(s.night, 9);
});
test("inactivity produces a real losing ending and cannot unlock endless mode", () => {
  const s = E.newGame("standard", 31);
  for (let i = 0; i < 7 && s.phase !== "ending"; i++) {
    E.openNight(s);
    while (s.phase === "night") {
      if (s.event) resolveEvent(s);
      else E.tick(s, 60);
    }
    if (s.phase === "report") E.nextNight(s);
  }
  assert.equal(s.phase, "ending");
  assert.equal(s.outcome.won, false);
  assert.equal(E.continueEndless(s).ok, false);
});
test("unaffordable or occupied room assignments do not charge or remove travelers", () => {
  const s = E.newGame("standard", 4);
  E.openNight(s);
  E.tick(s, 10);
  const g = s.queue[0];
  s.rate = "premium";
  const r = s.rooms[0];
  r.quality = 3;
  const before = s.cash;
  assert.equal(E.checkIn(s, g.id, r.id).ok, false);
  assert.equal(s.cash, before);
  assert.equal(s.queue[0].id, g.id);
  s.rate = "value";
  r.quality = 0;
  assert.ok(E.checkIn(s, g.id, r.id).ok);
  assert.equal(s.cash, before + 75);
  assert.equal(E.checkIn(s, g.id, r.id).ok, false);
  assert.equal(s.cash, before + 75);
});
test("cleaning consumes one supply, completes over time, and blocks double booking of a worker", () => {
  const s = E.newGame("standard", 10);
  const n = s.supplies;
  assert.ok(E.startJob(s, 2, "clean").ok);
  assert.equal(s.supplies, n - 1);
  assert.equal(E.startJob(s, 5, "clean").ok, false);
  assert.equal(E.openNight(s).ok, false);
  E.tick(s, 30);
  assert.equal(s.rooms[1].clean, 100);
  assert.equal(s.playerJob, null);
  assert.equal(s.rooms[1].job, null);
});
test("hired staff work independently and wages match active shifts", () => {
  const s = E.newGame("relaxed", 15);
  E.hireStaff(s, "rosa");
  E.hireStaff(s, "eli");
  E.tick(s, 1);
  assert.equal(s.rooms[1].job.worker, "rosa");
  assert.equal(s.rooms[4].job.worker, "eli");
  assert.ok(E.startJob(s, 5, "clean").ok === false);
  E.tick(s, 60);
  E.tick(s, 60);
  assert.equal(s.rooms[1].clean, 100);
  assert.equal(s.rooms[4].condition, 100);
  E.toggleStaff(s, "eli");
  E.openNight(s);
  while (s.phase === "night") {
    if (s.event) resolveEvent(s);
    else E.tick(s, 30);
  }
  assert.equal(s.lastReport.wages, STAFF.find((w) => w.id === "rosa").wage);
});
test("upgrades and reopened rooms are real purchases with clean, functional rooms", () => {
  const s = E.newGame("relaxed", 7);
  s.cash = 5e3;
  const before = s.cash;
  assert.ok(E.upgradeRoom(s, 1).ok);
  assert.equal(s.rooms[0].quality, 1);
  assert.equal(E.roomPrice(s, s.rooms[0]), 125);
  assert.equal(s.cash, before - 130);
  assert.ok(E.expandRoom(s, 7).ok);
  assert.equal(E.roomStatus(s.rooms[6]), "Ready");
  assert.equal(s.cash, before - 410);
  E.openNight(s);
  assert.equal(E.upgradeRoom(s, 1).ok, false);
  assert.equal(E.expandRoom(s, 8).ok, false);
});
test("credits are bounded and debt is updated exactly once", () => {
  const s = E.newGame("standard", 1);
  const before = s.debt;
  assert.ok(E.emergencySupplies(s).ok);
  assert.equal(s.debt, before + 45);
  assert.equal(E.emergencySupplies(s).ok, false);
  assert.ok(E.takeLoan(s).ok);
  assert.equal(s.debt, before + 495);
  assert.equal(E.takeLoan(s).ok, false);
});
test("every scripted event has an affordable option with zero cash and supplies", () => {
  for (const id of Object.keys(EVENTS)) {
    const s = E.newGame();
    s.cash = 0;
    s.supplies = 0;
    s.phase = "night";
    s.event = id;
    const i = EVENTS[id].choices.findIndex((c) => !(c.cost > 0) && !(c.supplies < 0));
    assert.ok(i >= 0, id);
    assert.ok(E.chooseEvent(s, i).ok, id);
    assert.equal(s.event, null);
  }
});
test("low happiness, unanswered requests, and waiting have consequences", () => {
  const s = E.newGame("standard", 21);
  E.openNight(s);
  E.tick(s, 10);
  const g = s.queue[0], before = s.rep;
  g.wait = g.patience - 1;
  E.tick(s, 2);
  assert.equal(s.queue.some((x) => x.id === g.id), false);
  assert.equal(s.rep, before - 1);
  E.tick(s, 60);
  const g2 = s.queue[0];
  assert.ok(g2);
  E.checkIn(s, g2.id, 1);
  const r = s.rooms[0];
  r.request = { id: "towels", name: "Fresh towels", text: "Towels", supplies: 1, duration: 12, remaining: 1, total: 95 };
  r.guest.requestMade = true;
  const happiness = r.guest.happiness;
  E.tick(s, 2);
  assert.equal(r.request, null);
  assert.equal(r.guest.happiness, happiness - 18);
});
test("save roundtrip preserves active jobs, queues, events, and endings", () => {
  const s = E.newGame("standard", 19);
  E.startJob(s, 2, "clean");
  E.tick(s, 3);
  assert.deepEqual(E.deserialize(E.serialize(s)), { ...s, notifications: [] });
  E.tick(s, 60);
  E.openNight(s);
  E.tick(s, 60);
  assert.deepEqual(E.deserialize(E.serialize(s)), { ...s, notifications: [] });
  E.tick(s, 60);
  assert.ok(s.event);
  assert.deepEqual(E.deserialize(E.serialize(s)), { ...s, notifications: [] });
  const complete = simulate("standard", 19);
  assert.equal(E.deserialize(E.serialize(complete)).outcome.won, true);
});
test("invalid, incomplete and hostile saves are rejected without mutating the current game", () => {
  const s = E.newGame("standard", 13);
  for (const text of ["", "{}", "null", '{"format":"wrong"}']) assert.throws(() => E.deserialize(text));
  const mutate = (fn) => {
    const data = JSON.parse(E.serialize(s));
    fn(data.state);
    return JSON.stringify(data);
  };
  for (const fn of [(s2) => s2.cash = "NaN", (s2) => s2.rep = 200, (s2) => s2.rooms.pop(), (s2) => s2.rooms[0].quality = 99, (s2) => s2.rooms[0].id = 3, (s2) => s2.event = "unknown", (s2) => s2.event = "toString", (s2) => s2.difficulty = "__proto__", (s2) => s2.queue = [null], (s2) => s2.phase = "report", (s2) => s2.staff = [{ id: "invalid" }], (s2) => s2.stats = null, (s2) => s2.playerJob = 1, (s2) => s2.ledger.income = -4]) assert.throws(() => E.deserialize(mutate(fn)));
  assert.equal(s.cash, 750);
});
test("large time advances are bounded and cannot skip a story decision", () => {
  const s = E.newGame("standard", 2);
  E.openNight(s);
  E.tick(s, Infinity);
  assert.equal(s.minute, 60);
  E.tick(s, 60);
  assert.equal(s.minute, 115);
  assert.equal(s.event, "welcome");
  const minute = s.minute;
  E.tick(s, 60);
  assert.equal(s.minute, minute);
});
export {
  simulate
};
