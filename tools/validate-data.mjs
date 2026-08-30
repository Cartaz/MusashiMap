import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { validateMovementEvent } from "../js/movement-contract.js";
import { validatePositionState } from "../js/position-contract.js";

const REQUIRED_FILES = [
  "data/chapters.json",
  "data/reader-progress.json",
  "data/characters.json",
  "data/groups.json",
  "data/locations.json",
  "data/events.json",
  "data/character-states.json",
  "data/relationships.json",
  "data/identities.json",
  "data/context/character-wiki.json",
  "data/context/entities.json",
  "data/context/micro-wiki.json"
];

const CERTAINTIES = new Set(["explicit", "strong_inference", "weak_inference"]);
const CHAPTER_ID = /^b([1-7])c([1-9]\d*)$/;

const isObject = value => value !== null && typeof value === "object" && !Array.isArray(value);
const isString = value => typeof value === "string" && value.length > 0;
const hasCoordinates = location => Array.isArray(location?.coordinates)
  && location.coordinates.length === 2
  && location.coordinates.every(Number.isFinite);
const normalizeEntityLabel = value => String(value ?? "")
  .normalize("NFKD")
  .replace(/\p{M}/gu, "")
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "");

const duplicateIds = (records, label, errors) => {
  const seen = new Set();
  for (const record of records) {
    if (!isString(record?.id)) {
      errors.push(`${label} entry has no non-empty id.`);
    } else if (seen.has(record.id)) {
      errors.push(`Duplicate ${label} id ${record.id}.`);
    }
    seen.add(record?.id);
  }
};

const required = (record, fields, label, errors) => {
  for (const field of fields) {
    if (!(field in record) || record[field] === undefined) errors.push(`${label} is missing ${field}.`);
  }
};

export function validateRepository(root = process.cwd()) {
  const errors = [];
  const warnings = [];
  const documents = new Map();

  for (const relative of REQUIRED_FILES) {
    const absolute = path.join(root, relative);
    if (!fs.existsSync(absolute)) {
      errors.push(`Missing required data file ${relative}.`);
      continue;
    }
    try {
      documents.set(relative, JSON.parse(fs.readFileSync(absolute, "utf8")));
    } catch (error) {
      errors.push(`Invalid JSON in ${relative}: ${error.message}`);
    }
  }
  if (errors.length) return { errors, warnings, counts: {} };

  const chaptersData = documents.get("data/chapters.json");
  const progressData = documents.get("data/reader-progress.json");
  const charactersData = documents.get("data/characters.json");
  const groupsData = documents.get("data/groups.json");
  const locationsData = documents.get("data/locations.json");
  const eventsData = documents.get("data/events.json");
  const statesData = documents.get("data/character-states.json");
  const relationshipsData = documents.get("data/relationships.json");
  const identitiesData = documents.get("data/identities.json");
  const characterWikiData = documents.get("data/context/character-wiki.json");
  const contextEntitiesData = documents.get("data/context/entities.json");
  const microWikiData = documents.get("data/context/micro-wiki.json");

  const collections = [
    [chaptersData, "sections", "data/chapters.json"],
    [charactersData, "characters", "data/characters.json"],
    [groupsData, "groups", "data/groups.json"],
    [locationsData, "locations", "data/locations.json"],
    [eventsData, "events", "data/events.json"],
    [statesData, "character_states", "data/character-states.json"],
    [relationshipsData, "relationships", "data/relationships.json"],
    [identitiesData, "identities", "data/identities.json"],
    [contextEntitiesData, "entities", "data/context/entities.json"],
    [microWikiData, "entities", "data/context/micro-wiki.json"]
  ];
  for (const [document, key, file] of collections) {
    if (!Array.isArray(document?.[key])) errors.push(`${file} must contain an array named ${key}.`);
  }
  if (errors.length) return { errors, warnings, counts: {} };

  for (const [document, key, file] of collections) {
    document[key].forEach((record, index) => {
      if (!isObject(record)) errors.push(`${file} ${key}[${index}] must be an object.`);
    });
  }
  if (errors.length) return { errors, warnings, counts: {} };

  const sections = chaptersData.sections;
  const characters = charactersData.characters;
  const groups = groupsData.groups;
  const locations = locationsData.locations;
  const events = eventsData.events;
  const states = statesData.character_states;
  const relationships = relationshipsData.relationships;
  const identities = identitiesData.identities;
  const contextEntities = contextEntitiesData.entities;
  const microWiki = microWikiData.entities;
  if (!isObject(characterWikiData?.characters)) errors.push("data/context/character-wiki.json must contain an object named characters.");
  duplicateIds(sections, "section", errors);
  duplicateIds(characters, "character", errors);
  duplicateIds(groups, "group", errors);
  duplicateIds(locations, "location", errors);
  duplicateIds(events, "event", errors);
  duplicateIds(contextEntities, "context entity", errors);
  duplicateIds(microWiki, "micro-wiki entity", errors);

  const sectionByNumber = new Map();
  const sectionByChapter = new Map();
  const sourceLineCounts = new Map();
  for (const section of sections) {
    required(section, ["id", "chapter_id", "number", "book", "book_number", "book_title", "title", "source_file"], `Section ${section.id ?? "<unknown>"}`, errors);
    if (!Number.isInteger(section.number) || section.number < 1) errors.push(`Section ${section.id} has invalid number.`);
    if (section.id !== `s${String(section.number).padStart(3, "0")}`) errors.push(`Section ${section.id} does not match number ${section.number}.`);
    const match = CHAPTER_ID.exec(section.chapter_id);
    if (!match) errors.push(`Section ${section.id} has invalid chapter_id ${section.chapter_id}.`);
    else if (Number(match[1]) !== section.book_number) errors.push(`Section ${section.id} chapter_id disagrees with book_number.`);
    if (sectionByNumber.has(section.number)) errors.push(`Duplicate section number ${section.number}.`);
    if (sectionByChapter.has(section.chapter_id)) errors.push(`Duplicate chapter_id ${section.chapter_id}.`);
    sectionByNumber.set(section.number, section);
    sectionByChapter.set(section.chapter_id, section);
  }
  const orderedNumbers = [...sectionByNumber.keys()].sort((a, b) => a - b);
  orderedNumbers.forEach((number, index) => {
    if (number !== index + 1) errors.push(`Chapter registry is not contiguous: expected section ${index + 1}, found ${number}.`);
  });

  const progress = progressData?.state;
  if (!isObject(progress)) errors.push("reader-progress.state must be an object.");
  const minimum = progress?.minimum_section;
  const maximum = progress?.maximum_section;
  const current = progress?.current_section;
  if (![minimum, maximum, current].every(Number.isInteger)) errors.push("Reader minimum/current/maximum sections must be integers.");
  if (minimum !== 1) errors.push(`Reader minimum_section must be 1, found ${minimum}.`);
  if (Number.isInteger(maximum) && !sectionByNumber.has(maximum)) errors.push(`Reader maximum_section ${maximum} is not registered.`);
  if (Number.isInteger(current) && Number.isInteger(minimum) && Number.isInteger(maximum) && (current < minimum || current > maximum)) {
    errors.push(`Reader current_section ${current} is outside ${minimum}–${maximum}.`);
  }
  const publishedSections = sections.filter(section => section.number >= minimum && section.number <= maximum);

  // Registered chapters, including staged ones, must resolve to their exact
  // primary source and retain the source's first non-empty header as title.
  for (const section of sections) {
    const sourceDirectory = path.join(root, `data/source/book${section.book_number}`);
    const prefix = `chapter${CHAPTER_ID.exec(section.chapter_id)?.[2]}-`;
    const matches = fs.existsSync(sourceDirectory)
      ? fs.readdirSync(sourceDirectory).filter(name => name.startsWith(prefix) && name.endsWith(".txt"))
      : [];
    if (matches.length !== 1) errors.push(`Chapter ${section.chapter_id} must have exactly one source file under data/source/book${section.book_number} (found ${matches.length}).`);
    const expectedRelative = matches.length === 1
      ? path.posix.join(`data/source/book${section.book_number}`, matches[0])
      : null;
    if (expectedRelative && section.source_file !== expectedRelative) {
      errors.push(`Chapter ${section.chapter_id} source_file must be ${expectedRelative}, found ${section.source_file}.`);
      continue;
    }
    if (!expectedRelative) continue;
    const sourceText = fs.readFileSync(path.join(root, expectedRelative), "utf8");
    sourceLineCounts.set(section.chapter_id, sourceText.split(/\r?\n/).length - (sourceText.endsWith("\n") ? 1 : 0));
    const sourceTitle = sourceText.split(/\r?\n/).find(line => line.trim())?.trim();
    if (section.title !== sourceTitle) {
      errors.push(`Chapter ${section.chapter_id} title must match its first source header ${JSON.stringify(sourceTitle)}, found ${JSON.stringify(section.title)}.`);
    }
  }

  const characterById = new Map(characters.map(character => [character.id, character]));
  const groupById = new Map(groups.map(group => [group.id, group]));
  const locationById = new Map(locations.map(location => [location.id, location]));
  const characterLabels = new Map();
  for (const character of characters) {
    for (const label of [character.name, ...(character.aliases ?? [])]) {
      const normalized = normalizeEntityLabel(label);
      if (!normalized) continue;
      const owner = characterLabels.get(normalized);
      if (owner && owner !== character.id) errors.push(`Character label ${JSON.stringify(label)} collides between ${owner} and ${character.id}.`);
      else characterLabels.set(normalized, character.id);
    }
  }

  for (const group of groups) {
    required(group, ["id", "name", "aliases", "introduced_section", "present_in", "mentioned_in"], `Group ${group.id ?? "<unknown>"}`, errors);
    if (!Array.isArray(group.aliases) || !Array.isArray(group.present_in) || !Array.isArray(group.mentioned_in)) {
      errors.push(`Group ${group.id} aliases, present_in and mentioned_in must be arrays.`);
    }
    if (!sectionByNumber.has(group.introduced_section)) errors.push(`Group ${group.id} has unknown introduced_section ${group.introduced_section}.`);
    for (const field of ["present_in", "mentioned_in"]) {
      for (const section of group[field] ?? []) {
        if (!sectionByNumber.has(section)) errors.push(`Group ${group.id} references unknown ${field} section ${section}.`);
      }
    }
  }
  const sourceRefMatchesChapter = (sourceRef, chapterId) => {
    if (!isString(sourceRef)) return false;
    const chapter = sectionByChapter.get(chapterId);
    if (!chapter?.source_file) return false;
    const withoutLines = sourceRef.replace(/:L\d+(?:-L?\d+)?$/, "");
    const match = CHAPTER_ID.exec(chapterId);
    const token = match ? `book${match[1]}/chapter${match[2]}` : null;
    return withoutLines === chapter.source_file
      || withoutLines === token
      || path.basename(withoutLines) === path.basename(chapter.source_file);
  };
  const validateSourceRef = (record, label) => {
    if (!sourceRefMatchesChapter(record.source_ref, record.chapter)) {
      errors.push(`${label} source_ref ${record.source_ref ?? "<missing>"} does not resolve to ${record.chapter}.`);
      return;
    }
    if (record.source_file !== undefined && record.source_file !== sectionByChapter.get(record.chapter)?.source_file) {
      errors.push(`${label} source_file ${record.source_file} disagrees with ${record.chapter}.`);
    }
    const lineMatch = record.source_ref.match(/:L(\d+)(?:-L?(\d+))?$/);
    if (!lineMatch) return;
    const start = Number(lineMatch[1]);
    const end = Number(lineMatch[2] ?? lineMatch[1]);
    const total = sourceLineCounts.get(record.chapter);
    if (start < 1 || end < start || !Number.isInteger(total) || end > total) {
      errors.push(`${label} has invalid source line range ${start}–${end} for ${record.chapter} (${total ?? 0} lines).`);
    }
  };
  for (const character of characters) {
    required(character, ["id", "name", "aliases", "importance", "entity_type", "historical_status", "present_in"], `Character ${character.id ?? "<unknown>"}`, errors);
    if (!Array.isArray(character.aliases) || !Array.isArray(character.present_in)) errors.push(`Character ${character.id} aliases and present_in must be arrays.`);
    for (const section of character.present_in ?? []) {
      if (!sectionByNumber.has(section)) errors.push(`Character ${character.id} references unknown present_in section ${section}.`);
    }
  }

  for (const location of locations) {
    required(location, ["id", "name", "type", "coordinates", "introduced_section"], `Location ${location.id ?? "<unknown>"}`, errors);
    if (!sectionByNumber.has(location.introduced_section)) errors.push(`Location ${location.id} has unknown introduced_section ${location.introduced_section}.`);
    if (location.coordinates !== null && !hasCoordinates(location)) errors.push(`Location ${location.id} has invalid coordinates.`);
    if (hasCoordinates(location) && (!isString(location.coordinate_precision) || !isString(location.geographic_confidence))) {
      errors.push(`Mapped location ${location.id} lacks precision/confidence metadata.`);
    }
    if (location.coordinate_precision === "approximate_area" && (!Number.isFinite(location.coordinate_radius_m) || location.coordinate_radius_m <= 0)) {
      errors.push(`Approximate area ${location.id} must have a positive coordinate_radius_m.`);
    }
    // Narrative points remain tightly bounded; named broad areas can encode a
    // larger uncertainty envelope without pretending to be a precise site.
    if (location.coordinate_precision === "approximate_area" && location.type !== "area" && location.coordinate_radius_m > 1000) {
      errors.push(`Approximate point/site ${location.id} exceeds the 1000 m uncertainty limit.`);
    }
    if (location.coordinate_precision === "approximate_area" && location.type === "area" && location.coordinate_radius_m > 5000) {
      errors.push(`Approximate broad area ${location.id} exceeds the 5000 m uncertainty limit.`);
    }
  }

  const assertCharacter = (id, context) => {
    if (!characterById.has(id)) errors.push(`${context} references unknown character ${id}.`);
  };
  const assertLocation = (id, context) => {
    if (id && id !== "unknown" && !locationById.has(id)) errors.push(`${context} references unknown location ${id}.`);
  };
  const assertGroup = (id, context) => {
    if (!groupById.has(id)) errors.push(`${context} references unknown group ${id}.`);
  };
  for (const event of events) {
    required(event, ["id", "chapter", "section", "type", "characters", "description", "certainty", "source_ref"], `Event ${event.id ?? "<unknown>"}`, errors);
    const section = sectionByNumber.get(event.section);
    if (!section) errors.push(`Event ${event.id} uses unknown section ${event.section}.`);
    else if (section.chapter_id !== event.chapter) errors.push(`Event ${event.id} chapter ${event.chapter} disagrees with section ${event.section}.`);
    if (!Array.isArray(event.characters)) errors.push(`Event ${event.id} characters must be an array.`);
    for (const field of ["referenced_characters", "witnesses", "groups", "referenced_groups", "via"]) {
      if (event[field] !== undefined && !Array.isArray(event[field])) errors.push(`Event ${event.id} ${field} must be an array when present.`);
    }
    if (!(event.characters?.length) && !(event.referenced_characters?.length)) {
      errors.push(`Event ${event.id} must identify a physical or referenced character.`);
    }
    for (const id of [event.characters, event.referenced_characters, event.witnesses].flatMap(value => value ?? [])) assertCharacter(id, `Event ${event.id}`);
    for (const id of [event.groups, event.referenced_groups].flatMap(value => value ?? [])) assertGroup(id, `Event ${event.id}`);
    for (const id of [event.location, event.origin, event.destination, ...(event.via ?? [])]) assertLocation(id, `Event ${event.id}`);
    if (!CERTAINTIES.has(event.certainty)) errors.push(`Event ${event.id} has invalid certainty ${event.certainty}.`);
    validateSourceRef(event, `Event ${event.id}`);
    for (const violation of validateMovementEvent(event)) {
      if (violation === "movement_status_required") errors.push(`Movement event ${event.id} with route data needs a valid movement_status.`);
      if (violation === "physical_participant_required") errors.push(`Event ${event.id} has route data without a physically participating character.`);
      if (violation === "arrival_target_required") errors.push(`Event ${event.id} claims arrival_confirmed without a known destination/location.`);
      if (violation === "destination_evidence_required") errors.push(`Event ${event.id} needs a destination or destination_label for ${event.movement_status}.`);
      if (violation === "route_evidence_required") errors.push(`Event ${event.id} claims ${event.movement_status} without any route evidence.`);
    }
  }

  const stateKeys = new Set();
  const latestByCharacter = new Map();
  for (const state of [...states].sort((a, b) => a.section - b.section)) {
    required(state, ["chapter", "section", "character", "location", "status", "activity", "certainty"], `State ${state.character ?? "<unknown>"}@${state.section ?? "?"}`, errors);
    const key = `${state.character}@${state.section}`;
    if (stateKeys.has(key)) errors.push(`Duplicate character state ${key}.`);
    stateKeys.add(key);
    const section = sectionByNumber.get(state.section);
    if (!section) errors.push(`State ${key} uses unknown section.`);
    else if (section.chapter_id !== state.chapter) errors.push(`State ${key} chapter ${state.chapter} disagrees with its section.`);
    assertCharacter(state.character, `State ${key}`);
    for (const id of [state.location, state.last_known_location, state.departure_from]) assertLocation(id, `State ${key}`);
    if (!CERTAINTIES.has(state.certainty)) errors.push(`State ${key} has invalid certainty ${state.certainty}.`);
    if (state.source_ref !== undefined) validateSourceRef(state, `State ${key}`);
    if (state.location === null && state.status === "away" && !state.location_status && !state.last_known_location) {
      errors.push(`Away state ${key} must explain the missing location.`);
    }
    if (["departed", "away"].includes(state.status) && state.location !== null) {
      errors.push(`Non-present state ${key} cannot retain a physical location.`);
    }
    for (const violation of validatePositionState(state)) {
      if (violation === "invalid_location_status") errors.push(`State ${key} has invalid location_status ${state.location_status}.`);
      if (violation === "non_physical_location") errors.push(`State ${key} with non-physical location_status ${state.location_status} cannot retain a physical location.`);
      if (violation === "reported_location_required") errors.push(`State ${key} with reported_position needs a reported or last-known location.`);
    }
    const previous = latestByCharacter.get(state.character);
    if (previous?.status === "dead" && state.status !== "dead") errors.push(`${state.character} becomes ${state.status} after being dead in section ${previous.section}.`);
    if (publishedSections.some(section => section.number === state.section)
      && previous?.location && state.location && previous.location !== state.location) {
      const hasMovementEvidence = events.some(event => event.section === state.section
        && (event.characters ?? []).includes(state.character)
        && [event.origin, event.location, event.destination].includes(state.location));
      if (!hasMovementEvidence) warnings.push(`State transition ${state.character}: ${previous.location} → ${state.location} in section ${state.section} has no matching event.`);
    }
    latestByCharacter.set(state.character, state);
  }

  for (const relationship of relationships) {
    required(relationship, ["from", "to", "type", "first_section"], "Relationship", errors);
    assertCharacter(relationship.from, "Relationship");
    assertCharacter(relationship.to, "Relationship");
    if (relationship.from === relationship.to) errors.push(`Relationship ${relationship.from} → ${relationship.to} is self-referential.`);
    if (!sectionByNumber.has(relationship.first_section)) errors.push(`Relationship ${relationship.from} → ${relationship.to} has unknown first_section ${relationship.first_section}.`);
    if (!(relationshipsData.relationship_types ?? []).includes(relationship.type)) errors.push(`Relationship ${relationship.from} → ${relationship.to} has undeclared type ${relationship.type}.`);
  }

  const identityRanges = new Map();
  for (const identity of identities) {
    required(identity, ["character_id", "display_name", "valid_from_chapter", "valid_until_chapter", "valid_from_section", "valid_until_section", "reader_knows_canonical_identity", "status"], "Identity", errors);
    assertCharacter(identity.character_id, "Identity");
    const fromChapter = sectionByNumber.get(identity.valid_from_section)?.chapter_id;
    if (!fromChapter || identity.valid_from_chapter !== fromChapter) errors.push(`Identity ${identity.character_id}/${identity.display_name} has inconsistent valid_from chapter/section.`);
    if (identity.valid_until_section !== null) {
      const untilChapter = sectionByNumber.get(identity.valid_until_section)?.chapter_id;
      if (!untilChapter || identity.valid_until_chapter !== untilChapter || identity.valid_until_section < identity.valid_from_section) {
        errors.push(`Identity ${identity.character_id}/${identity.display_name} has inconsistent valid_until chapter/section.`);
      }
    } else if (identity.valid_until_chapter !== null) {
      errors.push(`Identity ${identity.character_id}/${identity.display_name} has a terminal chapter without a terminal section.`);
    }
    if (typeof identity.reader_knows_canonical_identity !== "boolean") errors.push(`Identity ${identity.character_id}/${identity.display_name} reader knowledge must be boolean.`);
    const until = identity.valid_until_section ?? Number.POSITIVE_INFINITY;
    const ranges = identityRanges.get(identity.character_id) ?? [];
    if (ranges.some(range => identity.valid_from_section <= range.until && until >= range.from)) errors.push(`Identity ranges overlap for ${identity.character_id}.`);
    ranges.push({ from: identity.valid_from_section, until });
    identityRanges.set(identity.character_id, ranges);
  }

  for (const [characterId, entry] of Object.entries(characterWikiData.characters ?? {})) {
    if (entry.category !== "context") assertCharacter(characterId, "Character wiki");
    if (!isObject(entry.current_by_section)) errors.push(`Character wiki ${characterId} needs current_by_section.`);
    for (const [field, progressiveValues] of [["current_by_section", entry.current_by_section], ["display_name_by_section", entry.display_name_by_section]]) {
      if (progressiveValues === undefined) continue;
      if (!isObject(progressiveValues)) {
        errors.push(`Character wiki ${characterId} ${field} must be an object.`);
        continue;
      }
      for (const [key, value] of Object.entries(progressiveValues)) {
        const section = Number(key);
        if (!Number.isSafeInteger(section) || !sectionByNumber.has(section)) errors.push(`Character wiki ${characterId} ${field} has unknown section ${key}.`);
        if (typeof value !== "string" || !value.trim()) errors.push(`Character wiki ${characterId} ${field} needs non-empty text at section ${key}.`);
      }
    }
  }

  for (const entity of contextEntities) {
    if (entity.first_section !== undefined && entity.first_section !== null && !sectionByNumber.has(entity.first_section)) errors.push(`Context entity ${entity.id} has unknown first_section ${entity.first_section}.`);
    if (entity.character_id !== undefined) assertCharacter(entity.character_id, `Context entity ${entity.id}`);
    for (const url of entity.source_urls ?? []) if (!/^https:\/\//.test(url)) errors.push(`Context entity ${entity.id} has non-HTTPS source URL.`);
  }

  for (const entity of microWiki) {
    const first = entity.novel_trigger?.first_section ?? entity.novel_trigger?.first_book1_section;
    const safe = entity.novel_trigger?.spoiler_safe_until;
    if (!sectionByNumber.has(first) || !sectionByNumber.has(safe) || safe < first) errors.push(`Micro-wiki ${entity.id} has invalid reveal thresholds ${first}/${safe}.`);
    if (entity.source?.url && !/^https:\/\//.test(entity.source.url)) errors.push(`Micro-wiki ${entity.id} has non-HTTPS source URL.`);
  }

  // Publication is atomic. Registered chapters above maximum_section are staging.
  const eventSections = new Set(events.map(event => event.section));
  const stateSections = new Set(states.map(state => state.section));
  for (const section of publishedSections) {
    if (!eventSections.has(section.number)) errors.push(`Published chapter ${section.chapter_id} has no events.`);
    if (!stateSections.has(section.number)) errors.push(`Published chapter ${section.chapter_id} has no character states.`);
  }
  for (const event of events) {
    const location = event.location && locationById.get(event.location);
    if (publishedSections.some(section => section.number === event.section) && location && location.introduced_section > event.section) {
      errors.push(`Event ${event.id} uses ${location.id} before its introduction.`);
    }
  }
  for (const state of states) {
    const location = state.location && locationById.get(state.location);
    if (publishedSections.some(section => section.number === state.section) && location && location.introduced_section > state.section) {
      errors.push(`State ${state.character}@${state.section} uses ${location.id} before its introduction.`);
    }
  }

  const publishedBooks = [...new Set(publishedSections.map(section => section.book))];
  return {
    errors,
    warnings,
    counts: {
      registeredSections: sections.length,
      publishedSections: publishedSections.length,
      publishedBooks,
      events: events.length,
      states: states.length,
      characters: characters.length,
      groups: groups.length,
      locations: locations.length
    }
  };
}

function parseRoot(argv) {
  const index = argv.indexOf("--root");
  if (index === -1) return process.cwd();
  if (!argv[index + 1]) throw new Error("--root needs a directory");
  return path.resolve(argv[index + 1]);
}

export function runCli(argv = process.argv.slice(2)) {
  let root;
  try {
    root = parseRoot(argv);
  } catch (error) {
    console.error(error.message);
    return 2;
  }
  const result = validateRepository(root);
  const counts = result.counts;
  console.log(`MusashiMap data validator: ${counts.publishedSections ?? 0}/${counts.registeredSections ?? 0} published sections; ${counts.events ?? 0} events, ${counts.states ?? 0} states, ${counts.characters ?? 0} characters, ${counts.groups ?? 0} groups, ${counts.locations ?? 0} locations.`);
  if (result.warnings.length) console.warn(`Warnings (${result.warnings.length}):\n- ${result.warnings.join("\n- ")}`);
  if (result.errors.length) {
    console.error(`Errors (${result.errors.length}):\n- ${result.errors.join("\n- ")}`);
    return 1;
  }
  console.log(`Semantic validation passed for published book(s): ${counts.publishedBooks.join(", ")}.`);
  return 0;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  process.exitCode = runCli();
}
