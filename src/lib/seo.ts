import {
  EMAIL,
  PHONE_HREF,
  getLocation,
  hasValidLocation,
  parsePostalAddress,
} from "./contact";
import { SAME_AS } from "./social";
import type { Locale } from "../i18n";
import { absoluteUrl } from "../i18n/locale";

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

export const TUKTUK_ALTERNATE_NAMES_EN = [
  "tuktuk café",
  "tuk tuk café",
  "tuktuk",
  "tuk tuk",
  "tuktuk bar",
  "tuk tuk bar",
  "tuktuk event",
  "mobile tuktuk",
  "coffee tuktuk",
  "beer tuktuk",
  "coffee and beer",
  "Coffee & Beer",
];

const provider = {
  "@type": "Organization" as const,
  name: SITE_NAME,
  url: SITE_URL,
  email: EMAIL,
  telephone: PHONE_HREF,
  sameAs: SAME_AS,
};

function buildPostalAddress(locale: Locale) {
  const location = getLocation(locale);
  if (!hasValidLocation(locale)) {
    return {
      "@type": "PostalAddress" as const,
      addressLocality: "Budapest",
      addressCountry: "HU",
    };
  }

  const parsed = parsePostalAddress(location.address);
  return {
    "@type": "PostalAddress" as const,
    ...(parsed.streetAddress ? { streetAddress: parsed.streetAddress } : {}),
    ...(parsed.postalCode ? { postalCode: parsed.postalCode } : {}),
    addressLocality: parsed.addressLocality ?? "Budapest",
    addressCountry: "HU",
  };
}

function buildGeo(locale: Locale) {
  const location = getLocation(locale);
  if (!hasValidLocation(locale) || !location.lat || !location.lng) return undefined;
  return {
    "@type": "GeoCoordinates" as const,
    latitude: location.lat,
    longitude: location.lng,
  };
}

export function foodEstablishmentSchema(
  description: string,
  image: string,
  locale: Locale = "hu",
) {
  const geo = buildGeo(locale);
  const alternateName = locale === "en" ? TUKTUK_ALTERNATE_NAMES_EN : TUKTUK_ALTERNATE_NAMES;
  const servesCuisine =
    locale === "en"
      ? ["Tuktuk café", "Specialty coffee", "Draft beer", "Event catering", "Tuktuk bar"]
      : ["Tuktuk kávézó", "Specialty kávé", "Csapolt sör", "Rendezvény vendéglátás", "Tuktuk bár"];
  return {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    name: SITE_NAME,
    url: absoluteUrl(locale, "/"),
    email: EMAIL,
    telephone: PHONE_HREF,
    description,
    alternateName,
    servesCuisine,
    image,
    address: buildPostalAddress(locale),
    ...(geo ? { geo } : {}),
    sameAs: SAME_AS,
    inLanguage: locale === "en" ? "en" : "hu",
    areaServed: [
      { "@type": "City", name: "Budapest" },
      { "@type": "AdministrativeArea", name: locale === "en" ? "Pest county" : "Pest megye" },
    ],
  };
}

export function contactLocalBusinessSchema(
  description: string,
  image: string,
  locale: Locale = "hu",
) {
  const geo = buildGeo(locale);
  const alternateName = locale === "en" ? TUKTUK_ALTERNATE_NAMES_EN : TUKTUK_ALTERNATE_NAMES;
  return {
    "@context": "https://schema.org",
    "@type": ["FoodEstablishment", "LocalBusiness"],
    name: SITE_NAME,
    url: absoluteUrl(locale, "/kontakt"),
    email: EMAIL,
    telephone: PHONE_HREF,
    description,
    alternateName,
    image,
    address: buildPostalAddress(locale),
    ...(geo ? { geo } : {}),
    sameAs: SAME_AS,
    inLanguage: locale === "en" ? "en" : "hu",
    areaServed: [
      { "@type": "City", name: "Budapest" },
      { "@type": "AdministrativeArea", name: locale === "en" ? "Pest county" : "Pest megye" },
    ],
  };
}

export function eventServiceSchema(url: string, description: string, locale: Locale = "hu") {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name:
      locale === "en"
        ? "Tuktuk event catering Budapest"
        : "Tuktuk rendezvény vendéglátás Budapest",
    alternateName:
      locale === "en"
        ? [
            "tuk tuk event",
            "tuktuk bar Budapest",
            "tuk tuk bar",
            "mobile tuktuk event",
            "tuktuk pop-up",
          ]
        : [
            "tuk tuk rendezvény",
            "tuktuk bár Budapest",
            "tuk tuk bár",
            "mozgó tuktuk rendezvény",
            "mobil tuktuk rendezvény",
            "tuktuk kitelepülés",
          ],
    serviceType:
      locale === "en"
        ? "Tuktuk (tuk tuk) event catering"
        : "Tuktuk (tuk tuk) rendezvény vendéglátás",
    description,
    url,
    provider,
    inLanguage: locale === "en" ? "en" : "hu",
    areaServed: [
      { "@type": "City", name: "Budapest" },
      { "@type": "AdministrativeArea", name: locale === "en" ? "Pest county" : "Pest megye" },
    ],
    offers: {
      "@type": "Offer",
      url:
        locale === "en"
          ? `${SITE_URL}/en/kontakt?topic=Event#urlap`
          : `${SITE_URL}/kontakt?topic=Rendezvény#urlap`,
      availability: "https://schema.org/InStock",
    },
  };
}

export function franchiseServiceSchema(url: string, description: string, locale: Locale = "hu") {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name:
      locale === "en"
        ? "Bean & Barrel tuktuk franchise Hungary"
        : "Bean & Barrel tuktuk franchise Magyarország",
    alternateName:
      locale === "en"
        ? [
            "tuk tuk franchise",
            "tuktuk franchise Hungary",
            "mobile tuktuk franchise",
            "Bean & Barrel franchise",
          ]
        : [
            "tuk tuk franchise",
            "tuktuk franchise Magyarország",
            "mozgó tuktuk franchise",
            "Bean & Barrel franchise",
          ],
    serviceType: locale === "en" ? "Tuktuk franchise" : "Tuktuk franchise",
    description,
    url,
    provider,
    inLanguage: locale === "en" ? "en" : "hu",
    areaServed: {
      "@type": "Country",
      name: locale === "en" ? "Hungary" : "Magyarország",
    },
    offers: {
      "@type": "Offer",
      url:
        locale === "en"
          ? `${SITE_URL}/en/kontakt?topic=Franchise#urlap`
          : `${SITE_URL}/kontakt?topic=Franchise#urlap`,
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
