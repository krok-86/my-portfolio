import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = {
  as?: "div" | "section" | "header" | "footer" | "nav";
  className?: string;
  children: ReactNode;
};

export function Container({
  as: Component = "div",
  className,
  children,
}: ContainerProps) {
  return (
    <Component
      className={cn("mx-auto w-full max-w-[1120px] px-5 sm:px-6 lg:px-8", className)}
    >
      {children}
    </Component>
  );
}
