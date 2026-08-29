#!/usr/bin/env node

import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(new URL("..", import.meta.url).pathname);
const readJson = relative => JSON.parse(readFileSync(resolve(root, relative), "utf8"));
const esc = value => String(value ?? "—").replaceAll("|", "\\|").replaceAll("\n", " ");
const uniq = values => [...new Set(values)];

const chapters = readJson("data/chapters.json").sections;
const locations = readJson("data/locations.json").locations;
const events = readJson("data/events.json").events;
const states = readJson("data/character-states.json").character_states;
const locationById = new Map(locations.map(location => [location.id, location]));

const sources = new Map();
const assignments = new Map();
const addSource = source => sources.set(source.id, source);
const assign = (ids, sourceIds, scope = "direct") => {
  for (const id of ids) {
    const current = assignments.get(id) ?? [];
    for (const sourceId of sourceIds) current.push({ sourceId, scope });
    assignments.set(id, current);
  }
};

const manualSources = [
  { id: "sekigahara-town", authority: "Sekigahara Town", title: "Sekigahara battlefield official guide", url: "https://www.town.sekigahara.gifu.jp/secure/7099/%E9%96%A2%E3%82%B1%E5%8E%9F%E7%94%BA%E5%BD%B9%E5%A0%B4%E6%A7%98_%E3%83%97%E3%83%AD%E3%83%A2%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E5%86%8A%E5%AD%90.pdf", checked: "2026-08-29" },
  { id: "ibuki-maibara", authority: "Maibara City", title: "Mount Ibuki official site", url: "https://www.city.maibara.lg.jp/mtibuki/index.html", checked: "2026-08-29" },
  { id: "miyamoto-mimasaka", authority: "Mimasaka City", title: "Miyamoto Musashi birthplace-site area", url: "https://www.city.mimasaka.lg.jp/kanko/spot/history_culture/musashi/1460348700995.html", checked: "2026-08-29" },
  { id: "himeji-city", authority: "Himeji City", title: "Himeji Castle official site and address", url: "https://www.city.himeji.lg.jp/castle/0000007744.html", checked: "2026-08-29" },
  { id: "sayo-mikazuki", authority: "Sayo Town", title: "Mikazuki district official information", url: "https://www.town.sayo.lg.jp/cms-sypher/www/section/detail.jsp?id=31", checked: "2026-08-29" },
  { id: "kiyomizudera", authority: "Kiyomizudera", title: "Official grounds and access", url: "https://www.kiyomizudera.or.jp/en/visit/", checked: "2026-08-29" },
  { id: "daigoji", authority: "Daigoji", title: "Official location and access", url: "https://www.daigoji.or.jp/en/", checked: "2026-08-29" },
  { id: "manpukuji", authority: "Ōbaku-san Manpukuji", title: "Official history and present address", url: "https://www.obakusan.or.jp/about/", checked: "2026-08-29" },
  { id: "manpukuji-uji", authority: "Uji City", title: "Official history: foundation in 1661", url: "https://www.city.uji.kyoto.jp/uploaded/attachment/34243.pdf", checked: "2026-08-29" },
  { id: "uji-bridge", authority: "Uji City", title: "Uji historical geography and bridge context", url: "https://www.city.uji.kyoto.jp/site/ijuteiju/63390.html", checked: "2026-08-29" },
  { id: "nara-hannya", authority: "Nara City", title: "Hannyaji and Hannyaji-village history", url: "https://www.city.nara.lg.jp/site/bunkazai/105906.html", checked: "2026-08-29" },
  { id: "nara-yagyu", authority: "Nara City", title: "Yagyū Kaidō and modern Yagyū area", url: "https://www.city.nara.lg.jp/sightseeing/naraharu/111707.html", checked: "2026-08-29" },
  { id: "hozoin", authority: "Hōzōin-ryū", title: "Official school history and Hōzōin-site context", url: "https://hozoin.org/rekisi/", checked: "2026-08-29" },
  { id: "sarusawa", authority: "Nara City Tourism Association", title: "Sarusawa Pond", url: "https://narashikanko.or.jp/spot/detail_10060.html", checked: "2026-08-20" },
  { id: "yoshioka-ndl", authority: "National Diet Library Search", title: "Yoshioka dojo locality record", url: "https://ndlsearch.ndl.go.jp/books/R100000094-I1459090", checked: "2026-08-20" },
  { id: "kyoto-kamo", authority: "Kyoto City Historical Materials Office", title: "Kamo River in Kyoto historical chronology", url: "https://www2.city.kyoto.lg.jp/somu/rekishi/fm/nenpyou/htmlsheet/toshi08.html", checked: "2026-08-20" },
  { id: "kyoto-rokuamida", authority: "Kyoto City Official Travel Guide", title: "Rakuyō Six Amida pilgrimage", url: "https://ja.kyoto.travel/event/single.php?event_id=3974", checked: "2026-08-20" },
  { id: "tarui-town", authority: "Tarui Town", title: "Official Tarui-juku and Nakasendō/Minoji junction history", url: "https://www.town.tarui.lg.jp/page/1424.html", checked: "2026-08-29" },
  { id: "nara-city", authority: "Nara City", title: "Ancient Nara world-heritage geography", url: "https://www.city.nara.lg.jp/site/world-heritage/index-2.html", checked: "2026-08-29" },
  { id: "todaiji-nara", authority: "Nara City Tourism Association", title: "Tōdaiji present address and access", url: "https://narashikanko.or.jp/spot/detail_10001.html", checked: "2026-08-29" },
  { id: "osaka-castle", authority: "Osaka City", title: "Osaka Castle and present castle-park context", url: "https://www.city.osaka.lg.jp/chuo/page/0000636470.html", checked: "2026-08-29" },
  { id: "tsu-city", authority: "Tsu City", title: "Official city position and historical port/castle-town profile", url: "https://www.info.city.tsu.mie.jp/shisei/city_profile/1004788.html", checked: "2026-08-29" },
  { id: "yasaka-gion", authority: "Kyoto City Official Travel Guide", title: "Yasaka Shrine in present-day Gion", url: "https://ja.kyoto.travel/tourism/single01.php?category_id=7&tourism_id=474", checked: "2026-08-29" },
  { id: "daitokuji-kyoto", authority: "Kyoto City Official Travel Guide", title: "Daitokuji history and current address", url: "https://ja.kyoto.travel/tourism/single02.php?category_id=9&tourism_id=2250", checked: "2026-08-29" },
  { id: "kurama-kyoto", authority: "Kyoto City", title: "Kurama historic-landscape protection area", url: "https://www.city.kyoto.lg.jp/tokei/page/0000281785.html", checked: "2026-08-29" },
  { id: "daimonji-kyoto", authority: "Kyoto City Cultural Heritage", title: "Higashiyama and Mount Daimonji cultural landscape", url: "https://kyoto-bunkaisan.city.kyoto.lg.jp/kyotoisan/nintei-theme/yamatomidori.html", checked: "2026-08-29" },
  { id: "shimonita-town", authority: "Shimonita Town", title: "Official town position and historical road role", url: "https://www.town.shimonita.lg.jp/soumu/m01/m01/02.html", checked: "2026-08-29" },
  { id: "tajima-hyogo", authority: "Hyogo Prefecture", title: "Present-day Tajima region and boundaries", url: "https://web.pref.hyogo.lg.jp/tjk01/tajima/intro.html", checked: "2026-08-29" },
  { id: "kishiwada-city", authority: "Kishiwada City", title: "Present city between Osaka Bay and the Izumi Mountains", url: "https://www.city.kishiwada.osaka.jp/uploaded/attachment/129508.pdf", checked: "2026-08-29" },
  { id: "okazaki-castle", authority: "Okazaki City", title: "Official Okazaki Castle historic-site record", url: "https://www.city.okazaki.lg.jp/bunka/torikumi_bunka/1004568/1004592/1004726/1004736.html", checked: "2026-08-29" },
  { id: "yahagi-okazaki", authority: "Okazaki City", title: "Official historical-landscape study of Yahagi Bridge", url: "https://www.city.okazaki.lg.jp/_res/projects/default_project/_page_/001/002/894/03dai1sho2025.pdf", checked: "2026-08-29" },
  { id: "tatsuno-city", authority: "Tatsuno City", title: "Official present-day city position", url: "https://www.city.tatsuno.lg.jp/gyosei/gaiyo/5333.html", checked: "2026-08-29" }
];
for (const source of manualSources) addSource(source);

assign(["sekigahara"], ["sekigahara-town"]);
assign(["mount_ibuki_area", "oko_akemi_house"], ["ibuki-maibara"], "area_anchor");
assign(["miyamoto", "shippoji", "ogin_house", "honiden_house", "old_cryptomeria_shippoji", "nakayama_pass", "sanumo_mountains", "itadori_pasture", "hinagura_stockade"], ["miyamoto-mimasaka"], "broad_area_only");
assign(["himeji_area", "himeji_castle", "hanada_bridge", "himeji_aoki", "shikama", "shikama_estuary"], ["himeji-city"], "city_or_castle_area");
assign(["mikazuki_shrine", "mikazuki_cave", "mikazuki_inn", "sayo_river", "amano_village"], ["sayo-mikazuki"], "municipal_area_only");
assign(["kiyomizudera", "chawan_hill", "mountain_god_hall"], ["kiyomizudera"], "site_or_parent_area");
assign(["daigo"], ["daigoji"]);
assign(["mampukuji"], ["manpukuji", "manpukuji-uji"], "modern_namesake_anachronistic");
assign(["uji_bridge", "kizugawa_ferry", "uji_road"], ["uji-bridge"], "bridge_or_regional_corridor");
assign(["hannya_plain", "hannya_observation_knoll"], ["nara-hannya"], "area_anchor");
assign(["koyagyu_castle", "sekishusai_mountain_house", "shinindo", "tsukigase_iga_back_road", "tsukigase_route", "koyagyu_dojo"], ["nara-yagyu"], "parent_area_or_corridor");
assign(["hozoin"], ["hozoin"]);
assign(["sarusawa_pond"], ["sarusawa"]);
assign(["yoshioka_school"], ["yoshioka-ndl"], "historical_locality_not_footprint");
assign(["kamo_river_pleasure_district", "honnoji_ruins", "sanjo_checkpoint", "kamo_river_gojo"], ["kyoto-kamo"], "city_or_river_context");
assign(["rokuamida"], ["kyoto-rokuamida"], "multi_site_concept");
assign(["tarui"], ["tarui-town"], "modern_town_and_historical_road_context");
assign(["aida_river", "mimasaka_highroad", "tsujinohara", "hinagura"], ["miyamoto-mimasaka"], "broad_area_only");
assign(["mikazuki_teahouse", "sayo_district"], ["sayo-mikazuki"], "municipal_area_only");
assign(["shingu"], ["tatsuno-city"], "modern_municipal_area_only");
assign(["nara"], ["nara-city"], "modern_city_area");
assign(["todaiji_area"], ["todaiji-nara"], "direct_complex");
assign(["yagyu_valley"], ["nara-yagyu"], "modern_valley_area");
assign(["osaka_east_moat"], ["osaka-castle"], "castle_area_historical_extent_unresolved");
assign(["tsu"], ["tsu-city"], "modern_city_and_historical_context");
assign(["gion_woods"], ["yasaka-gion"], "shrine_area_historical_woodland_extent_unresolved");
assign(["daitokuji"], ["daitokuji-kyoto"], "direct_complex");
assign(["kurama"], ["kurama-kyoto"], "modern_historic_area");
assign(["mount_daimonji_ravine"], ["daimonji-kyoto"], "mountain_area_exact_ravine_unresolved");
assign(["kozukeshimonida"], ["shimonita-town"], "probable_toponym_correspondence");
assign(["tajima"], ["tajima-hyogo"], "modern_region");
assign(["kishiwada"], ["kishiwada-city"], "city_coast_only_pier_unresolved");
assign(["okazaki_fish_district", "honda_castle"], ["okazaki-castle"], "okazaki_area_exact_narrative_site_unresolved");
assign(["yahagi_bridge"], ["yahagi-okazaki"], "historical_bridge_corridor");
assign(["tatsuno"], ["tatsuno-city"], "modern_city_area");

const manifestTopicAssignments = {
  3: {
    fushimi_castle_works: ["fushimi_castle_works", "fushimi_osaka_road"],
    sumiyoshi_taisha: ["sumiyoshi_taisha", "sumiyoshi_inn"],
    sumiyoshi_shore: ["sumiyoshi_shore"],
    ise_naiku: ["ise_naiku", "yamada_ise", "house_of_virgins", "arakida_house"],
    eagle_mountain: ["eagle_mountain"],
    ominato: ["ominato"],
    yokkaichi: ["yokkaichi", "tokaido_omi_corridor"],
    temma_landing: ["temma_landing", "osaka", "kizugawa_harbor", "yodo_river"],
    kema_landing: ["kema_landing", "yodo_river"],
    kamo_river_gojo: ["kamo_river_gojo"],
    karasumaru_mitsuhiro: ["karasumaru_house"],
    koji_hill: ["koji_hill"],
    rendaiji_field: ["rendaiji_field"]
  },
  4: {
    "Ichijōji Sagarimatsu": ["ichijoji_sagarimatsu", "ichijoji_mountain_approach"],
    "Hachidai Shrine and spreading pine tradition": ["ichijoji_sagarimatsu"],
    "Rengeōin / Sanjūsangendō": ["rengeoin_sanjusangendo"],
    "Enryakuji destruction and rebuilding": ["enryakuji", "mudoji_mount_hiei", "mount_hiei_otsu_road", "seta_hiei_route"],
    "Enryakuji reconstruction chronology": ["enryakuji"],
    "Seta no Karahashi": ["seta_karahashi", "uchidegahama", "seta_hiei_route"],
    "Hon’ami Kōetsu": ["honami_lane_house", "koetsu_field_picnic"],
    "Kōetsu ceramic work": ["honami_lane_house"],
    "Kōetsu calligraphy": ["honami_lane_house"],
    "Male and Female Waterfalls literary association": ["otaki_metaki", "magome_pass"],
    "Nakasendō route near the waterfalls": ["otaki_metaki", "magome_pass", "nakasendo_omi_mino", "nakatsugawa"],
    "Yoshino Tayū and Kōetsu cultural memory": ["ogiya_yanagimachi", "yoshino_cottage"]
  },
  5: {
    "ext-kiso-fukushima": ["fukushima_checkpoint", "suhara_nezame", "kiso_highroad"],
    "ext-shiojiri-narai": ["narai", "shiojiri_pass", "kiso_highroad"],
    "ext-shimosuwa": ["shimosuwa", "suwa_myojin", "wada_daimon_corridor"],
    "ext-hachioji-yakuoin": ["hachioji", "yakuoin_takao", "kobotoke_pass", "hachioji_mound"],
    "ext-tone-history": ["tone_floodplain", "hotengahara", "hotengahara_burial", "hotengahara_shack", "raid_village", "tokuganji"],
    "ext-edo-chronology": ["edo", "nihombashi", "edo_castle_hibiya", "edo_castle", "yanagihara", "ushigafuchi_kudan"],
    "ext-sumida": ["sumida_river", "edo_east_barrier"],
    "ext-sensoji": ["sensoji", "sensoji_riverside"],
    "ext-kanda": ["ono_dojo", "obata_school", "kobikicho"],
    "ext-azabu": ["azabu_hill", "dogen_slope", "shojuan"],
    "ext-akagi": ["akagi_myojin", "hojo_ushigome"]
  },
  6: {
    tsukinomisaki: ["tsukinomisaki", "isarago_hill", "takanawa_highroad", "hosokawa_edo_residence"],
    isarago_hill: ["isarago_hill", "takanawa_highroad"],
    hojo_ushigome: ["hojo_ushigome"],
    mitsumine_shrine: ["mitsumine_shrine", "kosaruzawa_bridge", "oinu_teahouse", "shomaru_pass"],
    kotesashigahara: ["kotesashigahara"],
    tanashi: ["tanashi"],
    nobidome: ["nobidome"],
    daizo_pawnshop: ["daizo_pawnshop"],
    wadakura_pavilion: ["wadakura_pavilion", "otemachi_prison", "edo_castle"]
  },
  7: {
    "ext-ganryujima": ["funashima", "shimonoseki", "heike_pine", "kokura_hill"],
    "ext-hikojima": ["hikojima"],
    "ext-kokura-castle": ["kokura_castle", "kokura", "moji", "itatsu_kojiro"],
    "ext-sakai": ["sakai_port"],
    "ext-sakai-archaeology": ["sakai_port"],
    "ext-kongoji": ["kongoji", "amami_plateau"],
    "ext-koyasan": ["mount_koya", "mount_kudo", "kamuro"],
    "ext-kofukuji": ["kofukuji"],
    "ext-kofukuji-history": ["kofukuji"],
    "ext-himeji-history": ["himeji_area", "shikama", "shikama_estuary"]
  }
};

for (let book = 3; book <= 7; book += 1) {
  const manifest = readJson(`research/book${book}-production-manifest.json`);
  for (const [index, source] of (manifest.external_validation ?? []).entries()) {
    if (!source.url) continue;
    const id = `b${book}-external-${index + 1}`;
    addSource({ id, authority: source.authority ?? "Unspecified authority", title: source.topic, url: source.url, checked: source.accessed ?? "2026-08-20" });
    const ids = manifestTopicAssignments[book]?.[source.topic] ?? [];
    assign(ids, [id], ids.includes(source.topic) ? "direct" : "context_or_parent_area");
  }
}

function usedLocations(book) {
  const chapterIds = new Set(chapters.filter(chapter => chapter.book_number === book).map(chapter => chapter.chapter_id));
  const sectionNumbers = new Set(chapters.filter(chapter => chapter.book_number === book).map(chapter => chapter.number));
  const ids = new Set();
  for (const event of events) if (chapterIds.has(event.chapter) && event.location) ids.add(event.location);
  for (const state of states) if (chapterIds.has(state.chapter) && state.location) ids.add(state.location);
  for (const location of locations) if ((location.source_chapters ?? []).some(chapter => chapterIds.has(chapter))) ids.add(location.id);
  for (const location of locations) if (sectionNumbers.has(location.introduced_section)) ids.add(location.id);
  return [...ids];
}

function occurrences(id, book) {
  const bookChapters = new Set(chapters.filter(chapter => chapter.book_number === book).map(chapter => chapter.chapter_id));
  const location = locationById.get(id);
  const introduction = chapters.find(chapter => chapter.number === location?.introduced_section && chapter.book_number === book)?.chapter_id;
  return uniq([
    ...events.filter(event => bookChapters.has(event.chapter) && event.location === id).map(event => event.chapter),
    ...states.filter(state => bookChapters.has(state.chapter) && state.location === id).map(state => state.chapter),
    ...(location?.source_chapters ?? []).filter(chapter => bookChapters.has(chapter)),
    ...(introduction ? [introduction] : [])
  ]).sort((a, b) => (chapters.find(chapter => chapter.chapter_id === a)?.number ?? 0) - (chapters.find(chapter => chapter.chapter_id === b)?.number ?? 0));
}

function verdict(location, evidence) {
  const confidence = String(location.geographic_confidence ?? "");
  const precision = String(location.coordinate_precision ?? "");
  const historical = String(location.historical_match ?? "");
  if (historical.includes("anachronistic") || precision === "modern_literary_reference") return "OMONIMO/RIFERIMENTO MODERNO; continuità storica negata";
  if (evidence.length && ["exact", "modern_match"].includes(precision)) return "POSIZIONE MODERNA CONFERMATA";
  if (evidence.length && location.coordinates) return "AREA/PUNTO RAPPRESENTATIVO MODERNO; scena esatta non confermata";
  if (evidence.length && (location.type === "route" || confidence.includes("route") || confidence.includes("corridor"))) return "CORRIDOIO MODERNO/STORICO CONFERMATO; tracciato narrativo non ricostruito";
  if (evidence.length) return "AREA, TOPONIMO O COMPLESSO CONFERMATO; punto della scena non confermato";
  if (["narrative_site", "private_residence", "fictional_or_unresolved_site", "narrative_venue", "moving_scene", "vessel"].includes(location.type)
      || confidence.includes("unmappable") || confidence === "unknown") return "NON IDENTIFICABILE O PRIVATO/LETTERARIO; nessuna posizione odierna confermabile";
  if (location.type === "route" || confidence.includes("route") || confidence.includes("corridor")) return "PERCORSO NON RICOSTRUITO; nessun punto singolo ammesso";
  return "NON RISOLTO; nessuna posizione odierna confermata";
}

const rowsByBook = new Map();
const errors = [];
const totals = new Map();
for (let book = 1; book <= 7; book += 1) {
  const rows = [];
  for (const id of usedLocations(book)) {
    const location = locationById.get(id);
    if (!location) {
      errors.push(`Libro ${book}: location ID sconosciuto ${id}`);
      continue;
    }
    const evidence = uniq((assignments.get(id) ?? []).map(item => item.sourceId)).map(sourceId => sources.get(sourceId)).filter(Boolean);
    const result = verdict(location, evidence);
    rows.push({ location, chapters: occurrences(id, book), evidence, result });
    totals.set(result, (totals.get(result) ?? 0) + 1);
  }
  rowsByBook.set(book, rows);
}
const auditedLocationIds = new Set([...rowsByBook.values()].flatMap(rows => rows.map(row => row.location.id)));
for (const location of locations) {
  if (!auditedLocationIds.has(location.id)) errors.push(`Scheda geografica non assegnata ad alcun libro: ${location.id}`);
}

const lines = [
  "# Audit geografico globale per libro",
  "",
  "> Generato da `node tools/generate-geography-audit.mjs`. Verifica online eseguita tra il 20 e il 29 agosto 2026; fonti ufficiali o istituzionali preferite.",
  "",
  "## Metodo ed esito",
  "",
  "La presenza di un luogo nel romanzo deriva soltanto dal corpus locale. Le fonti online servono esclusivamente a verificare il toponimo, l'area, il complesso o l'indirizzo moderno. Un indirizzo moderno non dimostra il punto esatto della scena né la continuità con un edificio del primo Seicento.",
  "",
  `- Schede geografiche uniche di produzione controllate: **${auditedLocationIds.size}/${locations.length}**.`,
  `- Occorrenze luogo-per-libro controllate: **${[...rowsByBook.values()].reduce((sum, rows) => sum + rows.length, 0)}**.`,
  `- Errori strutturali: **${errors.length}**.`,
  "",
  ...[...totals.entries()].map(([label, count]) => `- ${label}: **${count}**.`),
  "",
  "## Correzione critica emersa",
  "",
  "`mampukuji` resta un riferimento moderno geograficamente preciso al tempio Ōbaku di Gokasho, Uji, ma non una corrispondenza storica forte: il sito ufficiale del tempio e Uji City datano la fondazione al 1661, dopo l'epoca della scena. Il record di produzione è quindi marcato `modern_literary_reference` / `anachronistic_reference`.",
  ""
];

if (errors.length) lines.push("## Errori", "", ...errors.map(error => `- ${error}`), "");

for (let book = 1; book <= 7; book += 1) {
  const chapter = chapters.find(item => item.book_number === book);
  const rows = rowsByBook.get(book);
  lines.push(`## Libro ${chapter.book} — ${chapter.book_title}`, "", `Luoghi verificati in questo libro: **${rows.length}**.`, "");
  lines.push("| Luogo | Capitoli | Posizione moderna / verdetto | Coordinate di produzione | Fonti online |", "|---|---|---|---|---|");
  for (const row of rows) {
    const { location } = row;
    const coordinates = location.coordinates ? `${location.coordinates[0]}, ${location.coordinates[1]} (${location.coordinate_precision})` : `— (${location.coordinate_precision})`;
    const sourceText = row.evidence.length
      ? row.evidence.map(source => `[${source.authority}: ${source.title}](${source.url})`).join("<br>")
      : "Nessuna fonte identifica responsabilmente un punto moderno per questa entità";
    lines.push(`| ${esc(location.name)} (\`${location.id}\`) | ${row.chapters.map(id => `\`${id}\``).join(", ") || "solo contesto"} | **${row.result}**<br>${esc(location.map_note)} | ${coordinates} | ${sourceText} |`);
  }
  lines.push("");
}

lines.push(
  "## Regole di lettura",
  "",
  "- `POSIZIONE MODERNA CONFERMATA` significa che la fonte identifica il luogo odierno; non certifica automaticamente gli edifici o gli eventi narrativi del 1600.",
  "- `AREA/PUNTO RAPPRESENTATIVO` e `COMPLESSO CONFERMATO` vietano di leggere la coordinata come punto esatto della scena.",
  "- `NON IDENTIFICABILE` è un esito positivo dell'audit quando il testo offre soltanto una casa privata, una locanda anonima, un mezzo in movimento o un luogo letterario.",
  "- Le rotte restano senza punto finché non esiste una geometria documentata; trasformarle in un marker singolo sarebbe fuorviante.",
  ""
);

const outputIndex = process.argv.indexOf("--output");
const output = outputIndex >= 0 ? process.argv[outputIndex + 1] : "research/geography-book-audit.md";
writeFileSync(resolve(root, output), `${lines.join("\n")}\n`, "utf8");
console.log(JSON.stringify({ output, productionLocations: locations.length, perBookRows: [...rowsByBook.values()].reduce((sum, rows) => sum + rows.length, 0), structuralErrors: errors.length, verdicts: Object.fromEntries(totals) }, null, 2));
if (errors.length) process.exitCode = 1;
