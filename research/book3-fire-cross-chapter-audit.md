# Book III — *Fire*: cross-chapter staging audit

Date: 2026-08-20  
Scope: `data/source/book3/*.txt`, global sections 20–32  
Output status: staging only; no production dataset was modified

## Outcome

All 13 local Book III source files were read and represented in `research/book3-fire-staging-manifest.json`. The manifest covers 6,727 source lines with 57 evidence-bearing events, 41 end-of-chapter states, 43 normalized characters, 6 groups, 34 locations, 15 relationships and 31 historical-context entities. Narrative facts come only from the local text. Web research was performed only after the narrative entity freeze and is limited to geography or historicity.

Machine checks pass for JSON parsing, contiguous global sections 20–32, unique chapter IDs, actor/group/location references, required event and state evidence fields, character presence/mention separation, and the rule that all coordinates remain `null`.

## Chapter coverage

| Global | Chapter | Principal physical presence | Key movement or event | End-state anchor |
|---:|---|---|---|---|
| 20 | Sasaki Kojirō | Matahachi, Tanzaemon, unknown certificate bearer | Castle-site death; bundle and certificate pass to Matahachi | Matahachi asleep in deserted Fushimi house |
| 21 | Reunion in Osaka | Matahachi, Tanzaemon, Yasoma, Osugi, Gonroku | Fushimi → Osaka; false Kojirō identity; family reunion | Trio seeking an Osaka inn |
| 22 | The Handsome Young Man | real Kojirō, Gion Tōji, monkey | Awa/Shikoku → Osaka by ship; Tōji's topknot cut | Kojirō still aboard approaching Osaka |
| 23 | The Seashell of Forgetfulness | Kojirō, Tōji, Oko, Akemi, Seijūrō | Kizugawa arrival; party goes to Sumiyoshi | Akemi has fled Seijūrō's room after assault |
| 24 | A Hero's Passing | Osugi, Matahachi, Gonroku, Akemi, Seijūrō, Ryōhei | Gonroku rescues Akemi and drowns; challenge reaches Seijūrō | Akemi ill at inn; Seijūrō leaves toward Kyoto |
| 25 | The Drying Pole | Kojirō, Seijūrō, Ryōhei, Yoshioka disciples | Osaka/Temma → Kema; fatal sword fight | Party travels toward Kyoto |
| 26 | Eagle Mountain | Musashi, Baiken household | Kuwana/Yokkaichi → smithy → Ise → Eagle Mountain | Musashi at summit, foot drained |
| 27 | The Mayfly in Winter | Otsū, Jōtarō, Arakida Ujitomi | Otsū dismissed and commissioned to deliver scrolls | Otsū/Jōtarō depart Ise for Kyoto |
| 28 | The Pinwheel | Musashi, Baiken/Kōhei, household and gang | Ise coast → Ōminato → Tsu → smithy; ambush evaded | Musashi departs; Kōhei remains alive |
| 29 | The Flying Horse | Otsū, Jōtarō, Kōhei, Sannojō | Abduction, runaway horse and rescue along Tōkaidō corridor | Otsū/Jōtarō reach Kyoto, heading to Karasumaru |
| 30 | The Butterfly in Winter | Akemi, Yasoma, Tanzaemon, Kojirō, Seijūrō | Sumiyoshi → Kyoto; Akemi attacked then rescued twice | Kojirō carries Akemi from ruined temple |
| 31 | The Announcement | Seijūrō, Ryōhei, Musashi, Matsuo relatives, Osugi | Duel fixed at Rendaiji; Musashi reaches Gojō and restrains Osugi | Osugi tied in boat; Musashi at riverbank |
| 32 | Great Bridge at Gojō Avenue | Musashi, Akemi, Kojirō, Otsū, Jōtarō, Osugi | First Musashi–Kojirō encounter; bridge pursuit and manipulation | Musashi gone; Otsū with Osugi; Jōtarō for Karasumaru |

## Cross-chapter identity and spoiler audit

The most important identity decision is deliberately conservative:

- The dead man in chapter 20 is `unknown_certificate_bearer`, not `kojiro`. He carries a certificate addressed to Sasaki Kojirō, but possession does not establish identity. The living Kojirō first appears physically in chapter 22.
- Matahachi's “Sasaki Kojirō” is recorded as an impersonated alias, not a canonical identity merge.
- “Shishido Baiken” is an alias of `kohei` because chapter 28 explicitly reveals that Baiken is Tsujikaze Kōhei.
- “Uncle Gon” remains `gonroku`, whose surname was explicitly established as Fuchikawa in Book I; the earlier staging label “Hon'iden Gonroku” was corrected rather than creating a duplicate person.
- The Book III mention “Yagyū Muneyoshi” reuses `sekishusai`, already established in Books I–II; the temporary `yagyu_muneyoshi` ID was removed to prevent a duplicate identity.
- The person who claims Musashi's belongings in chapter 27 remains unidentified. A limping man seen at a distance is not converted into Musashi's physical presence.
- `Arakida Ujitomi`, `Arakida Ujitsune`, and the historical poet Arakida Moritake are not merged. Similar family name and institutional context are insufficient.

These choices prevent early name leakage and false entity consolidation when the staging data is eventually migrated to production.

## Physical presence versus mention

Presence is on-page only. A named person in dialogue, recollection, historical exposition, a plan, or a report remains `mentioned_only`. This matters especially for:

- Musashi in chapters 20–25, 27, 29 and 30;
- Kojirō in chapters 20–21 before his actual chapter-22 entrance;
- Karasumaru Mitsuhiro, who is the intended recipient of the scrolls but never appears physically in Book III;
- Baiken/Kōhei in chapter 26, when the household reports him away;
- Denshichirō, Takuan and the sword-lineage figures, all absent from the physical scenes.

Group presence is kept separately for anonymous but narratively consequential collectives: Fushimi workers, ship passengers, Yoshioka disciples, Kōhei's henchmen and shrine maidens.

## Movement semantics audit

The manifest does not convert an intention into an arrival:

- Seijūrō's departure “toward Kyoto” in chapter 24 is `direction_only`.
- Kojirō and company heading for the Yoshioka school in chapter 25 is `intended_destination`; the chapter does not show their arrival.
- Otsū and Jōtarō reach Kyoto in chapter 29, but the final approach to the Karasumaru residence remains an intended destination.
- Akemi and Kojirō are sent toward the Zuzuya Inn in chapter 32; no arrival is shown.
- The Rendaiji field is a scheduled duel destination, not a visited location in Book III.

Raw route labels such as “Awa/Shikoku” or “Ise coast” are retained only as descriptive origin text where the source does not justify a more exact registry entity. No inferred polyline or distance was created.

## Relationship continuity

The 15 normalized relationships capture only ties relevant to this book. The strongest cross-chapter arcs are:

- Osugi reunites with Matahachi, loses Gonroku, attacks Musashi, and ends by deceptively recruiting Otsū.
- Akemi suffers Seijūrō's assault, attempts suicide, escapes Sumiyoshi, is attacked by Yasoma, and is finally carried away by Kojirō.
- Kojirō moves from anonymous “handsome young man” to recognized Ganryū, clashes with Yoshioka disciples, associates with Seijūrō and meets Musashi.
- Otsū and Jōtarō repeatedly miss Musashi, survive Kōhei's attack, reach Kyoto, then separate in intention at the end of the book.
- Musashi's physical arc is independent of the Osaka/Kyoto ensemble until chapters 31–32: Eagle Mountain → Ōminato/Tsu → Baiken smithy → Kyoto/Gojō.

The Seijūrō–Akemi relationship is labelled as sexual violence and aftermath, not romance. Akemi's later declarations to Musashi are recorded as her statements, not proof of reciprocal commitment.

## Institutional web validation

External research validates setting and historical identity only; it is not a second narrative source.

| Entity | Institutional evidence | Result | Remaining uncertainty |
|---|---|---|---|
| Fushimi Castle works | [Kyoto City, Fushimi history](https://www.city.kyoto.lg.jp/fushimi/page/0000013318.html) describes the castle, port, transport nexus and large construction mobilization | General setting supported | Exact fictional worksite not located |
| Sumiyoshi Taisha | [Official shrine chronology](https://www.sumiyoshitaisha.net/about/history.html) documents the institution and itself notes debate around the traditional foundation date | Shrine historicity supported | Shrine traditions are not converted into established event history |
| Historical Sumiyoshi coast | [Official shrine FAQ](https://www.sumiyoshitaisha.net/faq/) states Osaka Bay once extended farther inland | Coastal context supported | No historical shoreline coordinate assigned |
| Naiku / Isuzu River | [Ise Jingu official overview](https://www.isejingu.or.jp/en/about/index.html) identifies Naiku and Uji Bridge over the Isuzugawa | General layout supported | “House of Virgins” correspondence unresolved |
| Eagle Mountain | [Ise City geography](https://www.city.ise.mie.jp/iju/1011987.html) lists 鷲嶺; [Mie cultural assets](https://www.bunka.pref.mie.lg.jp/Miebunka/detail?cls=mica_col04&pkey=0000004929) gives contextual geography | Strong match to Shūrei / 鷲嶺 | No coordinate imported; narrative climb path unknown |
| Ōminato | [Ise City cultural-property entry](https://www.city.ise.mie.jp/cul_spo_edu/culture/bunkazai_shiseki/bunkazai/komonjo/1009622.html) documents late-medieval shipping and shipbuilding records | Maritime role supported | Exact landing and boat route unknown |
| Yokkaichi | [Yokkaichi City chronology](https://www.city.yokkaichi.lg.jp/www/contents/1001000000141/index.html) records its 1601 Tōkaidō station status | Route context supported | Novel's local path not reconstructed |
| Temma / Kema water route | [Osaka City on Hakkenyahama](https://www.city.osaka.lg.jp/chuo/page/0000069440.html) and [Osaka City on Kema](https://www.city.osaka.lg.jp/kita/page/0000000946.html) document Yodo shipping and upstream hauling | Water-transport corridor supported | Exact narrative landings unresolved |
| Great Gojō Bridge | [Kyoto official historical chronology](https://www2.city.kyoto.lg.jp/somu/rekishi/fm/nenpyou/toshi_nenpyo.html) records construction in 1589 | Period bridge supported | Modern bridge location must not be silently substituted for the scene |
| Karasumaru Mitsuhiro | [National Diet Library catalogue](https://ndlsearch.ndl.go.jp/books/R100000002-I000001574702) and [Cultural Heritage Online](https://bunka.nii.ac.jp/heritages/detail/543315) support his dates and court/cultural role | Historical person supported | Horikawa residence point unresolved |
| Sasaki Kojirō | [NDL authority](https://id.ndl.go.jp/auth/ndlna/00623269) supports a swordsman authority record and 1612 death year; [NDL reference review](https://crd.ndl.go.jp/reference/entry/index.php?id=1000071814&page=ref_view) stresses uncertainty in later duel traditions | Historical name supported with caution | Novel biography, lineage, sword and voyage are not historically validated |
| Tsukahara Bokuden | [Kashima City cultural-property page](https://www.city.kashima.ibaraki.jp/site/bunkazai/50134.html) supports his historical and sword-school context | Context supported | Novel's lineage exposition remains narrative material |

## Unresolved blockers

These are explicit blockers to a safe production migration, not missing work to be filled by guesswork:

1. `arakida_ujitomi`: no sufficiently specific institutional authority was found for the exact spelling/person used by the novel. Do not merge it with Ujitsune or Moritake.
2. `koji_hill`: no authoritative route match was found for the translated/romanized toponym. Keep unmapped.
3. `rendaiji_field`: Kyoto archaeology confirms a historical Kita-yama Rendaiji precinct, but not the exact duel field intended by the novel.
4. `house_of_virgins` and `arakida_house`: narrative sites need specialist historical confirmation before mapping.
5. `kizugawa_harbor`, `sumiyoshi_shore`, `temma_landing`, `kema_landing` and the Osaka moats require period-specific shoreline/waterway reconstruction; modern points would be misleading.
6. `zuzuya_inn`, the deserted Fushimi house, Baiken's smithy, the Toribe ruined temple and the Sannen Hill inn are currently unmappable narrative/private sites.
7. Chapter 25 states multiple deaths among seven Yoshioka pursuers and later three survivors. The manifest deliberately says “multiple” rather than forcing a numeric death count where the prose segmentation is not fully unambiguous.

## Migration guardrails

- Keep this file and the JSON manifest in staging until global section maximum 32 is intentionally enabled by the data migration.
- Preserve `unknown_certificate_bearer` and Matahachi's false alias as separate identity records from `kojiro`.
- Do not expose a character in filters before the first chapter in `physical_presence` unless the product explicitly supports mention-only discovery.
- Convert end states into snapshots only after checking continuity against the end of Book II and the start of Book IV.
- Do not generate coordinates, route lines, or distances from prose directions alone.
- Retain `source_ref`, `certainty` and `movement_status` during any schema transformation; they are the audit trail.

## Verification commands

```sh
jq empty research/book3-fire-staging-manifest.json
jq '{chapters:(.chapters|length),events:([.chapters[].events[]]|length),end_states:([.chapters[].end_states[]]|length)}' research/book3-fire-staging-manifest.json
git diff --check -- research/book3-fire-staging-manifest.json research/book3-fire-cross-chapter-audit.md
```
