import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

import { computeCollisionOffsets, installMarkerCollision } from "../../js/marker-collision.js";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");

const displayedPoints = (points, offsets) => points.map((point, index) => ({
  x: point.x + offsets[index].x,
  y: point.y + offsets[index].y
}));

const pairDistances = points => points.flatMap((point, index) =>
  points.slice(index + 1).map(other => Math.hypot(point.x - other.x, point.y - other.y))
);

test("non-colliding markers remain anchored", () => {
  assert.deepEqual(computeCollisionOffsets([{ x: 0, y: 0 }, { x: 100, y: 0 }]), [
    { x: 0, y: 0 },
    { x: 0, y: 0 }
  ]);
});

test("collision radius scales to keep large groups separated", () => {
  const points = Array.from({ length: 8 }, () => ({ x: 100, y: 100 }));
  const displayed = displayedPoints(points, computeCollisionOffsets(points));
  assert.ok(Math.min(...pairDistances(displayed)) >= 37);
});

test("nearby geographic anchors share one screen-space layout", () => {
  const points = [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 40, y: 0 }];
  const offsets = computeCollisionOffsets(points);
  const displayed = displayedPoints(points, offsets);
  assert.ok(offsets.every(offset => offset.x !== 0 || offset.y !== 0));
  assert.ok(Math.min(...pairDistances(displayed)) >= 37);
});


test("installed collision layout preserves Leaflet-owned wrapper margins", () => {
  let pendingFrame = null;
  const view = {
    requestAnimationFrame(callback) {
      pendingFrame = callback;
      return 1;
    },
    cancelAnimationFrame() {
      pendingFrame = null;
    }
  };
  const makeNode = () => {
    const properties = new Map();
    return {
      isConnected: true,
      style: {
        marginLeft: "-13px",
        marginTop: "-13px",
        setProperty(name, value) { properties.set(name, value); },
        removeProperty(name) { properties.delete(name); },
        getPropertyValue(name) { return properties.get(name) ?? ""; }
      },
      classList: {
        values: new Set(),
        add(name) { this.values.add(name); },
        remove(name) { this.values.delete(name); },
        contains(name) { return this.values.has(name); }
      },
      getBoundingClientRect() { return { left: 100, top: 100, width: 26, height: 26 }; }
    };
  };
  const nodes = [makeNode(), makeNode()];
  const handlers = new Map();
  const container = {
    ownerDocument: { defaultView: view },
    querySelectorAll() { return nodes; }
  };
  const map = {
    getContainer() { return container; },
    on(event, handler) { handlers.set(event, handler); },
    off(event, handler) { if (handlers.get(event) === handler) handlers.delete(event); }
  };

  const uninstall = installMarkerCollision(map);
  assert.ok(pendingFrame);
  pendingFrame();

  for (const node of nodes) {
    assert.equal(node.style.marginLeft, "-13px");
    assert.equal(node.style.marginTop, "-13px");
    assert.equal(node.classList.contains("is-colliding"), true);
    assert.notEqual(node.style.getPropertyValue("--collision-y"), "");
  }

  uninstall();
  assert.equal(handlers.size, 0);
  for (const node of nodes) {
    assert.equal(node.style.marginLeft, "-13px");
    assert.equal(node.style.marginTop, "-13px");
    assert.equal(node.classList.contains("is-colliding"), false);
  }
});

test("runtime has one collision owner and never rewrites Leaflet anchor margins", () => {
  const runtime = fs.readFileSync(path.join(repoRoot, "js/map-runtime.js"), "utf8");
  const collision = fs.readFileSync(path.join(repoRoot, "js/marker-collision.js"), "utf8");
  const index = fs.readFileSync(path.join(repoRoot, "index.html"), "utf8");
  const markers = fs.readFileSync(path.join(repoRoot, "css/markers.css"), "utf8");

  assert.match(runtime, /installMarkerCollision\(map\)/);
  assert.doesNotMatch(runtime, /collisionOffsets|coordinateKey/);
  assert.doesNotMatch(collision, /marginLeft|marginTop/);
  assert.doesNotMatch(index, /character-collision\.js/);
  assert.equal(fs.existsSync(path.join(repoRoot, "js/character-collision.js")), false);
  assert.match(markers, /transform:\s*translate\(var\(--collision-x\),\s*var\(--collision-y\)\)/);
});
