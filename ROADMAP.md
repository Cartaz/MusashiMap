# MusashiMap — Project Roadmap

> Living project record. Update this file whenever a major research, data-model, or product milestone is completed. The goal is to preserve context so future work does not repeat completed research or drift from the project's original purpose.

## 1. Product goal

MusashiMap is a **follow-along reading companion for Eiji Yoshikawa's _Musashi_**, not a general historical GIS or encyclopedia.

The core experience should let a reader follow the current scene geographically, understand who is present and where they are, and consult a compact historical micro-wiki without exposing information that the reader has not reached yet.

Guiding principle:

> The map represents the novel first. Historical reconstruction is supporting context, not a replacement for the novel.

## 2. Source policy

### Primary narrative source

All claims about what the novel says must be derived from the Internet Archive transcription:

`https://archive.org/stream/EijiYoshikawaMusashi/Eiji%20Yoshikawa%20-%20Musashi_djvu.txt`

### External sources

External sources are allowed for modern geographic identification, modern coordinates, historical/topographic verification, and historical context used by the micro-wiki. They must never be used to manufacture or overwrite novel evidence.

## 3. Completed work

### Book I narrative dataset

Book I / _Earth_ is structured into eight project-local sections with narrative analysis, character states, location registry, normalized movements, events and identity checkpoints. Intended destinations are distinguished from confirmed arrivals.

### Geographic research

A high-precision topographic methodology was established and applied to Book I. Modern identification, geographic confidence, historical compatibility and modern coordinates are separate concepts. The two-round research stopping rule prevents low-value topographic rabbit holes.

### Historical micro-wiki

The micro-wiki is a compact contextual lookup for tertiary historical references. The novel supplies the trigger, reading context and spoiler boundary; an authoritative external source supplies the 2–3 line historical explanation. The bounded Book I audit is closed.

### Reader progress and spoiler firewall

`data/reader-progress.json` and `js/reader-progress.js` define the canonical section visibility contract. The micro-wiki already consumes it, so future information is not rendered before its narrative trigger.

### Initial geographic map integration

The placeholder central panel was replaced by a live Leaflet map with narrative markers, character-state markers, section-scoped movements and uncertainty-aware location markers. Approximate/area coordinates are allowed when they materially improve the follow-along experience, but their precision is explicitly encoded in the data.

The map deliberately avoids drawing the entire novel's route network. Only the current section's contextual locations and explicit movements are rendered.

### Mobile map UX

The mobile layout was tuned for narrow screens such as the iPhone 13 mini: the map is the dominant element, the character filter collapses, the long map note is suppressed, and the information panel moves below the map.

### Map label/basemap checkpoint

The project tested several basemap approaches. Raster OSM gave the desired geographic density but rendered Japanese labels as Kanji; CARTO's no-label variant removed too much context; a Wikimedia raster endpoint produced a blank map and was abandoned.

The current solution is a **vector OpenFreeMap/OpenMapTiles-derived basemap rendered through MapLibre GL Leaflet**, so label fields can be selected at runtime. MapLibre's vector layer is retained inside the existing Leaflet map so the MusashiMap markers and movement overlays remain unchanged. The label expression prefers Japanese romanization fields (`name:ja-Latn`, then legacy `name:ja_rm`) and falls back to Latin/English names rather than deliberately requesting the Japanese Kanji field.

OpenFreeMap documents its MapLibre integration and OpenMapTiles-derived data; OpenMapTiles documents the Japanese (Latin) localization and multilingual name fields. citeturn5search1turn0search0turn4search3

## 4. Current work in progress

### A. Canonical Book I data validation — IN PROGRESS

Validate the existing structured datasets together rather than reopening research unnecessarily. Focus on contradictions and broken references.

### B. Reader-progress integration — IN PROGRESS

The base engine, micro-wiki consumer and map renderer exist. The remaining work is to make all map visibility decisions consume the same canonical progress contract directly rather than relying on duplicated UI listeners.

### C. Geographic layer — IN PROGRESS

The researched locations now include logical area anchors where exact coordinates were not justified. Future additions should be selective and should not reopen closed topographic investigations unless the map exposes a concrete contradiction.

### D. Basemap rendering verification — IN PROGRESS

The new vector basemap and label-selection code are committed, but the live GitHub Pages URL is currently not fetchable through the available web renderer (cache miss). Therefore the vector-label migration has been **code-reviewed and source-verified but not visually certified from the live page in this session**. The first post-deploy check on a real browser, preferably the iPhone 13 mini, is required before calling this milestone closed.

### E. Luni mapping — BLOCKED / DEFERRED

Do not invent or infer the Luni chapter numbering from memory. When the actual edition index is available, map Archive.org sections to Luni chapters explicitly.

## 5. Next product milestones

### Milestone 1 — Verify the vector basemap on the live site

Confirm that:

- the map renders normally;
- modern geographic context remains dense enough;
- Japanese labels are rendered in Latin script where the tile data provides a romanized name;
- there are no unexpected Kanji labels caused by fallback to `name`;
- Leaflet markers, popups, routes and section changes remain functional;
- the layout remains usable on the iPhone 13 mini.

### Milestone 2 — Canonical map/progress integration

Move the temporary map wiring into the same reader-progress renderer used by the rest of the application so section changes have one authoritative state transition.

### Milestone 3 — Geographic layer completion

Add only already-researched coordinates/area anchors where they improve the follow-along. Preserve `exact`, `area`, `approximate_area` and `modern_literary_reference` distinctions.

### Milestone 4 — Follow-along map UX

Refine the map around the current reading state: current location, current movement, visible previous locations and useful uncertainty cues. Keep the map visually dominant and the context panel collapsible where appropriate.

### Milestone 5 — Reading test

Advance one section at a time, inspect the map, characters, events and wiki, then rewind and verify that future information disappears.

## 6. Explicit non-goals

MusashiMap is not currently trying to become a complete historical atlas, a scholarly reconstruction of every 1600 road, a general biography database, a replacement for the novel, or a GIS requiring exact historical coordinates for every ambiguous toponym.

Precision is valuable when it changes the reader's understanding. False precision is worse than an explicitly uncertain area.

## 7. Working rules for future agents

1. Read this roadmap before beginning new research.
2. Check existing datasets and research notes before repeating research.
3. Treat Archive.org as the sole authority for claims about the novel.
4. Use external sources only for explicitly separated modern/historical context.
5. For the micro-wiki, use the novel only to identify the trigger and reading context; use an authoritative external source for the historical summary.
6. Keep micro-wiki summaries to roughly 2–3 lines unless ambiguity requires more research.
7. Preserve uncertainty instead of inventing coordinates.
8. Apply the two-round stopping rule to difficult topographic identifications.
9. Prefer network consistency over name matching.
10. Never leak future information through the map or micro-wiki.
11. Do not expand research merely because a more precise answer is theoretically possible.
12. Optimize for the usefulness of the reading companion.
13. Do not infer the Luni chapter mapping until the actual edition index is available.
14. Use the canonical reader-progress engine as the sole source of section visibility decisions.
15. Keep novel-trigger data and external historical summaries semantically separate.
16. Do not pin a location merely because a modern name matches; require the stored confidence/status to justify a coordinate.
17. Treat the basemap as a presentation layer: never let it overwrite MusashiMap's narrative location data.
18. Prefer vector basemaps when label language must be controlled; raster tiles cannot have their baked-in labels translated by CSS/JavaScript.

## 8. Current state at a glance

```text
PROJECT FOUNDATION              DONE
BOOK I STRUCTURED DATA          DONE / VALIDATING
SPOILER-SAFE CHARACTER MODEL    DONE
LOCATION NORMALIZATION          DONE / VALIDATING
TOPOGRAPHIC METHODOLOGY         DONE
TOPOGRAPHIC INITIAL AUDIT       DONE / SELECTIVE FOLLOW-UP ONLY
HISTORICAL MICRO-WIKI MODEL     DONE
MICRO-WIKI SOURCE AUDIT         DONE — BOUNDED PASS CLOSED
BOOK I PRIMARY-TEXT AUDIT       DONE — BOUNDED PASS CLOSED
READER PROGRESS MODEL           DONE
READER PROGRESS ENGINE          DONE / INTEGRATING
MICRO-WIKI UI                   DONE
MOBILE UI                       DONE / VALIDATING
GEOGRAPHIC MAP                  DONE / VALIDATING
VECTOR BASEMAP                  IMPLEMENTED / LIVE VISUAL CHECK PENDING
ROMANIZED MAP LABELS            IMPLEMENTED / LIVE VISUAL CHECK PENDING
ARCHIVE → LUNI MAPPING          DEFERRED — INDEX NEEDED
CANONICAL MAP/PROGRESS WIRING   NEXT
FULL READING TEST               LATER
```

The roadmap is intentionally a living document. Update it at each meaningful milestone rather than creating a separate history document that can drift out of date.
