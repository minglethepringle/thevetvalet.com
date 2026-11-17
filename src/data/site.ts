// Formspree form ID (the part after /f/ in the endpoint URL).
export const FORMSPREE_ID = 'mljbjkyw';

// Social profiles: shown as footer icons and listed in JSON-LD sameAs.
export const social = [
  { name: 'Facebook', href: 'https://www.facebook.com/Vetvalet/', icon: 'facebook' },
  { name: 'Yelp', href: 'https://www.yelp.com/biz/vet-valet-wayland', icon: 'yelp' },
] as const;

// Core business facts. One source for page metadata, JSON-LD, llms.txt and listings such as
// Google Business Profile, so they all describe Vet Valet the same way.
export const business = {
  name: 'Vet Valet',
  alternateName: 'VetValet',
  tagline: 'The veterinarian that comes to you',
  region: 'MetroWest Boston',
  // Meta description and short summaries (aim for 120–160 characters).
  summary:
    'Vet Valet brings licensed vets to dogs and cats at home in MetroWest Boston: wellness and sick exams, vaccines, microchips, laser therapy and end-of-life care.',
  // Long description: JSON-LD, llms.txt, and Google Business Profile (750 characters max, no links or prices).
  description:
    'Vet Valet is a women-owned mobile veterinary practice for dogs and cats in MetroWest Boston. Our licensed veterinarians come to your home, so your pet gets expert care without carriers, car rides or waiting rooms. We offer wellness and sick exams, vaccinations, microchipping, laser therapy for pain and healing, and compassionate in-home end-of-life care. Founded by Dr. Deirdre Ryan, a Tufts-trained veterinarian, we serve Ashland, Bedford, Belmont, Concord, Dedham, Dover, Lexington, Lincoln, Natick, Needham, Newton, Sherborn, Sudbury, Waltham, Wayland, Wellesley and Weston. When a pet needs surgery or hospital care, we work closely with AdaVet in Wayland Town Center. Call or text to schedule.',
  founder: {
    name: 'Dr. Deirdre Ryan',
    jobTitle: 'Founder & Veterinarian',
    alumniOf: ['Harvard University', 'Cummings School of Veterinary Medicine at Tufts University'],
  },
  openingHours: { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:30', closes: '16:30' },
  // Public profiles (Google Business Profile, Facebook, Yelp…) for JSON-LD sameAs. Add real URLs only.
  sameAs: [
    'https://www.google.com/maps?cid=12071029816094578816', // Google Business Profile (Maps CID)
    ...social.map((s) => s.href),
  ] as string[],
};

export const houseCallFee = { label: 'House call fee', price: '$200', amount: 200 };

// Services and pricing. `amount` / `range` feed structured data; `price` is the display string.
export const services: {
  title: string;
  price: string;
  amount?: number;
  range?: [number, number];
  note?: string;
  text: string;
}[] = [
  {
    title: 'Sick & wellness exams',
    price: '$105',
    amount: 105,
    text: 'For a healthy pet, we recommend a visit every six months. At each visit we record all vital signs and give a thorough assessment of your pet’s overall health.',
  },
  {
    title: 'Vaccinations',
    price: '$40 – $60',
    range: [40, 60],
    text: 'Keep your pet’s vaccinations up to date without the stress of travel or waiting rooms. We give timely, professional vaccinations in the comfort of your home.',
  },
  {
    title: 'Microchipping',
    price: '$75',
    amount: 75,
    text: 'A lost or wandering pet can be heartbreaking. Quick, simple microchip placement helps make sure your pet can be identified anywhere in the world.',
  },
  {
    title: 'Laser treatment',
    price: 'Varies',
    note: 'Pricing depends on the size of your pet and the treatment area.',
    text: 'Many pets live with chronic issues like arthritis, back pain, post-surgical trauma and ear infections. This non-invasive, pain-free treatment stimulates injured cells to support faster healing and recovery.',
  },
  {
    title: 'End-of-life care',
    price: '$525',
    amount: 525,
    text: 'We offer compassionate in-home euthanasia for our established clients, so pets can stay comfortable in a familiar place. We also help coordinate aftercare services.',
  },
];

export const contact = {
  callDisplay: '(617) 992-8773',
  callHref: 'tel:+16179928773',
  textDisplay: '(508) 456-5588',
  textHref: 'sms:+15084565588',
  email: 'office@thevetvalet.com',
  hours: [
    ['Monday – Friday', '8:30am – 4:30pm'],
  ],
};

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/services/', label: 'Services' },
  { href: '/faq/', label: 'FAQ' },
  { href: '/contact/', label: 'Contact' },
];

// Title and meta description per page (titles ~60 characters max, descriptions 120–160).
export const pageMeta = {
  '/': {
    title: 'Vet Valet | Mobile Veterinary Care in MetroWest Boston',
    description: business.summary,
  },
  '/services/': {
    title: 'In-Home Vet Services & Pricing | Vet Valet',
    description:
      'In-home veterinary services and pricing: house calls, wellness and sick exams, vaccinations, microchipping, laser therapy and end-of-life care in MetroWest Boston.',
  },
  '/about/': {
    title: 'Our Mobile Veterinary Team | Vet Valet',
    description:
      'Meet the Vet Valet team: licensed veterinarians and staff bringing compassionate, in-home care to pets across MetroWest Boston.',
  },
  '/faq/': {
    title: 'Frequently Asked Questions | Vet Valet',
    description:
      'Answers to common questions about Vet Valet: which MetroWest towns we serve, how to prepare for a home visit, and prescription medications.',
  },
  '/contact/': {
    title: 'Book an In-Home Vet Visit | Vet Valet',
    description:
      'Contact Vet Valet to schedule an in-home veterinary visit in MetroWest Boston. Call, text, email or send us a message.',
  },
};

export const towns = [
  { name: 'Ashland', partial: true },
  { name: 'Bedford', partial: true },
  { name: 'Belmont', partial: true },
  { name: 'Concord' },
  { name: 'Dedham' },
  { name: 'Dover' },
  { name: 'Lexington', partial: true },
  { name: 'Lincoln' },
  { name: 'Natick' },
  { name: 'Needham' },
  { name: 'Newton', partial: true },
  { name: 'Sherborn', partial: true },
  { name: 'Sudbury' },
  { name: 'Waltham', partial: true },
  { name: 'Wayland' },
  { name: 'Wellesley' },
  { name: 'Weston', partial: true },
];

// Prefix internal links with the deploy base path (e.g. /thevetvalet.com on GitHub Pages).
export const url = (path: string) => import.meta.env.BASE_URL.replace(/\/$/, '') + path;
