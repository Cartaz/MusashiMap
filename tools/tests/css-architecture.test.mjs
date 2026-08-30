import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const cssRoot = path.join(root, "css");
const cssFiles = fs.readdirSync(cssRoot).filter(name => name.endsWith(".css")).sort();
const readCss = name => fs.readFileSync(path.join(cssRoot, name), "utf8");

test("CSS entrypoint exposes responsibility-based modules in one explicit order", () => {
  const entry = readCss("app.css");
  const imports = [...entry.matchAll(/@import\s+url\(["']\.\/([^?"']+)/g)].map(match => match[1]);

  assert.deepEqual(imports, [
    "foundation.css",
    "map-controls.css",
    "markers.css",
    "components.css",
    "panels.css",
    "surfaces.css",
    "map-unmapped.css",
    "responsive.css"
  ]);

  for (const historical of [
    "style-v2.css",
    "ui-redesign.css",
    "marker-overrides.css",
    "parchment-overrides.css",
    "paper-texture.css",
    "responsive-polish.css"
  ]) {
    assert.equal(cssFiles.includes(historical), false, historical);
  }
});

test("marker presentation has exactly one CSS owner", () => {
  const markerOwners = cssFiles.filter(name => /\.musashi-(?:map|character)-marker/.test(readCss(name)));
  assert.deepEqual(markerOwners, ["markers.css"]);
});

test("panel collapse semantics do not leak back into map controls or components", () => {
  for (const name of ["map-controls.css", "components.css"]) {
    const content = readCss(name);
    assert.doesNotMatch(content, /\.map-(?:legend|character-panel)\.is-collapsed/);
  }
  assert.match(readCss("panels.css"), /\.pergamena-chiusa\.is-collapsed/);
});

test("runtime CSS has no historical validation naming or hidden module imports", () => {
  for (const name of cssFiles) {
    const content = readCss(name);
    assert.doesNotMatch(content, /#validation\b|\.validation\b/, name);
    if (name !== "app.css") assert.doesNotMatch(content, /@import\b/, name);
  }

  const index = fs.readFileSync(path.join(root, "index.html"), "utf8");
  assert.match(index, /id="data-status" class="data-status"/);
  assert.match(index, /Cinzel:wght@400;500;600;700;800/);
});
