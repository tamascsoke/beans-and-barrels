import { EMAIL, PHONE_HREF } from "./contact";

export const SITE_URL = "https://www.beanbarrel.coffee";
export const SITE_NAME = "Bean & Barrel";

/** Keresői slang / alternatív elnevezések — csak meta és JSON-LD */
export const TUKTUK_ALTERNATE_NAMES = [
  "tuktuk",
  "tuk tuk",
  "tuktuk bár",
  "tuk tuk bár",
  "tuktuk rendezvény",
];

const provider = {
  "@type": "Organization" as const,
  name: SITE_NAME,
  url: SITE_URL,
  email: EMAIL,
  telephone: PHONE_HREF,
};

export function foodEstablishmentSchema(description: string, image: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    name: SITE_NAME,
    url: SITE_URL,
    email: EMAIL,
    telephone: PHONE_HREF,
    description,
    alternateName: TUKTUK_ALTERNATE_NAMES,
    servesCuisine: ["Specialty kávé", "Csapolt sör", "Rendezvény vendéglátás", "Tuktuk bár"],
    image,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Budapest",
      addressCountry: "HU",
    },
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
    alternateName: ["tuk tuk rendezvény", "tuktuk bár Budapest", "tuk tuk bár"],
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
    alternateName: ["tuk tuk franchise", "tuktuk kávézó franchise", "mozgó tuktuk franchise"],
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
