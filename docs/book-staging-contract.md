# Books III–VII research provenance format

Status: active provenance guide  
Contract version: `1.0.0`  
Validator: `node tools/validate-research-manifests.mjs`

> The filename `book-staging-contract.md` is retained as a stable historical contract identifier because the canonical manifests already reference it. MusashiMap no longer has an active staging or migration pipeline, and validation never rewrites manifests.

## Purpose and ownership

The five canonical manifests under `research/book3-production-manifest.json` through `research/book7-production-manifest.json` preserve the normalized research evidence from Books III–VII. They are provenance records, not production inputs and not a second publication authority.

`tools/validate-research-manifests.mjs` is the executable integrity gate. This document explains the retained format and its semantics; when a structural invariant matters to automation, the validator is authoritative.

Production behavior is owned by the JSON files under `data/`. Reader visibility is owned only by `data/reader-progress.json`. Historical migration details may remain inside manifest `extensions`, but no maintenance workflow consumes legacy record shapes.

## Canonical manifest set

The repository must contain exactly these five manifests:

| Book | Title | Chapters | Global sections |
|---:|---|---:|---:|
| III | Fire | 13 | 20–32 |
| IV | Wind | 21 | 33–53 |
| V | Sky | 26 | 54–79 |
| VI | Sun and Moon | 17 | 80–96 |
| VII | The Perfect Light | 16 | 97–112 |

Each manifest uses `contract_version: "1.0.0"` and keeps `contract: "docs/book-staging-contract.md"` as the stable contract identifier.

## Top-level structure

Canonical manifests contain the following arrays, even when an array is empty:

- `source_files`
- `chapters`
- `characters`
- `groups`
- `locations`
- `events`
- `character_states`
- `relationships`
- `historical_context`
- `external_validation`

`extensions` may retain historical reconciliation material or original migration evidence. Canonical consumers must not require `extensions` to resolve ordinary chapter, entity, event, state or source references.

## Books, chapters and sources

`book.number` must match the manifest filename. `chapter_count` must match the number of chapter records. Chapter IDs are ordered and contiguous from `bNc1` through the final local chapter, and global section numbers are contiguous within and across Books III–VII.

`source_files` is aligned one-to-one with chapters. A source record identifies its chapter, global section and local source file; optional line counts and SHA-256 digests are checked when present. The referenced source file must exist.

Source references may use the repository path, a registered source basename or a stable `bookN/chapterM` token, optionally with a line range. Every source reference must resolve to the source registered for the relevant chapter.

## Presence and entity references

Chapter `characters` and `groups` mean physical on-page presence. `referenced_characters` and `referenced_groups` mean mention, report, memory, correspondence or another non-physical reference. The present and referenced-only sets are disjoint.

Character, group and location IDs are unique and every foreign key used by chapters, events, states, relationships or occurrence indexes must resolve inside the same manifest.

Historical provenance may preserve older evidence inside `extensions`; it does not create an alternative entity registry.

## Events and movement

Events are top-level records linked back to exactly one chapter through both `event.chapter` and that chapter's `event_ids` list. Participant and referenced-only semantics match the chapter rules.

`location`, `origin` and `destination` are registered location IDs or `null`. Movement events use the production vocabulary documented in `docs/movement-semantics.md`:

- `arrival_confirmed`
- `confirmed_route`
- `intended_destination`
- `direction_only`
- `uncertain_route`

Non-movement events use `movement_status: null`. Historical aliases for movement statuses may remain only as retained provenance inside `extensions`; the validator does not translate them.

## Character states

Character states are top-level records. Each state references a registered character, an existing chapter when applicable, a registered location or `null`, and a resolvable source reference. Every state must be indexed exactly once by its owning chapter.

A reported source may be retained separately from direct evidence. Missing or unresolved locations remain `null`; validation does not infer coordinates or movement.

## Relationships and context

Relationship participants must resolve to registered characters or groups. Relationship chapter IDs must exist, and evidence must resolve either to an event ID or a registered source reference.

Historical-context records may reference chapters, source references and HTTP(S) URLs. External-validation records may contain an HTTP(S) URL. These records document context or modern geography and cannot override narrative evidence.

## Validation invariants

The read-only validator enforces, among other checks:

- the complete canonical manifest set for Books III–VII;
- contract version and stable contract identifier;
- valid JSON and required top-level arrays;
- unique non-empty IDs;
- ordered contiguous chapter IDs and global sections;
- one source-file record per chapter;
- source existence, optional line counts and optional SHA-256 values;
- source-reference resolution;
- disjoint physical and referenced-only sets;
- character, group and location foreign keys;
- exact chapter ownership of events and character states;
- canonical movement statuses;
- relationship participants, chapters and evidence;
- historical-context source references and URLs;
- occurrence chapter references.

Run the gate from the repository root:

```bash
node tools/validate-research-manifests.mjs
```

The validator is intentionally read-only. If provenance must be corrected, edit the canonical manifest from primary evidence and validate the result. There is no compatibility normalizer or migration command to maintain.
