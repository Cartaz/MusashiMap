# MusashiMap — Book II Chapter Registry

Status: **staging / pre-production**

Canonical narrative corpus: `data/source/book2/`.

Book II contains 11 chapters. Book I currently occupies global sections 1–8, so the provisional global section mapping for Book II is 9–19. The existing production JSON is not changed by this registry.

| Book | Local chapter | Global section | Chapter ID | Source file | Title |
|---|---:|---:|---|---|---|
| II | 1 | 9 | `b2c1` | `chapter1-the-yoshioka-school.txt` | The Yoshioka School |
| II | 2 | 10 | `b2c2` | `chapter2-the-wheel-of-fortune.txt` | The Wheel of Fortune |
| II | 3 | 11 | `b2c3` | `chapter3-encounter-and-retreat.txt` | Encounter and Retreat |
| II | 4 | 12 | `b2c4` | `chapter4-the-water-sprite.txt` | The Water Sprite |
| II | 5 | 13 | `b2c5` | `chapter5-a-spring-breeze.txt` | A Spring Breeze |
| II | 6 | 14 | `b2c6` | `chapter6-the-hozoin.txt` | The Hōzōin |
| II | 7 | 15 | `b2c7` | `chapter7-hannya-plain.txt` | Hannya Plain |
| II | 8 | 16 | `b2c8` | `chapter8-the-koyagyu-fief.txt` | The Koyagyū Fief |
| II | 9 | 17 | `b2c9` | `chapter9-the-peony.txt` | The Peony |
| II | 10 | 18 | `b2c10` | `chapter10-jotaros-revenge.txt` | Jōtarō's Revenge |
| II | 11 | 19 | `b2c11` | `chapter11-the-nightingales.txt` | The Nightingales |

## Invariants

1. `b2cN` is the canonical identity of a Book II chapter.
2. Global numeric sections 9–19 are provisional until the unified seven-book chapter registry is generated.
3. Source facts must be scraped from the exact corresponding file.
4. No Book III+ information may resolve a Book II ambiguity.
5. The new character taxonomy must be applied to Book I and Book II together during production migration.
6. Book II locations use the geographic registry as their staging source; unresolved C/D locations remain unmapped.
7. No production JSON is modified by this registry.

## Next extraction stage

The next production-preparation pass is the chapter-by-chapter extraction of:

- physical character presence;
- chapter-scoped narrative states;
- movements and transitions;
- events;
- referenced/contextual characters;
- first narrative appearance of locations;
- continuity checks across `b2c1–b2c11`.

The extraction will use overlapping windows (`b2c1–b2c2`, `b2c2–b2c3`, etc.) and the taxonomy in `research/analysis-protocol.md`.
