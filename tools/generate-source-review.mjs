#!/usr/bin/env node
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../",import.meta.url));
const read = file => JSON.parse(readFileSync(resolve(root,file),"utf8"));
const sha = value => createHash("sha256").update(value).digest("hex");
const esc = value => String(value??"—").replaceAll("|","\\|").replaceAll("\n"," ");
const unique = values => [...new Set(values)].sort();
const show = values => values.length ? values.map(value=>esc(typeof value==="string" ? value : value.source_display??JSON.stringify(value))).join("; ") : "—";
const chapters = read("data/chapters.json").sections;
const characters = read("data/characters.json").characters;
const events = read("data/events.json").events;
const states = read("data/character-states.json").character_states;
const relationships = read("data/relationships.json").relationships;
const remediation = read("research/source-audit/remediation-2026-09-30.json");
const adjudications = read("research/source-audit/review-adjudications-2026-09-30.json");
const canon = value => {
  const raw = typeof value==="string" ? value : value.canonical_id;
  if (!raw) return null;
  const id = raw.split(":")[0].split("/")[0].trim();
  return adjudications.canonical_id_normalization[id]??id;
};
const oracles = new Map();
const oracleHashes = {};
for (const book of [1,2,3,4,5,6,7]) {
  const path = `research/source-audit/book${book}-source-oracle.json`;
  oracleHashes[path] = sha(readFileSync(resolve(root,path)));
  for (const chapter of read(path).chapters) {
    if (oracles.has(chapter.id)) throw Error(`Duplicate ${chapter.id}`);
    oracles.set(chapter.id,chapter);
  }
}
if (chapters.length!==112 || oracles.size!==112) throw Error("Expected all 112 chapters.");
const reviews = chapters.map(chapter=>{
  const source = readFileSync(resolve(root,chapter.source_file));
  const text = source.toString("utf8");
  const lines = text.split(/\r?\n/); if (lines.at(-1)==="") lines.pop();
  const oracle = oracles.get(chapter.chapter_id);
  if (oracle?.source_file!==chapter.source_file) throw Error(`Source mismatch ${chapter.chapter_id}`);
  const physical = characters.filter(character=>character.present_in?.includes(chapter.number)).map(character=>character.id).sort();
  const expected = unique(oracle.physical_characters.map(canon).filter(Boolean));
  const difference = {oracle_only:expected.filter(id=>!physical.includes(id)),production_only:physical.filter(id=>!expected.includes(id))};
  const adjudication = adjudications.chapters[chapter.chapter_id]??null;
  if ((difference.oracle_only.length || difference.production_only.length) && !adjudication) throw Error(`Unadjudicated ${chapter.chapter_id}`);
  const integrity = [];
  lines.forEach((line,index)=>{
    for (const token of ["Kemp&","J nottarō","Kojir/div","\uFFFD"]) if (line.includes(token)) integrity.push({kind:"suspected_transcription_artifact",line:index+1,token,status:"preserved_pending_original_collation"});
  });
  if (chapter.chapter_id==="b2c5") {
    const passage = (start,end)=>lines.slice(start-1,end).map(line=>line.trim()).filter(Boolean).join("\n");
    const first = passage(384,422);
    if (first!==passage(432,472)) throw Error("Known duplicate changed; original collation required.");
    integrity.push({kind:"duplicated_passage",first_range:[384,422],second_range:[432,472],broader_repeated_ranges:[[374,422],[423,472]],words_in_exact_duplicate:first.split(/\s+/).length,status:"preserved_pending_original_collation"});
  }
  const chapterEvents = events.filter(event=>event.chapter===chapter.chapter_id);
  return {chapter:chapter.chapter_id,section:chapter.number,book:chapter.book_number,title:chapter.title,source_file:chapter.source_file,source_sha256:sha(source),line_count:lines.length,word_count:text.trim().split(/\s+/).length,status:"comparison_recorded_not_loss_free_certification",source_first_inventory:oracle,production:{physical_characters:physical,referenced_characters:unique(chapterEvents.flatMap(event=>event.referenced_characters??[])),event_ids:chapterEvents.map(event=>event.id),states:states.filter(state=>state.chapter===chapter.chapter_id),relationships_introduced:relationships.filter(relation=>relation.first_section===chapter.number)},normalized_physical_difference:difference,adjudication,corrections:remediation.fixes.filter(fix=>fix.chapter===chapter.chapter_id),source_integrity:integrity};
});
const report = {
  date:"2026-09-30",recovery_date:"2026-10-01",base_commit:remediation.base_commit,
  scope:{local_books:7,local_chapters:112,source_first_facts:reviews.reduce((sum,row)=>sum+row.source_first_inventory.facts.length,0),lines:reviews.reduce((sum,row)=>sum+row.line_count,0),whitespace_words:reviews.reduce((sum,row)=>sum+row.word_count,0),comparison:"All existing source-first inventories compared with production; targeted primary-text rechecks and corpus integrity scan.",new_independent_full_text_reread:false,original_master_available:false},
  limits:["Original master PDF unavailable: transcription fidelity and loss-free extraction cannot be certified.","Existing source-first oracles preserved unchanged; first-pass roster errors adjudicated separately.","No one-to-one semantic alignment of all 994 facts to production events is asserted; scenes can combine facts and chapter references are not plot events.","Unnamed functional actors, historical context and unresolved locations are retained in research, without automatically creating map entities.","Green validators establish internal consistency, not proof that nothing was lost.","Duplicate and OCR-like source artifacts are preserved pending original collation."],
  production_counts:{characters:characters.length,events:events.length,states:states.length,groups:read("data/groups.json").groups.length,locations:read("data/locations.json").locations.length,relationships:relationships.length},
  correction_actions:remediation.fixes.length,correction_actions_are_not_unique_defect_count:true,frozen_oracle_sha256:oracleHashes,chapters:reviews
};
const lines = ["# Riesame capitolo per capitolo — 30 settembre 2026","","## Esito e limiti","",`Confronto registrato per **112/112 capitoli, 7/7 libri**. Conservati ${report.scope.source_first_facts} fatti source-first. Il registro contiene ${report.correction_actions} interventi: sono azioni di correzione, non un conteggio di difetti distinti.`,"","**Non è una certificazione che nulla sia stato perso dal libro originale.** Il PDF master non era disponibile. Il riesame usa i sette inventari source-first preesistenti e le relative seconde letture, confronta tutti i capitoli con la produzione e ricontrolla i passi necessari alle correzioni. Non presenta queste verifiche mirate come una nuova lettura indipendente integrale delle 463 mila parole.","","Il testo locale contiene una duplicazione estesa in b2c5 e alcuni artefatti di trascrizione. Occorre collazionarli con l'originale; cancellare il doppione senza il master cambierebbe arbitrariamente la fonte. I 112 testi e i sette oracoli congelati non sono stati modificati.","","Gli attori senza nome, il contesto storico e i luoghi non risolti sono conservati esplicitamente nell'inventario di ricerca; non sono tutti entità visibili sulla mappa. L'accordo fra dati e dossier non è una prova di completezza.","","Le correzioni sono state ricostruite il 1 ottobre dopo un ripristino del workspace precedente al commit locale non pubblicato. I risultati e i test del checkpoint ricostruito sostituiscono i conteggi del precedente checkpoint perso.","","## Dati correnti","","| Categoria | Record |","|---|---:|",...Object.entries(report.production_counts).map(([key,value])=>`| ${key} | ${value} |`),"","Il totale degli eventi include record di riferimenti a livello di capitolo. Non confrontarlo con il totale dei fatti per calcolare una percentuale di completezza.","","## Riproducibilità","","Eseguire `node tools/generate-source-review.mjs`; verificare senza scritture con `--check`. Il JSON conserva tutti i fatti originari, hash, roster, menzioni, stati, relazioni introdotte, interventi e decisioni sui vecchi roster.","","- [Inventario completo](chapter-review-2026-09-30.json)","- [Registro degli interventi](remediation-2026-09-30.json)","- [Decisioni sui roster](review-adjudications-2026-09-30.json)","","## Indice dei capitoli","","| Sezione | Capitolo | Titolo | Fatti | Eventi | Interventi | Integrità fonte |","|---:|---|---|---:|---:|---:|---|",...reviews.map(row=>`| ${row.section} | ${row.chapter} | ${esc(row.title)} | ${row.source_first_inventory.facts.length} | ${row.production.event_ids.length} | ${row.corrections.length} | ${row.source_integrity.length ? "da collazionare" : "nessun artefatto noto rilevato"} |`),""];
for (const row of reviews) {
  const source = row.source_first_inventory;
  lines.push(`## ${row.section}. ${row.title} (${row.chapter})`,"",`Fonte: \`${row.source_file}\` — ${row.line_count} righe, ${row.word_count} parole. SHA-256: \`${row.source_sha256}\`.`,"",`**Roster fisico corrente:** ${show(row.production.physical_characters)}.`,"",`**Riferimenti negli eventi:** ${show(row.production.referenced_characters)}. Presenza e riferimento possono coesistere in scene diverse dello stesso capitolo.`,"",`**Attori funzionali della fonte:** ${show(source.functional_actors)}.`,"",`**Contesto storico:** ${show(source.historical_context)}.`,"",`**Luoghi fisici della prima lettura:** ${show(source.physical_locations)}.`,"",`**Luoghi riferiti della prima lettura:** ${show(source.referenced_locations)}.`,"",`**Personaggi riferiti della prima lettura:** ${show(source.referenced_characters)}.`,"",row.adjudication ? `Decisione sui roster: ${row.adjudication}` : "Roster coincidenti dopo normalizzazione degli ID; non è una certificazione di esaustività.","");
  if (row.adjudication) lines.push(`Differenza normalizzata dall'oracolo congelato: solo oracolo [${row.normalized_physical_difference.oracle_only.join(", ")}]; solo produzione [${row.normalized_physical_difference.production_only.join(", ")}].`,"");
  if (row.source_integrity.length) lines.push("### Integrità della trascrizione","",...row.source_integrity.map(issue=>issue.kind==="duplicated_passage" ? "- Passaggio ripetuto L374–L422 / L423–L472, con sottoblocchi identici L384–L422 / L432–L472. Conservato, da collazionare con il master." : `- Possibile artefatto \`${issue.token}\`, L${issue.line}; conservato, da collazionare.`),"");
  lines.push("### Interventi","",...(row.corrections.length ? row.corrections.map(fix=>`- ${fix.id} — ${fix.category}; \`${fix.subject}\`: ${fix.description} (${fix.status}; \`${fix.source_ref}\`).`) : ["Nessun intervento registrato in questo riesame; non equivale a certificazione di assenza di omissioni."]),"","### Fatti source-first conservati","","| ID | Tipo | Fatto |","|---|---|---|",...source.facts.map(fact=>`| ${esc(fact.id)} | ${esc(fact.type)} | ${esc(fact.description)} |`),"","### Eventi correnti e prove","","| ID | Tipo | Scena | Prova |","|---|---|---|",...row.production.event_ids.map(id=>{const event=events.find(event=>event.id===id);return `| ${id} | ${esc(event.type)} | ${esc(event.location)} | ${esc(event.source_ref)} |`;}),"","### Stati e relazioni","",...(row.production.states.length ? row.production.states.map(state=>`- Stato: \`${state.character}\`; ${state.status}; posizione ${state.location??"non risolta"}; ${state.activity} (${state.location_status??"posizione esplicita/invariata"}).`) : ["Nessuno stato finale strutturato nel capitolo."]),...row.production.relationships_introduced.map(relation=>`- Relazione introdotta: \`${relation.from}\` / \`${relation.to}\`; ${relation.type}/${relation.subtype}.`),"");
}
const prefix = "research/source-audit/chapter-review-2026-09-30";
for (const [suffix,content] of [["json",JSON.stringify(report,null,2)+"\n"],["md",lines.join("\n")+"\n"]]) {
  const path = resolve(root,`${prefix}.${suffix}`);
  if (process.argv.includes("--check")) { if (readFileSync(path,"utf8")!==content) throw Error(`Stale ${prefix}.${suffix}`); }
  else writeFileSync(path,content);
}
console.log(`Source review: ${reviews.length} chapters, ${report.scope.source_first_facts} frozen facts, ${report.correction_actions} actions; original-source certification unavailable.`);
