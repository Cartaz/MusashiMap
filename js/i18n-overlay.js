// Reader-facing text exists in Italian and English. Canonical data files keep
// one language per field (the language the research was written in); the
// other language lives in data/i18n/<language>.json as an overlay keyed by
// record. This registry is shared by the browser, the build and the validator
// so all three agree on which fields are translatable and how records are keyed.

export const LANGUAGES = Object.freeze(["it", "en"]);
export const DEFAULT_LANGUAGE = "it";

const field = (path, { required = true } = {}) => Object.freeze({ path, required });

// `source` is the language of the canonical value; the overlay for the other
// language must translate every required field. Optional fields (mostly proper
// names) are translated only where the two languages differ.
export const TRANSLATABLE_COLLECTIONS = Object.freeze({
  events: Object.freeze({
    file: "data/events.json", source: "en",
    records: document => document?.events ?? [],
    key: record => record.id,
    fields: { description: field(["description"]), destination_label: field(["destination_label"]) }
  }),
  states: Object.freeze({
    file: "data/character-states.json", source: "en",
    records: document => document?.character_states ?? [],
    key: record => `${record.character}@${record.section}`,
    fields: { activity: field(["activity"]) }
  }),
  locations: Object.freeze({
    file: "data/locations.json", source: "en",
    records: document => document?.locations ?? [],
    key: record => record.id,
    fields: { name: field(["name"], { required: false }), map_note: field(["map_note"]) }
  }),
  chapters: Object.freeze({
    file: "data/chapters.json", source: "en",
    records: document => document?.sections ?? [],
    key: record => String(record.number),
    fields: { title: field(["title"]), book_title: field(["book_title"]) }
  }),
  groups: Object.freeze({
    file: "data/groups.json", source: "en",
    records: document => document?.groups ?? [],
    key: record => record.id,
    fields: { name: field(["name"]) }
  }),
  identities: Object.freeze({
    file: "data/identities.json", source: "en",
    records: document => document?.identities ?? [],
    key: record => `${record.character_id}@${record.valid_from_section}`,
    fields: { display_name: field(["display_name"], { required: false }) }
  }),
  micro_wiki: Object.freeze({
    file: "data/context/micro-wiki.json", source: "en",
    records: document => document?.entities ?? [],
    key: record => record.id,
    fields: {
      display_name: field(["display_name"], { required: false }),
      context: field(["novel_trigger", "context"]),
      summary: field(["wiki", "summary"])
    }
  })
});

// The character wiki is keyed by character id and holds section-indexed text.
export const CHARACTER_WIKI = Object.freeze({
  file: "data/context/character-wiki.json", source: "it",
  scalarFields: Object.freeze({ role: true, display_name: false }),
  sectionFields: Object.freeze({ current_by_section: true, display_name_by_section: false })
});

const getPath = (record, path) => path.reduce((value, key) => value?.[key], record);
const setPath = (record, path, value) => {
  let target = record;
  for (const key of path.slice(0, -1)) {
    target[key] = { ...(target[key] ?? {}) };
    target = target[key];
  }
  target[path.at(-1)] = value;
};
const hasText = value => typeof value === "string" && value.trim() !== "";

export const readTranslatableValue = getPath;

// Returns a copy of `document` with every overlay value applied. Records,
// nested objects and arrays that change are copied; the canonical document is
// never mutated, so each language keeps an independent, immutable view.
export function applyCollectionOverlay(name, document, overlay) {
  const spec = TRANSLATABLE_COLLECTIONS[name];
  const entries = overlay?.[name];
  if (!spec || !document || !entries) return document;
  const listKey = Object.keys(document).find(key => document[key] === spec.records(document));
  if (!listKey) return document;
  return {
    ...document,
    [listKey]: document[listKey].map(record => {
      const translated = entries[spec.key(record)];
      if (!translated) return record;
      const copy = { ...record };
      for (const [fieldName, { path }] of Object.entries(spec.fields)) {
        if (hasText(translated[fieldName]) && getPath(record, path) !== undefined) setPath(copy, path, translated[fieldName]);
      }
      return copy;
    })
  };
}

export function applyCharacterWikiOverlay(document, overlay) {
  const entries = overlay?.character_wiki;
  if (!document?.characters || !entries) return document;
  const characters = {};
  for (const [id, entry] of Object.entries(document.characters)) {
    const translated = entries[id];
    if (!translated) { characters[id] = entry; continue; }
    const copy = { ...entry };
    for (const name of Object.keys(CHARACTER_WIKI.scalarFields)) {
      if (hasText(translated[name]) && entry[name] !== undefined) copy[name] = translated[name];
    }
    for (const name of Object.keys(CHARACTER_WIKI.sectionFields)) {
      if (!entry[name] || !translated[name]) continue;
      copy[name] = Object.fromEntries(Object.entries(entry[name]).map(([section, value]) =>
        [section, hasText(translated[name][section]) ? translated[name][section] : value]));
    }
    characters[id] = copy;
  }
  return { ...document, characters };
}

// Lists what an overlay must contain for `language`, and what it contains that
// does not correspond to a canonical value. Used by the data validator.
export function auditOverlay(language, documents, overlay) {
  const missing = [];
  const unknown = [];
  for (const [name, spec] of Object.entries(TRANSLATABLE_COLLECTIONS)) {
    const records = new Map(spec.records(documents[spec.file]).map(record => [spec.key(record), record]));
    const entries = overlay?.[name] ?? {};
    if (spec.source !== language) {
      for (const [key, record] of records) {
        for (const [fieldName, { path, required }] of Object.entries(spec.fields)) {
          if (required && hasText(getPath(record, path)) && !hasText(entries[key]?.[fieldName])) missing.push(`${name}.${key}.${fieldName}`);
        }
      }
    }
    for (const [key, translated] of Object.entries(entries)) {
      const record = records.get(key);
      if (!record || spec.source === language) { unknown.push(`${name}.${key}`); continue; }
      for (const fieldName of Object.keys(translated)) {
        const definition = spec.fields[fieldName];
        if (!definition || !hasText(getPath(record, definition.path))) unknown.push(`${name}.${key}.${fieldName}`);
      }
    }
  }
  const wiki = documents[CHARACTER_WIKI.file]?.characters ?? {};
  const wikiEntries = overlay?.character_wiki ?? {};
  if (CHARACTER_WIKI.source !== language) {
    for (const [id, entry] of Object.entries(wiki)) {
      for (const [name, required] of Object.entries(CHARACTER_WIKI.scalarFields)) {
        if (required && hasText(entry[name]) && !hasText(wikiEntries[id]?.[name])) missing.push(`character_wiki.${id}.${name}`);
      }
      for (const [name, required] of Object.entries(CHARACTER_WIKI.sectionFields)) {
        if (!required) continue;
        for (const [section, value] of Object.entries(entry[name] ?? {})) {
          if (hasText(value) && !hasText(wikiEntries[id]?.[name]?.[section])) missing.push(`character_wiki.${id}.${name}.${section}`);
        }
      }
    }
  }
  for (const [id, translated] of Object.entries(wikiEntries)) {
    const entry = wiki[id];
    if (!entry || CHARACTER_WIKI.source === language) { unknown.push(`character_wiki.${id}`); continue; }
    for (const [name, value] of Object.entries(translated)) {
      if (name in CHARACTER_WIKI.scalarFields) {
        if (!hasText(entry[name])) unknown.push(`character_wiki.${id}.${name}`);
      } else if (name in CHARACTER_WIKI.sectionFields) {
        for (const section of Object.keys(value ?? {})) {
          if (!hasText(entry[name]?.[section])) unknown.push(`character_wiki.${id}.${name}.${section}`);
        }
      } else unknown.push(`character_wiki.${id}.${name}`);
    }
  }
  return { missing, unknown };
}

// Keeps only overlay entries whose canonical record survived publication
// filtering, so a translation can never reveal an unpublished record.
export function filterOverlayToPublished(overlay, publishedDocuments) {
  const filtered = { ...overlay };
  for (const [name, spec] of Object.entries(TRANSLATABLE_COLLECTIONS)) {
    if (!overlay?.[name]) continue;
    const published = new Set(spec.records(publishedDocuments[spec.file]).map(spec.key));
    filtered[name] = Object.fromEntries(Object.entries(overlay[name]).filter(([key]) => published.has(key)));
  }
  if (overlay?.character_wiki) {
    const wiki = publishedDocuments[CHARACTER_WIKI.file]?.characters ?? {};
    filtered.character_wiki = Object.fromEntries(Object.entries(overlay.character_wiki)
      .filter(([id]) => wiki[id])
      .map(([id, translated]) => [id, Object.fromEntries(Object.entries(translated).map(([name, value]) =>
        name in CHARACTER_WIKI.sectionFields
          ? [name, Object.fromEntries(Object.entries(value ?? {}).filter(([section]) => wiki[id][name]?.[section] !== undefined))]
          : [name, value]))]));
  }
  return filtered;
}
