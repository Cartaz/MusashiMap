# Audit geolocalizzazione moderna — 21 novembre 2026

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

Il controllo supplementare di questo branch ha ricontrollato tre lacune di eventi contro il testo locale. Le righe citate sono riferimenti al corpus privato ignorato da Git; il testo non viene copiato in questo report.

| Capitolo | Righe fonte | Esito verificato |
|---|---|---|
| `b5c12` | 64–70 | Osugi e il gruppo di Yajibei proseguono il rientro in barca dopo che Kojirō scende al fossato di Kyōbashi. Aggiunto un evento di percorso; sbarco e ultimo tratto restano non localizzati. |
| `b5c20` | 268–285 | Otsū e Hyōgo scendono dalla collina di Azabu nella valle di Higakubo verso la sede Yagyū. Aggiunto il percorso fisico separato dal successivo ricordo del salvataggio. |
| `b7c1` | 37–78 | Hyōgo è fisicamente a Koyagyū, ancora raffreddato, e chiede a Otsū di accogliere Inshun; lei si scusa per la sua assenza e cita il rapporto urgente per Edo. L'avvertimento di Inshun viene affidato a Sukekurō nel testo e resta nell'evento separato `b7c1-e01`. Aggiunto l'evento di presenza e delega. Non viene inventata la rotta fuori scena dal precedente viaggio di Hyōgo. |

I tre avvisi di transizione di posizione emessi dal validatore prima di queste correzioni sono rientrati; la verifica corrente non produce avvisi. Gli eventi sono stati riportati anche nei manifest di produzione dei Libri V e VII e tradotti in italiano.

## Coordinate e precisione

Il database contiene **254** luoghi: **35** con coordinate e **219** senza. Ho ricontrollato la classe di precisione e confidenza di tutti i 35 punti registrati; il [rapporto geografico per libro](geography-book-audit.md) mantiene per ciascun luogo le coordinate, i capitoli, il verdetto e le fonti istituzionali puntuali. Le coordinate numeriche non sono state spostate in questa revisione.

| Precisione registrata | Conteggio | ID |
|---|---:|---|
| `exact` | 1 | `himeji_castle` |
| `modern_match` | 6 | `miyamoto`, `shingu`, `kiyomizudera`, `uji_bridge`, `sarusawa_pond`, `sumiyoshi_taisha` |
| `representative_point` | 10 | `sekigahara`, `tarui`, `aida_river`, `sayo_district`, `chawan_hill`, `sanjo_checkpoint`, `kizugawa_ferry`, `nara`, `yagyu_valley`, `koyagyu_castle` |
| `area` | 4 | `mount_ibuki_area`, `himeji_area`, `daigo`, `todaiji_area` |
| `approximate_area` | 12 | `oko_akemi_house`, `shippoji`, `ogin_house`, `honiden_house`, `sanumo_mountains`, `itadori_pasture`, `old_cryptomeria_shippoji`, `nakayama_pass`, `mikazuki_teahouse`, `hinagura`, `hinagura_stockade`, `hannya_plain` |
| `modern_literary_reference` | 2 | `hanada_bridge`, `mampukuji` |
| **Totale** | **35** | |

Ho corretto due punti che il testo e le fonti sostengono come aree, non come siti puntuali:

- `sekigahara`: il romanzo colloca l'apertura nella regione del campo di battaglia. Il punto resta lo stesso, ma ora è esplicitamente un `representative_point`.
- `tarui`: nel capitolo 1 è una direzione di viaggio e l'arrivo non è stabilito. Il punto rappresenta il comune moderno, non il luogo esatto della scena; ora è `representative_point`.

In entrambi i casi il livello di confidenza è `high`, la nota visibile spiega il limite e il renderer mostra l'indicazione d'area. Le altre coordinate mantengono la classificazione già documentata: una posizione puntuale per il castello moderno di Himeji, corrispondenze moderne, ancore rappresentative, aree, posizioni approssimative dichiarate e due riferimenti letterari moderni separati dalla continuità storica. Tutti i 219 luoghi senza posizione restano senza coordinate.

Il dataset esplicita ora anche un limite di provenienza: le coppie sono `[latitudine, longitudine]` in gradi decimali, ma non hanno un CRS né un'epoca di rilievo registrati per singolo punto. Sono ancore cartografiche, non misure topografiche; non vanno trasformate o presentate con precisione superiore a quella sostenuta dalla scheda e dalla sua fonte.

## Ricerca sul riferimento geodetico giapponese

Il Geospatial Information Authority of Japan (GSI) ha pubblicato JGD2024 dal **1 aprile 2025** nell'ambito dell'aggiornamento del riferimento altimetrico. Il nome del riferimento è passato da JGD2011 a JGD2024, mentre le coordinate orizzontali (latitudine, longitudine e coordinate piane) sono state mantenute. Per i punti 2D attuali non serve quindi una trasformazione orizzontale causata soltanto dall'aggiornamento del nome. Il servizio GSI di mappe a tasselli continua a descrivere il proprio riferimento orizzontale giapponese come JGD2011; la pagina GSI sul datum chiarisce che questa posizione orizzontale è la stessa mantenuta in JGD2024. [GSI — datum giapponesi](https://www.gsi.go.jp/sokuchikijun/datum-main.html), [GSI — geodetic survey](https://web1.gsi.go.jp/ENGLISH/page_e30030.html), [GSI — map tiles](https://maps.gsi.go.jp/development/siyou.html).

Il Gazetteer of Japan disponibile sul sito GSI è l'edizione aggiornata nel 2021, accompagnata da una errata del **24 marzo 2026**. Registra nome giapponese, traslitterazione, latitudine, longitudine e tipo geografico. La documentazione spiega che le coordinate derivano principalmente dalla posizione delle etichette sulle carte 1:1.000.000 e, per i fiumi, dalla foce o dal tratto terminale. È quindi una fonte ufficiale utile per normalizzare nomi e controllare la collocazione generale, ma non per ricostruire la casa di un personaggio, una scena o un percorso preciso. Non l'ho usato per sostituire coordinate puntuali o inventare siti storici. [GSI — Gazetteer of Japan e errata](https://www.gsi.go.jp/ENGLISH/pape_e300284.html), [PDF 2021](https://www.gsi.go.jp/common/000238259.pdf), [errata 2026](https://www.gsi.go.jp/common/000240221.pdf).

## Esito

- Le 35 coordinate sono rimaste numericamente invariate; due etichette `exact` troppo forti sono state degradate a `representative_point`.
- Il numero di punti `exact` scende da 3 a 1; i punti `representative_point` salgono da 8 a 10.
- Nessuna casa o residenza privata è stata geolocalizzata usando soltanto un toponimo moderno.
- Mampukuji continua a essere etichettato come riferimento moderno anacronistico: le fonti ufficiali datano al 1661 la fondazione del tempio Ōbaku di Uji, dopo l'epoca narrata.
- Hanada Bridge resta un riferimento letterario moderno, non una prova di continuità storica.
- I tre eventi narrativi aggiunti sono stati convalidati insieme ai dati e ai manifest di produzione; i sette libri restano tutti pubblicati e coerenti nel validatore.
