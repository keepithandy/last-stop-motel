import * as E from "./engine.js";
import { VERSION, DIFFICULTIES, GUESTS, NIGHTS, EVENTS, UPGRADES, STAFF, ACHIEVEMENTS } from "./content.js";
import { MotelScene } from "./scene.js";
import { MotelAudio } from "./audio.js";
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const money = (n) => `${n < 0 ? "\u2212" : ""}$${Math.abs(Math.round(n)).toLocaleString("en-US")}`;
const saveKey = "last-stop-motel.save.v1", backupKey = "last-stop-motel.backup.v1", settingsKey = "last-stop-motel.settings.v1", metaKey = "last-stop-motel.meta.v1";
const defaults = { volume: 45, music: true, mute: false, quality: "high", reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches, autoPause: true, compact: false };
let settings = { ...defaults }, meta = { achievements: [], best: 0, wins: 0 }, saveAvailable = false, storageWarning = false;
try {
  const p = JSON.parse(localStorage.getItem(settingsKey) || "{}");
  for (const k of Object.keys(defaults)) if (typeof p[k] === typeof defaults[k]) settings[k] = p[k];
  settings.volume = E.clamp(settings.volume, 0, 100);
  settings.quality = settings.quality === "low" ? "low" : "high";
  const m = JSON.parse(localStorage.getItem(metaKey) || "{}");
  if (Array.isArray(m.achievements)) meta.achievements = m.achievements.filter((x) => ACHIEVEMENTS.some((a) => a.id === x));
  if (Number.isFinite(m.best)) meta.best = m.best;
  if (Number.isInteger(m.wins)) meta.wins = m.wins;
  saveAvailable = !!localStorage.getItem(saveKey);
} catch {
}
let state = E.newGame(), scene = null, active = false, paused = false, speed = 1, selectedRoom = null, selectedGuest = null, panel = "reception", modalName = null, lastUI = 0, lastSave = 0, lastPhase = "prep", lastEvent = null, difficulty = "standard", wonCounted = false;
let panelCollapsed = false;
let lastSceneFrame = 0;
const audio = new MotelAudio(settings);
function button(action, text, attrs = "", cls = "") {
  return `<button type="button" data-action="${action}" ${attrs} class="${cls}">${text}</button>`;
}
function icon(name) {
  const paths = { room: "M3 21V4h14v17M7 8h2m-2 4h2m4 5h1m3 4h4M1 21h20", desk: "M3 21v-9h18v9M1 12h22M6 12V8a6 6 0 0 1 12 0v4", office: "M3 21V8l9-5 9 5v13M8 21v-6h8v6M8 10h1m6 0h1", staff: "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 10v-3a7 7 0 0 1 14 0v3m1-16a4 4 0 0 1 0 8m2 3a6 6 0 0 1 3 5", upgrade: "m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5m-18 5 9 5 9-5", ledger: "M5 3h15v18H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm2 5h9M7 12h9m-9 4h5", settings: "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0-6v3m0 14v3M2 12h3m14 0h3M5 5l2 2m10 10 2 2M5 19l2-2M17 7l2-2", help: "M9 8a3 3 0 0 1 6 0c0 2-3 2-3 5m0 4v1M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z", play: "m8 4 12 8-12 8V4Z", pause: "M8 4v16m8-16v16", sun: "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0-7v3m0 16v3M1 12h3m16 0h3M4 4l3 3m10 10 3 3M4 20l3-3M17 7l3-3", close: "m6 6 12 12M6 18 18 6", save: "M4 3h14l3 3v15H3V3Zm3 0v6h10V3M7 21v-8h10v8" };
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${(paths[name] || paths.room).split("|").map((d) => `<path d="${d}"/>`).join("")}</svg>`;
}
const renderedMarkup = new WeakMap();
function html(el, markup) {
  if (renderedMarkup.get(el) === markup) return;
  renderedMarkup.set(el, markup);
  const focus = el.contains(document.activeElement) ? document.activeElement : null;
  const action = focus?.dataset.action, id = focus?.dataset.id, guest = focus?.dataset.guest, scroll = el.scrollTop;
  el.innerHTML = markup;
  el.scrollTop = scroll;
  if (action) {
    const candidates = [...el.querySelectorAll("[data-action]")];
    const next = candidates.find((n) => n.dataset.action === action && n.dataset.id === id && n.dataset.guest === guest);
    next?.focus({ preventScroll: true });
  }
}
function toast(message, type = "info") {
  const node = document.createElement("div");
  node.className = `toast ${type}`;
  node.textContent = message;
  $("toasts").appendChild(node);
  while ($("toasts").children.length > 3) $("toasts").firstChild.remove();
  setTimeout(() => node.remove(), 4500);
}
function save(show = false) {
  if (!active) return;
  try {
    const text = E.serialize(state);
    const previous2 = localStorage.getItem(saveKey);
    if (previous2) {
      try {
        E.deserialize(previous2);
        localStorage.setItem(backupKey, previous2);
      } catch {
      }
    }
    localStorage.setItem(saveKey, text);
    localStorage.setItem(metaKey, JSON.stringify(meta));
    saveAvailable = true;
    if (show) toast("Game saved on this device.", "success");
  } catch {
    if (!storageWarning || show) {
      toast("Browser saving is unavailable. Use Export save in Settings to keep your progress.", "warning");
      storageWarning = true;
    }
  }
}
function saveSettings() {
  try {
    localStorage.setItem(settingsKey, JSON.stringify(settings));
  } catch {
  }
  audio.update();
  scene?.setQuality(settings.quality);
  document.body.classList.toggle("reduced-motion", settings.compact || settings.reducedMotion);
  document.body.classList.toggle("mobile-compact", settings.compact);
}
function clock() {
  if (state.phase === "prep") return "BEFORE OPENING";
  const mins = (18 * 60 + Math.floor(state.minute)) % (24 * 60);
  return `${String(Math.floor(mins / 60)).padStart(2, "0")}:${String(mins % 60).padStart(2, "0")}`;
}
function run(result, options = {}) {
  if (result) {
    toast(result.message, result.ok ? "success" : "warning");
    audio.effect(result.ok ? "click" : "warning");
    if (result.ok) save();
  }
  if (options.close && result?.ok) closeModal();
  render();
  if (modalName && !["event", "report", "ending", "intro", "confirm-new"].includes(modalName)) renderModal();
  return result?.ok;
}
function startNew() {
  panelCollapsed=false;
  state = E.newGame(difficulty);
  active = true;
  paused = false;
  speed = 1;
  selectedRoom = null;
  selectedGuest = null;
  panel = "reception";
  wonCounted = false;
  lastPhase = "prep";
  lastEvent = null;
  closeModal();
  $("start-screen").hidden = true;
  audio.start();
  render();
  openModal("intro");
  save();
}
function resumeGame() {
  panelCollapsed=false;
  try {
    state = E.deserialize(localStorage.getItem(saveKey));
  } catch (error) {
    try {
      state = E.deserialize(localStorage.getItem(backupKey));
      toast("Recovered your previous automatic save.", "warning");
    } catch {
      toast("The saved game could not be read. You can import a backup from Settings.", "warning");
      return;
    }
  }
  active = true;
  paused = state.phase === "night";
  selectedRoom = null;
  selectedGuest = null;
  wonCounted = state.achievements.includes("finish");
  $("start-screen").hidden = true;
  audio.start();
  lastPhase = state.phase;
  lastEvent = state.event;
  render();
  phaseModal();
}
function renderStartCompact() {
  html($("start-screen"), `<div class="start-copy"><div class="route-tag"><span>ROUTE</span><strong>86</strong></div><p class="eyebrow">MOBILE COMPACT · 30 FPS</p><h1>Last Stop<br><em>Motel.</em></h1><p class="start-desc">Seven nights. Pocket-sized controls.</p><div class="start-actions">${saveAvailable ? button("continue", "Continue your stay", "", "primary wide") : ""}${button("new", "New campaign", "", saveAvailable ? "secondary wide" : "primary wide")}</div><p class="start-meta">THREE DIFFICULTIES <span>\xB7</span> OFFLINE PLAY <span>\xB7</span> ENDLESS MODE</p><div class="start-links">${button("help", "How to play")}${button("settings", "Settings")}${button("credits", "Credits")}</div><p class="version">VERSION ${VERSION} \xB7 LAST STOP MOTEL</p></div><div class="start-postcard"><span>TONIGHT\u2019S FORECAST</span><strong>Clear skies.<br>A few late arrivals.</strong><small>There\u2019s always someone<br>looking for a place to stop.</small></div>`);
}
function renderCompact() {
  document.body.classList.toggle("playing", active);
  document.body.classList.toggle("room-open", active && selectedRoom !== null);
  document.body.classList.toggle("panel-collapsed", panelCollapsed);
  if (!active) {
    renderStart();
    return;
  }
  const open = state.rooms.filter((r) => r.open), occupied = open.filter((r) => r.guest).length, requests = open.filter((r) => r.request).length;
  const ready = open.filter((r) => E.roomStatus(r) === "Ready").length;
  const working = state.rooms.some((r) => r.job);
  html($("topbar"), `<div class="mobile-stats"><strong class="mobile-night">N${state.night}${state.endless?'':'/7'}</strong><strong class="mobile-cash">${money(state.cash)}</strong><span title="Reputation">Rep <b>${Math.round(state.rep)}</b></span><span title="Supplies">Linen <b>${state.supplies}</b></span><span title="Occupied rooms">Beds <b>${occupied}/${open.length}</b></span></div><div class="mobile-clock"><span>${state.phase==='prep'?'Prepare rooms':clock()}${state.phase==='night'&&paused?' · PAUSED':''}</span><div>${state.phase==='prep'?button('open',working?'Working…':'Open night',working?'disabled':'','primary'):button('pause',paused?'Resume':'Pause',`aria-label="${paused?'Resume':'Pause'} game"`,'primary')}${button('speed',`${speed}×`,'aria-label="Change game speed"','secondary')}${button('settings',icon('settings'),'aria-label="Settings"','square')}</div></div>`);
  if (panel === "rooms") renderRoomsPanel(); else renderReception();
  renderRoom();
  html($("toolbar"), `<div class="dock-main">${[['reception','desk','Guests',state.queue.length],['rooms','room','Rooms',requests],['office','office','Office',0],['more','settings','More',0]].map(([a,i,t,n])=>button(a,`${icon(i)}<span>${t}</span>${n?`<b class="nav-count">${n}</b>`:''}`,'',panel===a&&!modalName?'dock-item active':'dock-item')).join('')}</div>`);
  html($("world-controls"), `<div class="camera-buttons">${button('camera-out','−','aria-label="Zoom out"')}${button('camera-in','+','aria-label="Zoom in"')}${button('camera-reset','↺','aria-label="Reset camera"')}${button('toggle-panel',panelCollapsed?'Show panel':'Hide panel',`aria-expanded="${!panelCollapsed}"`,'panel-toggle')}</div>`);
  scene?.select(selectedRoom);
  for (const n of state.notifications.splice(0)) {
    if (n.type === "achievement") {
      const id = n.message.replace("Achievement: ", "");
      const a = ACHIEVEMENTS.find((a2) => a2.id === id);
      if (a) toast(`Achievement unlocked \xB7 ${a.name}`, "achievement");
      if (!meta.achievements.includes(id)) meta.achievements.push(id);
    } else {
      toast(n.message, n.type);
      if (n.message.includes("waiting")) audio.effect("bell");
    }
  }
}
function renderReceptionCompact() {
  if(!state.queue.some(g=>g.id===selectedGuest))selectedGuest=state.queue[0]?.id||null;
  const g=state.queue.find(g=>g.id===selectedGuest);
  const roomCount=state.rooms.filter(r=>E.roomStatus(r)==='Ready').length;
  html($("left-panel"), `<div class="panel-heading"><h2>${state.phase==='prep'?'Before opening':`Guests · ${state.queue.length} waiting`}</h2>${button('toggle-panel','Hide','aria-label="Hide panel"','text-button')}</div>${state.phase==='prep'?`<div class="compact-prep"><strong>${esc(E.nightInfo(state).title)}</strong><p>${roomCount} ready rooms · ${money(state.debt)} debt</p><div class="inline-actions">${button('rooms','Prepare rooms','','primary')}${button('staff','Team','','secondary')}${button('upgrades','Improve','','secondary')}</div></div>`:g?`<div class="compact-guest"><div class="guest-tabs">${state.queue.map(x=>button('guest',esc(x.name.split(' ')[0]),`data-id="${esc(x.id)}" aria-pressed="${x.id===g.id}"`,x.id===g.id?'selected':'')).join('')}</div><div class="compact-guest-info"><strong>${esc(g.name)}</strong><span>${esc(g.title)}</span></div><p>Budget <b>${money(g.budget)}</b> · Quality ${g.comfort}${g.quiet?' · Quiet':''}</p><div class="patience" aria-label="Patience remaining"><i style="width:${E.clamp(1-g.wait/g.patience,0,1)*100}%"></i></div><div class="inline-actions">${button('assign-best','Find room',`data-id="${esc(g.id)}"`,'primary')}${button('turn-away','Refer elsewhere',`data-id="${esc(g.id)}"`,'secondary')}</div></div>`:`<div class="compact-prep"><strong>${state.arrivals.length?'Waiting for travelers.':'All arrivals complete.'}</strong><p>${roomCount} ready · ${state.arrivals.length} arrivals left${state.playerJob?' · You are working':''}</p>${button('rooms','Check rooms','','secondary')}</div>`}`);
}
function renderRoomsPanel() {
  html($("left-panel"), `<div class="panel-heading"><div><p class="eyebrow">PROPERTY REGISTER</p><h2>Your rooms</h2></div><span class="counter">${state.rooms.filter((r) => r.open).length}</span></div><div class="room-list">${state.rooms.map((r) => button("select-room", `<span class="room-number">${r.number}</span><span class="room-list-info"><strong>${r.request ? "Guest request" : E.roomStatus(r)}</strong><small>${r.open ? `Quality ${r.quality}${r.guest ? " \xB7 " + esc(r.guest.name) : " \xB7 " + money(E.roomPrice(state, r))}` : "West wing \xB7 reopen between nights"}</small></span><span class="status-dot status-${statusClass(r)}"></span>`, `data-id="${r.id}"`, selectedRoom === r.id ? "room-row selected" : "room-row")).join("")}</div><p class="panel-tip">Green: ready \xB7 Gold: occupied<br>Coral: attention \xB7 Blue: work in progress</p>`);
}
function statusClass(r) {
  return !r.open ? "closed" : r.job ? "working" : r.request ? "request" : r.guest ? "occupied" : r.clean < 75 || r.condition < 35 ? "dirty" : "ready";
}
function meter(label, n, color = "") {
  return `<div class="meter"><div><span>${label}</span><strong>${Math.round(n)}<small>/100</small></strong></div><div class="meter-track ${color}"><i style="width:${E.clamp(n, 0, 100)}%"></i></div></div>`;
}
function renderRoomCompact() {
  const el=$("room-panel");el.hidden=selectedRoom===null;
  if(selectedRoom===null)return;
  const r=state.rooms[selectedRoom-1],g=state.queue.find(g=>g.id===selectedGuest),q=g?E.quote(state,r,g):null;
  const busy=!!(r.job||state.playerJob);
  html(el,`<div class="panel-heading"><h2>Room ${r.number} <small>${E.roomStatus(r)}</small></h2>${button('close-room','Back','aria-label="Back to room list"','secondary')}</div><div class="compact-room">${r.open?`<div class="room-readout"><span>Clean <b>${Math.round(r.clean)}</b></span><span>Condition <b>${Math.round(r.condition)}</b></span><span>Quality <b>${r.quality}/3</b></span><strong>${money(E.roomPrice(state,r))}</strong></div>${g&&E.roomStatus(r)==='Ready'?`<div class="compact-booking"><p>${esc(g.name)} · Happiness ${q.happiness}/100</p>${button('check-in',q.affordable?`Check in · ${money(q.price)}`:'Above guest budget',`data-id="${r.id}" data-guest="${esc(g.id)}" ${!q.affordable?'disabled':''}`,'primary wide')}</div>`:''}${r.guest?`<p class="compact-occupant">${esc(r.guest.name)} · Happiness <b>${Math.round(r.guest.happiness)}/100</b></p>`:''}${r.request?`<div class="compact-request"><p>${esc(r.request.name)} · ${Math.ceil(r.request.remaining)} min left</p>${button('service',`Help guest${r.request.supplies?' · 1 linen':''}`,`data-id="${r.id}" ${busy?'disabled':''}`,'primary wide')}</div>`:''}${r.job?`<div class="job-card"><span>${r.job.worker==='player'?'You':STAFF.find(w=>w.id===r.job.worker)?.name} · ${Math.ceil(r.job.remaining)} min left</span><div class="meter-track"><i style="width:${(1-r.job.remaining/r.job.total)*100}%"></i></div></div>`:`<div class="inline-actions">${!r.guest&&r.clean<100?button('clean','Clean · 1 linen',`data-id="${r.id}" ${busy?'disabled':''}`,'primary'):''}${r.condition<100?button('repair','Repair · $18 + 1 linen',`data-id="${r.id}" ${busy?'disabled':''}`,'secondary'):''}</div>`}${state.phase==='prep'&&r.quality<3?button('upgrade-room',`Quality ${r.quality+1} · ${money([130,190,270][r.quality])}`,`data-id="${r.id}" ${r.job?'disabled':''}`,'secondary wide'):''}`:`<p>Reopen this west-wing room between nights.</p>${button('expand',`Reopen · ${money(280+(state.rooms.filter(r=>r.open).length-6)*60)}`,`data-id="${r.id}" ${state.phase!=='prep'?'disabled':''}`,'primary wide')}`}</div>`);
}
function openModal(name) {
  modalName = name;
  renderModal();
  const d = $("modal");
  if (!d.open) d.showModal();
  audio.effect("click");
}
function closeModal() {
  modalName = null;
  if ($("modal").open) $("modal").close();
}
function modalFrame(title, subtitle, body, wide = false, closable = true) {
  return `<div class="modal-shell ${wide ? "large" : ""}"><header class="modal-head"><div><p class="eyebrow">${subtitle}</p><h2 id="modal-title">${title}</h2></div>${closable ? button("close-modal", icon("close"), 'aria-label="Close dialog"', "square") : ""}</header><div class="modal-body">${body}</div>${!["event", "ending", "report", "intro", "new", "confirm-new"].includes(modalName) ? '<footer class="modal-foot">Time pauses while this window is open.</footer>' : ""}</div>`;
}
function renderModal() {
  let title = "", subtitle = "LAST STOP MOTEL", body = "", wide = false, closable = true;
  switch (modalName) {
    case "more":
      title="Motel menu";
      subtitle="MOBILE COMPACT · "+VERSION;
      body=`<div class="mobile-menu">${[["staff","Team & shifts"],["upgrades","Improvements"],["ledger","Ledger & debt"],["achievements","Achievements"],["help","How to play"],["settings","Settings & saves"],["home","Save & return to title"]].map(([a,t])=>button(a,t,"","secondary wide")).join("")}</div>`;
      break;
    case "new":
      title = "Choose your road";
      subtitle = "A COMPLETE SEVEN-NIGHT CAMPAIGN";
      body = `<p>Pay the debt by the final sunrise and finish with at least 40 reputation. A successful campaign unlocks endless play.</p><div class="difficulty-list">${Object.entries(DIFFICULTIES).map(([id, d]) => button("difficulty", `<strong>${d.name}</strong><span>${d.description}</span>`, `data-id="${id}" aria-pressed="${difficulty === id}"`, difficulty === id ? "difficulty selected" : "difficulty")).join("")}</div>${saveAvailable ? '<p class="warning-text">Starting a new campaign replaces your current automatic save. Export it in Settings first if you want to keep it.</p>' : ""}${button("start-new", "Begin your stay", "", "primary wide")}`;
      break;
    case "confirm-new":
      title = "Leave this campaign?";
      body = `<p>Your current progress is saved. You can return to the title screen and continue later.</p>${button("confirm-home", "Save and return to title", "", "primary wide")}${button("close-modal", "Keep playing", "", "secondary wide")}`;
      break;
    case "intro":
      title = "The keys are yours.";
      subtitle = "NIGHT ONE \xB7 KEEP THE LIGHT ON";
      closable = false;
      body = `<p class="story-text">The motel has seen better days. Your dad left you the keys, a stack of bills, and a note: <em>\u201CKeep a light on. Someone will need it.\u201D</em></p><div class="objective-card"><span>YOUR GOAL</span><strong>${money(state.debt)} by sunrise after night 7</strong><p>Finish with at least 40 reputation. You start with ${money(state.cash)} and six rooms.</p></div><ol class="help-steps"><li><strong>Prepare.</strong> Clean rooms 102 and 105. Repair worn rooms. One supply is used per task.</li><li><strong>Open the office.</strong> Select a traveler, then choose a ready room within their budget.</li><li><strong>Look after people.</strong> Resolve requests and nightly decisions. Happy guests leave tips and build your reputation.</li><li><strong>Make it yours.</strong> Use the mornings to hire staff, renovate, and reopen the west wing.</li></ol><p class="subtle">The game pauses when a traveler arrives. Press Space or the play button to resume. Change this in Settings.</p>${button("intro-done", "Switch on the vacancy light", "", "primary wide")}`;
      break;
    case "office":
      title = "The front office";
      subtitle = "SUPPLIES & ROOM RATES";
      wide = true;
      body = `<div class="modal-grid"><section><h3>Set tonight\u2019s rates</h3><p>Rates include an extra $25 per room quality level. Existing bookings keep their original price.</p><div class="segmented">${[["value", "Value", "$75"], ["standard", "Standard", "$100"], ["premium", "Premium", "$130"]].map(([id, label, price]) => button("rate", `<strong>${label}</strong><span>${price} base</span>`, `data-id="${id}" aria-pressed="${state.rate === id}"`, state.rate === id ? "selected" : "")).join("")}</div><div class="objective-card"><span>${state.endless ? "CREDIT DUE AT NEXT SUNRISE" : "DEBT DUE AFTER NIGHT 7"}</span><strong>${money(state.debt)}</strong><p>Cash currently available: ${money(state.cash)}</p></div></section><section><h3>Linen & supplies <span class="pill">${state.supplies} available</span></h3><p>Cleaning, repairs, and some guest requests consume supplies. Deliveries arrive immediately.</p>${button("supplies", "6 supplies \xB7 $45", 'data-id="6"', "secondary wide")}${button("supplies", "12 supplies \xB7 $82", 'data-id="12"', "secondary wide")}${button("credit-supplies", "4 supplies on credit \xB7 $45 due later", state.emergencyDelivery ? "disabled" : "", "text-button wide")}<h3 class="spaced">Take care of the team</h3>${meter("Team energy", state.energy)}<p>Below 25 energy, tasks take 30% longer.</p>${button("rest", "Meal break \xB7 $12", "", "secondary wide")}${!state.loan && !state.endless ? `<details><summary>Emergency financing</summary><p>Receive $350 now. Add $450 to the final debt. Available once per campaign.</p>${button("loan", "Accept emergency loan", "", "secondary wide")}</details>` : ""}</section></div>`;
      break;
    case "staff":
      title = "A good crew";
      subtitle = "STAFF & SHIFTS";
      wide = true;
      body = `<p>Staff handle tasks automatically when time is running. Keep cash and supplies available. Wages are paid at sunrise for each active shift.</p><div class="cards-three">${STAFF.map((w) => {
        const hired = state.staff.find((x) => x.id === w.id);
        return `<article class="shop-card"><div class="staff-avatar">${w.name[0]}</div><p class="eyebrow">${w.role}</p><h3>${w.name}</h3><p>${w.description}</p><div class="shop-price">${money(w.wage)}<small> per night</small></div>${hired ? button("staff-toggle", hired.active ? "On shift \xB7 give night off" : "Off duty \xB7 schedule shift", `data-id="${w.id}" ${state.phase !== "prep" || hired.job ? "disabled" : ""}`, "secondary wide") : button("hire", `Hire \xB7 ${money(w.hire)}`, `data-id="${w.id}" ${state.phase !== "prep" ? "disabled" : ""}`, "primary wide")}</article>`;
      }).join("")}</div><p class="subtle">Hiring and shift changes are available between nights. You can always do tasks yourself.</p>`;
      break;
    case "upgrades":
      title = "Make yourself at home";
      subtitle = "PROPERTY IMPROVEMENTS";
      wide = true;
      body = `<p>Install improvements between nights. Every purchase comes out of the cash you need for the debt.</p><div class="shop-grid">${UPGRADES.map((u) => `<article class="shop-card"><div class="shop-top"><span>${icon("upgrade")}</span><strong>${money(u.cost)}</strong></div><h3>${u.name}</h3><p>${u.description}</p>${button("buy-upgrade", state.upgrades.includes(u.id) ? "Installed" : "Install improvement", `data-id="${u.id}" ${state.upgrades.includes(u.id) || state.phase !== "prep" ? "disabled" : ""}`, "secondary wide")}</article>`).join("")}</div><div class="callout">Select individual rooms to renovate their interiors or reopen the four west-wing rooms.</div>`;
      break;
    case "ledger":
      title = "The night register";
      subtitle = "INCOME, EXPENSES & PROGRESS";
      wide = true;
      body = `<div class="summary-stats"><div><span>Total guests</span><strong>${state.stats.hosted}</strong></div><div><span>Cash on hand</span><strong>${money(state.cash)}</strong></div><div><span>Debt remaining</span><strong>${money(state.debt)}</strong></div><div><span>Requests resolved</span><strong>${state.stats.requests}</strong></div></div>${state.history.length ? `<div class="table-wrap"><table><thead><tr><th>Night</th><th>Guests</th><th>Rooms</th><th>Tips</th><th>Costs</th><th>Net</th></tr></thead><tbody>${state.history.map((h) => `<tr><td>${h.night}</td><td>${h.guests}</td><td>${money(h.income)}</td><td>${money(h.tips)}</td><td>${money(h.expenses)}</td><td class="${h.profit >= 0 ? "positive" : "negative"}">${money(h.profit)}</td></tr>`).join("")}</tbody></table></div>` : '<div class="callout">Your first nightly report will appear here at sunrise.</div>'}<p class="subtle">Nightly costs include work and purchases made after opening, utilities, and wages. Morning investments are reflected in cash and lifetime spending.</p><div class="ledger-foot"><span>Lifetime income: ${money(state.stats.earned)}</span><span>Lifetime spending: ${money(state.stats.spent)}</span></div><h3 class="spaced">Recent entries</h3><div class="log-list">${state.log.slice(0, 12).map((l) => `<div><span>N${l.night}</span><p>${esc(l.message)}</p></div>`).join("")}</div>${button("achievements", "View achievements", "", "secondary wide")}`;
      break;
    case "achievements":
      title = "Stories from the road";
      subtitle = `${meta.achievements.length} OF ${ACHIEVEMENTS.length} ACHIEVEMENTS`;
      wide = true;
      body = `<div class="achievement-grid">${ACHIEVEMENTS.map((a) => `<article class="achievement ${meta.achievements.includes(a.id) ? "unlocked" : ""}"><span>${meta.achievements.includes(a.id) ? "\u2605" : "\u25C7"}</span><div><h3>${a.name}</h3><p>${a.description}</p></div></article>`).join("")}</div><p class="subtle">Achievements are remembered on this browser. Best recorded score: ${meta.best.toLocaleString()}.</p>`;
      break;
    case "settings":
      title = "Settle in";
      subtitle = "SETTINGS & SAVED GAME";
      body = `<div class="setting-row"><label for="compact">Compact mobile layout</label><input id="compact" type="checkbox" data-setting="compact" ${settings.compact ? "checked" : ""}></div><p class="subtle">Switch instantly between the full layout and the compact mobile controls. Compact mode uses one panel, lighter graphics and a 30 FPS cap. Your game and other settings are kept.</p><div class="setting-row"><label for="volume">Sound volume</label><output id="volume-value">${settings.volume}%</output></div><input id="volume" type="range" min="0" max="100" value="${settings.volume}" aria-label="Sound volume"><div class="setting-row"><label for="mute">Mute all sound</label><input id="mute" type="checkbox" data-setting="mute" ${settings.mute ? "checked" : ""}></div><div class="setting-row"><label for="music">Original ambient music</label><input id="music" type="checkbox" data-setting="music" ${settings.music ? "checked" : ""}></div><div class="setting-row"><label for="autoPause">Pause on guest arrival</label><input id="autoPause" type="checkbox" data-setting="autoPause" ${settings.autoPause ? "checked" : ""}></div><div class="setting-row"><label for="reducedMotion">Reduce motion</label><input id="reducedMotion" type="checkbox" data-setting="reducedMotion" ${settings.reducedMotion ? "checked" : ""}></div><div class="setting-row"><label for="quality">Full-layout graphics quality</label><select id="quality" data-setting="quality"><option value="high" ${settings.quality === "high" ? "selected" : ""}>Sharper image</option><option value="low" ${settings.quality === "low" ? "selected" : ""}>Battery saver</option></select></div><div class="save-actions">${button("save", `${icon("save")} Save now`, !active ? "disabled" : "", "secondary")}${button("export", "Export save", !active && !saveAvailable ? "disabled" : "", "secondary")}${button("import", "Import save", "", "secondary")}</div><p class="subtle">Automatic saves stay on this browser and device. Export a save before changing browsers, clearing browsing data, or moving the game. The clock pauses when you leave the tab.</p>${active ? button("home", "Return to title", "", "text-button wide") : ""}`;
      break;
    case "help":
      title = "A good night\u2019s work";
      subtitle = "HOW TO PLAY";
      wide = true;
      body = `<div class="modal-grid"><section><h3>Seven nights to save the motel</h3><p>Finish night seven with enough cash to pay your debt and at least 40 reputation. The debt is paid automatically at the final sunrise. A successful campaign unlocks endless mode.</p><h3>Prepare before opening</h3><p>A ready room needs at least 75 cleanliness and 35 condition. Cleaning uses one supply. Repairs cost $18 and one supply. You can do one task at a time; the team can work alongside you.</p><h3>Match people to rooms</h3><p>Select a waiting guest, then select a ready room. The price must fit their budget. Quality and quiet-room preferences affect happiness. \u201CFind best room\u201D selects the happiest affordable option; confirm the booking in the room panel.</p><h3>Look after your guests</h3><p>Tap rooms with a gold request marker. Resolve the request before its timer expires. Happy guests leave tips and improve reputation at checkout. Ignored requests and low-quality rooms hurt reviews.</p></section><section><h3>Invest carefully</h3><p>Renovations improve quality, restore the room, and raise its rate by $25. The west wing adds four rooms. Staff save you time but earn a nightly wage. Keep enough money for the final debt.</p><h3>Control the clock</h3><p>A night runs from 18:00 to 02:00, then jumps to sunrise. At normal speed, one real second equals three game minutes. Switch between 1\xD7, 3\xD7 and 6\xD7. Menus and decisions pause time. In preparation, time only advances work on rooms.</p><h3>Mouse, touch & keyboard</h3><p>Tap a room or use the Rooms list. Drag the scene to rotate; pinch or scroll to zoom. Camera buttons also work with a keyboard.</p><dl class="shortcuts"><div><dt>Space</dt><dd>Pause / resume</dd></div><div><dt>1 / 2 / 3</dt><dd>Normal / fast / fastest</dd></div><div><dt>R</dt><dd>Room register</dd></div><div><dt>H</dt><dd>This guide</dd></div><div><dt>Escape</dt><dd>Close a menu or room panel</dd></div></dl></section></div><div class="callout">Rooms 104\u2013110 face away from the road. Soundproof windows make every room quiet. Refer travelers elsewhere if you cannot house them; making them wait until they leave costs reputation.</div>`;
      break;
    case "credits":
      title = "Made for the long road";
      subtitle = "LAST STOP MOTEL \xB7 VERSION " + VERSION;
      body = `<p>A complete single-player motel management game, created for Johnny.</p><p>Game design, writing, interface, procedural 3D scenery, and synthesized music were created for this release. Rendering uses Three.js, distributed under the MIT license.</p><p>No accounts, analytics, advertisements, external fonts, or online services. All game assets are included.</p><p class="subtle">Three.js notices and the editable game source are included in the compact download.</p>${button("achievements", "View achievements", "", "secondary wide")}`;
      break;
    case "event": {
      const e = EVENTS[state.event];
      if (!e) {
        closeModal();
        return;
      }
      title = e.title;
      subtitle = `NIGHT ${state.night} \xB7 SOMETHING AT THE DESK`;
      closable = false;
      body = `<p class="story-text">${e.body}</p><div class="event-choices">${e.choices.map((c, i) => button("event-choice", `<strong>${c.label}</strong><span>${c.detail}</span>`, `data-id="${i}" ${state.cash < (c.cost || 0) || state.supplies + Math.min(0, c.supplies || 0) < 0 ? "disabled" : ""}`, "event-choice")).join("")}</div><p class="subtle">Cash ${money(state.cash)} \xB7 Supplies ${state.supplies} \xB7 Reputation ${Math.round(state.rep)}</p>`;
      break;
    }
    case "report": {
      const r = state.lastReport;
      title = "Another sunrise.";
      subtitle = `NIGHT ${state.night} COMPLETE`;
      closable = false;
      body = reportBody(r) + `<p class="story-text">${r.happiness >= 80 ? "The guests left rested, grateful, and with stories to tell." : r.happiness >= 60 ? "Not every stay was perfect. A little care will make tomorrow better." : "A difficult night. Clean the rooms, take a breath, and make a fresh start."}</p>${button("next-night", `Prepare for night ${state.night + 1}`, "", "primary wide")}`;
      break;
    }
    case "ending": {
      const o = state.outcome;
      if (!o) {
        closeModal();
        return;
      }
      title = esc(o.title);
      subtitle = o.won ? "CAMPAIGN COMPLETE" : "THE END OF THE ROAD";
      closable = false;
      body = `<div class="ending-badge">${o.won ? "\u2605" : "\u25C7"}</div><p class="story-text">${esc(o.text)}</p><div class="summary-stats"><div><span>Guests welcomed</span><strong>${state.stats.hosted}</strong></div><div><span>Reputation</span><strong>${Math.round(state.rep)}</strong></div><div><span>Final cash</span><strong>${money(state.cash)}</strong></div><div><span>Final score</span><strong>${E.score(state).toLocaleString()}</strong></div></div>${!o.won && state.debt > 0 ? `<p class="subtle">Debt due: ${money(state.debt)} \xB7 Required reputation: 40</p>` : ""}${state.lastReport ? `<details><summary>Final night\u2019s accounts</summary>${reportBody(state.lastReport)}</details>` : ""}${o.won ? button("endless", "Keep the lights on \xB7 Endless mode", "", "primary wide") : button("replay", "Try a new campaign", "", "primary wide")}${button("ending-export", "Export this campaign", "", "secondary wide")}${button("confirm-home", "Return to title", "", "text-button wide")}`;
      break;
    }
    default:
      return;
  }
  html($("modal"), modalFrame(title, subtitle, body, wide, closable));
}
function reportBody(r) {
  return `<div class="report-lines"><div><span>Guests welcomed</span><strong>${r.guests}</strong></div><div><span>Room income</span><strong>${money(r.income)}</strong></div><div><span>Tips & other income</span><strong>${money(r.tips)}</strong></div><div><span>Supplies, work & credit</span><strong>\u2212${money(r.expenses - r.wages - r.utilities)}</strong></div><div><span>Utilities</span><strong>\u2212${money(r.utilities)}</strong></div><div><span>Staff wages</span><strong>\u2212${money(r.wages)}</strong></div><div class="total"><span>Tonight\u2019s net</span><strong>${money(r.profit)}</strong></div><div><span>Average happiness</span><strong>${r.happiness}/100</strong></div><div><span>Reputation from stays</span><strong>${r.repChange >= 0 ? "+" : ""}${r.repChange}</strong></div></div>`;
}
function phaseModal() {
  if (state.event) openModal("event");
  else if (state.phase === "report") openModal("report");
  else if (state.phase === "ending") {
    recordEnding();
    openModal("ending");
  }
}
function recordEnding() {
  meta.best = Math.max(meta.best, E.score(state));
  for (const id of state.achievements) if (!meta.achievements.includes(id)) meta.achievements.push(id);
  if (state.outcome?.won && !wonCounted) {
    wonCounted = true;
    meta.wins++;
    audio.effect("win");
  }
  save();
}
function exportSave() {
  try {
    const text = active ? E.serialize(state) : localStorage.getItem(saveKey);
    if (!text) {
      toast("There is no saved campaign yet.", "warning");
      return;
    }
    const blob = new Blob([text], { type: "application/json" }), url = URL.createObjectURL(blob), a = document.createElement("a");
    a.href = url;
    a.download = `Last-Stop-Motel-Night-${active ? state.night : "Save"}.json`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1e3);
    toast("Save exported. Keep it somewhere safe.", "success");
  } catch {
    toast("Could not export the save.", "warning");
  }
}
function selectRoom(id) {
  selectedRoom = Number(id);
  panelCollapsed = false;
  scene?.select(selectedRoom);
  render();
}
function handleAction(action, b) {
  const id = b?.dataset.id;
  switch (action) {
    case "new":
    case "replay":
      openModal("new");
      break;
    case "difficulty":
      difficulty = id;
      renderModal();
      break;
    case "start-new":
      startNew();
      break;
    case "continue":
      resumeGame();
      break;
    case "intro-done":
      state.seenIntro = true;
      closeModal();
      save();
      break;
    case "open":
      if (run(E.openNight(state))) {
        paused = false;
        lastPhase = state.phase;
        render();
      }
      break;
    case "pause":
      paused = !paused;
      audio.start();
      render();
      break;
    case "speed":
      speed = speed === 1 ? 3 : speed === 3 ? 6 : 1;
      render();
      break;
    case "reception":
    case "rooms":
      selectedRoom = null;
      panelCollapsed = false;
      panel = action;
      render();
      break;
    case "toggle-panel":
      panelCollapsed = !panelCollapsed;
      if(panelCollapsed)selectedRoom=null;
      render();
      break;
    case "more":
      openModal("more");
      break;
    case "guest":
      selectedGuest = id;
      render();
      break;
    case "select-room":
      selectRoom(id);
      break;
    case "close-room":
      selectedRoom = null;
      panelCollapsed = false;
      panel = state.queue.length ? "reception" : "rooms";
      render();
      break;
    case "assign-best": {
      const g = state.queue.find((g2) => g2.id === id);
      const options = state.rooms.filter((r) => E.roomStatus(r) === "Ready" && E.quote(state, r, g).affordable).sort((a, b2) => E.quote(state, b2, g).happiness - E.quote(state, a, g).happiness || E.roomPrice(state, b2) - E.roomPrice(state, a));
      if (options.length) {
        selectedGuest = id;
        selectRoom(options[0].id);
        toast("Best available room selected. Confirm the check-in.");
      } else toast("No ready room fits this budget. Clean a room or adjust rates.", "warning");
      break;
    }
    case "check-in":
      if (run(E.checkIn(state, b.dataset.guest, id))) {
        selectedRoom = null;
        panel = "reception";
        selectedGuest = state.queue[0]?.id || null;
        audio.effect("success");
        if (!state.queue.length && settings.autoPause) paused = false;
        render();
      }
      break;
    case "turn-away":
      if (run(E.turnAway(state, id)) && !state.queue.length && settings.autoPause) {
        paused = false;
        render();
      }
      break;
    case "clean":
    case "repair":
    case "service":
      if (run(E.startJob(state, id, action)) && state.phase === "prep") paused = false;
      break;
    case "supplies":
      run(E.buySupplies(state, Number(id)));
      break;
    case "credit-supplies":
      run(E.emergencySupplies(state));
      break;
    case "rate":
      run(E.setRate(state, id));
      break;
    case "upgrade-room":
      run(E.upgradeRoom(state, id));
      break;
    case "expand":
      run(E.expandRoom(state, id));
      break;
    case "buy-upgrade":
      run(E.buyUpgrade(state, id));
      break;
    case "hire":
      run(E.hireStaff(state, id));
      break;
    case "staff-toggle":
      run(E.toggleStaff(state, id));
      break;
    case "rest":
      run(E.rest(state));
      break;
    case "loan":
      run(E.takeLoan(state));
      break;
    case "event-choice":
      if (run(E.chooseEvent(state, Number(id)))) {
        lastEvent = null;
        closeModal();
        save();
        render();
      }
      break;
    case "next-night":
      if (run(E.nextNight(state))) {
        lastPhase = state.phase;
        paused = false;
        selectedRoom = null;
        panel = "reception";
        closeModal();
        render();
        save();
      }
      break;
    case "endless":
      if (run(E.continueEndless(state))) {
        lastPhase = state.phase;
        paused = false;
        selectedRoom = null;
        closeModal();
        render();
        save();
      }
      break;
    case "home":
      openModal("confirm-new");
      break;
    case "confirm-home":
      save();
      active = false;
      closeModal();
      $("start-screen").hidden = false;
      render();
      break;
    case "close-modal":
      closeModal();
      render();
      break;
    case "save":
      save(true);
      break;
    case "export":
    case "ending-export":
      exportSave();
      break;
    case "import":
      $("import-save").click();
      break;
    case "office":
    case "staff":
    case "upgrades":
    case "ledger":
    case "settings":
    case "help":
    case "credits":
    case "achievements":
      openModal(action);
      break;
    default:
      if (action.startsWith("camera-")) scene?.control(action.slice(7));
  }
}
document.addEventListener("click", (e) => {
  const b = e.target.closest("button[data-action]");
  if (!b || b.disabled) return;
  try {
    handleAction(b.dataset.action, b);
  } catch (err) {
    console.error(err);
    toast("That action could not finish. Your last automatic save is still available.", "warning");
  }
});
$("modal").addEventListener("cancel", (e) => {
  if (["event", "report", "ending", "intro"].includes(modalName)) e.preventDefault();
  else {
    modalName = null;
    render();
  }
});
document.addEventListener("input", (e) => {
  if (e.target.id === "volume") {
    settings.volume = Number(e.target.value);
    $("volume-value").textContent = settings.volume + "%";
    audio.start();
    saveSettings();
  }
});
document.addEventListener("change", (e) => {
  const key = e.target.dataset.setting;
  if (key) {
    settings[key] = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    audio.start();
    saveSettings();
    if(key === "compact"){panelCollapsed=false;render();renderModal();$("compact")?.focus();}
  }
});
$("import-save").addEventListener("change", async (e) => {
  const file = e.target.files[0];
  e.target.value = "";
  if (!file) return;
  if (file.size > 2e6) {
    toast("That save is too large. Choose a Last Stop Motel JSON save.", "warning");
    return;
  }
  try {
    const next = E.deserialize(await file.text());
    state = next;
    active = true;
    paused = state.phase === "night";
    lastPhase = state.phase;
    lastEvent = state.event;
    wonCounted = state.achievements.includes("finish");
    selectedRoom = null;
    selectedGuest = null;
    for (const id of state.achievements) if (ACHIEVEMENTS.some((a) => a.id === id) && !meta.achievements.includes(id)) meta.achievements.push(id);
    closeModal();
    $("start-screen").hidden = true;
    audio.start();
    save();
    render();
    phaseModal();
    toast("Campaign imported successfully.", "success");
  } catch (error) {
    toast(error.message || "That save could not be imported.", "warning");
  }
});
document.addEventListener("keydown", (e) => {
  if (["INPUT", "SELECT", "TEXTAREA", "BUTTON"].includes(document.activeElement?.tagName)) return;
  if (e.ctrlKey || e.metaKey || e.altKey) return;
  if (e.key === "Escape" && !modalName) {
    selectedRoom = null;
    render();
    return;
  }
  if (modalName) return;
  if (e.key.toLowerCase() === "h") {
    openModal("help");
    return;
  }
  if (!active) return;
  if (e.code === "Space") {
    e.preventDefault();
    paused = !paused;
    render();
  }
  if (["1", "2", "3"].includes(e.key)) {
    speed = { 1: 1, 2: 3, 3: 6 }[e.key];
    render();
  }
  if (e.key.toLowerCase() === "r") {
    panel = "rooms";
    render();
  }
});
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    save();
    audio.suspend();
    if (active && state.phase === "night") {
      paused = true;
      render();
    }
  }
});
window.addEventListener("pagehide", () => save());
function sceneFailure() {
  document.body.classList.add("scene-unavailable");
  scene = null;
  $("scene-error").hidden = false;
  $("scene-error").innerHTML = "<strong>The 3D view is unavailable on this browser.</strong><span>You can still play every part of the game with the Rooms list. Try a browser with WebGL 2 enabled for the motel view.</span>";
  if (active) {
    panel = "rooms";
    render();
  }
}
window.addEventListener("motel-context-lost", sceneFailure);
try {
  scene = new MotelScene($("world"), (id) => {
    if (active && !modalName) selectRoom(id);
  }, settings);
} catch (error) {
  console.warn("Three.js scene unavailable:", error);
  sceneFailure();
}
saveSettings();
render();
let previous = performance.now();
function frame(now) {
  const dt = Math.min((now - previous) / 1e3, 0.12);
  previous = now;
  if (!document.hidden) {
    if (active && !paused && !modalName) {
      const oldQueue = state.queue.length;
      E.tick(state, dt * 3 * speed);
      if (settings.autoPause && state.queue.length > oldQueue) {paused = true; panelCollapsed=false;}
      if (state.event && state.event !== lastEvent) {
        lastEvent = state.event;
        openModal("event");
        save();
      }
      if (state.phase !== lastPhase) {
        lastPhase = state.phase;
        render();
        phaseModal();
        save();
      }
    }
    if(now-lastSceneFrame >= 1000/(settings.compact ? 30 : 60)) {
      scene?.update(state, Math.min((now-lastSceneFrame)/1000,.12));
      lastSceneFrame=now;
    }
    if (active && now - lastUI > (settings.compact ? 650 : 400)) {
      render();
      lastUI = now;
    }
    if (active && now - lastSave > 8e3) {
      save();
      lastSave = now;
    }
  }
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

function renderStartMain() {
  html($("start-screen"), `<div class="start-copy"><div class="route-tag"><span>ROUTE</span><strong>86</strong></div><p class="eyebrow">A ROADSIDE MANAGEMENT GAME</p><h1>Last Stop<br><em>Motel.</em></h1><p class="start-desc">Seven nights. One last chance.<br>Keep a light on for the people passing through.</p><div class="start-actions">${saveAvailable ? button("continue", "Continue your stay", "", "primary wide") : ""}${button("new", "New campaign", "", saveAvailable ? "secondary wide" : "primary wide")}</div><p class="start-meta">THREE DIFFICULTIES <span>\xB7</span> OFFLINE PLAY <span>\xB7</span> ENDLESS MODE</p><div class="start-links">${button("help", "How to play")}${button("settings", "Settings")}${button("credits", "Credits")}</div><p class="version">VERSION ${VERSION} \xB7 LAST STOP MOTEL</p></div><div class="start-postcard"><span>TONIGHT\u2019S FORECAST</span><strong>Clear skies.<br>A few late arrivals.</strong><small>There\u2019s always someone<br>looking for a place to stop.</small></div>`);
}

function renderMain() {
  document.body.classList.toggle("playing", active);
  if (!active) {
    renderStart();
    return;
  }
  const open = state.rooms.filter((r) => r.open), occupied = open.filter((r) => r.guest).length, requests = open.filter((r) => r.request).length;
  const ready = open.filter((r) => E.roomStatus(r) === "Ready").length;
  const working = state.rooms.some((r) => r.job);
  html($("topbar"), `<button class="brand" data-action="home" aria-label="Save and return to title"><span>LAST STOP</span><strong>MOTEL</strong></button><div class="night-clock"><span class="eyebrow">${state.endless ? "ENDLESS \xB7 " : ""}NIGHT ${state.night}${state.endless ? "" : " / 7"}</span><strong>${clock()}</strong><div class="time-track"><i style="width:${state.minute / 480 * 100}%"></i></div></div><div class="top-stat cash-stat"><span>CASH ON HAND</span><strong>${money(state.cash)}</strong></div><div class="top-stat"><span>REPUTATION</span><strong>${Math.round(state.rep)}<small>/100</small></strong></div><div class="top-stat occupancy-stat"><span>ROOMS TAKEN</span><strong>${occupied}<small>/${open.length}</small></strong></div><div class="top-stat supplies-stat"><span>SUPPLIES</span><strong>${state.supplies}</strong></div><div class="time-controls">${state.phase === "prep" ? button("open", working ? "Finishing work\u2026" : "Open for the night", working ? "disabled" : "", "primary") : button("pause", icon(paused ? "play" : "pause"), `aria-label="${paused ? "Resume" : "Pause"} game" aria-pressed="${paused}"`, "square")} ${state.phase === "night" ? button("speed", `${speed}\xD7`, 'aria-label="Change game speed"', "speed-button") : ""}${button("settings", icon("settings"), 'aria-label="Settings"', "square")}</div>`);
  if (panel === "rooms") renderRoomsPanel();
  else renderReception();
  renderRoom();
  html($("toolbar"), `<div class="dock-main">${[["reception", "desk", "Reception", state.queue.length], ["rooms", "room", "Rooms", requests], ["office", "office", "Office", 0], ["staff", "staff", "Team", 0], ["upgrades", "upgrade", "Improve", 0], ["ledger", "ledger", "Ledger", 0]].map(([a, i, t, n]) => button(a, `${icon(i)}<span>${t}</span>${n ? `<b class="nav-count">${n}</b>` : ""}`, "", panel === a && !modalName ? "dock-item active" : "dock-item")).join("")}</div><div class="dock-end"><span class="weather">${icon("sun")}${E.nightInfo(state).weather}</span>${button("help", icon("help"), 'aria-label="How to play"', "square")}</div>`);
  html($("world-controls"), `<div class="camera-buttons">${button("camera-left", "\u21B6", 'aria-label="Rotate view left"')}${button("camera-right", "\u21B7", 'aria-label="Rotate view right"')}${button("camera-out", "\u2212", 'aria-label="Zoom out"')}${button("camera-in", "+", 'aria-label="Zoom in"')}${button("camera-reset", "Reset view")}</div><span>${paused ? "PAUSED \xB7 RESUME WHEN READY" : state.phase === "prep" ? "Prepare your rooms, then open the office." : "Tap a room to manage it. Drag to look around."}</span>`);
  scene?.select(selectedRoom);
  for (const n of state.notifications.splice(0)) {
    if (n.type === "achievement") {
      const id = n.message.replace("Achievement: ", "");
      const a = ACHIEVEMENTS.find((a2) => a2.id === id);
      if (a) toast(`Achievement unlocked \xB7 ${a.name}`, "achievement");
      if (!meta.achievements.includes(id)) meta.achievements.push(id);
    } else {
      toast(n.message, n.type);
      if (n.message.includes("waiting")) audio.effect("bell");
    }
  }
}

function renderReceptionMain() {
  const allFull = !state.rooms.some((r) => r.open && !r.guest);
  const selected = state.queue.find((g) => g.id === selectedGuest);
  if (!selected) selectedGuest = state.queue[0]?.id || null;
  html($("left-panel"), `<div class="panel-heading"><div><p class="eyebrow">FRONT DESK</p><h2>${state.phase === "prep" ? "Before the rush" : "Late arrivals"}</h2></div><span class="counter">${state.queue.length}</span></div>${state.phase === "prep" ? `<div class="night-note"><span class="chapter">CHAPTER ${Math.min(state.night, 7)}</span><h3>${esc(E.nightInfo(state).title)}</h3><p>${esc(E.nightInfo(state).blurb)}</p></div><div class="prep-check"><h3>Opening checklist</h3><div><span>Rooms ready</span><strong>${state.rooms.filter((r) => E.roomStatus(r) === "Ready").length} / ${state.rooms.filter((r) => r.open).length}</strong></div><div><span>Linen & supplies</span><strong>${state.supplies}</strong></div><div><span>Team on shift</span><strong>${1 + state.staff.filter((w) => w.active).length}</strong></div><div><span>Due after night seven</span><strong>${money(state.debt)}</strong></div></div><p class="panel-tip">Select a room to clean, repair, or renovate it. Staff work automatically while time is running.</p>` : state.queue.length ? `<div class="guest-list">${state.queue.map((g) => `<article class="guest-card ${g.id === selectedGuest ? "selected" : ""}"><button class="guest-select" data-action="guest" data-id="${esc(g.id)}" aria-pressed="${g.id === selectedGuest}"><div class="guest-top"><span class="guest-avatar">${esc(g.icon)}</span><div><strong>${esc(g.name)}</strong><span>${esc(g.title)}</span></div></div><p>\u201C${esc(g.text)}\u201D</p><div class="guest-needs"><span>Budget <b>${money(g.budget)}</b></span><span>${g.comfort ? "Quality " + g.comfort + " preferred" : "Any quality"}${g.quiet ? " \xB7 Quiet" : ""}</span></div><div class="patience" aria-label="Patience remaining ${Math.round((1 - g.wait / g.patience) * 100)} percent"><i style="width:${E.clamp(1 - g.wait / g.patience, 0, 1) * 100}%"></i></div></button>${g.id === selectedGuest ? `<div class="guest-actions">${button("assign-best", "Find best room", `data-id="${esc(g.id)}"`, "primary compact")}${button("turn-away", "Refer elsewhere", `data-id="${esc(g.id)}"`, "text-button")}</div>` : ""}</article>`).join("")}</div>` : `<div class="desk-empty"><span class="empty-symbol">${icon("desk")}</span><h3>${allFull ? "No vacancy. Nicely done." : "The road is quiet."}</h3><p>${allFull ? "Look after your guests and handle any requests before sunrise." : "Travelers will arrive throughout the night. Use this time to look after the rooms."}</p>${state.arrivals.length ? `<span class="subtle">${state.arrivals.length} more traveler${state.arrivals.length === 1 ? "" : "s"} expected</span>` : '<span class="subtle">No more arrivals tonight</span>'}</div>`}<div class="panel-footer"><span>YOUR NEXT TASK</span><strong>${state.playerJob ? `${E.roomStatus(state.rooms[state.playerJob - 1])} room ${state.rooms[state.playerJob - 1].number}` : state.rooms.some((r) => r.request) ? "A guest needs a hand." : state.queue.length ? "Choose a traveler and a ready room." : "Keep an eye on the vacancy light."}</strong></div>`);
}

function renderRoomMain() {
  const el = $("room-panel");
  el.hidden = selectedRoom === null;
  if (selectedRoom === null) return;
  const r = state.rooms[selectedRoom - 1], g = state.queue.find((g2) => g2.id === selectedGuest), q = g ? E.quote(state, r, g) : null;
  html(el, `<div class="panel-heading room-heading"><div><p class="eyebrow">${r.quiet ? "COURTYARD ROOM" : "ROADSIDE ROOM"}</p><h2>Room ${r.number}</h2></div>${button("close-room", icon("close"), 'aria-label="Close room details"', "square")}</div><div class="room-detail"><div class="room-status"><span class="status-dot status-${statusClass(r)}"></span><strong>${E.roomStatus(r)}</strong><span>${r.open ? "Quality " + r.quality + "/3" : "West wing"}</span></div>${!r.open ? `<p class="description">A room waiting for its second chance. Reopen it to welcome another guest each night.</p>${button("expand", `Reopen \xB7 ${money(280 + (state.rooms.filter((r2) => r2.open).length - 6) * 60)}`, `data-id="${r.id}" ${state.phase !== "prep" ? "disabled" : ""}`, "primary wide")}<p class="subtle">Available between nights.</p>` : `${meter("Cleanliness", r.clean, r.clean < 75 ? "coral" : "")}${meter("Condition", r.condition, r.condition < 55 ? "coral" : "")}<div class="room-rate"><span>Nightly rate</span><strong>${money(E.roomPrice(state, r))}</strong></div>${r.guest ? `<div class="occupant"><span class="eyebrow">STAYING TONIGHT</span><strong>${esc(r.guest.name)}</strong><span>${esc(r.guest.title)}</span>${meter("Guest happiness", r.guest.happiness, r.guest.happiness < 65 ? "coral" : "")}</div>` : ""}${r.request ? `<div class="request-card"><span class="eyebrow">GUEST REQUEST</span><h3>${esc(r.request.name)}</h3><p>\u201C${esc(r.request.text)}\u201D</p>${button("service", `Help guest${r.request.supplies ? " \xB7 1 supply" : ""}`, `data-id="${r.id}" ${r.job || state.playerJob ? "disabled" : ""}`, "primary wide")}<small>${Math.ceil(r.request.remaining)} game minutes left</small></div>` : ""}${r.job ? `<div class="job-card"><span>${r.job.worker === "player" ? "You" : STAFF.find((w) => w.id === r.job.worker)?.name} \xB7 ${E.roomStatus(r)}</span><div class="meter-track"><i style="width:${(1 - r.job.remaining / r.job.total) * 100}%"></i></div><small>${Math.ceil(r.job.remaining)} game minutes remaining</small></div>` : `<div class="room-actions">${!r.guest && r.clean < 100 ? button("clean", "Clean \xB7 1 supply", `data-id="${r.id}" ${state.playerJob ? "disabled" : ""}`, "secondary wide") : ""}${r.condition < 100 ? button("repair", "Repair \xB7 $18 + 1 supply", `data-id="${r.id}" ${state.playerJob ? "disabled" : ""}`, "secondary wide") : ""}</div>`}${g && E.roomStatus(r) === "Ready" ? `<div class="booking"><span class="eyebrow">CHECK IN ${esc(g.name.split(" ")[0].toUpperCase())}</span><p>Expected happiness <strong>${q.happiness}/100</strong></p>${button("check-in", q.affordable ? `Check in \xB7 ${money(q.price)}` : "Above guest\u2019s budget", `data-id="${r.id}" data-guest="${esc(g.id)}" ${!q.affordable ? "disabled" : ""}`, "primary wide")}</div>` : ""}${state.phase === "prep" && r.quality < 3 ? `<div class="renovation"><span class="eyebrow">MAKE IT A LITTLE NICER</span><p>Quality ${r.quality + 1} \xB7 +$25 nightly rate<br>Fresh linens and full repairs included.</p>${button("upgrade-room", `Renovate \xB7 ${money([130, 190, 270][r.quality])}`, `data-id="${r.id}" ${r.job ? "disabled" : ""}`, "secondary wide")}</div>` : ""}`}</div>`);
}

function renderStart(){return settings.compact?renderStartCompact():renderStartMain();}
function renderReception(){return settings.compact?renderReceptionCompact():renderReceptionMain();}
function renderRoom(){return settings.compact?renderRoomCompact():renderRoomMain();}
function render(){
 document.body.classList.toggle('mobile-compact',settings.compact);
 document.body.classList.toggle('room-open',active&&selectedRoom!==null);
 document.body.classList.toggle('panel-collapsed',panelCollapsed);
 return settings.compact?renderCompact():renderMain();
}
