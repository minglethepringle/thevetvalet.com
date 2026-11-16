// Replace with your Formspree form ID (the part after /f/ in the endpoint URL).
export const FORMSPREE_ID = 'YOUR_FORM_ID';

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
