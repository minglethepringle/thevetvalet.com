import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Served from the root of thevetvalet.com. Set SITE and BASE_PATH to build for another
// location, e.g. BASE_PATH=/thevetvalet.com for minglethepringle.github.io/thevetvalet.com.
export default defineConfig({
  site: process.env.SITE ?? 'https://thevetvalet.com',
  base: process.env.BASE_PATH ?? '/',
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
  integrations: [sitemap({ lastmod: new Date() })],
});
