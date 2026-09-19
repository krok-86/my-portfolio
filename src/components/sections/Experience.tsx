import { Container } from "@/components/layout/Container";
import { ExperienceItem } from "@/components/ui/ExperienceItem";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/types/content";

type ExperienceProps = {
  dict: Dictionary;
};

export function Experience({ dict }: ExperienceProps) {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-24 py-20 sm:py-28"
    >
      <Container>
        <SectionHeading
          id="experience-heading"
          eyebrow={dict.experience.eyebrow}
          title={dict.experience.title}
          description={dict.experience.description}
        />
        <ol className="relative mt-14 space-y-14 before:absolute before:top-2 before:bottom-2 before:left-[4px] before:w-px before:bg-line">
          {dict.experience.roles.map((role) => (
            <li key={`${role.company}-${role.period}`}>
              <ExperienceItem role={role} currentLabel={dict.experience.current} />
            </li>
          ))}
        </ol>
        <p className="mt-14 text-sm text-muted">{dict.experience.education}</p>
      </Container>
    </section>
  );
}
