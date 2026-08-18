# MusashiMap — Book II / WATER — Entity Audit

Status: **completed — research only**

Canonical narrative source: `data/source/book2/`.

This audit freezes Book II character/entity normalization before production-data insertion. It does not modify production JSON.

## Character taxonomy — mandatory separation

Character classification is now **orthogonal**. `historical_status` must never replace `narrative_role`.

| Field | Allowed values | Meaning |
|---|---|---|
| `entity_type` | `character`, `historical_figure`, `group`, `other` | What kind of entity it is in the research model. |
| `narrative_presence` | `active`, `mentioned`, `historical_context` | Whether the entity actually participates in the novel's current narrative scene. |
| `narrative_role` | `primary`, `secondary`, `tertiary`, `none` | Narrative importance, independent of historical status. |
| `historical_status` | `historical`, `fictional`, `fictionalized`, `unknown` | Historical status of the identity, only when defensible. |
| `map_relevance` | `mapped`, `contextual`, `none` | Whether the entity should affect the reader-facing map. |

### Core rule

A historical person who actively participates in Yoshikawa's narrative is still a **character**. Being historical is an attribute, not a mutually exclusive category.

Conversely, a historically real person who is merely mentioned is a `historical_figure` / `historical_context` entity and must not automatically become a character marker.

Do not infer `fictional` merely because no reliable historical identification has yet been found. Use `unknown` until the historical-status question has actually been researched.

This reflects the nature of Yoshikawa's novel: publisher descriptions explicitly note that Yoshikawa selects real historical figures and reshapes them within partly historical and partly revised events. citeturn0search0turn0search8

## Existing identities — reuse, no duplicates

| Canonical ID | Book II forms verified | Decision |
|---|---|---|
| `musashi` | Miyamoto Musashi, Musashi, Takezō, Miyamoto | Reuse `musashi`. Active narrative character. Historical status: `historical`; narrative role: `primary`. |
| `matahachi` | Hon'den Matahachi, Matahachi | Reuse `matahachi`. |
| `otsu` | Otsū | Reuse `otsu`. |
| `akemi` | Akemi | Reuse `akemi`. |
| `osugi` | Osugi, Hon'iden Osugi | Reuse `osugi`. |
| `gonroku` | Uncle Gon, Gonroku | Reuse `gonroku` where the Book I identity is the same person. |
| `jotaro` | Jōtarō, Aoki Jōtarō | Reuse `jotaro`. |
| `oko` | Oko, Okō | Reuse `oko`. |

## New narrative characters — production candidates

All entities below are **narrative characters first**. Their historical status remains a separate field and is not assumed without evidence.

| Proposed ID | Canonical display name | Narrative role | Presence | Map relevance | Historical status |
|---|---|---|---|---|---|
| `seijuro` | Yoshioka Seijūrō | secondary | active | mapped | unknown |
| `gion_toji` | Gion Tōji | secondary | active | mapped | unknown |
| `ueda_ryohei` | Ueda Ryōhei | secondary | active | mapped | unknown |
| `denshichiro` | Yoshioka Denshichirō | secondary | active/mentioned | mapped | unknown |
| `shoda_kizaemon` | Shōda Kizaemon | secondary | active | mapped | unknown |
| `yagyu_sekishusai` | Yagyū Muneyoshi / Sekishūsai | secondary | active | mapped | historical |
| `nikkan` | Nikkan | secondary | active | mapped | unknown |
| `inshun` | Inshun | secondary | active | mapped | historical/verify identity before production |
| `agon` | Agon | tertiary | active | mapped | unknown |
| `yamazoe_dampachi` | Yamazoe Dampachi | secondary | active | mapped | unknown |
| `otomo_banryu` | Otomo Banryū | tertiary | active/mentioned | contextual until scene-level extraction is finalized | unknown |
| `yasukawa_yasubei` | Yasukawa Yasubei | tertiary | active/mentioned | contextual until scene-level extraction is finalized | unknown |
| `kocha` | Kocha | tertiary | active | mapped | unknown |
| `kimura_sukekuro` | Kimura Sukekurō | tertiary | active | mapped | unknown |
| `debuchi` | Debuchi Magobei | tertiary | active | mapped | unknown |
| `murata_yozo` | Murata Yozō | tertiary | active | mapped | unknown |

Yagyū Muneyoshi/Sekishūsai is explicitly a prominent character in Yoshikawa's *Musashi* despite being a historical figure; this is the model case for keeping `historical_status=historical` alongside `entity_type=character` and `narrative_presence=active`. citeturn0search12

## Historical/contextual figures — do not add to map character presence

These Book II references remain contextual unless a scene-level audit establishes active narrative presence:

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

For these entities the default is:

```text
entity_type = historical_figure
narrative_presence = historical_context
narrative_role = none
map_relevance = none
```

unless later text establishes an actual scene presence.

## Group/faction candidates

These remain distinct from individuals:

- Yoshioka School / House of Yoshioka
- Yoshioka disciples/retainers as an unnamed group
- Hōzōin priests/lancers
- rōnin gathered around Dampachi
- Yagyū household / retainers

No individual identity should be invented for unnamed members.

## Existing identity and schema findings

1. `characters.json` currently describes `present_in` using Book I-local section numbers. It must not be extended with Book II-local `1–11` values once the global chronology is introduced.
2. `identities.json` is currently Book I-local and needs a global book-aware chronology before Book II identity states are inserted.
3. `relationships.json` currently contains Book I relationships only. Book II relationships should not be appended until timing/spoiler visibility has been audited.
4. `events.json` is Book I-only and uses `b1cN-*` IDs. Book II events must use a separate `b2cN-*` namespace during staging.

## Presence candidates for Book II

These are staging conclusions, not final production arrays:

- Musashi: chapters 1–11, with scene-specific state changes.
- Matahachi: chapters 1–2; later material primarily references/correspondence.
- Otsū: chapter 5 onward in the Book II sequence, with Yagyū-area presence in chapters 8–11.
- Akemi: chapter 1 and chapter 5 context; do not mark later physical presence without direct scene evidence.
- Osugi: chapter 3 physical presence; later pursuit may be referenced rather than physically present.
- Jōtarō: chapter 4 onward through the Nara/Hannya/Yagyū sequence.
- Seijūrō/Tōji/Ueda: chapters 1–2; later references remain references unless the text establishes physical presence.
- Denshichirō: later Yagyū sequence; earlier absence in Ise is explicitly reported.
- Shōda Kizaemon: chapters 5 and 8–10.
- Sekishūsai: chapters 8–11.
- Nikkan: chapters 6–7.
- Inshun: chapters 6–7.
- Agon: chapter 6.
- Dampachi: chapters 6–7; death in chapter 7.
- Banryū/Yasubei: chapters 6–7 context; exact presence requires final event/state extraction.
- Kocha: chapters 8–10, subject to exact scene segmentation.
- Kimura/Debuchi/Murata: chapters 9–10.

## Alias/reader-knowledge rules

- Musashi/Takezō remains one canonical identity and must preserve the reader-facing temporal semantics established in Book I.
- `Yagyū Muneyoshi` and `Sekishūsai` are one narrative person.
- `Aoki Jōtarō` and `Jōtarō` are one narrative person.
- Titles such as "Young Master", "the old man", "the abbot", or "the captain" are not separate identities when the surrounding text identifies the person.

## Production gate

**Entity audit: PASS for research normalization.**

Production insertion remains blocked by:

1. Book II location registry/classification;
2. geographic verification of retained locations;
3. global chapter numbering for Books I–VII;
4. generation of chapter/state/event staging data from the frozen entity registry;
5. spoiler/technical audit after integration.

No production JSON was modified by this audit.
