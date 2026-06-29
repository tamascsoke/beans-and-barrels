import {
  DEFAULT_LOCALE,
  type Locale,
  type RoutePath,
  ROUTES,
} from "./config";

const SITE = "https://www.beanbarrel.coffee";

export function getLocaleFromPath(pathname: string): Locale {
  if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
  return "hu";
}

/** Strip `/en` prefix to get the logical route path. */
export function stripLocalePrefix(pathname: string): RoutePath | string {
  let p = pathname.replace(/\/$/, "") || "/";
  if (p === "/en") return "/";
  if (p.startsWith("/en/")) p = p.slice(3) || "/";
  return p;
}

export function localePath(locale: Locale, path: RoutePath | string): string {
  const normalized = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  if (locale === "hu") return normalized || "/";
  return `/en${normalized}`;
}

export function switchLocalePath(pathname: string, target: Locale): string {
  const route = stripLocalePrefix(pathname);
  const known = ROUTES.includes(route as RoutePath) ? (route as RoutePath) : "/";
  return localePath(target, known);
}

export function absoluteUrl(locale: Locale, path: RoutePath | string): string {
  return new URL(localePath(locale, path), SITE).toString();
}

export function hreflangAlternates(pathname: string): { locale: Locale; href: string }[] {
  const route = stripLocalePrefix(pathname);
  const base = ROUTES.includes(route as RoutePath) ? (route as RoutePath) : null;
  if (!base) return [];
  return [
    { locale: "hu", href: absoluteUrl("hu", base) },
    { locale: "en", href: absoluteUrl("en", base) },
  ];
}

export function defaultLocaleHref(pathname: string): string {
  const route = stripLocalePrefix(pathname);
  if (ROUTES.includes(route as RoutePath)) {
    return absoluteUrl(DEFAULT_LOCALE, route as RoutePath);
  }
  return absoluteUrl(DEFAULT_LOCALE, "/");
}
