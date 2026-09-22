import type { Locale } from "@/i18n/config";
import { defaultLocale, isLocale } from "@/i18n/config";

export const contacts = {
  email: "krok863@gmail.com",
  linkedin: "https://www.linkedin.com/in/konstantin-bykadorov-4a967a419",
  linkedinLabel: "LinkedIn",
  resume: {
    en: {
      href: "/resume-en.pdf",
      download: "Konstantin_Bykadorov_Resume.pdf",
    },
    ru: {
      href: "/resume-ru.pdf",
      download: "Bykadorov_Konstantin_Resume.pdf",
    },
  },
} as const;

export function getResume(locale: string) {
  const key: Locale = isLocale(locale) ? locale : defaultLocale;
  return contacts.resume[key];
}
