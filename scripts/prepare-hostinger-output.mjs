import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const distDir = path.join(root, "dist");
const fallbackDirs = [path.join(distDir, "client"), path.join(distDir, "public")];
const indexHtml = path.join(distDir, "index.html");
const publicHtaccess = path.join(root, "public", ".htaccess");
const distHtaccess = path.join(distDir, ".htaccess");

try {
  await fs.access(indexHtml);
} catch {
  console.error("[hostinger] dist/index.html missing after build");
  process.exit(1);
}

try {
  await fs.access(publicHtaccess);
  await fs.copyFile(publicHtaccess, distHtaccess);
} catch {
  // Hostinger can still serve the root index.html without .htaccess on its
  // managed Vite frontend mode. The copy is only needed for Apache/static mode.
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

console.log("[hostinger] static build ready in dist/, dist/client/, and dist/public/");