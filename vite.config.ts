import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import path from "node:path";
import fs from "node:fs/promises";

function hostingerStaticFallbacks() {
  return {
    name: "hostinger-static-fallbacks",
    apply: "build" as const,
    async closeBundle() {
      const distDir = path.resolve(__dirname, "dist");
      const fallbackDirs = [path.join(distDir, "client"), path.join(distDir, "public")];
      const publicHtaccess = path.resolve(__dirname, "public", ".htaccess");

      try {
        await fs.copyFile(publicHtaccess, path.join(distDir, ".htaccess"));
      } catch {
        // Optional for Hostinger's managed Vite mode; required only on Apache/static mode.
      }

      const entries = await fs.readdir(distDir, { withFileTypes: true });

      for (const fallbackDir of fallbackDirs) {
        await fs.rm(fallbackDir, { recursive: true, force: true });
        await fs.mkdir(fallbackDir, { recursive: true });

        await Promise.all(
          entries
            .filter((entry) => !fallbackDirs.some((dir) => path.basename(dir) === entry.name))
            .map((entry) =>
              fs.cp(path.join(distDir, entry.name), path.join(fallbackDir, entry.name), {
                recursive: true,
              }),
            ),
        );
      }
    },
  };
}

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
      routesDirectory: "src/routes",
      generatedRouteTree: "src/routeTree.gen.ts",
    }),
    react(),
    tailwindcss(),
    hostingerStaticFallbacks(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "@tanstack/react-router", "@tanstack/react-query"],
  },
  server: {
    host: "::",
    port: 8080,
    strictPort: true,
  },
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
