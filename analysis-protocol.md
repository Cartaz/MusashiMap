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

## 11. Luni correspondence

The Internet Archive corpus is the working English corpus. Do not assume its chapter numbering automatically matches the Italian Luni edition.

A separate mapping table must be validated before the reader-facing chapter selector is finalized.

## 12. Quality checks

Before accepting a batch:

1. Check that every referenced character exists.
2. Check that every referenced location exists.
3. Check chronological continuity.
4. Check for impossible simultaneous states.
5. Check origin/destination consistency.
6. Check that no event leaks information from a later chapter.
7. Flag contradictions for manual review.

## 13. Public UI rule

The application must never expose:

- future destinations;
- future meetings;
- future relationships;
- future deaths or outcomes;
- future events.

The database may contain them for research, but the reader-facing query layer must enforce the chapter cutoff.
