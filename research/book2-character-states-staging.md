# Book II — Chapter-Scoped Character States (Staging)

Status: **staging only — production JSON not modified**

Source: canonical Book II corpus under `data/source/book2/`, reconciled against `data/characters.json` and `research/book2-character-geography-scrape.md`.

## State model

Each state is keyed by a qualified chapter ID (`b2c1`–`b2c11`) and contains:

- `narrative_presence`: `active` only when physically present in the scene;
- `narrative_role`: role within the Book I–II corpus;
- `map_relevance`: `mapped` only when the character's physical movement/interactions are useful to the map;
- `location`: canonical location ID or staging location reference;
- `interaction_ids`: references to staged interactions/events where available.

Reported whereabouts, letters, music heard from elsewhere, and historical/expository mentions do not create physical presence.

## Chapter state ledger

### b2c1 — The Yoshioka School

Physical characters staged:

- Musashi — outside/approaching Yoshioka School sequence; follow the scrape's scene-level placement rather than treating all chapter references as co-location.
- Matahachi — physically present in the opening Yoshioka-related sequence.
- Yoshioka Seijūrō — Yoshioka School / associated Kyoto scene.
- Gion Tōji — Yoshioka School / associated Kyoto scene.
- Ueda Ryōhei — Yoshioka School group.
- Akemi — physical presence in the chapter's later scene as recorded by the scrape.

Context only: historical founders/masters and absent Yoshioka figures are not mapped.

### b2c2 — The Wheel of Fortune

- Musashi — Yoshioka School sequence.
- Matahachi — Yoshioka-related sequence.
- Yoshioka Seijūrō — physical presence in the Yoshioka scene.
- Gion Tōji — physical presence in the Yoshioka scene.
- Ueda Ryōhei — physical presence with the Yoshioka group.

Critical state: Denshichirō is **reported absent in Ise**, therefore no physical `active` state at the school.

### b2c3 — Encounter and Retreat

- Musashi — Kiyomizudera / Hongandō sequence.
- Osugi — physically present in the chapter's identified scene.
- Gonroku — physically present with Osugi in the relevant sequence.

Other Yoshioka figures remain active only where the scrape places them physically.

### b2c4 — The Water Sprite

- Musashi — inn / Daigo / Rokuamida sequence.
- Jōtarō — physical presence beginning in this chapter.

Reported characters remain non-present unless the source explicitly relocates them into the scene.

### b2c5 — A Spring Breeze

- Musashi — Rokuamida / travel sequence.
- Otsū — physical presence begins here.
- Shōda Kizaemon — travels with Otsū and later returns Jōtarō's lost bamboo tube.

The Otsū–Kizaemon–Jōtarō interactions are stored as separate relations; possession of an object does not imply co-location outside the scene where the exchange occurs.

### b2c6 — The Hōzōin

- Musashi — Hōzōin grounds / adjacent temple / Sarusawa Pond sequence.
- Nikkan — physically present in the adjoining temple sequence.
- Agon — physically present in the Hōzōin encounter; dies during the chapter.
- Yamazoe Dampachi — physically present in the rōnin/recruitment sequence.
- Otomo Banryū — physically present in the rōnin/recruitment sequence.
- Yasukawa Yasubei — physically present in the rōnin/recruitment sequence.

Critical state: Inshun is **not backfilled into Musashi's initial Hōzōin encounter**. His later return is represented separately.

### b2c7 — Hannya Plain

- Musashi — Nara / Hannya Plain combat sequence.
- Jōtarō — physically present in the wider Hannya Plain sequence, initially positioned on an observation knoll rather than at Musashi's immediate combat point.
- Inshun — physically present when the source places him in the later Hōzōin-related sequence.
- Yamazoe Dampachi — physical presence until his death in the chapter.
- Otomo Banryū — physical presence until his death in the chapter.
- Yasukawa Yasubei — physical presence until his death in the chapter.

Deaths terminate physical presence for subsequent chapter states unless the novel later depicts a corpse/remains and the project explicitly models that separately.

### b2c8 — The Koyagyū Fief

- Musashi — Yagyū Valley / Koyagyū Castle sequence.
- Yoshioka Denshichirō — first physical presence in the Book II staging.
- Jōtarō — continuing physical presence where the scrape places him.
- Yagyū-related named figures — staged according to the geographic scrape; parent/child location hierarchy is preserved.

Denshichirō's b2c2 absence is therefore not contradictory with his b2c8 appearance.

### b2c9 — The Peony

- Musashi — Wataya sequence.
- Jōtarō — physical presence where the scrape places him.
- Other Yagyū/Wataya participants — only where explicitly present in the chapter corpus.

Wataya remains an unresolved real-world location; character state may reference the narrative location without inventing geographic coordinates.

### b2c10 — Jōtarō's Revenge

- Musashi — Wataya → Koyagyū Castle → Shin'indō / castle grounds sequence.
- Jōtarō — physically present in the revenge sequence.
- Otsū — do **not** infer physical co-presence from music, knowledge, or reported communication.
- Yoshioka/Yagyū participants — active only in the scenes where physically located.

### b2c11 — The Nightingales

- Musashi — castle/moat → Sekishūsai's mountain house → Tsukigase–Iga back-road sequence.
- Jōtarō — continuing presence only where physically staged.
- Sekishūsai — location reached by Musashi, but no face-to-face Musashi/Sekishūsai interaction is inferred.
- Other figures — only when physically present in the source scene.

The mountain house remains a child location under the Yagyū complex; no independent coordinate is invented.

## Cross-chapter continuity checks

1. Musashi's location changes are sequential and do not require teleportation between chapters.
2. Jōtarō begins Book II physically from b2c4; later references before that are not converted into presence.
3. Otsū begins physical Book II presence in b2c5 according to the scrape.
4. Denshichirō is absent at Ise in b2c2 and first physically mapped in b2c8.
5. Inshun's b2c6 absence at the initial encounter is preserved; his later presence is separate.
6. The three named rōnin recruited around Sarusawa terminate their active states when the narrative kills them.
7. Otsū is never co-located with Musashi merely because a song/music signal or reported knowledge crosses distance.
8. Sekishūsai is never marked as physically interacting with Musashi merely because Musashi reaches his residence.

## Interaction staging requirements

Interactions are event-scoped, not inferred from shared chapter membership. The production event migration must use canonical character IDs and qualified chapter IDs. A shared location is insufficient evidence of an interaction.

## Validation gates before production

- Every character reference resolves to exactly one canonical ID.
- No state with `narrative_presence=active` lacks a narrative location.
- No `mentioned`/`reported` reference creates a map marker.
- No character is active after a narrative death unless a later scene explicitly requires a non-living representation.
- Chapter IDs are exclusively `b2c1`–`b2c11` for Book II.
- Existing Book I IDs are reused.
- No production JSON is changed by this staging document.
