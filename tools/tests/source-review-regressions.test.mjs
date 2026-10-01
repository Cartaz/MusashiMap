import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import test from "node:test";
import { getDisplayCharacterName } from "../../js/reader-progress.js";

const read = file => JSON.parse(readFileSync(new URL(`../../${file}`,import.meta.url),"utf8"));
const chars = read("data/characters.json").characters;
const events = read("data/events.json").events;
const states = read("data/character-states.json").character_states;
const identities = read("data/identities.json").identities;
const character = id => chars.find(item=>item.id===id);
const event = id => events.find(item=>item.id===id);
const state = (id,section) => states.find(item=>item.character===id && item.section===section);

test("role-only references retain labels until explicit names",()=>{
  for (const [id,first,reveal,role] of [["ogin",1,2,"Takezō's sister"],["osugi",1,4,"Matahachi's mother"],["munenori",12,13,"Yagyū sword instructor"]]) {
    assert.equal(getDisplayCharacterName(character(id),first,identities),role);
    assert.equal(getDisplayCharacterName(character(id),reveal-1,identities),role);
    assert.equal(getDisplayCharacterName(character(id),reveal,identities),character(id).name);
  }
  assert.match(readFileSync(new URL("../../data/source/book2/chapter5-a-spring-breeze.txt",import.meta.url),"utf8"),/heir, Munenori/);
});

test("residence and reported positions do not create physical presence",()=>{
  for (const [id,section] of [["sekishusai",19],["ship_captain",23],["monkey",32],["konoe_nobutada",41],["kobashi_kurando",46],["musashi",107]]) assert.ok(!character(id).present_in.includes(section),`${id} at ${section}`);
  for (const [id,section] of [["monkey",23],["monkey",33],["rinya",38],["rinya",39],["obata_yogoro",82],["aoki_tanzaemon",107]]) assert.ok(character(id).present_in.includes(section),`${id} at ${section}`);
  assert.equal(state("musashi",107).location,null);
  assert.equal(state("musashi",107).location_status,"reported_position");
});

test("chapter boundaries cannot reveal death or arrival early",()=>{
  assert.equal(state("obata_yogoro",81).status,"present");
  assert.equal(state("obata_yogoro",82).status,"dead");
  assert.equal(state("obata_kagenori",84).status,"dead");
  assert.equal(state("obata_kagenori",84).location,null);
  assert.equal(state("musashi",7).location,null);
  assert.equal(event("b1c7-07").destination,"unknown");
  assert.equal(event("b1c7-07").movement_status,"uncertain_route");
});

test("scenes and movement actors do not inherit unrelated destinations",()=>{
  assert.equal(event("b6c11-e01").location,"mitsumine_inner_approach");
  assert.equal(event("b6c11-e02").location,"kosaruzawa_bridge");
  assert.equal(event("b7c16-e01").location,"kanmon_crossing_boat");
  assert.equal(event("b2c6-e11").origin,null);
  assert.equal(event("b2c6-e11").destination,null);
  assert.deepEqual(event("b2c6-audit-jotaro-arrival").characters,["jotaro"]);
  assert.ok(!event("b4c7-e02").characters.includes("musashi"));
  assert.equal(event("b3c10_e02").destination,null);
  assert.deepEqual(event("b3c10-audit-captive-route").characters,["otsu"]);
});

test("peony and castle-employment causal chains survive extraction",()=>{
  for (const id of ["b2c9-audit-s05","b2c9-audit-s11","b2c9-audit-s12","b2c9-audit-s13"]) assert.ok(event(id));
  assert.match(event("b6c4-audit-s06").description,/castle grounds/);
  assert.match(event("b6c14-e03").description,/separate release/);
  assert.match(event("b6c14-e04").description,/Sakai/);
  assert.ok(events.indexOf(event("b6c14-e04"))<events.indexOf(event("b6c14-e03")));
});

test("all five manifests reuse runtime event IDs and corrected fields",()=>{
  for (const book of [3,4,5,6,7]) {
    const manifest = read(`research/book${book}-production-manifest.json`);
    const runtime = events.filter(item=>item.chapter.startsWith(`b${book}c`));
    assert.deepEqual(manifest.events.map(item=>item.id),runtime.map(item=>item.id));
    for (const record of manifest.events) for (const key of ["chapter","characters","referenced_characters","location","description","source_ref"]) assert.deepEqual(record[key],event(record.id)[key],`${record.id}.${key}`);
  }
});

test("the review conserves 112 inventories and states its actual limits",()=>{
  const review = read("research/source-audit/chapter-review-2026-09-30.json");
  assert.equal(review.chapters.length,112);
  assert.equal(review.scope.source_first_facts,994);
  assert.equal(review.scope.new_independent_full_text_reread,false);
  assert.equal(review.scope.original_master_available,false);
  for (const book of [1,2,3,4,5,6,7]) for (const chapter of read(`research/source-audit/book${book}-source-oracle.json`).chapters) {
    const row = review.chapters.find(row=>row.chapter===chapter.id);
    assert.deepEqual(row.source_first_inventory,chapter);
    assert.equal(row.source_sha256,createHash("sha256").update(readFileSync(new URL(`../../${chapter.source_file}`,import.meta.url))).digest("hex"));
  }
  assert.ok(review.chapters.find(row=>row.chapter==="b2c5").source_integrity.some(issue=>issue.kind==="duplicated_passage"));
  execFileSync(process.execPath,["tools/generate-source-review.mjs","--check"],{cwd:fileURLToPath(new URL("../../",import.meta.url))});
});

test("canonical normalization preserves every registered oracle reference without retaining unsupported carry-over",()=>{
  const aliases = read("research/source-audit/review-adjudications-2026-09-30.json").canonical_id_normalization;
  const known = new Set(chars.map(character=>character.id));
  for (const book of [1,2,3,4,5,6,7]) for (const chapter of read(`research/source-audit/book${book}-source-oracle.json`).chapters) {
    const physical = new Set(chars.filter(character=>character.present_in.includes(chapter.section)).map(character=>character.id));
    const references = new Set(events.filter(event=>event.chapter===chapter.id).flatMap(event=>event.referenced_characters??[]));
    for (const reference of chapter.referenced_characters) {
      const raw = typeof reference==="string" ? reference : reference.canonical_id;
      if (!raw) continue;
      const name = raw.split(":")[0].split("/")[0].trim();
      const id = aliases[name]??name;
      if (known.has(id)) assert.ok(physical.has(id) || references.has(id),`${chapter.id}: ${id}`);
    }
  }
  for (const [chapter,id] of [["b3c13","monkey"],["b4c9","konoe_nobutada"],["b4c14","kobashi_kurando"]]) assert.ok(!events.filter(event=>event.chapter===chapter).some(event=>event.referenced_characters?.includes(id)),`${chapter}: ${id}`);
});
