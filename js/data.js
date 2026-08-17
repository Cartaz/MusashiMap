const ASSET_VERSION = "20260817-39";

async function loadJson(path) {
  const response = await fetch(`${path}?v=${ASSET_VERSION}`, { cache: "no-store" });
  if (!response.ok) throw new Error(`Failed to load ${path}: HTTP ${response.status}`);
  return response.json();
}

export async function loadData() {
  const [characters, locations, chapters, events, states, readerProgress, microWiki, characterWiki] = await Promise.all([
    loadJson("data/characters.json"),
    loadJson("data/locations.json"),
    loadJson("data/chapters.json"),
    loadJson("data/events.json"),
    loadJson("data/character-states.json"),
    loadJson("data/reader-progress.json"),
    loadJson("data/context/micro-wiki.json"),
    loadJson("data/context/character-wiki.json")
  ]);
  return { characters, locations, chapters, events, states, readerProgress, microWiki, characterWiki };
}

export async function loadMapData() {
  const [locations, events, states, characters] = await Promise.all([
    loadJson("data/locations.json"),
    loadJson("data/events.json"),
    loadJson("data/character-states.json"),
    loadJson("data/characters.json")
  ]);
  return { locations, events, states, characters };
}
