# MusashiMap — Workflow di ricerca e aggiornamento dati

Questo documento è il workflow operativo di riferimento per estendere MusashiMap ai libri successivi. Va seguito in ordine, salvo che un audit evidenzi la necessità di tornare a uno step precedente.

## 0. Principi vincolanti

- La fonte narrativa di lavoro è il corpus canonico già adottato dal progetto.
- Si lavora un libro alla volta.
- Il testo viene separato in file per capitolo prima dello scraping analitico.
- Nessuna informazione proveniente da capitoli futuri deve entrare nello stato visibile a un lettore che non li ha ancora raggiunti.
- Distinguere sempre tra: fatto esplicito nel testo, inferenza ragionevole e informazione incerta.
- Non confondere precisione cartografica con certezza storica: una coordinata può essere utile alla mappa senza significare che il punto sia l'ubicazione storica esatta.
- Mantenere i nomi visualizzati in romaji/forma leggibile; eventuali suffissi amministrativi dei luoghi (`-to`, `-shi`, ecc.) vanno normalizzati quando non fanno parte del nome utile alla mappa.

## 1. Preparazione della fonte

1. Procurarsi il corpus con testo completo affidabile.
2. Verificare che l'estrazione abbia testo sensato e non pagine vuote.
3. Individuare l'indice del romanzo e i confini dei libri.
4. Separare il libro in file:

```text
data/source/musashi-index.txt
data/source/musashi-bookN/chapter1-name.txt
data/source/musashi-bookN/chapter2-name.txt
...
```

5. Verificare che ogni capitolo sia presente, non vuoto e inizi/termini nel punto corretto.
6. Non conservare nel repository PDF o duplicati del romanzo quando non sono necessari al progetto.

## 2. Passata A — scraping capitolo per capitolo

Per ogni capitolo, senza caricare inutilmente l'intero libro nel contesto:

1. Identificare tutti i personaggi nominati o chiaramente presenti.
2. Identificare i luoghi nominati o chiaramente utilizzati.
3. Identificare gli eventi narrativamente rilevanti.
4. Identificare incontri, separazioni, arrivi, partenze e spostamenti.
5. Identificare personaggi/fatti storici o opere citate che meritano una voce di contesto.
6. Registrare eventuali alias, titoli, soprannomi e variazioni del nome.
7. Registrare l'incertezza quando il testo non permette una conclusione certa.
8. Non trasformare una semplice menzione in presenza fisica o movimento.
9. Per ogni luogo registrare anche il livello di identificabilità geografica: identificazione esatta, corrispondenza moderna forte, area/insediamento, sito narrativo non identificato, oppure nessun ancoraggio difendibile.

L'output di questa passata deve essere tracciabile al capitolo sorgente.

## 3. Passata B — confronto tra capitoli

Dopo aver completato tutti i capitoli del libro:

1. Confrontare le liste dei nomi capitolo per capitolo.
2. Unificare le identità duplicate o con grafie/alias diversi.
3. Determinare in quali capitoli ogni entità compare.
4. Distinguere presenza, menzione, presenza fisica e partecipazione a un evento.
5. Ricostruire gli spostamenti usando il capitolo precedente come contesto, senza creare salti non supportati.
6. Controllare le transizioni di stato dei personaggi e dei luoghi.
7. Individuare contraddizioni, buchi e dati prematuri.

Questa passata è fondamentale: il database finale non deve essere la semplice somma degli scraping indipendenti.

## 4. Audit geografico e identificazione dei luoghi

L'audit geografico viene eseguito **dopo** la normalizzazione narrativa e prima del `PASS` del libro. La procedura è la seguente.

### 4.1 Gerarchia di identificazione

Ogni luogo deve essere assegnato al miglior livello di precisione realmente sostenibile:

| Classe | Quando usarla | Coordinate | Confidence |
|---|---|---|---|
| `exact` | luogo moderno/storico identificabile direttamente | punto reale | `exact` |
| `modern_match` | corrispondenza moderna forte con il luogo narrativo | coordinate del luogo moderno | `high` |
| `area` / `representative_point` | regione, distretto, valle, montagna o altro elemento non puntuale | punto rappresentativo | `medium`–`high` |
| `approximate_area` | sito narrativo non identificabile esattamente, ma ancorato con buona sicurezza a un'area moderna | punto approssimativo | `medium`–`possible` |
| `null` | non esiste un'area di riferimento difendibile | nessuna coordinata | `pending` |

### 4.2 Corrispondenza moderna forte

Se il nome narrativo corrisponde con alta confidence a un luogo moderno, usare il luogo moderno come ancora geografica anche quando non è possibile dimostrare che il punto rappresenti esattamente il sito storico.

Esempio concettuale:

```json
{
  "coordinates": [lat, lon],
  "coordinate_precision": "modern_match",
  "geographic_confidence": "high",
  "historical_match": "strong"
}
```

La nota della mappa deve chiarire che si tratta di una corrispondenza moderna, non di una pretesa precisione archeologica.

### 4.3 Luoghi che hanno il nome di un paese/città/distretto

Quando il testo identifica un insediamento o un'area amministrativa senza fornire una casa, una strada o un sito specifico, usare il punto rappresentativo dell'insediamento/area moderna.

Non creare un falso punto preciso. La precisione deve restare `area` o `representative_point`.

### 4.4 Case, locande, teahouse e altri siti narrativi non identificabili

Se il sito specifico non è stato identificato, ma il romanzo lo colloca chiaramente dentro un'area moderna identificabile, **non lasciare automaticamente `null`**.

Usare invece un punto approssimativo entro un raggio massimo di **1 km dall'ancora geografica di riferimento**, purché tale area sia realmente sostenuta dalle fonti/testo.

Il punto deve essere **deterministico**, non casuale a ogni caricamento. Deve quindi essere generato una volta e salvato nel dataset, oppure derivato con un algoritmo stabile dall'ID del luogo.

Campi minimi:

```json
{
  "coordinates": [lat, lon],
  "coordinate_precision": "approximate_area",
  "geographic_confidence": "medium",
  "historical_match": "unknown",
  "map_note": "Exact site unresolved; approximate point placed within the referenced modern area."
}
```

La UI non deve presentare questi punti come coordinate esatte.

### 4.5 Elementi lineari

Fiumi, strade, passi e percorsi non devono essere trasformati arbitrariamente in punti precisi se questo produce una falsa impressione geografica.

Se il progetto dispone soltanto di una rappresentazione puntuale, usare `representative_point` e dichiararlo nella nota. Se anche un punto rappresentativo sarebbe fuorviante, mantenere `null` finché non sarà disponibile una geometria adatta.

### 4.6 Destinazioni intenzionali

Una località indicata come destinazione prevista, direzione o intenzione di viaggio non deve essere trattata come arrivo confermato.

La posizione del luogo può comunque comparire sulla mappa, ma la relazione/evento deve conservare la distinzione tra:

- `arrival_confirmed`;
- `intended_destination`;
- `direction_only`;
- `uncertain_route`.

Il renderer deve riflettere questa differenza nelle linee di percorso.

### 4.7 Fonti geografiche

Per le identificazioni moderne usare, in ordine di preferenza quando disponibili:

1. enti pubblici locali/nazionali;
2. fonti istituzionali culturali o turistiche;
3. database geografici autorevoli e dati cartografici aperti;
4. fonti secondarie affidabili come supporto/confronto.

Una singola fonte non basta automaticamente a trasformare un sito narrativo in una corrispondenza storica esatta.

### 4.8 Regola di conservazione dell'incertezza

`null` non significa "dato dimenticato". Significa che, dopo l'audit, non esiste ancora un'ancora geografica sufficientemente difendibile.

Non assegnare coordinate solo per riempire la mappa.

## 5. Aggiornamento del database

Aggiornare in modo coerente, secondo lo schema corrente:

- registro dei personaggi;
- stati dei personaggi per capitolo;
- registro dei luoghi;
- stati/transizioni dei luoghi;
- eventi;
- relazioni;
- identità/alias;
- entity index;
- contesto storico e opere;
- micro-wiki;
- indice dei capitoli e metadati della fonte.

Per ogni dato sensibile alla progressione del lettore, mantenere il riferimento al primo capitolo in cui diventa noto/rilevante.

## 6. Regola della wiki progressiva

La wiki non deve crescere indiscriminatamente con l'avanzare del romanzo.

Per la vista corrente, l'entità deve essere disponibile quando è già stata introdotta nel testo secondo il modello adottato dal database. La presenza va però filtrata rispetto al capitolo del lettore, così che una voce non riveli fatti futuri.

Quando possibile, il dataset deve contenere il campo/sezione `present` o equivalente per registrare in quali capitoli un'entità è effettivamente presente/rilevante. La UI usa questo dato per costruire una wiki progressiva senza ricorrere a una ricerca separata.

## 7. Audit finale del libro

Prima di considerare il libro completato:

### Audit narrativo

- [ ] Ogni capitolo è stato analizzato.
- [ ] Tutti i personaggi principali e secondari rilevanti sono presenti.
- [ ] I personaggi di contesto storico sono separati dai personaggi della narrazione quando necessario.
- [ ] I luoghi sono normalizzati e privi di suffissi amministrativi inutili nella visualizzazione.
- [ ] Gli eventi principali sono presenti.
- [ ] Gli spostamenti sono coerenti capitolo per capitolo.
- [ ] Le semplici menzioni non sono diventate presenze o movimenti.
- [ ] Alias e identità duplicate sono stati risolti.
- [ ] Le incertezze sono esplicite.

### Audit geografico

- [ ] Ogni luogo ha ricevuto il miglior livello di identificazione sostenibile.
- [ ] Le corrispondenze moderne forti sono marcate come `modern_match`, non automaticamente come `exact`.
- [ ] Paesi, città e distretti sono rappresentati come aree/punti rappresentativi, non come falsi siti esatti.
- [ ] I siti narrativi non identificati ma ancorabili a un'area usano, quando appropriato, un punto deterministico entro massimo 1 km dall'ancora.
- [ ] I punti approssimativi sono dichiarati tali nelle note/metadati.
- [ ] Gli elementi lineari non sono stati ridotti a punti ingannevolmente precisi.
- [ ] Le destinazioni intenzionali non sono state trasformate in arrivi confermati.
- [ ] I luoghi privi di qualsiasi ancora difendibile restano `null`.
- [ ] Le fonti geografiche usate sono registrate quando richiesto dallo schema corrente.

### Audit spoiler

- [ ] Nessun personaggio ha una posizione futura visibile prima del relativo capitolo.
- [ ] Nessun evento futuro è esposto.
- [ ] Nessuna relazione futura viene anticipata.
- [ ] La wiki non mostra informazioni oltre la progressione del lettore.
- [ ] Tornando indietro di capitolo non rimangono informazioni future.

### Audit tecnico

- [ ] JSON valido.
- [ ] Riferimenti tra entità risolti.
- [ ] Nessun ID duplicato.
- [ ] Nessun dato orfano non intenzionale.
- [ ] La mappa aggiorna correttamente le posizioni cambiando capitolo.
- [ ] La wiki e i marker leggono il dataset aggiornato.
- [ ] Desktop e mobile restano utilizzabili.

## 8. Correzioni e approvazione

Le anomalie trovate nell'audit vanno registrate con identificativo, causa, correzione e livello di certezza. Dopo la verifica del testo sorgente, applicare le correzioni al dataset e ripetere almeno gli audit interessati.

Il libro è considerato completato solo quando l'audit finale è `PASS` e le correzioni sono state approvate.

## 9. Passaggio al libro successivo

Solo dopo il `PASS` del libro corrente:

1. congelare il dataset del libro completato;
2. aggiungere i file sorgente del libro successivo;
3. aggiornare l'indice;
4. ripetere il workflow dal punto 1;
5. durante l'integrazione, mantenere la continuità delle identità e degli spostamenti già stabiliti;
6. non riscrivere dati precedenti senza una verifica testuale che giustifichi la correzione.

## Struttura concettuale del processo

```text
CORPUS
  ↓
INDICE + SEPARAZIONE LIBRO/CAPITOLI
  ↓
PASSATA A: SCRAPING CAPITOLO PER CAPITOLO
  ↓
PASSATA B: CONFRONTO CROSS-CHAPTER
  ↓
NORMALIZZAZIONE IDENTITÀ / LUOGHI / EVENTI
  ↓
AUDIT GEOGRAFICO + CLASSIFICAZIONE DELLA PRECISIONE
  ↓
DATABASE + STATI + TRANSIZIONI + WIKI
  ↓
AUDIT NARRATIVO + SPOILER + GEOGRAFICO + TECNICO
  ↓
CORREZIONI
  ↓
AUDIT FINALE PASS
  ↓
LIBRO CONGELATO
  ↓
LIBRO SUCCESSIVO
```
