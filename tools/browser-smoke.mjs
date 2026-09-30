import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createServer } from "node:http";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Optional development dependency; no browser/test code enters the Pages artifact.
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_MODULE_PATH || "playwright");
const artifact = fileURLToPath(new URL("../_site/", import.meta.url));
const mime = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png" };
const server = createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
    const file = path.resolve(artifact, `.${pathname === "/" ? "/index.html" : pathname}`);
    if (!file.startsWith(artifact)) throw new Error("Outside artifact");
    const content = await readFile(file);
    response.writeHead(200, { "Content-Type": mime[path.extname(file)] || "application/octet-stream" });
    response.end(content);
  } catch {
    response.writeHead(404);
    response.end();
  }
});
await new Promise(resolve => server.listen(0, "127.0.0.1", resolve));
let browser;
const pageErrors = [];
const blankStyle = { version: 8, sources: {}, layers: [] };
const png = Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+a2ioAAAAASUVORK5CYII=", "base64");
const newPage = async () => {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, ignoreHTTPSErrors: process.env.BROWSER_IGNORE_HTTPS_ERRORS === "1" });
  page.on("pageerror", error => pageErrors.push(error.message));
  // Only basemap data is controlled: Leaflet, MapLibre and the complete app run.
  await page.route("https://tiles.openfreemap.org/styles/liberty", route => route.fulfill({ json: blankStyle }));
  await page.route("https://tile.openstreetmap.org/**", route => route.fulfill({ contentType: "image/png", body: png }));
  await page.addInitScript(() => {
    let leaflet;
    Object.defineProperty(window, "L", {
      configurable: true,
      get() { return leaflet; },
      set(value) {
        leaflet = value;
        const createMap = value.map;
        value.map = (...args) => {
          const map = createMap(...args);
          window.auditMap = map;
          return map;
        };
      }
    });
  });
  return page;
};
const url = `http://127.0.0.1:${server.address().port}/`;
const loaded = async page => {
  await page.goto(url);
  await page.waitForFunction(() => document.querySelector("#data-status").dataset.state === "ok");
  await page.waitForFunction(() => document.querySelectorAll(".leaflet-marker-icon").length > 0);
};
const checked = page => page.locator("#character-filters input").evaluateAll(inputs => inputs.map(input => ({ label: input.getAttribute("aria-label"), checked: input.checked })));
const mapHasCorrectSize = page => page.waitForFunction(() => {
  const size = window.auditMap.getSize();
  const container = window.auditMap.getContainer();
  return size.x === container.clientWidth && size.y === container.clientHeight;
});

try {
  browser = await chromium.launch({
    ...(process.env.BROWSER_EXECUTABLE_PATH ? { executablePath: process.env.BROWSER_EXECUTABLE_PATH } : {}),
    args: ["--no-sandbox", "--enable-unsafe-swiftshader"]
  });
  const page = await newPage();
  await loaded(page);
  assert.equal(await page.locator("#section-select option").count(), 112);
  assert.equal(await page.locator("#prev-section").isDisabled(), true);
  assert.ok((await checked(page)).every(item => !item.label.includes("Miyamoto") && !item.label.includes("Ogin")));
  await page.locator("#character-toggle").click();
  await page.locator("#section-select").selectOption("8");
  assert.ok((await checked(page)).some(item => item.label === "Segui Miyamoto Musashi"));
  await page.locator("#section-select").selectOption("112");
  assert.equal(await page.locator("#next-section").isDisabled(), true);
  assert.equal((await checked(page)).length, 9);
  await page.locator("#section-select").selectOption("1");
  await page.locator("#character-filters label").first().click();
  await page.locator("#section-select").selectOption("112");
  assert.equal((await checked(page)).find(item => item.label === "Segui Ogin").checked, true);
  assert.equal((await checked(page)).find(item => item.label === "Segui Miyamoto Musashi").checked, false);
  await page.locator("#section-select").selectOption("1");
  await page.locator("#select-none").click();
  assert.ok((await checked(page)).every(item => !item.checked));
  await page.locator("#select-all").click();
  assert.ok((await checked(page)).every(item => item.checked));
  await page.locator("#section-select").selectOption("112");
  assert.ok((await checked(page)).every(item => item.checked));

  await page.locator("#chapter").fill("999");
  assert.equal(await page.locator("#chapter").evaluate(input => input.validity.valid), false);
  await page.locator("#chapter").press("Escape");
  assert.equal(await page.locator("#chapter").inputValue(), "112");
  assert.equal(await page.locator("#chapter").evaluate(input => input.validity.valid), true);
  await page.locator("#chapter").fill("0");
  await page.locator("#prev-section").click();
  assert.equal(await page.locator("#chapter").inputValue(), "111");
  assert.equal(await page.locator("#chapter").evaluate(input => input.validity.valid), true);

  await page.locator(".diary-toggle").click();
  await mapHasCorrectSize(page);
  const wikiToggle = page.locator(".wiki-card-toggle").first();
  await wikiToggle.click();
  assert.equal(await wikiToggle.getAttribute("aria-expanded"), "true");
  assert.equal(await page.locator(".wiki-card-body").first().isVisible(), true);
  await wikiToggle.click();
  await page.locator(".diary-toggle").click();
  await mapHasCorrectSize(page);
  for (let section = 1; section <= 112; section++) {
    await page.locator("#section-select").selectOption(String(section));
    assert.equal(await page.locator("#chapter").inputValue(), String(section));
  }
  await page.locator("#section-select").selectOption("1");
  // Collision layout shifts the visible marker inside its geographic anchor.
  await page.locator(".musashi-character-marker").first().click();
  assert.equal(await page.locator(".musashi-character-popup").isVisible(), true);
  await page.locator(".leaflet-popup-close-button").click();
  await page.locator("#section-select").selectOption("112");
  for (const viewport of [{ width: 375, height: 812 }, { width: 812, height: 375 }]) {
    await page.setViewportSize(viewport);
    await mapHasCorrectSize(page);
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
    await page.locator(".legend-heading").click();
    assert.equal(await page.locator(".legend-heading").getAttribute("aria-expanded"), "true");
    await page.locator(".legend-heading").click();
  }
  await page.close();

  const failedData = await newPage();
  await failedData.route("**/data/context/micro-wiki.json*", route => route.fulfill({ status: 500, body: "Injected failure" }));
  await failedData.goto(url);
  await failedData.waitForFunction(() => document.querySelector("#data-status").dataset.state === "error");
  for (const id of ["chapter", "chapter-apply", "prev-section", "next-section", "section-select", "select-all", "select-none"]) {
    assert.equal(await failedData.locator(`#${id}`).isDisabled(), true);
  }
  await failedData.locator(".diary-toggle").click();
  assert.match(await failedData.locator("#status").textContent(), /Ricarica la pagina/);
  await failedData.close();

  const failedMapData = await newPage();
  await failedMapData.route("**/data/events.json*", route => route.fulfill({ status: 500, body: "Injected failure" }));
  await failedMapData.goto(url);
  await failedMapData.waitForFunction(() => document.querySelector("#map-note").textContent.includes("Dati cartografici"));
  assert.equal(await failedMapData.locator("#map-note").isVisible(), true);
  await failedMapData.close();

  const unavailableMap = await newPage();
  await unavailableMap.route("https://unpkg.com/leaflet@1.9.4/dist/leaflet.js", route => route.abort());
  await unavailableMap.setViewportSize({ width: 375, height: 812 });
  await unavailableMap.goto(url);
  await unavailableMap.waitForFunction(() => document.querySelector("#data-status").dataset.state === "ok");
  assert.equal(await unavailableMap.locator("#map-note").isVisible(), true);
  assert.match(await unavailableMap.locator("#map-note").textContent(), /diario di lettura/);
  await unavailableMap.locator("#next-section").click();
  assert.equal(await unavailableMap.locator("#chapter").inputValue(), "2");
  await unavailableMap.close();

  for (const resource of ["https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.js", "https://unpkg.com/@maplibre/maplibre-gl-leaflet@0.1.3/leaflet-maplibre-gl.js", "https://tiles.openfreemap.org/styles/liberty"]) {
    const failedBasemap = await newPage();
    await failedBasemap.route(resource, route => route.abort());
    await loaded(failedBasemap);
    await failedBasemap.waitForFunction(() => document.querySelector("#map-note").textContent.includes("semplificata"));
    assert.ok(await failedBasemap.locator(".leaflet-tile").count() > 0);
    await failedBasemap.close();
  }

  const invalidStyle = await newPage();
  await invalidStyle.route("https://tiles.openfreemap.org/styles/liberty", route => route.fulfill({ json: { ...blankStyle, layers: [{ id: "bad", type: "invalid" }] } }));
  await loaded(invalidStyle);
  await invalidStyle.waitForFunction(() => document.querySelector("#map-note").textContent.includes("semplificata"));
  assert.ok(await invalidStyle.locator(".leaflet-tile").count() > 0);
  await invalidStyle.close();

  const lateError = await newPage();
  await loaded(lateError);
  await lateError.waitForFunction(() => {
    let loaded = false;
    window.auditMap.eachLayer(layer => { if (layer.getMaplibreMap?.()?.loaded()) loaded = true; });
    return loaded;
  });
  await lateError.evaluate(() => window.auditMap.eachLayer(layer => {
    if (layer.getMaplibreMap) layer.getMaplibreMap().fire("error", { error: new Error("Injected tile failure") });
  }));
  await lateError.waitForFunction(() => document.querySelector("#map-note").textContent.includes("semplificata"));
  assert.ok(await lateError.locator(".leaflet-tile").count() > 0);
  await lateError.close();
  assert.deepEqual(pageErrors, []);
  console.log("Browser smoke passed: 112 chapters, spoiler names, persistent selections, input recovery, panel resizing, mobile portrait/landscape, data/CDN failures and vector fallback.");
} finally {
  if (browser) await browser.close();
  await new Promise(resolve => server.close(resolve));
}
