import type { Locale } from "../i18n";
import { pickLocalized } from "../i18n";
import type { ImageMetadata } from "astro";

type WithOrder = { order?: number };

function sortByOrder<T extends WithOrder>(entries: T[]): T[] {
  return [...entries].sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
}

function nfc(value: string): string {
  return value.normalize("NFC");
}

const _imgs = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/uploads/**/*.webp",
  { eager: true },
);

export function resolveImage(path: string | undefined): ImageMetadata | undefined {
  if (!path) return undefined;
  const normalized = path.replace(/^\/?uploads\//, "../assets/uploads/");
  if (_imgs[normalized]) return _imgs[normalized].default;
  const filename = path.split("/").pop();
  return _imgs[`../assets/uploads/${filename}`]?.default;
}

type LocalizedFields = {
  eyebrowEn?: string;
  titleEn?: string;
  bodyEn?: string;
  ctaLabelEn?: string;
  ctaHrefEn?: string;
  imageAltEn?: string;
  labelEn?: string;
  altEn?: string;
  descriptionEn?: string;
  nameEn?: string;
};

export type CarouselSlide = LocalizedFields & {
  order?: number;
  eyebrow: string;
  title: string;
  body: string;
  ctaHref: string;
  ctaLabel: string;
  image?: string;
  imageAlt?: string;
};

export type Category = LocalizedFields & {
  order?: number;
  key: string;
  label: string;
  sub?: string;
  items: string[];
  itemsEn?: string[];
  image?: string;
  imageAlt?: string;
};

export type Reason = LocalizedFields & {
  order?: number;
  title: string;
  body: string;
};

export type UpcomingEvent = LocalizedFields & {
  title: string;
  date: string;
  endDate?: string;
  location: string;
  locationEn?: string;
  description?: string;
  ctaUrl?: string;
  published: boolean;
};

export type GalleryPhoto = LocalizedFields & {
  order?: number;
  image: string;
  alt: string;
};

function values<T>(modules: Record<string, { default: T }>): T[] {
  return Object.values(modules).map((m) => m.default);
}

export function getCarouselSlides(locale: Locale): CarouselSlide[] {
  const mods = import.meta.glob<{ default: CarouselSlide }>(
    "../content/carousel/*.json",
    { eager: true },
  );
  return sortByOrder(values(mods)).map((slide) => ({
    ...slide,
    eyebrow: pickLocalized(locale, slide.eyebrow, slide.eyebrowEn),
    title: pickLocalized(locale, slide.title, slide.titleEn),
    body: pickLocalized(locale, slide.body, slide.bodyEn),
    ctaLabel: pickLocalized(locale, slide.ctaLabel, slide.ctaLabelEn),
    ctaHref: pickLocalized(locale, slide.ctaHref, slide.ctaHrefEn),
    imageAlt: slide.imageAlt
      ? pickLocalized(locale, nfc(slide.imageAlt), slide.imageAltEn)
      : slide.imageAlt,
  }));
}

export function getCategories(locale: Locale): Category[] {
  const mods = import.meta.glob<{ default: Category }>(
    "../content/categories/*.json",
    { eager: true },
  );
  return sortByOrder(values(mods)).map((category) => {
    const items =
      locale === "en" && category.itemsEn?.length
        ? category.itemsEn
        : category.items;
    return {
      ...category,
      label: nfc(pickLocalized(locale, category.label, category.labelEn)),
      sub: category.sub ? nfc(pickLocalized(locale, category.sub, category.subEn)) : category.sub,
      imageAlt: category.imageAlt
        ? nfc(pickLocalized(locale, category.imageAlt, category.imageAltEn))
        : category.imageAlt,
      items: items.map(nfc),
    };
  });
}

export function getReasons(locale: Locale): Reason[] {
  const mods = import.meta.glob<{ default: Reason }>(
    "../content/reasons/*.json",
    { eager: true },
  );
  return sortByOrder(values(mods)).map((reason) => ({
    ...reason,
    title: pickLocalized(locale, reason.title, reason.titleEn),
    body: pickLocalized(locale, reason.body, reason.bodyEn),
  }));
}

export function getGalleryPhotos(locale: Locale): GalleryPhoto[] {
  const mods = import.meta.glob<{ default: GalleryPhoto }>(
    "../content/gallery/*.json",
    { eager: true },
  );
  return sortByOrder(values(mods)).map((photo) => ({
    ...photo,
    alt: pickLocalized(locale, photo.alt, photo.altEn),
  }));
}

export function getUpcomingEvents(
  locale: Locale,
  opts?: { limit?: number },
): UpcomingEvent[] {
  const mods = import.meta.glob<{ default: UpcomingEvent }>(
    "../content/upcoming-events/*.json",
    { eager: true },
  );
  const today = new Date().toISOString().slice(0, 10);
  const all = values(mods)
    .filter((e) => e.published && (e.endDate ?? e.date) >= today)
    .sort((a, b) => a.date.localeCompare(b.date))
    .map((event) => ({
      ...event,
      title: pickLocalized(locale, event.title, event.titleEn),
      location: pickLocalized(locale, event.location, event.locationEn),
      description: event.description
        ? pickLocalized(locale, event.description, event.descriptionEn)
        : event.description,
    }));
  return opts?.limit ? all.slice(0, opts.limit) : all;
}

export type EventTypes = { items: string[]; itemsEn?: string[] };

import eventTypesData from "../content/event-types.json";

export function getEventTypes(locale: Locale): string[] {
  const data = eventTypesData as EventTypes;
  if (locale === "en" && data.itemsEn?.length) return data.itemsEn;
  return data.items;
}
