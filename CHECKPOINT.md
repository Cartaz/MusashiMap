# MusashiMap — Checkpoint

Date: 2026-08-20

## Current state

Books I (*Earth*) and II (*Water*) are normalized production data. The app
publishes sections 1–19 and derives every navigation and spoiler decision from
`data/reader-progress.json`.

Books III–VII have been read in full, extracted chapter by chapter, reconciled
across chapters and checked against the local sources. Their 93 chapters remain
in canonical research staging: they are deliberately not exposed by the app.

## Completed in this milestone

### Corpus and research

- Registered all 112 local chapter files, from `b1c1` through `b7c16`, with
  contiguous global sections and source titles.
- Migrated Book II into production: 113 new events and 85 new chapter states.
- Added progressive Book II relationships, historical entities and micro-wiki
  entries with section gates.
- Produced canonical staging manifests and narrative audits for Books III–VII.
- Kept unresolved places coordinate-free and separated physical presence from
  mentions, reports, memories and future revelations.
- Added an online validation ledger using external sources only for geography
  and historical context, never as a substitute for the novel's narrative.

### Runtime and spoiler safety

- Made `reader-progress.state.maximum_section` the publication authority.
- Removed the hard-coded Book I navigation ceiling.
- Unified character visibility, latest-state reconstruction and position
  resolution between the sidebar and map.
- Prevented character IDs or wiki entries from appearing before textual evidence.
- Made narrative overlays independent of the vector basemap and added an OSM
  raster fallback plus explicit degraded states for CDN/style failures.
- Added focused runtime tests for publication bounds, sparse sections, rewinds,
  spoiler gates and position resolution.

### Validation and frontend

- Replaced the Book I-only gate with a publication-aware semantic validator.
- Added a separate canonical staging validator for Books III–VII.
- Added CLI regression tests and wired frontend, production data, staging data
  and test gates into GitHub Pages CI.
- Replaced the full-repository Pages upload with a minimal `_site` artifact;
  raw sources, research manifests and unpublished chapter metadata are excluded.
- Consolidated the CSS entry point, removed same-scope selector duplicates and
  implemented the unmapped-location overlay styles.
- Reduced frontend validator warnings to zero.

## Publication model

```text
source registry     1 ----------------------------------------------- 112
production data     1 ---------------- 19
research staging                         20 ------------------------- 112
reader-visible      1 ---------------- 19
```

Registering or scraping a chapter does not publish it. A book can move beyond
section 19 only after its events, states, context and spoiler timing have been
migrated to production and the semantic gate passes at the new boundary.

## Remaining work

1. Migrate Books III–VII from their canonical manifests into production, one
   complete book at a time.
2. Extend identities, relationships and progressive context only after their
   reveal timing has been audited for the target book.
3. Geocode only locations supported by sufficiently precise authoritative
   evidence; retain `null` for private, fictional or indeterminate places.
4. Repeat visual certification after every publication increment. The overlay
   and responsive layout have been exercised in headless Firefox; the vector
   canvas still merits a final check on a browser with hardware graphics.
5. Keep the Luni-edition mapping deferred until its actual index is available.

## Permanent constraints

- Local chapter files are the primary narrative evidence.
- Online sources validate geography/history, not plot claims.
- A mention is never promoted to physical presence.
- An intended destination is never promoted to an arrival.
- Later revelations never resolve earlier reader-visible ambiguity.
- Unknown coordinates, identities and outcomes remain explicitly unknown.
