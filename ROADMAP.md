# MusashiMap — Project Roadmap

> Living project record. Update this file whenever a major research, data-model, or product milestone is completed. The goal is to preserve context so future work does not repeat completed research or drift from the project's original purpose.

## 1. Product goal

MusashiMap is a **follow-along reading companion for Eiji Yoshikawa's _Musashi_**, not a general historical GIS or encyclopedia.

The core experience should let a reader follow the current scene geographically, understand who is present and where they are, and consult a compact historical micro-wiki without exposing information that the reader has not reached yet.

Guiding principle:

> The map represents the novel first. Historical reconstruction is supporting context, not a replacement for the novel.

---

## 2. Source policy

### Primary narrative source

All claims about what the novel says must be derived from the Internet Archive transcription:

`https://archive.org/stream/EijiYoshikawaMusashi/Eiji%20Yoshikawa%20-%20Musashi_djvu.txt`

This applies to:

- narrative presence;
- names and aliases;
- locations as described by Yoshikawa;
- movements and destinations;
- relationships revealed by the text;
- chronology;
- spoiler boundaries.

### External sources

External sources are allowed for:

- modern geographic identification;
- modern coordinates;
- historical/topographic verification;
- separate historical context for the micro-wiki.

They must never be used to manufacture or overwrite novel evidence.

---

## 3. Completed work

### Project foundation

- Initial repository and project structure created.
- Static GitHub Pages deployment configured.
- Application/data/research directories organized.
- Core analysis and validation protocols established.

### Book I narrative dataset

Book I / _Earth_ has been structured into eight project-local sections:

1. The Little Bell
2. The Comb
3. The Flower Festival
4. The Dowager's Wrath
5. The Art of War
6. The Old Cryptomeria Tree
7. The Rock and the Tree
8. The Birth of Musashi

Existing structured layers include:

- narrative analysis;
- character states;
- location registry;
- location states;
- normalized movement transitions;
- section events;
- character identity checkpoints.

The dataset explicitly distinguishes intended destinations from confirmed arrivals and does not guess unknown locations.

### Spoiler-safe identity model

The same internal character ID is retained while the reader-facing name changes when the narrative establishes a new identity. The Book I checkpoint currently includes Takezo → Miyamoto Musashi at the appropriate narrative point.

### Geographic research

A high-precision topographic methodology was established and applied to Book I locations.

Important principle:

> A modern location is not accepted merely because its name matches. It must be compatible with the narrative network and, where possible, historical geography.

The following distinctions are now part of the data model:

- narrative identity;
- modern identification;
- geographic confidence;
- historical compatibility/status;
- modern coordinates versus historical estimate.

Examples already investigated include:

- Sekigahara — exact modern anchor;
- Tarui — exact modern anchor;
- Mount Ibuki — exact modern anchor;
- Miyamoto — strong modern identification;
- Himeji — exact modern anchor;
- Himeji Castle — exact modern anchor;
- Hanada Bridge — strong modern literary identification, but explicitly anachronistic as a modern bridge reference;
- Hinagura — strong/probable identification around the modern Musashi-related landmark;
- Nakayama Pass — strong candidate around Kamazaka Pass, but not promoted to exact;
- Sayo and Mikazuki — strong modern area identifications.

Some locations remain intentionally unresolved, including candidates such as Tsujinohara, Aida River, Sanumo and Mount Fuwa where evidence did not justify false precision.

### Bounded topographic research protocol

A reusable protocol was added for future geographic research. It requires:

1. extracting the narrative description first;
2. identifying anchor points;
3. building geographic constraints and relationships;
4. searching modern candidates;
5. testing candidates against the network;
6. recording contradictions;
7. assigning confidence/status;
8. preserving uncertainty explicitly.

#### Research budget rule

After **two substantive research rounds** without a meaningful improvement in confidence or map usefulness, stop.

The result should then be recorded as:

- `possible` area/candidate; or
- `unknown`.

Do not continue researching merely to turn an unresolved area into a precise pin when that precision does not materially improve the reading companion.

### Historical micro-wiki

A separate historical micro-wiki model has been added with spoiler-aware separation between:

```text
novel evidence
      vs.
historical context
```

Initial entities include:

- Kobayakawa Hideaki
- Ishida Mitsunari
- Ukita Hideie
- Shimazu Yoshihiro
- Konishi Yukinaga
- Tokugawa Ieyasu
- Battle of Sekigahara
- Eastern Army
- Western Army

The micro-wiki is intentionally compact. It exists to explain why a historical person/event matters to the current scene, not to become an independent encyclopedia.

---

## 4. Current work in progress

### A. Complete Book I primary-text audit

Validate the existing Book I structured records against the Archive.org transcription in detail.

For each section, verify:

- characters present;
- names/aliases;
- current locations;
- movements;
- confirmed arrivals;
- events;
- relationships;
- historical entities mentioned;
- evidence boundaries.

Do not introduce external historical facts into this layer.

### B. Complete historical micro-wiki extraction

Use the Book I primary-text audit to identify additional historical people/events/factions that materially help a reader understand the current scene.

For each entity, maintain a spoiler boundary and keep narrative evidence separate from historical context.

### C. Archive.org → Luni edition mapping

The Archive.org section numbers are project-local source indices and must not be treated as the Italian Luni chapter numbers.

Build an explicit mapping layer between:

```text
Archive.org section
        ↓
Luni chapter/title
        ↓
reader progress
```

This mapping must be evidence-based and should not alter the primary corpus structure.

---

## 5. Next product milestones

### Milestone 1 — Canonical Book I data

Finish and validate the narrative, character, location, movement, event and historical-entity datasets.

### Milestone 2 — Geographic layer

Attach modern coordinates only after the narrative location registry is stable.

Represent uncertainty honestly:

```text
exact
strong
probable
possible
unknown
literary / anachronistic
```

Never imply that a modern coordinate is automatically the historical location of the 1600 setting.

### Milestone 3 — Reader-progress engine

The application needs a single reader-progress state controlling what is visible.

Conceptually:

```text
reader_progress
      ↓
visible characters
visible locations
visible events
visible routes
visible relationships
visible wiki entries
```

### Milestone 4 — Spoiler firewall

No future route, relationship, identity, location or historical context may appear before the reader reaches the corresponding narrative point.

### Milestone 5 — Follow-along map

The map should emphasize the current scene and active movement rather than displaying the entire novel's geography at once.

### Milestone 6 — Micro-wiki UI

Historical entities should be accessible from the reading/map interface with a compact card containing:

- why the entity matters here;
- narrative context already revealed;
- concise historical context;
- optional source/context details;
- spoiler-safe visibility.

### Milestone 7 — Reading test

Test the companion as an actual reader would use it:

- read a section;
- advance the companion;
- inspect the map;
- inspect characters;
- open historical context;
- verify that no future information leaks.

The key question is always:

> Does this improve understanding of the current reading experience?

If not, it should not automatically become another research task.

---

## 6. Explicit non-goals

MusashiMap is **not** currently trying to become:

- a complete historical atlas of Sengoku Japan;
- a scholarly reconstruction of every 1600 road;
- a general biography database;
- a replacement for the novel;
- a GIS project requiring exact historical coordinates for every ambiguous toponym.

Precision is valuable when it changes the reader's understanding. False precision is worse than an explicitly uncertain area.

---

## 7. Working rules for future agents

1. Read this roadmap before beginning a new research task.
2. Check existing datasets and research notes before repeating research.
3. Treat Archive.org as the sole authority for claims about the novel.
4. Use external sources only for explicitly separated modern/historical context.
5. Preserve uncertainty instead of inventing coordinates.
6. Apply the two-round stopping rule to difficult topographic identifications.
7. Prefer network consistency over name matching.
8. Never leak future information through the map or micro-wiki.
9. Do not expand research merely because a more precise answer is theoretically possible.
10. Optimize for the usefulness of the reading companion.

---

## 8. Current state at a glance

```text
PROJECT FOUNDATION              DONE
BOOK I STRUCTURED DATA          DONE / VALIDATING
SPOILER-SAFE CHARACTER MODEL    DONE
LOCATION NORMALIZATION           DONE / VALIDATING
TOPOGRAPHIC METHODOLOGY          DONE
TOPOGRAPHIC INITIAL AUDIT        DONE / SELECTIVE FOLLOW-UP ONLY
HISTORICAL MICRO-WIKI MODEL      DONE / EXPANDING
BOOK I PRIMARY-TEXT AUDIT        IN PROGRESS
ARCHIVE → LUNI MAPPING            NEXT
COORDINATE INTEGRATION            NEXT
READER-PROGRESS ENGINE            NEXT
SPOILER FIREWALL                  NEXT
FOLLOW-ALONG MAP                  NEXT
MICRO-WIKI UI                     NEXT
FULL READING TEST                 LATER
```

The roadmap is intentionally a living document. Update it at each meaningful milestone rather than creating a separate history document that can drift out of date.
