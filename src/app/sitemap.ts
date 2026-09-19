import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/site";
import { locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: locale === "en" ? 1 : 0.8,
    alternates: {
      languages: {
        en: `${siteUrl}/en`,
        ru: `${siteUrl}/ru`,
      },
    },
  }));
}
