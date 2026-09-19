import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechChip } from "@/components/ui/TechChip";
import type { Dictionary } from "@/types/content";

type TechStackProps = {
  dict: Dictionary;
};

export function TechStack({ dict }: TechStackProps) {
  return (
    <section
      id="stack"
      aria-labelledby="stack-heading"
      className="scroll-mt-24 py-20 sm:py-28"
    >
      <Container>
        <SectionHeading
          id="stack-heading"
          eyebrow={dict.stack.eyebrow}
          title={dict.stack.title}
          description={dict.stack.description}
        />
        <div className="mt-14 grid gap-10 sm:grid-cols-2">
          {dict.stack.groups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-medium text-foreground">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <TechChip>{item}</TechChip>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
