# MusashiMap — Semantica degli spostamenti

Questo documento definisce come gli eventi di viaggio e gli stati dei personaggi devono rappresentare il rapporto tra testo narrativo e geometria mostrata sulla mappa.

## Principio fondamentale

Una relazione `origin → destination` non implica automaticamente che il personaggio sia arrivato alla destinazione. Il dataset deve distinguere esplicitamente intenzione, percorso e arrivo.

## Campo obbligatorio per i nuovi eventi di movimento

Gli eventi che contengono `origin` e `destination` devono usare `movement_status` con uno dei seguenti valori:

| Valore | Significato | Rendering |
|---|---|---|
| `arrival_confirmed` | La destinazione è stata raggiunta. | linea continua |
| `confirmed_route` | Lo spostamento lungo la tratta è narrativamente confermato. | linea continua |
| `intended_destination` | La destinazione è un obiettivo dichiarato ma l'arrivo non è ancora stabilito. | linea tratteggiata |
| `direction_only` | Il testo indica una direzione generale o una destinazione presunta. | linea tratteggiata |
| `uncertain_route` | Percorso o destinazione restano sostanzialmente incerti. | linea tratteggiata |

`movement_status` non deve essere dedotto soltanto dal campo `certainty`: `certainty` descrive la sicurezza del fatto narrativo, mentre `movement_status` descrive la semantica geografica del movimento.

## Stati dei personaggi: posizione corrente e ultima posizione nota

`character-states.json` usa:

- `location`: posizione corrente cartografabile, quando è conosciuta;
- `last_known_location`: ultima posizione cartografabile conosciuta quando `location` è `null`;
- `location_status`: motivo per cui la posizione corrente non è rappresentata.

Questo evita di confondere `location: null` con "il personaggio non esiste più nella continuità geografica".

Esempio:

```json
{
  "character": "matahachi",
  "location": null,
  "last_known_location": "oko_akemi_house",
  "status": "away",
  "location_status": "departed_with_group",
  "departure_from": "oko_akemi_house",
  "departure_section": 2,
  "group": "oko_akemi_matahachi"
}
```

In questo caso la mappa non mostra un marker a Oko/Akemi House, perché non è più la posizione corrente, ma la wiki/runtime può spiegare da dove il personaggio è partito.

## Regole di estrazione

1. `arrival_confirmed` richiede un arrivo esplicito o inequivocabilmente stabilito dal testo.
2. `confirmed_route` richiede uno spostamento effettivamente compiuto e supportato dal testo.
3. `intended_destination` va usato quando la destinazione è un obiettivo dichiarato ma non ancora raggiunto.
4. `direction_only` va usato per indicazioni del tipo "verso", "in direzione di", "crede che la strada porti a" e casi equivalenti.
5. `uncertain_route` va usato quando il testo lascia irrisolto il percorso o la destinazione in modo sostanziale.
6. Se una destinazione è `unknown`, non creare una geometria.
7. Non trasformare una semplice menzione di un luogo in una tratta di viaggio.
8. Non retrodatare un arrivo: una presenza successiva in una località non autorizza automaticamente a ricostruire il percorso precedente.
9. La presenza di più personaggi nello stesso evento non implica automaticamente che tutti abbiano compiuto lo stesso movimento: distinguere partecipanti, osservatori, inseguitori e persone catturate/trasferite.
10. Quando più personaggi partono insieme e la destinazione non è ancora nota, usare `location_status: departed_with_group` e lo stesso `group` per tutti.

## Compatibilità con i dati esistenti

Il renderer mantiene un fallback per gli eventi storici privi di `movement_status`. Per i nuovi libri, invece, `movement_status` deve essere assegnato durante l'estrazione e verificato dal validator prima della pubblicazione.

## Validator

Eseguire dalla root del repository:

```bash
node tools/validate-data.mjs
```

Il validator controlla almeno:

- riferimenti a personaggi e luoghi inesistenti;
- coordinate e metadati di precisione incompleti;
- punti e siti `approximate_area` oltre 1 km, oppure aree geografiche ampie oltre 5 km;
- stati `dead` che tornano successivamente vivi/attivi;
- transizioni geografiche senza un evento di movimento evidente;
- eventi di movimento con semantica incompatibile con la destinazione;
- presenza di tutti i capitoli/eventi attesi.

Il validator richiede `movement_status` quando un evento contiene dati di percorso. Verifica inoltre che ogni sezione pubblicata dal contratto `reader-progress` abbia eventi e stati, così una nuova sezione non può essere esposta con una migrazione parziale.

## Rendering

- Movimento confermato: linea continua.
- Destinazione intenzionale, direzione o percorso incerto: linea tratteggiata.
- Le linee sono interattive e il popup dichiara esplicitamente la semantica del movimento e riporta la descrizione dell'evento.
