import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const relationships = JSON.parse(
  fs.readFileSync(path.join(root, "data/relationships.json"), "utf8"),
).relationships;

function findRelationships(from, to) {
  return relationships.filter(relationship => relationship.from === from && relationship.to === to);
}

test("Aoki Tanzaemon and Jotaro family relationship starts at the explicit Book II reveal", () => {
  const family = findRelationships("aoki_tanzaemon", "jotaro").filter(
    relationship => relationship.type === "family",
  );

  assert.equal(family.length, 1);
  assert.equal(family[0].subtype, "father_and_separated_son");
  assert.equal(family[0].first_section, 12);
});

test("Daizo and Jotaro remain coercive guardianship rather than normalized father and son", () => {
  const edges = findRelationships("daizo", "jotaro");

  assert.deepEqual(edges, [
    {
      from: "daizo",
      to: "jotaro",
      type: "authority",
      subtype: "coercive_claimed_guardianship",
      first_section: 62,
    },
  ]);
});

test("Musashi and Otsu partner relationship remains bounded to the explicit Book VII acknowledgment", () => {
  const partner = findRelationships("musashi", "otsu").find(
    relationship => relationship.type === "partner_family",
  );

  assert.ok(partner);
  assert.equal(partner.subtype, "mutually_acknowledged_husband_and_wife_without_stated_ceremony");
  assert.equal(partner.first_section, 111);
});
