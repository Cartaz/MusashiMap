# MusashiMap — Roadmap

> Documento operativo principale. Aggiornare questo file a ogni milestone significativa.

## 1. Obiettivo

MusashiMap è un companion geografico spoiler-safe per *Musashi* di Eiji
Yoshikawa. Rappresenta luoghi, movimenti, relazioni e contesto al punto di
lettura scelto; non pretende di essere un GIS storico o di colmare ciò che il
testo lascia indeterminato.

## 2. Gerarchia delle fonti

1. I file capitolo locali `data/source/book1/` … `data/source/book7/` sono la
   fonte primaria per trama, presenze, movimenti e cronologia narrativa.
2. Fonti istituzionali o accademiche esterne servono esclusivamente a validare
   geografia moderna, topografia e contesto storico.
3. Un riscontro moderno non autorizza coordinate precise per una casa privata,
   un luogo fittizio o un itinerario non determinato dal testo.
4. La corrispondenza con l'edizione Luni resta sospesa finché non sarà
   disponibile il suo indice effettivo.

## 3. Stato al 29 agosto 2026

| Ambito | Stato |
|---|---|
| Registro sorgenti, 112 capitoli | PASS |
| Books I–V, sezioni 1–79 | Produzione / PASS |
| Books VI–VII, 33 capitoli, sezioni 80–112 | Scraping e audit staging / PASS |
| Reader progress e firewall spoiler | PASS |
| Validazione semantica produzione | PASS |
| Contratto e validazione staging | PASS |
| Frontend validator | PASS, zero warning |
| Fallback basemap e overlay indipendenti | Implementato e testato |
| Certificazione canvas vettoriale con GPU reale | Da completare |

Il registro globale non è un confine di pubblicazione. Solo
`reader-progress.state.maximum_section` rende una sezione selezionabile; il gate
richiede per ogni sezione pubblicata eventi e stati coerenti.

## 4. Prossime milestone

### A. Migrazione Book III — Fire — completata

- Importati dal manifest canonico eventi, stati, personaggi, gruppi e luoghi.
- Auditato il timing di identità, relazioni, wiki e contesto.
- Mantenute senza coordinate tutte le località non sostenute da evidenza precisa.
- Portato il confine atomico da 19 a 32 dopo il superamento dei gate.

### B. Migrazione Book IV — Wind — completata

- Importati 116 eventi e 71 stati di fine capitolo dalle fonti locali.
- Riconciliati identità, presenze, movimenti e contesto progressivo.
- Conservati senza coordinate tutti i 39 luoghi Book IV, inclusi i quattro
  luoghi già presenti nel registro e riutilizzati dalla migrazione.
- Portato il confine atomico da 32 a 53 soltanto dopo una prova completa su
  copia temporanea priva di errori e warning.

### C. Migrazione Book V — Sky — completata

- Importati 105 eventi e derivati 86 stati progressivi dalle fonti locali,
  mantenendo intatto il contratto runtime nonostante il ledger staging sparso.
- Riconciliati identità, relazioni, movimenti, salti temporali e contesto.
- Conservati senza coordinate tutti i 48 luoghi Book V.
- Portato il confine atomico da 53 a 79 soltanto dopo una prova completa su
  copia temporanea priva di errori e warning.

### D. Migrazioni Books VI–VII

Ripetere lo stesso ciclo, senza pubblicazioni parziali:

| Libro | Sezioni | Capitoli |
|---|---:|---:|
| VI — Sun and Moon | 80–96 | 17 |
| VII — The Perfect Light | 97–112 | 16 |

La prossima milestone è Book VI (*Sun and Moon*), sezioni 80–96.

### E. Certificazione e manutenzione

- Verifica visuale desktop/mobile a ogni nuovo confine.
- Test del basemap vettoriale su browser con accelerazione grafica.
- Mantenimento dei gate CI e degli hash/line count delle fonti.
- Aggiornamento di checkpoint, ledger e audit a ogni decisione geografica.

## 5. Regole permanenti

1. Analizzare prima capitolo per capitolo, poi riconciliare l'intero libro.
2. Separare presenza fisica, menzione, ultima posizione nota e stato non mappabile.
3. Separare stato narrativo, visibilità cartografica e focus.
4. Distinguere arrivo confermato, rotta, intenzione e sola direzione.
5. Non usare informazioni future per risolvere uno stato precedente.
6. Conservare alias e identità ambigue fino al reveal esplicito.
7. Lasciare `coordinates: null` quando la precisione non è difendibile.
8. Pubblicare un libro solo come unità atomica completa.
9. Usare il micro-wiki con soglie progressive verificabili.
10. Non dedurre la struttura di edizioni esterne da memoria o somiglianza.
