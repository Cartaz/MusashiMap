import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const output = path.join(root, "_site");

const runtimeFiles = [
  "index.html",
  "css/app.css",
  "css/legend.css",
  "css/map-unmapped.css",
  "css/marker-overrides.css",
  "css/paper-texture.css",
  "css/parchment-overrides.css",
  "css/responsive-polish.css",
  "css/style-v2.css",
  "css/ui-redesign.css",
  "assets/icons/places/area.svg",
  "assets/icons/places/castle.svg",
  "assets/icons/places/city.svg",
  "assets/icons/places/landmark.svg",
  "assets/icons/places/river.svg",
  "assets/icons/places/route.svg",
  "assets/icons/places/temple.svg",
  "assets/icons/places/village.svg",
  "js/app.js",
  "js/character-collision.js",
  "js/data.js",
  "js/legend-toggle.js",
  "js/map-runtime.js",
  "js/movement-contract.js",
  "js/popups.js",
  "js/reader-progress.js",
  "js/validate.js"
];

const readJson = relative => JSON.parse(fs.readFileSync(path.join(root, relative), "utf8"));
const writeFile = (relative, contents) => {
  const destination = path.join(output, relative);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.writeFileSync(destination, contents);
};
const writeJson = (relative, value) => writeFile(relative, `${JSON.stringify(value, null, 2)}\n`);

const progress = readJson("data/reader-progress.json")?.state;
if (!Number.isInteger(progress?.minimum_section) || !Number.isInteger(progress?.maximum_section)) {
  throw new Error("Refusing to build without an explicit reader publication boundary.");
}

fs.rmSync(output, { recursive: true, force: true });
for (const relative of runtimeFiles) {
  const source = path.join(root, relative);
  if (!fs.existsSync(source)) throw new Error(`Missing runtime asset ${relative}.`);
  writeFile(relative, fs.readFileSync(source));
}

const chapters = readJson("data/chapters.json");
const publishedSections = (chapters.sections ?? []).filter(section =>
  section.number >= progress.minimum_section && section.number <= progress.maximum_section
);
if (publishedSections.length !== progress.maximum_section - progress.minimum_section + 1) {
  throw new Error("Published chapter registry is incomplete or non-contiguous.");
}
writeJson("data/chapters.json", { ...chapters, sections: publishedSections });

const inPublishedRange = section => Number.isInteger(section)
  && section >= progress.minimum_section
  && section <= progress.maximum_section;
const eventsDocument = readJson("data/events.json");
const statesDocument = readJson("data/character-states.json");
const publishedEvents = (eventsDocument.events ?? []).filter(event => inPublishedRange(event.section));
const publishedStates = (statesDocument.character_states ?? []).filter(state => inPublishedRange(state.section));
writeJson("data/events.json", { ...eventsDocument, events: publishedEvents });
writeJson("data/character-states.json", { ...statesDocument, character_states: publishedStates });

const characterWikiDocument = readJson("data/context/character-wiki.json");
const publishedCharacterWiki = Object.fromEntries(Object.entries(characterWikiDocument.characters ?? {})
  .map(([id, entry]) => [id, {
    ...entry,
    ...(entry.display_name_by_section ? {
      display_name_by_section: Object.fromEntries(Object.entries(entry.display_name_by_section)
        .filter(([section]) => inPublishedRange(Number(section))))
    } : {}),
    current_by_section: Object.fromEntries(Object.entries(entry.current_by_section ?? {})
      .filter(([section]) => inPublishedRange(Number(section))))
  }])
  .filter(([, entry]) => Object.keys(entry.current_by_section).length));
writeJson("data/context/character-wiki.json", { ...characterWikiDocument, characters: publishedCharacterWiki });

const evidencedCharacters = new Set([
  ...publishedEvents.flatMap(event => [event.characters, event.referenced_characters, event.witnesses].flatMap(value => value ?? [])),
  ...publishedStates.map(state => state.character),
  ...Object.keys(publishedCharacterWiki)
]);
const charactersDocument = readJson("data/characters.json");
const publishedCharacters = (charactersDocument.characters ?? [])
  .filter(character => evidencedCharacters.has(character.id)
    || inPublishedRange(character.introduced_section)
    || (character.present_in ?? []).some(inPublishedRange))
  .map(character => ({ ...character, present_in: (character.present_in ?? []).filter(inPublishedRange) }));
const publishedCharacterIds = new Set(publishedCharacters.map(character => character.id));
writeJson("data/characters.json", {
  ...charactersDocument,
  main_cast: (charactersDocument.main_cast ?? []).filter(id => publishedCharacterIds.has(id)),
  characters: publishedCharacters
});

const groupsDocument = readJson("data/groups.json");
const publishedGroups = (groupsDocument.groups ?? [])
  .filter(group => inPublishedRange(group.introduced_section)
    || (group.present_in ?? []).some(inPublishedRange)
    || (group.mentioned_in ?? []).some(inPublishedRange))
  .map(group => ({
    ...group,
    present_in: (group.present_in ?? []).filter(inPublishedRange),
    mentioned_in: (group.mentioned_in ?? []).filter(inPublishedRange)
  }));
writeJson("data/groups.json", { ...groupsDocument, groups: publishedGroups });

const referencedLocations = new Set([
  ...publishedEvents.flatMap(event => [event.location, event.origin, event.destination, ...(event.via ?? [])]),
  ...publishedStates.flatMap(state => [state.location, state.last_known_location, state.departure_from])
].filter(Boolean));
const locationsDocument = readJson("data/locations.json");
const publishedLocations = (locationsDocument.locations ?? []).filter(location =>
  referencedLocations.has(location.id) || inPublishedRange(location.introduced_section)
);
writeJson("data/locations.json", { ...locationsDocument, locations: publishedLocations });

const microWikiDocument = readJson("data/context/micro-wiki.json");
const publishedMicroWiki = (microWikiDocument.entities ?? []).filter(entry => {
  const first = entry.novel_trigger?.first_section ?? entry.novel_trigger?.first_book1_section;
  const safe = entry.novel_trigger?.spoiler_safe_until;
  return inPublishedRange(Number(first)) && inPublishedRange(Number(safe));
});
writeJson("data/context/micro-wiki.json", { ...microWikiDocument, entities: publishedMicroWiki });
const identitiesDocument = readJson("data/identities.json");
const chapterBySection = new Map(publishedSections.map(section => [section.number, section.chapter_id]));
const publishedIdentities = (identitiesDocument.identities ?? [])
  .filter(identity => inPublishedRange(identity.valid_from_section) && publishedCharacterIds.has(identity.character_id))
  .map(identity => {
    const validUntil = identity.valid_until_section === null
      ? progress.maximum_section
      : Math.min(identity.valid_until_section, progress.maximum_section);
    return {
      ...identity,
      valid_until_section: validUntil,
      valid_until_chapter: chapterBySection.get(validUntil) ?? null
    };
  });
writeJson("data/identities.json", { ...identitiesDocument, identities: publishedIdentities });
writeJson("data/reader-progress.json", readJson("data/reader-progress.json"));

for (const forbidden of ["research", "tools", "docs", "data/source", "data/audit"]) {
  if (fs.existsSync(path.join(output, forbidden))) throw new Error(`Forbidden Pages path emitted: ${forbidden}.`);
}

console.log(`Pages artifact built: ${publishedSections.length} published sections, ${runtimeFiles.length + 10} files.`);
