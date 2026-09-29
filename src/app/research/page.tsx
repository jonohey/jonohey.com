import type { Metadata } from "next";
import Link from "next/link";
import { Book3D } from "@/components/Book3D";
import { Eyebrow } from "@/components/Eyebrow";
import { JsonLd } from "@/components/JsonLd";
import { siteUrl } from "@/lib/site";
import cover from "../../../public/images/effective-framing-in-design-thesis-cover.jpg";

const thesis = "/files/Hey_Thesis_Effective_Framing_in_Design_Teams_2008.pdf";

const thesisJsonLd = {
  "@context": "https://schema.org",
  "@type": "Thesis",
  name: "Effective Framing in Design",
  author: { "@type": "Person", name: "Jonathan Hey", url: siteUrl },
  inSupportOf: "PhD",
  datePublished: "2008",
  sourceOrganization: {
    "@type": "CollegeOrUniversity",
    name: "University of California, Berkeley",
  },
  url: `${siteUrl}/research`,
  encoding: {
    "@type": "MediaObject",
    contentUrl: `${siteUrl}${thesis}`,
    encodingFormat: "application/pdf",
  },
  image: `${siteUrl}${cover.src}`,
};

export const metadata: Metadata = {
  title: "Research",
  description:
    "Effective Framing in Design — Jono Hey's 2008 PhD thesis from UC Berkeley on how multidisciplinary design teams align on what people really need.",
  alternates: { canonical: "/research" },
};

export default function ResearchPage() {
  return (
    <article className="mx-auto max-w-2xl px-5 pt-6 pb-16 sm:px-8 md:pt-12">
      <JsonLd data={thesisJsonLd} />
      <Eyebrow>PhD thesis · 2008</Eyebrow>
      <h1 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
        Effective Framing in Design
      </h1>
      <p className="mt-4 text-muted">
        My PhD certificate is signed by Arnie 💪 (he was governor of California
        at the time).
      </p>

      <div className="mt-10 flex flex-col gap-10 sm:flex-row sm:items-start">
        <Book3D
          href={thesis}
          cover={cover}
          alt="Effective Framing in Design by Jonathan Hey: read the thesis (PDF)"
          spineTitle="Effective Framing in Design"
          spineAuthor="Hey"
        />
        <div className="space-y-4 leading-relaxed text-muted">
          <p>
            I studied and taught product design at the University of
            California, Berkeley in the San Francisco Bay Area, finishing my
            PhD in 2008.
          </p>
          <p>
            My thesis was about effective framing in design. The central
            challenge, as I saw it, in creating new products that solve real
            needs is aligning a multidisciplinary team — with different skills
            and perspectives — on the core customer needs to solve and how to
            solve them.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={thesis}
              className="inline-flex rounded-full bg-accent px-5 py-2.5 font-medium text-ink transition-opacity hover:opacity-90"
            >
              Read the thesis (PDF)
            </a>
            <Link
              href="/bibliography"
              className="inline-flex rounded-full border border-edge px-5 py-2.5 text-paper transition-colors hover:border-paper"
            >
              Bibliography
            </Link>
          </div>
        </div>
      </div>

      <h2 className="mt-16 font-serif text-2xl tracking-tight">Back cover</h2>
      <p className="mt-4 leading-relaxed text-muted">
        In an age of great opportunity our challenge is no longer just to
        invent technology but to use it in ways that help people, our society
        and the planet. Designers play a key role in deciding how technology is
        used — whether we produce products that end up in landfill, or meet
        people&apos;s needs time and again. This text is one further step
        towards understanding how design teams get on the same page about what
        people really need, the common pitfalls of design teams and how we can
        best avoid them. A number of studies support the development of the
        design path framework together with themes and principles for effective
        design team framing.
      </p>

      <h2 className="mt-16 font-serif text-2xl tracking-tight">
        Related publications
      </h2>
      <ul className="mt-4 space-y-5 leading-relaxed text-muted">
        <li>
          Design Team Framing: Paths and Principles. Hey, J. H. G., Yu, J.,
          Agogino, A. M. Submitted to the Proceedings of the Design Theory and
          Methodology Conference, part of IDETC 2008.
        </li>
        <li>
          <a
            href="/files/Framing_Innovation_JDR07_Hey.pdf"
            className="text-paper underline decoration-edge underline-offset-4 hover:decoration-accent"
          >
            Framing innovation: negotiating shared frames during early design
            phases
          </a>{" "}
          (PDF). Hey, J. H. G., Joyce, C. K., Beckman, S. L. Journal of Design
          Research, Vol. 6, Nos. 1–2, pp. 79–99, 2007. Special Issue on
          Fostering Creativity and Innovation during Early Informal Design
          Phases.
        </li>
        <li>
          <a
            href="/files/DIKW-chain-Hey-2004.pdf"
            className="text-paper underline decoration-edge underline-offset-4 hover:decoration-accent"
          >
            The Data, Information, Knowledge, Wisdom Chain: The Metaphorical
            Link
          </a>{" "}
          (PDF). Hey, J. Course paper, UC Berkeley School of Information,
          2004.
        </li>
      </ul>
    </article>
  );
}
