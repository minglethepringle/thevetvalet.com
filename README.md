# Vet Valet — thevetvalet.com

Static site built with [Astro](https://astro.build). It replaces the WordPress/Astra site.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs static files to dist/
npm run preview  # serve dist/ locally
```

## Contact form (Formspree)

1. Create a form at https://formspree.io and copy its ID (the part after `/f/` in the endpoint).
2. Set `FORMSPREE_ID` in `src/data/site.ts` (currently `mljbjkyw`).

The form submits via `fetch` and shows an inline success/error message; without JavaScript it falls back to a normal POST. Fields sent: `name`, `email`, `phone`, `city`, `pet_details`, `message`, plus Formspree's `_subject` and `_gotcha` (honeypot).

## Editing content

- Phone, email, hours, nav and service towns: `src/data/site.ts`
- Pages: `src/pages/*.astro` (team bios in `about.astro`, prices in `services.astro`)
- Images: `src/assets/` (resized and converted to WebP at build time)
- Colors and fonts: `src/styles/global.css`

## Deploy

`dist/` is plain HTML/CSS/JS and can go on any static host (Cloudflare Pages, Netlify, GitHub Pages, Vercel). Build command `npm run build`, output directory `dist`.
