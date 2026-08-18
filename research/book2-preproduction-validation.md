# Book II — Pre-production Validation

Status: **PASS with documented unresolved cases — production JSON not modified**

## Completed stages

1. Historical-status audit: complete.
2. Character ID reconciliation against Book I: complete.
3. Chapter-scoped character-state generation: complete in staging.
4. Physical presence vs mention separation: complete.
5. Interaction staging rules: complete.
6. Cross-chapter continuity audit: complete.
7. Geographic-registry compatibility: complete.
8. Production-write gate: intentionally not passed.

## Validation results

### Identity

- Existing Book I IDs are reused for recurring characters.
- Proposed Book II-only IDs are unique.
- No new ID is created for an unnamed group.
- Contextual historical figures are not promoted to physical characters without direct textual evidence.

### Presence

- `active` is reserved for physical presence.
- Reported whereabouts remain non-present.
- Music, letters, reputation, and exposition do not create co-location.
- Character death terminates ordinary active presence.

### Geography

- Every mapped character state references a narrative location from the Book II scrape.
- Unresolved real-world locations (including Wataya) do not receive fabricated coordinates.
- Yagyū sub-locations remain children of the Yagyū complex where exact independent coordinates are unsupported.
- Historical/modern-location mismatches remain documented rather than silently corrected.

### Chapter integrity

- Book II uses `b2c1` through `b2c11`.
- No bare chapter number is used in the staging state ledger.
- Cross-book identity remains independent from chapter numbering.

### Interaction integrity

- Shared chapter membership is not treated as interaction evidence.
- Interaction records must be tied to a scene/event and canonical IDs.
- Reported interactions are distinguished from direct physical interactions.

## Historical-status result

`Inshun` is promoted to `historical` based on strong identification as Hōzōin Inshun (1589–1648). The Hōzōin-ryū historical source confirms the historical lineage of the school and its founder In'ei; independent biographical material identifies Inshun as a real early-Edo monk and martial artist.

Nikkan, Kizaemon and the named rōnin remain unresolved/unknown where a secure one-to-one historical identification was not established. They are not upgraded by name similarity.

## Remaining non-blocking research notes

- Historical status of unresolved named rōnin can be revisited if stronger primary/specialist sources are found.
- Exact geographic coordinates of unresolved narrative places remain a separate geographic research problem.
- Production schema may need a compatibility layer while the frontend transitions from legacy `section` fields to qualified chapter IDs.

## Production gate

**DO NOT WRITE production JSON yet.**

The staging layer is internally coherent, but the actual production migration must be performed as one controlled change covering:

- chapter registry;
- character roster/taxonomy;
- chapter states;
- events;
- locations;
- identities;
- validators;
- frontend chapter filtering.

After that write, the project must pass JSON validation, reference validation, frontend validation, and a visual/runtime check before deployment.
