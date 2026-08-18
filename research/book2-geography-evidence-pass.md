# Book II — Geography Evidence Pass

Status: **STAGING — final precision audit completed; no production coordinates written in this pass**

External sources are used only to identify modern/historical geography, never to invent narrative facts.

## Confirmed modern identifications

### Kiyomizudera / Chawan-zaka

Kiyomizudera's official location is 1-294 Kiyomizu, Higashiyama-ku, Kyoto. The temple's own visitor guide explicitly identifies Chawan-zaka as one of the approaches to the temple grounds. This supports mapping `kiyomizudera` and `chawan_hill` as separate but directly related Kyoto locations.

### Daigo

Daigo-ji's official site places the complex at Daigo Higashi Ojicho, Fushimi Ward, Kyoto. This supports `daigo` as a modern geographic identification, but the novel's exact scene within the wider Daigo area still requires narrative-context handling rather than an invented exact point.

### Sarusawa Pond

The official Nara tourism guide identifies Sarusawa Pond at 49 Sarusawa, Ojicho, Nara, immediately below Kōfukuji. This is sufficient for a high-confidence modern point for `sarusawa_pond`.

### Tōdaiji / Nara

The official Nara tourism guide identifies Tōdaiji at 406-1 Zoshicho, Nara. This supports `todaiji_area` and, separately, `nara` as modern geographic anchors.

### Uji Bridge

JNTO identifies Uji Bridge in Uji City and places it across the Uji River. This supports `uji_bridge` and the associated Uji geographic context.

### Mampukuji

JNTO and Kyoto's official travel guide identify Manpukuji at Gokasho, Uji City, Kyoto Prefecture. This supports `mampukuji` as a high-confidence modern identification.

### Kizu River / Minamiyamashiro corridor

The Nara National Museum describes Minamiyamashiro as the mountain corridor between Kyoto and Nara and identifies the Kizu River as passing through the region. This supports the regional identification of `kizugawa_ferry`, but does not justify a precise ferry coordinate without additional narrative or historical evidence.

### Yagyū area / Yagyū Kaidō

Official Nara sources identify Yagyū-cho as the modern Yagyū area and document the Yagyū Kaidō as the historic route between Nara and Yagyū. This strongly supports the modern geographic anchor for `yagyu_valley`, `koyagyu_castle` context, and the Yagyū road network.

### Hannya Plain — promoted to A (area-level)

A previous audit treated `hannya_plain` as C because of the existence of an unrelated Toyama Hannya-no. The targeted historical-geographic pass resolved that ambiguity: Nara historical sources identify a distinct Hannya-no (般若野) in the Tōdaiji/Hannyaji vicinity and describe it as a former cremation/execution-ground area. This is the relevant historical-geographic context for the novel's Nara Hannya-no.

The correct production treatment is therefore **A as an area-level historical/geographic anchor**, not as a fabricated exact point. Hannya-no must not be replaced by Hannya-ji itself; the temple is a nearby historical anchor, not proof that the entire narrative plain equals the temple footprint.

## Important exclusions

- `mampukuji` is a real modern temple, but its current buildings post-date the novel's setting; the map must not imply that the present structure is identical to the 1600-era narrative site. The geographic identity is usable; the historical architectural equivalence is not asserted.
- `yagyu_castle`/Koyagyū Castle and modern Yagyū facilities must not be conflated. Modern surviving/ruin sites are geographic anchors, not proof that every narrative building occupies the exact modern footprint.
- `abura_hill` remains B. The novel explicitly uses the name, but targeted searches did not establish a unique modern Kyoto/Nara hill that can safely be equated with the literary Abura Hill. Do not use unrelated modern Aburayama locations.
- `sanjo_checkpoint` remains B. Sanjō/Sanjō Ōhashi is a secure Kyoto geographic anchor and historical road endpoint, but the exact narrative meaning of “checkpoint” is not independently established as a unique surviving point.
- `hongando` remains C until the exact narrative temple/structure identity is established; generic modern Honganji results are not sufficient evidence.
- `shinindo` remains C. The novel places it within the Yagyū castle/estate sequence, but no independent source securely establishes the exact historical building footprint corresponding to Yoshikawa's narrative Shin'indō.
- `yomogi`, `wataya`, the unnamed cheap inn, the unnamed sake shop, Sekishūsai's mountain house, and the Hannya observation knoll remain D narrative sites without defensible independent coordinates.
- `tsukigase_iga_back_road` remains a route, not a point marker.

## Current confidence classes

### A — safe modern geographic anchor

- Kiyomizudera
- Chawan-zaka / Chawan Hill
- Daigo
- Sarusawa Pond
- Tōdaiji
- Nara
- Uji Bridge
- Mampukuji
- Yagyū area
- **Hannya Plain (area-level historical anchor)**

### B — strong regional identification, exact narrative point still requires care

- Kizu River ferry
- Yagyū Valley
- Koyagyū Castle context
- Abura Hill
- Sanjō checkpoint

### C — plausible but not yet sufficient for production coordinates

- Hongandō
- Shin'indō

### D — intentionally unmapped narrative sites

- Yomogi
- Wataya
- Cheap inn
- Sake shop
- Sekishūsai's mountain house
- Hannya observation knoll
- Tsukigase–Iga back road as a point

## Final precision gate

The targeted final pass found no defensible basis for further promotion of the remaining B/C/D locations without making an unsupported identification. The only justified promotion was `hannya_plain`: C → A at **area level**.

No coordinate is promoted into production solely because a search result has a similar name. Modern identification must also be semantically compatible with the novel's location and scene. C/D uncertainty is therefore intentional and correct.
