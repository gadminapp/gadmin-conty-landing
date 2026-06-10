// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://gadminconty.com',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/roi-calculator'),
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          es: 'es-ES',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
