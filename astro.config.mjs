import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://number7.io',
  integrations: [mdx(), sitemap()],
  build: { inlineStylesheets: 'auto' },
});
