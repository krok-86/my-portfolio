type WorkCardProps = {
  index: number;
  category: string;
  body: string;
};

export function WorkCard({ index, category, body }: WorkCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-line bg-surface/60 p-6">
      <p className="font-mono text-[11px] tracking-[0.18em] text-accent">
        {String(index).padStart(2, "0")}
      </p>
      <h3 className="mt-4 text-xl font-medium text-foreground">{category}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{body}</p>
    </article>
  );
}
