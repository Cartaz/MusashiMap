# MusashiMap — Roadmap

> Documento operativo principale. Aggiornare questo file a ogni milestone significativa.

## 1. Obiettivo

MusashiMap è un companion geografico per la lettura di *Musashi* di Eiji Yoshikawa. La mappa rappresenta prima di tutto il romanzo: deve aiutare il lettore a capire **dove sono i personaggi, quali luoghi attraversano e quali eventi stanno accadendo**, senza spoiler.

Non è un GIS storico, un atlante accademico o un'enciclopedia completa.

## 2. Fonte narrativa

Per ogni informazione narrativa la fonte primaria è esclusivamente la trascrizione Internet Archive usata dal progetto:

`https://archive.org/stream/EijiYoshikawaMusashi/Eiji%20Yoshikawa%20-%20Musashi_djvu.txt`

Fonti esterne sono ammesse soltanto per identificazione geografica moderna, coordinate, verifica topografica e contesto storico del micro-wiki.

L'indice Luni coincide con la struttura già adottata dal progetto: **non va rimappato né modificato**.

## 3. Stato attuale

### Book I — audit narrativo
**COMPLETATO / FONDATO SULLA FONTE**

Gli otto capitoli del Libro I sono stati verificati direttamente contro `data/source/musashi-book1`, prima singolarmente e poi a coppie consecutive (`1-2`, `2-3`, … `7-8`).

Sono stati corretti in particolare:

- presenza fisica vs semplice menzione;
- partenze e destinazioni intenzionali vs arrivi confermati;
- continuità Matahachi/Akemi/Oko tra cap. 2 e 3;
- stato di Temma come morto dal capitolo precedente;
- posizione e trasferimento di Ogin;
- distinzione tra posizione fisica e informazione riferita;
- transizione Shinmen Takezō → Miyamoto Musashi nel cap. 8;
- permanenza triennale di Musashi a Himeji Castle.

### Modello dati narrativo
**COMPLETATO**

Il modello distingue ora:

- `current` — presenza fisica corrente;
- `contextual` — posizione narrativa significativa da mantenere visibile anche dopo la partenza;
- `last_known` — ultima posizione nota utile alla continuità;
- `unmapped` — nessuna posizione cartografabile disponibile.

La presenza fisica **non determina più automaticamente la visibilità**.

### Continuità cartografica
**COMPLETATO / IN VALIDAZIONE**

La mappa separa:

1. stato narrativo;
2. visibilità cartografica;
3. focus della mappa;
4. storia geografica significativa del capitolo.

I marker contestuali non spostano più automaticamente il focus: il focus viene determinato dagli eventi salienti del capitolo.

### Posizioni non cartografabili
**COMPLETATO**

Matahachi e Akemi, dopo la partenza verso una destinazione non conosciuta, non vengono falsamente lasciati nella vecchia posizione. Il sistema mostra il popup solo quando necessario e mantiene il resto della UI pulito.

### Marker contestuali/residuali
**COMPLETATO**

I marker residuali hanno la stessa struttura visiva dei marker normali, con una sola differenza:

- normale: `colore → bianco → nero`;
- residuale: `colore → bianco → grigio chiaro`.

Sono completamente opachi.

### Audit geografico
**COMPLETATO / SELETTIVO**

È stata adottata la procedura:

- corrispondenza geografica ad alta confidence → coordinate moderne;
- luogo esplicitamente coincidente con un paese/località → posizione del paese/località;
- abitazione/casa non identificabile con precisione → area approssimativa controllata;
- luoghi come Casa Honiden/Shimmen → punto casuale entro il raggio approvato dell'area di riferimento;
- niente falsa precisione.

Le coordinate `approximate_area` devono conservare un raggio approvato, normalmente entro 1 km quando questa è la regola stabilita per quel luogo.

### Micro-wiki
**COMPLETATO / BOUNDED PASS CHIUSO**

Il micro-wiki usa il romanzo per trigger e contesto di lettura; le fonti esterne servono soltanto alla spiegazione storica sintetica. Le informazioni sono protette dal limite di lettura.

### Basemap
**IMPLEMENTATO / VERIFICA VISIVA DA COMPLETARE**

La soluzione corrente usa un basemap vettoriale MapLibre/OpenFreeMap/OpenMapTiles integrato nell'ambiente Leaflet, con preferenza per campi romanizzati giapponesi (`name:ja-Latn`, `name:ja_rm`) invece dei Kanji.

## 4. Lavoro in corso

### A. Validazione canonica Book I
**PROSSIMO PASSO**

Eseguire un controllo integrato dei dataset dopo la separazione tra stato narrativo e stato cartografico:

- character states;
- location states;
- events;
- transitions;
- entity index;
- renderer.

L'obiettivo è trovare contraddizioni residue, non ripetere lo scraping già chiuso.

### B. Integrazione reader-progress → map
**IN PROGRESS**

Rendere il reader-progress l'unica fonte autorevole per tutte le decisioni di visibilità della mappa. Eliminare eventuali listener o condizioni duplicate.

### C. Verifica capitolo-per-capitolo
**DA FARE**

Testare visivamente ogni capitolo del Libro I, verificando:

- personaggi;
- luoghi;
- marker correnti e residuali;
- focus;
- eventi;
- popup non cartografabili;
- wiki;
- transizioni tra capitoli.

### D. Basemap e label
**DA CHIUDERE CON TEST REALE**

Verificare su browser reale, preferibilmente mobile:

- rendering del basemap;
- densità geografica;
- romanizzazione dei toponimi;
- assenza di Kanji indesiderati;
- marker e overlay;
- performance e layout.

## 5. Prossime milestone

1. **Audit integrato Book I** — dati + renderer.
2. **Test visuale completo capitoli 1–8.**
3. **Chiusura reader-progress/map integration.**
4. **Chiusura verifica basemap e label romanizzate.**
5. **Polish UX/UI** senza alterare la semantica narrativa.
6. **Preparazione Book II** soltanto dopo aver congelato il modello Book I.

## 6. Regole permanenti per i futuri libri

1. Partire sempre dal testo sorgente del libro.
2. Analizzare capitolo per capitolo e poi a coppie consecutive.
3. Non confondere presenza fisica, menzione e ultima posizione nota.
4. Non cancellare una posizione dalla visualizzazione soltanto perché il personaggio ha lasciato fisicamente quel luogo.
5. Non mostrare invece una posizione vecchia come se fosse quella corrente.
6. Separare sempre `narrative_state` da `map_state`.
7. Separare sempre `visibility` da `focus`.
8. Distinguere arrivo confermato, destinazione intenzionale e direzione.
9. Preservare l'incertezza geografica invece di inventare precisione.
10. Usare fonti esterne soltanto per la parte geografica/storica consentita.
11. Non usare informazioni future per risolvere uno stato passato.
12. Il micro-wiki deve rispettare il firewall spoiler.
13. I marker contestuali devono essere secondari visivamente ma non trasparenti.
14. Il popup `unmapped` va usato solo quando non esiste alcuna posizione utile da mostrare.
15. L'indice Luni è già corretto e non deve essere modificato.

## 7. Stato sintetico

```text
PROGETTO / ARCHITETTURA                 DONE
FONTE PRIMARIA BOOK I                  DONE
SCRAPING BOOK I                        DONE
AUDIT CAPITOLO-PER-CAPITOLO            DONE
AUDIT A COPPIE                         DONE
MODELLO NARRATIVO                      DONE
MODELLO MAP STATE                      DONE
CONTINUITÀ CARTOGRAFICA                DONE
AUDIT GEOGRAFICO                       DONE / SELETTIVO
MICRO-WIKI                             DONE
POPUP NON CARTOGRAFABILI               DONE
MARKER CORRENTI/RESIDUALI              DONE
MAPPA LEAFLET                          DONE
BASEMAP VETTORIALE                     IMPLEMENTED
LABEL ROMANIZZATE                      IMPLEMENTED / VERIFY
READER PROGRESS                        DONE / INTEGRATING
AUDIT INTEGRATO RENDERER + DATI        NEXT
TEST VISIVO CAPITOLI 1–8               NEXT
POLISH UI                              NEXT
BOOK II                                DOPO IL FREEZE DEL BOOK I
```
