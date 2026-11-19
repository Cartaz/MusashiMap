import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

import { describeSource, MANIFEST_PATH, openCorpus } from "../lib/source-corpus.mjs";

const fixture = t => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "musashimap-corpus-"));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  return root;
};
const write = (root, relative, contents) => {
  fs.mkdirSync(path.dirname(path.join(root, relative)), { recursive: true });
  fs.writeFileSync(path.join(root, relative), contents);
};
const chapter = "data/source/book1/chapter1-test.txt";
const text = "\nThe Little Bell\nline two\n";

test("source fingerprints carry counts and the heading, never the text", () => {
  const info = describeSource(Buffer.from(text));
  assert.deepEqual(Object.keys(info).sort(), ["bytes", "line_count", "newline_count", "sha256", "title", "word_count"]);
  assert.equal(info.title, "The Little Bell");
  assert.equal(info.line_count, 3);
  assert.equal(info.word_count, 5);
});

test("without the text, the manifest stands in for the corpus", t => {
  const root = fixture(t);
  write(root, MANIFEST_PATH, JSON.stringify({ files: { [chapter]: describeSource(Buffer.from(text)) } }));
  const corpus = openCorpus(root);
  assert.deepEqual(corpus.errors, []);
  assert.equal(corpus.hasText, false);
  assert.deepEqual(corpus.list("data/source/book1"), ["chapter1-test.txt"]);
  assert.equal(corpus.info(chapter).title, "The Little Bell");
  assert.equal(corpus.readText(chapter), null);
});

test("a local corpus must match its published manifest", t => {
  const root = fixture(t);
  write(root, chapter, text);
  write(root, MANIFEST_PATH, JSON.stringify({ files: { [chapter]: describeSource(Buffer.from("different")) } }));
  assert.match(openCorpus(root).errors.join("\n"), /differs from data\/source-manifest\.json/);
  write(root, MANIFEST_PATH, JSON.stringify({ files: {} }));
  assert.match(openCorpus(root).errors.join("\n"), /is not in data\/source-manifest\.json/);
  write(root, MANIFEST_PATH, JSON.stringify({ files: { [chapter]: describeSource(Buffer.from(text)) } }));
  const corpus = openCorpus(root);
  assert.deepEqual(corpus.errors, []);
  assert.equal(corpus.readText(chapter), text);
});

test("missing both the corpus and the manifest is an error", t => {
  assert.match(openCorpus(fixture(t)).errors.join("\n"), /Neither data\/source\/ nor data\/source-manifest\.json/);
});

test("the repository publishes the manifest and not the text", () => {
  const root = path.resolve(new URL("../..", import.meta.url).pathname);
  const manifest = JSON.parse(fs.readFileSync(path.join(root, MANIFEST_PATH), "utf8"));
  assert.ok(Object.keys(manifest.files).length >= 112);
  assert.match(fs.readFileSync(path.join(root, ".gitignore"), "utf8"), /^data\/source\/$/m);
});
