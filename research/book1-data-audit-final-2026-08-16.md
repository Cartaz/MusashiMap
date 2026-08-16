# MusashiMap — Book I data audit — final

Date: 2026-08-16
Scope: Book I / Earth, chapters 1–8
Primary source: `data/source/musashi-book1/*.txt`

## Result

**PASS — approved corrections applied.**

The eight-chapter Book I source corpus remains the authoritative narrative source. The audit corrections have now been applied to the canonical reader-state, movement, event, contextual-entity and schema layers.

## Corrections applied

- **F-01:** Takuan's chapter 7 state now has no physical companions. He remains at Shippoji while Takezo and Otsu escape.
- **F-02:** Takuan's chapter 4 future destination has been cleared. The move to Itadori Pasture is exposed only when established by chapter 5.
- **F-03:** Osugi's chapter 5 premature Shippoji destination has been cleared.
- **F-04:** Ogin's chapter 6 premature Himeji destination has been cleared. Her Himeji transfer remains a chapter 7 revelation.
- **F-05:** The chapter 3 Takezo appearance at the flower festival is no longer represented as a confirmed movement edge. It remains an `appearance` event.
- **F-06:** Event `b1c5-01` now separates physical participants (`characters`) from people referenced through letters (`referenced_characters`).
- **F-07:** Akamatsu Masanori has been added as a distinct historical-person context entity and reader-facing micro-wiki entry.
- **F-08:** The Art of War has been added as a first-class `historical_work` context entity and reader-facing micro-wiki entry.
- **F-09:** `data/schema.json` has been upgraded to describe the current event vocabulary, state fields, movement transitions, contextual entities and physical-vs-referenced participant distinction.

## Integrity decisions retained

- `hinagura` and `hinagura_stockade` remain separate identifiers.
- The three-year internal time jump in chapter 8 remains a hard state boundary.
- The Takezo → Miyamoto Musashi identity change remains a chapter 8 narrative checkpoint, not a retroactive global rename.
- External historical context remains separate from novel evidence.

## Verification targets

The data layer is now internally aligned with the audit. The remaining verification work is product-level: confirm in a real browser that chapter navigation, spoiler-safe state reconstruction, micro-wiki visibility and map markers consume the corrected fields without regressions.
