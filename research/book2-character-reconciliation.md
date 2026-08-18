# Book II — Character Reconciliation & Taxonomy Staging

Status: **staging only — production JSON not modified**

Source of narrative presence: `research/book2-character-geography-scrape.md`, based on the canonical Book II chapter corpus under `data/source/book2/`.

## Rules

- Existing character IDs are reused whenever the identity is already present in `data/characters.json`.
- A new ID is proposed only for a distinct named entity not represented by the current roster.
- Physical presence is distinct from mention/reported whereabouts.
- `historical_status` is not inferred from a name alone.
- `map_relevance=mapped` is reserved for characters whose physical movement is useful to the interactive map; contextual figures remain unmarked even if historically important.
- `narrative_role` is judged within the Book I–II corpus, not by fame outside the novel.

## Existing IDs reused in Book II

| ID | Canonical name | Book II status |
|---|---|---|
| musashi | Miyamoto Musashi | primary; physically mapped throughout multiple chapters |
| matahachi | Hon'den Matahachi | secondary/primary continuing character; physical presence in b2c1/b2c2 and reported later |
| otsu | Otsu | primary; physical presence beginning b2c5 |
| jotaro | Jōtarō | primary; physical presence beginning b2c4 |
| akemi | Akemi | secondary continuing character; physical presence b2c1/b2c5 |
| osugi | Obaba Osugi | secondary continuing character; physical presence b2c3 |
| gonroku | Fuchikawa Gonroku | secondary; physical presence b2c3 |
| himeji_captain | Himeji garrison captain | secondary; not central to Book II staging |
| lord_ikeda | Ikeda Terumasa | contextual/historical; presence must follow direct textual evidence only |

## New distinct named entities proposed

| Proposed ID | Name | Role | Historical status | Map relevance | First physical presence | Notes |
|---|---|---|---|---|---|---|
| yoshioka_seijuro | Yoshioka Seijūrō | secondary | fictionalized | mapped | b2c1 | Yoshioka head and direct participant in Book II scenes |
| gion_toji | Gion Tōji | secondary | fictionalized | mapped | b2c1 | Major Yoshioka fighter; extensive interaction graph |
| ueda_ryohei | Ueda Ryōhei | tertiary | fictionalized | mapped | b2c1 | Yoshioka disciple; physical presence in opening group |
| yoshioka_denshichiro | Yoshioka Denshichirō | secondary | fictionalized | contextual/mapped only when physically present | b2c8 | Earlier b2c2 reference is reported absence in Ise, not presence |
| nikkan | Nikkan | secondary | historical/fictionalized — verify before production | mapped | b2c6 | Hōzōin-related religious figure; status must not be overclaimed |
| agon | Agon | tertiary | fictionalized | mapped | b2c6 | Hōzōin fighter; killed in b2c6 |
| inshun | Inshun | secondary | historical/fictionalized — verify before production | mapped | b2c7 | Hōzōin monk; absence in initial b2c6 visit must be preserved |
| shoda_kizaemon | Shōda Kizaemon | tertiary | unknown pending historical audit | mapped | b2c5 | Travels with Otsū; returns Jōtarō's lost bamboo tube |
| yamazoe_dampachi | Yamazoe Dampachi | tertiary | fictionalized/unknown pending audit | mapped | b2c6 | Rōnin recruited around Sarusawa; dies in b2c7 |
| otomo_banryu | Otomo Banryū | tertiary | fictionalized/unknown pending audit | mapped | b2c6 | Rōnin recruiter; dies in b2c7 |
| yasukawa_yasubei | Yasukawa Yasubei | tertiary | unknown pending audit | mapped | b2c6 | Rōnin recruiter; dies in b2c7 |

## Named entities requiring source/audit before production classification

These are not to be inserted into production until their identity and taxonomy are verified against the research corpus and, where applicable, the project's historical-status rules:

- Yoshioka Kempō — historical status already treated as deceased/historical context; no physical Book II marker.
- Toda Seigen — historical/contextual reference; no Book II physical marker established in the scrape.
- Ogasawara Genshinsai — contextual reference.
- Hō Ittōsai — contextual reference.
- Okubo Nagayasu — government official referenced in b2c7; do not create a marker unless physical presence is explicitly established as a named character.
- five unnamed government officials — group only, not individual characters.
- unnamed Hōzōin priests/students, Yoshioka students, rōnin, porters, palanquin bearers, etc. — groups, not invented individual IDs.

## Chapter-state requirements

The production migration must generate chapter-scoped state for each existing/new ID. In particular:

- `b2c2`: Denshichirō is **reported absent in Ise**, not physically present at Yoshioka School.
- `b2c6`: Inshun is **absent from the initial Hōzōin encounter**; he returns later. Do not backfill his marker into the earlier scene.
- `b2c7`: Jōtarō is physically present in the wider Hannya Plain sequence but begins on an observation knoll; Musashi's immediate combat zone should not be represented as if Jōtarō were co-located at the first instant.
- `b2c10`: Otsū's music/knowledge does not constitute physical co-presence with Musashi unless the source explicitly places her there.
- `b2c11`: Musashi reaches Sekishūsai's mountain house but does not thereby create a face-to-face Musashi/Sekishūsai interaction.

## Confidence

### High confidence

- Reuse of existing IDs for Musashi, Matahachi, Otsū, Jōtarō, Akemi, Osugi and Gonroku.
- Physical presence distinctions explicitly stated in the Book II scrape.
- New Yoshioka/Hōzōin character identities as distinct narrative entities.

### Medium / requires historical audit

- Historical status of Nikkan, Inshun and Kizaemon.
- Historical status of several named rōnin.
- Exact map relevance of contextual figures.

### Production blocker

No new character is to be written into `data/characters.json` until the medium-confidence historical-status cases have been audited and the Book II chapter states have been generated from the complete scrape.

## Current conclusion

The Book II roster has been reconciled conceptually with the existing Book I roster, but **production JSON remains untouched**. The next safe step is a historical-status/name audit for the new named characters followed by generation and validation of their chapter-scoped states.
