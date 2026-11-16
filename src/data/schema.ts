// schema.org JSON-LD builders. Everything here comes from ./site, so the structured data
// always matches the visible copy.
import { business, contact, houseCallFee, nav, services, towns, url } from './site';

type Node = Record<string, unknown>;

export const absolute = (site: URL, path: string) => new URL(url(path), site).href;

export const schemaIds = (site: URL) => {
  const home = absolute(site, '/');
  return { business: `${home}#business`, website: `${home}#website` };
};

const offer = (s: { title: string; text?: string; amount?: number; range?: [number, number] }, providerId: string): Node => ({
  '@type': 'Offer',
  itemOffered: { '@type': 'Service', name: s.title, ...(s.text && { description: s.text }), provider: { '@id': providerId } },
  ...(s.amount !== undefined && { price: s.amount, priceCurrency: 'USD' }),
  ...(s.range && {
    priceSpecification: { '@type': 'PriceSpecification', minPrice: s.range[0], maxPrice: s.range[1], priceCurrency: 'USD' },
  }),
});

export function businessNode(site: URL, logoSrc: string): Node {
  const ids = schemaIds(site);
  return {
    '@type': 'VeterinaryCare',
    '@id': ids.business,
    name: business.name,
    alternateName: business.alternateName,
    slogan: business.tagline,
    description: business.description,
    url: absolute(site, '/'),
    logo: new URL(logoSrc, site).href,
    image: absolute(site, '/og.jpg'),
    telephone: contact.callHref.replace('tel:', ''),
    email: contact.email,
    // Service-area business: no public street address, so only the region is given.
    address: { '@type': 'PostalAddress', addressRegion: 'MA', addressCountry: 'US' },
    areaServed: towns.map((t) => ({ '@type': 'City', name: `${t.name}, MA` })),
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: business.openingHours.days,
      opens: business.openingHours.opens,
      closes: business.openingHours.closes,
    },
    founder: {
      '@type': 'Person',
      name: business.founder.name,
      jobTitle: business.founder.jobTitle,
      alumniOf: business.founder.alumniOf.map((name) => ({ '@type': 'CollegeOrUniversity', name })),
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'In-home veterinary services',
      url: absolute(site, '/services/'),
      itemListElement: [
        offer({ title: houseCallFee.label, text: 'One-time fee per visit covering travel and time, no matter how many pets we see.', amount: houseCallFee.amount }, ids.business),
        ...services.map((s) => offer(s, ids.business)),
      ],
    },
    ...(business.sameAs.length > 0 && { sameAs: business.sameAs }),
  };
}

export function websiteNode(site: URL): Node {
  const ids = schemaIds(site);
  return {
    '@type': 'WebSite',
    '@id': ids.website,
    url: absolute(site, '/'),
    name: business.name,
    inLanguage: 'en-US',
    publisher: { '@id': ids.business },
  };
}

export function webPageNode(site: URL, path: string, title: string, description: string, extra: Node = {}): Node {
  const ids = schemaIds(site);
  const pageUrl = absolute(site, path);
  const isHome = path === '/';
  return {
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: title,
    description,
    inLanguage: 'en-US',
    isPartOf: { '@id': ids.website },
    ...(isHome ? { about: { '@id': ids.business } } : { breadcrumb: { '@id': `${pageUrl}#breadcrumb` } }),
    ...extra,
  };
}

export function breadcrumbNode(site: URL, path: string): Node | undefined {
  if (path === '/') return undefined;
  const pageUrl = absolute(site, path);
  const label = nav.find((n) => n.href === path)?.label;
  if (!label) return undefined;
  return {
    '@type': 'BreadcrumbList',
    '@id': `${pageUrl}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: absolute(site, '/') },
      { '@type': 'ListItem', position: 2, name: label, item: pageUrl },
    ],
  };
}
