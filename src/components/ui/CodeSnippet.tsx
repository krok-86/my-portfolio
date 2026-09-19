type CodeSnippetProps = {
  name: string;
  availability: string;
};

export function CodeSnippet({ name, availability }: CodeSnippetProps) {
  return (
    <div
      aria-hidden="true"
      className="rounded-2xl border border-line bg-surface/80 p-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] sm:p-6"
    >
      <div className="mb-5 flex gap-1.5">
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="size-2.5 rounded-full bg-white/15" />
      </div>
      <pre className="overflow-x-auto font-mono text-[13px] leading-7 text-muted sm:text-sm">
        <code>
          <span className="text-muted">{"<"}</span>
          <span className="text-accent">FrontendEngineer</span>
          {"\n"}
          {"  "}
          <span className="text-foreground/70">name</span>
          <span className="text-muted">=</span>
          <span className="text-foreground">{`"${name}"`}</span>
          {"\n"}
          {"  "}
          <span className="text-foreground/70">stack</span>
          <span className="text-muted">={"{"}</span>
          <span className="text-foreground">
            {'["React", "TypeScript", "Next.js"]'}
          </span>
          <span className="text-muted">{"}"}</span>
          {"\n"}
          {"  "}
          <span className="text-foreground/70">experience</span>
          <span className="text-muted">=</span>
          <span className="text-foreground">{'"~3 years"'}</span>
          {"\n"}
          {"  "}
          <span className="text-foreground/70">availability</span>
          <span className="text-muted">=</span>
          <span className="text-foreground">{`"${availability}"`}</span>
          {"\n"}
          <span className="text-muted">{"/>"}</span>
        </code>
      </pre>
    </div>
  );
}
