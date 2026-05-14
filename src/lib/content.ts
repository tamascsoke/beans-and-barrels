// Helpers to read CMS-managed JSON collections from src/content/.
// Sveltia CMS writes here; site reads at build time via Vite's import.meta.glob.

type WithOrder = { order?: number };

function sortByOrder<T extends WithOrder>(entries: T[]): T[] {
  return [...entries].sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
}

export type CarouselSlide = {
  order?: number;
  eyebrow: string;
  title: string;
  body: string;
  ctaHref: string;
  ctaLabel: string;
};

export type Category = {
  order?: number;
  key: string;
  label: string;
  sub: string;
  items: string[];
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
