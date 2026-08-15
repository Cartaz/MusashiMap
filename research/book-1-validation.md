# Book I validation

## Scope

This validation pass covers sections 001–008 of Book I, Earth.

## Data rules

- A state is only exposed when it is supported by the currently selected section or an earlier section.
- An intended destination is not treated as an arrival.
- Unknown or insufficiently precise locations remain explicit rather than being guessed.
- Locations are narrative identifiers for now; coordinates are intentionally unset.
- Section numbers are project-local indices for the source corpus, not the chapter numbering of the Italian Luni edition.

## Corrections made

- Removed an unsupported section-4 Osugi/Otsu journey that incorrectly used Himeji Castle as the origin.
- Added the teahouse on the road to Harima as a distinct location for Otsu's section-8 state.
- Replaced the empty chapter dataset with the eight verified Book I section titles.
- Added runtime referential validation for character, location, event, and section IDs.

## UI validation

The prototype now renders the selected section, the latest known state for each tracked character up to that section, and only events belonging to the selected section. It deliberately does not draw a future route from later sections.

The next step is to validate the narrative records against the primary text in more detail, then introduce geographic coordinates and the actual map layer.
