import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const isGitHubPages = process.env.BUILD_TARGET === "gh-pages";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: isGitHubPages ? "/Sunshine_University/" : "/",
  plugins: [react()],
  build: {
    outDir: "dist", // Ensure the build is outputting to 'dist' folder
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // '@' now points to 'src'
    },
  },
});
