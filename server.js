// Minimal Node.js production server for Hostinger Node.js app hosting.
// Serves the built static SPA from `dist/` with SPA fallback + gzip.
//
// Hostinger Node.js setup:
//   Application root:     (your uploaded project folder)
//   Application URL:      your domain
//   Application startup file: server.js
//   Node.js version:      18.x or newer
//
// Before starting the app on Hostinger:
//   1) Run `npm install` (via hPanel "Run NPM Install")
//   2) Run `npm run build`  (via hPanel "Run NPM Script" -> build)
//   3) Start the app.
//
// Port is provided by Hostinger via process.env.PORT.

import express from "express";
import compression from "compression";
import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, "dist");
const indexHtml = path.join(distDir, "index.html");

if (!fs.existsSync(indexHtml)) {
  console.error(
    "[server] dist/index.html not found. Run `npm run build` first.",
  );
  process.exit(1);
}

const app = express();
app.disable("x-powered-by");
app.use(compression());

// Long cache for hashed assets, no-cache for html
app.use(
  "/assets",
  express.static(path.join(distDir, "assets"), {
    immutable: true,
    maxAge: "1y",
  }),
);
app.use(
  express.static(distDir, {
    index: false,
    setHeaders: (res, filePath) => {
      if (filePath.endsWith(".html")) {
        res.setHeader("Cache-Control", "no-cache");
      }
    },
  }),
);

// SPA fallback — send index.html for any non-file route
app.get(/.*/, (_req, res) => {
  res.setHeader("Cache-Control", "no-cache");
  res.sendFile(indexHtml);
});

const port = Number(process.env.PORT) || 3000;
const host = process.env.HOST || "0.0.0.0";
app.listen(port, host, () => {
  console.log(`[server] listening on http://${host}:${port}`);
});
