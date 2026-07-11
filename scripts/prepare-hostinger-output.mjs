import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const distDir = path.join(root, "dist");
const fallbackDir = path.join(distDir, "client");
const indexHtml = path.join(distDir, "index.html");

try {
  await fs.access(indexHtml);
} catch {
  console.error("[hostinger] dist/index.html missing after build");
  process.exit(1);
}

await fs.rm(fallbackDir, { recursive: true, force: true });
await fs.mkdir(fallbackDir, { recursive: true });

const entries = await fs.readdir(distDir, { withFileTypes: true });

await Promise.all(
  entries
    .filter((entry) => entry.name !== "client")
    .map((entry) =>
      fs.cp(path.join(distDir, entry.name), path.join(fallbackDir, entry.name), {
        recursive: true,
      }),
    ),
);

console.log("[hostinger] static build ready in dist/ and dist/client/");