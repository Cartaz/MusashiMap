# MusashiMap — Checkpoint

Date: 2026-08-16

## Current live-product architecture

```text
index.html
  ├─ Leaflet 1.9.4
  ├─ MapLibre GL JS 4.7.1
  ├─ MapLibre GL Leaflet 0.1.3
  └─ js/map-runtime.js
        ├─ vector basemap: OpenFreeMap / OpenMapTiles-derived
        ├─ romanized-label override
        ├─ narrative location markers
        ├─ character-state markers
        └─ section-scoped routes

js/app.js
  └─ canonical reader state + UI
       ├─ characters
       ├─ events
       ├─ micro-wiki
       └─ musashi:reader-state event → map-runtime
```

## What is completed

### Product / map layer

- Confirmed the project URL used for the live site: `https://cartaz.github.io/MusashiMap/`.
- Diagnosed and fixed the historical micro-wiki loading/cache issue; the wiki is confirmed functional by the user.
- Audited the mobile UI against the iPhone 13 mini constraint and reduced the mobile UI footprint so the map remains the dominant element.
- Fixed map reader-state synchronization so changing sections updates character markers instead of leaving stale positions.
- Added romanized names (`modern_name_romaji`) to map popups.
- Changed uncertain locations from "no pin" to explicitly encoded logical/area anchors when the available research justified an area-level position.
- Added uncertainty presentation through `coordinate_precision`, including exact/area/approximate-area/modern-literary-reference semantics.
- Implemented the vector-basemap solution: OpenFreeMap/OpenMapTiles-derived vector tiles through MapLibre GL Leaflet.
- Implemented runtime label selection that prefers `name:ja-Latn`, then legacy `name:ja_rm`, then `name:latin`, `name_en`, and finally `name`.
- Removed the obsolete `js/map.js` placeholder so `js/map-runtime.js` is the single map implementation.

### Book I source and data layer

- All eight Book I chapter source files are present and non-empty under `data/source/musashi-book1/`.
- The chapter-by-chapter Book I scrape was rebuilt from the canonical source corpus.
- Character registry, character states, event ledger, movement transitions, location registry, entity index and contextual historical registry were rebuilt from that corpus.
- The approved Book I audit corrections F-01 through F-09 are now applied.
- Takuan chapter 7 has no physical companions; premature destinations in chapters 4–6 have been removed.
- The chapter 3 Takezo appearance is represented as an appearance rather than a confirmed movement edge.
- Event `b1c5-01` distinguishes physical participants from referenced characters through `referenced_characters`.
- Akamatsu Masanori is now a distinct historical-person context entity.
- The Art of War is now a first-class `historical_work` context entity.
- `data/schema.json` now describes the actual current Book I data model.
- `research/book1-data-audit-final-2026-08-16.md` records the final PASS state.

## Known technical debt / discrepancies

### 1. Map/runtime state is not yet fully unified

`js/app.js` remains responsible for emitting `musashi:reader-state`, while `js/map-runtime.js` listens for that event. This works, but it is still a transitional integration rather than a single canonical renderer. The roadmap tracks full reader-progress/map integration as a future milestone.

### 2. Live visual certification is pending

The GitHub Pages deployment workflow can publish the site, but the available web renderer previously returned a cache miss for the live URL. Therefore the new OpenFreeMap/MapLibre basemap should not be declared visually certified until it has been checked in a real browser.

### 3. Basemap labels depend on tile metadata

Vector rendering gives MusashiMap control over the label field, but it cannot invent romanization where the tile does not contain a romanized field. The fallback chain is intentionally Latin/English before the raw `name` field. If a particular feature still appears in Kanji because no Latin field exists, that is a basemap-data limitation rather than a narrative-database defect.

### 4. Luni mapping remains deferred

The project still does not have the user's Luni-edition index in the current working context. Do not infer Luni chapter numbers from memory. Archive.org sections remain the canonical internal narrative units until the actual Luni index is available.

## Immediate next action

After deployment, open the live site in a real browser and verify:

1. map is rendered;
2. geographic density is comparable to the desired OSM/CARTO experience;
3. Japanese geographic labels are predominantly romanized;
4. no black/blank basemap appears;
5. markers move with section changes;
6. uncertain-area markers remain visually distinguishable;
7. popups use Italian/romanized names;
8. mobile map remains usable on iPhone 13 mini;
9. micro-wiki still works;
10. no future information is exposed when moving backwards through sections.

The Book I data audit itself is now complete and PASS.
