import { loadData } from "./data.js";
import { validateData } from "./validate.js";
import { createReaderProgress, getVisibleHistoricalWiki } from "./reader-progress.js";

const chapterInput = document.querySelector("#chapter");
const chapterApply = document.querySelector("#chapter-apply");
const prevButton = document.querySelector("#prev-section");
const nextButton = document.querySelector("#next-section");
const sectionSelect = document.querySelector("#section-select");
const bookLabel = document.querySelector("#book-label");
const title = document.querySelector("#section-title");
const status = document.querySelector("#status");
const characterList = document.querySelector("#character-list");
const eventList = document.querySelector("#event-list");
const wikiList = document.querySelector("#wiki-list");
const validation = document.querySelector("#validation");
const characterFilters = document.querySelector("#character-filters");
const selectAll = document.querySelector("#select-all");
const selectNone = document.querySelector("#select-none");

let data;
let reader;
let selectedCharacters = new Set();

function stateFor(section) {
  const states = new Map();
  for (const state of data.states.character_states) {
    if (state.section <= section) states.set(state.character, state);
  }
  return states;
}

function applySection(value) {
  if (!reader.setSection(value)) return false;
  chapterInput.value = String(reader.section);
  render(reader.section);
  return true;
}

function renderCharacterFilters() {
  characterFilters.replaceChildren(...data.characters.characters
    .filter(c => c.importance === "main")
    .map(character => {
      const label = document.createElement("label");
      label.className = "character-filter";
      const input = document.createElement("input");
      input.type = "checkbox";
      input.checked = selectedCharacters.has(character.id);
      input.addEventListener("change", () => {
        if (input.checked) selectedCharacters.add(character.id);
        else selectedCharacters.delete(character.id);
        render(reader.section);
      });
      label.append(input, document.createTextNode(character.name));
      return label;
    }));
}

function renderWiki(section) {
  const entries = getVisibleHistoricalWiki(data.microWiki.entities, section);
  if (!entries.length) {
    wikiList.replaceChildren(Object.assign(document.createElement("p"), {
      className: "wiki-empty",
      textContent: "Nessun riferimento storico contestualizzabile incontrato finora."
    }));
    return;
  }

  wikiList.replaceChildren(...entries.map(entry => {
    const card = document.createElement("article");
    card.className = "wiki-card";

    const heading = document.createElement("h3");
    heading.textContent = entry.display_name;

    const trigger = document.createElement("p");
    trigger.className = "wiki-trigger";
    trigger.textContent = entry.novel_trigger?.context ?? "Riferimento incontrato nel romanzo.";

    const summary = document.createElement("p");
    summary.textContent = entry.wiki?.summary ?? "Contesto storico non disponibile.";

    card.append(heading, trigger, summary);

    if (entry.source?.url && entry.source?.status !== "needs_authoritative_source_record") {
      const source = document.createElement("a");
      source.className = "wiki-source";
      source.href = entry.source.url;
      source.target = "_blank";
      source.rel = "noopener noreferrer";
      source.textContent = `${entry.source.publisher ?? "Fonte"} · fonte storica`;
      card.append(source);
    }

    return card;
  }));
}

function render(section) {
  const sectionData = data.chapters.sections.find(s => s.number === section);
  if (!sectionData) return;
  bookLabel.textContent = `LIBRO ${sectionData.book} · ${sectionData.book_title}`;
  title.textContent = sectionData.title;
  status.textContent = `Sezione ${section} · informazioni visibili fino a questo punto della storia`;
  sectionSelect.value = String(section);
  prevButton.disabled = section <= reader.min;
  nextButton.disabled = section >= reader.max;

  const characterById = new Map(data.characters.characters.map(c => [c.id, c]));
  const locationById = new Map(data.locations.locations.map(l => [l.id, l]));
  const states = stateFor(section);
  const visibleStates = [...states.values()].filter(s => selectedCharacters.has(s.character));

  characterList.replaceChildren(...visibleStates.map(s => {
    const card = document.createElement("article");
    const character = characterById.get(s.character);
    const location = locationById.get(s.location);
    card.innerHTML = `<h3>${character?.name ?? s.character}</h3><p><strong>${location?.name ?? "Posizione non determinata"}</strong></p><p>${s.activity}</p><small>Presenza: ${s.presence ?? s.status}; confidenza luogo: ${s.location_confidence ?? s.certainty}</small>`;
    return card;
  }));

  const events = data.events.events.filter(e => e.section === section && e.characters.some(id => selectedCharacters.has(id)));
  eventList.replaceChildren(...events.map(e => {
    const item = document.createElement("li");
    const names = e.characters.map(id => characterById.get(id)?.name ?? id).join(", ");
    const from = e.from ? locationById.get(e.from)?.name : null;
    const to = e.to ? locationById.get(e.to)?.name : null;
    const place = e.location ? locationById.get(e.location)?.name : null;
    item.textContent = `${names}: ${e.type}${from && to ? ` · ${from} → ${to}` : place ? ` · ${place}` : ""}`;
    return item;
  }));

  renderWiki(section);

  // The map is a separate renderer. Tell it explicitly that the canonical reader
  // state has changed instead of relying on timing between two independent scripts.
  window.dispatchEvent(new CustomEvent("musashi:reader-state", {
    detail: {
      section,
      selectedCharacters: [...selectedCharacters]
    }
  }));
}

try {
  data = await loadData();
  reader = createReaderProgress(data.chapters, data.readerProgress.state.current_section);
  const result = validateData(data);
  validation.textContent = result.valid ? "Database: validato" : `Database: ${result.errors.length} errori`;
  validation.dataset.state = result.valid ? "ok" : "error";
  if (result.errors.length) console.error("MusashiMap data validation errors", result.errors);

  chapterInput.min = String(reader.min);
  chapterInput.max = String(reader.max);
  chapterInput.value = String(reader.section);
  sectionSelect.replaceChildren(...data.chapters.sections.map(s => {
    const option = document.createElement("option");
    option.value = String(s.number);
    option.textContent = `${s.book} — ${s.title}`;
    return option;
  }));

  selectedCharacters = new Set(data.characters.characters.filter(c => c.importance === "main").map(c => c.id));
  renderCharacterFilters();
  render(reader.section);
} catch (error) {
  validation.textContent = "Errore nel caricamento dei dati";
  console.error(error);
}

chapterInput.addEventListener("input", () => {
  chapterInput.setCustomValidity("");
  if (chapterInput.value === "") return;
  const parsed = Number.parseInt(chapterInput.value, 10);
  if (!Number.isInteger(parsed) || parsed < reader.min || parsed > reader.max) chapterInput.setCustomValidity(`Inserisci una sezione da ${reader.min} a ${reader.max}.`);
});

chapterInput.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    if (!applySection(chapterInput.value)) chapterInput.reportValidity();
  } else if (event.key === "Escape") {
    chapterInput.value = String(reader.section);
  }
});
chapterApply.addEventListener("click", () => {
  if (!applySection(chapterInput.value)) chapterInput.reportValidity();
});
prevButton.addEventListener("click", () => {
  if (reader.previous()) render(reader.section);
});
nextButton.addEventListener("click", () => {
  if (reader.next()) render(reader.section);
});
sectionSelect.addEventListener("change", () => applySection(sectionSelect.value));
selectAll.addEventListener("click", () => {
  selectedCharacters = new Set(data.characters.characters.filter(c => c.importance === "main").map(c => c.id));
  renderCharacterFilters();
  render(reader.section);
});
selectNone.addEventListener("click", () => {
  selectedCharacters.clear();
  renderCharacterFilters();
  render(reader.section);
});
