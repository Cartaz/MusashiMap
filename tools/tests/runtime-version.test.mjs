import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

import { createRuntimeVersion, listLocalRuntimeUrls, versionRuntimeText, withRuntimeVersion } from "../runtime-version.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const runtimeTextFiles = [
  "index.html",
  ...fs.readdirSync(path.join(root, "css")).filter(name => name.endsWith(".css")).map(name => `css/${name}`),
  ...fs.readdirSync(path.join(root, "js")).filter(name => name.endsWith(".js")).map(name => `js/${name}`)
];

const versionOf = value => new URLSearchParams(value.split("?", 2)[1]?.split("#", 1)[0] ?? "").get("v");

test("runtime source contains no manual cache-busting versions", () => {
  for (const relative of runtimeTextFiles) {
    const content = fs.readFileSync(path.join(root, relative), "utf8");
    for (const value of listLocalRuntimeUrls(relative, content)) {
      assert.equal(versionOf(value), null, `${relative}: ${value}`);
    }
  }
});

test("build transformation versions every local runtime URL with one fingerprint", () => {
  const version = "0123456789ab";
  let references = 0;
  for (const relative of runtimeTextFiles) {
    const content = fs.readFileSync(path.join(root, relative), "utf8");
    const transformed = versionRuntimeText(relative, content, version);
    for (const value of listLocalRuntimeUrls(relative, transformed)) {
      references += 1;
      assert.equal(versionOf(value), version, `${relative}: ${value}`);
    }
  }
  assert.ok(references > 20, `expected broad runtime coverage, got ${references}`);
});

test("external URLs and fragments are never versioned", () => {
  for (const value of ["https://example.com/app.js", "//cdn.example.com/app.js", "data:image/svg+xml,x", "#section"]) {
    assert.equal(withRuntimeVersion(value, "0123456789ab"), value);
  }
});

test("runtime fingerprint is deterministic and content-derived", () => {
  const first = createRuntimeVersion(root);
  const second = createRuntimeVersion(root);
  assert.match(first, /^[0-9a-f]{12}$/);
  assert.equal(second, first);
});
