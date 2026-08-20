import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const rootArgument = process.argv.indexOf("--root");
const artifactRoot = rootArgument === -1
  ? path.join(repositoryRoot, "_site")
  : path.resolve(process.argv[rootArgument + 1] ?? "");
const errors = [];

const readJson = relative => {
  const absolute = path.join(artifactRoot, relative);
  if (!fs.existsSync(absolute)) {
    errors.push(`Missing artifact data ${relative}.`);
    return {};
  }
  try {
    return JSON.parse(fs.readFileSync(absolute, "utf8"));
  } catch (error) {
    errors.push(`Invalid artifact JSON ${relative}: ${error.message}`);
    return {};
  }
};
const inRange = (value, minimum, maximum) => Number.isInteger(value) && value >= minimum && value <= maximum;
const assertReferences = (values, ids, label) => {
  for (const value of values.filter(Boolean)) if (!ids.has(value)) errors.push(`${label} references unavailable ${value}.`);
};

for (const forbidden of ["research", "tools", "docs", "data/source", "data/audit"]) {
  if (fs.existsSync(path.join(artifactRoot, forbidden))) errors.push(`Forbidden artifact path ${forbidden}.`);
}

const progress = readJson("data/reader-progress.json")?.state;
const minimum = progress?.minimum_section;
const maximum = progress?.maximum_section;
if (!Number.isSafeInteger(minimum) || !Number.isSafeInteger(maximum) || minimum > maximum) {
  errors.push("Artifact reader progress needs a valid explicit minimum/maximum boundary.");
}

const chapters = readJson("data/chapters.json").sections ?? [];
const events = readJson("data/events.json").events ?? [];
const states = readJson("data/character-states.json").character_states ?? [];
const charactersDocument = readJson("data/characters.json");
const characters = charactersDocument.characters ?? [];
const locations = readJson("data/locations.json").locations ?? [];
const microWiki = readJson("data/context/micro-wiki.json").entities ?? [];
const characterWiki = readJson("data/context/character-wiki.json").characters ?? {};

const expectedSections = Number.isInteger(minimum) && Number.isInteger(maximum)
  ? Array.from({ length: maximum - minimum + 1 }, (_, index) => minimum + index)
  : [];
const actualSections = chapters.map(section => section.number).sort((a, b) => a - b);
if (JSON.stringify(actualSections) !== JSON.stringify(expectedSections)) {
  errors.push(`Artifact chapters do not exactly cover ${minimum}–${maximum}.`);
}

const chapterIds = new Set(chapters.map(chapter => chapter.chapter_id));
const characterIds = new Set(characters.map(character => character.id));
const locationIds = new Set(locations.map(location => location.id));
for (const id of charactersDocument.main_cast ?? []) {
  if (!characterIds.has(id)) errors.push(`Artifact main_cast leaks unavailable character ${id}.`);
}
for (const character of characters) {
  if (character.introduced_section !== undefined && !inRange(character.introduced_section, minimum, maximum)) {
    errors.push(`Character ${character.id} has unpublished introduced_section ${character.introduced_section}.`);
  }
  for (const section of character.present_in ?? []) {
    if (!inRange(section, minimum, maximum)) errors.push(`Character ${character.id} leaks present_in ${section}.`);
  }
}
for (const location of locations) {
  if (!inRange(location.introduced_section, minimum, maximum)) errors.push(`Location ${location.id} leaks introduced_section ${location.introduced_section}.`);
}
for (const event of events) {
  if (!inRange(event.section, minimum, maximum) || !chapterIds.has(event.chapter)) errors.push(`Event ${event.id} is outside the published chapters.`);
  assertReferences([...(event.characters ?? []), ...(event.referenced_characters ?? []), ...(event.witnesses ?? [])], characterIds, `Event ${event.id}`);
  assertReferences([event.location, event.origin, event.destination, ...(event.via ?? [])].filter(id => id !== "unknown"), locationIds, `Event ${event.id}`);
}
for (const state of states) {
  if (!inRange(state.section, minimum, maximum) || !chapterIds.has(state.chapter)) errors.push(`State ${state.character}@${state.section} is outside the published chapters.`);
  assertReferences([state.character], characterIds, `State ${state.character}@${state.section}`);
  assertReferences([state.location, state.last_known_location, state.departure_from], locationIds, `State ${state.character}@${state.section}`);
}
for (const entry of microWiki) {
  const first = Number(entry.novel_trigger?.first_section ?? entry.novel_trigger?.first_book1_section);
  const safe = Number(entry.novel_trigger?.spoiler_safe_until);
  if (!inRange(first, minimum, maximum) || !inRange(safe, minimum, maximum)) errors.push(`Micro-wiki ${entry.id} crosses the publication boundary.`);
}
for (const [id, entry] of Object.entries(characterWiki)) {
  for (const section of Object.keys(entry.current_by_section ?? {}).map(Number)) {
    if (!inRange(section, minimum, maximum)) errors.push(`Character wiki ${id} leaks section ${section}.`);
  }
}

if (errors.length) {
  console.error(`Pages artifact validation failed (${errors.length}):\n- ${errors.join("\n- ")}`);
  process.exit(1);
}
console.log(`Pages artifact validation passed: ${chapters.length} sections, ${events.length} events, ${states.length} states, ${characters.length} characters.`);
