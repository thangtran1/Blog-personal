import path from "path"; // 👈 cần import path

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // 👈 alias @ trỏ tới src
    },
  },
  server: {
    proxy: {
      "/api": "http://localhost:3002",
    },
  },
});
