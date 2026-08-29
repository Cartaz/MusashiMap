const PRESENTATIONS = new Map([
  ["city", Object.freeze({ id: "city", iconPath: "assets/icons/places/city.svg", markerColor: "#c9d1d9", legendLabel: "Città / insediamento" })],
  ["village", Object.freeze({ id: "village", iconPath: "assets/icons/places/village.svg", markerColor: "#c9d1d9", legendLabel: "Villaggio" })],
  ["area", Object.freeze({ id: "area", iconPath: "assets/icons/places/area.svg", markerColor: "#8fb3c9", legendLabel: "Area / regione" })],
  ["river", Object.freeze({ id: "river", iconPath: "assets/icons/places/river.svg", markerColor: "#8fb3c9", legendLabel: "Acqua / fiume" })],
  ["route", Object.freeze({ id: "route", iconPath: "assets/icons/places/route.svg", markerColor: "#b99ad6", legendLabel: "Percorso / attraversamento" })],
  ["temple", Object.freeze({ id: "temple", iconPath: "assets/icons/places/temple.svg", markerColor: "#b8c7a4", legendLabel: "Tempio / santuario" })],
  ["castle", Object.freeze({ id: "castle", iconPath: "assets/icons/places/castle.svg", markerColor: "#b8c7a4", legendLabel: "Castello / fortificazione" })],
  ["literary_landmark", Object.freeze({ id: "literary_landmark", iconPath: "assets/icons/places/landmark.svg", markerColor: "#d9a0b7", legendLabel: "Luogo narrativo" })]
]);

const TYPE_PRESENTATIONS = new Map([
  ["settlement", "city"],
  ["urban_area", "city"],
  ["settlement_area", "village"],
  ["area", "area"],
  ["region", "area"],
  ["valley", "area"],
  ["river", "river"],
  ["pond", "river"],
  ["route", "route"],
  ["bridge", "route"],
  ["checkpoint", "route"],
  ["ferry", "route"],
  ["temple", "temple"],
  ["temple_area", "temple"],
  ["shrine", "temple"],
  ["castle", "castle"],
  ["fortified_site", "castle"],
  ["castle_context", "castle"],
  ["narrative_site", "literary_landmark"]
]);

export function getPlacePresentation(type) {
  const presentationId = TYPE_PRESENTATIONS.get(type);
  return presentationId ? PRESENTATIONS.get(presentationId) : null;
}

export function getPlaceLegendEntries(types) {
  const used = new Set();
  for (const type of types ?? []) {
    const presentation = getPlacePresentation(type);
    if (presentation) used.add(presentation.id);
  }
  return [...PRESENTATIONS.values()].filter(presentation => used.has(presentation.id));
}
