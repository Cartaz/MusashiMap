# MusashiMap — Book I Source Audit

**Source of truth:** `data/source/musashi-book1/*.txt`

This audit deliberately starts from the chapter corpus and then checks every derived JSON. The Luni chapter index is not modified: the project's Luni index is already identical to the adopted chapter numbering.

## Chapter audit

| Chapter | Result | Key findings |
|---|---|---|
| 1 | PASS | Sekigahara → Mount Ibuki confirmed; Tarui is direction only; refuge at Oko/Akemi House confirmed. |
| 2 | CORRECTED | Final scene explicitly establishes Oko, Akemi and Matahachi leaving together; Takezo remains at the empty house. |
| 3 | CORRECTED | Ogin is at Ogin House, not Shippoji; Matahachi/Akemi/Oko are not physically present. |
| 4 | CORRECTED | Otsu escapes Ogin's arrest and returns to Shippoji; Ogin is arrested and held at Hinagura; Takezo remains in the Sanumo mountains. |
| 5 | CORRECTED | Lord Ikeda is mentioned through his signature, not physically present; Ogin and Matahachi/Oko are discussed but not physically present. |
| 6 | CORRECTED | Aoki Tanzaemon is not present; Osugi is physically at the cryptomeria scene; Ogin remains a reported prisoner at Hinagura. |
| 7 | CORRECTED | Otsu reaches Mikazuki, then disappears into a ravine; she does not reach Hanada Bridge within this chapter. Osugi/Gonroku pursue her. |
| 8 | CORRECTED | Musashi is released and leaves Himeji; Takuan also departs; Otsu is revealed to have waited three years at Hanada Bridge; Osugi/Gonroku/Aoki are reported, not physically present. |

## Adjacent-pair audit

### 1 → 2
Takezo and Matahachi remain at Oko/Akemi's refuge until the final night. The source then shows the house empty, with Oko, Akemi and Matahachi gone. The departure is therefore a confirmed **group departure**, while the destination remains unknown.

### 2 → 3
Chapter 3 does not physically reintroduce Oko, Akemi or Matahachi. Their last known location is the refuge, but their current position is unknown. They must not be rendered there as if they remained behind.

### 3 → 4
Takezo flees the flower festival. Otsu returns to Shippoji after witnessing Ogin's arrest. Ogin's state changes from physically present at Ogin House to prisoner at Hinagura.

### 4 → 5
Takezo remains in the mountains. Otsu/Takuan move to Itadori Pasture. Matahachi is confirmed alive through correspondence, but no physical position is supplied.

### 5 → 6
Takezo's capture at Itadori is followed by his return to Shippoji and restraint at the old cryptomeria.

### 6 → 7
Takezo remains bound until Otsu frees him. They travel together to Nakayama Pass and separate there.

### 7 → 8
Otsu's post-ravine location is intentionally unknown at the end of chapter 7. Chapter 8 retrospectively establishes that she recovered and waited three years at Hanada Bridge. Takezo's Himeji destination becomes confirmed at the beginning of chapter 8.

## Derived JSON corrections

- `data/events.json`: corrected participant semantics and added explicit `movement_status`.
- `data/character-states.json`: rebuilt as end-of-chapter states with `last_known_location` and reported/unknown states separated from physical presence.
- `data/characters.json`: `present_in` now means physical on-page presence only.
- `data/book1-analysis.json`: corrected physical/text presence and added chapter/pair audit evidence.
- `data/book1-location-states.json`: rebuilt from the source corpus and separated confirmed, last-known and reported positions.
- `data/book1-location-transitions.json`: normalized movement semantics and added the chapter-2 group departure.
- `data/book1-location-registry.json`: rebuilt to contain the complete narrative location vocabulary from Book I.
- `data/book1-entity-index.json`: split physical characters from mentioned characters so mentions cannot create map presence.

## Rules established by this audit

1. **Source before JSON:** no derived value is accepted merely because it is internally consistent.
2. **Physical presence ≠ mention:** letters, reports, signatures and conversations do not create physical markers.
3. **Destination ≠ arrival:** intended travel remains `intended_destination` or `direction_only` until the text establishes arrival.
4. **Last known ≠ current:** a character can leave a known place without receiving an invented replacement coordinate.
5. **Group departures:** when the text explicitly shows a group leaving together, the group relationship is preserved even when the destination is unknown.
6. **Reported positions:** a reported transfer such as Ogin → Himeji can inform continuity without pretending the character is physically on-screen there.
7. **Time gaps:** the three-year gap in chapter 8 is treated as a state boundary, not as continuous on-page presence.
8. **Geography:** narrative verification and modern coordinate identification remain separate layers.

## Remaining review status

The Book I narrative dataset is now source-audited. The next validation pass should be mechanical: run the repository validator against the rewritten JSONs and verify that the renderer consumes `movement_status`, `last_known_location`, `reported_position` and physical-vs-mentioned participant fields consistently.
