import { outletList, outlets, SITE_URL, socialLinks } from './siteData';

export const prerenderRoutes = [
  '/',
  '/locations/',
  '/locations/sentul-point/',
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
    title: 'JOY Dim Sum | Dim Sum Restaurant in Kuala Lumpur',
    description:
      'Enjoy dim sum, pau and casual dining at JOY Dim Sum in Kuala Lumpur, with outlets at Sentul Point and Kiara Bay, Kepong. View our menu and locations.',
    canonical: `${SITE_URL}/`,
    ogImage: shareImage,
    ogImageAlt: shareImageAlt,
  },
  '/locations/': {
    path: '/locations/',
    title: 'JOY Dim Sum Outlets in Kuala Lumpur',
    description:
      'Find JOY Dim Sum outlets in Kuala Lumpur. View details, directions and opening information for Sentul Point and Kiara Bay, Kepong.',
    canonical: `${SITE_URL}/locations/`,
    ogImage: shareImage,
    ogImageAlt: shareImageAlt,
  },
  '/locations/sentul-point/': {
    path: '/locations/sentul-point/',
    title: 'Dim Sum in Sentul, Kuala Lumpur | JOY Dim Sum',
    description:
      'Visit JOY Dim Sum at Sentul Point, Kuala Lumpur. View dim sum and pau favourites, daily opening hours, reservations and directions.',
    canonical: `${SITE_URL}/locations/sentul-point/`,
    ogImage: shareImage,
    ogImageAlt: 'JOY Dim Sum food and brand artwork for the Sentul Point outlet',
  },
  '/locations/kiara-bay-kepong/': {
    path: '/locations/kiara-bay-kepong/',
    title: 'Dim Sum in Kepong at Kiara Bay | JOY Dim Sum',
    description:
      'JOY Dim Sum is opening at Kiara Bay, Kepong. See the location, menu highlights and latest verified opening information.',
    canonical: `${SITE_URL}/locations/kiara-bay-kepong/`,
    ogImage: shareImage,
    ogImageAlt: 'JOY Dim Sum food and brand artwork for the upcoming Kiara Bay outlet',
  },
  '/menu/': {
    path: '/menu/',
    title: 'JOY Dim Sum Menu | Dim Sum & Pau in Kuala Lumpur',
    description:
      'Explore JOY Dim Sum menu highlights, including dim sum favourites, fluffy pau, savoury dishes, mains, tea and kopi in Kuala Lumpur.',
    canonical: `${SITE_URL}/menu/`,
    ogImage: shareImage,
    ogImageAlt: 'JOY Dim Sum siew mai menu highlight on a yellow brand background',
  },
  '/faqs/': {
    path: '/faqs/',
    title: 'JOY Dim Sum FAQs | Outlets, Menu & Visits',
    description:
      'Find answers about JOY Dim Sum outlets, opening hours, reservations, menu highlights, directions, ingredients and visits in Kuala Lumpur.',
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

function postalAddress(outlet: (typeof outletList)[number]) {
  return {
    '@type': 'PostalAddress',
    streetAddress: outlet.streetAddress,
    addressLocality: outlet.addressLocality,
    addressRegion: outlet.addressRegion,
    postalCode: outlet.postcode,
    addressCountry: outlet.country,
  };
}

function restaurantBase(outlet: (typeof outletList)[number]) {
  return {
    '@type': 'Restaurant',
    '@id': `${SITE_URL}${outlet.path}#restaurant`,
    name: outlet.schemaName,
    description: outlet.pageIntroduction,
    url: `${SITE_URL}${outlet.path}`,
    image: shareImage,
    logo: `${SITE_URL}/apple-touch-icon.png`,
    priceRange: '$$',
    servesCuisine: ['Dim Sum', 'Chinese', 'Pau'],
    address: postalAddress(outlet),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: outlet.latitude,
      longitude: outlet.longitude,
    },
    hasMenu: `${SITE_URL}/menu/`,
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
      ],
    };
  }

  if (path === '/locations/') {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        webPage(meta, 'JOY Dim Sum Outlets in Kuala Lumpur'),
        breadcrumbs([
          { name: 'Home', url: `${SITE_URL}/` },
          { name: 'Outlets', url: meta.canonical },
        ]),
        {
          '@type': 'ItemList',
          '@id': `${meta.canonical}#outlets`,
          name: 'JOY Dim Sum outlets in Kuala Lumpur',
          itemListElement: outletList.map((outlet, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: outlet.schemaName,
            url: `${SITE_URL}${outlet.path}`,
          })),
        },
      ],
    };
  }

  if (path === '/locations/sentul-point/') {
    const outlet = outlets.sentul;
    return {
      '@context': 'https://schema.org',
      '@graph': [
        webPage(meta, 'Dim Sum in Sentul, Kuala Lumpur'),
        breadcrumbs([
          { name: 'Home', url: `${SITE_URL}/` },
          { name: 'Outlets', url: `${SITE_URL}/locations/` },
          { name: 'Sentul Point', url: meta.canonical },
        ]),
        {
          ...restaurantBase(outlet),
          alternateName: outlet.formerName,
          telephone: outlet.phoneInternational,
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday',
            ],
            opens: outlet.openingHours.opens,
            closes: outlet.openingHours.closes,
          },
        },
      ],
    };
  }

  if (path === '/locations/kiara-bay-kepong/') {
    const outlet = outlets.kiaraBay;
    return {
      '@context': 'https://schema.org',
      '@graph': [
        webPage(meta, 'JOY Dim Sum at Kiara Bay, Kepong'),
        breadcrumbs([
          { name: 'Home', url: `${SITE_URL}/` },
          { name: 'Outlets', url: `${SITE_URL}/locations/` },
          { name: 'Kiara Bay, Kepong', url: meta.canonical },
        ]),
        {
          ...restaurantBase(outlet),
          openingDate: outlet.openingDate,
        },
      ],
    };
  }

  if (path === '/faqs/') {
    const faqItems = [
      ['What does JOY Dim Sum serve?', 'JOY serves dim sum favourites, fluffy pau, savoury dishes, mains and more.'],
      ['Where can I find JOY Dim Sum?', 'Visit JOY Dim Sum at Sentul Point in Kuala Lumpur. A Kiara Bay outlet is also coming soon to Kepong.'],
      ['How can I get the latest JOY Dim Sum updates?', 'Follow @joydimsum.my on Instagram and Facebook for promotions, menu news and outlet updates.'],
      ['What are the Sentul Point opening hours?', 'JOY Dim Sum Sentul Point is open Monday to Sunday, from 10am to 10pm.'],
      ['Can I reserve a table at Sentul Point?', 'Yes. Message the Sentul Point team on WhatsApp with your preferred date, time and number of guests.'],
      ['When is the Kiara Bay outlet opening?', 'The current target opening date is 16 September 2026. Follow JOY Dim Sum for the latest confirmed update.'],
      ['Can I get directions from this website?', 'Yes. Use a Get Directions button to open the verified outlet location in Google Maps.'],
      ['Does JOY Dim Sum offer takeaway?', 'Takeaway availability can vary by item and outlet. Please check with the team before ordering.'],
      ['Is the menu the same at every outlet?', 'The main JOY favourites lead the menu, while availability and selected dishes may vary by outlet.'],
      ['Is JOY Dim Sum suitable for group meals?', 'Yes. JOY is made for sharing dim sum, pau, savoury dishes and mains.'],
      ['Are there any ingredients JOY Dim Sum does not serve?', 'JOY Dim Sum does not serve pork, lard or alcohol.'],
      ['Was JOY Dim Sum Sentul Point formerly Dim Sum House?', 'Yes. The Sentul Point outlet was formerly known as Dim Sum House and now serves from the same location under the JOY Dim Sum name.'],
      ['Can I visit JOY Dim Sum for lunch or dinner?', 'Yes. Sentul Point serves daily from 10am to 10pm.'],
      ['Can I see the full menu online?', 'The website currently shows curated highlights. Ask the outlet team for the latest full menu and availability.'],
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
