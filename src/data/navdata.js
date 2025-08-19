export const navData = [
  {
    href: '/',
    label: 'Home',
  },
  {
    label: 'Buy/Sell',
    key: 'buysell',
    underRoutes: [
      { href: '/buy-property', label: 'Buy Property' },
      { href: '/sell-property', label: 'Sell Property' },
      { href: '/property-valuation', label: 'Property Valuation' },
    ],
  },
  {
    label: 'Rent',
    key: 'rent',
    underRoutes: [
      { href: '/find-rental', label: 'Find Rental' },
      { href: '/list-rental', label: 'List Rental' },
      { href: '/rental', label: 'Rental' },
    ],
  },
  {
    label: 'Services',
    key: 'services',
    underRoutes: [
      { href: '/property', label: 'Property' },
      { href: '/legal-services', label: 'Legal Services' },
      { href: '/financing', label: 'Financing' },
    ],
  },
  {
    href: '/about',
    label: 'About Us',
  },
];

export const languageData = [
  { code: 'en', label: 'English', icon: '🇺🇸' },
  { code: 'es', label: 'Español', icon: '🇪🇸' },
  { code: 'fr', label: 'Français', icon: '🇫🇷' },
];
