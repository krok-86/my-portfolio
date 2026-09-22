import { Geist_Mono, Inter } from "next/font/google";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SiteBackground } from "@/components/layout/SiteBackground";
import { contacts } from "@/content/contacts";
import { getDictionary } from "@/content/get-dictionary";
import { siteUrl } from "@/content/site";
import { isLocale, locales } from "@/i18n/config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const localePath = `/${isLocale(locale) ? locale : "en"}`;

  return {
    ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
    title: {
      default: dict.metadata.title,
      template: `%s — ${dict.profile.name}`,
    },
    description: dict.metadata.description,
    keywords: dict.metadata.keywords,
    authors: [{ name: dict.profile.name, url: contacts.linkedin }],
    creator: dict.profile.name,
    openGraph: {
      type: "website",
      url: localePath,
      title: dict.metadata.title,
      description: dict.metadata.description,
      siteName: dict.profile.name,
      locale: dict.metadata.ogLocale,
      alternateLocale: locale === "ru" ? ["en_US"] : ["ru_RU"],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.metadata.title,
      description: dict.metadata.description,
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: localePath,
      languages: {
        en: "/en",
        ru: "/ru",
        "x-default": "/en",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: dict.profile.name,
    jobTitle: dict.profile.role,
    description: dict.metadata.description,
    email: `mailto:${contacts.email}`,
    ...(siteUrl ? { url: `${siteUrl}/${locale}` } : {}),
    sameAs: [contacts.linkedin],
    knowsAbout: [...dict.profile.heroStack],
  };

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${geistMono.variable}`}
    >
      <body className="relative min-h-screen bg-background font-sans text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          suppressHydrationWarning
        />
        <SiteBackground />
        <div className="relative z-10">
          <a
            href="#content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-background"
          >
            {dict.header.skipToContent}
          </a>
          <div id="top" />
          <Header dict={dict} locale={locale} />
          {children}
          <Footer dict={dict} />
        </div>
      </body>
    </html>
  );
}
