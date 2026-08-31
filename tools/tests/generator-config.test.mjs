import assert from "node:assert/strict";
import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const readJson = relative => JSON.parse(readFileSync(path.join(root, relative), "utf8"));
const locations = new Set(readJson("data/locations.json").locations.map(location => location.id));

test("character audit reconciliation lives in research config", () => {
  const config = readJson("research/character-audit-config.json");
  const book2Chapters = readJson("data/chapters.json").sections
    .filter(chapter => chapter.book_number === 2)
    .map(chapter => chapter.chapter_id);

  assert.deepEqual(Object.keys(config.book2_expected), book2Chapters);
  assert.deepEqual(Object.keys(config.manifest_id_maps).map(Number).sort((a, b) => a - b), [3, 4, 5, 6, 7]);

  const generator = readFileSync(path.join(root, "tools/generate-character-chapter-audit.mjs"), "utf8");
  assert.doesNotMatch(generator, /const manifestIdMaps = \{|const book2Expected = \{/);
  assert.match(generator, /research\/character-audit-config\.json/);
});

test("geography audit evidence lives in research config and resolves", () => {
  const sourceConfig = readJson("research/geography-audit/sources.json");
  const assignmentConfig = readJson("research/geography-audit/assignments.json");
  const topicConfig = readJson("research/geography-audit/manifest-topics.json");
  const sourceIds = new Set();

  assert.equal(typeof sourceConfig.audit_period?.report_label, "string");
  assert.match(sourceConfig.audit_period?.fallback_checked ?? "", /^\d{4}-\d{2}-\d{2}$/);

  for (const source of sourceConfig.manual_sources ?? []) {
    assert.equal(sourceIds.has(source.id), false, `duplicate manual source ${source.id}`);
    sourceIds.add(source.id);
    assert.match(source.url, /^https:\/\//, `non-HTTPS manual source ${source.id}`);
    assert.match(source.checked, /^\d{4}-\d{2}-\d{2}$/, `invalid checked date ${source.id}`);
  }

  for (const assignment of assignmentConfig.manual_assignments ?? []) {
    for (const id of assignment.location_ids ?? []) assert.equal(locations.has(id), true, `unknown assigned location ${id}`);
    for (const id of assignment.source_ids ?? []) assert.equal(sourceIds.has(id), true, `unknown manual source ${id}`);
  }

  for (const topics of Object.values(topicConfig.manifest_topic_assignments ?? {})) {
    for (const ids of Object.values(topics)) {
      for (const id of ids) assert.equal(locations.has(id), true, `unknown manifest topic location ${id}`);
    }
  }

  const generator = readFileSync(path.join(root, "tools/generate-geography-audit.mjs"), "utf8");
  assert.doesNotMatch(generator, /const manualSources = \[|const manifestTopicAssignments = \{|assign\(\[/);
  assert.match(generator, /research\/geography-audit\/sources\.json/);
  assert.match(generator, /research\/geography-audit\/assignments\.json/);
  assert.match(generator, /research\/geography-audit\/manifest-topics\.json/);
});

test("audit config extraction does not change generated reports", t => {
  const temp = mkdtempSync(path.join(os.tmpdir(), "musashimap-generator-config-"));
  t.after(() => rmSync(temp, { recursive: true, force: true }));

  const cases = [
    ["tools/generate-character-chapter-audit.mjs", "research/character-chapter-audit.md", "character.md"],
    ["tools/generate-geography-audit.mjs", "research/geography-book-audit.md", "geography.md"]
  ];

  for (const [script, expected, name] of cases) {
    const output = path.join(temp, name);
    const result = spawnSync(process.execPath, [path.join(root, script), "--output", output], {
      cwd: root,
      encoding: "utf8"
    });
    assert.equal(result.status, 0, `${script}\n${result.stdout}\n${result.stderr}`);
    assert.deepEqual(readFileSync(output), readFileSync(path.join(root, expected)), `${script} changed ${expected}`);
  }
});
