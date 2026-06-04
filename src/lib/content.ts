// Helpers to read CMS-managed JSON collections from src/content/.
// Sveltia CMS writes here; site reads at build time via Vite's import.meta.glob.

import type { ImageMetadata } from 'astro';

type WithOrder = { order?: number };

function sortByOrder<T extends WithOrder>(entries: T[]): T[] {
  return [...entries].sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
}

const _imgs = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/uploads/**/*.webp',
  { eager: true },
);

const _galleryImgs = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/uploads/gallery/*.webp',
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
  return sortByOrder(values(mods));
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

function galleryAlt(filename: string): string {
  const match = filename.match(/^gallery-([a-z0-9-]+)-(\d+)\.webp$/);
  const group = match?.[1] ?? "pillanat";
  const number = match ? Number(match[2]) : undefined;
  const labels: Record<string, string> = {
    helyszin: "Bean & Barrel helyszín",
    kave: "Bean & Barrel kávé",
    sor: "Bean & Barrel sör",
    cookie: "Bean & Barrel snack",
    rendezvenyek: "Bean & Barrel rendezvény",
  };
  return `${labels[group] ?? "Bean & Barrel pillanat"}${number ? ` ${number}` : ""}`;
}

const galleryExclusions = new Set([
  // These photos are already used as hero, pillar, carousel, or category images.
  "gallery-helyszin-01.webp",
  "gallery-helyszin-02.webp",
  "gallery-kave-01.webp",
  "gallery-kave-02.webp",
  "gallery-rendezvenyek-01.webp",
  "gallery-rendezvenyek-03.webp",
  "gallery-rendezvenyek-07.webp",
  "gallery-rendezvenyek-19.webp",
  "gallery-sor-01.webp",
  "gallery-sor-05.webp",
  // Near-duplicate frames from the same event / crop variants
  "gallery-rendezvenyek-04.webp",
  "gallery-rendezvenyek-06.webp",
  "gallery-rendezvenyek-11.webp",
  "gallery-rendezvenyek-15.webp",
  "gallery-rendezvenyek-18.webp",
]);

export function getGalleryPhotos(): GalleryPhoto[] {
  const mods = import.meta.glob<{ default: GalleryPhoto }>(
    "../content/gallery/*.json",
    { eager: true },
  );
  // Legacy CMS gallery entries point at root uploads that duplicate the curated gallery folder.
  const cmsPhotos = sortByOrder(values(mods)).filter((photo) => (
    !photo.image.startsWith("/uploads/") || photo.image.startsWith("/uploads/gallery/")
  ));
  const uploadedPhotos = Object.keys(_galleryImgs)
    .sort((a, b) => a.localeCompare(b, "hu"))
    .filter((key) => !galleryExclusions.has(key.split("/").pop()!))
    .map((key, index) => {
      const filename = key.split("/").pop()!;
      return {
        order: 1000 + index,
        image: `/uploads/gallery/${filename}`,
        alt: galleryAlt(filename),
      };
    });
  return [...cmsPhotos, ...uploadedPhotos];
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
