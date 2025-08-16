import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import remarkGfm from 'remark-gfm';

// https://astro.build/config
export default defineConfig({
  site: 'https://oshears.github.io',
  markdown: {
    remarkPlugins: [remarkGfm],
  },
  integrations: [mdx(), sitemap(), tailwind(), icon({
    include: {
      lucide: ['*']
    }
  })],
  vite: {
    assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.gif', '**/*.svg', '**/*.webp'],
    server: {
      fs: {
        allow: ['..']
      }
    }
  }
});