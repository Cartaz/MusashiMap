// Relationship labels live in data/relationships.json beside the records they
// describe, one entry per language. Unknown values fall back to the category,
// then to a generic label, so a missing translation never shows a raw id.
const fallbacks = {
  it: { category: "Legame", description: "Legame documentato" },
  en: { category: "Relationship", description: "Documented relationship" }
};

const localized = (labels, language) => labels?.[language] ?? labels?.it ?? null;

export function relationshipCategory(document, type, language = "it") {
  return localized(document?.relationship_types?.[type], language)
    ?? (fallbacks[language] ?? fallbacks.it).category;
}

export function describeRelationship(document, relationship, language = "it") {
  return localized(document?.subtype_labels?.[relationship?.subtype], language)
    ?? localized(document?.relationship_types?.[relationship?.type], language)
    ?? (fallbacks[language] ?? fallbacks.it).description;
}
