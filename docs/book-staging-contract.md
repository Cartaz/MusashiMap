# Canonical staging contract for Books III–VII

Status: active  
Contract version: `1.0.0`  
Validator: `node tools/validate-staging.mjs`

## Purpose

This contract is the lossless boundary between book research and production migration. It gives Books III–VII one structural vocabulary without upgrading literary claims, guessing identities, adding coordinates, or discarding legacy evidence.

Canonical manifests live at:

```text
research/book3-production-manifest.json
research/book4-production-manifest.json
research/book5-production-manifest.json
research/book6-production-manifest.json
research/book7-production-manifest.json
```

`research/book3-fire-staging-manifest.json` remains the frozen legacy input for traceability. New consumers must use `book3-production-manifest.json`; `extensions.legacy_book3_filename` records the compatibility link.

The validator discovers every canonical file matching `research/book[3-7]-production-manifest.json`. Book VII therefore enters the same gate automatically and does not require a hard-coded list update.

## Top-level object

Every canonical manifest contains:

```json
{
  "schema_version": "1.0.0",
  "contract_version": "1.0.0",
  "contract": "docs/book-staging-contract.md",
  "dataset": "human-readable dataset name",
  "status": "research status",
  "generated_on": "YYYY-MM-DD",
  "book": {},
  "evidence_policy": {},
  "source_files": [],
  "chapters": [],
  "characters": [],
  "groups": [],
  "locations": [],
  "events": [],
  "character_states": [],
  "relationships": [],
  "historical_context": [],
  "external_validation": [],
  "extensions": {}
}
```

The named arrays are always present, including when empty. `extensions` is the only compatibility namespace. It may retain prior audit objects, reconciliation notes or original record shapes, but canonical consumers must not need it to resolve ordinary references.

## Book and source files

`book` requires:

- `number`: integer 3–7 and equal to the filename;
- `title`;
- `chapter_count`;
- `global_sections.minimum` and `global_sections.maximum`.

Chapter IDs are ordered and contiguous from `bNc1` to `bNc{chapter_count}`. Global sections are ordered and contiguous across the book. The current cross-book ranges are:

| Book | Title | Chapters | Global sections |
|---:|---|---:|---:|
| III | Fire | 13 | 20–32 |
| IV | Wind | 21 | 33–53 |
| V | Sky | 26 | 54–79 |
| VI | Sun and Moon | 17 | 80–96 |
| VII | The Perfect Light | 16 | 97–112 |

Each `source_files` record is aligned one-to-one with a chapter and contains:

```json
{
  "chapter_id": "b5c1",
  "global_section": 54,
  "title": "The Abduction",
  "file": "data/source/book5/chapter1-the-abduction.txt",
  "line_count": 420,
  "sha256": "optional lowercase digest"
}
```

The validator requires the file to exist, checks `line_count` when present, and recomputes `sha256` when present. A missing hash is not synthesized.

`source_ref` may be one of the formats already supported by the research corpus:

- repository path, optionally with `:Lstart-Lend`;
- source basename, optionally with line range;
- stable `bookN/chapterM` token.

All three must resolve to the chapter's registered source file.

## Chapters

Canonical chapter records have:

```json
{
  "id": "b4c1",
  "global_section": 33,
  "title": "The Withered Field",
  "source_ref": "data/source/book4/chapter1-the-withered-field.txt",
  "source_file": "data/source/book4/chapter1-the-withered-field.txt",
  "characters": [],
  "referenced_characters": [],
  "groups": [],
  "referenced_groups": [],
  "locations": [],
  "event_ids": [],
  "character_state_ids": [],
  "end_summary": "optional unstructured chapter-end evidence"
}
```

`characters` means physical on-page presence. `referenced_characters` means mention, report, memory, correspondence or other non-physical reference. The two sets must be disjoint. Group presences are moved out of legacy character-presence arrays into `groups`; named collectives are never expanded into invented people.

`end_summary` preserves Book V/VII-style prose summaries that cannot be losslessly split into character states. It is evidence, not a substitute for structured `character_states`.

## Characters, groups and locations

Identity records preserve their research fields. At minimum, characters and groups require unique `id` and `name`; characters always expose `aliases`, even when empty.

Occurrence indexes are canonicalized as:

- `physical_presence`: chapter IDs with direct presence;
- `mentioned_in`: chapter IDs with reference-only occurrence.

These arrays may be derived mechanically from chapter records. The validator checks every chapter reference.

Locations require a unique `id` and `name`. Existing geographic fields such as `type`, `coordinates`, `mapping_status`, `coordinate_precision` or confidence notes are retained. Normalization never generates coordinates. `null` remains the required value for unresolved points.

## Events

Events are top-level and linked to chapters by ID:

```json
{
  "id": "b5c1-e01",
  "chapter": "b5c1",
  "type": "travel",
  "description": "Narrative evidence without reinterpretation.",
  "characters": ["musashi", "otsu", "jotaro"],
  "referenced_characters": [],
  "groups": [],
  "referenced_groups": [],
  "location": "suhara_nezame",
  "origin": null,
  "destination": null,
  "origin_label": "optional unresolved literal from the source manifest",
  "destination_label": "optional unresolved literal from the source manifest",
  "source_ref": "book5/chapter1",
  "source_file": "data/source/book5/chapter1-the-abduction.txt",
  "certainty": "explicit",
  "movement_status": "confirmed_route"
}
```

Canonical participant semantics are fixed:

- `characters`: physically participating named people;
- `referenced_characters`: mentioned or reported people who are not physically participating;
- `groups` and `referenced_groups`: the equivalent collective references.

Legacy `actors`, `participants`, and `participants_present` all map to `characters` after registered groups are split out. Legacy `referenced_actors` and `mentioned` map to `referenced_characters` or `referenced_groups`.

`location`, `origin` and `destination` are either registered location IDs or `null`. A literal such as `Awa/Shikoku`, `Kyoto` or `unknown` that is not a registered ID moves to `origin_label` or `destination_label`; the exact text is retained but does not masquerade as a resolvable foreign key.

### Movement status

Non-movement events use `movement_status: null`. Movement events use only the production vocabulary defined in `docs/movement-semantics.md`:

- `arrival_confirmed`
- `confirmed_route`
- `intended_destination`
- `direction_only`
- `uncertain_route`

The lossless legacy translation is:

| Legacy value | Canonical value | Preservation |
|---|---|---|
| `none` | `null` | original stored in `extensions.legacy_movement_status` |
| `route_confirmed` | `confirmed_route` | original stored in extensions |
| `departure_confirmed` | `confirmed_route` | confirms actual movement, not arrival; original stored in extensions |
| `uncertain` | `uncertain_route` | original stored in extensions |
| production value | unchanged | no extension required |

This translation changes vocabulary, not the narrative claim. Rendering geometry still requires resolvable endpoints; `confirmed_route` alone does not authorize an invented line.

## Character states

Structured states are top-level:

```json
{
  "id": "b6c1-state-hosokawa_tadatoshi",
  "chapter": "b6c1",
  "character": "hosokawa_tadatoshi",
  "state": "at the archery range after authorizing both searches",
  "location": "hosokawa_edo_residence",
  "source_ref": "chapter1-a-chat-with-the-men.txt:L145-L162",
  "source_file": "data/source/book6/chapter1-a-chat-with-the-men.txt",
  "certainty": "explicit",
  "scope": "chapter_end"
}
```

`scope` is `chapter_end` for chapter ledgers and `book_end` for final-book reconciliations. Missing certainty is retained as `unspecified`; it is not silently upgraded. A null location remains null. `reported_source_ref` optionally preserves a later report separately from last direct presence.

## Relationships

Relationships require:

- unique `id`;
- `participants`: registered character or group IDs;
- `type`;
- `chapter_ids`;
- `evidence`: event IDs or resolvable source references;
- `status`, `certainty`, and `context` when supported.

Directional legacy shapes (`subject/object`, `a/b`, `from/to`) are preserved in `extensions.original`; canonical `participants` does not erase that evidence. Generated IDs are deterministic and book-qualified when the source record had none.

## Historical and external validation records

`historical_context` uses canonical `id`, `topic`, `chapter_ids`, `source_refs`, optional `urls`, and `summary`. `external_validation` uses canonical `id`, `topic`, `authority`, `url`, `conclusion`, `uncertainty`, optional `narrative_effect`, `coordinates`, and `accessed`.

Because legacy books recorded different research metadata, each normalized record retains `extensions.original`. This is intentional lossless provenance, not an alternative canonical schema. External validation may qualify geography or historicity but cannot overwrite narrative events.

## Validation invariants

`tools/validate-staging.mjs` enforces:

- valid JSON and contract version;
- automatic discovery of Books III–VII canonical manifests;
- filename/book-number agreement;
- required top-level arrays;
- unique non-empty source, chapter, character, group, location, event, state, relationship, historical-context and external-validation IDs;
- contiguous, ordered local chapter IDs and global sections, including continuity between adjacent discovered books;
- chapter count and section bounds;
- one source-file record per chapter;
- source existence, line count and optional SHA-256;
- resolution of chapter, event and state source references;
- disjoint physical presence and mention sets;
- resolution of all character, group and location foreign keys;
- exact bidirectional resolution of chapter event/state indexes;
- canonical movement status values;
- relationship participant, chapter and evidence references;
- historical-context chapter/source references and HTTP(S) validation URLs;
- occurrence chapter references.

Run validation:

```bash
node tools/validate-staging.mjs
```

Normalize a newly arrived or legacy manifest and immediately validate all discovered books:

```bash
node tools/validate-staging.mjs --normalize
```

Normalization is deterministic and idempotent. It may move legacy metadata into `extensions`, but it must not invent evidence or discard the original value.
