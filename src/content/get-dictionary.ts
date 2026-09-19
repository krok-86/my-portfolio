import { en } from "@/content/en";
import { ru } from "@/content/ru";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/types/content";

const dictionaries: Record<Locale, Dictionary> = {
  en,
  ru,
};

export function getDictionary(locale: string): Dictionary {
  if (isLocale(locale)) {
    return dictionaries[locale];
  }

  return dictionaries[defaultLocale];
}
