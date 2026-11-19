import assert from "node:assert/strict";
import test from "node:test";

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
  const previousMatchMedia = globalThis.matchMedia;
  globalThis.document = { querySelector: selector => nodes.get(selector) ?? null };
  globalThis.matchMedia = () => ({ matches: false, addEventListener() {} });
  try {
    await import(new URL(`../../js/panel-toggle.js?test=${Date.now()}`, import.meta.url));
  } finally {
    globalThis.document = previousDocument;
    globalThis.matchMedia = previousMatchMedia;
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
