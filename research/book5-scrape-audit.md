# Book V — *Sky* complete scrape audit

Date: 2026-08-20

Status: **research staging complete; production unchanged**

Machine-readable companion: `research/book5-production-manifest.json`

## Scope and result

All 26 local Book V source files were read in full before any web lookup. They contain 7,663 lines and map without gaps to global sections 54–79 (`book5/chapter1` through `book5/chapter26`). The manifest freezes:

- 26 chapter records and 105 scene-scoped events;
- 44 character entities, 8 collective actors and explicit aliases;
- chapter-level physical presence separated from mentions, letters, memories, reports and ownership of objects;
- 48 location records, all with `coordinates: null`;
- 22 evidence-linked relationships and 24 end-of-book character states;
- 11 external sources used only for geography/historicity after the narrative freeze.

No `data/`, `js/`, `tools/` or documentation outside these two requested research artifacts was changed.

## Evidence rules

The local novel text is the sole authority for plot, presence, relationships and character state. A person is `present` only when the chapter places that person on page. A donation plaque, letter, recalled encounter, distant sound, possession, plan or other person's report does not create physical co-presence. Collective actors are kept as groups when the text does not individuate them safely.

Event certainty is deliberately conservative:

- `explicit`: the narration or dialogue directly establishes the fact;
- `strong_inference`: the text supplies a specific, nearly unavoidable implication, but does not state the proposition in exactly those terms;
- `weak_inference`: allowed by schema but unused in the final ledger.

Movement is also literal: `arrival_confirmed`, `departure_confirmed` and `route_confirmed` require an on-page arrival, departure or traversed route. `intended_destination`, `direction_only` and `uncertain` never imply arrival. No route has been reconstructed as a polyline and no point coordinates have been imported.

## Chapter and presence ledger

The following table is a compact audit view. IDs resolve to the alias registry in the manifest; group IDs are collective actors, not named individuals.

| Global | Source | Events | Physically present | Mentioned only |
|---:|---|---:|---|---|
| 54 | `book5/chapter1` | 4 | musashi, otsu, jotaro, matahachi | kojiro |
| 55 | `book5/chapter2` | 4 | musashi, gonnosuke, gonnosuke_mother | otsu, jotaro, matahachi, daizo |
| 56 | `book5/chapter3` | 4 | matahachi, otsu | musashi, gonnosuke, kojiro |
| 57 | `book5/chapter4` | 4 | musashi, gonnosuke, gonnosuke_mother | jotaro, daizo |
| 58 | `book5/chapter5` | 4 | musashi, geki | date_masamune |
| 59 | `book5/chapter6` | 4 | musashi, geki, gion_toji | jotaro, daizo |
| 60 | `book5/chapter7` | 4 | musashi, gion_toji, oko, toji_band | akemi, kojiro |
| 61 | `book5/chapter8` | 4 | jinnai, onao, akemi, kojiro, daizo, sukeichi, jotaro, scarred_ronin, troupe | musashi, otsu |
| 62 | `book5/chapter9` | 4 | jotaro, daizo, sukeichi, jinnai, akemi, troupe | — |
| 63 | `book5/chapter10` | 4 | osugi, yajibei, ushi | — |
| 64 | `book5/chapter11` | 4 | osugi, yajibei, juro, koroku, kojiro, Obata students | daizo, obata_kagenori |
| 65 | `book5/chapter12` | 4 | kojiro, osugi, yajibei, juro, koroku, akemi, jinnai, onao, Hangawara group | obata_kagenori |
| 66 | `book5/chapter13` | 4 | kojiro, juro, koroku, hojo_shinzo, obata_kagenori, Obata students | obata_yogoro |
| 67 | `book5/chapter14` | 4 | musashi, iori/Sannosuke, deceased sanemon | geki |
| 68 | `book5/chapter15` | 4 | musashi, iori | takuan |
| 69 | `book5/chapter16` | 4 | nagaoka_sado, iori, musashi, mountain bandits, villagers | hosokawa_tadaoki |
| 70 | `book5/chapter17` | 4 | nagaoka_sado, tadatoshi, kakubei, genzo, Hosokawa retainers, villagers | musashi, iori, kojiro, hosokawa_tadaoki |
| 71 | `book5/chapter18` | 4 | musashi, iori, juro, sukekuro, kumagoro, horse traders | yagyu_munenori, takuan |
| 72 | `book5/chapter19` | 4 | musashi, kosuke, kosuke_wife | kojiro, kakubei, honami_koetsu |
| 73 | `book5/chapter20` | 4 | iori, otsu, yagyu_hyogo | musashi, matahachi, sukekuro |
| 74 | `book5/chapter21` | 4 | munenori, hyogo, otsu, sukekuro, iori | sekishusai, shoda_kizaemon |
| 75 | `book5/chapter22` | 4 | osugi, juro, koroku, kojiro, Hangawara group | yajibei, musashi, kakubei |
| 76 | `book5/chapter23` | 4 | kojiro, osugi, juro, koroku, kosuke, hojo_shinzo | musashi, yajibei, kakubei |
| 77 | `book5/chapter24` | 4 | musashi, kosuke, kosuke_wife, hojo_shinzo, iori | kojiro, sukekuro, munenori, hyogo |
| 78 | `book5/chapter25` | 4 | musashi, obata_yogoro, obata_kagenori, nakatogawa_handayu | hojo_shinzo, kojiro |
| 79 | `book5/chapter26` | 5 | musashi, iori, kosuke, kosuke_wife, hojo_shinzo, tazaemon, Hangawara group | kojiro, yajibei, osugi |

## Identity and alias reconciliation

The potentially dangerous merges were resolved as follows:

- `musashi` has the childhood name **Takezō** and signs Sukekurō's reply **Masana**. Neither is a new person.
- `iori` is introduced as **Sannosuke** and is explicitly renamed **Misawa Iori** by Musashi in chapter 15.
- `akemi` receives the Yoshiwara house name **Hanagiri**. The chapter-12 avoidance scene therefore concerns Akemi, not a separate courtesan.
- `kojiro` calls his style **Ganryū**; the style name is an alias/context label, not a second character.
- `osugi` is also **Sugi**, the **Hon'iden dowager** and **Granny Hon'iden**.
- `gonnosuke_mother`, `kosuke_wife` and `scarred_ronin` remain explicitly unidentified. They are not assigned conjectural personal names.
- San'emon's corpse is marked `narrative_deceased`: physical inclusion in chapter 14 does not imply he is alive at chapter start.
- The tea-shop customer called “Tōji” in chapter 6 is reconciled with **Gion Tōji** only because chapter 7 explicitly identifies the pursued leader.

## Cross-chapter reconciliation

### Time

Book V does not run as one continuous few-day sequence. The principal time gates are preserved instead of converted into invented dates:

1. Chapters 1–10 follow the Kiso/Suwa/Hachiōji/Edo streams with no exact calendar dates.
2. Chapter 11 explicitly advances roughly a year and a half after Osugi's arrival in Edo.
3. Chapters 14–16 describe Musashi's return from the north, his settlement at Hōtengahara, seasons of cultivation and the village raid.
4. Chapter 17 explicitly says another year and a half has elapsed since Sado's Tokuganji visit; Musashi and Iori had left Hōtengahara one month before Sado's return.
5. Chapter 18 has Musashi describe two years of farming and an Edo passage three years earlier. These relative statements are retained without forcing an absolute date.
6. Chapter 20's rescue of Otsū by Sukekurō is a retrospective report from the previous year, not an event occurring in the chapter's present evening.

### Separation of concurrent streams

- The torch Matahachi and Otsū see on Nobu Pond does not establish contact with Musashi and Gonnosuke.
- Kojirō, Jinnai's troupe, and Daizō's party share chapter 8 and parts of the route, but the event ledger does not create interactions that the source omits.
- Daizō's name on shrine donation records in chapter 11 is `mentioned_only`; he is not placed at Sensōji, Yushima or Kanda in that chapter.
- Kojirō's Drying Pole at Kōsuke's shop proves ownership and a commission, not Kojirō's physical presence in chapter 19.
- Otsū and Iori pass within sight in chapters 20–21, but Iori never recognizes her. No reunion is recorded.
- Kojirō asks for Musashi at Kōsuke's door in chapter 23, but Shinzō attacks the ambush party before a Musashi–Kojirō meeting occurs. Musashi is therefore only mentioned in chapter 23.
- The chapter-25 sentence that Yogorō's “mind was made up” does not disclose the decision. The final state keeps its content unknown.

## Event and movement cautions

- Chapter 3's Ina/Kōshū/Edo path is a narrated route and direction, not a verified arrival in Edo.
- Chapter 4 leaves Daizō's branch after Shiojiri uncertain; both the northern and Edo possibilities are discussed.
- Chapter 8's assault on Akemi is recorded with `strong_inference`: the assailant's violence and aftermath are clear, while the narration avoids a direct legalistic label.
- Chapter 14 reports Musashi's earlier Edo–Sendai journey in summary. Geki is not physically present in that chapter.
- Chapter 15's Tokuganji supply run is accepted as Iori's physical movement because the narrator directly supplies his completed return, not merely an intention.
- Chapter 17's first-planting celebration and departure are reported to Sado; Musashi and Iori are consequently mentioned, not physically present.
- Chapter 24's attribution of Shinzō's wound to Kojirō is Musashi's highly specific technical inference and remains `strong_inference` in that event; chapter 23 independently shows Kojirō making the cut.
- Chapter 26's final public smear is an Edo-wide reputation event. Its `nihombashi` anchor is a coarse urban index only and must not be interpreted as the unique poster location.

## Relationship and final-state gate

Relationships are directional where required: Matahachi's link to Otsū is coercive captivity, Daizō's claimed guardianship of Jōtarō is not consensual adoption, and Hyōgo's affection for Otsū is not made reciprocal. Sado's interest in Musashi is expressly unfulfilled because they never meet in Book V.

The final-state ledger distinguishes direct from reported evidence. Important unresolved states are intentional:

- Matahachi's position after Sukekurō removes Otsū is unknown.
- Jōtarō, Daizō and Sukeichi are last directly seen heading toward Edo in chapter 9.
- Akemi's location after fleeing Sumiya is unknown.
- Kojirō survives chapter 23, but his precise whereabouts at section 79 are unknown.
- Osugi survives the ambush; chapter 26 invokes her revenge claim but does not restage her physically.
- Kagenori is gravely ill, not dead, at the end of his last direct chapter.
- Musashi leaves Shinzō near the Hōjō house and does not disclose his next destination.

## Geographic and historical validation

Web research began only after all 26 local files and the entity/event freeze were complete. Sources were limited to governments, public cultural authorities and the official sites of the two religious institutions concerned. They validate broad historical correspondence only.

| Area/topic | Authority and URL | Supported conclusion | Deliberate limit |
|---|---|---|---|
| Fukushima checkpoint | Kiso Town, <https://www.town-kiso.com/manabu/rekishi/bunkazai/m100079/> | Fukushima was a major Nakasendō checkpoint and transport node. | No novel scene point or coordinates imported. |
| Narai-juku | Shiojiri City, <https://www.city.shiojiri.lg.jp/site/bunkazaihouhou/29585.html> | Narai is an attested Nakasendō post town along the Narai River. | Daizō's premises remain fictional/unmapped. |
| Shimosuwa/Wada | Shimosuwa Town, <https://www.town.shimosuwa.lg.jp/www/contents/1001000000491/index.html> | Shimosuwa was a hot-spring post town, shrine gateway and road junction. | Inn, teahouse and Musashi's local path are not pinpointed. |
| Mount Takao/Yakuōin | Hachiōji City, <https://www.city.hachioji.tokyo.jp/kankobunka/003/monogatari/p026961.html> | The mountain and temple have a long religious/cultural history. | Hachiōji inn, moat and shed remain unresolved. |
| Tone River works | MLIT Kanto Regional Development Bureau, <https://www.ktr.mlit.go.jp/tonejo/tonejo00185.html> | Early-modern diversion is connected with flood control, transport and new-field development. | This does not locate fictional Hōtengahara. |
| Early Edo | Tokyo Metropolitan Government, <https://www.metro.tokyo.lg.jp/tosei/tokyoto/profile/gaiyo/nenpyo> | The broad 1590/1603/1604 Edo-development chronology is consistent with the setting. | No private residence or market footprint inferred. |
| Sumida River | Tokyo Bureau of Construction, <https://www.kensetsu.metro.tokyo.lg.jp/jimusho/chisui/tokusyu/hanashi> | Historical river naming and provincial-boundary context are attested. | The novel's barrier and ferry are not assigned exact points. |
| Sensōji | Official temple site, <https://www.senso-ji.jp/english/> | Sensōji/Asakusa Kannon's institutional continuity and Sumida tradition are supported. | Daizō's donation remains a novel fact only. |
| Kanda Myōjin | Official shrine site, <https://www.kandamyoujin.or.jp/what/> | Early-Edo relocation and Masakado enshrinement are supported. | The narrative donation plaque is not independently verified. |
| Azabu/Iigura | Minato City, <https://www.city.minato.tokyo.jp/kouhou/kuse/gaiyo/chimerekishi/index-azabu.html> | Azabu and Iigura are historically attested toponyms. | No Yagyū estate point inferred. |
| Akagi/Ushigome | Shinjuku City cultural register, <https://www.city.shinjuku.lg.jp/content/000360259.pdf> | Akagi-shrine tradition in Ushigome is supported. | The authority itself cautions that parts of the received chronology are estimated; Hōjō's house stays unmapped. |

No web source was used to validate dialogue, fictional residence ownership, character travel, the existence of Nobu Pond/Hōtengahara as mappable modern features, or exact scene coordinates.

## Validation performed

The repository validator was run unchanged, and a custom referential audit was run over the manifest. The custom audit checks:

- JSON parseability;
- exactly 26 unique source files and chapter records;
- global sections exactly `54..79` in order;
- source refs exactly `book5/chapter1..26` in order;
- unique event IDs and stored event count;
- every event `source_ref` matching its parent chapter;
- every participant resolving to a character or group ID;
- every `referenced_character` resolving to a character ID;
- every event participant appearing in that chapter's `present` list;
- every referenced character appearing in that chapter's presence/mention ledger;
- every event and final-state location resolving to the location registry;
- every event location included in its chapter location list;
- every relationship endpoint resolving to a character or group;
- every emitted coordinate being null.

Final counts: **26 chapters, 105 events, 52 actor IDs (44 people + 8 groups), 48 locations, 0 coordinate values**. All custom referential checks passed.

## Promotion blockers and safe migration notes

This artifact is complete as a scrape, but it is intentionally not a production patch. Before promotion, production IDs must be reconciled against the then-current character and location registries. The following must not be auto-normalized:

- `nobu_pond`, `inojigahara`, `buna_valley`, `hotengahara`, `tokuganji`, the raid village and all private residences are unresolved or narrative-only locations;
- route names are corridors, not point locations;
- the `nihombashi` anchor on the final reputation event is deliberately coarse;
- unnamed people and collective actors must remain unidentified/groups;
- historical-name correspondence must not convert the novel's fictional encounter into historical fact;
- reported/recollected events must not generate physical co-presence or interactions;
- final destinations marked unknown must remain unknown.

Within those constraints, there are no corpus-coverage or referential blockers in the research staging files.
