import type { Locale } from "../i18n";
import { getLocaleFromPath, localePath, useTranslations } from "../i18n";

export function pageContext(pathname: string, forcedLocale?: Locale) {
  const locale = forcedLocale ?? getLocaleFromPath(pathname);
  const t = useTranslations(locale);
  const p = (route: string) => localePath(locale, route);
  return { locale, t, p };
}
