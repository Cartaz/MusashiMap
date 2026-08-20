# Book I audit — MusashiMap

Date: 2026-08-16

## Source of truth

This audit uses only the Book I chapter source files stored in `data/source/book1/`, plus the repository's existing `events.json`, `locations.json`, and character metadata. No external plot summary is used to create narrative facts.

## Rules applied

1. A character state represents the last **physically established** location in or before a section.
2. A character merely mentioned in a letter/report is not placed at the reported location.
3. An intended destination is not treated as an arrival.
4. When the text does not establish a location, `location: null` is preferable to inventing one.
5. `present_in` tracks sections with an audited physical state, not every section in which the character is mentioned.
6. Takezo remains the display name through section 8 until the narrative naming event; the UI may switch to Musashi after that event is represented at finer granularity.

## Corrections made

### Musashi / Takezo
- Section 5: moved from `sanumo_mountains` to `itadori_pasture`; this is where Takuan and Otsu actually capture him.
- Section 7: moved to `himeji_area` after the Hinagura episode; the previous `nakayama_pass` state stopped too early.
- Section 8: remains at Himeji Castle during confinement.

### Matahachi
- Section 3 onward: removed the inherited `oko_akemi_house` position.
- He leaves the refuge at the end of section 2. Later sections refer to him through letters/rumours, but do not establish a physical position in Book I. His state therefore uses `location: null`.

### Otsu
- Section 4: corrected from `hinagura` to `ogin_house`. The chapter physically places Otsu with Ogin after the meeting with Osugi.
- Section 7: corrected from `hanada_bridge` to `mikazuki_teahouse`. Hanada Bridge is the later rendezvous associated with the next section.
- Section 8: corrected to `hanada_bridge`.

### Ogin
- Section 7: corrected from `hinagura` to `himeji_area`; Takezo learns that Ogin has already been moved toward Himeji.
- Section 8: corrected to `sayo_district`, because the later whereabouts are reported as information rather than continued detention at Hinagura.

### Akemi
- Section 2: corrected to remain at the Oko/Akemi house rather than being left on Mount Ibuki after the mountain sequence.

### Temma
- Added a section-2 state at Mount Ibuki with status `dead`, corresponding to Takezo killing him there.

### Secondary cast
- Added only states supported by physical events already represented in the source-derived event data: Himeji garrison captain, Gonroku, and Lord Ikeda.
- Deliberately did **not** create physical states for Kohei or Aoki Tanzaemon merely because they are mentioned/reported. This prevents the map from turning reported information into invented locations.

## Main-cast coverage

The Book I main cast now has audited physical presence for every character who actually appears physically in the first eight sections, except Sasaki Kojiro and Jōtarō, who remain intentionally empty for Book I.

Matahachi is intentionally limited to sections 1–2 for physical presence; later references do not become map positions.

## Validation improvements

`js/validate.js` now also checks:

- `origin` and `destination` location IDs (the old validator accidentally checked `from`/`to` instead);
- referenced-character IDs;
- duplicate character states within the same section;
- declared `present_in` sections versus actual positional states;
- main characters that claim presence without a positional state.

## Remaining audit work

The next audit pass should verify the **secondary cast** against each chapter source before exposing all secondary characters in the map selector. In particular, `present_in` entries for characters who are only mentioned in reports should be separated from physical presence.

A future refinement should also split section 8 into finer narrative events if the UI needs the exact instant at which Takezo becomes Miyamoto Musashi, because the name change occurs within that section rather than cleanly at its beginning.
