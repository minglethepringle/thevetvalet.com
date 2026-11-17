import type { APIRoute } from 'astro';
import { business, contact, houseCallFee, pageMeta, services, social, towns } from '../data/site';
import { absolute } from '../data/schema';

// A Markdown summary of the practice for AI assistants (https://llmstxt.org).
export const GET: APIRoute = ({ site }) => {
  const link = (label: string, path: keyof typeof pageMeta) =>
    `- [${label}](${absolute(site!, path)}): ${pageMeta[path].description}`;
  const hours = contact.hours.map(([days, time]) => `${days}, ${time}`).join('; ');

  const body = `# ${business.name}

> ${business.summary}

${business.description}

## Key facts

- Type: mobile (house-call) veterinary practice; veterinarians come to the client's home
- Ownership: women-owned and privately operated
- Patients: dogs and cats only
- Service area: ${business.region}, Massachusetts. Towns: ${towns.map((t) => t.name + (t.partial ? ' (partial)' : '')).join(', ')}
- Hours: ${hours}
- Text: ${contact.textDisplay}. Email: ${contact.email}
- Profiles: [Google Business Profile](${business.sameAs[0]}), ${social.map((s) => `[${s.name}](${s.href})`).join(', ')}
- Surgery and hospital care: through partner AdaVet, a full-service animal hospital in Wayland Town Center
- Emergencies: for serious or life-threatening injuries, go to the nearest emergency veterinary hospital

## Services and pricing

- ${houseCallFee.label}: ${houseCallFee.price} per visit, no matter how many pets are seen
${services.map((s) => `- ${s.title}: ${s.price}. ${s.text}${s.note ? ` ${s.note}` : ''}`).join('\n')}

## Pages

${link('Home', '/')}
${link('Services and pricing', '/services/')}
${link('About the team', '/about/')}
${link('FAQ', '/faq/')}
${link('Contact and booking', '/contact/')}
`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
