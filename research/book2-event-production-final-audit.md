# Book II — Event Production Final Audit

Date: 2026-08-18
Status: STAGING — production `data/events.json` intentionally unchanged by this audit.

## Purpose

This document closes the last semantic blocker identified in the Book II event migration: the previous `b2c10` ledger contained an aggregated event (`b2c10-e03`) whose participants were not explicitly resolved. The canonical chapter source was reread for the complete scene and the event was decomposed into atomic, source-backed records.

## Source verification

Canonical source: `data/source/book2/chapter10-jotaros-revenge.txt`.

The chapter explicitly establishes:

- Jōtarō returns to the inn with Shōda Kizaemon's letter and meets Kocha.
- Kocha treats Jōtarō's wounds at the stream and later in the fodder shed; Kocha's father interrupts them.
- Musashi and Jōtarō depart the inn.
- Musashi reaches the main gate of Koyagyū Castle and is admitted by a guard.
- Jōtarō is left in the attendants' waiting room while Musashi is taken to the Shin'indō.
- Shōda Kizaemon enters the Shin'indō with Kimura Sukekurō, Debuchi Magobei and Murata Yozō.
- Musashi and the four senior Yagyū men converse and test one another intellectually.
- Debuchi, Murata and Kimura leave the Shin'indō after Tarō's unusual barking; Kizaemon remains with Musashi.
- Kizaemon and Musashi go to the disturbance roughly three hundred yards from the dōjō, where Jōtarō is beside the dead dog Tarō.
- Musashi intervenes when Jōtarō is attacked by the dog's keeper and another samurai.
- Kizaemon, Debuchi, Murata and Kimura subsequently confront/control the situation with Musashi.
- Musashi and Jōtarō are treated as a joint threat; the crowd disperses only after Kizaemon assumes responsibility.
- Musashi is directed toward the cells but instead proceeds toward the castle keep, with Jōtarō told to wait under a pine tree in the garden.
- Kizaemon and Debuchi attempt to restrain Musashi; Kimura begins to draw his sword but is held back by his seniors.
- Musashi explicitly challenges the Yagyū castle and states that he intends to see Sekishūsai.
- Kimura then accepts the challenge; Jōtarō assists Musashi by throwing sand during the initial exchange.
- Kimura fights Musashi; Kizaemon, Debuchi and Murata assume positions around them.
- The three senior men ultimately move in together against Musashi.
- Otsū's flute is heard from a distance; this is explicitly auditory and does not create physical co-presence.
- Musashi escapes from the castle grounds into the darkness.

## Canonical atomic events for `b2c10`

The following replaces the previous aggregate event concept. Each record has only participants directly established by the source scene.

### Inn / departure

- `b2c10-e01`: Jōtarō returns to the inn and gives Musashi Shōda Kizaemon's reply letter. Participants: `jotaro`, `musashi`, `shoda_kizaemon` (letter/indirect participation; Kizaemon is not physically present). Type: `message`, `REPORTED/INDIRECT`, `NO_MAP`.
- `b2c10-e02`: Kocha tends Jōtarō's wounds at the inn/stream. Participants: `jotaro`, `kocha`. Type: `care`, `DIRECT`, `NO_MAP`.
- `b2c10-e03`: Jōtarō and Kocha interact privately in the fodder shed until Kocha's father interrupts them. Participants: `jotaro`, `kocha`; father remains unnamed. Type: `relationship`, `DIRECT`, `NO_MAP`.
- `b2c10-e04`: Musashi and Jōtarō depart the inn; Jōtarō briefly remains behind to say farewell to Kocha, then rejoins Musashi. Participants: `musashi`, `jotaro`, `kocha`. Type: `departure`, `DIRECT`, `MAP`.

### Koyagyū Castle / Shin'indō

- `b2c10-e05`: Musashi and Jōtarō arrive at the main gate of Koyagyū Castle. Participants: `musashi`, `jotaro`; unnamed castle guard. Type: `arrival`, `DIRECT`, `MAP`.
- `b2c10-e06`: Musashi is admitted to the castle and taken to the Shin'indō; Jōtarō is dropped at the attendants' waiting room. Participants: `musashi`, `jotaro`; unnamed guard/attendants. Type: `arrival/separation`, `DIRECT`, `MAP`.
- `b2c10-e07`: Shōda Kizaemon enters the Shin'indō with Kimura Sukekurō, Debuchi Magobei and Murata Yozō and hosts Musashi. Participants: `musashi`, `shoda_kizaemon`, `kimura_sukekuro`, `debuchi_magobei`, `murata_yozo`. Type: `meeting`, `DIRECT`, `MAP`.
- `b2c10-e08`: The four Yagyū retainers question and test Musashi during the sake/conversation sequence. Participants: `musashi`, `shoda_kizaemon`, `kimura_sukekuro`, `debuchi_magobei`, `murata_yozo`. Type: `conversation/test`, `DIRECT`, `NO_MAP`.
- `b2c10-e09`: Musashi challenges the hosts to a sword test and they decline to provoke the challenge. Participants: `musashi`, `shoda_kizaemon`, `debuchi_magobei`; `kimura_sukekuro`, `murata_yozo` are present in the conversation context. Type: `challenge`, `DIRECT`, `NO_MAP`.

### Dog incident

- `b2c10-e10`: Tarō's unusual barking causes Debuchi to leave the Shin'indō; Murata and Kimura leave shortly afterward. Participants: `debuchi_magobei`, `murata_yozo`, `kimura_sukekuro`, `musashi`, `shoda_kizaemon`. Type: `alarm`, `DIRECT`, `MAP`.
- `b2c10-e11`: Kizaemon learns that Jōtarō is missing from the waiting room and goes with Musashi toward the disturbance. Participants: `musashi`, `shoda_kizaemon`. Type: `search`, `DIRECT`, `MAP`.
- `b2c10-e12`: Musashi and Kizaemon reach the crowd where Jōtarō stands beside the dead Tarō. Participants: `musashi`, `jotaro`, `shoda_kizaemon`, `kimura_sukekuro`, `debuchi_magobei`, `murata_yozo`. Type: `confrontation`, `DIRECT`, `MAP`.
- `b2c10-e13`: The dog's keeper attacks Jōtarō; Musashi intervenes and protects him. Participants: `musashi`, `jotaro`; unnamed dog keeper and unnamed second samurai. Type: `fight/intervention`, `DIRECT`, `MAP`.
- `b2c10-e14`: Musashi challenges the surrounding Yagyū personnel on Jōtarō's behalf. Participants: `musashi`, `jotaro`, `shoda_kizaemon`, `kimura_sukekuro`, `debuchi_magobei`, `murata_yozo`. Type: `confrontation`, `DIRECT`, `MAP`.
- `b2c10-e15`: Kizaemon assumes responsibility and orders the crowd to disperse. Participants: `shoda_kizaemon`, `musashi`, `jotaro`, `kimura_sukekuro`, `debuchi_magobei`, `murata_yozo`. Type: `de-escalation`, `DIRECT`, `MAP`.

### Keep / pine garden / challenge

- `b2c10-e16`: Debuchi proposes that Musashi commit suicide; Musashi refuses. Participants: `musashi`, `debuchi_magobei`, `shoda_kizaemon`, `kimura_sukekuro`, `murata_yozo`, `jotaro`. Type: `confrontation`, `DIRECT`, `NO_MAP`.
- `b2c10-e17`: Kimura orders Musashi toward the cells; Musashi instead walks toward the keep and tells Jōtarō to wait under a pine tree in the garden. Participants: `musashi`, `jotaro`, `kimura_sukekuro`, `shoda_kizaemon`, `debuchi_magobei`. Type: `movement/restraint`, `DIRECT`, `MAP`.
- `b2c10-e18`: Kizaemon and Debuchi attempt to pull Musashi back; Kimura starts to draw his sword but is restrained by the seniors. Participants: `musashi`, `shoda_kizaemon`, `debuchi_magobei`, `kimura_sukekuro`; Jōtarō remains nearby. Type: `confrontation`, `DIRECT`, `MAP`.
- `b2c10-e19`: Musashi explicitly states that he intends to see Yagyū Sekishūsai and challenges the castle to battle. Participants: `musashi`, `shoda_kizaemon`, `debuchi_magobei`, `kimura_sukekuro`, `murata_yozo`. Type: `challenge`, `DIRECT`, `MAP`.
- `b2c10-e20`: Kimura accepts the challenge; Kizaemon and Debuchi position Musashi for the encounter. Participants: `musashi`, `kimura_sukekuro`, `shoda_kizaemon`, `debuchi_magobei`, `murata_yozo`; Jōtarō is nearby. Type: `fight_setup`, `DIRECT`, `MAP`.
- `b2c10-e21`: Jōtarō throws sand to disrupt Kimura's initial sword strike while Musashi evades. Participants: `musashi`, `jotaro`, `kimura_sukekuro`. Type: `fight`, `DIRECT`, `MAP`.
- `b2c10-e22`: Musashi and Kimura enter a direct sword confrontation; Kizaemon, Debuchi and Murata assume defensive positions around them. Participants: `musashi`, `kimura_sukekuro`, `shoda_kizaemon`, `debuchi_magobei`, `murata_yozo`. Type: `fight`, `DIRECT`, `MAP`.
- `b2c10-e23`: Kizaemon, Debuchi and Murata move in together against Musashi. Participants: `musashi`, `shoda_kizaemon`, `debuchi_magobei`, `murata_yozo`. Type: `fight`, `DIRECT`, `MAP`.
- `b2c10-e24`: Otsū's flute is heard while the fighters are engaged; the sound affects Musashi but Otsū is not physically present in the castle scene. Participants: `musashi`; `otsu` is `REPORTED/AUDIT_ONLY`, not physical co-presence. Type: `auditory_recall`, `REPORTED`, `NO_MAP`.
- `b2c10-e25`: Musashi escapes the castle grounds toward the moat/outer darkness; Jōtarō's physical co-presence ends where the source no longer explicitly keeps him with Musashi. Participants: `musashi`; `jotaro` only if the specific preceding scene establishes his continued physical presence. Type: `escape`, `DIRECT`, `MAP`.

## Identity and presence corrections

- `shoda_kizaemon`, `kimura_sukekuro`, `debuchi_magobei`, and `murata_yozo` are now explicitly recognized as physically present in the Shin'indō and later castle-ground scenes. The previous migration note that kept Kimura/Debuchi/Murata merely contextual was too conservative and is superseded by this direct source evidence.
- `sekishusai` is **not** added as a physical participant to these events: Musashi wants to meet him, but the chapter does not depict a face-to-face meeting.
- `otsu` is **not** physically co-present when her flute is heard. The event is auditory/recalled and remains non-physical.
- Kocha is physically present at the inn and stream/fodder-shed sequence; she is not transported to the castle scenes.

## Gate result

The former aggregate `b2c10-e03` is no longer acceptable. The chapter now has an explicit, scene-scoped participant ledger with no generalized `relevant participants` placeholder.

The remaining production requirement is mechanical rather than semantic: every event above must be translated to the exact canonical production location IDs and validated against the current character/location registries before `data/events.json` is replaced.
