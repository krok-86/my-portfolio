import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type TechChipProps = {
  children: ReactNode;
  className?: string;
};

export function TechChip({ children, className }: TechChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-line bg-surface px-3 py-1 text-sm text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
