import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const projectRoot = path.resolve(import.meta.dirname, "..");
const assetsRoot = path.join(projectRoot, "src", "assets");
const outputRoot = path.join(projectRoot, "public", "media");
const sourceOrigin = "http://glassco.mrkirof.com";
const remoteOnly = process.argv.includes("--remote-only");

async function findMetadataFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const target = path.join(directory, entry.name);
      if (entry.isDirectory()) return findMetadataFiles(target);
      return entry.name.endsWith(".asset.json") ? [target] : [];
    }),
  );
  return files.flat();
}

await mkdir(outputRoot, { recursive: true });
const metadataFiles = await findMetadataFiles(assetsRoot);

for (const metadataFile of metadataFiles) {
  const metadata = JSON.parse(await readFile(metadataFile, "utf8"));
  const filename = `${metadata.asset_id}-${metadata.original_filename}`;
  const localUrl = `/media/${filename}`;

  if (remoteOnly) {
    metadata.url = `${sourceOrigin}/__l5e/assets-v1/${metadata.asset_id}/${metadata.original_filename}`;
    await writeFile(metadataFile, `${JSON.stringify(metadata, null, 2)}\n`);
    continue;
  }

  const response = await fetch(`${sourceOrigin}${metadata.url}`);

  if (!response.ok) {
    throw new Error(`Unable to download ${metadata.url}: HTTP ${response.status}`);
  }

  await writeFile(path.join(outputRoot, filename), Buffer.from(await response.arrayBuffer()));
  metadata.url = localUrl;
  await writeFile(metadataFile, `${JSON.stringify(metadata, null, 2)}\n`);
}

console.log(
  remoteOnly
    ? `Repointed ${metadataFiles.length} image assets to the available image host.`
    : `Vendored ${metadataFiles.length} image assets into public/media.`,
);
