# MusashiMap — Book II / WATER systematic scrape

## Method lock

This document is an intermediate research/audit layer. It must be completed and checked before production datasets are updated.

Rules carried forward from the project research specification:

1. The Internet Archive English transcription is the only source for deciding whether a character, place, event, movement, faction, or narrative detail occurs in the novel.
2. External sources must not be used to establish presence in the novel.
3. Do not use knowledge from later parts of the novel to fill earlier gaps.
4. No future-spoiler information is allowed in the reader-facing dataset.
5. The database represents what the reader can know at that point in the narrative.
6. Aliases are temporally scoped; internal character identity remains stable.
7. Use `unknown` whenever the text does not permit a safe determination.
8. Do not invent coordinates.
9. Keep characters, places, events, factions, historical people, and cultural references distinct.
10. External historical/geographical sources may be used only after the novel-derived entity has been established, for the later micro-Wiki/geographical verification phase.
11. Production files (`characters.json`, `locations.json`, `events.json`, `relationships.json`) are not updated until the audit is sufficiently verified.

## Source

Primary text:
Internet Archive — Eiji Yoshikawa, *Musashi*, Charles S. Terry translation.

https://archive.org/stream/EijiYoshikawaMusashi/Eiji%20Yoshikawa%20-%20Musashi_djvu.txt

## Book II chapter map

Book II — WATER contains 11 chapters in this edition:

1. The Yoshioka School
2. The Wheel of Fortune
3. Encounter and Retreat
4. The Water Sprite
5. A Spring Breeze
6. The Hozoin
7. Hannya Plain
8. The Koyagyu Fief
9. The Peony
10. Jotaro's Revenge
11. The Nightingales

The source table of contents establishes this sequence. The text itself begins Book II with `The Yoshioka School` and begins `The Wheel of Fortune` immediately after the first chapter, followed by `Encounter and Retreat`.

## Chapter 1 — The Yoshioka School

### Source range

Approximate transcription range: lines 6930–8313 of the Internet Archive text. `The Yoshioka School` begins at line 6934; `The Wheel of Fortune` begins at line 7861. `Encounter and Retreat` begins at line 8314.

### Temporal / narrative frame

- Year explicitly given: 1605.
- Main geographic frame: Kyoto.
- The chapter opens with political context surrounding the Tokugawa/Toyotomi balance and then moves into the Yoshioka School, the Yomogi teahouse, and the surrounding Kyoto streets.
- This chapter establishes Musashi's challenge to the Yoshioka School and the resulting confrontation.

### Candidate characters/entities extracted from the text

These are candidates from the primary text only. They are NOT yet final production entities.

#### Main / recurring characters present

- Miyamoto Musashi / Takezo — the same internal identity; the chapter explicitly uses both names.
- Yoshioka Seijuro — the Yoshioka School's young master.
- Yoshioka Kempo — founder/first master of the Yoshioka School; deceased by the present narrative.
- Yoshioka Denshichiro — Seijuro's younger brother.
- Gion Toji — senior Yoshioka disciple/companion of Seijuro.
- Ueda Ryohei — senior Yoshioka disciple.
- Oko — proprietor of the Yomogi teahouse.
- Akemi — Oko's daughter.
- Hon'den Matahachi — living at the Yomogi establishment and encountered by the Yoshioka men.
- Otsu — referenced through Matahachi's memories and relationship history.

#### Historical / contextual people explicitly named

- Oda Nobunaga
- Toyotomi Hideyoshi
- Tokugawa Ieyasu
- Tokugawa Hidetada
- Toyotomi Hideyori
- Ashikaga shoguns (collective historical reference)
- Kiichi Hogen — invoked in Musashi's stated martial ambitions.
- Okuni — named as the originator of the Okuni Kabuki tradition.

#### Unresolved / unnamed participants

- Yoshioka disciples and retainers are repeatedly present as groups; individual identities should only be created when the text provides a stable name.
- The wounded Yoshioka fighters killed during the confrontation are not yet normalized because this first-pass extraction has not yet established their individual names.
- A Yoshioka servant repeatedly conveys information; unnamed.
- A doctor at the Yoshioka School; unnamed.

### Candidate factions / organizations

- Yoshioka School / House of Yoshioka
- Ashikaga shogunate / Ashikaga shoguns (historical institution/reference)
- Tokugawa political regime (contextual historical faction)
- Toyotomi house (contextual historical faction)

### Candidate locations

Only locations explicitly occurring in this chapter are listed here. Geographic identification is intentionally deferred.

- Kyoto
- Osaka
- Osaka Castle
- Shijo Avenue
- Kamo River
- Tamba Province
- Yoshioka School / Yoshioka compound on Shijo Avenue
- Yomogi Teahouse
- Takase River
- Sanjo Avenue / Sanjo Bridge
- Zuisenin
- Teramachi
- Kayahara
- Kamo River / riverbank open-air theatre area
- Izumo Shrine
- Ise
- Mimasaka Province
- Miyamoto
- Shippoji
- Aida River
- Toribe Mountain
- Kurama
- Kiyomizudera Temple
- Kuyado
- Honnoji / burned ruins of Honnoji
- Hachiman Shrine
- Toribe Mountain

Important distinction: some of these are narrative locations, some are broad historical/geographical references, and some are merely mentioned in dialogue or exposition. They must not automatically become map markers.

### Candidate narrative events

1. Political situation in Kyoto in 1605 is established in the opening exposition.
2. Seijuro and Yoshioka disciples visit the Kyoto pleasure district.
3. Seijuro visits the Yomogi teahouse with Toji.
4. Seijuro interacts with Oko and Akemi at Yomogi.
5. Matahachi's conflict with Oko is shown.
6. Matahachi decides to leave but remains conflicted and returns inside to search for money.
7. The Yoshioka School receives word that a swordsman calling himself Miyamoto Musashi has arrived to challenge Seijuro.
8. Musashi challenges the Yoshioka School.
9. Musashi defeats multiple Yoshioka disciples using a wooden sword; several are seriously wounded and two are reported dead.
10. Musashi refuses to continue fighting until Seijuro returns.
11. The Yoshioka leadership debates how to handle Musashi.
12. The Yoshioka group attempts to ambush Musashi.
13. Musashi escapes through the school grounds/tunnel/removed floorboards.
14. Yoshioka pursuers mistake Matahachi for Musashi near the Honnoji ruins and briefly capture him.
15. Matahachi confirms that the swordsman is the former Takezo and considers warning him.

These events need a second verification pass before being converted into `events.json`, especially where the distinction between a scene, a movement, and an event is relevant to the existing schema.

### Character-state implications

No production character-state records are created in this first pass. The following facts are candidates for later verification:

- Musashi is physically in Kyoto during the chapter.
- Musashi visits/challenges the Yoshioka School.
- Musashi subsequently escapes the Yoshioka compound.
- Seijuro is initially away from the school, then returns after the challenge has begun.
- Matahachi is physically at the Yomogi establishment and later outside near the Honnoji ruins.
- Oko and Akemi are at Yomogi during their scenes.

Any state that is not explicitly anchored to a scene must remain unresolved rather than inferred.

### Place-introduction implications

Book II must use the project's persistent-place model: once a place is introduced, it remains available for later chapters/books, subject to the overall reader-progression rules. The exact cross-book section identifier scheme still needs to be finalized before these locations are assigned production `introduced_section` values.

### Verification queue

Before committing Book II entities to production data:

- normalize Yoshioka names and aliases against existing Book I character IDs;
- determine which historical names are characters in the micro-Wiki versus contextual references;
- distinguish the Yomogi teahouse as a narrative site from the broader Kyoto geography;
- verify whether each named location is actually useful as a map marker;
- verify all named locations in the remaining 10 chapters before assigning coordinates;
- extract all unnamed-but-important groups/factions without inventing individual identities;
- perform a second pass for aliases, indirect references, and temporal knowledge constraints;
- only then update production JSON files.
