export const locales = ["en", "ru"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeCookie = "locale";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
