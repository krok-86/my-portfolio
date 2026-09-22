import { contacts, getResume } from "@/content/contacts";
import { Button } from "@/components/ui/Button";
import { CodeSnippet } from "@/components/ui/CodeSnippet";
import { Container } from "@/components/layout/Container";
import { TechChip } from "@/components/ui/TechChip";
import {
  DownloadIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/icons/Icons";
import type { Dictionary } from "@/types/content";
import type { Locale } from "@/i18n/config";

type HeroProps = {
  dict: Dictionary;
  locale: Locale;
};

export function Hero({ dict, locale }: HeroProps) {
  const resume = getResume(locale);
  return (
    <section className="relative pt-16 pb-20 sm:pt-20 sm:pb-28">
      <Container className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
        <div className="hero-enter">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            {dict.profile.role}
          </p>
          <h1 className="mt-4 text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-[56px] lg:leading-[1.05]">
            {dict.profile.name}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {dict.profile.valueProposition}
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {dict.profile.heroStack.map((item) => (
              <li key={item}>
                <TechChip>{item}</TechChip>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="#experience">{dict.hero.viewExperience}</Button>
            <Button href="#contact" variant="ghost">
              {dict.hero.contactMe}
            </Button>
          </div>
          <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
            <li>
              <a
                href={contacts.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
              >
                <LinkedInIcon className="size-4" />
                {dict.hero.linkedin}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contacts.email}`}
                className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
              >
                <MailIcon className="size-4" />
                {dict.hero.email}
              </a>
            </li>
            <li>
              <a
                href={resume.href}
                download={resume.download}
                className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
              >
                <DownloadIcon className="size-4" />
                {dict.hero.resume}
              </a>
            </li>
          </ul>
        </div>
        <div className="hero-enter lg:mt-10 lg:w-full lg:justify-self-end">
          <CodeSnippet
            name={dict.profile.name}
            availability={dict.profile.availability}
          />
        </div>
      </Container>
    </section>
  );
}
