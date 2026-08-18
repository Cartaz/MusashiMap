# Book II — Final Geographic Precision Audit

Status: **FINAL STAGING GATE — no production coordinate writes in this audit**

Date: 2026-08-18

## Purpose

This is the final precision pass for Book II geography. The objective is not to force every narrative place onto a modern map, but to determine the most precise defensible modern identification for every Book II location and to document why further precision is or is not justified.

External sources are used only for modern/historical geographic identification. They are not used to invent narrative facts.

## Final classifications

### A — safe modern geographic anchor / area

- `kiyomizudera` — official Kiyomizudera location; Chawan-zaka is explicitly an approach to the temple.
- `chawan_hill` — safe only when represented as Chawan-zaka/Chawan Hill associated with Kiyomizudera; do not imply a separate precisely surveyed hill if the narrative wording is broader.
- `daigo` — Daigo-ji/Daigo area is securely identified in Kyoto; exact scene within Daigo remains intentionally broader than a building point.
- `sarusawa_pond` — official Nara location.
- `todaiji_area` — Tōdaiji/Nara area is secure.
- `nara` — secure modern city anchor.
- `uji_bridge` — secure modern Uji Bridge/Uji River anchor.
- `mampukuji` — secure modern Manpukuji at Gokasho, Uji.
- `yagyu_area` — secure modern Yagyū-cho / Yagyū village anchor.
- `hannya_plain` — **promoted from C to A as an area-level historical/geographic anchor, not a point**. Independent historical-geographic sources identify a medieval `Hannya-no` / 般若野 in the Nara area east/northeast of Tōdaiji and distinguish it from the unrelated Hannya-no in Toyama. Historical Nara material places Hannya-no as a former cremation/execution-ground area associated with the northern/eastern Tōdaiji/Hannyaji vicinity. This supports an area polygon/anchor around the Nara Hannya-no context, but not a fabricated exact point for every scene in the plain.

### B — strong regional identification; exact narrative point should remain generalized

- `kizugawa_ferry` — Kizu River / Minamiyamashiro corridor securely identified; exact ferry crossing not independently established.
- `yagyu_valley` — secure as the Yagyū mountain/valley area; exact narrative trail point not independently established.
- `koyagyu_castle` — secure as the historical Koyagyū/Yagyū castle context, but modern remains cannot be treated as the exact 1600-era footprint without stronger archaeological/historical evidence.
- `abura_hill` — the novel explicitly places the relevant temple on Abura Hill, but searches do not establish a unique Kyoto/Nara modern hill that can be safely equated with the literary Abura Hill. Keep regional/relative placement only; do not use unrelated modern Aburayama locations.
- `sanjo_checkpoint` — Sanjō/ Sanjō Ōhashi is a secure Kyoto geographic anchor and a major historical road endpoint, but the specific narrative meaning of “checkpoint” is not independently established as a unique surviving point. Keep as a generalized Sanjō-area anchor.

### C — plausible narrative identification, but insufficient for production coordinates

- `hongando` — no sufficiently strong independent evidence identifies the exact narrative structure. Generic Honganji/Hongan-dō results are insufficient.
- `shinindo` — the novel clearly places the Shin'indō within the Yagyū castle/estate sequence, but no independent modern source securely identifies the exact historical building footprint corresponding to Yoshikawa's narrative Shin'indō. Keep as a narrative sub-location attached to `koyagyu_castle` rather than inventing coordinates.

### D — intentionally unmapped narrative sites / routes

- `yomogi`
- `wataya`
- unnamed cheap inn
- unnamed sake shop
- Sekishūsai's mountain house
- Hannya observation knoll
- `tsukigase_iga_back_road` as a point

These may remain linked to a parent area or route, but they must not receive fabricated point coordinates.

## Evidence that materially changed the previous audit

### Hannya Plain

The previous C classification was too conservative because it failed to distinguish the Nara historical place-name from the unrelated Toyama `Hannya-no`. Historical Nara material identifies Hannya-no as a place in the Nara/Tōdaiji vicinity and explicitly describes it as a former cremation/execution-ground area. A Nara reference source also identifies the Hannya-no area in relation to the Tōdaiji/Hannyaji northern district. This is sufficient to promote the location to an **area-level A anchor**, while still refusing a false exact point.

The novel itself repeatedly uses Hannya-no as the Nara location associated with Musashi's encounters. The book's chapter title is also `Hannya Plain`, corroborating that this is a deliberate geographic setting rather than an incidental name.

### Yagyū Kaidō / Yagyū area

Official Nara sources identify the Yagyū Kaidō as an ancient route running from central Nara to Yagyū through the valleys between Mt. Kasuga and Mt. Takamado. This supports the regional placement of Yagyū Valley and the road network, but not arbitrary point coordinates for unnamed sections of the narrative route.

## Explicit exclusions

1. Do **not** map Hannya Plain to Hannya-ji itself. Hannya-ji is a nearby historical anchor, not proof that the entire narrative plain equals the temple footprint.
2. Do **not** map Abura Hill to the modern Aburayama in Fukuoka or another similarly named hill.
3. Do **not** equate the modern Yagyū jinya/remaining facilities with every narrative building in the Koyagyū estate.
4. Do **not** assign Shin'indō its own coordinate unless an independent source establishes the historical structure.
5. Do **not** assign Hongandō to a modern Honganji solely by lexical similarity.
6. Do **not** turn a road/ferry/area into a point simply because a map service offers a nearby coordinate.

## Precision conclusion

After this targeted pass, the remaining C/D locations have no defensible path to a more precise production coordinate using the currently available evidence without making an unsupported identification. The correct action is therefore to preserve the uncertainty rather than manufacture precision.

The only substantive promotion in this pass is `hannya_plain`: **C → A (area-level anchor)**.

`abura_hill`, `sanjo_checkpoint`, `kizugawa_ferry`, `yagyu_valley`, and `koyagyu_castle` remain B because their regional identities are strong but the exact narrative point is not.

`hongando` and `shinindo` remain C.

No D location is promoted.

## Production gate

**PASS for geographic precision.**

Production may use the A anchors and generalized B anchors according to the project's existing A/B/C/D rules. C and D must remain non-coordinate narrative locations. No further geographic precision should be added unless a new primary, archaeological, historical-map, or comparably authoritative source is discovered.
