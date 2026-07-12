import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const phase = process.argv[2] ?? "check";

const marker = "[glassco-hostinger] STATIC-SPA DEPLOY CONFIG v2026-07-12";
console.log(`${marker} (${phase})`);

function readJson(file) {
  const filePath = path.join(root, file);
  if (!fs.existsSync(filePath)) return undefined;
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function readText(file) {
  const filePath = path.join(root, file);
  return fs.existsSync(filePath) ? fs.readFileSync(filePath, "utf8") : "";
}

const pkg = readJson("package.json");
const lock = readText("package-lock.json");
const viteConfig = readText("vite.config.ts");

const forbidden = [
  "@tanstack/react-start",
  "@tanstack/react-start-client",
  "@tanstack/react-start-server",
  "@tanstack/react-start-rsc",
  "@tanstack/start-client-core",
  "@tanstack/start-server-core",
  "@tanstack/start-plugin-core",
  "@tanstack/start-fn-stubs",
  "@lovable.dev/vite-tanstack-config",
  "@cloudflare/vite-plugin",
  "wrangler",
  "miniflare",
];

const dependencyText = JSON.stringify(
  {
    dependencies: pkg?.dependencies ?? {},
    devDependencies: pkg?.devDependencies ?? {},
  },
  null,
  2,
);

const found = forbidden.filter(
  (name) => dependencyText.includes(`"${name}"`) || lock.includes(`node_modules/${name}`) || viteConfig.includes(name),
);

if (found.length > 0) {
  console.error("[glassco-hostinger] Wrong SSR/TanStack Start deployment files detected:");
  for (const name of found) console.error(`- ${name}`);
  console.error(
    "[glassco-hostinger] Fix: deploy the latest static-SPA commit, clear Hostinger cache/node_modules, then redeploy.",
  );
  process.exit(1);
}

const viteVersion = pkg?.devDependencies?.vite ?? pkg?.dependencies?.vite ?? "";
if (/^[~^]?7\./.test(viteVersion)) {
  console.error(`[glassco-hostinger] Vite ${viteVersion} detected. Hostinger Node 20 should use Vite 6 here.`);
  process.exit(1);
}

console.log("[glassco-hostinger] Verified: no TanStack Start/Cloudflare SSR dependencies; Vite static SPA build only.");