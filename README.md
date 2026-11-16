# Vet Valet — thevetvalet.com

Static site built with [Astro](https://astro.build). It replaces the WordPress/Astra site.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs static files to dist/
npm run preview  # serve dist/ locally
```

## Editing content

- Phone, email, hours, nav and service towns: `src/data/site.ts`
- Pages: `src/pages/*.astro` (team bios in `about.astro`, prices in `services.astro`)
- Images: `src/assets/` (resized and converted to WebP at build time)
- Colors and fonts: `src/styles/global.css`

## Deploy

Pushing to `main` builds the site and deploys it to GitHub Pages at https://thevetvalet.com (`.github/workflows/deploy.yml`). `dist/` is plain HTML/CSS/JS, so it also works on any other static host.
