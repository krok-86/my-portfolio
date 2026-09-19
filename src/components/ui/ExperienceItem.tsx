import type { ExperienceRole } from "@/types/content";
import { TechChip } from "@/components/ui/TechChip";

type ExperienceItemProps = {
  role: ExperienceRole;
  currentLabel: string;
};

export function ExperienceItem({ role, currentLabel }: ExperienceItemProps) {
  return (
    <article className="relative grid gap-3 pl-8 sm:pl-10">
      <span
        aria-hidden="true"
        className="absolute top-1.5 left-0 size-2.5 rounded-full border border-accent bg-background"
      />
      <header className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <h3 className="text-lg font-medium text-foreground">
            {role.role}
            <span className="text-muted"> · {role.company}</span>
          </h3>
          {role.location ? (
            <p className="text-sm text-muted">{role.location}</p>
          ) : null}
        </div>
        <p className="font-mono text-xs tracking-wide text-muted sm:text-right">
          {role.period}
          {role.current ? (
            <span className="ml-2 text-accent">{currentLabel}</span>
          ) : null}
        </p>
      </header>

      <ul className="space-y-2 text-sm leading-relaxed text-muted">
        {role.responsibilities.map((item) => (
          <li key={item} className="flex gap-2">
            <span aria-hidden="true" className="text-accent/80">
              —
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {role.results?.length ? (
        <ul className="space-y-2 text-sm leading-relaxed text-foreground/80">
          {role.results.map((item) => (
            <li key={item} className="flex gap-2">
              <span aria-hidden="true" className="text-accent">
                →
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}

      <div className="flex flex-wrap gap-2 pt-1">
        {role.stack.map((item) => (
          <TechChip key={item} className="text-xs">
            {item}
          </TechChip>
        ))}
      </div>
    </article>
  );
}
