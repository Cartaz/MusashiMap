# Book II — Event & Interaction Ledger

Status: **STAGING ONLY — production JSON not modified**

Source of narrative facts: canonical chapter files under `data/source/book2/`, cross-checked against `research/book2-character-geography-scrape.md` and `research/book2-character-states-staging.md`.

## Semantics

- `DIRECT`: physically shown by the source.
- `REPORTED`: information about an absent character; never creates physical co-presence.
- `CONTINUITY`: location/state carried forward when the narrative provides no departure.
- `MAP`: interaction or movement is sufficiently spatially useful to the map.
- `NO_MAP`: narrative interaction retained for completeness but not a spatial marker event.

Event IDs are staging IDs. Production IDs must be checked against existing `data/events.json` before migration.

## b2c1 — The Yoshioka School

- `b2c1-e01` — Seijūrō, Tōji and unnamed Yoshioka students leave Yoshioka School and move toward the Kamo River pleasure district. `MAP`, DIRECT.
- `b2c1-e02` — Seijūrō, Tōji, Ryōhei and the students drink/argue in the pleasure-district house. `NO_MAP`, DIRECT.
- `b2c1-e03` — Tōji and Ryōhei intervene in the student fight. `NO_MAP`, DIRECT.
- `b2c1-e04` — Seijūrō leaves the first establishment; Tōji follows while Ryōhei remains with the group. `MAP`, DIRECT.
- `b2c1-e05` — Seijūrō and Tōji arrive at Yomogi; Okō and Akemi are present. `MAP`, DIRECT.
- `b2c1-e06` — Tōji ↔ Okō private interaction/negotiation. `NO_MAP`, DIRECT.
- `b2c1-e07` — Seijūrō ↔ Akemi flirtation and drinking. `NO_MAP`, DIRECT.
- `b2c1-e08` — Okō ↔ Matahachi marital conflict in the Yomogi establishment. `NO_MAP`, DIRECT.
- `b2c1-e09` — Akemi ↔ Matahachi household interaction. `NO_MAP`, DIRECT.

## b2c2 — The Wheel of Fortune

- `b2c2-e01` — Musashi enters the Yoshioka School/dōjō after accepting the challenge. `MAP`, DIRECT.
- `b2c2-e02` — Musashi fights successive Yoshioka challengers; multiple disciples are defeated and casualties occur. `NO_MAP`, DIRECT.
- `b2c2-e03` — Seijūrō and Tōji return to the school and assess the situation. `NO_MAP`, DIRECT.
- `b2c2-e04` — Seijūrō, Tōji, Ryōhei and senior disciples deliberate on how to deal with Musashi. `NO_MAP`, DIRECT.
- `b2c2-e05` — Yoshioka group attempts a night ambush in Musashi's assigned room. `NO_MAP`, DIRECT.
- `b2c2-e06` — Musashi escapes through the floorboards and leaves the school. `MAP`, DIRECT.
- `b2c2-e07` — Yoshioka pursuers leave the back gate and chase a fleeing figure. `MAP`, DIRECT.
- `b2c2-e08` — Pursuers capture Matahachi near the road between Kūyadō and the burned Honnōji ruins, mistaking him for Musashi. `MAP`, DIRECT.
- `b2c2-e09` — Tōji recognizes Matahachi from Yomogi; the error is discovered. `NO_MAP`, DIRECT.
- `b2c2-e10` — Matahachi remains at Honnōji moat after the pursuers leave and identifies Musashi's new name. `MAP`, DIRECT.
- `b2c2-e11` — Denshichirō's whereabouts are reported as Ise; no physical Yoshioka-school state. `NO_MAP`, REPORTED.

## b2c3 — Encounter and Retreat

- `b2c3-e01` — Musashi observes potters on the road below Kiyomizudera. `MAP`, DIRECT.
- `b2c3-e02` — Musashi climbs to Kiyomizudera grounds/cliff overlooking Kyoto. `MAP`, DIRECT.
- `b2c3-e03` — Palanquin bearer identifies Musashi and carries the information back toward Chawan Hill. `NO_MAP`, DIRECT.
- `b2c3-e04` — Porters surround Musashi on the approach to Hongandō. `MAP`, DIRECT.
- `b2c3-e05` — Osugi and Uncle Gon arrive at Hongandō and confront Musashi. `MAP`, DIRECT.
- `b2c3-e06` — Musashi refuses the confrontation and walks through the crowd; Osugi/Gon do not fight him. `NO_MAP`, DIRECT.
- `b2c3-e07` — Crowd searches the Kiyomizudera/hills area until sunset while Musashi escapes. `MAP`, DIRECT-AREA.

## b2c4 — The Water Sprite

- `b2c4-e01` — Jōtarō meets the innkeeper at the cheap inn northwest of Kyoto. `MAP`, DIRECT.
- `b2c4-e02` — Musashi returns to the inn; Musashi and Jōtarō share the hearth room and discuss the letter. `NO_MAP`, DIRECT.
- `b2c4-e03` — Jōtarō writes/handles the innkeeper's letter for Musashi. `NO_MAP`, DIRECT.
- `b2c4-e04` — Jōtarō works at the sake shop; Matahachi is physically present later. `MAP`, DIRECT.
- `b2c4-e05` — Musashi leaves the inn toward Nara; Jōtarō follows. `MAP`, DIRECT.
- `b2c4-e06` — Musashi passes the Sanjō Avenue checkpoint. `MAP`, DIRECT.
- `b2c4-e07` — Musashi and Jōtarō reunite at Daigo/mountain road after the pursuit. `MAP`, DIRECT.
- `b2c4-e08` — Musashi and Jōtarō stop at Rokuamida; Musashi writes to Seijūrō. `MAP`, DIRECT.
- `b2c4-e09` — Jōtarō turns back toward Kyoto while Musashi continues toward Nara. `MAP`, DIRECT.
- `b2c4-e10` — Jōtarō receives/handles Matahachi's letter; no physical Musashi↔Matahachi meeting. `NO_MAP`, REPORTED/INDIRECT.

## b2c5 — A Spring Breeze

- `b2c5-e01` — Jōtarō meets Akemi at Takase River/Yomogi and asks about Matahachi. `MAP`, DIRECT.
- `b2c5-e02` — Jōtarō delivers Musashi's message at Yomogi. `NO_MAP`, DIRECT.
- `b2c5-e03` — Jōtarō travels on the Yamato highroad by ox cart. `MAP`, DIRECT.
- `b2c5-e04` — Jōtarō loses the bamboo tube near Mampukuji; Otsū helps identify it. `MAP`, DIRECT.
- `b2c5-e05` — Shōda Kizaemon returns the lost bamboo tube to Jōtarō. `NO_MAP`, DIRECT.
- `b2c5-e06` — Jōtarō, Otsū and Kizaemon travel together toward Uji. `MAP`, DIRECT.
- `b2c5-e07` — The trio rests at Uji Bridge teahouse; Kizaemon and proprietor discuss Nara. `NO_MAP`, DIRECT.
- `b2c5-e08` — Otsū chooses Koyagyū route with Kizaemon; Jōtarō continues toward Nara. `MAP`, DIRECT.
- `b2c5-e09` — Jōtarō separates from Otsū/Kizaemon at Kizu River ferry. `MAP`, DIRECT.

## b2c6 — The Hōzōin

- `b2c6-e01` — Musashi searches Abura Hill/Ōzōin vicinity for Hōzōin. `MAP`, DIRECT.
- `b2c6-e02` — Young monk directs Musashi through Ōzōin. `NO_MAP`, DIRECT.
- `b2c6-e03` — Musashi meets Nikkan in the Ōzōin garden; Nikkan assesses his spirit. `MAP`, DIRECT.
- `b2c6-e04` — Musashi registers as a visiting student at Hōzōin. `MAP`, DIRECT.
- `b2c6-e05` — Musashi observes Agon and other students in the dōjō. `NO_MAP`, DIRECT.
- `b2c6-e06` — Musashi fights and kills Agon. `MAP`, DIRECT.
- `b2c6-e07` — Nikkan speaks privately with Musashi and explains the lesson. `NO_MAP`, DIRECT.
- `b2c6-e08` — Musashi leaves Hōzōin and later returns to leave instructions for Jōtarō. `MAP`, DIRECT.
- `b2c6-e09` — Musashi takes lodging near Sarusawa Pond. `MAP`, DIRECT.
- `b2c6-e10` — Dampachi, Banryū and Yasubei approach/recruit Musashi for public matches; he refuses. `MAP`, DIRECT.
- `b2c6-e11` — Jōtarō arrives at the Sarusawa boardinghouse with the Yoshioka response. `MAP`, DIRECT.
- `b2c6-e12` — Inshun is absent from the initial Hōzōin encounter; no physical state is created here. `NO_MAP`, REPORTED/continuity constraint.

## b2c7 — Hannya Plain

- `b2c7-e01` — Musashi and Jōtarō travel Nara → Tōdaiji area → Hannya Plain. `MAP`, DIRECT.
- `b2c7-e02` — Musashi positions Jōtarō on an observation knoll. `MAP`, DIRECT.
- `b2c7-e03` — Musashi encounters and kills Yamazoe Dampachi. `MAP`, DIRECT.
- `b2c7-e04` — Hōzōin priests and rōnin group (about thirty men) are encamped around a bonfire; Yasukawa Yasubei and Otomo Banryū are among the named rōnin. `MAP`, DIRECT.
- `b2c7-e05` — Musashi fights and kills several rōnin. `MAP`, DIRECT.
- `b2c7-e06` — Inshun and Hōzōin priests charge and kill the remaining rōnin. `MAP`, DIRECT.
- `b2c7-e07` — Nikkan arrives with five government officials; officials inspect the bodies. `MAP`, DIRECT.
- `b2c7-e08` — Nikkan explains the purge and gives Musashi advice. `NO_MAP`, DIRECT.
- `b2c7-e09` — Jōtarō runs toward Musashi when the Hōzōin charge begins; physical co-presence is established only at this point. `MAP`, DIRECT.

## b2c8 — The Koyagyū Fief

- `b2c8-e01` — Musashi and Jōtarō arrive in Yagyū Valley and walk the valley/fields. `MAP`, DIRECT.
- `b2c8-e02` — Musashi and Jōtarō inspect the exterior of Koyagyū Castle/Main House. `MAP`, DIRECT.
- `b2c8-e03` — At the inn, Jōtarō meets Kocha; their teasing becomes a physical child-to-child interaction. `NO_MAP`, DIRECT.
- `b2c8-e04` — Musashi bathes with three Kyoto visitors; they discuss Shōda Kizaemon and the Yagyū refusal. `NO_MAP`, DIRECT; Denshichirō is inferred among the three only by Musashi's thought and is not directly identified by the scene.
- `b2c8-e05` — Kocha, Jōtarō and Musashi interact at the inn after the quarrel. `NO_MAP`, DIRECT.
- `b2c8-e06` — Musashi decides to seek a test against the Yagyū name. `NO_MAP`, DIRECT/internal decision.
- `b2c8-e07` — Shōda Kizaemon's earlier visit to the Kyoto guests is reported in the bath conversation; this is not a present interaction. `NO_MAP`, REPORTED.

## b2c9 — The Peony

- `b2c9-e01` — Sekishūsai and Otsū share the mountain house; discuss flower arrangement. `MAP`, DIRECT.
- `b2c9-e02` — Kizaemon returns from his errand and communicates with Otsū at the mountain-house entrance. `MAP`, DIRECT.
- `b2c9-e03` — Kizaemon reports his delivery to the Yoshioka party and receives Sekishūsai's instructions. `NO_MAP`, DIRECT.
- `b2c9-e04` — Sekishūsai decides to send Otsū to Wataya with the letter and peony instead of receiving Denshichirō. `MAP`, DIRECT.
- `b2c9-e05` — Otsū rides from the castle/stables to Wataya. `MAP`, DIRECT.
- `b2c9-e06` — Otsū meets Kocha at Wataya and asks for Denshichirō. `MAP`, DIRECT.
- `b2c9-e07` — Otsū delivers Sekishūsai's letter/peony to Denshichirō; interaction is a direct errand/negotiation. `MAP`, DIRECT.
- `b2c9-e08` — Denshichirō's group remains at Wataya; Sekishūsai's refusal is communicated without a face-to-face Sekishūsai↔Denshichirō meeting. `NO_MAP`, DIRECT/REPORTED.
- `b2c9-e09` — Otsū returns toward Koyagyū after the errand. `MAP`, DIRECT.

## b2c10 — Jōtarō's Revenge

- `b2c10-e01` — Jōtarō's revenge sequence begins from the Wataya/Koyagyū setting. `MAP`, DIRECT.
- `b2c10-e02` — Musashi moves between Wataya, Koyagyū Castle and Shin'indō/castle grounds while following the Yagyū-related thread. `MAP`, DIRECT.
- `b2c10-e03` — Jōtarō engages the relevant Yoshioka/Yagyū participants in the revenge sequence; exact co-presence is scene-scoped and must not be generalized to the whole chapter. `MAP`, DIRECT.
- `b2c10-e04` — Otsū is not made physically co-present with Musashi from music, knowledge, or reported communication. `NO_MAP`, constraint.
- `b2c10-e05` — Character movements between Wataya and Koyagyū sub-locations are recorded as transitions rather than duplicated static presence. `MAP`, DIRECT.

## b2c11 — The Nightingales

- `b2c11-e01` — Musashi reaches the Koyagyū castle/moat area. `MAP`, DIRECT.
- `b2c11-e02` — Musashi proceeds from the castle area to Sekishūsai's mountain house. `MAP`, DIRECT.
- `b2c11-e03` — Musashi reaches the mountain house but does not have a face-to-face meeting with Sekishūsai. `MAP`, DIRECT.
- `b2c11-e04` — Musashi leaves the mountain house and takes the Tsukigase–Iga back road. `MAP`, DIRECT.
- `b2c11-e05` — Jōtarō remains physically present only where the source explicitly keeps him with Musashi; no automatic whole-chapter co-location. `MAP`, continuity constrained by source.

## Cross-ledger rules

1. Shared chapter membership never creates an interaction.
2. Shared location never creates an interaction unless the text establishes contact.
3. A reported location never creates a marker.
4. Letters/messages are interaction records but not physical co-presence.
5. Music heard across distance is not physical presence.
6. Death terminates the active physical state for later chapters unless the source explicitly depicts remains and the project models remains separately.
7. Child locations inherit geographic context from their parent but do not receive invented independent coordinates.
8. Unresolved locations such as Wataya remain narrative locations without fabricated real-world coordinates.
9. Historical/expository names such as Yoshioka Kempō, Toda Seigen, Kōizumi and other past masters are not converted into active character markers merely because they are discussed.

## Pre-production checks

- All named participants must resolve against the reconciled character registry before production migration.
- All location references must resolve against the Book I + Book II location registry or be explicitly marked narrative/unmapped.
- `REPORTED` records must never populate physical character states.
- `MAP` records require a defensible narrative location.
- No event is considered complete merely because its participants share a chapter.
- Production JSON remains untouched by this ledger.
