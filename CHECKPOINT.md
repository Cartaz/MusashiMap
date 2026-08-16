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

## What was completed in this session

- Confirmed the project URL used for the live site: `https://cartaz.github.io/MusashiMap/`.
- Diagnosed and fixed the historical micro-wiki loading/cache issue; the wiki is now confirmed functional by the user.
- Audited the mobile UI against the iPhone 13 mini constraint and reduced the mobile UI footprint so the map remains the dominant element.
- Fixed map reader-state synchronization so changing sections updates character markers instead of leaving stale positions.
- Added romanized names (`modern_name_romaji`) to map popups.
- Changed uncertain locations from "no pin" to explicitly encoded logical/area anchors when the available research justified an area-level position.
- Added uncertainty presentation through `coordinate_precision`, including exact/area/approximate-area/modern-literary-reference semantics.
- Tested several basemap approaches. The Wikimedia raster attempt was abandoned after producing a blank map. CARTO no-labels was rejected because it removed too much modern geographic context. CARTO Voyager was retained temporarily as the dense raster fallback.
- Implemented the vector-basemap solution: OpenFreeMap/OpenMapTiles-derived vector tiles through MapLibre GL Leaflet.
- Implemented runtime label selection that prefers `name:ja-Latn`, then legacy `name:ja_rm`, then `name:latin`, `name_en`, and finally `name`. The intent is to preserve modern geographic detail while avoiding deliberate fallback to Japanese Kanji where a romanized field exists.
- Removed the obsolete `js/map.js` placeholder so `js/map-runtime.js` is now the single map implementation.
- Updated `ROADMAP.md` with the state of the project and the remaining verification step.

## Known technical debt / discrepancies

### 1. Map/runtime state is not yet fully unified

`js/app.js` remains responsible for emitting `musashi:reader-state`, while `js/map-runtime.js` listens for that event. This works, but it is still a transitional integration rather than a single canonical renderer. The roadmap tracks full reader-progress/map integration as a future milestone.

### 2. Live visual certification is pending

The GitHub Pages deployment workflow can publish the site, but the available web renderer currently returns a cache miss for the live URL. Therefore the new OpenFreeMap/MapLibre basemap has been source-reviewed but cannot honestly be declared visually certified from this session.

The current GitHub Pages deployment for the latest commit is in progress. A real-browser check is still required.

### 3. Basemap labels depend on tile metadata

Vector rendering gives MusashiMap control over the label field, but it cannot invent romanization where the tile does not contain a romanized field. The fallback chain is intentionally Latin/English before the raw `name` field. If a particular feature still appears in Kanji because no Latin field exists, that should be treated as a basemap-data limitation and evaluated separately rather than silently modifying the narrative database.

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

Only after this check should the vector-basemap milestone be marked DONE.
