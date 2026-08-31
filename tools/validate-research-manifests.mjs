#!/usr/bin/env node

import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const CONTRACT = "docs/book-staging-contract.md";
const BOOKS = [3, 4, 5, 6, 7];
const REQUIRED_ARRAYS = ["source_files", "chapters", "characters", "groups", "locations", "events", "character_states", "relationships", "historical_context", "external_validation"];
const MOVEMENT = new Set(["arrival_confirmed", "confirmed_route", "intended_destination", "direction_only", "uncertain_route"]);
const args = new Set(process.argv.slice(2));
const rootArg = [...args].find(value => value.startsWith("--root="));
if (rootArg) args.delete(rootArg);
if (args.size) {
  console.error(`Unknown arguments: ${[...args].join(", ")}`);
  process.exit(2);
}
const root = rootArg ? path.resolve(rootArg.slice(7)) : process.cwd();
const research = path.join(root, "research");
const readJson = async file => JSON.parse(await readFile(file, "utf8"));
const list = value => Array.isArray(value) ? value : value == null ? [] : [value];
const chapterId = (book, index) => `b${book}c${index}`;
const errors = [];
const fail = (book, message) => errors.push(`Book ${book}: ${message}`);
const uniqueIds = (book, label, values) => {
  if (values.some(value => typeof value !== "string" || !value)) fail(book, `${label} IDs must be non-empty strings`);
  const duplicates = [...new Set(values.filter((value, index) => values.indexOf(value) !== index))];
  if (duplicates.length) fail(book, `duplicate ${label} IDs: ${duplicates.join(", ")}`);
};

const entries = (await readdir(research))
  .map(name => ({ name, match: name.match(/^book([3-7])-production-manifest\.json$/) }))
  .filter(item => item.match)
  .sort((a, b) => Number(a.match[1]) - Number(b.match[1]));
const found = entries.map(item => Number(item.match[1]));
if (JSON.stringify(found) !== JSON.stringify(BOOKS)) fail("III–VII", `expected manifests for Books ${BOOKS.join(", ")}; found ${found.join(", ") || "none"}`);

const summaries = [];
for (const { name, match } of entries) {
  const book = Number(match[1]);
  let manifest;
  try { manifest = await readJson(path.join(research, name)); }
  catch (error) { fail(book, `invalid JSON — ${error.message}`); continue; }

  if (manifest.contract_version !== "1.0.0") fail(book, "contract_version must be 1.0.0");
  if (manifest.contract !== CONTRACT) fail(book, `contract must be ${CONTRACT}`);
  if (manifest.book?.number !== book) fail(book, `book.number ${manifest.book?.number} does not match filename`);
  for (const key of REQUIRED_ARRAYS) if (!Array.isArray(manifest[key])) fail(book, `${key} must be an array`);
  if (REQUIRED_ARRAYS.some(key => !Array.isArray(manifest[key]))) continue;

  const ids = Object.fromEntries([
    ["source chapter", manifest.source_files.map(item => item.chapter_id)],
    ["chapter", manifest.chapters.map(item => item.id)],
    ["character", manifest.characters.map(item => item.id)],
    ["group", manifest.groups.map(item => item.id)],
    ["location", manifest.locations.map(item => item.id)],
    ["event", manifest.events.map(item => item.id)],
    ["character state", manifest.character_states.map(item => item.id)],
    ["relationship", manifest.relationships.map(item => item.id)],
    ["historical context", manifest.historical_context.map(item => item.id)],
    ["external validation", manifest.external_validation.map(item => item.id)]
  ]);
  for (const [label, values] of Object.entries(ids)) uniqueIds(book, label, values);
  const sets = Object.fromEntries(Object.entries(ids).map(([key, values]) => [key, new Set(values)]));

  const expectedChapters = manifest.chapters.map((_, index) => chapterId(book, index + 1));
  if (JSON.stringify(ids.chapter) !== JSON.stringify(expectedChapters)) fail(book, "chapter IDs must be ordered and contiguous");
  const sectionMin = manifest.book?.global_sections?.minimum;
  const expectedSections = manifest.chapters.map((_, index) => sectionMin + index);
  if (JSON.stringify(manifest.chapters.map(item => item.global_section)) !== JSON.stringify(expectedSections)) fail(book, `global sections are not contiguous from ${sectionMin}`);
  if (manifest.book?.chapter_count !== manifest.chapters.length) fail(book, "book.chapter_count does not match chapters");
  if (manifest.book?.global_sections?.maximum !== expectedSections.at(-1)) fail(book, "book.global_sections.maximum does not match chapters");
  if (JSON.stringify(ids["source chapter"]) !== JSON.stringify(ids.chapter)) fail(book, "source_files must align one-to-one with chapters");

  const sourceByChapter = new Map(manifest.source_files.map(source => [source.chapter_id, source]));
  const sourceRefExists = (value, owner = null) => {
    if (typeof value !== "string" || !value) return false;
    const plain = value.replace(/:L\d+(?:-L?\d+)?$/, "");
    const exact = path.resolve(root, plain);
    if (exact.startsWith(`${root}${path.sep}`) && existsSync(exact)) return true;
    if ([...sourceByChapter.values()].some(source => path.basename(source.file) === path.basename(plain))) return true;
    const local = plain.match(new RegExp(`^(?:b${book}c|book${book}/chapter)(\\d+)$`, "i"));
    if (local && sourceByChapter.has(chapterId(book, Number(local[1])))) return true;
    return owner ? sourceByChapter.get(owner)?.file === plain : false;
  };

  for (const source of manifest.source_files) {
    const chapter = manifest.chapters.find(item => item.id === source.chapter_id);
    if (chapter && source.global_section !== chapter.global_section) fail(book, `${source.chapter_id} source global_section does not match chapter`);
    const sourcePath = source.file && path.resolve(root, source.file);
    if (!sourcePath || !existsSync(sourcePath)) { fail(book, `missing source file ${source.file ?? "<undefined>"}`); continue; }
    const buffer = await readFile(sourcePath);
    if (Number.isInteger(source.line_count) && buffer.toString("utf8").split("\n").length - 1 !== source.line_count) fail(book, `${source.file} line_count mismatch`);
    if (source.sha256 && createHash("sha256").update(buffer).digest("hex") !== source.sha256) fail(book, `${source.file} sha256 mismatch`);
  }

  const checkRefs = (owner, values, set, label) => { for (const id of values) if (!set.has(id)) fail(book, `${owner} unknown ${label} ${id}`); };
  for (const chapter of manifest.chapters) {
    if (!sourceRefExists(chapter.source_ref, chapter.id)) fail(book, `${chapter.id} unresolved source_ref ${chapter.source_ref}`);
    if (chapter.source_file !== sourceByChapter.get(chapter.id)?.file) fail(book, `${chapter.id} source_file does not match source registry`);
    checkRefs(chapter.id, chapter.characters, sets.character, "character");
    checkRefs(chapter.id, chapter.referenced_characters, sets.character, "referenced character");
    checkRefs(chapter.id, chapter.groups, sets.group, "group");
    checkRefs(chapter.id, chapter.referenced_groups, sets.group, "referenced group");
    checkRefs(chapter.id, chapter.locations, sets.location, "location");
    checkRefs(chapter.id, chapter.event_ids, sets.event, "event");
    checkRefs(chapter.id, chapter.character_state_ids, sets["character state"], "character state");
    for (const id of chapter.referenced_characters) if (chapter.characters.includes(id)) fail(book, `${chapter.id} character ${id} is both present and referenced-only`);
    for (const id of chapter.referenced_groups) if (chapter.groups.includes(id)) fail(book, `${chapter.id} group ${id} is both present and referenced-only`);
  }

  for (const event of manifest.events) {
    if (!sets.chapter.has(event.chapter)) fail(book, `${event.id} unknown chapter ${event.chapter}`);
    if (!sourceRefExists(event.source_ref, event.chapter)) fail(book, `${event.id} unresolved source_ref ${event.source_ref}`);
    if (event.source_file !== sourceByChapter.get(event.chapter)?.file) fail(book, `${event.id} source_file mismatch`);
    for (const [field, set, label] of [["characters", sets.character, "character"], ["referenced_characters", sets.character, "referenced character"], ["groups", sets.group, "group"], ["referenced_groups", sets.group, "referenced group"]]) checkRefs(event.id, event[field], set, label);
    for (const id of event.referenced_characters) if (event.characters.includes(id)) fail(book, `${event.id} character ${id} is both participant and referenced-only`);
    for (const id of event.referenced_groups) if (event.groups.includes(id)) fail(book, `${event.id} group ${id} is both participant and referenced-only`);
    for (const field of ["location", "origin", "destination"]) if (event[field] != null && event[field] !== "unknown" && !sets.location.has(event[field])) fail(book, `${event.id} unknown ${field} ${event[field]}`);
    if (event.movement_status !== null && !MOVEMENT.has(event.movement_status)) fail(book, `${event.id} invalid movement_status ${event.movement_status}`);
    const owners = manifest.chapters.filter(chapter => chapter.event_ids.includes(event.id));
    if (owners.length !== 1 || owners[0]?.id !== event.chapter) fail(book, `${event.id} must be indexed exactly once by chapter ${event.chapter}`);
  }

  for (const state of manifest.character_states) {
    if (state.chapter !== null && !sets.chapter.has(state.chapter)) fail(book, `${state.id} unknown chapter ${state.chapter}`);
    if (!sets.character.has(state.character)) fail(book, `${state.id} unknown character ${state.character}`);
    if (state.location !== null && !sets.location.has(state.location)) fail(book, `${state.id} unknown location ${state.location}`);
    if (!sourceRefExists(state.source_ref, state.chapter)) fail(book, `${state.id} unresolved source_ref ${state.source_ref}`);
    const owners = manifest.chapters.filter(chapter => chapter.character_state_ids.includes(state.id));
    if (owners.length !== 1 || owners[0]?.id !== state.chapter) fail(book, `${state.id} must be indexed exactly once by chapter ${state.chapter}`);
  }

  for (const relation of manifest.relationships) {
    checkRefs(relation.id, relation.chapter_ids, sets.chapter, "chapter");
    for (const id of relation.participants) if (!sets.character.has(id) && !sets.group.has(id)) fail(book, `${relation.id} unknown participant ${id}`);
    for (const evidence of relation.evidence) if (typeof evidence === "string") {
      const eventEvidence = new RegExp(`^b${book}c\\d+[-_]e`).test(evidence);
      if (eventEvidence ? !sets.event.has(evidence) : !sourceRefExists(evidence, relation.chapter_ids[0])) fail(book, `${relation.id} unresolved evidence ${evidence}`);
    }
  }
  for (const entity of [...manifest.characters, ...manifest.groups, ...manifest.locations]) {
    checkRefs(entity.id, list(entity.physical_presence ?? entity.chapters), sets.chapter, "occurrence chapter");
    checkRefs(entity.id, list(entity.mentioned_in), sets.chapter, "mention chapter");
  }
  for (const item of manifest.historical_context) {
    checkRefs(item.id, item.chapter_ids, sets.chapter, "chapter");
    for (const ref of item.source_refs) if (!sourceRefExists(ref, item.chapter_ids[0])) fail(book, `${item.id} unresolved source_ref ${ref}`);
    for (const url of item.urls) if (typeof url !== "string" || !/^https?:\/\//.test(url)) fail(book, `${item.id} invalid URL ${url}`);
  }
  for (const item of manifest.external_validation) if (item.url != null && (typeof item.url !== "string" || !/^https?:\/\//.test(item.url))) fail(book, `${item.id} invalid URL ${item.url}`);

  summaries.push({ book, min: manifest.book.global_sections.minimum, max: manifest.book.global_sections.maximum, chapters: manifest.chapters.length, events: manifest.events.length, states: manifest.character_states.length, characters: manifest.characters.length, groups: manifest.groups.length, locations: manifest.locations.length, relationships: manifest.relationships.length });
}

for (let i = 1; i < summaries.length; i += 1) if (summaries[i].min !== summaries[i - 1].max + 1) fail(`${summaries[i - 1].book}–${summaries[i].book}`, `global sections must continue from ${summaries[i - 1].max} to ${summaries[i].min}`);
if (errors.length) {
  console.error(`Research manifest validation failed (${errors.length}):\n- ${errors.join("\n- ")}`);
  process.exit(1);
}
for (const item of summaries) console.log(`Book ${item.book}: ${item.chapters} chapters, ${item.events} events, ${item.states} states, ${item.characters} characters, ${item.groups} groups, ${item.locations} locations, ${item.relationships} relationships`);
console.log(`Research manifest validation passed: ${summaries.length} canonical provenance manifests, Books ${summaries.map(item => item.book).join(", ")}.`);
