import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { EngineeringFocus } from "@/components/sections/EngineeringFocus";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { TechStack } from "@/components/sections/TechStack";
import { getDictionary } from "@/content/get-dictionary";

type HomeProps = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <main id="content">
      <Hero dict={dict} />
      <About dict={dict} />
      <Experience dict={dict} />
      <EngineeringFocus dict={dict} />
      <TechStack dict={dict} />
      <SelectedWork dict={dict} />
      <Contact dict={dict} />
    </main>
  );
}
