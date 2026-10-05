import { outlets, SITE_URL, socialLinks } from './siteData';

export const prerenderRoutes = [
  '/',
  '/locations/',
  '/locations/kiara-bay-kepong/',
  '/menu/',
  '/faqs/',
] as const;

export type SiteRoute = (typeof prerenderRoutes)[number];

export type RouteMeta = {
  path: SiteRoute;
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
  ogImageAlt: string;
};

const shareImage = `${SITE_URL}/og/joydimsum-ogshare-web.jpg`;
const shareImageAlt =
  'JOY Dim Sum siew mai held with chopsticks on a yellow brand background';

const routeMeta: Record<SiteRoute, RouteMeta> = {
  '/': {
    path: '/',
    title: 'JOY Dim Sum | Dim Sum Restaurant in Kepong',
    description:
      'Enjoy dim sum, steamed dumplings, pau and casual dining at JOY Dim Sum, Kiara Bay, Kepong. View our menu, hours and location.',
    canonical: `${SITE_URL}/`,
    ogImage: shareImage,
    ogImageAlt: shareImageAlt,
  },
  '/locations/': {
    path: '/locations/',
    title: 'JOY Dim Sum Kiara Bay, Kepong',
    description:
      'Find JOY Dim Sum and dumplings at Kiara Bay, Kepong. View the address, daily opening hours, outlet gallery and Google Maps directions.',
    canonical: `${SITE_URL}/locations/`,
    ogImage: shareImage,
    ogImageAlt: shareImageAlt,
  },
  '/locations/kiara-bay-kepong/': {
    path: '/locations/kiara-bay-kepong/',
    title: 'Dim Sum in Kepong at Kiara Bay | JOY Dim Sum',
    description:
      'Visit JOY Dim Sum at Kiara Bay, Kepong for dim sum, steamed dumplings and pau. See menu highlights, daily hours and directions.',
    canonical: `${SITE_URL}/locations/kiara-bay-kepong/`,
    ogImage: shareImage,
    ogImageAlt: 'JOY Dim Sum food and brand artwork for the Kiara Bay outlet',
  },
  '/menu/': {
    path: '/menu/',
    title: 'JOY Dim Sum Menu | Dim Sum & Pau in Kepong',
    description:
      'Explore the JOY Dim Sum menu, including dim sum favourites, steamed dumplings, fluffy pau, savoury dishes, mains, tea and kopi in Kepong.',
    canonical: `${SITE_URL}/menu/`,
    ogImage: shareImage,
    ogImageAlt: 'JOY Dim Sum siew mai menu highlight on a yellow brand background',
  },
  '/faqs/': {
    path: '/faqs/',
    title: 'JOY Dim Sum FAQs | Kiara Bay, Menu & Visits',
    description:
      'Find answers about JOY Dim Sum Kiara Bay, dim sum and dumpling choices, opening hours, reservations, directions and visits.',
    canonical: `${SITE_URL}/faqs/`,
    ogImage: shareImage,
    ogImageAlt: 'JOY Dim Sum food and brand artwork for frequently asked questions',
  },
};

export function normalizePathname(pathname: string): string {
  const withoutBase = pathname.replace(/^\/joy-dim-sum-website(?=\/|$)/, '');
  if (!withoutBase || withoutBase === '/') return '/';
  return `/${withoutBase.split('/').filter(Boolean).join('/')}/`;
}

export function isSiteRoute(pathname: string): pathname is SiteRoute {
  return prerenderRoutes.includes(pathname as SiteRoute);
}

export function getRouteMeta(pathname: string): RouteMeta {
  const normalized = normalizePathname(pathname);
  return routeMeta[isSiteRoute(normalized) ? normalized : '/'];
}

function breadcrumbs(items: Array<{ name: string; url: string }>) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

function webPage(meta: RouteMeta, name: string) {
  return {
    '@type': 'WebPage',
    '@id': `${meta.canonical}#webpage`,
    url: meta.canonical,
    name,
    description: meta.description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
  };
}

function restaurant() {
  const outlet = outlets.kiaraBay;
  return {
    '@type': 'Restaurant',
    '@id': `${SITE_URL}${outlet.path}#restaurant`,
    name: outlet.schemaName,
    description: outlet.pageIntroduction,
    url: `${SITE_URL}${outlet.path}`,
    image: shareImage,
    logo: `${SITE_URL}/apple-touch-icon.png`,
    priceRange: '$$',
    servesCuisine: ['Dim Sum', 'Chinese Dumplings', 'Chinese', 'Pau'],
    keywords: 'dim sum, dimsum, dumplings, Chinese dumplings, Kiara Bay, Kepong',
    telephone: outlet.phoneInternational,
    address: {
      '@type': 'PostalAddress',
      streetAddress: outlet.streetAddress,
      addressLocality: outlet.addressLocality,
      addressRegion: outlet.addressRegion,
      postalCode: outlet.postcode,
      addressCountry: outlet.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: outlet.latitude,
      longitude: outlet.longitude,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: outlet.openingHours.opens,
      closes: outlet.openingHours.closes,
    },
    hasMenu: `${SITE_URL}/menu/#full-text-menu`,
    parentOrganization: { '@id': `${SITE_URL}/#organization` },
  };
}

export function getStructuredData(pathname: string) {
  const normalized = normalizePathname(pathname);
  const path = isSiteRoute(normalized) ? normalized : '/';
  const meta = routeMeta[path];

  if (path === '/') {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': `${SITE_URL}/#organization`,
          name: 'JOY Dim Sum',
          url: `${SITE_URL}/`,
          logo: `${SITE_URL}/apple-touch-icon.png`,
          knowsAbout: ['Dim sum', 'Dimsum', 'Chinese dumplings', 'Pau'],
          sameAs: [socialLinks.facebook, socialLinks.instagram],
        },
        {
          '@type': 'WebSite',
          '@id': `${SITE_URL}/#website`,
          url: `${SITE_URL}/`,
          name: 'JOY Dim Sum',
          publisher: { '@id': `${SITE_URL}/#organization` },
          inLanguage: 'en-MY',
        },
        restaurant(),
      ],
    };
  }

  if (path === '/locations/' || path === '/locations/kiara-bay-kepong/') {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        webPage(meta, 'JOY Dim Sum at Kiara Bay, Kepong'),
        breadcrumbs([
          { name: 'Home', url: `${SITE_URL}/` },
          ...(path === '/locations/kiara-bay-kepong/'
            ? [{ name: 'Outlet', url: `${SITE_URL}/locations/` }]
            : []),
          { name: 'Kiara Bay, Kepong', url: meta.canonical },
        ]),
        restaurant(),
      ],
    };
  }

  if (path === '/faqs/') {
    const faqItems = [
      ['What does JOY Dim Sum serve?', 'JOY serves dim sum favourites, steamed dumplings, fluffy pau, savoury dishes, mains and more.'],
      ['Does JOY Dim Sum serve dumplings?', 'Yes. Dumplings are part of the JOY Dim Sum menu, including steamed dim sum favourites with different fillings.'],
      ['Where can I find JOY Dim Sum?', 'Visit JOY Dim Sum at Kiara Bay in Kepong, Kuala Lumpur.'],
      ['What are the Kiara Bay opening hours?', 'JOY Dim Sum Kiara Bay is open Monday to Sunday, from 8am to 11pm.'],
      ['Can I reserve a table?', 'Yes. Message the Kiara Bay team on WhatsApp with your preferred date, time and number of guests.'],
      ['Can I get directions from this website?', 'Yes. Use a Get Directions button to open the Kiara Bay outlet in Google Maps.'],
      ['Does JOY Dim Sum offer takeaway?', 'Takeaway availability can vary by item. Please check with the team before ordering.'],
      ['Can I see the full menu online?', 'The website shows the full menu and curated highlights. Ask the outlet team for current availability.'],
      ['What should I do if I have a food allergy?', 'Tell the outlet team about any allergy or dietary requirement before ordering.'],
    ];

    return {
      '@context': 'https://schema.org',
      '@graph': [
        webPage(meta, 'JOY Dim Sum Frequently Asked Questions'),
        breadcrumbs([
          { name: 'Home', url: `${SITE_URL}/` },
          { name: 'FAQs', url: meta.canonical },
        ]),
        {
          '@type': 'FAQPage',
          '@id': `${meta.canonical}#faq`,
          mainEntity: faqItems.map(([name, text]) => ({
            '@type': 'Question',
            name,
            acceptedAnswer: { '@type': 'Answer', text },
          })),
        },
      ],
    };
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [
      webPage(meta, 'JOY Dim Sum Menu'),
      breadcrumbs([
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'Menu', url: meta.canonical },
      ]),
    ],
  };
}
