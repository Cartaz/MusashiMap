export async function loadData() {
  const [characters, locations, chapters, events, states, readerProgress, microWiki] = await Promise.all([
    fetch("data/characters.json").then(r => r.json()),
    fetch("data/locations.json").then(r => r.json()),
    fetch("data/chapters.json").then(r => r.json()),
    fetch("data/events.json").then(r => r.json()),
    fetch("data/character-states.json").then(r => r.json()),
    fetch("data/reader-progress.json").then(r => r.json()),
    fetch("data/context/micro-wiki.json").then(r => r.json())
  ]);
  return { characters, locations, chapters, events, states, readerProgress, microWiki };
}
