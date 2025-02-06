// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Remplace "NOM_DU_REPO" par le nom exact de ton repo GitHub
export default defineConfig({
  plugins: [react()],
  base: "/NOM_DU_REPO/",
});
