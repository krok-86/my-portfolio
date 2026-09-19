import { Container } from "@/components/layout/Container";
import { FocusCard } from "@/components/ui/FocusCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/types/content";

type EngineeringFocusProps = {
  dict: Dictionary;
};

export function EngineeringFocus({ dict }: EngineeringFocusProps) {
  return (
    <section
      id="focus"
      aria-labelledby="focus-heading"
      className="scroll-mt-24 py-20 sm:py-28"
    >
      <Container>
        <SectionHeading
          id="focus-heading"
          eyebrow={dict.focus.eyebrow}
          title={dict.focus.title}
          description={dict.focus.description}
        />
        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {dict.focus.areas.map((area, index) => (
            <FocusCard
              key={area.title}
              index={index + 1}
              title={area.title}
              body={area.body}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
