# Book VI production migration audit

Date: 2026-08-29
Scope: Book VI (*Sun and Moon*), global sections 80–96 (`b6c1`–`b6c17`)

## Result

The canonical Book VI staging manifest has been reconciled with the existing
production registries and migrated as one publication unit. Production adds 50
events, 35 end-of-chapter states, 15 characters, 22 coordinate-free locations
and seven groups. Five mature relationships, four temporal identity windows and
seven progressive historical-context cards are published at their first safe
reveal sections.

The staging ledger already supplies at least one state for every Book VI
section, so its 35 states preserve the runtime contract without synthetic
backfilling. Eight additional production events separate decisions, fights,
reports and punishments from the people who actually travel. This prevents a
mixed scene from drawing a route for a character who remains at the scene.

The public boundary advances from section 79 to 96 only after the complete
dataset passes the semantic validator on a temporary copy without errors or
warnings.

## Canonical reconciliation

- Staging IDs `yagyu_munenori` and `baiken` resolve to the established
  `munenori` and `kohei` records.
- `Ono Tadaaki` is not a new person. Book VI explicitly links that name to the
  already registered `mikogami_tenzen`; progressive identity windows keep the
  earlier name through section 86 and reveal Ono Tadaaki in section 87.
- The staging `hangawara_gang` presence extends the established
  `hangawara_group` rather than creating a parallel group.
- `isarago_hill`, `takanawa_highroad` and `hojo_ushigome` reuse existing
  coordinate-free locations. The other 22 locations are new and remain
  `coordinates: null`.
- `Daizō` remains the reader-facing name through section 92. The explicit
  section-93 reveal changes it to Mizoguchi Shinano without adding that future
  name as a global alias.
- `Jōta` is a local abbreviated form used for Jōtarō in section 91 and is not
  promoted to a spoiler-prone global alias.

## Semantic correction ledger

- Section 80: Tadatoshi authorizes separate searches. The targets' whereabouts
  are unknown; neither Musashi nor Kojirō is made physically present.
- Section 81: the Kojirō–Yogorō confrontation closes unresolved. Yogorō is not
  marked dead until his corpse is discovered in section 82.
- Section 82: Gorōji is gravely injured in the test but remains alive and later
  receives repeated visits from Kojirō.
- Section 84: Musashi leaves the new cabin with Shinzō; Iori stays behind.
- Section 85: the marriage and appointment proposal remains a proposal, not an
  accepted marriage or completed appointment.
- Section 86: Akemi alone leaves Matahachi's tenement. Matahachi remains there
  and accepts Daizō's assassination plan.
- Section 87: abduction, dojo confrontation, Osugi's release and Tadaaki's later
  disappearance are distinct events. Toranosuke and Osugi are not assigned
  Tadaaki's route out of Edo.
- Sections 88–89: the Tanashi–Kotesashigahara journey remains an unresolved
  corridor, and the Mitsumine donor search does not establish Daizō's presence.
- Section 90: Gion Tōji's death is a strong inference at the end of the ambush
  chapter. The next section's identification of Oko's husband supplies the
  retrospective confirmation. Kōhei's death is explicit.
- Section 91: Oko's death and Gonnosuke and Iori's escape are separate events.
  Tanzaemon's journey, Jōtarō's confession and the boy's intended search for his
  father do not share one physical route.
- Section 93: the council judgment, Musashi's reported off-page release and the
  physical punishment of Matahachi and Akemi are separate. Matahachi and Akemi
  are alive after lashing and banishment.
- Sections 94–96: Kojirō's challenge is delivered, but no duel occurs. The
  appointment is canceled. Musashi leaves alone for unspecified mountains;
  Iori and Gonnosuke remain behind.
- Section 96: the pouch and Otsū's flute create a strong reader inference about
  Iori's sister, but Iori is not told her name and no reunion occurs. Production
  deliberately publishes no canonical Iori–Otsū relationship.

Mixed movement events list only actual travelers. People involved through
reports, instructions, custody transfers or simultaneous stationary action
remain outside route geometry.

## Traceability

Unlike the file-granular baseline of some earlier staging books, the Book VI
manifest already carries line ranges for all 42 staging events and all 35
states. Production retains those ranges. Each of the eight events added while
normalizing mixed scenes also has a precise line reference.

Critical ranges include:

- `b6c2`, lines 185–263, and `b6c3`, lines 1–63: unresolved confrontation,
  followed by the explicit corpse discovery;
- `b6c7`, lines 1–51: Akemi leaves alone;
- `b6c8`, lines 421–496: expulsion, release and Tadaaki's later disappearance;
- `b6c11`, lines 125–367, and `b6c12`, lines 1–70: the ambush aftermath,
  Oko's identification of her husband, her death and the separate escape;
- `b6c14`, lines 173–187: the Daizō/Mizoguchi reveal;
- `b6c14`, lines 245–254 and 361–435: Musashi's reported release and the two
  nonlethal banishment punishments;
- `b6c16`, lines 163–176 and 271–283: Musashi's solo appointment journey and
  later departure;
- `b6c17`, lines 43–83 and 132–174: Musashi's solo departure and the
  deliberately incomplete sister inference.

This ledger supplements rather than replaces the immutable staging manifest
and scrape audit.

## Identity and relationship policy

Temporal naming is owned by the existing identity contract. Runtime and wiki
tests protect both Book VI thresholds:

- Daizō through section 92; Mizoguchi Shinano from section 93;
- Mikogami Tenzen through section 86; Ono Tadaaki from section 87.

Only five relationships are added. Existing Musashi–Iori, Musashi–Kojirō,
Takuan–Musashi, Tanzaemon–Jōtarō, Matahachi–Akemi, Kojirō–Osugi and Oko–Tōji
records are reused instead of duplicated. The strong Iori–Otsū inference stays
in progressive prose only.

## Geographic and historical context

All 25 Book VI locations remain coordinate-free. Official sources establish
broad place or institutional context, never plot facts or exact narrative
points:

- Takanawa and Isarago: Minato City — https://www.city.minato.tokyo.jp/kouhou/kuse/gaiyo/chimerekishi/index-takanawa.html
- Tanashi: Nishitokyo City — https://www.city.nishitokyo.lg.jp/siseizyoho/syokai/ayumi/oitati_tanasi.html
- Kotesashigahara: Tokorozawa City — https://www.city.tokorozawa.saitama.jp/iitokoro/enjoy/bunkakyoyo/bunkazai/kenshiteibunkazai/bunzai_20100420150030643.html
- Mitsumine Shrine: Chichibu City — https://navi.city.chichibu.lg.jp/travel/ja/culture/2018/01/722/
- former Edo Castle complex: Imperial Household Agency — https://www.kunaicho.go.jp/learn/institution/shisetsu/kokyo/index.html
- Nobidome and its 1655 warning: Niiza City — https://www.city.niiza.lg.jp/site/bunkazai/nobitomeyousuiwoaruku.html
- Wadakura Gate: Chiyoda City — https://www.city.chiyoda.lg.jp/documents/30576/soan-honpen-2-1.pdf

Nobidome is explicitly marked `blocked_possible_1655_anachronism`. No modern
monument, shrine point or palace feature substitutes for a narrative route,
private house, cemetery, prison, teahouse, cabin or ambush site.

## Visual certification

The built Pages artifact was exercised at section 96 in Firefox at 1440×1000
and 390×844 through WebDriver BiDi after asynchronous data initialization. Both
layouts show *Sun and Moon — The Sound of Heaven*, report `Database: validato`
and emit no browser-console errors. Document width equals client width in both
viewports, so there is no horizontal overflow; the mobile layout scrolls only
vertically as expected.

The narrative overlay retained 35 visible Leaflet markers at the final section
in both viewports. The remote map surface was only partially painted in the
headless container, while Leaflet controls, marker overlays and the fallback
surface remained usable. This is the expected degraded behavior and does not
turn any of Book VI's coordinate-free locations into invented points.

## Acceptance gates

- production semantic validation at sections 1–96 with no warning;
- exact semantic hashes for all event and state records at sections 1–79
  against the Book V checkpoint;
- canonical staging validation for Books III–VII;
- frontend/static validation and the complete runtime/CLI test suite;
- spoiler-filtered Pages build and artifact validation;
- desktop and mobile visual certification, including the coordinate-free
  narrative overlay and graceful basemap degradation;
- clean whitespace diff before the atomic commit.
