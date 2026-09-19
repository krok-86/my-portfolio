import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WorkCard } from "@/components/ui/WorkCard";
import type { Dictionary } from "@/types/content";

type SelectedWorkProps = {
  dict: Dictionary;
};

export function SelectedWork({ dict }: SelectedWorkProps) {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="scroll-mt-24 py-20 sm:py-28"
    >
      <Container>
        <SectionHeading
          id="work-heading"
          eyebrow={dict.work.eyebrow}
          title={dict.work.title}
          description={dict.work.description}
        />
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {dict.work.samples.map((sample, index) => (
            <WorkCard
              key={sample.category}
              index={index + 1}
              category={sample.category}
              body={sample.body}
            />
          ))}
        </div>
        <p className="mt-8 text-sm text-muted">{dict.work.disclaimer}</p>
      </Container>
    </section>
  );
}
