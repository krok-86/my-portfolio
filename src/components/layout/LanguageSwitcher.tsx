import Link from "next/link";
import { locales, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  locale: Locale;
  label: string;
};

export function LanguageSwitcher({ locale, label }: LanguageSwitcherProps) {
  return (
    <nav aria-label={label} className="flex items-center gap-1 font-mono text-xs tracking-[0.14em]">
      {locales.map((item, index) => (
        <span key={item} className="flex items-center gap-1">
          {index > 0 ? (
            <span aria-hidden="true" className="text-muted/50">
              /
            </span>
          ) : null}
          <Link
            href={`/${item}`}
            hrefLang={item}
            lang={item}
            aria-current={item === locale ? "page" : undefined}
            className={cn(
              "inline-flex min-h-11 min-w-9 items-center justify-center transition-colors",
              item === locale
                ? "text-foreground"
                : "text-muted hover:text-accent",
            )}
          >
            {item.toUpperCase()}
          </Link>
        </span>
      ))}
    </nav>
  );
}
