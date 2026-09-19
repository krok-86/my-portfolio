import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/types/content";

type AboutProps = {
  dict: Dictionary;
};

export function About({ dict }: AboutProps) {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24 py-20 sm:py-28"
    >
      <Container>
        <SectionHeading
          id="about-heading"
          eyebrow={dict.about.eyebrow}
          title={dict.about.title}
        />
        <div className="mt-10 max-w-2xl space-y-5 text-base leading-relaxed text-muted sm:text-lg">
          {dict.profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Container>
    </section>
  );
}
