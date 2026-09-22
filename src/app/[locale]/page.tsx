import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { EngineeringFocus } from "@/components/sections/EngineeringFocus";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { TechStack } from "@/components/sections/TechStack";
import { getDictionary } from "@/content/get-dictionary";
import { defaultLocale, isLocale } from "@/i18n/config";

type HomeProps = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: HomeProps) {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <main id="content">
      <Hero dict={dict} locale={locale} />
      <About dict={dict} />
      <Experience dict={dict} />
      <EngineeringFocus dict={dict} />
      <TechStack dict={dict} />
      <SelectedWork dict={dict} />
      <Contact dict={dict} locale={locale} />
    </main>
  );
}
