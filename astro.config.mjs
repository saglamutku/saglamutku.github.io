// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const LIVE_URL = "https://saglamutku.github.io"
// https://astro.build/config
export default defineConfig({
  site: LIVE_URL,
  vite: {
    plugins: [tailwindcss()],
  },
});
