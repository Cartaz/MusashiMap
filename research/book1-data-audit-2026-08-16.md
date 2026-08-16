# MusashiMap — Book I data audit

Date: 2026-08-16
Scope: Book I / Earth, chapters 1–8
Primary source: `data/source/musashi-book1/*.txt`

## Audit method

The audit compares the canonical Book I source corpus against the current character, event, movement, location and contextual-entity datasets. Narrative claims are not resolved from later books. Where the source only reports a character's whereabouts, that is kept distinct from direct physical presence.

## Source corpus

All eight Book I chapter files are present and non-empty:

1. `chapter1-the-little-bell.txt`
2. `chapter2-the-comb.txt`
3. `chapter3-the-flower-festival.txt`
4. `chapter4-the-dowager-s-wrath.txt`
5. `chapter5-the-art-of-war.txt`
6. `chapter6-the-old-cryptomeria-tree.txt`
7. `chapter7-the-rock-and-the-tree.txt`
8. `chapter8-the-birth-of-musashi.txt`

The corpus is therefore suitable as the authoritative chapter-local source for the Book I database.

## Main-cast audit

The canonical nine-character main cast is present:

- Miyamoto Musashi / Shinmen Takezō
- Sasaki Kojirō
- Otsū
- Hon'den Matahachi
- Takuan Sōhō
- Obaba Osugi
- Jōtarō
- Akemi
- Ogin

The Book I presence matrix correctly distinguishes textual mention from physical presence for the cases that matter most, especially Matahachi, Otsū, Ogin, Kojirō and Jōtarō.

## Findings requiring correction

### F-01 — Takuan chapter 7 companion state is incorrect

`book1-character-states.json` currently gives Takuan chapter 7 companions `otsu` and `musashi`, while the chapter explicitly has Otsū and Takezō escape from Shippoji and Takuan remain behind. The state should have no physical companions.

Severity: **high** because companion data can affect the map's simultaneous-character view.

### F-02 — Takuan chapter 4 destination is premature

The chapter-4 state assigns Takuan `destination: itadori_pasture`, although the actual journey from Shippoji to Itadori Pasture occurs in chapter 5. Chapter 4 should not expose that future destination.

Severity: **high** for spoiler-safe chapter state reconstruction.

### F-03 — Osugi chapter 5 destination is premature

The chapter-5 state assigns Osugi `destination: shippoji` while her state location remains Hon'den House. The field implies a movement not established by the chapter event ledger and should be removed/neutralized.

Severity: **medium**.

### F-04 — Ogin chapter 6 destination is premature

The chapter-6 state assigns Ogin `destination: himeji_area`. At this point the source only establishes her continued imprisonment at Hinagura and Takezō's rescue concern. Her transfer to Himeji is revealed in chapter 7. The chapter-6 state must not expose that future movement.

Severity: **high** for spoiler safety.

### F-05 — Chapter 3 appearance is represented as a movement edge

The movement registry currently records Musashi as moving to Shippoji in chapter 3. The source establishes that Takezō appears in the crowd at the flower festival; it does not establish a new arrival from a known origin in that scene. This should be represented as presence/appearance, not as a confirmed movement transition.

Severity: **medium**.

### F-06 — Chapter 5 letter event mixes physical participants with referenced characters

`b1c5-01` lists Matahachi and Oko in the event's `characters` array even though the event is Otsū receiving their letters at Shippoji. This is semantically ambiguous after the project introduced the physical-presence distinction. The event should either restrict `characters` to physically present participants and add an explicit `referenced_characters` field, or formally document that `characters` means narrative involvement rather than physical presence.

Severity: **medium**.

## Contextual / historical entity audit

### F-07 — Akamatsu Masanori is a named historical figure but is not promoted to the contextual registry

Chapter 8 explicitly names Akamatsu Masanori when Lord Ikeda explains the Shimmen family's connection to the Akamatsu lineage. The current contextual registry contains `akamatsu_clan` but not the named individual. If the goal is a complete named historical-context dataset, Masanori should be added as a separate historical-person entity.

Severity: **medium**.

### F-08 — Historical work/reference entities are not consistently modeled

Chapter 8 repeatedly references Sun-tzu's *Art of War*. The current context registry is focused primarily on people, factions, the battle and the Akamatsu clan. The database should decide whether named historical works are first-class context entities. For a complete contextual index, they should be modeled separately from people rather than silently omitted.

Severity: **low/medium** and primarily a schema decision.

## Schema audit

### F-09 — `data/schema.json` is materially behind the actual Book I data model

The schema still describes the older event vocabulary (`arrival`, `departure`, `journey`, etc.) while the current event ledger already uses additional types such as `battle_context`, `capture`, `escape`, `revelation`, `information`, `imprisonment`, `release`, `restraint`, `search` and `pursuit`. It also omits fields used by the Book I state model such as `display_name`, `canonical_id`, `section`, `source_events` and the richer location precision model.

This is a technical integrity issue: the schema currently cannot validate the canonical datasets accurately.

Severity: **high**.

## Referential integrity

The location model deliberately distinguishes `hinagura` (area) from `hinagura_stockade` (specific fortified site). This is valid and should be retained. The source corpus and global location registry both contain the two concepts.

The audit did not find evidence that these two IDs should be merged.

## Spoiler-safety audit

The main remaining risk is not missing narrative facts but premature `destination`/companion fields in character states. The four corrections F-01 through F-04 should be applied before the Book I dataset is treated as the definitive reader-state layer.

Chapter 8's three-year internal time jump is correctly recognized by the current analysis and must remain a hard state boundary. The post-confinement identity change to Miyamoto Musashi is also correctly represented as a narrative checkpoint rather than a global rename.

## Audit result

**Status: PASS WITH CORRECTIONS REQUIRED**

The complete eight-chapter source corpus is usable and the rebuilt database is substantially more reliable than the previous version. Before declaring Book I data final, apply F-01–F-06, decide and apply the contextual-entity policy in F-07/F-08, and bring `data/schema.json` up to date with the actual canonical model (F-09).
