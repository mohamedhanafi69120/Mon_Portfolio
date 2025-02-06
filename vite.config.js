import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Mon_Portfolio/", // Nom de ton repo GitHub ici
});
