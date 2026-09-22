import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  download?: boolean | string;
  external?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  download,
  external,
  className,
}: ButtonProps) {
  const shared =
    "inline-flex min-h-11 items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors";

  return (
    <a
      href={href}
      className={cn(
        shared,
        variant === "primary" &&
          "bg-accent text-background hover:bg-accent/90",
        variant === "ghost" &&
          "border border-line text-foreground hover:border-accent/40 hover:text-accent",
        className,
      )}
      {...(download
        ? { download: typeof download === "string" ? download : true }
        : {})}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </a>
  );
}
