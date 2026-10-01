# Verifiche del checkpoint ricostruito — 2026-10-01

Il checkpoint del 30 settembre non era stato pubblicato e non era più disponibile dopo il ripristino del workspace. Le correzioni sono state ricostruite dai testi, dagli oracoli congelati e dal registro della sessione; i conteggi del rapporto corrente sostituiscono quelli del checkpoint perso.

Controlli locali finali: tutte le validazioni, generazione riproducibile, build Pages e controllo del diff superati. **98/98 test superati: 76 test CLI e regressioni, 22 test runtime.** La regressione aggiunta verifica anche che le menzioni canoniche conservino tutti i riferimenti a personaggi già registrati negli oracoli, senza mantenere presenze errate come menzioni inventate.

- `node tools/validate-frontend.mjs`
- `node tools/validate-data.mjs`
- `node tools/validate-research-manifests.mjs`
- `node tools/validate-source-audit.mjs`
- `node tools/generate-source-review.mjs --check`
- `node --test tools/tests/*.test.mjs`
- `node js/runtime-safety.test.mjs`
- `node tools/build-pages.mjs`
- `node tools/validate-frontend.mjs --root _site`
- `node tools/validate-pages-artifact.mjs`
- `git diff --check`

Il browser smoke locale richiede Chromium, assente nell'ambiente. Il workflow GitHub installa Chromium ed esegue `tools/browser-smoke.mjs` prima del deploy; il suo esito sul commit pubblicato sarà la prova browser, distinta dai test runtime locali.

I 112 file sorgente e i sette oracoli source-first sono conservati senza modifiche. Il JSON del riesame ne registra gli hash. Un esito positivo dei controlli di struttura e regressione non prova l'assenza di omissioni dal libro originale: la collazione del master resta necessaria per la duplicazione in b2c5 e gli artefatti di trascrizione.
