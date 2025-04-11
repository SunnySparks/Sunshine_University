import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const isGitHubPages = process.env.BUILD_TARGET === "gh-pages";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: isGitHubPages ? "/Sunshine_University/" : "/",
  plugins: [react()],
  build: {
    outDir: "dist", // Ensure the build is outputting to 'dist' folder
  },
});
