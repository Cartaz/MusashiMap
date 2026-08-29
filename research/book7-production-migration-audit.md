# Book VII production migration audit

Date: 2026-08-29
Scope: Book VII (*The Perfect Light*), global sections 97–112 (`b7c1`–`b7c16`)

## Result

The canonical Book VII staging manifest has been reconciled with the production
registries and migrated as one publication unit. Production adds 82 events, 49
progressive chapter states, 30 characters, 39 coordinate-free locations and 12
groups. Four established locations and 26 established characters are reused.
Fourteen relationships and five temporal identity windows are added; four
staging relationships already existed in production and are not duplicated.

The staging manifest contained 78 file-granular events and 20 end-of-book
states. Production adds four movement events and 29 chapter states to preserve
the runtime's progressive state and route semantics. Exact line ranges are
stored for all four normalization events. The public boundary advances from 96
to 112 only after the complete dataset passes the semantic validator without
errors or warnings.

## Canonical reconciliation

- `honami_koetsu`, `yoshino_dayu`, `yagyu_munenori`, `ono_tadaaki` and
  `toranosuke` resolve to the established `koetsu`, `yoshino_tayu`, `munenori`,
  `mikogami_tenzen` and `hamada_toranosuke` records.
- Musashi uses the cover name Muka only in section 102. The canonical display
  name resumes in section 103; Muka is not a global alias.
- The unidentified mountain priest remains unnamed in sections 98–99. Section
  100 explicitly reconciles him as Toriumi Benzō, formerly Rinshōbō.
- Torazō is a same-section concealment recognized as Hamada Toranosuke in
  section 97 and is not promoted to a durable global alias.
- `kofukuji`, `sakai_port`, `osaka` and `kokura` reuse established locations.
  The other 39 Book VII locations are new; all 43 remain coordinate-free.

## Semantic correction ledger

- Section 97: Otsū's unauthorized excursion, the runaway ox and the later
  rescue are distinct movements. Hyōgo does not acquire Otsū's route.
- Section 98: Otsū and Hyōgo leave Koyagyū toward Edo without a confirmed Edo
  arrival. Hyōgo's short pursuit returns to Koyagyū.
- Sections 99–100: Iori's fall, Gonnosuke's capture and the captors' later
  arrival at Kamuro remain separate. Falling into the gully does not establish
  Iori's destination.
- Section 101: Iori and Kojirō depart Sakai by sea toward Kokura; the chapter
  does not yet establish their arrival.
- Sections 102–103: Gudō and Matahachi continue toward Kyoto after Musashi
  stops following them. Musashi does not share their departure route.
- Sections 104–105: the intended Himeji journey is not promoted to arrival.
  Otsū's return to the cave is separate from Osugi's later repentance.
- Section 106: Musashi's farewell and boarding are stationary narrative acts;
  a separate event records the ship's westbound departure. Matahachi chooses
  social fatherhood, while biological paternity remains unknown.
- Section 107: Musashi remains aboard the passing ship. Otsū, Osugi and Jōtarō
  only intend to continue to Kokura.
- Section 108: Funashima is an intended duel site, not a completed crossing.
  Kojirō and Omitsu's marriage plan remains conditional on his return.
- Section 110: Nuinosuke's reading of Musashi's letter is stationary. A separate
  event records Matahachi, Akemi and the baby climbing the Kokura hill.
- Section 111: Kojirō's boarding and Musashi's farewells are separated from the
  two actual crossings toward Funashima. Those left ashore acquire no route.
- Section 112: Kojirō's death is explicit despite the briefly detected breath;
  the narrator states he did not return to life. Musashi and Sasuke leave for an
  expressly unrecorded destination, which remains `uncertain_route` and unmapped.

## Traceability

The Book VII staging manifest is a file-granular baseline rather than the
line-granular ledger available for Book VI. Production retains those source
references. The four events added while normalizing movement have exact ranges:

- `b7c7-e05`, lines 87–133: Gudō and Matahachi continue while Musashi remains;
- `b7c10-e06`, lines 5–90: Musashi's ship leaves Sakai westbound;
- `b7c14-e06`, lines 451–480: Matahachi, Akemi and the baby climb the hill;
- `b7c15-e07`, lines 364–394: Musashi and Sasuke leave the shore by boat.

Exact semantic hashes for all 486 events and 370 states at sections 1–96 match
the Book VI checkpoint. The migration therefore extends rather than rewrites
the previously published narrative baseline.

## Identity and relationship policy

Reader-facing tests protect the Muka and Toriumi Benzō thresholds. Temporary
names remain in temporal identities only. Relationship records distinguish
earlier attachment or conflict from later reconciliation, chosen family and
the section-111 marital acknowledgment.

No civil or religious wedding ceremony is inferred. Matahachi is recorded as
the baby's social father, never as confirmed biological father. The conditional
Kojirō–Omitsu marriage cannot become a completed marriage after Kojirō's death.

## Geographic and historical context

All 43 Book VII locations remain coordinate-free. Seven progressive context
cards use official sources only for broad place or institutional context:

- Kōfukuji — https://www.kohfukuji.com/english/index.html
- Amanosan Kongōji — https://www.city.kawachinagano.lg.jp/soshiki/56/3718.html
- Mount Kōya — https://whc.unesco.org/en/list/1142/
- Sakai — https://www.city.sakai.lg.jp/foreign-language/english/visitors/about/ourcity/location.html
- Himeji — https://www.city.himeji.lg.jp/shisei/0000007248.html
- Kokura Castle — https://www.kitakyushu-museum.jp/exhibition/2019spring/
- Funashima/Ganryū-jima — https://shimonoseki.travel/shimonosekistory/ganryujima/

The Funashima source itself notes variant accounts. None of these sources is
used to authenticate dialogue, private houses, exact routes, duel choreography
or the novel's final destination.

## Visual certification status

The spoiler-filtered Pages artifact builds and validates at section 112. A
desktop/mobile Firefox certification was attempted with Firefox 154.0.1 using
both the screenshot path and WebDriver BiDi, including software-only and
WebRender-disabled launches. In this container Firefox stops before opening the
remote-debugging port and reports `RenderCompositorSWGL failed mapping default
framebuffer`; no screenshot or DOM-layout result was therefore claimed.

Mozilla tracks the same headless/WebGL limitation and notes the continuing gap
in graphics-test coverage: https://bugzilla.mozilla.org/show_bug.cgi?id=1375585
The manual or GPU-backed browser check remains an explicit follow-up.

## Acceptance gates

- production semantic validation at sections 1–112 with no warning;
- exact semantic hashes for all event and state records at sections 1–96;
- canonical staging validation for Books III–VII;
- frontend/static validation and the complete runtime/CLI test suite;
- spoiler-filtered Pages build and artifact validation;
- desktop and mobile visual certification at section 112 pending a browser
  environment with a working framebuffer;
- clean whitespace diff before the atomic commit.
