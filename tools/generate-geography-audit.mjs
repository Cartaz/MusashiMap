#!/usr/bin/env node

import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(new URL("..", import.meta.url).pathname);
const readJson = relative => JSON.parse(readFileSync(resolve(root, relative), "utf8"));
const esc = value => String(value ?? "—").replaceAll("|", "\\|").replaceAll("\n", " ");
const uniq = values => [...new Set(values)];

const chapters = readJson("data/chapters.json").sections;
const locations = readJson("data/locations.json").locations;
const events = readJson("data/events.json").events;
const states = readJson("data/character-states.json").character_states;
const sourceConfig = readJson("research/geography-audit/sources.json");
const assignmentConfig = readJson("research/geography-audit/assignments.json");
const topicConfig = readJson("research/geography-audit/manifest-topics.json");
const auditPeriod = sourceConfig.audit_period;
const manualSources = sourceConfig.manual_sources;
const manualAssignments = assignmentConfig.manual_assignments;
const manifestTopicAssignments = topicConfig.manifest_topic_assignments;
if (!auditPeriod || !Array.isArray(manualSources) || !Array.isArray(manualAssignments) || !manifestTopicAssignments) {
  throw new Error("Invalid geography audit configuration.");
}

const locationById = new Map(locations.map(location => [location.id, location]));
const bookNumbers = uniq(chapters.map(chapter => chapter.book_number)).sort((a, b) => a - b);
const manifestBooks = Object.keys(manifestTopicAssignments).map(Number).sort((a, b) => a - b);

const sources = new Map();
const assignments = new Map();
const addSource = source => sources.set(source.id, source);
const assign = (ids, sourceIds, scope = "direct") => {
  for (const id of ids) {
    const current = assignments.get(id) ?? [];
    for (const sourceId of sourceIds) current.push({ sourceId, scope });
    assignments.set(id, current);
  }
};

for (const source of manualSources) addSource(source);
for (const assignment of manualAssignments) {
  assign(assignment.location_ids, assignment.source_ids, assignment.scope);
}

for (const book of manifestBooks) {
  const manifest = readJson(`research/book${book}-production-manifest.json`);
  for (const [index, source] of (manifest.external_validation ?? []).entries()) {
    if (!source.url) continue;
    const id = `b${book}-external-${index + 1}`;
    addSource({
      id,
      authority: source.authority ?? "Unspecified authority",
      title: source.topic,
      url: source.url,
      checked: source.accessed ?? auditPeriod.fallback_checked
    });
    const ids = manifestTopicAssignments[book]?.[source.topic] ?? [];
    assign(ids, [id], ids.includes(source.topic) ? "direct" : "context_or_parent_area");
  }
}

function usedLocations(book) {
  const chapterIds = new Set(chapters.filter(chapter => chapter.book_number === book).map(chapter => chapter.chapter_id));
  const sectionNumbers = new Set(chapters.filter(chapter => chapter.book_number === book).map(chapter => chapter.number));
  const ids = new Set();
  for (const event of events) if (chapterIds.has(event.chapter) && event.location) ids.add(event.location);
  for (const state of states) if (chapterIds.has(state.chapter) && state.location) ids.add(state.location);
  for (const location of locations) if ((location.source_chapters ?? []).some(chapter => chapterIds.has(chapter))) ids.add(location.id);
  for (const location of locations) if (sectionNumbers.has(location.introduced_section)) ids.add(location.id);
  return [...ids];
}

function occurrences(id, book) {
  const bookChapters = new Set(chapters.filter(chapter => chapter.book_number === book).map(chapter => chapter.chapter_id));
  const location = locationById.get(id);
  const introduction = chapters.find(chapter => chapter.number === location?.introduced_section && chapter.book_number === book)?.chapter_id;
  return uniq([
    ...events.filter(event => bookChapters.has(event.chapter) && event.location === id).map(event => event.chapter),
    ...states.filter(state => bookChapters.has(state.chapter) && state.location === id).map(state => state.chapter),
    ...(location?.source_chapters ?? []).filter(chapter => bookChapters.has(chapter)),
    ...(introduction ? [introduction] : [])
  ]).sort((a, b) => (chapters.find(chapter => chapter.chapter_id === a)?.number ?? 0) - (chapters.find(chapter => chapter.chapter_id === b)?.number ?? 0));
}

function verdict(location, evidence) {
  const confidence = String(location.geographic_confidence ?? "");
  const precision = String(location.coordinate_precision ?? "");
  const historical = String(location.historical_match ?? "");
  if (historical.includes("anachronistic") || precision === "modern_literary_reference") return "OMONIMO/RIFERIMENTO MODERNO; continuità storica negata";
  if (evidence.length && ["exact", "modern_match"].includes(precision)) return "POSIZIONE MODERNA CONFERMATA";
  if (evidence.length && location.coordinates) return "AREA/PUNTO RAPPRESENTATIVO MODERNO; scena esatta non confermata";
  if (evidence.length && (location.type === "route" || confidence.includes("route") || confidence.includes("corridor"))) return "CORRIDOIO MODERNO/STORICO CONFERMATO; tracciato narrativo non ricostruito";
  if (evidence.length) return "AREA, TOPONIMO O COMPLESSO CONFERMATO; punto della scena non confermato";
  if (["narrative_site", "private_residence", "fictional_or_unresolved_site", "narrative_venue", "moving_scene", "vessel"].includes(location.type)
      || confidence.includes("unmappable") || confidence === "unknown") return "NON IDENTIFICABILE O PRIVATO/LETTERARIO; nessuna posizione odierna confermabile";
  if (location.type === "route" || confidence.includes("route") || confidence.includes("corridor")) return "PERCORSO NON RICOSTRUITO; nessun punto singolo ammesso";
  return "NON RISOLTO; nessuna posizione odierna confermata";
}

const rowsByBook = new Map();
const errors = [];
const totals = new Map();
for (const book of bookNumbers) {
  const rows = [];
  for (const id of usedLocations(book)) {
    const location = locationById.get(id);
    if (!location) {
      errors.push(`Libro ${book}: location ID sconosciuto ${id}`);
      continue;
    }
    const evidence = uniq((assignments.get(id) ?? []).map(item => item.sourceId)).map(sourceId => sources.get(sourceId)).filter(Boolean);
    const result = verdict(location, evidence);
    rows.push({ location, chapters: occurrences(id, book), evidence, result });
    totals.set(result, (totals.get(result) ?? 0) + 1);
  }
  rowsByBook.set(book, rows);
}
const auditedLocationIds = new Set([...rowsByBook.values()].flatMap(rows => rows.map(row => row.location.id)));
for (const location of locations) {
  if (!auditedLocationIds.has(location.id)) errors.push(`Scheda geografica non assegnata ad alcun libro: ${location.id}`);
}

const lines = [
  "# Audit geografico globale per libro",
  "",
  `> Generato da \`node tools/generate-geography-audit.mjs\`. Verifica online eseguita ${auditPeriod.report_label}; fonti ufficiali o istituzionali preferite.`,
  "",
  "## Metodo ed esito",
  "",
  "La presenza di un luogo nel romanzo deriva soltanto dal corpus locale. Le fonti online servono esclusivamente a verificare il toponimo, l'area, il complesso o l'indirizzo moderno. Un indirizzo moderno non dimostra il punto esatto della scena né la continuità con un edificio del primo Seicento.",
  "",
  `- Schede geografiche uniche di produzione controllate: **${auditedLocationIds.size}/${locations.length}**.`,
  `- Occorrenze luogo-per-libro controllate: **${[...rowsByBook.values()].reduce((sum, rows) => sum + rows.length, 0)}**.`,
  `- Errori strutturali: **${errors.length}**.`,
  "",
  ...[...totals.entries()].map(([label, count]) => `- ${label}: **${count}**.`),
  "",
  "## Correzione critica emersa",
  "",
  "`mampukuji` resta un riferimento moderno geograficamente preciso al tempio Ōbaku di Gokasho, Uji, ma non una corrispondenza storica forte: il sito ufficiale del tempio e Uji City datano la fondazione al 1661, dopo l'epoca della scena. Il record di produzione è quindi marcato `modern_literary_reference` / `anachronistic_reference`.",
  ""
];

if (errors.length) lines.push("## Errori", "", ...errors.map(error => `- ${error}`), "");

for (const book of bookNumbers) {
  const chapter = chapters.find(item => item.book_number === book);
  const rows = rowsByBook.get(book);
  lines.push(`## Libro ${chapter.book} — ${chapter.book_title}`, "", `Luoghi verificati in questo libro: **${rows.length}**.`, "");
  lines.push("| Luogo | Capitoli | Posizione moderna / verdetto | Coordinate di produzione | Fonti online |", "|---|---|---|---|---|");
  for (const row of rows) {
    const { location } = row;
    const coordinates = location.coordinates ? `${location.coordinates[0]}, ${location.coordinates[1]} (${location.coordinate_precision})` : `— (${location.coordinate_precision})`;
    const sourceText = row.evidence.length
      ? row.evidence.map(source => `[${source.authority}: ${source.title}](${source.url})`).join("<br>")
      : "Nessuna fonte identifica responsabilmente un punto moderno per questa entità";
    lines.push(`| ${esc(location.name)} (\`${location.id}\`) | ${row.chapters.map(id => `\`${id}\``).join(", ") || "solo contesto"} | **${row.result}**<br>${esc(location.map_note)} | ${coordinates} | ${sourceText} |`);
  }
  lines.push("");
}

lines.push(
  "## Regole di lettura",
  "",
  "- `POSIZIONE MODERNA CONFERMATA` significa che la fonte identifica il luogo odierno; non certifica automaticamente gli edifici o gli eventi narrativi del 1600.",
  "- `AREA/PUNTO RAPPRESENTATIVO` e `COMPLESSO CONFERMATO` vietano di leggere la coordinata come punto esatto della scena.",
  "- `NON IDENTIFICABILE` è un esito positivo dell'audit quando il testo offre soltanto una casa privata, una locanda anonima, un mezzo in movimento o un luogo letterario.",
  "- Le rotte restano senza punto finché non esiste una geometria documentata; trasformarle in un marker singolo sarebbe fuorviante.",
  ""
);

const outputIndex = process.argv.indexOf("--output");
const output = outputIndex >= 0 ? process.argv[outputIndex + 1] : "research/geography-book-audit.md";
writeFileSync(resolve(root, output), `${lines.join("\n")}\n`, "utf8");
console.log(JSON.stringify({ output, productionLocations: locations.length, perBookRows: [...rowsByBook.values()].reduce((sum, rows) => sum + rows.length, 0), structuralErrors: errors.length, verdicts: Object.fromEntries(totals) }, null, 2));
if (errors.length) process.exitCode = 1;
