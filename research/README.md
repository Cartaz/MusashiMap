# Research index

This directory contains the canonical research provenance retained by MusashiMap. Temporary scrape notes, migration checklists and per-pass ledgers were consolidated after all seven books reached production.

## Repository-wide audits

| Report | Scope | Rebuild command |
|---|---|---|
| [Character chapter audit](character-chapter-audit.md) | Position, action and relationship evidence for every character in all 112 chapters | `node tools/generate-character-chapter-audit.mjs` |
| [Geography book audit](geography-book-audit.md) | Every location by book, mapping status, present-day identification and online evidence | `node tools/generate-geography-audit.mjs` |

The reports are generated from production data and the canonical book manifests. Edit their inputs or generators rather than hand-editing the reports.

Manual reconciliation that exists only to reproduce these audits lives beside the reports in `character-audit-config.json` and the `geography-audit/` configuration directory. These files own research inputs such as Book II roster baselines, manifest ID remaps and geography source assignments; the generator scripts own only transformation and validation logic.

## Canonical book manifests

The following manifests preserve the normalized chapter research used to produce Books III–VII:

- `book3-production-manifest.json` — *Fire*, sections 20–32
- `book4-production-manifest.json` — *Wind*, sections 33–53
- `book5-production-manifest.json` — *Sky*, sections 54–79
- `book6-production-manifest.json` — *Sun and Moon*, sections 80–96
- `book7-production-manifest.json` — *The Perfect Light*, sections 97–112

Validate all five with the read-only provenance gate:

```bash
node tools/validate-research-manifests.mjs
```

These files are provenance records, not a second publication authority. The old migration/normalization path is retired; maintenance edits canonical manifests directly and validation never rewrites them. Reader visibility is controlled only by `data/reader-progress.json`.

## Source hierarchy

1. Local chapter files are authoritative for narrative facts.
2. Production JSON is authoritative for application behavior.
3. Canonical manifests preserve research evidence and migration history.
4. External sources validate modern geography or historical context only.

Unknown coordinates intentionally remain `null`. Mentions, memories and reported movement do not become physical map presence.

The working method and evidence rules live in [`docs/book-research-workflow.md`](../docs/book-research-workflow.md); the provenance format guide lives at the historically retained contract path [`docs/book-staging-contract.md`](../docs/book-staging-contract.md).
