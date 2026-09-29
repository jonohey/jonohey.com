import type { Metadata } from "next";
import Link from "next/link";
import { bibliography } from "@/lib/bibliography";

export const metadata: Metadata = {
  title: "Bibliography",
  description: "Bibliography for Effective Framing in Design by Jono Hey.",
  alternates: { canonical: "/bibliography" },
};

export default function BibliographyPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 pt-6 pb-16 sm:px-8 md:pt-12">
      <Link href="/research" className="text-sm text-muted hover:text-paper">
        ← Research
      </Link>
      <h1 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">
        Bibliography
      </h1>
      <p className="mt-4 text-muted">
        For <em>Effective Framing in Design</em>. There&apos;s some super stuff
        in here.
      </p>
      <ol className="mt-10 space-y-4 text-sm leading-relaxed wrap-anywhere text-muted">
        {bibliography.map((entry) => (
          <li key={entry} className="pl-6 -indent-6">
            {entry}
          </li>
        ))}
      </ol>
    </article>
  );
}
