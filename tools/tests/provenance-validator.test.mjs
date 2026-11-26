import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { copyFileSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import os from "node:os";
import path, { resolve } from "node:path";
import { spawnSync } from "node:child_process";
import test from "node:test";

const root = resolve(new URL("../..", import.meta.url).pathname);
const validator = resolve(root, "tools/validate-research-manifests.mjs");
const manifests = [3, 4, 5, 6, 7].map(book => resolve(root, `research/book${book}-production-manifest.json`));
const hash = file => createHash("sha256").update(readFileSync(file)).digest("hex");
const run = args => spawnSync(process.execPath, [validator, ...args], { cwd: root, encoding: "utf8" });

const read = relative => readFileSync(resolve(root, relative), "utf8");

test("research provenance validation is read-only and covers all retained books", () => {
  const before = manifests.map(hash);
  const result = run([]);
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /Research manifest validation passed: 5 canonical provenance manifests, Books 3, 4, 5, 6, 7\./);
  assert.deepEqual(manifests.map(hash), before);
});

test("legacy manifest normalization path is retired", () => {
  const result = run(["--normalize"]);
  assert.equal(result.status, 2);
  assert.match(result.stderr, /Unknown arguments: --normalize/);
});

test("CI runs the provenance validator", () => {
  assert.match(read(".github/workflows/pages.yml"), /node tools\/validate-research-manifests\.mjs/);
});

test("validator accepts both --root forms", () => {
  for (const args of [["--root", root], [`--root=${root}`]]) {
    const result = run(args);
    assert.equal(result.status, 0, result.stderr);
  }
  assert.equal(run(["--root"]).status, 2);
});

test("validator rejects invalid event witnesses", t => {
  const fixture = mkdtempSync(path.join(os.tmpdir(), "musashimap-provenance-witness-"));
  t.after(() => rmSync(fixture, { recursive: true, force: true }));
  mkdirSync(path.join(fixture, "research"), { recursive: true });
  mkdirSync(path.join(fixture, "data"), { recursive: true });

  for (const book of [3, 4, 5, 6, 7]) {
    copyFileSync(
      resolve(root, `research/book${book}-production-manifest.json`),
      path.join(fixture, `research/book${book}-production-manifest.json`)
    );
  }
  copyFileSync(resolve(root, "data/source-manifest.json"), path.join(fixture, "data/source-manifest.json"));

  const manifestPath = path.join(fixture, "research/book5-production-manifest.json");
  const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
  const event = manifest.events.find(item => item.id === "b5c20-e05");
  assert.ok(event);
  event.witnesses = ["missing_character"];
  writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);

  const result = run(["--root", fixture]);
  assert.equal(result.status, 1, result.stderr || result.stdout);
  assert.match(result.stderr, /b5c20-e05 unknown witness missing_character/);

  event.witnesses = ["otsu"];
  writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  const overlap = run(["--root", fixture]);
  assert.equal(overlap.status, 1, overlap.stderr || overlap.stdout);
  assert.match(overlap.stderr, /b5c20-e05 character otsu is both participant and witness/);

  event.witnesses = "iori";
  writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  const scalarWitness = run(["--root", fixture]);
  assert.equal(scalarWitness.status, 1, scalarWitness.stderr || scalarWitness.stdout);
  assert.match(scalarWitness.stderr, /b5c20-e05 witness references must be an array/);

  event.witnesses = ["iori"];
  event.characters = "kojiro";
  writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  const scalarParticipant = run(["--root", fixture]);
  assert.equal(scalarParticipant.status, 1, scalarParticipant.stderr || scalarParticipant.stdout);
  assert.match(scalarParticipant.stderr, /b5c20-e05 character references must be an array/);

  event.characters = ["otsu"];
  event.groups = "obata_students";
  writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  const scalarGroup = run(["--root", fixture]);
  assert.equal(scalarGroup.status, 1, scalarGroup.stderr || scalarGroup.stdout);
  assert.match(scalarGroup.stderr, /b5c20-e05 group references must be an array/);

  delete event.groups;
  event.reveals_identity = "otsu";
  writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  const scalarReveal = run(["--root", fixture]);
  assert.equal(scalarReveal.status, 1, scalarReveal.stderr || scalarReveal.stdout);
  assert.match(scalarReveal.stderr, /b5c20-e05 revealed identity references must be an array/);

  event.reveals_identity = ["typo_id"];
  writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  const unknownReveal = run(["--root", fixture]);
  assert.equal(unknownReveal.status, 1, unknownReveal.stderr || unknownReveal.stdout);
  assert.match(unknownReveal.stderr, /b5c20-e05 unknown revealed identity typo_id/);
  assert.match(unknownReveal.stderr, /b5c20-e05 reveals identity typo_id without an event character reference/);
});

test("validator reports malformed chapter indexes without throwing", t => {
  const fixture = mkdtempSync(path.join(os.tmpdir(), "musashimap-provenance-index-"));
  t.after(() => rmSync(fixture, { recursive: true, force: true }));
  mkdirSync(path.join(fixture, "research"), { recursive: true });
  mkdirSync(path.join(fixture, "data"), { recursive: true });

  for (const book of [3, 4, 5, 6, 7]) {
    copyFileSync(
      resolve(root, `research/book${book}-production-manifest.json`),
      path.join(fixture, `research/book${book}-production-manifest.json`)
    );
  }
  copyFileSync(resolve(root, "data/source-manifest.json"), path.join(fixture, "data/source-manifest.json"));

  const sourceManifestPath = resolve(root, "research/book5-production-manifest.json");
  const manifestPath = path.join(fixture, "research/book5-production-manifest.json");
  for (const [field, label] of [["event_ids", "event"], ["character_state_ids", "character state"]]) {
    const manifest = JSON.parse(readFileSync(sourceManifestPath, "utf8"));
    const chapter = manifest.chapters.find(item => item.id === "b5c12");
    assert.ok(chapter);
    delete chapter[field];
    writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);

    const result = run(["--root", fixture]);
    assert.equal(result.status, 1, result.stderr || result.stdout);
    assert.match(result.stderr, new RegExp(`b5c12 ${label} references must be an array`));
    assert.doesNotMatch(result.stderr, /TypeError/);
  }
});
