import test from "node:test";
import assert from "node:assert/strict";
import * as E from "../src/engine.js";
import { EVENTS, GUESTS, NAMES } from "../src/content.js";

function finishNight(s) {
  let guard = 0;
  while (s.phase === "night" && guard++ < 1000) {
    if (s.event) {
      const index = EVENTS[s.event].choices.findIndex((choice) => (choice.cost || 0) <= s.cash && s.supplies + Math.min(0, choice.supplies || 0) >= 0);
      assert.ok(E.chooseEvent(s, index).ok);
    } else {
      E.tick(s, 60);
    }
  }
  assert.ok(guard < 1000, "night reaches sunrise");
}

test("completed stays create a per-room story and guestbook entry", () => {
  const s = E.newGame("relaxed", 4);
  assert.ok(E.openNight(s).ok);
  E.tick(s, 9);
  const g = s.queue[0];
  assert.ok(g);
  assert.ok(E.checkIn(s, g.id, 1).ok);
  finishNight(s);
  const stay = E.roomVisits(s, 101)[0];
  assert.equal(stay.name, g.name);
  assert.equal(stay.room, 101);
  assert.equal(stay.night, 1);
  assert.equal(stay.title, g.title);
  assert.ok(stay.paid > 0);
  assert.ok(stay.happiness >= 0 && stay.happiness <= 100);
  assert.equal(s.guestBook.find((x) => x.name === g.name)?.stays, 1);
  assert.deepEqual(E.roomVisits(s, 102), []);
});

test("returning guests know their last room, reward good memories, and cannot double-book a name", () => {
  const s = E.newGame("relaxed", 17);
  s.night = 2;
  s.guestBook = [{ name: NAMES[0], title: GUESTS[0].title, stays: 3, lastNight: 1, lastRoom: 101, lastHappiness: 91 }];
  assert.ok(E.openNight(s).ok);
  assert.equal(new Set(s.arrivals.map((g) => g.name)).size, s.arrivals.length);
  const returning = s.arrivals.filter((g) => g.returning);
  assert.ok(returning.length > 0, "the seeded arrival draw includes a repeat visitor");
  for (const guest of returning) {
    assert.equal(guest.name, NAMES[0]);
    assert.equal(guest.title, GUESTS[0].title);
    assert.equal(guest.visits, 3);
    const withMemory = E.quote(s, s.rooms[0], guest).happiness;
    const withoutMemory = E.quote(s, s.rooms[0], { ...guest, returning: false }).happiness;
    assert.equal(withMemory - withoutMemory, 6);
  }
});

test("new archives survive saves and legacy 1.0.2 saves migrate in place", () => {
  const s = E.newGame("standard", 5);
  E.openNight(s);
  E.tick(s, 9);
  assert.ok(E.checkIn(s, s.queue[0].id, 1).ok);
  finishNight(s);
  const loaded = E.deserialize(E.serialize(s));
  assert.deepEqual(loaded.roomHistory, s.roomHistory);
  assert.deepEqual(loaded.guestBook, s.guestBook);
  const legacy = JSON.parse(E.serialize(s));
  delete legacy.state.roomHistory;
  delete legacy.state.guestBook;
  const migrated = E.deserialize(JSON.stringify(legacy));
  assert.deepEqual(migrated.roomHistory, []);
  assert.deepEqual(migrated.guestBook, []);
  assert.equal(migrated.phase, "report");
});

test("malformed room archives and guest identities cannot be imported", () => {
  const s = E.newGame("standard", 8);
  const mutate = (change) => {
    const saved = JSON.parse(E.serialize(s));
    change(saved.state);
    return JSON.stringify(saved);
  };
  const entry = { night: 1, room: 101, name: NAMES[0], title: GUESTS[0].title, happiness: 82, paid: 100, tip: 5, service: "none" };
  assert.throws(() => E.deserialize(mutate((x) => x.roomHistory = [{ ...entry, name: "<script>" }])));
  assert.throws(() => E.deserialize(mutate((x) => x.roomHistory = [{ ...entry, room: 999 }])));
  assert.throws(() => E.deserialize(mutate((x) => x.roomHistory = Array.from({ length: 201 }, () => entry))));
  assert.throws(() => E.deserialize(mutate((x) => x.guestBook = [{ name: NAMES[0], title: GUESTS[0].title, stays: -1, lastNight: 1, lastRoom: 101, lastHappiness: 80 }])));
  assert.throws(() => E.deserialize(mutate((x) => x.guestBook = [{ name: NAMES[0], title: GUESTS[0].title, stays: 1, lastNight: 1, lastRoom: 101, lastHappiness: 80 }, { name: NAMES[0], title: GUESTS[0].title, stays: 1, lastNight: 1, lastRoom: 101, lastHappiness: 80 }])));
});

test("returning stays unlock milestones and the archive stores only recognized fields", () => {
  const s = E.newGame("relaxed", 7);
  s.roomHistory = Array.from({ length: 29 }, () =>
    ({ night: 1, room: 101, name: NAMES[2], title: GUESTS[0].title,
      happiness: 80, paid: 100, tip: 5, service: "none" }));
  assert.ok(E.openNight(s).ok);
  E.tick(s, 9);
  const g = s.queue[0];
  g.returning = true;
  g.previousRoom = 101;
  g.previousHappiness = 82;
  g.visits = 1;
  assert.ok(E.checkIn(s, g.id, 1).ok);
  finishNight(s);
  assert.ok(s.achievements.includes("regular"));
  assert.ok(s.achievements.includes("archive"));
  assert.equal(s.roomHistory.length, 30);
  const raw = JSON.parse(E.serialize(s));
  raw.state.roomHistory[0].extra = { embedded: "not preserved" };
  raw.state.guestBook[0].extra = "untrusted";
  const loaded = E.deserialize(JSON.stringify(raw));
  assert.equal(Object.hasOwn(loaded.roomHistory[0], "extra"), false);
  assert.equal(Object.hasOwn(loaded.guestBook[0], "extra"), false);
});
