import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import { localizeData } from "../../js/data.js";
import { detectLanguage, messageKeys, t } from "../../js/i18n.js";
import { applyCollectionOverlay, auditOverlay, filterOverlayToPublished } from "../../js/i18n-overlay.js";

const read = relative => JSON.parse(fs.readFileSync(new URL(`../../${relative}`, import.meta.url)));

test("both interface dictionaries define exactly the same messages", () => {
  assert.deepEqual(messageKeys("en").sort(), messageKeys("it").sort());
  for (const key of messageKeys("it")) {
    for (const language of ["it", "en"]) {
      const text = t(key, { name: "N", count: 2, section: 3, page: 1, pages: 2, min: 1, max: 2, chapter: "C", title: "T", book: "B", place: "P", group: "G", alias: "A", names: "X", description: "D", source: "S", publisher: "Pub", position: "Pos", certainty: "Cert", kind: "K" }, language);
      assert.equal(typeof text, "string", `${language}:${key}`);
      assert.notEqual(text.trim(), "", `${language}:${key}`);
      assert.doesNotMatch(text, /undefined/, `${language}:${key}`);
    }
  }
});

test("language detection prefers the stored choice, then the browser, then Italian", () => {
  const storage = value => ({ getItem: () => value });
  assert.equal(detectLanguage({ storage: storage("en"), languages: ["it-IT"] }), "en");
  assert.equal(detectLanguage({ storage: storage("fr"), languages: ["fr-FR", "en-GB"] }), "en");
  assert.equal(detectLanguage({ storage: storage(null), languages: ["de-DE"] }), "it");
  assert.equal(detectLanguage({ storage: { getItem() { throw new Error("blocked"); } }, languages: ["en"] }), "en");
});

test("overlays replace translated fields without mutating canonical records", () => {
  const events = { events: [{ id: "e1", description: "Scene", section: 1 }, { id: "e2", description: "Other", section: 2 }] };
  const snapshot = structuredClone(events);
  const localized = applyCollectionOverlay("events", events, { events: { e1: { description: "Scena" } } });
  assert.equal(localized.events[0].description, "Scena");
  assert.equal(localized.events[1], events.events[1]);
  assert.deepEqual(events, snapshot);
  const wiki = applyCollectionOverlay("micro_wiki", { entities: [{ id: "w", novel_trigger: { first_section: 1, context: "Why" }, wiki: { summary: "What" } }] },
    { micro_wiki: { w: { context: "Perché", summary: "Cosa" } } });
  assert.deepEqual(wiki.entities[0].novel_trigger, { first_section: 1, context: "Perché" });
  assert.equal(wiki.entities[0].wiki.summary, "Cosa");
});

test("published translations cannot outlive the records they translate", () => {
  const overlay = { language: "it", events: { kept: { description: "Sì" }, future: { description: "Spoiler" } } };
  const filtered = filterOverlayToPublished(overlay, { "data/events.json": { events: [{ id: "kept" }] } });
  assert.deepEqual(Object.keys(filtered.events), ["kept"]);
  const audit = auditOverlay("it", { "data/events.json": { events: [{ id: "kept", description: "Yes" }] } }, overlay);
  assert.deepEqual(audit.unknown, ["events.future"]);
  assert.deepEqual(audit.missing, []);
});

test("the repository overlays localize every reader-facing collection", () => {
  const canonical = {
    events: read("data/events.json"), states: read("data/character-states.json"), locations: read("data/locations.json"),
    chapters: read("data/chapters.json"), groups: read("data/groups.json"), identities: read("data/identities.json"),
    microWiki: read("data/context/micro-wiki.json"), characterWiki: read("data/context/character-wiki.json")
  };
  const it = localizeData(canonical, read("data/i18n/it.json"), "it");
  const en = localizeData(canonical, read("data/i18n/en.json"), "en");
  assert.equal(it.chapters.sections[0].book_title, "Terra");
  assert.equal(en.chapters.sections[0].book_title, "Earth");
  assert.equal(it.events.events.find(event => event.id === "b1c2-05").description, "Takezo insegue Temma dalla casa fino a un campo vicino e lo uccide con la spada di legno.");
  assert.equal(en.characterWiki.characters.osugi.role, "Matahachi's mother");
  assert.equal(it.characterWiki.characters.osugi.role, "Madre di Matahachi");
  assert.equal(it.identities.identities.find(identity => identity.character_id === "kojiro" && identity.valid_from_section === 22).display_name, "Bel giovane");
  assert.equal(en.identities.identities.find(identity => identity.character_id === "kojiro" && identity.valid_from_section === 22).display_name, "Handsome young man");
});
