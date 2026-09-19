type FocusCardProps = {
  index: number;
  title: string;
  body: string;
};

export function FocusCard({ index, title, body }: FocusCardProps) {
  return (
    <article className="flex flex-col border-t border-line pt-6">
      <p className="font-mono text-[11px] tracking-[0.18em] text-muted">
        {String(index).padStart(2, "0")}
      </p>
      <h3 className="mt-3 text-lg font-medium text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{body}</p>
    </article>
  );
}
