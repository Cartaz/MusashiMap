#!/usr/bin/env node

import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { getDisplayCharacterName } from "../js/reader-progress.js";

const root = resolve(new URL("..", import.meta.url).pathname);
const readJson = relative => JSON.parse(readFileSync(resolve(root, relative), "utf8"));
const esc = value => String(value ?? "—").replaceAll("|", "\\|").replaceAll("\n", " ");
const unique = values => [...new Set(values)];
const sameSet = (a, b) => a.length === b.length && a.every(value => b.includes(value));
const pairKey = (a, b) => [a, b].sort().join("::");

const chapters = readJson("data/chapters.json").sections;
const characters = readJson("data/characters.json").characters;
const events = readJson("data/events.json").events;
const states = readJson("data/character-states.json").character_states;
const relationships = readJson("data/relationships.json").relationships;
const identities = readJson("data/identities.json").identities;
const auditConfig = readJson("research/character-audit-config.json");
const book1Expected = auditConfig.book1_expected;
const book2Expected = auditConfig.book2_expected;
const manifestIdMaps = auditConfig.manifest_id_maps;
if (!book1Expected || !book2Expected || !manifestIdMaps) throw new Error("Invalid character audit configuration.");

const characterById = new Map(characters.map(character => [character.id, character]));
const chapterById = new Map(chapters.map(chapter => [chapter.chapter_id, chapter]));
const name = (id, section) => characterById.has(id) ? getDisplayCharacterName(characterById.get(id), section, identities) : `ID sconosciuto: ${id}`;
const bookNumbers = unique(chapters.map(chapter => chapter.book_number)).sort((a, b) => a - b);
const manifestBooks = Object.keys(manifestIdMaps).map(Number).sort((a, b) => a - b);
const maximumSection = Math.max(...chapters.map(chapter => chapter.number));

function independentRosters() {
  const result = new Map();
  for (const [chapter, ids] of Object.entries(book1Expected)) result.set(chapter, ids);
  for (const [chapter, ids] of Object.entries(book2Expected)) result.set(chapter, ids);
  for (const book of manifestBooks) {
    const manifest = readJson(`research/book${book}-production-manifest.json`);
    const remap = manifestIdMaps[book];
    for (const chapter of manifest.chapters) {
      result.set(chapter.id, chapter.characters.map(id => remap[id] ?? id));
    }
  }
  return result;
}

const expectedByChapter = independentRosters();
const errors = [];
const notices = [];

for (const chapter of chapters) {
  if (!existsSync(resolve(root, chapter.source_file))) errors.push(`${chapter.chapter_id}: source_file inesistente (${chapter.source_file})`);
  const actual = characters.filter(character => character.present_in?.includes(chapter.number)).map(character => character.id);
  const expected = expectedByChapter.get(chapter.chapter_id) ?? [];
  if (!sameSet(actual, expected)) {
    errors.push(`${chapter.chapter_id}: roster fisico difforme; solo produzione=[${actual.filter(id => !expected.includes(id)).join(", ")}], solo dossier=[${expected.filter(id => !actual.includes(id)).join(", ")}]`);
  }
  const chapterEvents = events.filter(event => event.chapter === chapter.chapter_id);
  const chapterStates = states.filter(state => state.chapter === chapter.chapter_id);
  for (const event of chapterEvents) {
    for (const id of [...(event.characters ?? []), ...(event.referenced_characters ?? [])]) {
      if (!characterById.has(id)) errors.push(`${event.id}: personaggio sconosciuto ${id}`);
    }
    for (const id of event.characters ?? []) {
      if (!actual.includes(id)) errors.push(`${event.id}: partecipante fisico ${id} assente da present_in ${chapter.number}`);
    }
  }
  for (const state of chapterStates) {
    if (!characterById.has(state.character)) errors.push(`${chapter.chapter_id}: stato di personaggio sconosciuto ${state.character}`);
  }
  for (const id of actual) {
    const hasAction = chapterEvents.some(event => event.characters?.includes(id));
    const hasState = chapterStates.some(state => state.character === id);
    if (!hasAction && !hasState) notices.push(`${chapter.chapter_id}: ${id} è presenza scenica attestata dal dossier, senza evento/stato strutturato dedicato`);
  }
}

for (const relation of relationships) {
  if (!characterById.has(relation.from) || !characterById.has(relation.to)) {
    errors.push(`relazione ${relation.from}/${relation.to}: endpoint sconosciuto`);
    continue;
  }
  const chapter = chapters.find(item => item.number === relation.first_section);
  if (!chapter) {
    errors.push(`relazione ${relation.from}/${relation.to}: first_section ${relation.first_section} inesistente`);
    continue;
  }
  const chapterEvents = events.filter(event => event.chapter === chapter.chapter_id);
  const evidenced = chapterEvents.some(event => {
    const involved = [...(event.characters ?? []), ...(event.referenced_characters ?? [])];
    return involved.includes(relation.from) || involved.includes(relation.to);
  }) || characters.find(item => item.id === relation.from)?.present_in?.includes(relation.first_section)
    || characters.find(item => item.id === relation.to)?.present_in?.includes(relation.first_section);
  if (!evidenced) errors.push(`relazione ${relation.from}/${relation.to}: nessun endpoint attestato nella first_section ${relation.first_section}`);
}

const lines = [
  "# Coerenza dei dati personaggio per capitolo",
  "",
  "> Generato da `node tools/generate-character-chapter-audit.mjs`. Le fonti narrative locali, non il web, sono l'autorità per presenza, azioni e relazioni.",
  "",
  "## Esito e metodo",
  "",
  `- Capitoli confrontati con i dossier di produzione: **${chapters.length}/${maximumSection}**.`,
  `- Personaggi censiti: **${characters.length}**.`,
  `- Eventi/azioni verificati: **${events.length}**.`,
  `- Stati/posizioni finali verificati: **${states.length}**.`,
  `- Relazioni canoniche verificate alla soglia d'introduzione: **${relationships.length}**.`,
  `- Errori bloccanti: **${errors.length}**.`,
  `- Presenze sceniche senza evento o stato dedicato (controllate contro i dossier indipendenti): **${notices.length}**.`,
  "",
  "Questo rapporto verifica la coerenza dei record esistenti con i dossier di produzione. Non certifica che ogni fatto del romanzo sia stato estratto: dossier e dati possono condividere la stessa omissione o lo stesso errore. Per la completezza narrativa consultare `research/source-audit/` e il riesame capitolo per capitolo del 2026-09-30.",
  "",
  "La posizione intra-capitolo deriva esclusivamente dagli eventi con partecipazione fisica; lo stato finale è riportato solo quando esiste un record esplicito. I personaggi nominati, ricordati o riferiti restano separati. Le co-azioni indicano interazione nello stesso evento, non creano automaticamente una relazione canonica.",
  "",
  "## Diagnostica",
  "",
  ...(errors.length ? errors.map(item => `- ERRORE — ${item}`) : ["- Nessun errore bloccante."]),
  "",
  ...notices.map(item => `- NOTA — ${item}`),
  ""
];

for (const book of bookNumbers) {
  const bookChapters = chapters.filter(chapter => chapter.book_number === book);
  lines.push(`## Libro ${bookChapters[0].book} — ${bookChapters[0].book_title}`, "");
  for (const chapter of bookChapters) {
    const section = chapter.number;
    const present = characters.filter(character => character.present_in?.includes(section));
    const chapterEvents = events.filter(event => event.chapter === chapter.chapter_id);
    const chapterStates = states.filter(state => state.chapter === chapter.chapter_id);
    const newRelationships = relationships.filter(relation => relation.first_section === section);
    const activeRelationships = relationships.filter(relation => relation.first_section <= section);
    const eventPairs = new Set();
    for (const event of chapterEvents) {
      const ids = event.characters ?? [];
      for (let i = 0; i < ids.length; i += 1) for (let j = i + 1; j < ids.length; j += 1) eventPairs.add(pairKey(ids[i], ids[j]));
    }

    lines.push(`### ${section}. ${chapter.title} (${chapter.chapter_id})`, "", `Fonte: \`${chapter.source_file}\``, "");
    lines.push("| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |", "|---|---|---|---|");
    for (const character of present) {
      const characterEvents = chapterEvents.filter(event => event.characters?.includes(character.id));
      const positions = unique(characterEvents.flatMap(event => {
        const route = [event.origin, ...(event.via ?? []), event.destination].filter(Boolean);
        return [...(event.location ? [`scena: \`${event.location}\``] : []), ...(route.length ? [`percorso (${event.movement_status ?? "non classificato"}): ${route.map(id=>`\`${id}\``).join(" → ")}`] : [])];
      }));
      const endStates = chapterStates.filter(state => state.character === character.id);
      const stateText = endStates.length
        ? endStates.map(state => `${state.location ? `\`${state.location}\`` : "luogo non risolto"}; ${state.status}; ${state.activity} (${state.certainty}; ${state.source_ref ?? state.source_file ?? chapter.source_file})`).join("<br>")
        : "Nessuno stato finale strutturato";
      const canonical = unique(activeRelationships.filter(relation =>
        [relation.from, relation.to].includes(character.id)
        && present.some(other => other.id !== character.id && [relation.from, relation.to].includes(other.id))
      ).map(relation => {
        const other = relation.from === character.id ? relation.to : relation.from;
        return `${name(other, section)}: ${relation.type}/${relation.subtype}${relation.first_section === section ? " (introdotta qui)" : ""}`;
      }));
      const interactions = present.filter(other => other.id !== character.id && eventPairs.has(pairKey(character.id, other.id))).map(other => name(other.id, section));
      const relationText = [
        canonical.length ? `Canoniche: ${canonical.join("; ")}` : null,
        interactions.length ? `Co-azioni: ${interactions.join(", ")}` : null
      ].filter(Boolean).join("<br>") || "Nessuna relazione/co-azione strutturata nel capitolo";
      lines.push(`| ${esc(name(character.id, section))} (\`${character.id}\`) | ${positions.length ? positions.join("; ") : "Presenza attestata dal dossier; nessuna tappa evento dedicata"} | ${esc(stateText)} | ${esc(relationText)} |`);
    }
    if (!present.length) lines.push("| — | Nessun personaggio fisico registrato | — | — |");
    lines.push("", "Azioni ed evidenza:", "");
    for (const event of chapterEvents) {
      const actors = (event.characters ?? []).map(name).join(", ") || "nessun partecipante fisico (resoconto/contesto)";
      const mentioned = (event.referenced_characters ?? []).length ? `; menzionati: ${(event.referenced_characters ?? []).map(name).join(", ")}` : "";
      lines.push(`- \`${event.id}\` — **${event.type}**${event.location ? ` @ \`${event.location}\`` : ""}: ${event.description} — fisici: ${actors}${mentioned}. Evidenza: ${event.certainty}; ${event.source_ref ?? event.source_file ?? chapter.source_file}.`);
    }
    if (!chapterEvents.length) lines.push("- Nessun evento strutturato.");
    if (newRelationships.length) {
      lines.push("", "Relazioni introdotte o rivelate qui:", "");
      for (const relation of newRelationships) lines.push(`- ${name(relation.from, section)} → ${name(relation.to, section)}: **${relation.type}/${relation.subtype}** (soglia ${relation.first_section}).`);
    }
    const mentionedOnly = unique(chapterEvents.flatMap(event => event.referenced_characters ?? [])).filter(id => !present.some(character => character.id === id));
    if (mentionedOnly.length) lines.push("", `Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): ${mentionedOnly.map(id => `${name(id, section)} (\`${id}\`)`).join(", ")}.`);
    lines.push("");
  }
}

lines.push(
  "## Criteri di chiusura",
  "",
  "Il controllo di coerenza passa quando la diagnostica ha zero errori: roster di produzione uguale ai dossier, partecipanti fisici inclusi in `present_in`, sorgenti esistenti, identificativi validi e soglie relazionali agganciate a un capitolo con almeno un endpoint registrato. Questo risultato non chiude l'audit di completezza del testo. Le note identificano figure presenti nel dossier senza un evento o uno stato autonomo; non provano che quelle presenze siano semanticamente corrette.",
  ""
);

const outputArg = process.argv.indexOf("--output");
const output = outputArg >= 0 ? process.argv[outputArg + 1] : "research/character-chapter-audit.md";
writeFileSync(resolve(root, output), `${lines.join("\n")}\n`, "utf8");
console.log(JSON.stringify({ output, chapters: chapters.length, characters: characters.length, events: events.length, states: states.length, relationships: relationships.length, errors: errors.length, notices: notices.length }, null, 2));
if (errors.length) process.exitCode = 1;
