import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");

if (!existsSync(distDir)) {
  throw new Error("dist/ does not exist. Run npm run build first.");
}

const htmlFiles = walk(distDir).filter((file) => file.endsWith(".html"));
const failures = [];

for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  const refs = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map((match) => match[1]);

  for (const ref of refs) {
    if (
      ref.startsWith("http://") ||
      ref.startsWith("https://") ||
      ref.startsWith("mailto:") ||
      ref.startsWith("#")
    ) {
      continue;
    }

    if (ref.startsWith("/")) {
      failures.push(`${relative(file)} uses absolute path ${ref}`);
      continue;
    }

    const resolved = resolveRef(file, ref);
    if (!existsSync(resolved)) {
      failures.push(`${relative(file)} is missing ${ref}`);
    }
  }
}

if (!existsSync(path.join(distDir, ".nojekyll"))) {
  failures.push("dist/.nojekyll is missing");
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Validated ${htmlFiles.length} HTML files with relative asset and route checks.`);

function walk(dir) {
  const files = [];

  for (const entry of readdirSync(dir)) {
    const target = path.join(dir, entry);
    const stats = statSync(target);
    if (stats.isDirectory()) {
      files.push(...walk(target));
    } else {
      files.push(target);
    }
  }

  return files;
}

function resolveRef(file, ref) {
  const base = path.dirname(file);
  const direct = path.resolve(base, ref);

  if (existsSync(direct)) {
    return direct;
  }

  if (ref.endsWith("/")) {
    return path.join(direct, "index.html");
  }

  if (!path.extname(ref)) {
    return path.join(direct, "index.html");
  }

  return direct;
}

function relative(file) {
  return path.relative(root, file);
}
