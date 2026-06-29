export const DEFAULT_LOCALE = "hu" as const;
export const LOCALES = ["hu", "en"] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_LABELS: Record<Locale, string> = {
  hu: "HU",
  en: "EN",
};

export const OG_LOCALES: Record<Locale, string> = {
  hu: "hu_HU",
  en: "en_GB",
};

export const HTML_LANG: Record<Locale, string> = {
  hu: "hu",
  en: "en",
};

/** Site paths without locale prefix (trailing slash omitted except root). */
export const ROUTES = [
  "/",
  "/rolunk",
  "/kinalat",
  "/rendezvenyek",
  "/galeria",
  "/franchise",
  "/kontakt",
  "/impresszum",
  "/adatvedelem",
  "/koszonjuk",
] as const;

export type RoutePath = (typeof ROUTES)[number];
