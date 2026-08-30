import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const index = readFileSync(new URL("../../index.html", import.meta.url), "utf8");
const panelToggle = readFileSync(new URL("../../js/panel-toggle.js", import.meta.url), "utf8");
const popups = readFileSync(new URL("../../js/popups.js", import.meta.url), "utf8");

const nativeControl = (selectorPattern, controlsId) => new RegExp(
  `<button[^>]*${selectorPattern}[^>]*type="button"[^>]*aria-controls="${controlsId}"[^>]*>`,
  "i"
);

test("collapsible panel controls are native buttons", () => {
  assert.match(index, nativeControl('class="[^"]*legend-heading', "place-legend"));
  assert.match(index, nativeControl('id="character-toggle"', "character-filter-body"));
  assert.match(index, nativeControl('class="[^"]*diary-toggle', "diary-content"));
  assert.match(index, /<div id="diary-content" class="diary-content">/);
});

test("character bulk actions are siblings of the panel toggle, never nested buttons", () => {
  const toggleStart = index.indexOf('<button id="character-toggle"');
  const toggleEnd = index.indexOf("</button>", toggleStart);
  const selectAll = index.indexOf('<button id="select-all"');
  const selectNone = index.indexOf('<button id="select-none"');

  assert.ok(toggleStart >= 0 && toggleEnd > toggleStart);
  assert.ok(selectAll > toggleEnd);
  assert.ok(selectNone > toggleEnd);
});

test("runtime does not recreate native button semantics", () => {
  const behavior = `${panelToggle}\n${popups}`;
  assert.doesNotMatch(behavior, /setAttribute\(["']role["'],\s*["']button["']\)/);
  assert.doesNotMatch(behavior, /setAttribute\(["']tabindex["'],\s*["']0["']\)/);
  assert.doesNotMatch(behavior, /addEventListener\(["']keydown["']/);
});

test("collapsible panel behavior has one explicit owner", () => {
  assert.match(panelToggle, /querySelector\(["']#character-toggle["']\)/);
  assert.match(panelToggle, /querySelector\(["']\.legend-heading["']\)/);
  assert.match(panelToggle, /querySelector\(["']\.diary-toggle["']\)/);
  assert.doesNotMatch(popups, /character-toggle|panel-heading|is-collapsed/);
});

test("panel toggle owner updates only panel state and ARIA state", async () => {
  class FakeClassList {
    constructor(...names) { this.names = new Set(names); }
    contains(name) { return this.names.has(name); }
    toggle(name, force) {
      const next = force === undefined ? !this.names.has(name) : force;
      if (next) this.names.add(name);
      else this.names.delete(name);
      return next;
    }
  }

  class FakeElement {
    constructor(...classes) {
      this.classList = new FakeClassList(...classes);
      this.attributes = new Map();
      this.listeners = new Map();
    }
    setAttribute(name, value) { this.attributes.set(name, String(value)); }
    getAttribute(name) { return this.attributes.get(name) ?? null; }
    addEventListener(type, listener) { this.listeners.set(type, listener); }
    click() { this.listeners.get("click")?.({ target: this }); }
  }

  const legend = new FakeElement("is-collapsed");
  const legendButton = new FakeElement();
  const characters = new FakeElement("is-collapsed");
  const characterButton = new FakeElement();
  const diary = new FakeElement("is-collapsed");
  const diaryButton = new FakeElement();
  const nodes = new Map([
    [".map-legend", legend],
    [".legend-heading", legendButton],
    [".map-character-panel", characters],
    ["#character-toggle", characterButton],
    [".info-panel", diary],
    [".diary-toggle", diaryButton]
  ]);

  const previousDocument = globalThis.document;
  globalThis.document = { querySelector: selector => nodes.get(selector) ?? null };
  try {
    await import(new URL(`../../js/panel-toggle.js?test=${Date.now()}`, import.meta.url));
  } finally {
    globalThis.document = previousDocument;
  }

  assert.equal(legendButton.getAttribute("aria-expanded"), "false");
  assert.equal(characterButton.getAttribute("aria-expanded"), "false");
  assert.equal(diaryButton.getAttribute("aria-expanded"), "false");

  legendButton.click();
  characterButton.click();
  diaryButton.click();

  assert.equal(legend.classList.contains("is-collapsed"), false);
  assert.equal(legend.classList.contains("is-open"), true);
  assert.equal(characters.classList.contains("is-collapsed"), false);
  assert.equal(diary.classList.contains("is-collapsed"), false);
  assert.equal(legendButton.getAttribute("aria-expanded"), "true");
  assert.equal(characterButton.getAttribute("aria-expanded"), "true");
  assert.equal(diaryButton.getAttribute("aria-expanded"), "true");
});
