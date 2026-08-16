# MusashiMap

Interactive, spoiler-safe map for following the movements, relationships and narrative context of Eiji Yoshikawa's *Musashi*.

## Project goals

- Represent character locations chapter by chapter.
- Track arrivals, departures, journeys, meetings and other relevant events.
- Provide a progressive micro-wiki that does not reveal future information.
- Distinguish explicit textual facts from deductions and uncertainty.
- Preserve uncertainty instead of inventing geographic precision.
- Keep the application static and deployable through GitHub Pages.

## Source corpus

The project uses a canonical working text corpus for research. The repository stores the chapter-level research sources needed for the current workflow rather than a redundant full reproduction of the novel.

Book I is currently split under `data/source/musashi-book1/`, with `data/source/musashi-index.txt` providing the source index.

## Research workflow

The reusable book-by-book scraping, normalization and audit procedure is documented in:

`docs/book-research-workflow.md`

The workflow is deliberately chapter-oriented:

1. verify and split the source;
2. scrape each chapter independently;
3. perform a cross-chapter reconciliation pass;
4. update normalized entities, states, events and transitions;
5. audit narrative correctness, spoiler safety and technical integrity;
6. apply corrections and reach `PASS` before moving to the next book.

## Current status

**Book I — Earth: complete and audited (`PASS`).**

The current Book I dataset includes characters, chapter states, locations, location transitions, events, relationships, identities/aliases, historical/context entities and progressive micro-wiki data.

The current project checkpoint and next steps are maintained in `CHECKPOINT.md`.
