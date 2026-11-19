import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const cssRoot = path.join(root, "css");
const cssFiles = fs.readdirSync(cssRoot).filter(name => name.endsWith(".css")).sort();
const readCss = name => fs.readFileSync(path.join(cssRoot, name), "utf8");
const modules = cssFiles.filter(name => name !== "app.css");

// Rules as (media context, selector), comments removed.
const rulesOf = name => {
  const text = readCss(name).replace(/\/\*[\s\S]*?\*\//g, "");
  const rules = [];
  const stack = [];
  let start = 0;
  for (let index = 0; index < text.length; index++) {
    const char = text[index];
    if (char === "{") {
      stack.push(text.slice(start, index).trim().replace(/\s+/g, " "));
      start = index + 1;
    } else if (char === "}") {
      const prelude = stack.pop();
      if (prelude && !prelude.startsWith("@")) rules.push(`${stack.filter(item => item.startsWith("@")).join(" ")}|${prelude}`);
      start = index + 1;
    } else if (char === ";") {
      start = index + 1;
    }
  }
  return rules;
};

test("the entrypoint imports every module exactly once and nothing else imports", () => {
  const imports = [...readCss("app.css").matchAll(/@import\s+url\(["']\.\/([^"')]+)["']\)/g)].map(match => match[1]);
  assert.deepEqual([...imports].sort(), modules);
  for (const name of modules) assert.doesNotMatch(readCss(name), /@import\b/, name);
});

test("marker presentation has exactly one CSS owner", () => {
  const markerOwners = cssFiles.filter(name => /\.musashi-(?:map|character)-marker/.test(readCss(name)));
  assert.deepEqual(markerOwners, ["markers.css"]);
});

// Ratchets: these numbers may only go down. Each remaining !important is one
// a computed-style comparison showed to be load-bearing (mostly against
// Leaflet and MapLibre inline styles) or one in a state the comparison does
// not render (hover, focus, reduced motion).
const IMPORTANT_BUDGET = 100;
const CROSS_FILE_SELECTOR_BUDGET = 27;

test("!important stays within its audited budget", () => {
  const count = modules.reduce((total, name) => total + (readCss(name).match(/!important/g) ?? []).length, 0);
  assert.ok(count <= IMPORTANT_BUDGET, `${count} !important declarations; budget ${IMPORTANT_BUDGET}`);
});

test("a selector is defined in one module per media context", () => {
  const owners = new Map();
  for (const name of modules) {
    for (const rule of new Set(rulesOf(name))) owners.set(rule, [...(owners.get(rule) ?? []), name]);
  }
  const shared = [...owners].filter(([, files]) => files.length > 1);
  assert.ok(shared.length <= CROSS_FILE_SELECTOR_BUDGET,
    `${shared.length} selectors are split across modules; budget ${CROSS_FILE_SELECTOR_BUDGET}: ${shared.slice(0, 5).map(([rule]) => rule).join("; ")}`);
});
