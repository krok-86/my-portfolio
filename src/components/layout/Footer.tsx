import { Container } from "@/components/layout/Container";
import { contacts } from "@/content/contacts";
import type { Dictionary } from "@/types/content";

type FooterProps = {
  dict: Dictionary;
};

export function Footer({ dict }: FooterProps) {
  return (
    <footer className="border-t border-line py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          © 2026 {dict.profile.name}
          <span className="hidden sm:inline"> · {dict.profile.role}</span>
        </p>
        <nav aria-label={dict.footer.navLabel}>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
            {dict.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-accent">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={contacts.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </footer>
  );
}
