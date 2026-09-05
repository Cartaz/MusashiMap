# MusashiMap

[![Deploy to GitHub Pages](https://github.com/Cartaz/MusashiMap/actions/workflows/pages.yml/badge.svg)](https://github.com/Cartaz/MusashiMap/actions/workflows/pages.yml)

An interactive, spoiler-safe atlas for following people, journeys and historical context in Eiji Yoshikawa's *Musashi*.

[Open the map](https://cartaz.github.io/MusashiMap/)

## What it does

MusashiMap reconstructs the novel chapter by chapter. The reader selects the last chapter they have completed; the map, event timeline, character positions and micro-wiki then expose only information available at that point.

- Tracks physical presence, last known position, movements and intended destinations.
- Separates direct narrative evidence, reported information and inference.
- Reveals aliases and identities only when the novel does.
- Keeps uncertain, fictional or insufficiently documented places unmapped instead of inventing coordinates.
- Degrades gracefully if the vector basemap is unavailable.
- Runs as a static site with no backend and is deployable on GitHub Pages.

## Dataset status

All seven books are published and validated.

| Dataset | Coverage |
|---|---:|
| Books | 7 / 7 |
| Chapters | 112 / 112 |
| Characters | 155 |
| Locations | 229 |
| Narrative events | 568 |
| Chapter-level character states | 419 |
| Relationships | 81 |

This table describes repository dataset coverage, not browser UI surfaces. Each validated record in `data/relationships.json` carries a `first_section`, but the current browser runtime does not load or render this dataset and the Pages builder does not publish it. Relationships are retained for audit/research and possible future UI work.

`data/reader-progress.json` is the sole publication boundary. Source registration and research manifests never make future material visible by themselves.

## Run locally

The application has no install step or local package dependencies. Serve the repository over HTTP (the browser loads the mapping libraries, fonts and basemap from their public providers):

```bash
python3 -m http.server 8766
```

Then open `http://localhost:8766/`.

## Validate and build

Node.js 22 is used in CI. Run the same gates as the Pages workflow from the repository root:

```bash
node tools/validate-frontend.mjs
node tools/validate-data.mjs
node tools/validate-research-manifests.mjs
node tools/validate-source-audit.mjs
node --test tools/tests/*.test.mjs
node js/runtime-safety.test.mjs
node tools/build-pages.mjs
node tools/validate-frontend.mjs --root _site
node tools/validate-pages-artifact.mjs
```

`tools/validate-data.mjs` is the executable contract for production data structure and cross-file invariants; there is no separate field schema to keep in sync.

`tools/validate-research-manifests.mjs` is the read-only integrity gate for the retained Books III–VII research provenance. Migration and normalization are not runtime or maintenance responsibilities.

`tools/build-pages.mjs` creates the minimal spoiler-filtered `_site/` artifact. Raw chapter sources, research dossiers and development files are deliberately excluded.

## Repository map

```text
css/        responsive presentation and map UI
data/       production data, publication state and local source corpus
docs/       research workflow, provenance format and movement semantics
js/         application runtime and safety tests
research/   canonical book manifests and consolidated audits
tools/      validators, audit generators and Pages builder
```

The canonical research index is [research/README.md](research/README.md). The reusable extraction procedure is documented in [docs/book-research-workflow.md](docs/book-research-workflow.md), the retained Books III–VII provenance format in [docs/book-staging-contract.md](docs/book-staging-contract.md), and route semantics in [docs/movement-semantics.md](docs/movement-semantics.md).

## Evidence policy

The local chapter files under `data/source/book1/` through `data/source/book7/` are the authority for plot, chronology, presence and movement. Institutional, municipal and academic web sources are used only to verify modern geography, topography and historical context. A modern match never justifies a precise coordinate for a private residence, fictional place or indeterminate route.

Two generated, repository-wide reports make the current audit reproducible:

```bash
node tools/generate-character-chapter-audit.mjs
node tools/generate-geography-audit.mjs
```

They produce [the character audit](research/character-chapter-audit.md) and [the geography audit](research/geography-book-audit.md).

After changing production data or audit configuration, regenerate these reports and commit any resulting changes together with their inputs. The test suite checks that the committed reports match the current data.

## Deployment

Push `main` to GitHub. The workflow in `.github/workflows/pages.yml` validates the complete repository, builds `_site/` and deploys it through GitHub Pages. In the repository settings, **Pages → Build and deployment → Source** must be set to **GitHub Actions**.

## Maintenance

The original migration roadmap is complete and has been retired. Ongoing work is limited to evidence-backed corrections, stronger authoritative geography, regression checks on real devices and browsers, and mapping to other editions only when their actual chapter indexes are available.

This is an independent companion project. *Musashi* and related names remain the property of their respective rights holders.
