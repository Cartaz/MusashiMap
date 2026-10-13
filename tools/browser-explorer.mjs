import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";

export async function verifyExplorer(page) {
  const folder = path.resolve("test-output/screenshots");
  await fs.mkdir(folder, { recursive: true });
  const screenshot = async name => {
    await page.screenshot({ path: path.join(folder, `${name}.png`), fullPage: false });
  };
  const noOverflow = async () => assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
  const closeInView = async () => assert.equal(await page.locator("#explorer-close").evaluate(node => {
    const r = node.getBoundingClientRect();
    return r.top >= 0 && r.left >= 0 && r.bottom <= innerHeight && r.right <= innerWidth;
  }), true, "The map-return control must remain visible while inner panes scroll");
  const chooseChapter = async section => {
    if (await page.locator("#explorer-dialog").evaluate(dialog => dialog.open)) await page.locator("#explorer-close").click();
    await page.locator("#section-select").selectOption(String(section));
  };
  const count = async () => Number((await page.locator("#archive-count").textContent()).match(/^\d+/)[0]);

  const originalView = await page.evaluate(() => ({ center: window.auditMap.getCenter(), zoom: window.auditMap.getZoom() }));
  await page.locator("#open-archive").click();
  await page.locator("#archive-search").fill("Musashi");
  assert.equal(await count(), 0);
  await page.locator("#archive-search").fill("Ogin");
  assert.equal(await count(), 0);
  await page.locator("#archive-search").fill("Takezo");
  assert.ok(await count() >= 1);
  await page.locator(".archive-result[data-record-id='musashi']").click();
  assert.doesNotMatch(await page.locator("#archive-detail").textContent(), /Miyamoto Musashi|Ogin|Sasaki/);
  // Native dialog focus remains inside the dialog; Escape restores its opener.
  for (let index = 0; index < 14; index++) {
    await page.keyboard.press("Tab");
    assert.equal(await page.evaluate(() => document.activeElement === document.body || document.querySelector("#explorer-dialog").contains(document.activeElement)), true);
  }
  await page.keyboard.press("Escape");
  assert.equal(await page.locator("#open-archive").evaluate(node => document.activeElement === node), true);
  assert.deepEqual(await page.evaluate(() => ({ center: window.auditMap.getCenter(), zoom: window.auditMap.getZoom() })), originalView);

  await page.locator("#open-archive").click();
  await page.locator("[data-category='places']").click();
  await page.locator("#archive-search").fill("Sekigahara");
  await page.locator(".archive-result").click();
  await page.locator("#archive-detail").getByRole("button", { name: "Mostra sulla mappa" }).click();
  assert.equal(await page.locator("#explorer-dialog").evaluate(dialog => dialog.open), false);
  assert.ok(await page.locator(".musashi-place-popup").isVisible());
  await page.locator(".leaflet-popup-close-button").click();

  await page.locator(".diary-toggle").click();
  await page.locator("#character-toggle").click();
  await page.locator("#select-none").click();
  assert.ok(await page.locator("#event-list li").count() > 0);
  await page.locator("#event-scope").selectOption("selected");
  assert.match(await page.locator("#event-list").textContent(), /Nessun evento/);
  await page.locator("#event-scope").selectOption("all");
  await page.locator("#select-all").click();
  await screenshot("desktop-map-diary");
  await page.locator(".diary-toggle").click();

  await chooseChapter(112);
  await page.locator("#open-archive").click();
  await page.locator("[data-category='characters']").click();
  await page.locator("#archive-search").fill("");
  assert.equal(await count(), 150);
  await page.locator("#archive-search").fill("Yoshino");
  assert.equal(await page.locator(".archive-result[data-record-id='yoshino_tayu']").count(), 1);
  assert.equal(await page.locator(".archive-result[data-record-id='yoshino_second']").count(), 1);
  await chooseChapter(105);
  await page.locator("#open-archive").click();
  assert.equal(await page.locator(".archive-result[data-record-id='yoshino_second']").count(), 0);
  await chooseChapter(112);
  await page.locator("#open-archive").click();
  await page.locator("#archive-search").fill("Musashi");
  await page.locator(".archive-result[data-record-id='musashi']").click();
  await screenshot("desktop-archive-detail");
  await page.locator("#archive-search").fill("");
  await page.locator("[data-category='events']").click();
  assert.equal(await count(), 758);
  await page.locator("#archive-next").click();
  assert.match(await page.locator("#archive-page-label").textContent(), /Pagina 2/);
  await page.locator("[data-category='places']").click();
  assert.equal(await count(), 253);
  await page.locator("#archive-search").fill("Saikachi");
  await page.locator(".archive-result[data-record-id='saikachi_slope']").click();
  assert.equal(await page.locator("#archive-detail").getByRole("button", { name: "Mostra sulla mappa" }).count(), 0);
  await page.locator("#archive-search").fill("");
  await page.locator("[data-category='timeline']").click();
  assert.equal(await count(), 758);
  await page.locator("#archive-results summary").first().click();
  await closeInView();
  await screenshot("desktop-timeline");
  await page.locator("#archive-results .timeline-event button").first().click();
  assert.ok(await page.locator("#archive-detail").textContent());

  await page.locator("[data-explorer-view='relations']").click();
  await page.locator("#relation-character").selectOption("musashi");
  await page.locator("[data-relation-mode='graph']").click();
  assert.equal(await page.locator(".graph-node").count(), 6);
  await screenshot("desktop-relations-graph");
  await page.locator("#graph-next").click();
  assert.match(await page.locator("#graph-page-label").textContent(), /Collegamenti 2/);
  await page.locator(".graph-node").first().click();
  assert.notEqual(await page.locator("#relation-character").inputValue(), "musashi");

  await chooseChapter(1);
  await page.locator("#open-relations").click();
  assert.doesNotMatch(await page.locator("#relation-character").textContent(), /Miyamoto|Ogin|Sasaki/);
  await page.locator("#relation-search").fill("Kojiro");
  assert.equal(await page.locator("#relation-character option").count(), 0);
  assert.equal(await page.locator(".graph-node").count(), 0);
  await page.locator("#relation-search").fill("");
  await chooseChapter(26);
  await page.locator("#open-archive").click();
  await page.locator("[data-category='characters']").click();
  await page.locator("#archive-search").fill("Baiken");
  await page.locator(".archive-result[data-record-id='kohei']").click();
  assert.doesNotMatch(await page.locator("#archive-detail").textContent(), /Temma|Tsujikaze|Kōhei/);
  await page.locator("#archive-search").fill("Kohei");
  assert.equal(await page.locator(".archive-result[data-record-id='kohei']").count(), 0);
  assert.equal(await page.locator(".archive-result[data-record-id='kohei-before-26']").count(), 1);
  await chooseChapter(28);
  await page.locator("#open-archive").click();
  await page.locator("#archive-search").fill("Baiken");
  assert.equal(await page.locator(".archive-result[data-record-id='kohei']").count(), 1);
  assert.equal(await page.locator(".archive-result[data-record-id='kohei-before-26']").count(), 0);
  await chooseChapter(112);

  for (const viewport of [{ width: 375, height: 812 }, { width: 812, height: 375 }, { width: 768, height: 1024 }, { width: 1440, height: 900 }]) {
    await page.setViewportSize(viewport);
    await noOverflow();
    await page.locator("#open-archive").click();
    await page.locator("[data-category='characters']").click();
    await page.locator("#archive-search").fill("Musashi");
    await noOverflow();
    if (viewport.width === 375) await screenshot("mobile-archive-list");
    await page.locator(".archive-result[data-record-id='musashi']").click();
    await noOverflow();
    if (viewport.height < 500) {
      assert.equal(await page.locator("#archive-results").isVisible(), false);
      assert.ok((await page.locator("#archive-detail").boundingBox()).height >= 120);
      await closeInView();
      await screenshot("mobile-landscape-detail");
    }
    if (viewport.width === 375) {
      assert.equal(await page.locator("#archive-results").isVisible(), false);
      await screenshot("mobile-archive-detail");
      await page.locator(".explorer-back").click();
      assert.equal(await page.locator("#archive-results").isVisible(), true);
    }
    await page.locator("[data-explorer-view='relations']").click();
    await page.locator("#relation-character").selectOption("musashi");
    await page.locator("[data-relation-mode='graph']").click();
    await noOverflow();
    // All visible graph cards occupy separate areas, including long mobile names.
    const boxes = await page.locator(".graph-node, .graph-center").evaluateAll(nodes => nodes.map(node => {
      const r = node.getBoundingClientRect(); return { x: r.x, y: r.y, right: r.right, bottom: r.bottom };
    }));
    for (let a = 0; a < boxes.length; a++) for (let b = a + 1; b < boxes.length; b++) {
      assert.ok(boxes[a].right <= boxes[b].x || boxes[b].right <= boxes[a].x || boxes[a].bottom <= boxes[b].y || boxes[b].bottom <= boxes[a].y, "Graph cards must not overlap");
    }
    if (viewport.width === 375) {
      await page.locator("#relation-graph").scrollIntoViewIfNeeded();
      await closeInView();
      await screenshot("mobile-relations-graph");
    }
    await page.locator("#explorer-close").click();
    if (viewport.width === 375) {
      await screenshot("mobile-map");
      await page.locator(".diary-toggle").click();
      assert.equal(await page.locator(".map-stage").evaluate(node => node.inert), true);
      await screenshot("mobile-diary");
      await page.keyboard.press("Escape");
      assert.equal(await page.locator(".map-stage").evaluate(node => node.inert), false);
    }
  }
  console.log("Explorer browser checks passed: all chapter events, safe search/rewinds, catalog pagination, timeline, relationship navigation, graph spacing, focus, map return and four viewports.");
}
