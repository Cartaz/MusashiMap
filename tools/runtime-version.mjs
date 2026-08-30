import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const RUNTIME_DATA = [
  "data/chapters.json",
  "data/character-states.json",
  "data/characters.json",
  "data/events.json",
  "data/groups.json",
  "data/identities.json",
  "data/locations.json",
  "data/reader-progress.json",
  "data/context/character-wiki.json",
  "data/context/micro-wiki.json"
];

const walkFiles = (root, relative, include = () => true) => {
  const directory = path.join(root, relative);
  if (!fs.existsSync(directory)) return [];
  const files = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const child = path.join(relative, entry.name);
    if (entry.isDirectory()) files.push(...walkFiles(root, child, include));
    else if (entry.isFile() && include(child)) files.push(child);
  }
  return files;
};

const isLocalRuntimeUrl = value => {
  if (!value || /^(?:[a-z]+:|#|\/\/)/i.test(value)) return false;
  const pathname = value.split("#", 1)[0].split("?", 1)[0];
  return /^(?:\.\.?\/|(?:css|js|data|assets)\/)/.test(pathname);
};

const rewriteRuntimeUrls = (relative, contents, rewrite) => {
  if (relative.endsWith(".html")) {
    return contents.replace(/\b(src|href)=(["'])([^"']+)\2/g, (match, attribute, quote, value) => {
      if (!isLocalRuntimeUrl(value)) return match;
      return `${attribute}=${quote}${rewrite(value)}${quote}`;
    });
  }
  if (relative.endsWith(".css")) {
    return contents.replace(/url\(\s*(["']?)([^"')]+)\1\s*\)/g, (match, quote, value) => {
      const normalized = value.trim();
      if (!isLocalRuntimeUrl(normalized)) return match;
      return `url(${quote}${rewrite(normalized)}${quote})`;
    });
  }
  if (relative.endsWith(".js")) {
    return contents.replace(/(["'])([^"'\n]+)\1/g, (match, quote, value) => {
      if (!isLocalRuntimeUrl(value)) return match;
      return `${quote}${rewrite(value)}${quote}`;
    });
  }
  return contents;
};

export function withRuntimeVersion(value, version) {
  if (!isLocalRuntimeUrl(value)) return value;
  const [beforeHash, hash = ""] = value.split("#", 2);
  const [pathname, query = ""] = beforeHash.split("?", 2);
  const params = new URLSearchParams(query);
  params.set("v", version);
  const suffix = params.toString();
  return `${pathname}${suffix ? `?${suffix}` : ""}${hash ? `#${hash}` : ""}`;
}

export function listLocalRuntimeUrls(relative, contents) {
  const values = [];
  rewriteRuntimeUrls(relative, contents, value => {
    values.push(value);
    return value;
  });
  return values;
}

export function versionRuntimeText(relative, contents, version) {
  return rewriteRuntimeUrls(relative, contents, value => withRuntimeVersion(value, version));
}

export function createRuntimeVersion(root) {
  const files = [
    "index.html",
    "tools/build-pages.mjs",
    "tools/runtime-version.mjs",
    ...walkFiles(root, "css", relative => relative.endsWith(".css")),
    ...walkFiles(root, "js", relative => relative.endsWith(".js")),
    ...walkFiles(root, "assets"),
    ...RUNTIME_DATA
  ];
  const hash = crypto.createHash("sha256");
  for (const relative of [...new Set(files)].sort()) {
    const absolute = path.join(root, relative);
    if (!fs.existsSync(absolute)) throw new Error(`Missing runtime version input ${relative}.`);
    hash.update(relative);
    hash.update("\0");
    hash.update(fs.readFileSync(absolute));
    hash.update("\0");
  }
  return hash.digest("hex").slice(0, 12);
}
