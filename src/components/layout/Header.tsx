"use client";

import { useEffect, useId, useState } from "react";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { Container } from "@/components/layout/Container";
import { contacts } from "@/content/contacts";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/types/content";
import { cn } from "@/lib/utils";

type HeaderProps = {
  dict: Dictionary;
  locale: Locale;
};

export function Header({ dict, locale }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    const media = window.matchMedia("(min-width: 768px)");
    function onViewportChange() {
      if (media.matches) {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    media.addEventListener("change", onViewportChange);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      media.removeEventListener("change", onViewportChange);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-background/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <a
          href={`/${locale}#top`}
          className="font-mono text-sm tracking-[0.18em] text-foreground"
        >
          {dict.profile.shortName}
        </a>

        <nav
          aria-label={dict.header.primaryNav}
          className="hidden items-center gap-8 md:flex"
        >
          {dict.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:gap-5">
          <LanguageSwitcher
            locale={locale}
            label={dict.header.language}
          />
          <a
            href={`mailto:${contacts.email}`}
            className="hidden text-sm text-muted transition-colors hover:text-accent md:inline"
          >
            {dict.header.email}
          </a>
          <a
            href={contacts.resumeHref}
            download
            className="hidden text-sm text-muted transition-colors hover:text-accent md:inline"
          >
            {dict.header.resume}
          </a>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-md border border-line md:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? dict.header.closeMenu : dict.header.openMenu}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">
              {open ? dict.header.closeMenu : dict.header.openMenu}
            </span>
            <span className="relative block h-3.5 w-4">
              <span
                className={cn(
                  "absolute top-[7px] left-0 block h-px w-4 origin-center bg-foreground transition-transform duration-200",
                  open ? "rotate-45" : "-translate-y-1.5",
                )}
              />
              <span
                className={cn(
                  "absolute top-[7px] left-0 block h-px w-4 origin-center bg-foreground transition-transform duration-200",
                  open ? "-rotate-45" : "translate-y-1.5",
                )}
              />
            </span>
          </button>
        </div>
      </Container>

      <div
        id={menuId}
        hidden={!open}
        className="border-t border-line bg-background md:hidden"
      >
        <Container className="flex flex-col gap-1 py-6">
          {dict.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="py-3 text-lg text-foreground"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={`mailto:${contacts.email}`}
            className="py-3 text-lg text-muted"
            onClick={() => setOpen(false)}
          >
            {dict.header.email}
          </a>
          <a
            href={contacts.resumeHref}
            download
            className="py-3 text-lg text-muted"
            onClick={() => setOpen(false)}
          >
            {dict.header.resume}
          </a>
        </Container>
      </div>
    </header>
  );
}
