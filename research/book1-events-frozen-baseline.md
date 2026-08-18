# Book I events — frozen production baseline

Date: 2026-08-18

This baseline freezes the current production `data/events.json` before Book II event migration.

- Production file version: `7`
- Book I chapters: `b1c1`–`b1c8`
- Book I event count: **44**
- Current blob SHA: `2c5da45294ad1ba4f9d12255b833eacfe455069d`
- Canonical event IDs: `b1c1-01` through `b1c8-09` (with chapter-specific numbering)

## Migration invariant

The Book II migration MUST preserve all 44 Book I records byte-for-byte at the object level after JSON parsing. No Book I event may be deleted, renamed, re-keyed, reordered semantically, or have any field changed.

The only permitted production change to `data/events.json` in this migration is:

1. preserve the existing 44 Book I event objects;
2. append the normalized Book II event objects;
3. increment the top-level version;
4. preserve the existing schema fields and movement-status vocabulary.

## Book II staging scope

The finalized Book II ledger contains **113 atomic staging events** across `b2c1`–`b2c11`. The finalized `b2c10` audit supersedes the earlier five-event aggregate ledger and contributes 25 atomic events.

This file is a migration guard, not a narrative source. Narrative facts remain sourced exclusively from `data/source/book2/` and the audited research records.
