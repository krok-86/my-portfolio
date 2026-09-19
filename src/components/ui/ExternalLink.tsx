import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  download?: boolean;
};

export function ExternalLink({
  href,
  children,
  className,
  download,
}: ExternalLinkProps) {
  const isHash = href.startsWith("#");
  const isMailOrFile = href.startsWith("mailto:") || href.startsWith("/");

  return (
    <a
      href={href}
      className={cn(
        "text-sm text-muted transition-colors hover:text-accent",
        className,
      )}
      {...(download ? { download: true } : {})}
      {...(!isHash && !isMailOrFile
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </a>
  );
}
