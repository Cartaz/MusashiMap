# MusashiMap — Workflow di ricerca e aggiornamento dati

Questo documento è il workflow operativo di riferimento per estendere MusashiMap ai libri successivi. Va seguito in ordine, salvo che un audit evidenzi la necessità di tornare a uno step precedente.

## 0. Principi vincolanti

- La fonte narrativa di lavoro è il corpus canonico già adottato dal progetto.
- Si lavora un libro alla volta.
- Il testo viene separato in file per capitolo prima dello scraping analitico.
- Nessuna informazione proveniente da capitoli futuri deve entrare nello stato visibile a un lettore che non li ha ancora raggiunti.
- Distinguere sempre tra: fatto esplicito nel testo, inferenza ragionevole e informazione incerta.
- Non inventare coordinate o precisione geografica: usare un'area/ancora logica quando il testo non consente maggiore precisione.
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

## 4. Aggiornamento del database

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

## 5. Regola della wiki progressiva

La wiki non deve crescere indiscriminatamente con l'avanzare del romanzo.

Per la vista corrente, l'entità deve essere disponibile quando è già stata introdotta nel testo secondo il modello adottato dal database. La presenza va però filtrata rispetto al capitolo del lettore, così che una voce non riveli fatti futuri.

Quando possibile, il dataset deve contenere il campo/sezione `present` o equivalente per registrare in quali capitoli un'entità è effettivamente presente/rilevante. La UI usa questo dato per costruire una wiki progressiva senza ricorrere a una ricerca separata.

## 6. Audit finale del libro

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

## 7. Correzioni e approvazione

Le anomalie trovate nell'audit vanno registrate con identificativo, causa, correzione e livello di certezza. Dopo la verifica del testo sorgente, applicare le correzioni al dataset e ripetere almeno gli audit interessati.

Il libro è considerato completato solo quando l'audit finale è `PASS` e le correzioni sono state approvate.

## 8. Passaggio al libro successivo

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
DATABASE + STATI + TRANSIZIONI + WIKI
  ↓
AUDIT NARRATIVO + SPOILER + TECNICO
  ↓
CORREZIONI
  ↓
AUDIT FINALE PASS
  ↓
LIBRO CONGELATO
  ↓
LIBRO SUCCESSIVO
```
