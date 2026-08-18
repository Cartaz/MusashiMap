# MusashiMap — Global Production Migration Audit (Book I + Book II)

Status: **pre-production staging audit**

This document is the mandatory gate before modifying production JSON. It combines the Book I and Book II research audits so that the new character taxonomy is applied consistently across the existing corpus.

## Character taxonomy

Every person/entity considered for character data must be evaluated independently on:

- `entity_type`: `character | historical_figure | group | other`
- `narrative_presence`: `active | mentioned | historical_context`
- `narrative_role`: `primary | secondary | tertiary | none`
- `historical_status`: `historical | fictional | fictionalized | unknown`
- `map_relevance`: `mapped | contextual | none`

Historical status never determines narrative presence. Main-cast membership never proves physical presence.

## Book I audit gate

The existing Book I audit is accepted as the baseline taxonomy. In particular:

- Musashi, Takuan and Ikeda Terumasa are historical people and active narrative characters.
- Sasaki Kojirō and Jōtarō remain contextual for Book I while their `present_in` arrays are empty.
- Unknown historical status remains `unknown` unless independently established.

Source: `research/book1-entity-audit.md`.

## Book II audit gate

The Book II entity audit must use the same five-field taxonomy. Existing Book I IDs must be reused for returning characters; no duplicate person ID may be created for a character who already exists in Book I.

Returning Book II characters include Musashi, Matahachi, Otsū, Akemi, Osugi, Jōtarō, Okō and other previously established identities where source evidence confirms continuity.

New Book II characters must be assigned stable IDs only after identity normalization and source-level presence verification.

## Production migration requirements

Before modifying `characters.json`, `identities.json`, `events.json`, `locations.json` or related production data:

1. Reconcile Book I and Book II character IDs.
2. Apply the five-field taxonomy to both books.
3. Preserve existing stable IDs.
4. Preserve `present_in` semantics: physical presence only.
5. Keep mentions/reported whereabouts in text/research fields rather than physical-presence arrays.
6. Introduce book-qualified section/chapter references; a bare `1`, `2`, etc. must never be ambiguous between books.
7. Validate every event character reference against the unified character registry.
8. Validate every location reference against the unified location registry.
9. Run schema/JSON validation before deployment.
10. Verify the runtime rendering and chapter filtering after migration.

## Global chapter identity

The current Book I production data uses section numbers such as `1–8`, while Book II has its own chapter sequence. Production migration must therefore use a book-qualified identifier, for example:

`b1c1`, `b1c8`, `b2c1`, `b2c11`

or an equivalent structured `{book, chapter}` representation. The exact implementation must be chosen consistently before production writes.

## Locations

Book II geographic research remains staged separately. Location production migration must consume `research/book2-geographic-registry.md`, including confidence, precision, historical compatibility, mapping type and parent/child relationships. Unresolved C/D locations must not receive invented coordinates.

## Gate status

**READY FOR PRODUCTION SCHEMA DESIGN, NOT YET FOR PRODUCTION JSON WRITES.**

The next step is to design the unified production schema and a migration plan, then validate it against both Book I and Book II before changing the live datasets.
