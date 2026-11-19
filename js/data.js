import { applyCharacterWikiOverlay, applyCollectionOverlay, DEFAULT_LANGUAGE, LANGUAGES } from "./i18n-overlay.js";

const jsonRequests = new Map();
// Literal paths so the build can append its cache-busting version to them.
const OVERLAY_PATHS = { it: "data/i18n/it.json", en: "data/i18n/en.json" };

async function loadJson(path) {
  if (!jsonRequests.has(path)) {
    const request = fetch(path)
      .then(response => {
        if (!response.ok) throw new Error(`Failed to load ${path}: HTTP ${response.status}`);
        return response.json();
      })
      .catch(error => {
        jsonRequests.delete(path);
        throw error;
      });
    jsonRequests.set(path, request);
  }
  return jsonRequests.get(path);
}

async function loadCanonicalData() {
  const [characters, locations, chapters, events, states, readerProgress, microWiki, characterWiki, identities, relationships, groups] = await Promise.all([
    loadJson("data/characters.json"),
    loadJson("data/locations.json"),
    loadJson("data/chapters.json"),
    loadJson("data/events.json"),
    loadJson("data/character-states.json"),
    loadJson("data/reader-progress.json"),
    loadJson("data/context/micro-wiki.json"),
    loadJson("data/context/character-wiki.json"),
    loadJson("data/identities.json"),
    loadJson("data/relationships.json"),
    loadJson("data/groups.json")
  ]);
  return { characters, locations, chapters, events, states, readerProgress, microWiki, characterWiki, identities, relationships, groups };
}

export function localizeData(canonical, overlay, language) {
  return {
    ...canonical,
    language,
    events: applyCollectionOverlay("events", canonical.events, overlay),
    states: applyCollectionOverlay("states", canonical.states, overlay),
    locations: applyCollectionOverlay("locations", canonical.locations, overlay),
    chapters: applyCollectionOverlay("chapters", canonical.chapters, overlay),
    groups: applyCollectionOverlay("groups", canonical.groups, overlay),
    identities: applyCollectionOverlay("identities", canonical.identities, overlay),
    microWiki: applyCollectionOverlay("micro_wiki", canonical.microWiki, overlay),
    characterWiki: applyCharacterWikiOverlay(canonical.characterWiki, overlay)
  };
}

// One immutable data view per language, shared by the map, the diary and the
// archive. Identity matters: per-data caches (archive, visibility) key on it.
const localized = new Map();

export function loadData(language = DEFAULT_LANGUAGE) {
  const target = LANGUAGES.includes(language) ? language : DEFAULT_LANGUAGE;
  if (!localized.has(target)) {
    const request = Promise.all([loadCanonicalData(), loadJson(OVERLAY_PATHS[target])])
      .then(([canonical, overlay]) => localizeData(canonical, overlay, target))
      .catch(error => {
        localized.delete(target);
        throw error;
      });
    localized.set(target, request);
  }
  return localized.get(target);
}
