import { loadData } from "./data.js";
import { validateData } from "./validate.js";

const chapterInput = document.querySelector("#chapter");
const title = document.querySelector("#section-title");
const status = document.querySelector("#status");
const characterList = document.querySelector("#character-list");
const eventList = document.querySelector("#event-list");
const validation = document.querySelector("#validation");

let data;

function stateFor(section) {
  const states = new Map();
  for (const state of data.states.character_states) {
    if (state.section <= section) states.set(state.character, state);
  }
  return [...states.values()];
}

function render(section) {
  const sectionData = data.chapters.sections.find(s => s.number === section);
  if (!sectionData) return;
  title.textContent = `${String(section).padStart(3, "0")} · ${sectionData.title}`;
  status.textContent = `Book ${sectionData.book} · ${sectionData.book_title}`;

  const characterById = new Map(data.characters.characters.map(c => [c.id, c]));
  const locationById = new Map(data.locations.locations.map(l => [l.id, l]));
  const states = stateFor(section);
  characterList.replaceChildren(...states.map(s => {
    const card = document.createElement("article");
    const character = characterById.get(s.character);
    const location = locationById.get(s.location);
    card.innerHTML = `<h3>${character?.name ?? s.character}</h3><p><strong>${location?.name ?? "Posizione non determinata"}</strong></p><p>${s.activity}</p><small>Stato: ${s.status}</small>`;
    return card;
  }));

  const events = data.events.events.filter(e => e.section === section);
  eventList.replaceChildren(...events.map(e => {
    const item = document.createElement("li");
    const names = e.characters.map(id => characterById.get(id)?.name ?? id).join(", ");
    const from = e.from ? locationById.get(e.from)?.name : null;
    const to = e.to ? locationById.get(e.to)?.name : null;
    const place = e.location ? locationById.get(e.location)?.name : null;
    item.textContent = `${names}: ${e.type}${from && to ? ` · ${from} → ${to}` : place ? ` · ${place}` : ""}`;
    return item;
  }));
}

try {
  data = await loadData();
  const result = validateData(data);
  validation.textContent = result.valid ? "Database: validato" : `Database: ${result.errors.length} errori`;
  validation.dataset.state = result.valid ? "ok" : "error";
  if (result.errors.length) console.error("MusashiMap data validation errors", result.errors);
  chapterInput.max = Math.max(...data.chapters.sections.map(s => s.number));
  render(1);
} catch (error) {
  validation.textContent = "Errore nel caricamento dei dati";
  console.error(error);
}

chapterInput.addEventListener("input", () => {
  const chapter = Math.min(Math.max(1, Number.parseInt(chapterInput.value || "1", 10)), Number(chapterInput.max));
  chapterInput.value = chapter;
  render(chapter);
});
