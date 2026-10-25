import { defineConfig } from 'astro/config';

// SITE and BASE_PATH are set by the GitHub Pages workflow while the site lives at
// minglethepringle.github.io/thevetvalet.com. Once thevetvalet.com points at GitHub Pages,
// remove them from the workflow and these defaults take over.
export default defineConfig({
  site: process.env.SITE ?? 'https://thevetvalet.com',
  base: process.env.BASE_PATH ?? '/',
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
});
