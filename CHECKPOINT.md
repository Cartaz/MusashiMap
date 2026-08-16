# MusashiMap — Checkpoint

Date: 2026-08-16

## Current state

Book I (*Earth*) is the first fully scraped, normalized and audited narrative dataset. The live map and progressive wiki are functioning according to the current project design.

## What has been completed

### Source corpus

- Book I was reconstructed from the canonical working corpus and split into eight chapter files under `data/source/musashi-book1/`.
- `data/source/musashi-index.txt` records the source structure.
- The temporary PDF/full-text extraction artifacts were removed from the repository after the chapter files were verified.

### Book I research/data

- All eight Book I chapters were analyzed individually.
- A second cross-chapter pass reconciled repeated names, identities, appearances and movements.
- Character registry and chapter states were rebuilt.
- Location registry, location states and movement transitions were rebuilt.
- Event ledger was rebuilt.
- Entity index, identities, relationships and contextual historical entities were rebuilt.
- Progressive micro-wiki data was rebuilt.
- Historical/context entities are separated where appropriate from narrative characters.
- Explicit textual facts are distinguished from inference/uncertainty.
- The approved Book I audit corrections F-01 through F-09 are applied.
- Takuan chapter 7 has no physical companions; premature destinations in chapters 4–6 were removed.
- The chapter 3 Takezo appearance is represented as an appearance rather than a confirmed movement edge.
- Event `b1c5-01` distinguishes physical participants from referenced characters through `referenced_characters`.
- Akamatsu Masanori is a distinct historical-person context entity.
- The Art of War is a first-class `historical_work` context entity.
- `data/schema.json` describes the current Book I data model.
- `research/book1-data-audit-final-2026-08-16.md` records the final PASS state.

### Map / UI

- Romanized map labels and popup names are implemented.
- Unnecessary Japanese administrative suffixes are normalized for displayed place names.
- Uncertain locations use explicit area/approximate semantics rather than fabricated precision.
- The vector basemap solution uses MapLibre/OpenFreeMap/OpenMapTiles-derived data.
- Map reader-state synchronization updates character markers when the selected section changes.
- The micro-wiki is functional.
- Mobile UI was adjusted for the iPhone 13 mini constraint.
- The spoiler-safe reader model prevents future narrative information from being shown before its chapter.
- Map and sidebar event rendering now use the canonical event field names `origin`/`destination`.
- Map movement routes and contextual locations are filtered by the selected characters, matching the filter's stated behavior.
- Runtime cache version was bumped after the map fixes.

## Canonical workflow for future books

The reusable procedure is documented in `docs/book-research-workflow.md`.

The short version is:

1. Prepare and verify the source corpus.
2. Split the target book into individual chapter files.
3. Pass A: scrape each chapter independently for characters, places, events, historical/context entities, aliases and movements.
4. Pass B: compare all chapter results to reconcile repeated names, identities, appearances and cross-chapter movements.
5. Update registries, chapter states, events, transitions, relationships, identities, context and progressive wiki data.
6. Run narrative, spoiler and technical audits.
7. Apply and document corrections.
8. Repeat the relevant audits until the book reaches `PASS`.
9. Freeze the completed book and only then begin the next one.

## Remaining work

### Immediate next milestone

**Book II — Water**

- Add/verify the Book II source chapter files.
- Confirm its chapter index and exact chapter boundaries.
- Run the workflow in `docs/book-research-workflow.md` from step 1.
- Preserve continuity with Book I identities and locations while treating Book II revelations according to spoiler rules.

### Product / technical follow-up

- Perform a real-browser visual certification of the current live deployment, especially the MapLibre/OpenFreeMap basemap, romanized labels, movement routes and mobile layout.
- Continue unifying map visibility logic with the canonical reader-progress helpers; map section and character selection already come from canonical reader state, but latest-state reconstruction remains duplicated in `map-runtime.js`.
- Keep the Luni-edition chapter mapping deferred until the actual Luni index is available; do not infer it from memory.
- As the corpus grows, maintain the chapter-level source architecture so analysis never requires loading the entire novel unnecessarily.

## Important constraints for the next session

- Do not redo Book I scraping from scratch unless an audit identifies a concrete defect.
- Treat the current Book I dataset and final audit as the baseline.
- Use the source chapter files as the primary narrative evidence for future scraping.
- Do not introduce future-book information into Book I-visible state.
- Preserve uncertainty instead of inventing facts or geographic precision.
- Keep the workflow document updated if the process changes materially.
