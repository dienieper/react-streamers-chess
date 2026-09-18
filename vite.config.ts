import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/react-streamers-chess/",
  plugins: [react()],
});
