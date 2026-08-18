# Book II — Character Reconciliation & Taxonomy Staging

Status: **staging only — production character JSON not modified**

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
| matahachi | Hon'den Matahachi | continuing; physical presence early in Book II and reported later |
| otsu | Otsū | primary; physical presence beginning b2c5 |
| jotaro | Jōtarō | primary; physical presence beginning b2c4 |
| akemi | Akemi | continuing; physical presence in relevant Book II scenes |
| osugi | Obaba Osugi | continuing; physical presence b2c3 |
| gonroku | Fuchikawa Gonroku | secondary; physical presence b2c3 |
| oko | Okō | continuing; physical presence in b2c1 |
| himeji_captain | Himeji garrison captain | secondary; no personal name invented |
| lord_ikeda | Ikeda Terumasa | contextual/historical; presence follows direct textual evidence only |

## New distinct named entities proposed

| Proposed ID | Name | Role | Historical status | Map relevance | First physical presence |
|---|---|---|---|---|---|
| yoshioka_seijuro | Yoshioka Seijūrō | secondary | historical/traditional, literary details | mapped | b2c1 |
| gion_toji | Gion Tōji | secondary | unknown | mapped | b2c1 |
| ueda_ryohei | Ueda Ryōhei | tertiary | unknown | mapped | b2c1 |
| yoshioka_denshichiro | Yoshioka Denshichirō | secondary | historical/traditional, literary details | mapped when physically present | b2c8 |
| in_ei | Kakuzenbō Hōzōin In'ei | contextual | historical | contextual | none in Book II physical map |
| nikkan | Nikkan | secondary | unknown / fictionalized candidate | mapped | b2c6 |
| agon | Agon | tertiary | fictionalized / unverified | mapped | b2c6 |
| inshun | Hōzōin Inshun | secondary | historical | mapped | b2c7; absent from initial b2c6 encounter |
| shoda_kizaemon | Shōda Kizaemon | tertiary | historical | mapped | b2c5 |
| yamazoe_dampachi | Yamazoe Dampachi | tertiary | unknown | mapped | b2c6 |
| otomo_banryu | Otomo Banryū | tertiary | unknown | mapped | b2c6 |
| yasukawa_yasubei | Yasukawa Yasubei | tertiary | unknown | mapped | b2c6 |
| sekishusai | Yagyū Sekishūsai / Muneyoshi / Munetoshi | secondary/contextual | historical | mapped when physically present | b2c9 |
| munenori | Yagyū Munenori / Lord Munenori | contextual | historical | contextual | no Book II physical marker unless source explicitly establishes one |
| kimura_sukekuro | Kimura Sukekurō | tertiary | historical | mapped when physically present | b2c9 |
| debuchi_magobei | Debuchi Magobei / Heibei | tertiary | historical | mapped when physically present | b2c9 |
| murata_yozo | Murata Yozō | tertiary | historical | mapped when physically present | b2c9 |
| kocha | Kocha | tertiary | unknown | mapped | b2c8 |

## Named contextual people — not automatically mapped

- Yoshioka Kempō
- Toda Seigen
- Ogasawara Genshinsai
- Hō Ittōsai
- Okubo Nagayasu
- Suzuki Ihaku
- Hikida Bungorō
- Ban Dan'emon / Ban Naoyuki
- Sanada Yukimura
- Sengoku Sōya
- Katō Kiyomasa
- Yagyū Hyōgonosuke / Hyōgo Toshitoshi
- Yagyū Gorōzaemon
- Lord Kōizumi of Ise
- Lord Yorinori of Kishū
- Lord Gamō (exact individual unresolved)
- Lord Katō of Higo (exact individual unresolved)

These names remain contextual unless the canonical chapter text establishes physical narrative presence requiring a character state/event.

## Critical identity normalizations

- Kakuzenbō In'ei = Hōzōin In'ei.
- Yagyū Sekishūsai = Yagyū Muneyoshi = Yagyū Munetoshi.
- Lord Munenori = Yagyū Munenori.
- Kimura Sukekurō spelling variants normalize to `kimura_sukekuro`.
- Debuchi Magobei / Debuchi Heibei are one identity for the purposes of the production registry unless the source establishes otherwise.
- Shōda Kizaemon spelling variants normalize to `shoda_kizaemon`.
- Lord Ikeda / Lord Terumasa / Ikeda Terumasa = `lord_ikeda`.
- Uncle Gon = Fuchikawa Gonroku = `gonroku`.
- Kocha is a distinct named narrative character and must not be absorbed into an unnamed inn-staff group.

## Historical-status evidence gate

The historical audit is evidence-based, not name-based. Positive evidence supports historical status for In'ei, Inshun, Sekishūsai/Muneyoshi/Munetoshi, Munenori, Shōda Kizaemon, Kimura Sukekurō, Murata Yozō and Debuchi Magobei/Heibei. The novel's narrative treatment remains literary and must not be presented as documentary history.

For Nikkan, Agon, Yamazoe Dampachi, Otomo Banryū, Yasukawa Yasubei, Gion Tōji, Ueda Ryōhei, Kocha and other obscure names where independent evidence is insufficient, retain `unknown` or `fictionalized` according to the existing audit; do not promote them to `historical` by association with a school or clan.

## Chapter-state requirements

- `b2c2`: Denshichirō is reported absent in Ise, not physically present at Yoshioka School.
- `b2c6`: Inshun is absent from the initial Hōzōin encounter and appears later; do not backfill his marker.
- `b2c7`: Jōtarō is physically present in the wider Hannya Plain sequence but is not initially co-located with Musashi's immediate combat zone.
- `b2c10`: Otsū's music/knowledge does not create physical co-presence with Musashi.
- `b2c11`: Musashi reaches Sekishūsai's mountain house but does not thereby create a face-to-face Musashi/Sekishūsai interaction.
- Kocha's b2c8–b2c9 presence is physical and should resolve to `kocha`; no invented surname is permitted.

## Production blockers

Before character JSON migration:

1. finalise every new ID against the exhaustive candidate index;
2. verify every event participant resolves to one of these IDs or to an explicit contextual entity;
3. resolve Yagyū Gorōzaemon without guessing whether it is a duplicate of another Yagyū identity;
4. generate chapter states for all new IDs;
5. run the cross-book validator.

## Conclusion

The previous reconciliation has been corrected to include Kocha and the Yagyū identities exposed by the event ledger. No duplicate `Sekishūsai`/`Muneyoshi`/`Munetoshi` identity is permitted. Production character JSON remains untouched by this staging update.
