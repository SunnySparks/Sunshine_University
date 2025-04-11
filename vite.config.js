import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const isGitHubPages = process.env.BUILD_TARGET === "gh-pages";

export default defineConfig({
  base: isGitHubPages ? "/Sunshine_University/" : "./",
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
