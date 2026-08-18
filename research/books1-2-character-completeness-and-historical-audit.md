# Books I–II — Character Completeness & Historical-Status Audit

Status: **research gate / production JSON untouched**

## 1. Coverage method

This pass was performed against the repository corpus under `data/source/book1/` and `data/source/book2/`, not against a secondary retelling.

- Book I: 8 chapter files.
- Book II: 11 chapter files.
- Total: 19 source files.
- A mechanical candidate scan was run across every source file.
- The first over-inclusive scan produced 327 proper-name candidates.
- A second pass removed obvious place/title/sentence-fragment false positives and added a dedicated scan for single-token names occurring in dialogue/reporting constructions, reducing the candidate index to 158 strings.
- Candidates were then reconciled against the existing Book I registry, Book I entity audit, Book II geography scrape, Book II reconciliation, and Book II event research.

The candidate index is intentionally retained as an audit trail in `research/generated-character-name-candidates.md`.

## 2. Canonical person list

The following list is the normalized person-level result. Place names, schools, clans, armies, generic titles, religious concepts, and unnamed groups are excluded from the person registry but remain searchable as contextual entities.

### Continuing / Book I core

| Canonical person | Existing ID / status | Historical status | Decision |
|---|---|---|---|
| Miyamoto Musashi / Shinmen Takezō | `musashi` | **historical** | Historical person; novel portrayal is literary. NDL authority identifies Miyamoto Musashi (1584–1645). |
| Hon'den Matahachi | `matahachi` | **unknown** | No sufficiently reliable independent identification established; do not invent fictional status. |
| Otsū | `otsu` | **unknown** | No reliable historical identification established. |
| Takuan Sōhō | `takuan` | **historical** | Historical Zen monk; active narrative character. |
| Sasaki Kojirō | `kojiro` | **historical / identity caveat** | Historical/traditional swordsman; exact biography is poorly documented and some details are legendary. |
| Obaba Osugi | `osugi` | **unknown** | No reliable independent identification established. |
| Jōtarō | `jotaro` | **unknown** | No reliable historical identification established. |
| Akemi | `akemi` | **unknown** | No reliable historical identification established. |
| Ogin | `ogin` | **unknown** | No reliable historical identification established. |

### Book I secondary / tertiary people

| Canonical person | Existing ID / candidate | Historical status | Decision |
|---|---|---|---|
| Okō | `oko` | **unknown** | Narrative character; no defensible historical identification. |
| Tsujikaze Temma | `temma` | **unknown** | Narrative character; no defensible historical identification. |
| Tsujikaze Kōhei | `kohei` | **unknown** | Narrative character; no defensible historical identification. |
| Heita | `heita` | **unknown** | Narrative character. |
| Fuchikawa Gonroku / Uncle Gon | `gonroku` | **unknown** | Narrative character; nickname and canonical name normalized. |
| Aoki Tanzaemon | `aoki_tanzaemon` | **unknown** | Named retainer in the novel; historical identification not established strongly enough. |
| Ikeda Terumasa | `lord_ikeda` | **historical** | Historical daimyo of Himeji; active narrative character. |
| Himeji garrison captain / Scraggly Beard | `himeji_captain` | **unknown** | Title-based narrative identity; no personal name invented. |
| Arima Kihei | new/contextual | **historical/traditional** | Historical/traditional swordsman associated with Musashi's early duel tradition; retain as contextual unless map relevance is established. |
| Shinmen Munisai | contextual | **historical / tradition-heavy** | Historical/traditional figure associated with Musashi's father; exact biographical details are disputed. |
| Akamatsu Masanori | contextual | **historical** | Historical figure in the Akamatsu line; narrative reference only. |
| Kobayakawa Hideaki | contextual | **historical** | Historical daimyo and Sekigahara participant. |
| Ishida Mitsunari | contextual | **historical** | Historical daimyo and Western Army commander. |
| Ukita Hideie | contextual | **historical** | Historical daimyo and Sekigahara participant. |
| Shimazu Yoshihiro | contextual | **historical** | Historical daimyo and Sekigahara participant. |
| Konishi Yukinaga | contextual | **historical** | Historical daimyo and Sekigahara participant. |
| Tokugawa Ieyasu | contextual | **historical** | Historical shogun. |
| Minamoto no Hiromasa | contextual | **historical / legendary tradition** | Historical Heian courtier and musician; novel invokes his legend. |
| Nagarjuna | contextual | **historical religious figure** | Ancient Buddhist philosopher/monk traditionally identified as Nāgārjuna; not a contemporary narrative character. |
| Sun-tzu | contextual | **historical / traditional** | Ancient Chinese military thinker traditionally identified as Sun Wu; use historical-context status, not narrative presence. |
| Cao Cao | contextual | **historical** | Historical Chinese ruler/general used in an analogy. |
| Chūgoku/Chinese historical exemplars referenced by the novel | contextual | **historical-context only** | Do not turn generic analogical references into map characters. |

### Book II — Yoshioka / Kyoto

| Canonical person | Candidate ID | Historical status | Decision |
|---|---|---|---|
| Yoshioka Kempō | `yoshioka_kempo` | **historical/traditional** | Historical/traditional founder of Yoshioka-ryū in Musashi traditions; novel biography should be treated as literary. |
| Yoshioka Seijūrō | `yoshioka_seijuro` | **historical/traditional, literary details** | Name is part of the historical/traditional Yoshioka–Musashi account, but novel characterization is not documentary. |
| Yoshioka Denshichirō | `yoshioka_denshichiro` | **historical/traditional, literary details** | Same rule as Seijūrō. Do not present novel events as independently proven history. |
| Gion Tōji | `gion_toji` | **unknown** | No sufficiently reliable independent historical identification found. |
| Ueda Ryōhei | `ueda_ryohei` | **unknown** | No sufficiently reliable independent historical identification found. |

### Book II — Hōzōin / Nara

| Canonical person | Candidate ID | Historical status | Decision |
|---|---|---|---|
| Kakuzenbō Hōzōin In'ei | `in_ei` / contextual | **historical** | British Museum identifies Kakuzenbō In'ei as a Japanese Buddhist priest and inventor/founder of the cross-head spear tradition. |
| Hōzōin Inshun | `inshun` | **historical** | Historical monk/martial artist, 1589–1648; Wikidata/Japan Search and historical references corroborate existence. |
| Nikkan | `nikkan` | **unknown / fictionalized candidate** | The novel's Nikkan is not safely identical to a documented historical person. Do not upgrade to historical merely because he is associated with In'ei. |
| Agon | `agon` | **fictionalized / unverified** | No reliable independent identification found; treat as literary unless stronger evidence appears. |
| Yamazoe Dampachi | `yamazoe_dampachi` | **unknown** | Named rōnin in the novel; no reliable independent identification found. |
| Otomo Banryū | `otomo_banryu` | **unknown** | Named rōnin in the novel; no reliable independent identification found. |
| Yasukawa Yasubei | `yasukawa_yasubei` | **unknown** | Named rōnin in the novel; no reliable independent identification found. |
| Okubo Nagayasu | contextual | **historical** | Historical Tokugawa official; Book II uses him as contextual government authority. |

### Book II — Yagyū / Koyagyū

| Canonical person | Candidate ID | Historical status | Decision |
|---|---|---|---|
| Yagyū Sekishūsai / Yagyū Muneyoshi / Munetoshi | `sekishusai` | **historical** | Same historical individual; 1527–1606. Yagyū Shinkage-ryū history explicitly identifies Sekishūsai/Muneyoshi. |
| Yagyū Munenori / Lord Munenori | `munenori` | **historical** | Historical Yagyū swordsman and Tokugawa instructor, 1571–1646. |
| Yagyū Hyōgonosuke / Hyōgo Toshitoshi | contextual | **historical** | Historical Yagyū family member; normalize aliases before production. |
| Yagyū Gorōzaemon | contextual | **unknown pending exact identity normalization** | Do not create a second Yagyū ID until the text's title/name is reconciled with the historical Yagyū genealogy. |
| Shōda Kizaemon | `shoda_kizaemon` | **historical** | Strong historical evidence: works on Yagyū swordsmanship identify him as a Yagyū retainer and swordsman. |
| Kimura Sukekurō | `kimura_sukekuro` | **historical** | Historical Yagyū retainer; secondary historical literature identifies him in the Yagyū senior-retainer tradition. |
| Debuchi Magobei | `debuchi_magobei` | **historical** | Historical Yagyū retainer; historical swordsmanship literature identifies Debuchi Heibei/Magobei in the Yagyū line. |
| Murata Yozō | `murata_yozo` | **historical** | Historical Yagyū retainer/stableman in the historical tradition. |
| Suzuki Ihaku | contextual | **historical** | Historical Shinkage-ryū figure associated with Kamiizumi's circle and the Yagyū tradition. |
| Hikida Bungorō | contextual | **historical** | Historical swordsman and Kamiizumi-associated figure. |
| Ban Dan'emon / Ban Naoyuki | contextual | **historical** | Historical samurai general, 1567–1615. The novel mentions him as a rōnin reference. |
| Sanada Yukimura | contextual | **historical** | Historical samurai, referenced as a fugitive after Sekigahara. |
| Sengoku Sōya | contextual | **unknown** | Named in the novel as a rōnin; no sufficiently strong independent identification established in this pass. |
| Katō Kiyomasa | contextual | **historical** | Historical daimyo/general. |
| Lord Kōizumi of Ise | contextual | **unknown pending exact identification** | The novel identifies him as Sekishūsai's teacher, but the exact historical identity behind the title/name is not secure enough for a historical classification. Keep unknown rather than inventing a person. |
| Lord Yorinori of Kishū | contextual | **unknown pending exact identification** | Title/name appears in the novel; exact historical identity is not secure enough for a production historical label. |
| Lord Gamō | contextual | **historical family reference / exact lord unresolved** | Do not map the generic lord title to a specific Gamō individual without further identity resolution. |
| Lord Katō of Higo | contextual | **historical family reference / exact individual unresolved** | Do not create a person ID from the title alone. |

### Other historical/contextual people named in Book II

| Person | Historical status | Decision |
|---|---|---|
| Oda Nobunaga | **historical** | Contextual historical figure. |
| Toyotomi Hideyoshi | **historical** | Contextual historical figure. |
| Toyotomi Hideyori | **historical** | Contextual historical figure. |
| Ashikaga Yoshiaki | **historical** | Historical shōgun; contextual reference. |
| Tsukahara Bokuden | **historical** | Historical swordsman. |
| Hō Ittōsai | **historical/traditional** | Historical/traditional swordsman; exact biography partly legendary. |
| Toda Seigen | **historical** | Historical swordsman; J-STAGE research documents the Toda-school tradition, while details of his biography remain partly traditional. |
| Ogasawara Genshinsai | **unknown pending exact identification** | Mentioned as a swordsman in the novel; exact historical identity not sufficiently verified here. |
| Kiichi Hōgen | **legendary / fictionalized tradition** | Legendary martial figure, not treated as a verified historical contemporary. |
| Empress Kōmyō | **historical** | Historical empress; Book II uses her in historical context. |
| Prince Siddhartha / Buddha | **religious-historical/traditional** | Religious founder/traditional historical figure; never a narrative character. |
| Lin Ho-ching | **historical** | Historical Chinese poet referenced as an ancestry/cultural comparison. |

## 3. Critical identity normalizations

The following are the highest-risk duplicate identities and must be resolved before production:

- `Yagyū Muneyoshi` = `Yagyū Munetoshi` = `Yagyū Sekishūsai`.
- `Lord Munenori` = `Yagyū Munenori`.
- `Hyōgo Toshitoshi` refers to the Yagyū historical line and must not receive an accidental duplicate of Munenori.
- `Kakuzenbō In'ei` = `Hōzōin In'ei`.
- `Shimmen Takezō` / `Shimmen Miyamoto Musashi Masana` / `Miyamoto Musashi` are identity/name-stage variants of the protagonist, not separate people.
- `Lord Ikeda`, `Lord Terumasa`, and `Ikeda Terumasa` are the same person.
- `Uncle Gon` = `Fuchikawa Gonroku`.
- `Scraggly Beard` is the narrative nickname for the Himeji garrison captain in the current production model; do not invent a personal name.

## 4. What was NOT promoted to a person

The audit deliberately excludes:

- Yoshioka School / Yagyū School / Hōzōin School as individual people;
- Tokugawa/Eastern/Western Army as people;
- unnamed Yoshioka students;
- unnamed Hōzōin priests;
- unnamed rōnin groups;
- five unnamed government officials;
- generic titles such as Young Master, Old Master, Lord Yagyū when the exact individual is not established;
- locations accidentally captured by the name scanner;
- chapter titles and sentence fragments.

## 5. Historical-status rule

`historical` means there is positive evidence that the person existed as an identifiable historical individual.

`historical/traditional` means the person is rooted in historical/traditional sources but the available biography is substantially legendary or disputed.

`fictionalized` means the literary character is best understood as a fictional construction built around a historical/traditional setting or name.

`unknown` is a deliberate result. It must **not** be silently converted to `fictional` merely because no web result was found.

## 6. Evidence used for the historical pass

Primary narrative identification remains the repository corpus. External sources were used only for historical-status verification, as required by project rules.

Key evidence:

- National Diet Library authority record for Miyamoto Musashi: https://id.ndl.go.jp/auth/ndlna/00270885
- J-STAGE study of the Toda school tradition: https://www.jstage.jst.go.jp/article/budo1968/19/3/19_1/_article/-char/en
- British Museum record for Kakuzenbō In'ei: https://www.britishmuseum.org/collection/term/AUTH233883
- Historical Yagyū lineage/history: https://www.yagyu-ryu.com/the-ryu/history
- Historical Yagyū Munetoshi material: https://en.wikipedia.org/wiki/Yagy%C5%AB_Munetoshi
- Hōzōin Inshun historical record: https://en.wikipedia.org/wiki/H%C5%8Dz%C5%8Din_Inshun
- National Diet Library Musashi bibliography and historical-material references: https://ndlsearch.ndl.go.jp/
- Ban Naoyuki / Ban Dan'emon historical identification: https://en.wikipedia.org/wiki/Ban_Naoyuki

## 7. Final gate

**Name coverage: PASS for Books I–II source corpus after mechanical candidate scan + reconciliation.**

**Historical classification: CLOSED only where evidence is positive; unresolved cases remain `unknown`.**

This is intentional: a claim of 100% certainty that an obscure literary name is either historical or fictional would be less rigorous than preserving an evidence-based `unknown` state.

Production JSON must not be modified from this document alone. The next migration pass must use this normalized person list and identity map as its sole character-name reconciliation baseline.
