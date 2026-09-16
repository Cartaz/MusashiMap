import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const runtime = readFileSync(new URL("../../js/map-runtime.js", import.meta.url), "utf8");

test("map renderer uses the shared movement geometry rather than a direct origin-destination shortcut", () => {
  assert.match(runtime, /import \{ getMovementRouteCoordinates, getMovementRouteMode \} from "\.\/movement-contract\.js";/);
  assert.match(runtime, /getMovementRouteCoordinates\(event, byId\)/);
  assert.match(runtime, /L\.polyline\(coordinates, routeStyle\(mode\)\)/);
  assert.doesNotMatch(runtime, /L\.polyline\(\[origin\.coordinates, destination\.coordinates\]/);
});
