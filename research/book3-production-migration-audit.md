# Book III production migration audit

Date: 2026-08-20
Scope: Book III (*Fire*), global sections 20–32 (`b3c1`–`b3c13`)

## Result

The canonical Book III staging manifest has been migrated atomically into the
production data model. The migration adds 57 events, 41 end-of-chapter states,
22 new character records and 33 new location records. `yoshioka_school` is
reused from the existing registry, so the 34 locations in staging become 33
new production records. Six narrative groups now have their own gated registry.

Every event retains a local `source_ref`; chapter, line-range, foreign-key,
presence and publication-boundary checks are enforced by
`tools/validate-data.mjs`.

## Canonical reconciliation

- `yagyu_muneyoshi` is remapped to the existing `sekishusai` record: both names
  identify Yagyū Sekishūsai/Muneyoshi in the project corpus.
- `gonroku` remains Fuchikawa Gonroku (Uncle Gon), as established in Book I;
  the staging label “Hon'iden Gonroku” was corrected rather than overwriting a
  production identity.
- `lord_ikeda` and all other pre-existing canonical IDs are reused.
- Only five Book III relationships whose reveal timing is mature enough for
  the current production model are imported. Broader or end-state relationship
  claims remain in staging until their temporal semantics can be represented
  without retroactive spoilers.

## Spoiler and identity gates

- The living swordsman on the ship is displayed as “Handsome young man” in
  sections 22–24. “Sasaki Kojirō” and “Ganryū” become reader-visible only at the
  explicit reveal in section 25.
- The certificate name in sections 20–21 is a referenced name and does not
  identify its dead bearer.
- Shishido Baiken is not connected to Tsujikaze Kōhei in reader-facing data
  until the explicit reveal in section 28.
- Runtime regression tests inspect both identity windows and actual event prose
  for these forbidden early names.

## Movement and final-state audit

Production movement statuses were narrowed where the staging vocabulary
overstated the evidence. Confirmed arrival is used only when the destination is
shown; intentions, directions, uncertain departures and confirmed routes remain
distinct. Characters who depart or whose end position is merely reported have
`location: null`, with `last_known_location`, `departure_from`,
`intended_destination` and/or `location_status` carrying the qualified fact.

The semantic validator rejects physical locations on `departed`/`away` states,
non-physical `location_status` values with coordinates, malformed routes and
references to unknown narrative groups.

## Geographic validation

No unresolved literary place received invented coordinates. The only newly
mapped point is Sumiyoshi Taisha, stored as a rounded representative coordinate
for the modern shrine complex (`coordinate_precision: modern_match`), not as a
claim about a precise sub-site in the novel.

External checks used only for modern geographic/historical context:

- Sumiyoshi Taisha, official access page: https://www.sumiyoshitaisha.net/access/index.html
- Ise Jingu, official access page: https://www.isejingu.or.jp/en/access/index.html
- Ise Jingu, official precinct overview: https://www.isejingu.or.jp/en/about/index.html
- Ise City, Ōminato historical document page: https://www.city.ise.mie.jp/cul_spo_edu/culture/bunkazai_shiseki/bunkazai/komonjo/1009622.html

These sources do not replace novel evidence and were not used to infer travel,
presence, identities or plot events.

## Acceptance gates

- production semantic validator at sections 1–32;
- canonical staging validator for Books III–VII;
- frontend/static validator;
- runtime identity, map fallback and publication-boundary tests;
- spoiler-filtered Pages artifact build and artifact validator;
- source-file/title/line-range checks and clean whitespace diff.
