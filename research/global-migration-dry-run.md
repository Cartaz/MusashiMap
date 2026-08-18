# MusashiMap — Book I + Book II Production Migration Dry-Run

Status: **completed — production JSON intentionally untouched**

Date: 2026-08-18

## Scope

This dry-run executes the migration plan conceptually against the current production datasets and the frozen Book II research registries. It covers the twelve pre-write steps defined in `research/unified-production-schema.md` as far as the repository's current tooling and static data permit, then stops before any production JSON write.

## 1. Chapter registry — PASS with required migration change

Current Book I production uses `chapters.json` with `s001`–`s008` and bare `number` values 1–8. Current `events.json`, `character-states.json`, `characters.json`, `identities.json`, and `locations.json` also contain Book-I-local section numbers.

Book II research is independently numbered 1–11.

Dry-run canonical IDs:

- Book I: `b1c1` … `b1c8`
- Book II: `b2c1` … `b2c11`

No collision exists once book-qualified IDs are used.

**Finding:** the current production `chapters.json` must be migrated from local section semantics to global chapter identity. Its current `source.source_url` also still points to the old Internet Archive transcription, while the project workflow now correctly treats the repository corpus as canonical. This should be corrected during the production migration.

## 2. Book I identity normalization — PASS

The Book I audit already applies the five orthogonal fields:

- `entity_type`
- `narrative_presence`
- `narrative_role`
- `historical_status`
- `map_relevance`

Stable IDs remain unchanged. In particular, historical status is not used to remove active characters from the narrative model. `present_in=[]` for Kojirō and Jōtarō remains a genuine Book-I absence, not an invitation to infer later-book presence.

Source: `research/book1-entity-audit.md`.

## 3. Book II identity reconciliation — PASS

Book II returning identities that match Book I are mapped to existing IDs:

`musashi`, `matahachi`, `otsu`, `akemi`, `osugi`, `gonroku`, `jotaro`, `oko`.

No second ID is permitted for the same person.

Book II-only candidates remain staged IDs until production insertion. No candidate is allowed to become a production identity solely because a name appears in the text; scene-level narrative presence remains authoritative.

Source: `research/book2-entity-audit.md`.

## 4. Character chapter-state simulation — PASS conceptually / production state generation required

The new model moves chapter-sensitive fields into chapter-scoped state:

```text
b1c1 … b1c8
b2c1 … b2c11
```

The current Book I `character-states.json` already has the correct conceptual semantics: end-of-chapter physical location, `location:null` for unresolved current position, and explicit metadata for reported/unknown/departed states.

Book II presence candidates are frozen in the entity audit and must be expanded into scene/state records before production insertion. This prevents a global `active` flag from leaking future presence backward.

## 5. Event migration simulation — PASS with schema conversion required

Current Book I event IDs are already namespaced as `b1cN-*`, but the event object still stores a separate numeric `section` field. Book II must use the same ID convention with `b2cN-*` and replace the ambiguous numeric chapter reference with the canonical chapter ID.

All character references must resolve to canonical IDs; `referenced_characters` must remain separate from physical participants.

No Book-II production events are written during this dry-run.

## 6. Unified location registry simulation — PASS with Book I audit requirement

Book II has a frozen geographic registry. It contains explicit confidence, precision, historical compatibility, mapping type and parent-child relationships.

Important Book II staged behavior:

- unresolved `Wataya`, `Yomogi`, unnamed Kyoto inn, `Hongandō`, and `Ōzōin` remain unmapped;
- `Yagyū dōjō`, `Shin'indō`, Sekishūsai's mountain house and the castle moat inherit from `koyagyu_castle` rather than receiving invented independent coordinates;
- `Kūyadō` uses historical-area handling rather than silently using the modern temple location;
- `Rokuamida` is contextual/network information, not a single marker;
- Hannya Plain/Hannya Hill and Aburazaka use area/route representations.

Before writing production, every existing Book I location must be audited against the same field model. The current Book I dataset already contains explicit precision/confidence metadata, so the migration is structurally compatible.

## 7. Location introduction and persistence — PASS conceptually / global chapter conversion required

The current `locations.json` uses `introduced_section` with bare integers. This is the principal ambiguity that must be removed.

Production target:

```text
introduced_chapter: b1c1
introduced_chapter: b2c8
```

Persistent-place rule remains:

> once a place is introduced, it remains available through the end of Book VII unless an explicit future display rule says otherwise.

The Book-II geographic registry already records first Book-II chapter separately and explicitly warns not to copy local chapter numbers into production.

## 8. Cross-reference integrity simulation — PASS for known Book I references; Book II awaits generated staging

Current Book I validators enforce:

- event → character references;
- event → location references;
- state → character references;
- state → location references;
- movement/status consistency;
- approximate coordinate radius constraints.

The unified schema must extend these checks to book-qualified chapter references and parent-child locations.

No orphaned returning-character ID is permitted in Book II.

## 9. JSON/schema validation — READY, not executed against modified data

The repository has `tools/validate-book1.mjs`, which currently validates the Book-I production model, and `tools/validate-frontend.mjs`, which checks JavaScript syntax, JSON parsing, CSS structure and local HTML references.

These validators are useful regression gates, but the current schema is explicitly a Book-I structural reference rather than a true JSON Schema. A production migration should therefore add/extend validation for:

- `bNcN` chapter IDs;
- new character taxonomy;
- event chapter references;
- location confidence/precision/mapping metadata;
- parent-child location references;
- duplicate stable IDs;
- Book I + II cross-book identity continuity.

No modified JSON was available to validate because the requested stopping point is before production writes.

## 10. Application tests — static readiness PASS; runtime execution deferred by design

The frontend has a dedicated validator and the current runtime reads canonical reader state through `reader-progress.js`/`map-runtime.js`. The existing runtime already distinguishes approximate and reported/last-known character markers.

The current `index.html` still has `#chapter max="8"`, which is correct for the Book-I-only production state but is a known integration blocker once Book II becomes selectable. It must be made data-driven during the later chapter-registry migration rather than hard-coded to eight sections.

No runtime behavior was changed by this dry-run.

## 11. Runtime rendering test plan — PASS as test specification, execution blocked until integration

After production staging is written, the following must be checked before deploy:

1. Book I c1–c8 positions remain unchanged.
2. Book II c1–c11 load without ID collisions.
3. Switching `b1c8 → b2c1` does not retain stale Book-I section state.
4. Returning characters retain the same marker identity/color.
5. Future Book-II characters do not appear in Book I.
6. Locations introduced in Book II appear from their introduction onward and remain through Book VII.
7. Unmapped locations do not receive fake coordinates.
8. Child Yagyū locations render at the parent anchor without implying independent precision.
9. Reported/last-known character positions retain their distinct marker semantics.
10. Intended/direction-only routes do not render as confirmed travel.
11. Mobile sidebar/map filtering remains functional.
12. Progressive wiki does not expose Book-II information while the reader is still in Book I.

## 12. Deployment gate — BLOCKED intentionally

No deployment has been triggered by this dry-run because no production JSON was modified.

## Detected migration blockers

### B1 — `chapters.json` uses Book-I-local section IDs

Must be replaced/augmented with global book-qualified chapter identity.

### B2 — `characters.json` uses bare `present_in` numbers

Must be migrated to chapter-scoped states. A compatibility field may exist temporarily, but there must be one canonical source of truth.

### B3 — `identities.json` uses bare section numbers

Must become book-aware. The Musashi name transition currently uses `valid_from_section: 1` through `7` and `8+`; those values must become `b1c1`–`b1c7` and `b1c8+` semantics rather than being interpreted as Book-II chapters.

### B4 — `events.json` has numeric `section`

Must gain canonical chapter IDs while retaining existing `b1cN-*` event IDs.

### B5 — `locations.json` has numeric `introduced_section`

Must become book-qualified and then receive Book-II registry entries.

### B6 — `data/schema.json` is Book-I-specific

Must be updated with the unified model before or together with production data migration.

### B7 — frontend chapter control is hard-coded to 8

`index.html` currently has `max="8"`. This must become data-driven/global before Books II+ are exposed.

### B8 — source metadata still contains the old Archive.org URL

`chapters.json` currently retains the old source URL even though the current research workflow correctly states that repository chapter files are canonical. This is metadata drift and should be corrected during migration.

## Dry-run result

**PASS — architecture and data mapping are coherent enough to proceed to implementation.**

**NOT READY TO WRITE PRODUCTION JSON YET.**

The remaining work before the first production write is implementation of the global chapter registry/staging representation, generation of the Book-I + Book-II staged character/event/location datasets, and validation of those staged objects against the invariants above.

## Explicit stop point

This document is the final artifact of the requested pre-write phase.

**No `data/*.json` production file was modified by this dry-run.**
