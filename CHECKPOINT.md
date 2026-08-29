# MusashiMap — Checkpoint

Date: 2026-08-29

## Current state

All seven books are normalized production data. The app publishes sections
1–112 and derives every navigation and spoiler decision from
`data/reader-progress.json`. Canonical manifests for Books III–VII remain
validated research provenance rather than a second publication authority.

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
- Migrated Book III atomically into production: 57 events, 41 chapter states,
  22 new characters, 33 new locations and a six-group narrative registry.
- Added temporal identity windows for the Kojirō and Baiken/Kōhei reveals,
  including runtime tests against premature names in event prose.
- Audited Book III movement semantics so intentions, routes, uncertain
  departures and confirmed arrivals remain distinct.
- Migrated Book IV atomically into production: 116 events, 71 chapter states,
  23 new characters, 35 new locations and six new narrative groups.
- Reused four established places and merged later Yoshioka collective presence
  into the existing group instead of creating parallel canonical records.
- Added five mature relationships, seven progressively gated historical-context
  cards and the section-35 end of Matahachi's Kojirō impersonation.
- Added line-level evidence to critical reveals, deaths and departures, plus a
  semantic correction ledger in the Book IV production migration audit.
- Strengthened route validation so referenced-only reports cannot produce map
  geometry, and audited every Book IV warning at the section-53 boundary.
- Migrated Book V atomically into production: 105 events, 86 progressive
  chapter states, 29 new characters, 48 new locations and eight new groups.
- Replaced the sparse 24-state Book V staging ledger with chapter-progressive
  production states without weakening the runtime's state contract.
- Added 17 reveal-gated relationships, three temporal identity windows and ten
  progressive historical-context cards for Book V.
- Made character-wiki display names genuinely progressive across runtime,
  validation and Pages filtering, with regression coverage for Sannosuke/Iori.
- Added line-level evidence to critical Book V reveals, deaths, departures and
  time jumps, plus a detailed semantic correction ledger.
- Migrated Book VI atomically into production: 50 events, 35 chapter states,
  15 new characters, 22 new locations and seven new groups.
- Reconciled Ono Tadaaki with Mikogami Tenzen and added progressive identity
  windows for that reveal and for Daizō/Mizoguchi Shinano.
- Split mixed Book VI scenes into stationary action and physical movement so
  non-travelers cannot acquire route geometry.
- Preserved the section-96 Iori–Otsū clue as a strong inference rather than a
  canonical relationship or completed reunion.
- Retained line ranges for every staging event and state and added exact ranges
  to all production normalization events.
- Migrated Book VII atomically into production: 82 events, 49 progressive
  states, 30 new characters, 39 new locations and 12 groups.
- Reconciled Muka, Torazō and Toriumi Benzō/Rinshōbō with temporal identity
  windows instead of spoiler-prone global aliases.
- Separated letters, farewells, intended crossings and actual travel so only
  physical travelers acquire route geometry.
- Preserved Akemi's baby's unknown biological paternity, the absence of a
  stated Musashi–Otsū ceremony and Musashi's unrecorded final destination.
- Added seven progressively gated historical-context cards from institutional
  and municipal sources without using them as plot evidence.

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
production data     1 ----------------------------------------------- 112
research provenance  Books III ---------------------------------- VII
reader-visible      1 ----------------------------------------------- 112
```

Registering or scraping a chapter does not publish it. The final boundary moved
to section 112 only after Book VII events, states, context and spoiler timing
were migrated to production and the semantic gate passed at that boundary.

## Remaining work

1. Extend identities, relationships and progressive context only after their
   reveal timing has been audited for the target book.
2. Geocode only locations supported by sufficiently precise authoritative
   evidence; retain `null` for private, fictional or indeterminate places.
3. Repeat visual certification after every publication increment. The overlay
   and responsive layout have been exercised in headless Firefox; the vector
   canvas still merits a final check on a browser with hardware graphics.
4. Keep the Luni-edition mapping deferred until its actual index is available.

## Permanent constraints

- Local chapter files are the primary narrative evidence.
- Online sources validate geography/history, not plot claims.
- A mention is never promoted to physical presence.
- An intended destination is never promoted to an arrival.
- Later revelations never resolve earlier reader-visible ambiguity.
- Unknown coordinates, identities and outcomes remain explicitly unknown.
