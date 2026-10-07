import Link from "next/link";
import { links } from "@/lib/site";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/music", label: "Music" },
  { href: "/contact", label: "Contact" },
  { href: links.sketchplanations, label: "Sketchplanations" },
  { href: links.linkedin, label: "LinkedIn" },
];

export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-5xl px-5 py-10 text-sm text-muted sm:px-8">
      <div className="flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
        <nav aria-label="Site">
          <ul className="-mx-2 flex flex-wrap">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-block px-2 py-2 transition-colors hover:text-paper"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p>© {new Date().getFullYear()} Jono Hey</p>
      </div>
    </footer>
  );
}
