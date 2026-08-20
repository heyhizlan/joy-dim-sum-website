export const SITE_URL = 'https://joydimsum.com';

export const socialLinks = {
  facebook: 'https://www.facebook.com/joydimsum.my/',
  instagram: 'https://www.instagram.com/joydimsum.my/',
} as const;

export const sentulMapsUrl =
  'https://www.google.com/maps/place/Dim+Sum+House+@+Sentul+Point/@3.2019041,101.6893619,17z/data=!3m1!4b1!4m6!3m5!1s0x31cc47ea6c13790f:0x7bcae75188d28cc7!8m2!3d3.2019041!4d101.6893619!16s%2Fg%2F11z2hxfpsd';

export const kiaraBayMapsUrl =
  'https://www.google.com/maps/search/?api=1&query=The+Beat+at+Kiara+Bay+51+Persiaran+Putra+Bayu+Kepong';

export const KIARA_BAY_OPENING_ISO = '2026-09-16';
export const KIARA_BAY_OPENING_LABEL = 'Target opening 16 September 2026';

export type Outlet = {
  slug: 'sentul-point' | 'kiara-bay-kepong';
  path: '/locations/sentul-point/' | '/locations/kiara-bay-kepong/';
  shortName: string;
  schemaName: string;
  formerName?: string;
  status: 'open' | 'opening-soon';
  description: string;
  pageIntroduction: string;
  addressLines: readonly string[];
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postcode: string;
  country: 'MY';
  latitude: number;
  longitude: number;
  mapsUrl: string;
  phone?: string;
  phoneInternational?: string;
  whatsappUrl?: string;
  hoursLabel?: string;
  openingHours?: { opens: string; closes: string };
  openingDate?: string;
  openingLabel?: string;
};

export const outlets = {
  sentul: {
    slug: 'sentul-point',
    path: '/locations/sentul-point/',
    shortName: 'Sentul Point',
    schemaName: 'JOY Dim Sum Sentul Point',
    formerName: 'Dim Sum House at Sentul Point',
    status: 'open',
    description:
      'Enjoy dim sum, pau and casual dining at JOY Dim Sum, Sentul Point, Kuala Lumpur. Come with family, friends or your usual makan gang.',
    pageIntroduction:
      'Steam on the table, baskets in the middle and plenty to share. JOY Dim Sum serves Sentul Point with dim sum, fluffy pau, savoury dishes and casual dining every day.',
    addressLines: [
      'AG-26, Sentul Point,',
      'Jln Sentul Pasar, Sentul,',
      '51100 Kuala Lumpur',
    ],
    streetAddress: 'AG-26, Sentul Point, Jln Sentul Pasar, Sentul',
    addressLocality: 'Kuala Lumpur',
    addressRegion: 'Wilayah Persekutuan Kuala Lumpur',
    postcode: '51100',
    country: 'MY',
    latitude: 3.2019041,
    longitude: 101.6893619,
    mapsUrl: sentulMapsUrl,
    phone: '016-610 2688',
    phoneInternational: '+60166102688',
    whatsappUrl: 'https://wa.me/60166102688',
    hoursLabel: 'Monday to Sunday, 10am to 10pm',
    openingHours: { opens: '10:00', closes: '22:00' },
  },
  kiaraBay: {
    slug: 'kiara-bay-kepong',
    path: '/locations/kiara-bay-kepong/',
    shortName: 'Kiara Bay',
    schemaName: 'JOY Dim Sum Kiara Bay, Kepong',
    status: 'opening-soon',
    description:
      'Good news, Kepong! A new JOY Dim Sum outlet is coming soon to Kiara Bay, Kuala Lumpur. More dim sum, more pau, more JOY dekat you.',
    pageIntroduction:
      'A new JOY table is coming to Kiara Bay in Kepong, with dim sum, pau and casual dining. Follow the countdown and our social pages for verified opening updates.',
    addressLines: [
      'The Beat at Kiara Bay, Karya Bayu Metropolitan,',
      '51, Persiaran Putra Bayu, Kepong,',
      '52100 Kuala Lumpur',
    ],
    streetAddress:
      'The Beat at Kiara Bay, Karya Bayu Metropolitan, 51, Persiaran Putra Bayu',
    addressLocality: 'Kepong',
    addressRegion: 'Wilayah Persekutuan Kuala Lumpur',
    postcode: '52100',
    country: 'MY',
    latitude: 3.2255752,
    longitude: 101.6505833,
    mapsUrl: kiaraBayMapsUrl,
    openingDate: KIARA_BAY_OPENING_ISO,
    openingLabel: KIARA_BAY_OPENING_LABEL,
  },
} as const satisfies Record<string, Outlet>;

export const outletList = [outlets.sentul, outlets.kiaraBay] as const;

export function getOutletBySlug(slug: string) {
  return outletList.find((outlet) => outlet.slug === slug);
}
