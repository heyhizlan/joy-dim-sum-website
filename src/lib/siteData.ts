export const SITE_URL = 'https://joydimsum.com';

export const socialLinks = {
  facebook: 'https://www.facebook.com/joydimsum.my/',
  instagram: 'https://www.instagram.com/joydimsum.my/',
} as const;

export const kiaraBayMapsUrl = 'https://maps.app.goo.gl/PAGM7fZnBRZ3gtWf8';

export type Outlet = {
  slug: 'kiara-bay-kepong';
  path: '/locations/kiara-bay-kepong/';
  shortName: string;
  schemaName: string;
  status: 'open';
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
  phone: string;
  phoneInternational: string;
  whatsappUrl: string;
  hoursLabel: string;
  openingHours: { opens: string; closes: string };
};

export const outlets = {
  kiaraBay: {
    slug: 'kiara-bay-kepong',
    path: '/locations/kiara-bay-kepong/',
    shortName: 'Kiara Bay',
    schemaName: 'JOY Dim Sum · Kiara Bay',
    status: 'open',
    description:
      'JOY Dim Sum is now serving at Kiara Bay, Kepong. Come by for dim sum, steamed dumplings, fluffy pau and casual dining with your favourite people.',
    pageIntroduction:
      'Steam on the table, baskets in the middle and plenty to share. JOY Dim Sum serves Kiara Bay with dim sum favourites, steamed dumplings, fluffy pau, savoury dishes and casual dining every day.',
    addressLines: [
      'G-27, Karya Bayu Metropolitan,',
      '51, Persiaran Putra Bayu, Kiara Bay, Kepong,',
      '52100 Kuala Lumpur',
    ],
    streetAddress:
      'G-27, Karya Bayu Metropolitan, 51, Persiaran Putra Bayu, Kiara Bay',
    addressLocality: 'Kepong',
    addressRegion: 'Wilayah Persekutuan Kuala Lumpur',
    postcode: '52100',
    country: 'MY',
    latitude: 3.2251402,
    longitude: 101.6504669,
    mapsUrl: kiaraBayMapsUrl,
    phone: '016-610 2688',
    phoneInternational: '+60166102688',
    whatsappUrl: 'https://wa.me/60166102688',
    hoursLabel: 'Monday to Sunday, 8am to 11pm',
    openingHours: { opens: '08:00', closes: '23:00' },
  },
} as const satisfies Record<string, Outlet>;

export const outletList = [outlets.kiaraBay] as const;

export function getOutletBySlug(slug: string) {
  return outletList.find((outlet) => outlet.slug === slug);
}
