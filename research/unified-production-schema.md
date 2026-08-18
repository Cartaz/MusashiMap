# MusashiMap — Unified Production Schema

Status: **schema design / pre-migration**

## Goals

The production model must represent Books I–VII without ambiguous chapter numbers, duplicate character identities, or false geographic precision. The migration must preserve the current runtime semantics while making the data extensible.

## 1. Global chapter identity

Every chapter reference is book-qualified:

- `b1c1`
- `b1c8`
- `b2c1`
- `b2c11`

No production field may use a bare chapter number when the value can cross book boundaries.

A chapter registry should eventually provide:

```json
{
  "id": "b2c11",
  "book": 2,
  "chapter": 11,
  "title": "The Nightingales"
}
```

## 2. Character identity vs chapter state

A character is a stable identity. Narrative state is chapter-scoped.

Conceptual shape:

```json
{
  "id": "musashi",
  "name": "Miyamoto Musashi",
  "aliases": ["Shinmen Takezo", "Miyamoto Takezo", "Takezo"],
  "importance": "main",
  "color": "#e6462e",
  "entity_type": "character",
  "historical_status": "historical",
  "chapter_states": {
    "b1c1": {
      "narrative_presence": "active",
      "narrative_role": "primary",
      "map_relevance": "mapped"
    }
  }
}
```

The five taxonomy fields are applied at the appropriate scope:

- identity-level: `entity_type`, `historical_status`;
- chapter-level: `narrative_presence`, `narrative_role`, `map_relevance`.

This prevents a character from being globally marked `active` merely because they become active in a later book.

## 3. Physical presence semantics

The current meaning of `present_in` must survive migration: physical presence only. Mentions, reported whereabouts, and contextual references must not create a visible character marker.

For the unified model, chapter state is the canonical representation. A physical presence is represented by:

```json
"narrative_presence": "active"
```

A migration compatibility field may temporarily preserve `present_in`, but it must not become a second source of truth.

## 4. Event model

Every event must reference:

- a book-qualified chapter ID;
- canonical character IDs;
- canonical location IDs;
- no duplicated identity objects.

Example:

```json
{
  "id": "b2c11-event-01",
  "chapter": "b2c11",
  "characters": ["musashi", "otsu", "jotaro"],
  "location": "yagyu_mountain_house"
}
```

## 5. Location model

Every location must carry the geographic metadata established by research:

- `id`
- `name`
- `type`
- `introduced_chapter`
- `coordinates`
- `coordinate_precision`
- `geographic_confidence`
- `historical_match`
- `mapping_type`
- optional `parent_location`
- optional `coordinate_radius_m`
- `map_note`

Unresolved research locations remain unmapped. No coordinate is invented to satisfy the schema.

Book II locations must be migrated from `research/book2-geographic-registry.md` rather than directly from ad-hoc research notes.

## 6. Introduction semantics

The current `introduced_section` field is ambiguous across books. It must become `introduced_chapter`, using `bNcN`.

For persistent places, introduction means first narrative appearance in the relevant corpus, after which the location remains available through the end of Book VII according to the existing location-persistence rule.

## 7. Migration order

1. Build/validate chapter registry for Books I–II.
2. Normalize all Book I character identities.
3. Normalize all Book II identities against Book I IDs.
4. Generate chapter-scoped character states for both books.
5. Normalize event chapter IDs and character references.
6. Build unified location registry from Book I production data + Book II geographic registry.
7. Convert location introduction fields to qualified chapter IDs.
8. Validate all references and uniqueness constraints.
9. Run JSON/schema validation.
10. Run application tests and chapter-filter tests.
11. Inspect runtime rendering.
12. Only then deploy.

## 8. Non-negotiable invariants

- Existing stable character IDs do not change.
- A person cannot receive a second ID merely because they appear in Book II.
- `active` means physical narrative presence, not mention.
- Historical status never implies map presence.
- Main-cast membership never implies physical presence.
- No unresolved location receives invented coordinates.
- No chapter reference is ambiguous between books.
- Book I and Book II are migrated together.
- Production JSON remains untouched until the simulation validates cleanly.

## Current status

Schema design is complete enough for a dry-run migration. Production JSON has **not** been modified by this document.
