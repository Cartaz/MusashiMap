# Book VI — *Sun and Moon*: scrape and validation audit

Date: 2026-08-20  
Scope: `data/source/book6/*.txt`, global sections 80–96  
Output: `research/book6-production-manifest.json` (research staging; production data unchanged)

## Outcome

All 17 local chapters were read in full. The manifest covers 4,957 source lines and preserves a contiguous section sequence from 80 through 96. Narrative extraction was frozen before web research. The web was then used only to test geographical and historical context against official or institutional sources; it was not used to add plot, character, relationship or movement claims.

The resulting dataset contains normalized characters and aliases, anonymous narrative groups, physical-presence versus mention-only lists, locations, evidence-bearing events, end-of-chapter states, cross-chapter relationships, and an explicit uncertainty register. Every map coordinate is `null`.

## Chapter coverage and continuity

| Global | Chapter | Physical scene anchor | Principal event | End-state anchor |
|---:|---|---|---|---|
| 80 | A Chat with the Men | Tadatoshi and Hosokawa retainers | Musashi and Kojirō are separately considered for summons | Kakubei authorized to bring Kojirō |
| 81 | Buzzing Insects | Kojirō, Osugi, Kakubei, Yogorō | Interview refused; Yogorō ambushes Kojirō | Duel unresolved at the chapter boundary |
| 82 | The Eagle | Kojirō, Tadatoshi, Gorōji | Yogorō's corpse found; interview bout cripples Gorōji | Gorōji alive at home; Kojirō visits |
| 83 | Green Persimmons | Kojirō, Matahachi, Akemi | Kojirō kills Matahachi's two attackers and spies on his home | Matahachi and Akemi cohabit |
| 84 | Eyes | Musashi, Iori, Shinzō | Cabin built; Yogorō's death reported; Musashi accepts invitation | Musashi rides toward Ushigome; Iori stays |
| 85 | Four Sages with a Single Light | Musashi, Takuan, Ujikatsu, Munenori | Ambush test evaded; marriage/appointment plan proposed | Patrons treat the recommendation as decided |
| 86 | The Locust Tree | Matahachi, Daizō, Akemi | Matahachi recruited to assassinate Hidetada | Plot active; Akemi works for Daizō |
| 87 | Tadaaki's Madness | Osugi, Kojirō, Tadaaki, Ono students | Osugi abducted; Kojirō confronts Tadaaki | Tadaaki retires and disappears; Toranosuke expelled |
| 88 | The Poignancy of Things | Musashi, Iori, farmers | Typhoon destroys cabin; journey resumes past Tanashi | Pair continues through Kotesashigahara |
| 89 | Two Drumsticks | Musashi, Iori, shrine community | Daizō search fails; drummer inspires two-sword insight | At Mitsumine, planning inner-shrine climb |
| 90 | The Demon's Attendant | Musashi, Iori, Baiken group, Gonnosuke | Ambush defeated; Musashi wrongly arrested | Musashi bound; Baiken dead; Oko escaped |
| 91 | Brother Disciples | Gonnosuke, Iori, Oko, Daizō, Jōtarō, Takuan, Tanzaemon | Oko killed; stolen treasure observed; father and son narrowly miss | Jōtarō told to seek father; Iori with Takuan |
| 92 | The Pomegranate | Takuan, Iori, Shinzō, Osugi | Osugi slanders Musashi; Iori attacks her | Iori ashamed at Hōjō residence |
| 93 | Land of Dreams | Hidetada, Matahachi, Takuan, Akemi, council | Assassination abandoned; Daizō unmasked; sentences reduced | Matahachi and Akemi alive but banished; Musashi free |
| 94 | The Challenge | Iori, Kojirō, Osugi, Musashi, Gonnosuke | Challenge written and delivered | Iori rides to return horse; Musashi has challenge |
| 95 | The Gateway to Glory | Musashi, Sakai, Hōjō circle | Appointment canceled; Musashi paints sunrise | Musashi leaves pavilion relieved |
| 96 | The Sound of Heaven | Musashi, Iori, Gonnosuke, Takuan, Hōjō circle | Musashi departs; pouch links Iori's sister to Otsū | Cabin empty; Iori has a new family clue |

## Identity and alias reconciliation

- `daizo` and Mizoguchi Shinano are one entity only because chapter 93 explicitly supplies the identity reveal. Earlier chapters retain “Daizō” as the visible alias.
- `ono_tadaaki` includes Mikogami Tenzen as an alias. It is not split into two sword masters.
- `baiken` includes Tsujikaze Kōhei, continuing the explicit identity established earlier in the novel.
- `hamada_elder_brother` and `hamada_toranosuke` remain separate. Chapter 87 states that one of the two men killed in chapter 83 was Toranosuke's elder brother; it does not make the slain man Toranosuke himself.
- Jōtarō's childhood name `Jōta` is an alias, not another character. His relationships to Daizō and Aoki Tanzaemon are distinct: Daizō is presented as his biological father; Tanzaemon is the separated father figure he is instructed to seek. The manifest preserves what the Book VI text says without resolving any broader genealogical tension beyond it.
- The “one sound of heaven” clue produces a `strong_inference` that Iori's sister is Otsū. It is not upgraded to explicit fact because Book VI provides no reunion or direct declaration.
- The Hangawara guide, unnamed second samurai killed with Hamada's brother, individual farmers, guards and workers are represented through groups or event prose where stable identities are unavailable. They are not assigned invented names.

## Presence, mention and spoiler boundary

Presence is strictly on-page. A person discussed, remembered, targeted, reported, or affected off page remains mention-only. Important cases include:

- Musashi in sections 80–83 and 86–87, where other characters discuss or malign him but he does not enter the scene;
- Otsū, who never physically appears in Book VI although she motivates the marriage discussion and the final family clue;
- Yogorō in section 82, where his corpse and death are reported after his physical confrontation in section 81;
- Hidetada in the assassination-planning sections before he appears in the castle chapter;
- Gion Tōji's individual death: the ambush chapter gives aggregate victims, while the next chapter identifies Oko's husband as killed by Gonnosuke. The state is therefore `strong_inference`, not explicit blow-by-blow fact.

This distinction is intended to prevent filters from revealing an identity merely because a future character is named in exposition.

## Movement audit

The manifest separates departure, route, arrival and intention:

- Tadatoshi's proposed summonses are intentions, not demonstrated arrivals.
- Kojirō's confrontation at Isarago is not assigned an outcome until the next chapter's corpse evidence.
- Musashi and Shinzō depart for Ushigome in section 84; arrival is first represented in section 85.
- Matahachi's castle assignment in section 86 is an intended destination; his physical castle presence begins in section 93.
- The Tanashi–Iruma–Kotesashigahara material is retained as a route corridor, never a fabricated polyline.
- Tanzaemon's and Jōtarō's Shōjuan movements are intentions at the final evidence points; arrival is not asserted.
- Musashi's last direction is deliberately `null`: “mountains” is not a mappable destination.

## Violence and legal-state reconciliation

- Yogorō is not marked dead at the end of section 81; the death becomes explicit in section 82.
- Gorōji is seriously injured but alive. His state is not collapsed into death or recovery.
- Section 90's casualty arithmetic is preserved as narrated: Musashi kills five, Gonnosuke seven, and one lancer-priest survives. Individual identities are not forced onto all aggregate bodies.
- Oko escapes section 90 and dies only in section 91 after attacking Gonnosuke.
- Matahachi and Akemi are lashed and banished, not executed. Matahachi's final running departure is explicit; Akemi's more precise post-punishment movement is not.
- Musashi's release in section 93 happens off page but is explicitly ordered/reported, so the location remains unknown.

## Official geography and historicity checks

| Setting/entity | Official evidence | Assessment | Mapping consequence |
|---|---|---|---|
| Tsukinomisaki / Isarago | [Minato City landscape PDF](https://www.city.minato.tokyo.jp/documents/10523/minatop_27.pdf) and [Takanawa district history](https://www.city.minato.tokyo.jp/kouhou/kuse/gaiyo/chimerekishi/index-takanawa.html) | The historical scenic/toponym context is supported | No house, florist, temple or cemetery point imported |
| Akagi / Ushigome | [Shinjuku City cultural guide](https://bunkakanko-annai.city.shinjuku.lg.jp/shosai3/?id=B002) | Akagi Shrine is documented at its present site from 1555 after an earlier Ushigome move | Supports period locality only; Hōjō residence remains unresolved |
| Mitsumine | [Chichibu City tourism](https://navi.city.chichibu.lg.jp/travel/ja/culture/2018/01/722/) and [cultural-property record](https://www.city.chichibu.lg.jp/4242.html) | Mountain-shrine and historical context supported | No inferred Kannon'in, inner route, teahouse or ambush coordinate |
| Kotesashigahara | [Tokorozawa City cultural-property page](https://www.city.tokorozawa.saitama.jp/iitokoro/enjoy/bunkakyoyo/bunkazai/kenshiteibunkazai/bunzai_20100420150030643.html) | Officially documented 1333 battlefield | Supports the bone-field context generally, not the novel's exact location |
| Tanashi | [Nishitokyo City history](https://www.city.nishitokyo.lg.jp/siseizyoho/syokai/ayumi/oitati_tanasi.html) | Medieval name and early-Edo administrative context supported | Area-level validation only |
| Nobidome | [Niiza City history](https://www.city.niiza.lg.jp/site/bunkazai/nobitomeyousuiwoaruku.html) | Documented village/canal development is tied to 1655 | Possible anachronism for the novel's earlier setting; mapping blocked |
| Narai | [Shiojiri City historic-town page](https://www.city.shiojiri.lg.jp/soshiki/36/3735.html) | Historic post-town context supported; municipal documentation dates the role from 1602 | Validates Narai context, not Daizō or his pawnshop |
| Edo Castle | [Imperial Household Agency](https://www.kunaicho.go.jp/learn/institution/shisetsu/kokyo/index.html) | Confirms the former Edo Castle complex context | No modern point substituted for Fukiage, prison or woodshed scenes |
| Wadakura Gate | [Chiyoda City official plan](https://www.city.chiyoda.lg.jp/documents/30576/soan-honpen-2-1.pdf) | Gate is listed among castle remains | Reception Pavilion and Orchid Room remain narrative/unresolved |
| Yagyū Munenori | [National Diet Library authority](https://id.ndl.go.jp/auth/ndlna/00272515) | Institutional authority supports identity and dates 1571–1646 | Historicity only; does not validate the novel's meeting or dialogue |

## Unresolved or blocked items

1. Nobidome is the strongest historical warning: official evidence associates the documented development with 1655, later than the Book VI narrative frame. The translated place name is retained for textual fidelity but marked `blocked_possible_1655_anachronism`.
2. Tsukinomisaki's rented quarters, Isarago cemetery, Gorōji's house, Donjiki, the Nishikubo tenement, Daizō's pawnshop, Osugi's Hamachō house, Musashi's cabin, Oinu Teahouse, Kosaruzawa bridge and Head-burying Mound are private or narrative sites and cannot be responsibly geocoded.
3. Historical routes and altered urban/castle landscapes require period-specific reconstruction. No modern road, bridge, shoreline or gate point is silently substituted.
4. Shōjuan at Azabu and the Ono dojo at Saikachi Slope need stronger primary/municipal identification before production mapping.
5. Otsū as Iori's sister and Gion Tōji as a specific member of Gonnosuke's seven victims remain strong cross-chapter inferences.

## Referential and completeness checks

The machine-readable audit in the manifest records:

- 17 source files and 4,957 lines;
- contiguous global sections 80–96 and unique chapter/event IDs;
- disjoint physical-presence and mention-only sets;
- valid actor, group and location references;
- `source_ref`, `certainty` and `movement_status` on every event;
- `source_ref` and `certainty` on every end state;
- `null` coordinates for every location.

No production JSON, JavaScript, workflow, tool, or shared documentation file was modified by this task.

## Migration guardrails

- Import only after production's authoritative reader-progress maximum intentionally reaches section 96.
- Preserve physical versus mentioned occurrence rather than deriving discovery from any name mention.
- Keep Daizō's reveal, the Iori–Otsū clue and Tōji's death certainty at their recorded chapter/certainty boundary.
- Do not convert modern official-site coordinates into novel scene coordinates.
- Retain unresolved locations and possible anachronisms as blockers rather than filling them by approximation.
