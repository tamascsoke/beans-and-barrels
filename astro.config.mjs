// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const priorityByPath = {
  '/rendezvenyek/': { priority: 0.9, changefreq: 'weekly' },
  '/franchise/': { priority: 0.9, changefreq: 'monthly' },
  '/': { priority: 0.8, changefreq: 'weekly' },
};

export default defineConfig({
  site: 'https://www.beanbarrel.coffee',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/koszonjuk'),
      serialize(item) {
        const pathname = new URL(item.url).pathname;
        const key = pathname === '/' ? '/' : `${pathname.replace(/\/$/, '')}/`;
        const meta = priorityByPath[key];
        if (meta) {
          return { ...item, priority: meta.priority, changefreq: meta.changefreq };
        }
        return item;
      },
    }),
  ],
});
