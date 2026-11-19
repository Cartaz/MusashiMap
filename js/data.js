const jsonRequests = new Map();

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

export async function loadData() {
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
