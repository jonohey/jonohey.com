import Link from "next/link";
import { NavLink } from "@/components/NavLink";

const nav = [
  { href: "/music", label: "Music" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <Link href="/" className="-mx-1 px-1 py-2 font-serif text-lg tracking-tight">
        Jono Hey
      </Link>
      <nav aria-label="Main">
        <ul className="flex gap-1 text-sm text-muted sm:gap-3">
          {nav.map((item) => (
            <li key={item.href}>
              <NavLink
                href={item.href}
                className="inline-block px-2 py-3 transition-colors hover:text-paper aria-[current=page]:text-paper aria-[current=page]:underline aria-[current=page]:decoration-accent aria-[current=page]:decoration-2 aria-[current=page]:underline-offset-8"
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
