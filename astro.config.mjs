import { defineConfig } from "astro/config";
import { SITE_URL } from "./src/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
    sitemap(),
    mdx(),
  ],
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
    },
  },
});
