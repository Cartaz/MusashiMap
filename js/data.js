const ASSET_VERSION = "20260820-03";
const jsonRequests = new Map();

async function loadJson(path) {
  if (!jsonRequests.has(path)) {
    const request = fetch(`${path}?v=${ASSET_VERSION}`, { cache: "no-store" })
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

export async function loadData() {
  const [characters, locations, chapters, events, states, readerProgress, microWiki, characterWiki, identities] = await Promise.all([
    loadJson("data/characters.json"),
    loadJson("data/locations.json"),
    loadJson("data/chapters.json"),
    loadJson("data/events.json"),
    loadJson("data/character-states.json"),
    loadJson("data/reader-progress.json"),
    loadJson("data/context/micro-wiki.json"),
    loadJson("data/context/character-wiki.json"),
    loadJson("data/identities.json")
  ]);
  return { characters, locations, chapters, events, states, readerProgress, microWiki, characterWiki, identities };
}

export async function loadMapData() {
  const [locations, events, states, characters, identities] = await Promise.all([
    loadJson("data/locations.json"),
    loadJson("data/events.json"),
    loadJson("data/character-states.json"),
    loadJson("data/characters.json"),
    loadJson("data/identities.json")
  ]);
  return { locations, events, states, characters, identities };
}
