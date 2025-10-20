// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://teksoftgroup.github.io/guacanagarix/",
  base: "/guacanagarix/",
  vite: {
    plugins: [tailwindcss()],
  },
});
