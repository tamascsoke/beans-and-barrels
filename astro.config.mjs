// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.beanbarrel.coffee',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/koszonjuk'),
    }),
  ],
});

