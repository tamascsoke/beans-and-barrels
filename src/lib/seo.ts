import { EMAIL, PHONE_HREF } from "./contact";

export const SITE_URL = "https://www.beanbarrel.coffee";
export const SITE_NAME = "Bean & Barrel";

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
    servesCuisine: ["Specialty kávé", "Csapolt sör", "Rendezvény vendéglátás"],
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
    name: "Rendezvény vendéglátás Budapest",
    serviceType: "Rendezvény vendéglátás",
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
    name: "Bean & Barrel franchise Magyarország",
    serviceType: "Franchise",
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
