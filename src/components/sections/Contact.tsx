import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { contacts } from "@/content/contacts";
import {
  DownloadIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/icons/Icons";
import type { Dictionary } from "@/types/content";

type ContactProps = {
  dict: Dictionary;
};

export function Contact({ dict }: ContactProps) {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 py-20 sm:py-28"
    >
      <Container>
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
          {dict.contact.eyebrow}
        </p>
        <h2
          id="contact-heading"
          className="mt-4 max-w-3xl text-3xl font-medium tracking-tight text-foreground sm:text-4xl"
        >
          {dict.contact.title}
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
          {dict.contact.body}
        </p>
        <p className="mt-3 text-sm text-muted">
          {dict.profile.seeking.join(" · ")}
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href={contacts.linkedin} external>
            <LinkedInIcon className="mr-2 size-4" />
            {dict.contact.linkedin}
          </Button>
          <Button href={`mailto:${contacts.email}`} variant="ghost">
            <MailIcon className="mr-2 size-4" />
            {contacts.email}
          </Button>
          <Button href={contacts.resumeHref} variant="ghost" download>
            <DownloadIcon className="mr-2 size-4" />
            {dict.contact.downloadCv}
          </Button>
        </div>
      </Container>
    </section>
  );
}
