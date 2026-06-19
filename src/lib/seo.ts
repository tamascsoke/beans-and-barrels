import {
  EMAIL,
  PHONE_HREF,
  LOCATION,
  hasValidLocation,
  parsePostalAddress,
} from "./contact";
import { SAME_AS } from "./social";

export const SITE_URL = "https://www.beanbarrel.coffee";
export const SITE_NAME = "Bean & Barrel";

/** Keresői slang / alternatív elnevezések — csak meta és JSON-LD */
export const TUKTUK_ALTERNATE_NAMES = [
  "tuktuk kávézó",
  "tuk tuk kávézó",
  "tuktuk",
  "tuk tuk",
  "tuktuk bár",
  "tuk tuk bár",
  "tuktuk rendezvény",
  "mozgó tuktuk",
  "kávés tuktuk",
  "sörös tuktuk",
  "kávé és sör",
  "Kávé és Sör",
];

const provider = {
  "@type": "Organization" as const,
  name: SITE_NAME,
  url: SITE_URL,
  email: EMAIL,
  telephone: PHONE_HREF,
  sameAs: SAME_AS,
};

function buildPostalAddress() {
  if (!hasValidLocation()) {
    return {
      "@type": "PostalAddress" as const,
      addressLocality: "Budapest",
      addressCountry: "HU",
    };
  }

  const parsed = parsePostalAddress(LOCATION.address);
  return {
    "@type": "PostalAddress" as const,
    ...(parsed.streetAddress ? { streetAddress: parsed.streetAddress } : {}),
    ...(parsed.postalCode ? { postalCode: parsed.postalCode } : {}),
    addressLocality: parsed.addressLocality ?? "Budapest",
    addressCountry: "HU",
  };
}

function buildGeo() {
  if (!hasValidLocation() || !LOCATION.lat || !LOCATION.lng) return undefined;
  return {
    "@type": "GeoCoordinates" as const,
    latitude: LOCATION.lat,
    longitude: LOCATION.lng,
  };
}

export function foodEstablishmentSchema(description: string, image: string) {
  const geo = buildGeo();
  return {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    name: SITE_NAME,
    url: SITE_URL,
    email: EMAIL,
    telephone: PHONE_HREF,
    description,
    alternateName: TUKTUK_ALTERNATE_NAMES,
    servesCuisine: ["Tuktuk kávézó", "Specialty kávé", "Csapolt sör", "Rendezvény vendéglátás", "Tuktuk bár"],
    image,
    address: buildPostalAddress(),
    ...(geo ? { geo } : {}),
    sameAs: SAME_AS,
    areaServed: [
      { "@type": "City", name: "Budapest" },
      { "@type": "AdministrativeArea", name: "Pest megye" },
    ],
  };
}

export function contactLocalBusinessSchema(description: string, image: string) {
  const geo = buildGeo();
  return {
    "@context": "https://schema.org",
    "@type": ["FoodEstablishment", "LocalBusiness"],
    name: SITE_NAME,
    url: `${SITE_URL}/kontakt`,
    email: EMAIL,
    telephone: PHONE_HREF,
    description,
    alternateName: TUKTUK_ALTERNATE_NAMES,
    image,
    address: buildPostalAddress(),
    ...(geo ? { geo } : {}),
    sameAs: SAME_AS,
    areaServed: [
      { "@type": "City", name: "Budapest" },
      { "@type": "AdministrativeArea", name: "Pest megye" },
    ],
  };
}

export function eventServiceSchema(url: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Tuktuk rendezvény vendéglátás Budapest",
    alternateName: [
      "tuk tuk rendezvény",
      "tuktuk bár Budapest",
      "tuk tuk bár",
      "mozgó tuktuk rendezvény",
      "mobil tuktuk rendezvény",
      "tuktuk kitelepülés",
    ],
    serviceType: "Tuktuk (tuk tuk) rendezvény vendéglátás",
    description,
    url,
    provider,
    areaServed: [
      { "@type": "City", name: "Budapest" },
      { "@type": "AdministrativeArea", name: "Pest megye" },
    ],
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/kontakt?topic=Rendezvény#urlap`,
      availability: "https://schema.org/InStock",
    },
  };
}

export function franchiseServiceSchema(url: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Bean & Barrel tuktuk franchise Magyarország",
    alternateName: [
      "tuk tuk franchise",
      "tuktuk franchise Magyarország",
      "mozgó tuktuk franchise",
      "Bean & Barrel franchise",
    ],
    serviceType: "Tuktuk franchise",
    description,
    url,
    provider,
    areaServed: {
      "@type": "Country",
      name: "Magyarország",
    },
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/kontakt?topic=Franchise#urlap`,
      availability: "https://schema.org/InStock",
    },
  };
}

export type UpcomingEventForSchema = {
  title: string;
  date: string;
  endDate?: string;
  location: string;
  description?: string;
  ctaUrl?: string;
};

function resolveEventUrl(ctaUrl: string | undefined, fallbackUrl: string): string {
  const trimmed = ctaUrl?.trim();
  if (!trimmed) return fallbackUrl;
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) return trimmed;
  return new URL(trimmed, SITE_URL).toString();
}

export function upcomingEventSchema(
  event: UpcomingEventForSchema,
  fallbackUrl: string,
) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    startDate: event.date,
    location: {
      "@type": "Place",
      name: event.location,
    },
    organizer: provider,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    url: resolveEventUrl(event.ctaUrl, fallbackUrl),
  };
  if (event.endDate && event.endDate !== event.date) {
    schema.endDate = event.endDate;
  }
  if (event.description?.trim()) {
    schema.description = event.description.trim();
  }
  return schema;
}

export type FaqItem = { question: string; answer: string };

export function faqPageSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function schemaScripts(schemas: object | object[] | null | undefined) {
  if (!schemas) return [];
  return Array.isArray(schemas) ? schemas : [schemas];
}
