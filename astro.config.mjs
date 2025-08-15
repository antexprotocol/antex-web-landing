// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

const defaultLocale = "en";
const locales = {
  en: "en-US", // the `defaultLocale` value must present in `locales` keys
  es: "es-ES",
  fr: "fr-CA",
};

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    mdx(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
