# MusashiMap — Narrative Analysis Protocol

## 1. Purpose

Convert the novel into structured, chapter-scoped information about:

- character presence;
- location;
- movement;
- activity;
- meetings;
- separations;
- relationships;
- uncertainty.

This protocol is designed for a **follow-along reading companion**, not for replacing the novel with an independently reconstructed historical model.

## 2. Analysis windows

Use overlapping windows:

- 1–2
- 2–3
- 3–4
- ...
- N–(N+1)

The overlap provides continuity checking. The final database remains chapter/event based.

## 3. Temporal rule

An event may only use information explicitly available in the analyzed text.

Do not use knowledge from later chapters to resolve an earlier ambiguity.

## 4. Evidence levels

Every extracted fact must have one of:

- `explicit`: directly stated or unambiguously shown.
- `strong_inference`: strongly implied by the text.
- `weak_inference`: plausible but not sufficiently certain.

The map should normally display only `explicit` and `strong_inference` facts. Weak inferences remain research data.

## 5. Location precision

Never invent coordinates or precision.

Allowed precision values:

- `exact`
- `site`
- `settlement`
- `area`
- `region`
- `route`
- `unknown`

A character travelling toward a destination is not considered to have arrived there until the text establishes arrival.

For modern geographical identification, follow `research/topographic-research-protocol.md`. A modern coordinate is an identification aid, not proof that the historical/narrative location occupied exactly the same physical point.

## 6. Movement events

Use:

- `arrival`
- `departure`
- `journey`

A journey may have:

- `origin`
- `destination`
- `route_note`

If either endpoint is unknown, retain the unknown value rather than guessing.

## 7. Character state

For each relevant chapter, derive the latest supported state:

- current location;
- activity;
- companions;
- current journey;
- last known origin.

Do not create a location state when the text does not support one.

## 8. Relationships

Only record relationships that are narratively established.

Use event-linked relationship records rather than assuming that two characters being in the same place means they know each other.

## 9. Names and aliases

Keep a canonical character ID separate from display names and aliases. This is essential for characters whose names, titles or forms of address vary.

## 10. Source traceability

Every event must identify:

- source corpus;
- source chapter;
- source scene/section when available;
- evidence level.

The exact prose of the novel must not be copied into the public application.

## 11. Canonical repository corpus

The repository is now the canonical working corpus for narrative scraping.

Primary source files are stored under:

```text
data/source/musashi-index.txt
data/source/book1/
data/source/book2/
...
data/source/book7/
```

Each book is separated into chapter text files before analytical scraping. These repository chapter files supersede the previously used Internet Archive working copy for narrative extraction.

External copies of the novel, including the Internet Archive transcription, must not be consulted to establish whether a character, place, event, movement, faction, or narrative detail occurs in the novel when the corresponding repository corpus is available.

External sources remain permitted for the later modern-geography, historical, and micro-Wiki research phases, after the narrative entity has been established from the repository corpus.

## 12. Luni correspondence

The repository corpus uses the project's canonical English chapter structure. Do not assume its chapter numbering automatically matches the Italian Luni edition.

A separate mapping table must be validated before the reader-facing chapter selector is finalized.

## 13. Quality checks

Before accepting a batch:

1. Check that every referenced character exists.
2. Check that every referenced location exists.
3. Check chronological continuity.
4. Check for impossible simultaneous states.
5. Check origin/destination consistency.
6. Check that no event leaks information from a later chapter.
7. Flag contradictions for manual review.
8. Confirm that the extracted material came from the corresponding repository source chapter.

## 14. Public UI rule

The application must never expose:

- future destinations;
- future meetings;
- future relationships;
- future deaths or outcomes;
- future events.

The database may contain them for research, but the reader-facing query layer must enforce the chapter cutoff.

## 15. Research-effort rule

Research depth must serve the reading companion. High precision is desirable, but research must stop when additional investigation no longer produces a meaningful improvement in the map.

For ambiguous topographical identifications, use the dedicated two-round protocol in `research/topographic-research-protocol.md`. After the allowed research rounds, preserve the uncertainty explicitly rather than continuing indefinitely or inventing a precise point.
