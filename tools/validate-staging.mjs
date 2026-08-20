#!/usr/bin/env node

import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const CONTRACT_VERSION = "1.0.0";
const MIN_BOOK = 3;
const MAX_BOOK = 7;
const MOVEMENT_STATUSES = new Set([
  "arrival_confirmed",
  "confirmed_route",
  "intended_destination",
  "direction_only",
  "uncertain_route"
]);

const args = new Set(process.argv.slice(2));
const writeNormalized = args.delete("--normalize");
const rootFlag = [...args].find(argument => argument.startsWith("--root="));
if (rootFlag) args.delete(rootFlag);
if (args.size) {
  console.error(`Unknown arguments: ${[...args].join(", ")}`);
  process.exit(2);
}

const root = rootFlag ? path.resolve(rootFlag.slice("--root=".length)) : process.cwd();
const researchDir = path.join(root, "research");

const readJson = async file => JSON.parse(await readFile(file, "utf8"));
const asArray = value => Array.isArray(value) ? value : value == null ? [] : [value];
const unique = values => [...new Set(values.filter(value => value !== null && value !== undefined && value !== ""))];
const cleanObject = object => Object.fromEntries(Object.entries(object).filter(([, value]) => value !== undefined));
const chapterId = (book, local) => `b${book}c${local}`;
const canonicalFile = book => path.join(researchDir, `book${book}-production-manifest.json`);

const localChapterFromRef = (value, book) => {
  if (typeof value !== "string") return null;
  const qualified = value.match(new RegExp(`^b${book}c(\\d+)$`, "i"));
  if (qualified) return Number(qualified[1]);
  const stable = value.match(new RegExp(`^book${book}/chapter(\\d+)$`, "i"));
  return stable ? Number(stable[1]) : null;
};

const normalizeMovementStatus = status => {
  if (status == null || status === "none") return null;
  if (status === "route_confirmed" || status === "departure_confirmed") return "confirmed_route";
  if (status === "uncertain") return "uncertain_route";
  return status;
};

const sourceFileForChapter = (sourceFiles, id) => sourceFiles.find(source => source.chapter_id === id)?.file ?? null;

const sourceTitleForChapter = (sourceFiles, id) => sourceFiles.find(source => source.chapter_id === id)?.title ?? null;

const normalizeSourceFiles = (manifest, book) => asArray(manifest.source_files).map((source, index) => ({
  ...source,
  chapter_id: source.chapter_id ?? chapterId(book, index + 1),
  global_section: source.global_section ?? manifest.book?.global_sections?.minimum + index,
  title: source.title ?? null,
  file: source.file,
  line_count: source.line_count ?? null,
  ...(source.sha256 ? { sha256: source.sha256 } : {})
}));

const normalizeEntities = (manifest, chapters, key, occurrenceKey) => {
  const source = manifest.entities?.[key] ?? manifest[key] ?? [];
  const occurrences = new Map(asArray(manifest.entities?.character_occurrence_index)
    .map(entry => [entry.character, entry]));
  return source.map(entity => {
    const occurrence = occurrences.get(entity.id);
    const physical = unique([
      ...asArray(entity.physical_presence),
      ...asArray(occurrence?.physical_presence),
      ...chapters.filter(chapter => chapter[occurrenceKey]?.includes(entity.id)).map(chapter => chapter.id)
    ]);
    const mentioned = unique([
      ...asArray(entity.mentioned_in),
      ...asArray(occurrence?.mentioned_only),
      ...chapters.filter(chapter => chapter.referenced_characters?.includes(entity.id) || chapter.referenced_groups?.includes(entity.id)).map(chapter => chapter.id)
    ]);
    return {
      ...entity,
      aliases: asArray(entity.aliases),
      physical_presence: physical,
      mentioned_in: mentioned
    };
  });
};

const normalizeRelationship = (relationship, book, index) => {
  const participants = unique([
    ...asArray(relationship.participants),
    relationship.subject,
    relationship.object,
    relationship.a,
    relationship.b,
    relationship.from,
    relationship.to
  ]);
  const rawEvidence = relationship.evidence ?? relationship.source_ref ?? [];
  const evidence = asArray(rawEvidence);
  const chapterIds = unique([
    ...asArray(relationship.chapters),
    relationship.first_chapter,
    ...evidence.map(item => {
      if (typeof item !== "string") return null;
      const eventChapter = item.match(new RegExp(`^(b${book}c\\d+)[_-]e`, "i"));
      if (eventChapter) return eventChapter[1];
      const local = localChapterFromRef(item.replace(/:L.*$/, ""), book);
      return local ? chapterId(book, local) : null;
    })
  ]);
  return cleanObject({
    id: relationship.id ?? `b${book}-relationship-${String(index + 1).padStart(2, "0")}`,
    participants,
    type: relationship.type ?? relationship.predicate ?? "unspecified",
    chapter_ids: chapterIds,
    evidence,
    status: relationship.status ?? relationship.status_at_end,
    certainty: relationship.certainty ?? "unspecified",
    context: relationship.context ?? relationship.note,
    extensions: { original: relationship }
  });
};

const normalizeHistoricalContext = (entry, book, index) => {
  const rawChapters = asArray(entry.chapters ?? entry.narrative_sources);
  const chapterIds = unique(rawChapters.map(value => {
    const local = localChapterFromRef(String(value).replace(/:L.*$/, ""), book);
    return local ? chapterId(book, local) : /^b\d+c\d+$/.test(String(value)) ? value : null;
  }));
  return cleanObject({
    id: entry.id ?? `b${book}-historical-${String(index + 1).padStart(2, "0")}`,
    topic: entry.name ?? entry.topic ?? entry.entity ?? entry.id ?? `Historical context ${index + 1}`,
    chapter_ids: chapterIds,
    source_refs: unique([
      ...asArray(entry.source_ref),
      ...rawChapters.filter(value => !chapterIds.includes(value))
    ]),
    urls: unique(asArray(entry.urls ?? entry.url)),
    summary: entry.claim ?? entry.status ?? entry.narrative_presence ?? entry.scope,
    extensions: { original: entry }
  });
};

const normalizeExternalValidation = (entry, book, index) => cleanObject({
  id: entry.id ?? `b${book}-external-${String(index + 1).padStart(2, "0")}`,
  topic: entry.topic ?? entry.entity_id ?? entry.location ?? entry.id ?? `External validation ${index + 1}`,
  authority: entry.authority ?? entry.publisher ?? null,
  url: entry.url ?? null,
  conclusion: entry.conclusion ?? entry.result ?? entry.supports ?? entry.evidence ?? null,
  uncertainty: entry.uncertainty ?? entry.confidence ?? entry.certainty ?? null,
  narrative_effect: entry.narrative_effect,
  coordinates: Object.hasOwn(entry, "coordinates") ? entry.coordinates : undefined,
  accessed: entry.accessed,
  extensions: { original: entry }
});

const normalizeManifest = manifest => {
  if (manifest.contract_version === CONTRACT_VERSION) {
    const locationIds = new Set(asArray(manifest.locations).map(location => location.id));
    return {
      ...manifest,
      events: asArray(manifest.events).map(event => {
        const normalized = { ...event };
        for (const field of ["origin", "destination"]) {
          if (normalized[field] != null && !locationIds.has(normalized[field])) {
            normalized[`${field}_label`] ??= normalized[field];
            normalized[field] = null;
          }
        }
        return normalized;
      }),
      historical_context: asArray(manifest.historical_context).map(entry => ({
        ...entry,
        urls: asArray(entry.urls ?? entry.extensions?.original?.urls ?? entry.extensions?.original?.url)
      }))
    };
  }
  const book = Number(manifest.book?.number);
  if (!Number.isInteger(book)) throw new Error("Manifest has no integer book.number");
  const sourceFiles = normalizeSourceFiles(manifest, book);
  const rawCharacters = manifest.entities?.characters ?? manifest.characters ?? [];
  const rawGroups = manifest.entities?.groups ?? manifest.groups ?? [];
  const rawLocations = manifest.entities?.locations ?? manifest.locations ?? [];
  const characterIds = new Set(rawCharacters.map(entity => entity.id));
  const groupIds = new Set(rawGroups.map(entity => entity.id));
  const locationIds = new Set(rawLocations.map(location => location.id));
  const events = [];
  const characterStates = [];

  const chapters = asArray(manifest.chapters).map((rawChapter, chapterIndex) => {
    const id = rawChapter.chapter_id ?? rawChapter.id ?? chapterId(book, chapterIndex + 1);
    const rawPresent = asArray(rawChapter.physically_present ?? rawChapter.physical_presence ?? rawChapter.present);
    const rawMentioned = asArray(rawChapter.mentioned_only ?? rawChapter.mentioned);
    const characters = rawPresent.filter(entity => characterIds.has(entity));
    const groups = unique([
      ...asArray(rawChapter.groups_present),
      ...rawPresent.filter(entity => groupIds.has(entity))
    ]);
    const referencedCharacters = rawMentioned.filter(entity => characterIds.has(entity));
    const referencedGroups = rawMentioned.filter(entity => groupIds.has(entity));
    const chapterSource = rawChapter.source_ref ?? rawChapter.source_file ?? sourceFileForChapter(sourceFiles, id);

    for (const rawEvent of asArray(rawChapter.events)) {
      const rawActors = asArray(rawEvent.characters ?? rawEvent.participants_present ?? rawEvent.participants ?? rawEvent.actors);
      const rawReferenced = asArray(rawEvent.referenced_characters ?? rawEvent.mentioned ?? rawEvent.referenced_actors);
      const canonicalMovement = normalizeMovementStatus(rawEvent.movement_status);
      events.push(cleanObject({
        id: rawEvent.id,
        chapter: id,
        type: rawEvent.type,
        description: rawEvent.description ?? rawEvent.summary,
        characters: rawActors.filter(entity => characterIds.has(entity)),
        referenced_characters: rawReferenced.filter(entity => characterIds.has(entity)),
        groups: rawActors.filter(entity => groupIds.has(entity)),
        referenced_groups: rawReferenced.filter(entity => groupIds.has(entity)),
        location: Object.hasOwn(rawEvent, "location") ? rawEvent.location : null,
        origin: rawEvent.origin == null || locationIds.has(rawEvent.origin) ? rawEvent.origin : null,
        origin_label: rawEvent.origin != null && !locationIds.has(rawEvent.origin) ? rawEvent.origin : undefined,
        destination: rawEvent.destination == null || locationIds.has(rawEvent.destination) ? rawEvent.destination : null,
        destination_label: rawEvent.destination != null && !locationIds.has(rawEvent.destination) ? rawEvent.destination : undefined,
        source_ref: rawEvent.source_ref ?? chapterSource,
        source_file: sourceFileForChapter(sourceFiles, id),
        certainty: rawEvent.certainty ?? "unspecified",
        movement_status: canonicalMovement,
        ...(canonicalMovement !== rawEvent.movement_status && rawEvent.movement_status != null
          ? { extensions: { legacy_movement_status: rawEvent.movement_status } }
          : {})
      }));
    }

    for (const [stateIndex, rawState] of asArray(rawChapter.end_states ?? rawChapter.final_states).entries()) {
      const character = rawState.character ?? rawState.entity;
      characterStates.push(cleanObject({
        id: `${id}-state-${character ?? stateIndex + 1}`,
        chapter: id,
        character,
        state: rawState.state,
        location: Object.hasOwn(rawState, "location") ? rawState.location : null,
        source_ref: rawState.source_ref ?? chapterSource,
        source_file: sourceFileForChapter(sourceFiles, id),
        certainty: rawState.certainty ?? "unspecified",
        scope: "chapter_end"
      }));
    }

    return cleanObject({
      id,
      global_section: rawChapter.global_section ?? rawChapter.section,
      title: rawChapter.title ?? sourceTitleForChapter(sourceFiles, id),
      source_ref: chapterSource,
      source_file: sourceFileForChapter(sourceFiles, id),
      characters,
      referenced_characters: referencedCharacters,
      groups,
      referenced_groups: referencedGroups,
      locations: asArray(rawChapter.locations),
      event_ids: asArray(rawChapter.events).map(event => event.id),
      character_state_ids: characterStates.filter(state => state.chapter === id).map(state => state.id),
      end_summary: typeof rawChapter.end_state === "string" ? rawChapter.end_state : undefined
    });
  });

  for (const [stateIndex, rawState] of asArray(manifest.final_character_states).entries()) {
    const local = localChapterFromRef(rawState.last_direct_source, book);
    const id = local ? chapterId(book, local) : null;
    characterStates.push(cleanObject({
      id: `b${book}-final-state-${rawState.character ?? stateIndex + 1}`,
      chapter: id,
      character: rawState.character,
      state: rawState.state,
      location: Object.hasOwn(rawState, "location") ? rawState.location : null,
      source_ref: rawState.last_direct_source,
      source_file: id ? sourceFileForChapter(sourceFiles, id) : null,
      reported_source_ref: rawState.last_reported_source,
      certainty: rawState.certainty ?? "unspecified",
      scope: "book_end"
    }));
    if (id) chapters.find(chapter => chapter.id === id)?.character_state_ids.push(`b${book}-final-state-${rawState.character ?? stateIndex + 1}`);
  }

  const normalizedCharacters = normalizeEntities(manifest, chapters, "characters", "characters");
  const normalizedGroups = normalizeEntities(manifest, chapters, "groups", "groups");
  const normalizedLocations = rawLocations.map(location => ({ ...location }));

  const canonical = {
    schema_version: "1.0.0",
    contract_version: CONTRACT_VERSION,
    contract: "docs/book-staging-contract.md",
    dataset: manifest.dataset,
    status: manifest.status,
    generated_on: manifest.generated_on,
    book: {
      number: book,
      title: manifest.book.title,
      chapter_count: chapters.length,
      global_sections: {
        minimum: Math.min(...chapters.map(chapter => chapter.global_section)),
        maximum: Math.max(...chapters.map(chapter => chapter.global_section))
      }
    },
    evidence_policy: manifest.evidence_policy ?? {},
    source_files: sourceFiles,
    chapters,
    characters: normalizedCharacters,
    groups: normalizedGroups,
    locations: normalizedLocations,
    events,
    character_states: characterStates,
    relationships: asArray(manifest.relationships).map((relationship, index) => normalizeRelationship(relationship, book, index)),
    historical_context: asArray(manifest.historical_context).map((entry, index) => normalizeHistoricalContext(entry, book, index)),
    external_validation: asArray(manifest.external_validation).map((entry, index) => normalizeExternalValidation(entry, book, index)),
    extensions: cleanObject({
      reconciliation: manifest.reconciliation,
      referential_audit: manifest.referential_audit,
      legacy_character_occurrence_index: manifest.entities?.character_occurrence_index,
      legacy_book3_filename: book === 3 ? "research/book3-fire-staging-manifest.json" : undefined
    })
  };
  return canonical;
};

const legacyInputForBook = async book => {
  const canonical = canonicalFile(book);
  if (existsSync(canonical)) return canonical;
  if (book === 3) {
    const legacy = path.join(researchDir, "book3-fire-staging-manifest.json");
    if (existsSync(legacy)) return legacy;
  }
  return null;
};

if (writeNormalized) {
  for (let book = MIN_BOOK; book <= MAX_BOOK; book += 1) {
    const input = await legacyInputForBook(book);
    if (!input) continue;
    const manifest = await readJson(input);
    const normalized = normalizeManifest(manifest);
    await writeFile(canonicalFile(book), `${JSON.stringify(normalized, null, 2)}\n`, "utf8");
    console.log(`Normalized Book ${book}: ${path.relative(root, canonicalFile(book))}`);
  }
}

const files = (await readdir(researchDir))
  .map(name => ({ name, match: name.match(/^book([3-7])-production-manifest\.json$/) }))
  .filter(entry => entry.match)
  .sort((a, b) => Number(a.match[1]) - Number(b.match[1]));

const allErrors = [];
const summaries = [];

const addError = (book, message) => allErrors.push(`Book ${book}: ${message}`);
const duplicates = values => [...new Set(values.filter((value, index) => values.indexOf(value) !== index))];

for (const { name, match } of files) {
  const book = Number(match[1]);
  const file = path.join(researchDir, name);
  let manifest;
  try {
    manifest = await readJson(file);
  } catch (error) {
    addError(book, `invalid JSON — ${error.message}`);
    continue;
  }

  if (manifest.contract_version !== CONTRACT_VERSION) addError(book, `contract_version must be ${CONTRACT_VERSION}; run with --normalize`);
  if (manifest.book?.number !== book) addError(book, `book.number ${manifest.book?.number} does not match filename`);

  const requiredArrays = ["source_files", "chapters", "characters", "groups", "locations", "events", "character_states", "relationships", "historical_context", "external_validation"];
  for (const key of requiredArrays) if (!Array.isArray(manifest[key])) addError(book, `${key} must be an array`);
  if (allErrors.some(error => error.startsWith(`Book ${book}:`) && error.includes("must be an array"))) continue;

  const chapterIds = manifest.chapters.map(chapter => chapter.id);
  const characterIds = manifest.characters.map(character => character.id);
  const groupIds = manifest.groups.map(group => group.id);
  const locationIds = manifest.locations.map(location => location.id);
  const eventIds = manifest.events.map(event => event.id);
  const stateIds = manifest.character_states.map(state => state.id);
  const relationshipIds = manifest.relationships.map(relationship => relationship.id);
  const historicalIds = manifest.historical_context.map(entry => entry.id);
  const externalValidationIds = manifest.external_validation.map(entry => entry.id);
  const sourceIds = manifest.source_files.map(source => source.chapter_id);
  const chapters = new Set(chapterIds);
  const characters = new Set(characterIds);
  const groups = new Set(groupIds);
  const locations = new Set(locationIds);
  const events = new Set(eventIds);
  const states = new Set(stateIds);

  for (const [label, values] of [["source chapter", sourceIds], ["chapter", chapterIds], ["character", characterIds], ["group", groupIds], ["location", locationIds], ["event", eventIds], ["character state", stateIds], ["relationship", relationshipIds], ["historical context", historicalIds], ["external validation", externalValidationIds]]) {
    const repeated = duplicates(values);
    if (repeated.length) addError(book, `duplicate ${label} IDs: ${repeated.join(", ")}`);
    if (values.some(value => typeof value !== "string" || !value)) addError(book, `${label} IDs must be non-empty strings`);
  }

  const expectedChapterIds = Array.from({ length: manifest.chapters.length }, (_, index) => chapterId(book, index + 1));
  if (JSON.stringify(chapterIds) !== JSON.stringify(expectedChapterIds)) addError(book, `chapter IDs must be ordered and contiguous: ${expectedChapterIds.join(", ")}`);
  const sections = manifest.chapters.map(chapter => chapter.global_section);
  const expectedSections = Array.from({ length: manifest.chapters.length }, (_, index) => manifest.book.global_sections.minimum + index);
  if (JSON.stringify(sections) !== JSON.stringify(expectedSections)) addError(book, `global sections are not contiguous from ${manifest.book.global_sections.minimum}`);
  if (manifest.book.chapter_count !== manifest.chapters.length) addError(book, `book.chapter_count ${manifest.book.chapter_count} != ${manifest.chapters.length}`);
  if (manifest.book.global_sections.maximum !== expectedSections.at(-1)) addError(book, `book.global_sections.maximum does not match chapters`);
  if (JSON.stringify(sourceIds) !== JSON.stringify(chapterIds)) addError(book, "source_files must align one-to-one with chapters");

  const sourceByChapter = new Map(manifest.source_files.map(source => [source.chapter_id, source]));
  const resolveSourceRef = (value, eventChapter = null) => {
    if (typeof value !== "string" || !value) return false;
    const withoutLines = value.replace(/:L\d+(?:-L?\d+)?$/, "");
    const exact = path.resolve(root, withoutLines);
    if (exact.startsWith(`${root}${path.sep}`) && existsSync(exact)) return true;
    if ([...sourceByChapter.values()].some(source => path.basename(source.file) === path.basename(withoutLines))) return true;
    const local = localChapterFromRef(withoutLines, book);
    if (local && sourceByChapter.has(chapterId(book, local))) return true;
    return eventChapter ? sourceByChapter.get(eventChapter)?.file === withoutLines : false;
  };

  for (const source of manifest.source_files) {
    const chapter = manifest.chapters.find(item => item.id === source.chapter_id);
    if (chapter && source.global_section !== chapter.global_section) addError(book, `${source.chapter_id} source global_section does not match chapter`);
    if (!source.file || !existsSync(path.resolve(root, source.file))) {
      addError(book, `missing source file ${source.file ?? "<undefined>"}`);
      continue;
    }
    const buffer = await readFile(path.resolve(root, source.file));
    if (Number.isInteger(source.line_count)) {
      const actualLines = buffer.toString("utf8").split("\n").length - 1;
      if (actualLines !== source.line_count) addError(book, `${source.file} line_count ${source.line_count} != ${actualLines}`);
    }
    if (source.sha256) {
      const actualHash = createHash("sha256").update(buffer).digest("hex");
      if (actualHash !== source.sha256) addError(book, `${source.file} sha256 mismatch`);
    }
  }

  for (const chapter of manifest.chapters) {
    if (!resolveSourceRef(chapter.source_ref, chapter.id)) addError(book, `${chapter.id} unresolved source_ref ${chapter.source_ref}`);
    if (chapter.source_file !== sourceByChapter.get(chapter.id)?.file) addError(book, `${chapter.id} source_file does not match source_files registry`);
    const present = new Set(chapter.characters);
    for (const id of chapter.characters) if (!characters.has(id)) addError(book, `${chapter.id} unknown character ${id}`);
    for (const id of chapter.referenced_characters) {
      if (!characters.has(id)) addError(book, `${chapter.id} unknown referenced character ${id}`);
      if (present.has(id)) addError(book, `${chapter.id} character ${id} is both present and referenced-only`);
    }
    for (const id of chapter.groups) if (!groups.has(id)) addError(book, `${chapter.id} unknown group ${id}`);
    const presentGroups = new Set(chapter.groups);
    for (const id of chapter.referenced_groups) {
      if (!groups.has(id)) addError(book, `${chapter.id} unknown referenced group ${id}`);
      if (presentGroups.has(id)) addError(book, `${chapter.id} group ${id} is both present and referenced-only`);
    }
    for (const id of chapter.locations) if (!locations.has(id)) addError(book, `${chapter.id} unknown location ${id}`);
    for (const id of chapter.event_ids) if (!events.has(id)) addError(book, `${chapter.id} unknown event ${id}`);
    for (const id of chapter.character_state_ids) if (!states.has(id)) addError(book, `${chapter.id} unknown character state ${id}`);
  }

  for (const event of manifest.events) {
    if (!chapters.has(event.chapter)) addError(book, `${event.id} unknown chapter ${event.chapter}`);
    if (!resolveSourceRef(event.source_ref, event.chapter)) addError(book, `${event.id} unresolved source_ref ${event.source_ref}`);
    if (event.source_file !== sourceByChapter.get(event.chapter)?.file) addError(book, `${event.id} source_file mismatch`);
    for (const id of event.characters) if (!characters.has(id)) addError(book, `${event.id} unknown character ${id}`);
    for (const id of event.referenced_characters) {
      if (!characters.has(id)) addError(book, `${event.id} unknown referenced character ${id}`);
      if (event.characters.includes(id)) addError(book, `${event.id} character ${id} is both participant and referenced-only`);
    }
    for (const id of event.groups) if (!groups.has(id)) addError(book, `${event.id} unknown group ${id}`);
    for (const id of event.referenced_groups) {
      if (!groups.has(id)) addError(book, `${event.id} unknown referenced group ${id}`);
      if (event.groups.includes(id)) addError(book, `${event.id} group ${id} is both participant and referenced-only`);
    }
    for (const field of ["location", "origin", "destination"]) {
      const value = event[field];
      if (value != null && value !== "unknown" && !locations.has(value)) addError(book, `${event.id} unknown ${field} ${value}`);
    }
    if (event.movement_status !== null && !MOVEMENT_STATUSES.has(event.movement_status)) addError(book, `${event.id} invalid movement_status ${event.movement_status}`);
    const owners = manifest.chapters.filter(chapter => chapter.event_ids.includes(event.id));
    if (owners.length !== 1 || owners[0]?.id !== event.chapter) addError(book, `${event.id} must be indexed exactly once by chapter ${event.chapter}`);
  }

  for (const state of manifest.character_states) {
    if (state.chapter !== null && !chapters.has(state.chapter)) addError(book, `${state.id} unknown chapter ${state.chapter}`);
    if (!characters.has(state.character)) addError(book, `${state.id} unknown character ${state.character}`);
    if (state.location !== null && !locations.has(state.location)) addError(book, `${state.id} unknown location ${state.location}`);
    if (!resolveSourceRef(state.source_ref, state.chapter)) addError(book, `${state.id} unresolved source_ref ${state.source_ref}`);
    const owners = manifest.chapters.filter(chapter => chapter.character_state_ids.includes(state.id));
    if (owners.length !== 1 || owners[0]?.id !== state.chapter) addError(book, `${state.id} must be indexed exactly once by chapter ${state.chapter}`);
  }

  for (const relationship of manifest.relationships) {
    for (const id of relationship.participants) if (!characters.has(id) && !groups.has(id)) addError(book, `${relationship.id} unknown participant ${id}`);
    for (const id of relationship.chapter_ids) if (!chapters.has(id)) addError(book, `${relationship.id} unknown chapter ${id}`);
    for (const evidence of relationship.evidence) {
      if (typeof evidence !== "string") continue;
      const looksLikeEvent = new RegExp(`^b${book}c\\d+[-_]e`).test(evidence);
      if (looksLikeEvent && !events.has(evidence)) addError(book, `${relationship.id} unknown evidence event ${evidence}`);
      else if (!looksLikeEvent && !resolveSourceRef(evidence, relationship.chapter_ids[0])) addError(book, `${relationship.id} unresolved evidence ${evidence}`);
    }
  }

  for (const entity of [...manifest.characters, ...manifest.groups, ...manifest.locations]) {
    for (const id of asArray(entity.physical_presence ?? entity.chapters)) if (!chapters.has(id)) addError(book, `${entity.id} unknown occurrence chapter ${id}`);
    for (const id of asArray(entity.mentioned_in)) if (!chapters.has(id)) addError(book, `${entity.id} unknown mention chapter ${id}`);
  }

  for (const entry of manifest.historical_context) {
    for (const id of entry.chapter_ids) if (!chapters.has(id)) addError(book, `${entry.id} unknown chapter ${id}`);
    for (const sourceRef of entry.source_refs) {
      if (!resolveSourceRef(sourceRef, entry.chapter_ids[0])) addError(book, `${entry.id} unresolved source_ref ${sourceRef}`);
    }
    for (const url of entry.urls) {
      if (typeof url !== "string" || !/^https?:\/\//.test(url)) addError(book, `${entry.id} invalid URL ${url}`);
    }
  }

  for (const entry of manifest.external_validation) {
    if (entry.url !== null && entry.url !== undefined && (typeof entry.url !== "string" || !/^https?:\/\//.test(entry.url))) addError(book, `${entry.id} invalid URL ${entry.url}`);
  }

  summaries.push({
    book,
    chapters: manifest.chapters.length,
    events: manifest.events.length,
    states: manifest.character_states.length,
    characters: manifest.characters.length,
    groups: manifest.groups.length,
    locations: manifest.locations.length,
    relationships: manifest.relationships.length,
    sectionMinimum: manifest.book.global_sections.minimum,
    sectionMaximum: manifest.book.global_sections.maximum
  });
}

for (let index = 1; index < summaries.length; index += 1) {
  const previous = summaries[index - 1];
  const current = summaries[index];
  if (current.book === previous.book + 1 && current.sectionMinimum !== previous.sectionMaximum + 1) {
    addError(`${previous.book}–${current.book}`, `global sections must continue from ${previous.sectionMaximum} to ${current.sectionMinimum}`);
  }
}

if (!files.length) addError("III–VII", "no canonical staging manifests found");

if (allErrors.length) {
  console.error(`Staging validation failed (${allErrors.length}):\n- ${allErrors.join("\n- ")}`);
  process.exit(1);
}

for (const summary of summaries) {
  console.log(`Book ${summary.book}: ${summary.chapters} chapters, ${summary.events} events, ${summary.states} states, ${summary.characters} characters, ${summary.groups} groups, ${summary.locations} locations, ${summary.relationships} relationships`);
}
console.log(`Staging validation passed: ${summaries.length} canonical manifest(s), Books ${summaries.map(summary => summary.book).join(", ")}.`);
