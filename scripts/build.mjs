import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { apps, site } from "../src/data/apps.mjs";
import { renderAppHome, renderHome, renderPrivacyPage, renderSupportPage } from "../src/templates/site.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const srcDir = path.join(root, "src");
const distDir = path.join(root, "dist");

rmSync(distDir, { recursive: true, force: true });
mkdirSync(distDir, { recursive: true });
cpSync(path.join(srcDir, "assets"), path.join(distDir, "assets"), { recursive: true });

writeFile(path.join(distDir, "index.html"), renderHome({ site, apps }));

for (const app of apps) {
  writeFile(path.join(distDir, app.slug, "index.html"), renderAppHome(app));
  writeFile(path.join(distDir, app.slug, "privacy", "index.html"), renderPrivacyPage(app));
  writeFile(path.join(distDir, app.slug, "support", "index.html"), renderSupportPage(app));
}

writeFile(path.join(distDir, ".nojekyll"), "");

const fileCount = countFiles(distDir);
console.log(`Built ${fileCount} files into ${path.relative(root, distDir)}`);

function writeFile(target, contents) {
  mkdirSync(path.dirname(target), { recursive: true });
  writeFileSync(target, contents);
}

function countFiles(dir) {
  let total = 0;

  for (const entry of readdirSync(dir)) {
    const target = path.join(dir, entry);
    const stats = statSync(target);
    total += stats.isDirectory() ? countFiles(target) : 1;
  }

  return total;
}
