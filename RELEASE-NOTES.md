# Last Stop Motel 1.0.2 — Manual compact mode

The full game now includes a **Settings → Compact mobile layout** toggle. It is off by default and remembered per browser. Both layouts operate on the same running campaign. Turning compact mode off restores the full interface and uses your saved standard graphics preferences. Audio choices are never overwritten by the layout toggle.

Compact mode applies the four-tab interface, one bottom panel, lower resolution, no shadows, rain or point lights, reduced animation and a 30 FPS rendering cap. The normal layout uses the original scene and up to 60 rendering frames per second. These are limits, not measured device performance.

The game engine and save schema are unchanged. The 17 existing automated tests passed, including 72 complete campaign simulations. Browser checks confirmed: full layout on a fresh start; the toggle switches the active campaign to four-tab compact mode; switching off restores all six main tabs; cash ($750), supplies (12), reputation (50) and occupancy (0/6) stay unchanged; enabling compact mode survives a page reload. A redraw cache also prevents unchanged controls from being replaced every UI tick. The test browser lacks WebGL, so real-device 3D performance remains unverified.

---

## Original release record

# Last Stop Motel 1.0.0

Release date: September 5, 2026

This is the complete seven-night campaign release, with three difficulty settings and endless continuation after a successful ending. No prototype screens, placeholder actions, external game assets, or account services are needed to play through the campaign.

## Included

- Full campaign with seven chapters, fourteen authored decisions, an insolvency ending, debt/reputation failure endings, and two successful ending variants.
- Six starting rooms and four reopenable west-wing rooms, three renovation levels, and six property improvements.
- Ten traveler types, comfort and quiet-room preferences, budgets, patience, happiness, tips, and timed guest requests.
- Cleaning, repairs, supplies, energy, staff automation, shift wages, emergency credit, and nightly/lifetime accounting.
- Original low-poly Three.js property, pointer/touch selection, camera movement, night lighting, rain, room state markers, occupants, staff movement, and parked cars.
- Synthesized ambient music and sound effects, volume/mute controls, graphics settings, reduced motion, and optional arrival pauses.
- Local automatic saves, previous-save recovery, validated import/export, twelve achievements, and best-score tracking.
- In-game guide, standalone player guide, desktop offline launch, and source with reproducible build commands.

## Verified on the final game build

**17 automated tests passed, 0 failed.**

The full-campaign test ran **72 complete campaigns**: 24 deterministic starting seeds on each of the three difficulty settings. Policies included careful spending and an investment strategy with staff, room expansion, coffee, and renovation. All of those runs finished successfully; each visited all seven chapters and fourteen story decisions. This establishes that the campaign is mechanically finishable, not that it has received human difficulty tuning.

Additional coverage:

- A genuine losing campaign and restrictions on endless unlocks.
- Endless progression past night eight; supplier credit charged at sunrise.
- Rejection of unaffordable bookings, duplicate check-ins, duplicate purchases, and repeat loans.
- Cleaning timing, supply consumption, simultaneous independent staff work, and correct shift wages.
- Functional renovations, expansion, and restrictions on construction during a night.
- Guest patience and ignored-request consequences.
- An affordable response to every story event, even with no cash or supplies.
- Save roundtrips during work, arrivals, decisions, and campaign endings.
- Rejection of malformed save data, bad staff/jobs, unknown or inherited event keys, invalid figures, null queued guests, and missing reports.
- Bounded time advances that cannot skip story decisions.
- Offline HTML asset references, bundled classic JavaScript syntax, and absence of runtime module imports.

Source inspection also confirmed handlers for all 47 statically named interface actions, valid JavaScript syntax in all main modules, balanced stylesheet blocks, and no external stylesheet/font references. Archive creation checks every included file against a SHA-256 manifest and checks the ZIP for corruption.

## Testing boundary

Visual browser testing and hands-on physical-device testing were **not performed**. The mobile interface, touch controls, and low-quality graphics option are implemented, but real-device rendering and performance remain unverified. Automated game simulations do not verify pixels, touch ergonomics, sound playback, or GPU performance.

If WebGL 2 cannot initialize, the game explains the problem and preserves management through the Rooms register. Modern desktop browsers can launch the extracted `index.html` directly. Use a static web host for phones/tablets; local iOS Files previews are not a dependable HTML-game runtime.

## Package layout

- `index.html` and `assets/`: ready-to-play game, all dependencies included.
- `PLAYER-GUIDE.html`: offline illustrated-by-layout handbook; no external assets.
- `README-FIRST.txt`, `README.md`, and this file: launch instructions and scope.
- `THREE-LICENSE.txt`: bundled Three.js MIT license.
- `VERSION.txt`: game and rendering-library versions.
- `SOURCE/`: the complete development project, readable modules, source styling, tests, and build/packaging scripts.
- `FILE-MANIFEST.json`: file sizes and SHA-256 hashes for every other ZIP member.

## Privacy and saves

The game makes no service calls and collects no analytics. Saves and settings stay in browser storage. Export a JSON campaign before switching browser, host, or device. A campaign export includes that campaign's earned achievements; global achievements from other campaigns remain browser-local.
