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

## 9. Character/entity taxonomy and historical status

Character classification is **orthogonal**. Historical status must never be used as a substitute for narrative role or narrative presence.

For every person-like entity identified during research, track these fields:

| Field | Allowed values | Rule |
|---|---|---|
| `entity_type` | `character`, `historical_figure`, `group`, `other` | Describes the research entity. |
| `narrative_presence` | `active`, `mentioned`, `historical_context` | Whether the entity participates in the novel's current scene. |
| `narrative_role` | `primary`, `secondary`, `tertiary`, `none` | Importance in the novel, independent of historical status. |
| `historical_status` | `historical`, `fictional`, `fictionalized`, `unknown` | Historical identity status only when defensible. |
| `map_relevance` | `mapped`, `contextual`, `none` | Whether the entity should affect the reader-facing map. |

### Mandatory rules

1. **A historical person who actively participates in the novel is a character.** Do not move them into a separate historical-only bucket merely because they really existed.
2. **A historical person who is only mentioned remains contextual** unless the text establishes scene-level presence.
3. **Never infer `fictional` from absence of evidence.** Use `unknown` until historical status is independently verified.
4. `narrative_role` and `historical_status` are independent dimensions. A secondary character can be historical; a primary character can be fictionalized; a contextual figure can be historical.
5. `present_in` means physical presence only. A mentioned or historically referenced person must not be added to `present_in`.
6. A title, nickname or role label is not automatically a new identity. Normalize it to the canonical person when the surrounding text establishes the identity.
7. Historical-status research may use authoritative external sources **after** the narrative entity has been established from the repository corpus. It must not be used to decide whether the person appears in the novel.

### Classification examples

Active historical character:

```text
entity_type = character
narrative_presence = active
narrative_role = secondary
historical_status = historical
map_relevance = mapped
```

Mentioned historical figure:

```text
entity_type = historical_figure
narrative_presence = historical_context
narrative_role = none
historical_status = historical
map_relevance = none
```

Narrative character whose historical status is unresolved:

```text
entity_type = character
narrative_presence = active
narrative_role = tertiary
historical_status = unknown
map_relevance = mapped
```

The same taxonomy applies to every book and must be used consistently when auditing earlier books.

## 10. Names and aliases

Keep a canonical character ID separate from display names and aliases. This is essential for characters whose names, titles or forms of address vary.

## 11. Source traceability

Every event must identify:

- source corpus;
- source chapter;
- source scene/section when available;
- evidence level.

The exact prose of the novel must not be copied into the public application.

## 12. Canonical repository corpus

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

External sources remain permitted for the later modern-geography, historical-status, and micro-Wiki research phases, after the narrative entity has been established from the repository corpus.

## 13. Luni correspondence

The repository corpus uses the project's canonical English chapter structure. Do not assume its chapter numbering automatically matches the Italian Luni edition.

A separate mapping table must be validated before the reader-facing chapter selector is finalized.

## 14. Quality checks

Before accepting a batch:

1. Check that every referenced character exists.
2. Check that every referenced location exists.
3. Check chronological continuity.
4. Check for impossible simultaneous states.
5. Check origin/destination consistency.
6. Check that no event leaks information from a later chapter.
7. Flag contradictions for manual review.
8. Confirm that the extracted material came from the corresponding repository source chapter.
9. Confirm that every person-like entity has the five taxonomy fields from §9 in research/staging data.
10. Confirm that `present_in` contains only physical narrative presence.
11. Confirm that historical status has not been used to decide narrative presence.

## 15. Public UI rule

The application must never expose:

- future destinations;
- future meetings;
- future relationships;
- future deaths or outcomes;
- future events.

The database may contain them for research, but the reader-facing query layer must enforce the chapter cutoff.

## 16. Research-effort rule

Research depth must serve the reading companion. High precision is desirable, but research must stop when additional investigation no longer produces a meaningful improvement in the map.

For ambiguous topographical identifications, use the dedicated two-round protocol in `research/topographic-research-protocol.md`. After the allowed research rounds, preserve the uncertainty explicitly rather than continuing indefinitely or inventing a precise point.
