# Book VII — *The Perfect Light* complete scrape audit

Date: 2026-08-20

Status: **research staging complete; production unchanged**

Machine-readable companion: `research/book7-production-manifest.json`

## Scope and result

All 16 local Book VII source files were read in full before any web lookup. They contain 5,664 lines and map without gaps to global sections 97–112 (`book7/chapter1` through `book7/chapter16`). The manifest freezes:

- 16 chapter records and 78 scene-scoped events;
- 56 character entities, 12 collective actors and explicit alias reconciliation;
- chapter-level physical presence separated from mentions, reports, letters, memories, plans and distant prayers;
- 43 location records, every one with `coordinates: null`;
- 18 evidence-linked relationships and 20 end-of-book character states;
- 10 institutional web sources used only for geography and historicity after the narrative ledger was frozen.

No production `data/`, `js/`, `tools/` or documentation outside the two requested Book VII research artifacts was changed.

## Evidence rules

The local novel text is the sole authority for plot, presence, relationship state and movement. A character is `present` when the chapter directly stages that character, even at a distance or in a narrated earlier scene. A letter, rumor, memory, proposed destination, name on an object or omniscient reference to a person praying elsewhere remains `mentioned` and cannot become an interaction.

Certainty is conservative:

- `explicit`: directly stated or directly narrated;
- `strong_inference`: schema-supported but not needed in the final Book VII events;
- `weak_inference`: schema-supported but unused.

Movement is literal. `intended_destination` never means arrival, `direction_only` gives no endpoint, and `uncertain` preserves a departure whose destination or aftermath is expressly unknown. No path is reconstructed as a polyline and no coordinate is imported.

## Chapter and presence ledger

IDs resolve through the manifest's character/group registry. Collective actors remain groups when the source does not safely identify every individual.

| Global | Source | Events | Physically present | Mentioned only |
|---:|---|---:|---|---|
| 97 | `book7/chapter1` | 5 | inshun, kimura_sukekuro, otsu, yagyu_hyogo, ushinosuke, toranosuke, hozo_in_party, koyagyu_ronin | sekishusai, yagyu_munenori, ono_tadaaki, kojiro |
| 98 | `book7/chapter2` | 5 | yagyu_hyogo, otsu, kimura_sukekuro, ushinosuke, nankobo, daun, toriumi_benzo, gonnosuke, iori | takuan, musashi, sekishusai, yagyu_munenori |
| 99 | `book7/chapter3` | 4 | gonnosuke, iori, toriumi_benzo, oan, toroku, honami_koetsu, myoshu, sugizo, gensuke, kongoji_clergy, mount_kudo_network | musashi, otsu |
| 100 | `book7/chapter4` | 4 | nagaoka_sado, nuinosuke, sanada_daisuke, daisuke_wife, sanada_yukimura, toriumi_benzo, gonnosuke | musashi, hosokawa_tadaoki |
| 101 | `book7/chapter5` | 6 | iori, osei, otsuru, sahei, nambanya, kojiro, nagaoka_sado, nuinosuke, otsu, hosokawa_party | gonnosuke, kobayashi_tarozaemon, musashi |
| 102 | `book7/chapter6` | 5 | musashi, matahachi, gudo, watari_shima, miyake_gumbei, honda_attackers, okazaki_pupils | otsu, takuan |
| 103 | `book7/chapter7` | 4 | musashi, matahachi, gudo | — |
| 104 | `book7/chapter8` | 5 | otsu, jotaro, osugi, asaya_mambei, honiden_men | musashi, kojiro, takuan |
| 105 | `book7/chapter9` | 5 | otsu, osugi, jotaro, honiden_men | — |
| 106 | `book7/chapter10` | 5 | musashi, honami_koetsu, matahachi, haiya_shoeki, yoshino_dayu, gonnosuke, akemi, akemi_baby, hosokawa_party | iori, kojiro, nagaoka_sado, sanada_yukimura |
| 107 | `book7/chapter11` | 4 | otsu, osugi, jotaro, musashi, himeji_samurai | gonnosuke |
| 108 | `book7/chapter12` | 4 | kojiro, iwama_kakubei, omitsu, tatsunosuke, ujiie_magoshiro, hosokawa_tadatoshi | musashi, ono_tadaaki, sekishusai |
| 109 | `book7/chapter13` | 5 | matahachi, akemi, akemi_baby, ichinomiya_gempachi, kojiro, omitsu, tatsunosuke, kojiro_aunt, kojiro_supporters | musashi, iwama_kakubei, hosokawa_tadatoshi, osugi |
| 110 | `book7/chapter14` | 5 | musashi, iori, nuinosuke, nagaoka_sado, kobayashi_tarozaemon, matahachi, akemi, akemi_baby, utsumi_magobeinojo, koyama_handayu, kinami_kagashiro, shimmen_six | kojiro, iwama_kakubei, hosokawa_tadatoshi, hosokawa_tadaoki |
| 111 | `book7/chapter15` | 6 | nuinosuke, kojiro, tatsunosuke, omitsu, kobayashi_tarozaemon, sasuke, otsuru, musashi, gonnosuke, osugi, otsu, jotaro | nagaoka_sado, hosokawa_tadatoshi |
| 112 | `book7/chapter16` | 6 | musashi, sasuke, kojiro, tatsunosuke, nagaoka_sado, iori, iwama_kakubei, kojiro_supporters, funashima_officials | otsu, osugi, gonnosuke, matahachi, akemi |

## Identity and alias reconciliation

- `musashi` includes **Takezō**, the adult name **Masana**, and the Okazaki cover name **Muka**. Muka is not a separate writing teacher.
- `kojiro` includes **Ganryū**. In this book the term may denote Kojirō or his style; it is not a second swordsman.
- `toranosuke` is introduced as **Torazō** and explicitly recognized by Sukekurō as **Hamada Toranosuke**.
- The unnamed mountain priest following Gonnosuke in chapters 2–3, **Rinshōbō** in chapter 4, and **Toriumi Benzō** are one person. Chapter 4 explicitly supplies the identity and his status as Yukimura's retainer.
- `sanada_yukimura` uses the religious name **Denshin Gessō**.
- `akemi` retains the earlier house name **Hanagiri**, but the Book VII ledger uses Akemi where the narrative does.
- Kojirō's aunt, Daisuke's wife and Akemi's baby remain explicitly unnamed. No personal name was inferred.
- The Hon'iden men, six former Shimmen retainers, Hōzōin party, Funashima officials and revenge party remain collective actors where individual membership is incomplete.

## Cross-chapter reconciliation

### Time gates

The book spans more than one continuous journey and contains several explicit temporal anchors:

1. Chapter 1 begins in early spring after Sekishūsai's death late in the preceding year.
2. Chapter 2 advances roughly three weeks between Otsū's departure and the Kōfukuji tournament.
3. Chapter 5 moves from Iori's immediate escape to the beginning of the ninth month, when the Hosokawa party sails from Sakai.
4. Chapter 6 says Musashi has lived under the Muka identity for about a year and summarizes his route after leaving Edo; the summarized route is not converted into chapter-present co-presence.
5. Chapter 8 retrospectively explains Otsū's previous-summer voyage from Sakai to Shikama.
6. Chapter 10 fixes the present at the beginning of the fourth month of 1612.
7. Chapters 13–16 narrow to the 11th–13th days of that month. The duel notice specifies 8 a.m.; the narrative places Musashi's landing near 10 a.m.

No Gregorian conversion beyond the text's explicit `1612` bracket is introduced.

### Separated streams and reports

- Otsū's departure for Edo in chapter 2 is confirmed, but her arrival in Edo is never established. Her later route is reconstructed only from subsequent on-page locations.
- Iori sees a woman's face in a Kongōji image and thinks of a “sister.” This is subjective association, not evidence that Otsū is literally his sister.
- The mountain ambush leaves Iori and Gonnosuke separated. Chapter 5 confirms Iori survived; chapter 10 later reports that Yukimura freed Gonnosuke. The report does not put Yukimura physically in chapter 10.
- Otsū physically passes the bound Iori in Sakai in chapter 5, but they do not recognize or communicate with one another.
- Chapter 11 directly stages Musashi speaking from the passing ship, so he is physically present at a distance. Otsū still does not meet him.
- The chapter-12 court demonstration with Tadatoshi and Ujiie is directly narrated as an earlier scene and therefore counts as physical presence; Musashi remains only the absent rival under discussion.
- Chapter 16 names Otsū, Osugi, Gonnosuke, Matahachi and Akemi as praying elsewhere. They are `mentioned`, not present on Funashima.

## Relationship and final-state cautions

- Musashi's nod and ensuing words in chapter 15 explicitly acknowledge Otsū as his wife at the narrative/personal level. The text supplies no civil registration or public ceremony, so the relationship is not embellished with one.
- Matahachi chooses to work, accompany Akemi and act as father to her baby. He believes the child may be his, but the novel does not prove biological paternity. The manifest records social fatherhood and preserves biological uncertainty.
- Kojirō and Omitsu are lovers, and Kakubei accepts marriage after the duel. This is a conditional plan, not a completed marriage.
- The duel's immediate description has Musashi detect a trace of breath, but the narrator explicitly states that Kojirō “did not return to the world of the living.” The final state is therefore death, with the transient breath documented rather than used to create survival ambiguity.
- Musashi departs Funashima alive, but the novel expressly says his destination and any action by the revenge party are unrecorded. Neither a return to Shimonoseki nor a clash is inferred.
- Hyōgo says he intends to serve the Owari Tokugawa in Nagoya. The book does not show the arrival, so his last direct location remains Koyagyū.

## Geographic and historical validation

Web research began only after the 16-file local ledger and cross-chapter identities were frozen. Sources are governments, public cultural authorities, UNESCO or official religious institutions. They validate broad correspondence and historical context only.

| Area/topic | Authority and URL | Supported conclusion | Deliberate limit |
|---|---|---|---|
| Funashima / Ganryū-jima | Shimonoseki City official tourism, <https://shimonoseki.travel/shimonosekistory/ganryujima/> | The official name Funashima, Kanmon setting and local 1612-04-13 duel tradition correspond to the novel; the authority itself says variant accounts exist. | Novel dialogue, exact choreography, delay strategy and death details are not treated as archival facts. Modern reclamation also prevents direct use of the present shoreline as the 1612 scene. |
| Hikojima | Shimonoseki City, <https://www.city.shimonoseki.lg.jp/soshiki/25/4710.html> | Hikojima is a Kanmon Strait locality linked in municipal material with Ganryū-jima and Genpei memory. | Teshimachi inlet and the revenge-party boat positions are not pinpointed. |
| Kokura Castle | Kitakyushu City public cultural archive, <https://www.kitakyushu-museum.jp/exhibition/2019spring/> | Municipal cultural material dates Hosokawa Tadaoki's large Kokura Castle construction to 1602 and records the local Musashi/Kojirō association. | Private residences, factional conversations and the duel administration remain novel evidence. |
| Sakai | Sakai City, <https://www.city.sakai.lg.jp/foreign-language/english/visitors/about/ourcity/location.html> | Sakai was a major medieval overseas-trade and self-governing city. | Kobayashi Tarōzaemon's business, Tatsumimaru and exact piers remain unmapped narrative sites. |
| Sakai archaeology | Sakai City cultural heritage, <https://www.city.sakai.lg.jp/kanko/rekishi/bunkazai/bunkazai/isekishokai/index.files/sakai_kango_toshi.pdf> | The official archaeological summary supports Sakai's domestic/international maritime role and notes the later 1615 destruction. | The 1615 event is context after the novel's 1612 voyage, not a plot event. |
| Amanosan Kongōji | Kawachinagano City, <https://www.city.kawachinagano.lg.jp/soshiki/56/3718.html> | Kongōji's identity as “Nyonin Kōya,” long religious history and protected heritage are institutionally supported. | Gonnosuke's memorial service, Oan/Tōroku and the nearby attack are not independently verified. |
| Mount Kōya | UNESCO World Heritage Centre, <https://whc.unesco.org/en/list/1142/> | Kōyasan belongs to the Kii sacred-site and pilgrimage landscape with over 1,200 years of documented tradition. | No coordinate or exact path is imported for Sado's walk, Yukimura's residence or Mount Kudo. |
| Kōfukuji | Official temple, <https://www.kohfukuji.com/english/index.html> and <https://www.kohfukuji.com/about/history/> | The Nara institution and its long chronology are confirmed, including the Kōfukuji establishment in 710. | The Hōzōin tournament and boys' fight are narrative events only. |
| Himeji / Shikama context | Himeji City, <https://www.city.himeji.lg.jp/shisei/0000007248.html> | Himeji's broad historic-city context is official. | The search did not yield institutional evidence precise enough to reconstruct the 1612 Shikama dyers' quarter, inn, Aoki home or estuary point; all remain area-level or unmappable. |

No web source was used to infer an exact coordinate, private residence, route geometry, dialogue, character presence, relationship or duel technique.

## Validation performed

The unchanged repository validator was executed:

```text
node tools/validate-data.mjs
MusashiMap data validator: 19/19 published sections; 158 events, 137 states, 36 characters, 52 locations.
Semantic validation passed for published book(s): I, II.
```

That validator correctly ignores this research-staging artifact. A separate executable Node audit parsed the manifest and checked:

- exactly 16 unique source files and chapter records;
- sections exactly `97..112` and source refs exactly `book7/chapter1..16`;
- every stored source line count and SHA-256 against the local corpus;
- unique event IDs and declared event count;
- every event `source_ref` matching its parent chapter;
- every event participant resolving to a character/group and appearing in that chapter's `present` list;
- no overlap between `present` and `mentioned` within a chapter;
- every chapter/event/final-state location resolving to the location registry;
- every event location appearing in its parent chapter's location list;
- every relationship endpoint resolving to an actor;
- every final state resolving to a character;
- all emitted coordinates being null.

Final executable result:

```json
{"chapters":16,"events":78,"actors":68,"characters":56,"groups":12,"locations":43,"relationships":18,"final_states":20,"external_sources":10,"coordinates":0,"source_lines":5664,"status":"PASS"}
```

## Promotion blockers and safe migration notes

This is a complete research scrape, not a production patch. Promotion requires reconciliation with the production registries and current spoiler gates. The following must not be auto-normalized:

- every private residence, inn, cave, dōjō, bridge scene and viewpoint is unresolved or unmappable;
- named routes are corridors, not point locations;
- present-day Ganryū-jima is larger because of modern reclamation and must not be used as exact 1612 scene geometry;
- the official duel page preserves a local tradition and explicitly acknowledges competing accounts;
- Rinshōbō/Toriumi Benzō may be merged because the novel explicitly reveals the identity; unnamed groups and relatives must remain unresolved;
- Otsū's wife status is explicit in the novel but should remain spoiler-gated to section 111;
- Kojirō's death must remain gated to section 112;
- Matahachi's social fatherhood must not be converted into verified biological paternity;
- Musashi's post-duel destination, revenge-party action, Hyōgo's eventual Nagoya arrival and Jōtarō's next movement remain unknown.
