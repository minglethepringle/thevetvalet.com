import type { APIRoute } from 'astro';
import { absolute } from '../data/schema';

// Allow everyone, search and AI crawlers included, and point them at the sitemap.
export const GET: APIRoute = ({ site }) =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${absolute(site!, '/sitemap-index.xml')}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
