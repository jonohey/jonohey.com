import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Book3D } from "@/components/Book3D";
import { Eyebrow } from "@/components/Eyebrow";
import { links } from "@/lib/site";
import bookCover from "../../public/images/big-ideas-little-pictures-book-cover.jpg";
import portrait from "../../public/images/jono-hey-portrait.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const sections = [
  {
    href: links.sketchplanations,
    title: "Sketchplanations",
    body: "Explaining the world one sketch at a time.",
  },
  {
    href: links.book,
    title: "Big Ideas Little Pictures",
    body: "My book of sketches that make big ideas simple.",
  },
  {
    href: "/music",
    title: "Music",
    body: "Melodic, atmospheric piano and more. Stream it or play it yourself.",
  },
  {
    href: "/research",
    title: "Research",
    body: "My PhD thesis, Effective Framing in Design, from UC Berkeley.",
  },
  {
    href: "/contact",
    title: "Contact",
    body: "Licensing, sheet music, or just to say hello.",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-5 pt-6 pb-16 sm:px-8 md:pt-12">
      <section className="grid gap-12 md:grid-cols-[15rem_1fr] md:items-center md:gap-16">
        <div className="md:order-2">
          <h1 className="font-serif text-5xl tracking-tight sm:text-6xl">
            Jono Hey
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
            Experienced product, UX, design and startup leader based in London.
            I explain ideas with sketches, write music for piano, and try to
            leave things better than I found them.
          </p>
          <ul className="mt-10 divide-y divide-line border-y border-line">
            {sections.map((section) => (
              <li key={section.href}>
                <Link
                  href={section.href}
                  className="group flex items-baseline justify-between gap-6 py-4"
                >
                  <span>
                    <span className="block font-medium group-hover:text-accent">
                      {section.title}
                    </span>
                    <span className="mt-1 block text-sm text-muted">
                      {section.body}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className="text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={links.linkedin}
            className="mt-4 inline-block font-medium underline decoration-line underline-offset-4 transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
        </div>
        <Image
          src={portrait}
          alt="Jono Hey smiling with arms folded, leaning against a white wall"
          priority
          placeholder="blur"
          quality={90}
          sizes="(min-width: 768px) 240px, 176px"
          className="aspect-[4/5] w-44 rounded-2xl object-cover object-top md:order-1 md:w-full"
        />
      </section>

      <section
        aria-labelledby="book-heading"
        className="mt-20 grid items-center gap-12 border-t border-line pt-16 md:grid-cols-[auto_1fr] md:gap-20"
      >
        <div className="flex justify-center md:justify-start md:pl-6">
          <Book3D
            href={links.book}
            cover={bookCover}
            alt="Big Ideas Little Pictures by Jono Hey: find out more about the book"
            spineTitle="Big Ideas Little Pictures"
            spineAuthor="Jono Hey"
            width={220}
            thickness={34}
            spineClassName="bg-[linear-gradient(90deg,#e6dcc0,#f5eed9_45%,#ebe2c8)] text-[#b1262b]"
            backColor="#f3ecd6"
          />
        </div>
        <div>
          <Eyebrow>My book</Eyebrow>
          <h2
            id="book-heading"
            className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl"
          >
            Big Ideas Little Pictures
          </h2>
          <figure className="mt-6">
            <blockquote className="font-serif text-xl leading-relaxed sm:text-2xl">
              <p>
                &ldquo;This is such a cool book. The range of Jono&rsquo;s
                knowledge is astounding, and so is his ability to digest complex
                ideas into deceptively simple drawings. You&rsquo;ll learn
                something on every page—and be entertained too.&rdquo;
              </p>
            </blockquote>
            <figcaption className="mt-4 text-muted">— Bill Gates</figcaption>
          </figure>
          <a
            href={links.book}
            className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 font-medium text-ink transition-opacity hover:opacity-90"
          >
            Get the book
          </a>
        </div>
      </section>
    </div>
  );
}
