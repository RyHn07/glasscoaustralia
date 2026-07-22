// Node.js production server for Hostinger Node.js Web App hosting.
// Serves the built static SPA from `dist/` with SPA fallback + gzip.
//
// Hostinger passes the listen target via process.env.PORT. On some plans
// this is a numeric TCP port; on others it is a Unix socket path. This
// server handles both. It also binds to 0.0.0.0 so Hostinger's reverse
// proxy can reach it (binding to 127.0.0.1 only can cause a 403).

import express from "express";
import compression from "compression";
import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";
import { createContactRouter, createQuoteRouter } from "./server/mail.js";
import { createAdminRouter } from "./server/admin.js";

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
app.use(express.json({ limit: "1mb" }));
app.use("/api/send-contact.php", createContactRouter());
app.use("/api/send-quote.php", createQuoteRouter());
app.use("/api", createAdminRouter());

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
    index: "index.html",
    setHeaders: (res, filePath) => {
      if (filePath.endsWith(".html")) {
        res.setHeader("Cache-Control", "no-cache");
      }
    },
  }),
);

// SPA fallback — Express 5 safe (regex route, no `*` string).
app.use((_req, res) => {
  res.setHeader("Cache-Control", "no-cache");
  res.sendFile(indexHtml);
});

// Resolve listen target. Hostinger may pass:
//   - a numeric TCP port as string, e.g. "31234"
//   - a Unix socket path, e.g. "/home/u123/.../app.sock"
//   - nothing (local dev)
const rawPort = process.env.PORT;
const host = process.env.HOST || "0.0.0.0";

function listen() {
  if (rawPort && /^\d+$/.test(rawPort)) {
    const port = Number(rawPort);
    app.listen(port, host, () => {
      console.log(`[server] listening on http://${host}:${port}`);
    });
  } else if (rawPort && rawPort.length > 0) {
    // Treat as Unix socket path. Remove stale socket file if present.
    try {
      if (fs.existsSync(rawPort)) fs.unlinkSync(rawPort);
    } catch (e) {
      console.warn("[server] could not remove stale socket:", e);
    }
    const server = app.listen(rawPort, () => {
      try {
        fs.chmodSync(rawPort, 0o777);
      } catch {}
      console.log(`[server] listening on unix socket ${rawPort}`);
    });
    server.on("error", (err) => {
      console.error("[server] listen error:", err);
      process.exit(1);
    });
  } else {
    const port = 3000;
    app.listen(port, host, () => {
      console.log(`[server] listening on http://${host}:${port}`);
    });
  }
}

listen();
