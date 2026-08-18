# MusashiMap — Book II / WATER — Entity Audit

Status: **completed — research only**

Canonical narrative source: `data/source/book2/`.

This audit freezes the Book II character/entity normalization before production-data insertion. It does not modify production JSON.

## Existing identities — reuse, no duplicates

| Canonical ID | Book II forms verified | Decision |
|---|---|---|
| `musashi` | Miyamoto Musashi, Musashi, Takezō, Miyamoto | Reuse `musashi`. The Book II text explicitly connects the names. |
| `matahachi` | Hon'den Matahachi, Matahachi | Reuse `matahachi`. |
| `otsu` | Otsū | Reuse `otsu`. |
| `akemi` | Akemi | Reuse `akemi`. |
| `osugi` | Osugi, Hon'iden Osugi | Reuse `osugi`. |
| `gonroku` | Uncle Gon, Gonroku | Reuse `gonroku` where the Book I identity is the same person. |
| `jotaro` | Jōtarō, Aoki Jōtarō | Reuse `jotaro`. |
| `oko` | Oko, Okō | Reuse `oko`. |

The current production registry already contains these identities, so Book II must not create parallel records. The current Book I character schema uses stable IDs and chapter presence arrays; Book II integration must extend that model rather than replace it.

## New narrative characters — production candidates

| Proposed ID | Canonical display name | Role | Book II status | Notes |
|---|---|---|---|---|
| `seijuro` | Yoshioka Seijūrō | Yoshioka young master | recurring | New narrative entity. |
| `gion_toji` | Gion Tōji | Yoshioka senior disciple | recurring | New narrative entity. |
| `ueda_ryohei` | Ueda Ryōhei | Yoshioka senior disciple | recurring | New narrative entity. |
| `denshichiro` | Yoshioka Denshichirō | Yoshioka younger brother | recurring/referenced | Physically associated with the Yoshioka party later in Yagyū. |
| `shoda_kizaemon` | Shōda Kizaemon | Yagyū retainer | recurring | Important connector between Yagyū and Yoshioka party. |
| `yagyu_sekishusai` | Yagyū Muneyoshi / Sekishūsai | retired Yagyū head | recurring | Internal identity must be stable across both personal and title/name forms. |
| `yagyu_munenori` | Yagyū Munenori | Yagyū son | contextual/referenced | No scene presence established in Book II. |
| `yagyu_hyogo` | Yagyū Hyōgo Toshitoshi | Yagyū grandson | contextual/referenced | No scene presence established in Book II. |
| `nikkan` | Nikkan | Hōzōin elder/abbot | recurring | Narrative character, not merely historical context. |
| `inshun` | Inshun | Hōzōin abbot/successor | recurring | Narrative character. |
| `agon` | Agon | Hōzōin fighter | chapter 6 | Dies in the Book II confrontation. |
| `yamazoe_dampachi` | Yamazoe Dampachi | rōnin | chapter 7 | Dies on Hannya Plain. |
| `otomo_banryu` | Otomo Banryū | rōnin | chapters 6–7 context | Keep separate from Dampachi. |
| `yasukawa_yasubei` | Yasukawa Yasubei | rōnin | chapters 6–7 context | Keep separate from Dampachi. |
| `kocha` | Kocha | inn worker at Yagyū | recurring | Narrative character at the Wataya/local inn. |
| `kimura_sukekuro` | Kimura Sukekurō | Yagyū retainer | chapters 9–10 | New narrative entity. |
| `debuchi` | Debuchi Magobei | Yagyū retainer | chapters 9–10 | New narrative entity. |
| `murata_yozo` | Murata Yozō | Yagyū retainer | chapters 9–10 | New narrative entity. |

These IDs are frozen as **proposed production IDs**, not yet written into `data/characters.json`.

## Historical/contextual figures — do not add to map character presence

The Book II source names historical or cultural figures including:

- Yoshioka Kempō
- Oda Nobunaga
- Toyotomi Hideyoshi
- Tokugawa Ieyasu
- Tokugawa Hidetada
- Toyotomi Hideyori
- Ashikaga shōguns / Ashikaga Yoshiaki
- Okuni
- Kiichi Hōgen
- Lord Kōizumi
- Sanada Yukimura
- Sengoku Sōya
- Ban Dan'emon

These remain **contextual/history entities** unless a later audit establishes an actual narrative scene presence. They must not be added to `present_in` merely because they are mentioned.

## Group/faction candidates

These should remain distinct from individual characters:

- Yoshioka School / House of Yoshioka
- Yoshioka disciples/retainers as an unnamed group
- Hōzōin priests/lancers
- rōnin gathered around Dampachi
- Yagyū household / retainers

No individual identity should be invented for unnamed members.

## Identity conflicts / schema findings

1. `characters.json` currently describes `present_in` using Book I-local section numbers. It must not be extended with Book II-local `1–11` values once the global chronology is introduced; otherwise section 1 would ambiguously mean Book I chapter 1 or Book II chapter 1.
2. `identities.json` is currently also Book I-local: Musashi's `valid_from_section`/`valid_until_section` are 1–7 and the canonical-name switch is section 8. These values need a global book-aware chronology before Book II identity states are inserted.
3. `relationships.json` currently contains Book I relationships only. Book II relationships should not be appended until their narrative timing/spoiler visibility has been audited.
4. `events.json` explicitly identifies itself as Book I-only and uses `b1cN-*` IDs. Book II events must use a separate `b2cN-*` namespace during staging, then be integrated through the global chapter model.

## Presence candidates for Book II

The following are safe candidates for physical chapter presence based on the completed Pass A/B/C research:

- Musashi: chapters 1–11, with scene-specific state changes.
- Matahachi: chapters 1–2; later chapters primarily use references/correspondence rather than physical presence.
- Otsū: chapter 5 onward in the Book II sequence, with Yagyū-area presence in chapters 8–11.
- Akemi: chapter 1 and chapter 5 context; do not mark physical presence in later chapters without direct scene evidence.
- Osugi: chapter 3 physical presence; later pursuit may be referenced rather than physically present in Book II scenes.
- Jōtarō: chapter 4 onward, with the Nara/Hannya/Yagyū sequence continuing through chapter 11.
- Seijūrō/Tōji/Ueda: chapters 1–2; later references must remain references unless the chapter text establishes physical presence.
- Denshichirō: later Yagyū sequence, especially chapter 9 context; earlier absence in Ise is explicitly reported.
- Shōda Kizaemon: chapters 5 and 8–10, with the Yagyū/Yoshioka correspondence.
- Sekishūsai: chapters 8–11.
- Nikkan: chapters 6–7.
- Inshun: chapters 6–7.
- Agon: chapter 6.
- Dampachi: chapters 6–7; death in chapter 7.
- Banryū/Yasubei: chapters 6–7 context; exact physical-presence arrays require the final production extraction rather than inference from group references.
- Kocha: chapters 8–10/9–10 depending on exact scene segmentation; do not broaden presence beyond source-confirmed scenes.
- Kimura/Debuchi/Murata: chapters 9–10.

These are staging conclusions; the production arrays should be generated from chapter-level event/state records, not manually copied from this summary.

## Alias/reader-knowledge rules

- Musashi/Takezō is the only Book II identity transition inherited directly from Book I and must preserve the reader-facing temporal semantics already established.
- `Yagyū Muneyoshi` and `Sekishūsai` refer to the same narrative person and must not become two map characters.
- `Aoki Jōtarō` and `Jōtarō` refer to the same character and must not become two records.
- Titles such as "Young Master", "the old man", "the abbot", or "the captain" are not separate identities when the surrounding text identifies the person.

## Production gate

**Entity audit: PASS for research normalization.**

Production insertion remains blocked only by:

1. Book II location registry/classification;
2. geographic verification of retained locations;
3. global chapter numbering for Books I–VII;
4. generation of chapter/state/event staging data from the frozen entity registry;
5. spoiler/technical audit after integration.

No production JSON was modified by this commit.
