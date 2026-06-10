import { ui, defaultLang } from "./ui";
import type { Lang, TranslationKey } from "./ui";

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey): string {
    return (ui[lang] as Record<string, string>)[key] ?? (ui[defaultLang] as Record<string, string>)[key] ?? key;
  };
}

export function getAlternateUrls(currentPath: string, siteUrl: string) {
  // Strip leading lang prefix like /es/... → /...
  const cleanPath = currentPath.replace(/^\/(es)(\/|$)/, "/");
  return {
    en: `${siteUrl}${cleanPath === "/" ? "" : cleanPath}`,
    es: `${siteUrl}/es${cleanPath === "/" ? "" : cleanPath}`,
  };
}
