import test from "node:test";
import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import vm from "node:vm";
import * as E from "../src/engine.js";
import { EVENTS } from "../src/content.js";
test("offline entry point loads only included local assets", async () => {
  const html = await readFile("dist/index.html", "utf8");
  const urls = [...html.matchAll(/(?:src|href)="([^"]+)"/g)].map((m) => m[1]);
  assert.ok(urls.length >= 2);
  for (const url of urls) {
    assert.ok(!/^(https?:|\/\/|data:)/.test(url));
    assert.ok((await stat("dist/" + url)).size > 0);
  }
  assert.ok(!html.includes('type="module"'), "Direct file launch must not depend on module fetches");
  assert.ok(html.includes('name="viewport"'));
});
test("bundled game is valid classic JavaScript and has no runtime imports", async () => {
  const code = await readFile("dist/assets/game.js", "utf8");
  assert.ok(code.length > 2e5, "Three.js must be included");
  assert.doesNotThrow(() => new vm.Script(code));
  assert.ok(!/\bimport\s*\(/.test(code));
  assert.ok(!/\bfetch\(/.test(await readFile("src/main.js", "utf8")));
});
test("endless supplier credit is paid at sunrise", () => {
  const s = E.newGame("relaxed", 8);
  s.endless = true;
  s.night = 8;
  s.debt = 0;
  s.cash = 1e3;
  E.openNight(s);
  E.emergencySupplies(s);
  assert.equal(s.debt, 45);
  while (s.phase === "night") {
    if (s.event) {
      const i = EVENTS[s.event].choices.findIndex((c) => !(c.cost > 0) && !(c.supplies < 0));
      E.chooseEvent(s, i);
    } else E.tick(s, 60);
  }
  assert.equal(s.lastReport.credit, 45);
  assert.equal(s.debt, 0);
  assert.equal(s.lastReport.expenses, s.lastReport.utilities + 45);
});
test("engine actions reject duplicate purchases and preserve the balance", () => {
  const s = E.newGame("relaxed", 3);
  s.cash = 1e4;
  assert.ok(E.buyUpgrade(s, "coffee").ok);
  const c = s.cash;
  assert.equal(E.buyUpgrade(s, "coffee").ok, false);
  assert.equal(s.cash, c);
  assert.ok(E.hireStaff(s, "rosa").ok);
  const c2 = s.cash;
  assert.equal(E.hireStaff(s, "rosa").ok, false);
  assert.equal(s.cash, c2);
});
