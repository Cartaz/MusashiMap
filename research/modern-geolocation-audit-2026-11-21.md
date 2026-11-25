# Audit geolocalizzazione moderna — aggiornato al 25 novembre 2026

## Ambito e base narrativa

Il commit `8f5857b` ha registrato la rilettura completa dei 112 capitoli dei sette libri: 379 rilievi confrontati col testo, 292 confermati, 38 confermati dopo aver corretto la proposta iniziale e 49 respinti. Questo copre la trascrizione locale disponibile; non certifica la fedeltà all'edizione originale, perché il master di confronto non è disponibile. Il riesame indipendente documenta inoltre la duplicazione di un passaggio in `b2c5` e alcuni artefatti di trascrizione ancora da collazionare.

| Libro | Capitoli riletti |
|---|---:|
| I — Earth | 8 |
| II — Water | 11 |
| III — Fire | 13 |
| IV — Wind | 21 |
| V — Sky | 26 |
| VI — Sun and Moon | 17 |
| VII — The Perfect Light | 16 |
| **Totale** | **112** |

Il controllo supplementare di questo branch ha ricontrollato tre lacune di eventi del Libro V contro il testo locale e ha verificato separatamente la scena del capitolo `b7c1`. Le righe citate sono riferimenti al corpus privato ignorato da Git; il testo non viene copiato in questo report.

| Capitolo | Righe fonte | Esito verificato |
|---|---|---|
| `b5c11` | 297–313 | Sulla riva presso Sensōji, Yajibei invita Kojirō sulla barca; il capitolo termina prima della partenza, quindi non gli attribuisco la rotta di ritorno. |
| `b5c12` | 64–70 | La barca raggiunge il fossato di Kyōbashi e Kojirō sbarca; gli altri quattro continuano verso casa, ma il testo non localizza il loro sbarco o l'ultimo tratto. |
| `b5c20` | 263–285 | Iori resta nascosto sul pendio di Azabu mentre Otsū e Hyōgo scendono nella valle di Higakubo. La valle è registrata come luogo narrativo senza coordinate; la sede Yagyū è sull'altro versante e l'arrivo non è mostrato. |
| `b7c1` | 37–81 | Sukekurō attribuisce a Hyōgo un raffreddore; Otsū dice che Hyōgo sta preparando un rapporto per Edo e il narratore segnala la discrepanza. Otsū serve tè e dolci a Inshun e ai due giovani sacerdoti che lo accompagnano. |

La transizione di Otsū e Hyōgo dalla collina di Azabu alla valle di Higakubo è collegata all'evento di discesa; la residenza resta una posizione distinta e non attestata in questo capitolo. Gli eventi sono riportati nei manifest di produzione dei Libri V e VII e tradotti in italiano.

## Coordinate e precisione

Il database contiene **262** luoghi: **37** con coordinate e **225** senza. Ho ricontrollato precisione e confidenza di tutti i 37 punti registrati; il [rapporto geografico per libro](geography-book-audit.md) mantiene per ciascun luogo le coordinate, i capitoli, il verdetto e le fonti istituzionali puntuali. Le coordinate già presenti non sono state spostate; sono state aggiunte due ancore moderne per Kasagidera e Jōruriji. La valle di Higakubo e il fossato di Kyōbashi restano senza coordinate.

| Precisione registrata | Conteggio | ID |
|---|---:|---|
| `exact` | 1 | `himeji_castle` |
| `modern_match` | 7 | `miyamoto`, `shingu`, `kiyomizudera`, `uji_bridge`, `sarusawa_pond`, `sumiyoshi_taisha`, `joruriji` |
| `representative_point` | 11 | `sekigahara`, `tarui`, `aida_river`, `sayo_district`, `chawan_hill`, `sanjo_checkpoint`, `kizugawa_ferry`, `nara`, `yagyu_valley`, `koyagyu_castle`, `kasagidera` |
| `area` | 4 | `mount_ibuki_area`, `himeji_area`, `daigo`, `todaiji_area` |
| `approximate_area` | 12 | `oko_akemi_house`, `shippoji`, `ogin_house`, `honiden_house`, `sanumo_mountains`, `itadori_pasture`, `old_cryptomeria_shippoji`, `nakayama_pass`, `mikazuki_teahouse`, `hinagura`, `hinagura_stockade`, `hannya_plain` |
| `modern_literary_reference` | 2 | `hanada_bridge`, `mampukuji` |
| **Totale** | **37** | |

Ho corretto due punti che il testo e le fonti sostengono come aree, non come siti puntuali:

- `sekigahara`: il romanzo colloca l'apertura nella regione del campo di battaglia. Il punto resta lo stesso, ma ora è esplicitamente un `representative_point`.
- `tarui`: nel capitolo 1 è una direzione di viaggio e l'arrivo non è stabilito. Il punto rappresenta il comune moderno, non il luogo esatto della scena; ora è `representative_point`.

In entrambi i casi il livello di confidenza è `high`, la nota visibile spiega il limite e il renderer mostra l'indicazione d'area. Ho inoltre portato da `exact` a `high` la confidenza geografica di `mount_ibuki_area`, `himeji_area`, `daigo` e `todaiji_area`: l'area moderna è identificata con sicurezza, ma le coordinate sono ancore d'area e non individuano un punto preciso della scena narrativa. La precisione resta `area` e le coordinate non sono cambiate. Restano invariate le altre classificazioni documentate: posizione puntuale per il castello moderno di Himeji, corrispondenze moderne, altre ancore rappresentative, posizioni approssimative dichiarate e due riferimenti letterari moderni separati dalla continuità storica. Tutti i 225 luoghi senza posizione restano senza coordinate.

Le due nuove ancore moderne hanno ambiti diversi: `kasagidera` usa un punto rappresentativo ricavato dalla mappa ufficiale del sito, mentre `joruriji` usa la posizione moderna pubblicata da Japan Heritage. Nessuno dei due punti ricostruisce il tragitto storico o la posizione precisa di una scena.

Il dataset esplicita ora anche un limite di provenienza: le coppie sono `[latitudine, longitudine]` in gradi decimali, ma non hanno un CRS né un'epoca di rilievo registrati per singolo punto. Sono ancore cartografiche, non misure topografiche; non vanno trasformate o presentate con precisione superiore a quella sostenuta dalla scheda e dalla sua fonte.

## Ricerca sul riferimento geodetico giapponese

Il Geospatial Information Authority of Japan (GSI) ha pubblicato JGD2024 dal **1 aprile 2025** nell'ambito dell'aggiornamento del riferimento altimetrico. Il nome del riferimento è passato da JGD2011 a JGD2024, mentre le coordinate orizzontali (latitudine, longitudine e coordinate piane) sono state mantenute. Per i punti 2D attuali non serve quindi una trasformazione orizzontale causata soltanto dall'aggiornamento del nome. Il servizio GSI di mappe a tasselli continua a descrivere il proprio riferimento orizzontale giapponese come JGD2011; la pagina GSI sul datum chiarisce che questa posizione orizzontale è la stessa mantenuta in JGD2024. [GSI — datum giapponesi](https://www.gsi.go.jp/sokuchikijun/datum-main.html), [GSI — geodetic survey](https://web1.gsi.go.jp/ENGLISH/page_e30030.html), [GSI — map tiles](https://maps.gsi.go.jp/development/siyou.html).

Il Gazetteer of Japan disponibile sul sito GSI è l'edizione aggiornata nel 2021, accompagnata da una errata del **24 marzo 2026**. Registra nome giapponese, traslitterazione, latitudine, longitudine e tipo geografico. La documentazione spiega che le coordinate derivano principalmente dalla posizione delle etichette sulle carte 1:1.000.000 e, per i fiumi, dalla foce o dal tratto terminale. È quindi una fonte ufficiale utile per normalizzare nomi e controllare la collocazione generale, ma non per ricostruire la casa di un personaggio, una scena o un percorso preciso. Non l'ho usato per sostituire coordinate puntuali o inventare siti storici. [GSI — Gazetteer of Japan e errata](https://www.gsi.go.jp/ENGLISH/pape_e300284.html), [PDF 2021](https://www.gsi.go.jp/common/000238295.pdf), [errata 2026](https://www.gsi.go.jp/common/000240221.pdf).

## Esito

- Le 35 coordinate preesistenti sono rimaste numericamente invariate; due ancore moderne sono state aggiunte e due etichette `exact` troppo forti sono state degradate a `representative_point`.
- Il numero di punti `exact` scende da 3 a 1; i punti `representative_point` salgono da 8 a 11, includendo la nuova ancora di Kasagidera.
- Nessuna casa o residenza privata è stata geolocalizzata usando soltanto un toponimo moderno.
- Mampukuji continua a essere etichettato come riferimento moderno anacronistico: le fonti ufficiali datano al 1661 la fondazione del tempio Ōbaku di Uji, dopo l'epoca narrata.
- Hanada Bridge resta un riferimento letterario moderno, non una prova di continuità storica.
- Le correzioni di eventi, stati e collocazioni nei sette libri sono state convalidate insieme ai dati e ai manifest di produzione; tutti i 112 capitoli risultano pubblicati e coerenti nei validatori.
