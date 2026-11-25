import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://habrawo.nix.ug",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({}),
    robotsTxt(),
  ],
});
