import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Sunshine_University/",
  build: {
    outDir: "dist", // Ensure the build is outputting to 'dist' folder
  },
});
