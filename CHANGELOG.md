# Changelog

This file records the user-visible game changes, source and package changes, validation results, and repository history for Last Stop Motel. Commit entries use repository dates; verification entries use the date of the check.

## Current state

- **Current release version:** 1.0.2
- **Playable game:** repository-root `index.html` with the `assets/` folder kept beside it
- **Online game:** https://keepithandy.github.io/last-stop-motel/
- **Editable source:** `SOURCE/`
- **Save schema:** 1
- **External services:** none; the game is designed to play offline

## Unreleased changes after 1.0.2

### 2026-09-16 — Hosted browser and repository integrity check

- Confirmed the published game renders its 3D scene and supports a standard campaign start, room cleaning, an arrival pause, a room suggestion, a paid check-in, and a live switch to compact mode.
- Confirmed all 18 automated tests pass after adding the manifest check. Physical-device performance, touch controls, and audible playback remain unverified.
- Corrected the online-play instructions and the repository file manifest. Added an automated check for manifest hashes and sizes, with consistent LF line endings across platforms.

### 2026-09-09 — GitHub Pages deployment

Commit: [`b0e0daa`](https://github.com/keepithandy/last-stop-motel/commit/b0e0daa6d5ae8bba3642f4ed50a616d365c08a7e) — `Deploy playable game to GitHub Pages`

- Added a workflow that publishes the root `index.html` and `assets/` on pushes to `main`.
- Added the online-play link to the repository README.

### 2026-09-06 — Imported-save audio startup

Commit: [`bca4529`](https://github.com/keepithandy/last-stop-motel/commit/bca4529b6c7ec1cf8ad543154e3ef2e09056f584) — `Start audio after importing a campaign`

#### Quality of life

- Importing a valid campaign now starts the audio system immediately.
- Imported games now behave the same way as a new campaign or a resumed local save: music and sound effects are ready as soon as the imported game opens.
- This specifically improves importing a save from the title screen, where the audio system might otherwise not have been initialized until a later interaction.

#### Package synchronization

- Rebuilt `SOURCE/dist/assets/game.js` from the edited source.
- Replaced the root `assets/game.js` with the same rebuilt playable bundle.
- Updated `FILE-MANIFEST.json` hashes and file sizes for the edited source and both generated game bundles.
- The game version and save schema remain **1.0.2** and **1**. Existing campaign saves remain compatible.

#### Verification

- `node --test tests/*.test.js`: **17 passed, 0 failed**.
- Verified all **39** entries in `FILE-MANIFEST.json` against their SHA-256 hashes.
- Checked the change set for whitespace errors.

## Version 1.0.2 — 2026-09-05

Commit: [`760119c`](https://github.com/keepithandy/last-stop-motel/commit/760119c52cfc6259b3fff13a196d1dc0a42077c4) — `Add Last Stop Motel 1.0.2 game, source, documentation, and tests`

Version 1.0.2 established the complete, self-contained offline game release. It includes the playable root package, full editable source, build tools, tests, release documentation, player guide, license, and file-integrity manifest.

### Core campaign

- Added a complete seven-night single-player roadside motel management campaign.
- Added three campaign difficulty settings:
  - **Scenic route:** $1,000 cash, $1,700 debt, patient travelers, slower room wear.
  - **The long week:** $750 cash, $2,300 debt, intended campaign balance.
  - **Against the odds:** $650 cash, $2,900 debt, less patient travelers, faster room wear.
- Added seven authored nightly chapters with changing conditions and narrative context.
- Added fourteen story decisions, two per campaign night.
- Added campaign success conditions: finish night seven with enough cash to pay the debt and at least 40 reputation.
- Added distinct campaign endings for insolvency, insufficient debt payment, insufficient reputation, a standard win, and a high-reputation win.
- Added endless continuation after a successful campaign.
- Added growing endless-mode demand and supplier-credit repayment in the following night's expenses.

### Motel and room management

- Added ten modeled motel rooms: six available at the start and four closed west-wing rooms that can be reopened between nights.
- Added room cleanliness, room condition, guest occupancy, active work, guest requests, quiet-room status, and renovation quality.
- Added opening and preparation gameplay between nights.
- Added cleaning, repairs, and guest-service jobs.
- Added linen/supply consumption for cleaning, repairs, and applicable guest requests.
- Added replacement-parts costs for repairs.
- Added room quality upgrades from level 0 through level 3.
- Added room reopening costs that rise as more of the west wing is restored.
- Added dynamic room status labels: Ready, Occupied, Needs cleaning, Needs repair, Cleaning, Repairing, Guest service, and Closed.
- Added three room-rate choices: value, standard, and premium.
- Added immediate room prices based on selected rate and room quality.
- Added automatic night-end cleanliness and condition wear based on guests and difficulty.

### Travelers and front-desk play

- Added ten traveler archetypes with different budgets, comfort preferences, quiet-room needs, patience, tips, text, and visual markers.
- Added randomly named guests and deterministic seeded generation for reproducible campaigns and tests.
- Added staged traveler arrivals across each night.
- Added waiting queues, patience timers, and reputation loss when guests leave after waiting too long.
- Added guest budgets and rejection of rooms priced above the guest's budget.
- Added predicted-happiness quotes that account for room quality, condition, quiet preferences, price tier, coffee, and garden improvements.
- Added a **Find best room** action that selects the best eligible room without making a booking automatically.
- Added guest check-ins, room income, tips, happiness, reputation changes, requests, and night-end departures.
- Added the ability to refer a waiting traveler elsewhere.

### Staff, property improvements, and finances

- Added three hireable staff roles with automatic task assignment and shift wages:
  - Rosa prioritizes cleaning.
  - Eli prioritizes repairs.
  - June prioritizes guest service.
- Added staff shift toggles between nights.
- Added player energy, player job assignment, energy penalties for work, overnight recovery, and paid meal breaks.
- Added six property improvements, including a roadside sign, coffee, laundry, tools, garden, and insulation.
- Added visible motel-scene changes for applicable improvements.
- Added nightly utilities and staff wages.
- Added regular supply deliveries in packs of six or twelve.
- Added emergency supplies on credit, limited to once per night.
- Added a one-time emergency loan during the main campaign.
- Added a nightly ledger, lifetime stats, nightly report, debt tracking, and score calculation.

### Interface and accessibility

- Added the full desktop management interface: Reception, Rooms, Office, Team, Improve, Ledger, Settings, How to play, credits, achievements, and camera controls.
- Added a compact mobile layout selectable from Settings.
- Added compact-mode navigation with one bottom panel at a time and a smaller four-tab workflow.
- Added keyboard controls: Space for pause/resume, 1/2/3 for speed, R for Rooms, H for the guide, and Escape for ordinary menus or room details.
- Added pointer, touch, scroll-wheel, and pinch controls for the 3D view.
- Added focus restoration after interface redraws and visible keyboard-focus styling.
- Added automatic pause on arrivals, with a setting to disable it.
- Added pause on browser tab hiding during an active night.
- Added in-game notifications, warnings, confirmations, status indicators, progress meters, and nightly reports.
- Added a WebGL fallback that leaves all management actions available through the Rooms register if the 3D view cannot start.

### 3D scene and audio

- Added a self-contained Three.js low-poly motel scene.
- Added room selection, camera rotation, zoom, reset, room highlights, status markers, guests, staff, cars, lights, rain, cacti, road, desert terrain, and night-time presentation.
- Added quality settings, compact-mode visual limits, reduced motion, and a compact-mode 30 FPS render cap.
- Added synthesized background music and sound effects with volume, music, and mute controls.
- Added audio suspension when the browser tab becomes hidden.

### Saves, privacy, and resilience

- Added automatic browser-local campaign saves.
- Added a previous-save backup before replacing a valid automatic save.
- Added local recovery from the previous automatic save when the current save cannot be read.
- Added JSON export and import of campaign saves.
- Added save-size limits and strict save validation before an imported campaign replaces the active game.
- Added validation for game format, schema, difficulty, numeric ranges, rooms, guests, requests, jobs, staff, upgrades, campaign events, reports, flags, history, and logs.
- Added twelve achievements, local best-score tracking, and local win tracking.
- Added no analytics, network calls, external fonts, advertisements, or accounts.

### Packaging, source, and documentation

- Added a playable offline root package with `index.html`, CSS, bundled JavaScript, guide, license, release notes, version information, and manifest.
- Added the full modular source project under `SOURCE/`.
- Added pinned Node dependencies: Three.js 0.185.1, esbuild 0.28.2, and Vite 8.2.2.
- Added a build script that produces a classic bundled script with no runtime module imports.
- Added a packaging script that creates a self-contained ZIP and verifies archive integrity.
- Added `README.md`, `README-FIRST.txt`, `PLAYER-GUIDE.html`, `RELEASE-NOTES.md`, `VERSION.txt`, and `THREE-LICENSE.txt`.
- Added `FILE-MANIFEST.json`, including SHA-256 hashes and byte counts for packaged files.

### Automated verification delivered with 1.0.2

- Added 17 automated tests.
- Added campaign simulations across 24 deterministic seeds on each of the three difficulty settings, for 72 complete successful campaigns in the documented test run.
- Added tests for campaign completion, endless continuation, losing outcomes, booking limits, room work, staff automation, wages, purchases, credit, story affordability, guest consequences, saves, hostile-save rejection, bounded time advances, offline assets, bundle syntax, and duplicate actions.
- Added release checks confirming local-only assets, an offline classic JavaScript bundle, no runtime imports, and included asset files.

### Known validation boundary

- Automated checks verify gameplay rules, save behavior, bundle structure, and package integrity.
- Hands-on physical-device testing, WebGL rendering validation on a real device, touch ergonomics, sound playback, and GPU performance have not been completed in this repository environment.

## Repository documentation and presentation — 2026-09-05

### Initial repository history

- [`392fba9`](https://github.com/keepithandy/last-stop-motel/commit/392fba9915c24b5cf2d823300ca9013524969b09) — Initial commit.
- [`758c2ef`](https://github.com/keepithandy/last-stop-motel/commit/758c2ef60f13e3208525040b5f26433420364957) — Initialized the Last Stop Motel repository.

### README cover artwork

- [`b578c2a`](https://github.com/keepithandy/last-stop-motel/commit/b578c2ab781c9d7c3bd9c9b3c5722d484cd1bb6c) — Added a generated README cover image and recorded its production prompt in `docs/cover-prompt.txt`.
- [`9c62b7a`](https://github.com/keepithandy/last-stop-motel/commit/9c62b7afcc359839bb0c2226966e107eb4d3671e) — Replaced the realistic cover with low-poly artwork aligned to the actual game: an overhead desert motel, open rooms, coral bedcovers, teal signs, cacti, parking, and the game's overall visual language.
- Updated the repository file manifest after each cover replacement.

## Repository conventions

- Make gameplay and interface edits in `SOURCE/src/`.
- Rebuild the playable bundle so `SOURCE/dist/assets/game.js` and root `assets/game.js` remain synchronized.
- Update `FILE-MANIFEST.json` whenever a listed repository file changes; the release test verifies all listed files.
- Run `node --test tests/*.test.js` from `SOURCE/` after game-code changes.
- Keep user-facing version changes, save-schema changes, and compatibility notes documented in this changelog.
- Treat this file as the project record: add a dated entry for every player-visible feature, fix, balance adjustment, package release, or important tooling change.
