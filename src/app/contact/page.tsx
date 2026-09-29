import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { sheetMusicStore } from "@/lib/music";
import { email, links } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Jono Hey about music licensing, Sketchplanations licensing, or anything else.",
  alternates: { canonical: "/contact" },
};

const linkClass =
  "text-paper underline decoration-edge underline-offset-4 transition-colors hover:decoration-accent";

const topics = [
  {
    title: "Music licensing",
    body: (
      <>
        To use my music in a film, video, podcast or other project, email{" "}
        <a href={`mailto:${email}?subject=Music%20licensing`} className={linkClass}>
          {email}
        </a>{" "}
        with a few details about what you have in mind.
      </>
    ),
  },
  {
    title: "Sketchplanations licensing",
    body: (
      <>
        To use Sketchplanations in a book, course, presentation or product,
        see{" "}
        <a href={links.sketchplanationsLicence} className={linkClass}>
          sketchplanations.com/licence
        </a>
        .
      </>
    ),
  },
  {
    title: "Sheet music",
    body: (
      <>
        Sheet music for solo piano is available in{" "}
        <a href={sheetMusicStore} className={linkClass}>
          my store
        </a>
        . If you have a problem with an order, email me and I&apos;ll sort it
        out.
      </>
    ),
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 pt-6 pb-16 sm:px-8 md:pt-12">
      <Eyebrow>Contact</Eyebrow>
      <h1 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
        Get in touch
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-muted">
        The best way to reach me is by email. I read everything, though it can
        take me a little while to reply.
      </p>
      <a
        href={`mailto:${email}`}
        className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 font-medium text-ink transition-opacity hover:opacity-90"
      >
        {email}
      </a>

      <dl className="mt-14 divide-y divide-line border-y border-line">
        {topics.map((topic) => (
          <div key={topic.title} className="py-6">
            <dt className="font-medium">{topic.title}</dt>
            <dd className="mt-2 leading-relaxed text-muted">{topic.body}</dd>
          </div>
        ))}
      </dl>

      <p className="mt-10 text-muted">
        You can also find me on{" "}
        <a href={links.linkedin} className={linkClass}>
          LinkedIn
        </a>
        .
      </p>
    </div>
  );
}
