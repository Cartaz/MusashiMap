import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import { messageKeys } from "../../js/i18n.js";

// Structural checks on the shell markup. They parse elements and attributes,
// so formatting, attribute order and wording can change freely.
const VOID = new Set(["meta", "link", "input", "img", "br", "hr", "source"]);
function parse(html) {
  const root = { tag: "#root", attrs: {}, children: [], parent: null };
  let current = root;
  const source = html.replace(/<!--[\s\S]*?-->/g, "");
  for (const match of source.matchAll(/<(\/?)([a-zA-Z][\w-]*)((?:\s+[^\s=>"']+(?:=(?:"[^"]*"|'[^']*'|[^\s>]+))?)*)\s*(\/?)>/g)) {
    const [, closing, rawTag, rawAttrs, selfClosing] = match;
    const tag = rawTag.toLowerCase();
    if (closing) {
      for (let node = current; node.parent; node = node.parent) {
        if (node.tag === tag) { current = node.parent; break; }
      }
      continue;
    }
    const attrs = {};
    for (const [, name, quoted, single, bare] of rawAttrs.matchAll(/([^\s=>"']+)(?:=(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g)) attrs[name.toLowerCase()] = quoted ?? single ?? bare ?? "";
    const node = { tag, attrs, children: [], parent: current };
    current.children.push(node);
    if (!VOID.has(tag) && !selfClosing) current = node;
  }
  return root;
}
const all = (node, out = []) => { for (const child of node.children) { out.push(child); all(child, out); } return out; };
const ancestors = node => { const list = []; for (let n = node.parent; n; n = n.parent) list.push(n); return list; };

const html = fs.readFileSync(new URL("../../index.html", import.meta.url), "utf8");
const elements = all(parse(html));
const byId = new Map(elements.filter(node => node.attrs.id).map(node => [node.attrs.id, node]));

test("ids are unique and every ARIA reference points to an existing element", () => {
  const ids = elements.map(node => node.attrs.id).filter(Boolean);
  assert.equal(new Set(ids).size, ids.length);
  for (const node of elements) {
    for (const attribute of ["aria-controls", "aria-labelledby", "for"]) {
      if (node.attrs[attribute]) assert.ok(byId.has(node.attrs[attribute]), `${attribute}=${node.attrs[attribute]}`);
    }
  }
});

test("panel toggles are native buttons that control their panel, never nested in another button", () => {
  for (const [selector, target] of [["character-toggle", "character-filter-body"]]) {
    assert.equal(byId.get(selector).tag, "button");
    assert.equal(byId.get(selector).attrs["aria-controls"], target);
  }
  const classed = name => elements.find(node => (node.attrs.class ?? "").split(/\s+/).includes(name));
  assert.equal(classed("legend-heading").attrs["aria-controls"], "place-legend");
  assert.equal(classed("diary-toggle").attrs["aria-controls"], "diary-content");
  for (const node of elements.filter(node => node.tag === "button")) {
    assert.equal(node.attrs.type, "button", node.attrs.id ?? node.attrs.class);
    assert.ok(!ancestors(node).some(parent => parent.tag === "button"), `nested button ${node.attrs.id ?? node.attrs.class}`);
  }
});

test("character details stay in the accessibility tree", () => {
  const list = byId.get("character-list");
  assert.ok(list);
  assert.ok(![list, ...ancestors(list)].some(node => node.attrs["aria-hidden"] === "true"));
});

test("every translated element names a key both dictionaries define", () => {
  const keys = new Set(messageKeys("it"));
  for (const node of elements) {
    if (node.attrs["data-i18n"]) assert.ok(keys.has(node.attrs["data-i18n"]), node.attrs["data-i18n"]);
    for (const pair of (node.attrs["data-i18n-attr"] ?? "").split(";").filter(Boolean)) {
      const [attribute, key] = pair.split(":").map(part => part.trim());
      assert.ok(keys.has(key), `${attribute}:${key}`);
    }
  }
});

test("local scripts and stylesheets exist and project code loads as modules", () => {
  for (const node of elements) {
    const reference = node.tag === "script" ? node.attrs.src : node.tag === "link" && node.attrs.rel === "stylesheet" ? node.attrs.href : null;
    if (!reference || /^https?:/.test(reference)) continue;
    assert.ok(fs.existsSync(new URL(`../../${reference}`, import.meta.url)), reference);
    if (node.tag === "script" && reference.startsWith("js/")) assert.equal(node.attrs.type, "module", reference);
  }
});

test("runtime modules never inject markup through HTML-parsing DOM APIs", () => {
  // Reader-facing text comes from data; it must reach the DOM as text. The
  // only HTML is Leaflet popup/marker content built by escaping helpers.
  for (const name of fs.readdirSync(new URL("../../js/", import.meta.url)).filter(file => file.endsWith(".js"))) {
    const source = fs.readFileSync(new URL(`../../js/${name}`, import.meta.url), "utf8");
    assert.doesNotMatch(source, /\.(?:innerHTML|outerHTML)\s*=|insertAdjacentHTML\(|document\.write\(/, name);
  }
});
