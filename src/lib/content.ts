// Helpers to read CMS-managed JSON collections from src/content/.
// Sveltia CMS writes here; site reads at build time via Vite's import.meta.glob.

import type { ImageMetadata } from 'astro';

type WithOrder = { order?: number };

function sortByOrder<T extends WithOrder>(entries: T[]): T[] {
  return [...entries].sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
}

/** Precomposed NFC — decomposed O+◌̈ vs Ö can render differently in custom fonts. */
function nfc(value: string): string {
  return value.normalize("NFC");
}

const _imgs = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/uploads/**/*.webp',
  { eager: true },
);

export function resolveImage(path: string | undefined): ImageMetadata | undefined {
  if (!path) return undefined;
  const normalized = path.replace(/^\/?uploads\//, "../assets/uploads/");
  if (_imgs[normalized]) return _imgs[normalized].default;
  const filename = path.split('/').pop();
  return _imgs[`../assets/uploads/${filename}`]?.default;
}

export type CarouselSlide = {
  order?: number;
  eyebrow: string;
  title: string;
  body: string;
  ctaHref: string;
  ctaLabel: string;
  image?: string;
  imageAlt?: string;
};

export type Category = {
  order?: number;
  key: string;
  label: string;
  sub?: string;
  items: string[];
  image?: string;
  imageAlt?: string;
};

export type Reason = {
  order?: number;
  title: string;
  body: string;
};

export type UpcomingEvent = {
  title: string;
  date: string;
  endDate?: string;
  location: string;
  description?: string;
  ctaUrl?: string;
  published: boolean;
};

function values<T>(modules: Record<string, { default: T }>): T[] {
  return Object.values(modules).map((m) => m.default);
}

export function getCarouselSlides(): CarouselSlide[] {
  const mods = import.meta.glob<{ default: CarouselSlide }>(
    "../content/carousel/*.json",
    { eager: true },
  );
  return sortByOrder(values(mods));
}

export function getCategories(): Category[] {
  const mods = import.meta.glob<{ default: Category }>(
    "../content/categories/*.json",
    { eager: true },
  );
  return sortByOrder(values(mods)).map((category) => ({
    ...category,
    label: nfc(category.label),
    sub: category.sub ? nfc(category.sub) : category.sub,
    imageAlt: category.imageAlt ? nfc(category.imageAlt) : category.imageAlt,
    items: category.items.map(nfc),
  }));
}

export function getReasons(): Reason[] {
  const mods = import.meta.glob<{ default: Reason }>(
    "../content/reasons/*.json",
    { eager: true },
  );
  return sortByOrder(values(mods));
}

export type GalleryPhoto = {
  order?: number;
  image: string;
  alt: string;
};

export function getGalleryPhotos(): GalleryPhoto[] {
  const mods = import.meta.glob<{ default: GalleryPhoto }>(
    "../content/gallery/*.json",
    { eager: true },
  );
  return sortByOrder(values(mods));
}

export function getUpcomingEvents(opts?: { limit?: number }): UpcomingEvent[] {
  const mods = import.meta.glob<{ default: UpcomingEvent }>(
    "../content/upcoming-events/*.json",
    { eager: true },
  );
  const today = new Date().toISOString().slice(0, 10);
  const all = values(mods)
    .filter((e) => e.published && (e.endDate ?? e.date) >= today)
    .sort((a, b) => a.date.localeCompare(b.date));
  return opts?.limit ? all.slice(0, opts.limit) : all;
}
