# MusashiMap

Interactive, spoiler-safe map for following movements, relationships and narrative context in Eiji Yoshikawa's *Musashi*.

## Project goals

- Represent character locations chapter by chapter.
- Track arrivals, departures, journeys, meetings and relevant events.
- Provide a progressive micro-wiki without future-book spoilers.
- Keep explicit facts, deductions and uncertainty distinguishable.
- Preserve unresolved geography instead of inventing coordinates.
- Remain a static application deployable through GitHub Pages.

## Source corpus and publication boundary

The repository contains 112 chapter-level research sources under
`data/source/book1/` through `data/source/book7/`. The complete registry is
`data/source/musashi-index.txt`.

The registry is deliberately separate from publication. Books I–VII (sections
1–112) are normalized production data and are visible in the application.
The canonical research manifests remain as immutable provenance and hand-off
records; `data/reader-progress.json` is the sole publication authority.

## Validation

Run the same gates used by deployment from the repository root:

```bash
node tools/validate-frontend.mjs
node tools/validate-data.mjs
node tools/validate-staging.mjs
node js/runtime-safety.test.mjs
node --test tools/tests/*.test.mjs
node tools/build-pages.mjs
node tools/validate-frontend.mjs --root _site
node tools/validate-pages-artifact.mjs
```

The semantic validator requires events and character states for every published
section. Later chapter records and canonical staging manifests may coexist with
production without leaking into the reader.

## Research workflow

The reusable chapter-by-chapter workflow is documented in
`docs/book-research-workflow.md`; the normalized Books III–VII hand-off format
is defined in `docs/book-staging-contract.md`.

Its core sequence is:

1. verify every local source file;
2. extract each chapter independently;
3. reconcile names, identities, presences and movements across chapters;
4. validate only geography and historical context against authoritative web sources;
5. preserve uncertain claims and unmapped places explicitly;
6. pass narrative, spoiler, referential and technical audits before publication.

## Current status

- Books I–VII: production data complete and validated (`PASS`), 112 published sections.
- Canonical staging: Books III–VII remain validated as research provenance.
- Global source registry: 112/112 chapters.
- Runtime: publication-aware navigation, spoiler firewall and graceful basemap degradation.
- Frontend/CI: semantic/staging gates, runtime tests and a spoiler-filtered Pages artifact with zero frontend validator warnings.

See `CHECKPOINT.md` for the hand-off state and `ROADMAP.md` for the next migration steps.
