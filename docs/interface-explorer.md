# Reading and exploring MusashiMap

The map remains the default reading surface. Archive and Relations open a native modal workspace with room for research, while the selected global section remains the single spoiler boundary. The parchment style is shared with the existing map panels.

## Diary

The diary separates Chapter from Context. Its default event scope includes every event in the selected chapter, including secondary-only scenes. Selecting "Only selected tracks" explicitly applies the existing protagonist filter. This choice does not modify map selection.

On phone-width screens the diary occupies the viewport, closes other map panels, and makes the map and header inert until closed. Its native close button and Escape restore access to the map. The desktop diary stays alongside the map.

## Archive and chronology

Characters, Places and Events have a search field, paginated results and detail sheets. Desktop layouts place results beside details. Phone layouts display either results or one detail sheet, with a back control. The page size is 30 records. Chronology preserves dataset event order within chapters, groups chapters by book and displays 12 matching chapters per page. Chapters expand on request instead of rendering the whole narrative at once.

Character sheets show the latest eligible wiki update, eligible names, the latest recorded position, introduced relationships and grouped supporting events. Static final-role descriptions and raw alias arrays are not rendered or searched. Places without coordinates remain searchable; only coordinate-backed locations receive a map action. Event sheets include involved/referenced characters, locations, the stored source reference and a link to the corresponding public chapter transcription when available.

Opening and closing the workspace preserves map camera and protagonist selection. "Show on map" intentionally focuses a known place. Chapter links only navigate to chapters at or before the current boundary; they do not silently advance the reader.

## Relationships

When an assumed name or unidentified person has not yet been linked to an earlier name, those reader-facing entries remain separate. Their events, biography and relationship endpoints stay separate too. At the recorded revelation they combine into the canonical entry. This is a view projection; no duplicate characters are added to the production JSON. The diary's context uses the same projection rather than static final roles.

Readers choose a known person and optionally a known relationship category. A searchable selector uses only names introduced by the selected chapter. The list is the initial presentation. The graph shows the selected person and at most six neighboring characters; pagination exposes remaining neighbors and selecting a neighbor recenters the graph. Distinct relationship descriptions for the same pair are preserved in the list. Duplicate reciprocal facts are combined.

The interface calls these documented relationships: introduction does not prove that a relationship is still active in later chapters. The labels preserve conditional marriage, planned adoption and uncertain parentage rather than replacing them with stronger assertions.

## Publication and safety

`js/archive-model.js` projects production records for the chosen section before search or display. Events, states, appearances, names, wiki updates, places, relationships and chapter metadata are filtered. Rewinding reconstructs the projection, so a previously opened future sheet is removed. Search result counts use only eligible items. Relationships enter the Pages artifact only within the publication boundary and with available character endpoints. The runtime fingerprint includes the relationship dataset.

This feature does not add or alter narrative facts, coordinates or the frozen source audits. Dataset coverage and the limits of the source audit remain documented in the repository README.

## Verification

`tools/tests/archive-model.test.mjs` checks all 112 section projections, hidden aliases and future wiki roles, secondary-only events, unresolved places, reciprocal relationships and readable labels. `tools/browser-explorer.mjs`, called by the existing Chromium smoke suite, checks search and rewinds, all three catalog categories, chronology, relationship recentering and pagination, graph-card spacing, native dialog focus and map preservation. It checks 375×812, 812×375, 768×1024 and 1440×900 viewports.

CI retains the generated screenshots in `interface-screenshots` for 30 days, including desktop archive/chronology/graph and mobile list/detail/diary/graph views. The basemap is controlled in these tests; application code, styles, data, Leaflet and MapLibre run normally.
