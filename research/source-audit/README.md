# Independent source audit

This directory contains source-first audit material that is intentionally independent from production JSON, generated reports and Books III–VII production manifests.

## Purpose

The existing validators answer whether recorded data is internally coherent. This audit answers a different question: whether the local novel corpus contains narrative facts that production failed to record, misclassified or compressed enough to lose relevant information.

The authority order for this directory is deliberately narrow:

1. `data/source/bookN/chapter*.txt` — only authority for narrative facts.
2. Source oracle files in this directory — normalized observations derived from the source text.
3. Production JSON — used only after an oracle is complete, to compute a diff.

Production JSON, generated audits and production manifests must never be used to decide what belongs in a source oracle.

## Two-pass model

### Pass 1 — source oracle

Read every chapter from the local corpus and record independently:

- physically present named characters;
- functional unnamed actors when they perform a causally relevant action;
- characters mentioned, remembered or reported but not physically present;
- historical/contextual people, works and institutions mentioned by the source;
- physical scene locations and referenced/intended destinations;
- arrivals, departures, movements and intermediate waypoints;
- narratively relevant events and state changes;
- relationships and biographical revelations;
- aliases, titles and identity reveals;
- temporal facts and explicit uncertainty.

A future identity reveal may map an earlier anonymous role to a canonical `character_id`, but the reader-facing name must remain bounded by the chapter in which the reveal becomes known.

### Pass 2 — production diff

Only after Pass 1 is complete, compare the oracle with production. Classify each difference as one of:

- `missing` — source fact has no production representation;
- `misclassified` — represented under the wrong semantic category;
- `compressed` — represented, but important source distinctions are lost;
- `covered` — production preserves the relevant fact;
- `intentional_exclusion` — omitted by an explicit, documented product rule.

An intentional exclusion is not an error, but it must be documented; silence is not an exclusion policy.

The comparison is bidirectional. Production can expose a fact omitted by the first independent pass, but such a candidate is added to the audit only after it is rechecked against the local source text. This preserves independence without pretending that the human/source-first extraction is infallible.

## Scope rules

`physical_characters` is strict physical on-page presence. Mere mention never qualifies.

`functional_actors` is separate from the canonical character roster. It captures unnamed people with specific causal agency without forcing every servant, passerby or crowd member into `characters.json`.

`referenced_characters` records narrative people who are named, remembered, reported or unambiguously referred to. A later-known canonical ID may be retained internally while the source-era display label remains spoiler safe.

`historical_context` is separate from narrative character presence.

`physical_locations` records where a scene actually occurs. `referenced_locations` distinguishes intended destinations, directions, reports and background geography from confirmed arrival.

The oracle should preserve uncertainty rather than invent precision.

## Current coverage

- **Book I — Earth:** source-first oracle complete; production diff complete.
- **Book II — Water:** source-first oracle complete; production diff complete.
- **Book III — Fire:** source-first oracle complete; production diff complete.
- **Book IV — Wind:** source-first oracle complete; production diff complete.
- **Book V — Sky:** source-first oracle complete; production diff complete.
- **Books VI–VII:** not independently certified until their own source-first oracle and production diff exist.

Independent two-pass coverage is therefore **79/112 chapters**.

“Complete” here means the two-pass audit artifacts exist and pass structural validation. It does not mean production has already been corrected; open findings remain findings until remediation and re-diff.