import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const distDir = path.join(root, "dist");
const fallbackDirs = [path.join(distDir, "client"), path.join(distDir, "public")];
const indexHtml = path.join(distDir, "index.html");
const publicHtaccess = path.join(root, "public", ".htaccess");
const distHtaccess = path.join(distDir, ".htaccess");
const hostingerHtaccess = path.join(root, "hostinger", ".htaccess");
const hostingerApi = path.join(root, "hostinger", "api");
const distApi = path.join(distDir, "api");

try {
  await fs.access(indexHtml);
} catch {
  console.error("[hostinger] dist/index.html missing after build");
  process.exit(1);
}

try {
  await fs.copyFile(hostingerHtaccess, distHtaccess);
} catch {
  try {
    await fs.access(publicHtaccess);
    await fs.copyFile(publicHtaccess, distHtaccess);
  } catch {
    // Hostinger can serve the root index.html without .htaccess in managed
    // Vite mode. Apache/static mode needs the file for SPA fallback.
  }
}

try {
  await fs.cp(hostingerApi, distApi, { recursive: true });
} catch (error) {
  console.error("[hostinger] could not include PHP form endpoints in dist/api", error);
  process.exit(1);
}

for (const fallbackDir of fallbackDirs) {
  await fs.rm(fallbackDir, { recursive: true, force: true });
  await fs.mkdir(fallbackDir, { recursive: true });
}

const entries = await fs.readdir(distDir, { withFileTypes: true });

await Promise.all(
  fallbackDirs.flatMap((fallbackDir) =>
    entries
      .filter((entry) => !fallbackDirs.some((dir) => path.basename(dir) === entry.name))
      .map((entry) =>
        fs.cp(path.join(distDir, entry.name), path.join(fallbackDir, entry.name), {
          recursive: true,
        }),
      ),
  ),
);

console.log("[hostinger] static build + PHP form endpoints ready in dist/");
