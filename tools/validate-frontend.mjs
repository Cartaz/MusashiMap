import { readdir, readFile, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const root = process.cwd();
const errors = [];

const walk = async directory => {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.name === ".git" || entry.name === "node_modules") continue;
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(full));
    else files.push(full);
  }
  return files;
};

const files = await walk(root);
const jsFiles = files.filter(file => file.endsWith(".js") || file.endsWith(".mjs"));
const jsonFiles = files.filter(file => file.endsWith(".json"));
const cssFiles = files.filter(file => file.endsWith(".css"));

for (const file of jsFiles) {
  const result = spawnSync(process.execPath, ["--check", file], { encoding: "utf8" });
  if (result.status !== 0) {
    errors.push(`JavaScript syntax error: ${path.relative(root, file)}\n${result.stderr.trim()}`);
  }
}

for (const file of jsonFiles) {
  try {
    JSON.parse(await readFile(file, "utf8"));
  } catch (error) {
    errors.push(`Invalid JSON: ${path.relative(root, file)} — ${error.message}`);
  }
}

const checkBalancedCss = (content, file) => {
  let depth = 0;
  let quote = null;
  let escaped = false;
  let comment = false;

  for (let i = 0; i < content.length; i += 1) {
    const char = content[i];
    const next = content[i + 1];

    if (comment) {
      if (char === "*" && next === "/") {
        comment = false;
        i += 1;
      }
      continue;
    }
    if (!quote && char === "/" && next === "*") {
      comment = true;
      i += 1;
      continue;
    }
    if (quote) {
      if (escaped) escaped = false;
      else if (char === "\\") escaped = true;
      else if (char === quote) quote = null;
      continue;
    }
    if (char === '"' || char === "'") quote = char;
    else if (char === "{") depth += 1;
    else if (char === "}") depth -= 1;
    if (depth < 0) throw new Error("unmatched closing brace");
  }

  if (comment) throw new Error("unterminated comment");
  if (quote) throw new Error("unterminated string");
  if (depth !== 0) throw new Error(`unbalanced braces (depth ${depth})`);
};

for (const file of cssFiles) {
  try {
    checkBalancedCss(await readFile(file, "utf8"), file);
  } catch (error) {
    errors.push(`CSS syntax structure error: ${path.relative(root, file)} — ${error.message}`);
  }
}

const indexPath = path.join(root, "index.html");
const index = await readFile(indexPath, "utf8");
const localReferences = [...index.matchAll(/(?:src|href)=["']([^"']+)["']/g)]
  .map(match => match[1])
  .filter(value => !/^(?:[a-z]+:|#|\/\/)/i.test(value));

for (const reference of localReferences) {
  const clean = reference.split("?")[0].split("#")[0];
  if (!clean || clean.endsWith("/")) continue;
  const target = path.resolve(root, clean);
  if (!target.startsWith(`${root}${path.sep}`) && target !== root) {
    errors.push(`Unsafe local reference in index.html: ${reference}`);
    continue;
  }
  if (!existsSync(target)) errors.push(`Missing local reference in index.html: ${reference}`);
}

for (const file of jsFiles) {
  const content = await readFile(file, "utf8");
  for (const match of content.matchAll(/(?:from\s+|import\s*\()["'](\.[^"']+)["']/g)) {
    const target = path.resolve(path.dirname(file), match[1]);
    if (!existsSync(target)) errors.push(`Missing JS import: ${path.relative(root, file)} → ${match[1]}`);
  }
}

if (errors.length) {
  console.error(errors.join("\n\n"));
  process.exit(1);
}

console.log(`Frontend validation passed: ${jsFiles.length} JS/MJS, ${jsonFiles.length} JSON, ${cssFiles.length} CSS files checked.`);
