import type { Metadata } from "next";
import Image from "next/image";
import { Eyebrow } from "@/components/Eyebrow";
import { JsonLd } from "@/components/JsonLd";
import { SpotifyEmbed } from "@/components/SpotifyEmbed";
import {
  latestReleasesPlaylist,
  releases,
  sheetMusicStore,
  streamingLinks,
} from "@/lib/music";
import { email, links, siteUrl } from "@/lib/site";
import portrait from "../../../public/images/jono-hey-composer-black-and-white.jpg";
import sheetMusic from "../../../public/images/let-go-reprise-sheet-music.jpg";

const description =
  "Melodic, atmospheric piano music by London-based composer Jono Hey. Listen on Spotify, Apple Music, YouTube Music, Amazon Music and Bandcamp, or buy the sheet music and play it yourself.";

export const metadata: Metadata = {
  title: { absolute: "Jono Hey Music — Piano Music and Sheet Music" },
  description,
  alternates: { canonical: "/music" },
  openGraph: { title: "Jono Hey Music", description, url: "/music" },
};

const musicJsonLd = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: "Jono Hey",
  url: `${siteUrl}/music`,
  genre: ["Modern classical", "Piano", "Ambient"],
  foundingLocation: { "@type": "Place", name: "London, United Kingdom" },
  member: { "@id": `${siteUrl}/#person` },
  sameAs: streamingLinks.map((link) => link.href),
  album: releases.map((release) => ({
    "@type": "MusicAlbum",
    name: release.title,
    datePublished: String(release.year),
    albumReleaseType:
      release.type === "Single"
        ? "https://schema.org/SingleRelease"
        : release.type === "EP"
          ? "https://schema.org/EPRelease"
          : "https://schema.org/AlbumRelease",
    url: `https://open.spotify.com/album/${release.spotifyId}`,
  })),
};

const linkClass =
  "text-paper underline decoration-edge underline-offset-4 transition-colors hover:decoration-accent";

export default function MusicPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 pb-16 sm:px-8">
      <JsonLd data={musicJsonLd} />
      <section className="grid gap-10 pt-6 md:grid-cols-[15rem_1fr] md:gap-16 md:pt-12">
        <div className="self-center md:order-2">
          <h1 className="font-serif text-5xl tracking-tight sm:text-6xl">
            Music
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Melodic, atmospheric music rooted in the piano, somewhere between
            classical and modern.
          </p>
          <h2 className="mt-10 text-sm tracking-[0.2em] text-accent uppercase">
            Listen on
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {streamingLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="flex h-full min-h-12 w-full items-center rounded-xl border border-edge bg-panel px-4 py-3 leading-snug font-medium text-paper transition-colors hover:border-accent hover:text-accent"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={portrait}
          alt="Black and white portrait of Jono Hey outdoors"
          priority
          placeholder="blur"
          quality={90}
          sizes="(min-width: 768px) 240px, 176px"
          className="aspect-square w-44 self-center rounded-2xl object-cover md:order-1 md:w-full"
        />
      </section>

      <section className="mt-20">
        <SectionHeading eyebrow="New music" title="Latest releases" />
        <SpotifyEmbed
          kind="playlist"
          id={latestReleasesPlaylist}
          title="Latest releases playlist"
          height={452}
        />
      </section>

      <section className="mt-20 grid overflow-hidden rounded-2xl border border-line bg-panel md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_3fr]">
        <div className="relative aspect-[4/3] md:aspect-auto">
          <Image
            src={sheetMusic}
            alt="Printed sheet music for Let Go (Reprise) by Jono Hey, open on a wooden table beside a mug"
            fill
            placeholder="blur"
            sizes="(min-width: 1024px) 240px, (min-width: 768px) 33vw, 100vw"
            className="object-cover object-[center_40%]"
          />
        </div>
        <div className="self-center p-8 sm:p-12">
          <Eyebrow>Sheet music</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
            Play it yourself
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            I&apos;ve created sheet music for solo piano for many of my pieces.
            Available to buy as downloadable PDFs for you or a piano player you
            know.
          </p>
          <a
            href={sheetMusicStore}
            className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 font-medium text-ink transition-opacity hover:opacity-90"
          >
            Buy sheet music
          </a>
        </div>
      </section>

      <section className="mt-20">
        <SectionHeading eyebrow="Discography" title="Releases" />
        <ul className="grid gap-6 md:grid-cols-2">
          {releases.map((release) => (
            <li key={release.spotifyId}>
              <p className="mb-2 text-sm text-muted">
                {release.title} · {release.type} · {release.year}
              </p>
              <SpotifyEmbed id={release.spotifyId} title={release.title} />
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-20 max-w-2xl">
        <SectionHeading eyebrow="About" title="Between classical and modern" />
        <div className="space-y-5 leading-relaxed text-muted">
          <p>
            My influences range from modern classical and film composers to
            electronic and ambient — artists like Ludovico Einaudi, Tony
            Anderson, Hans Zimmer, Philip Glass, Gibran Alcocer, Borrtex and
            Above &amp; Beyond. My first album, Fresh Start, brought together
            pieces written over a decade, and I&apos;ve also collaborated with{" "}
            <a
              href="https://open.spotify.com/artist/4zllvElH16KlgTqRstwYIb"
              className={linkClass}
            >
              Sneijder
            </a>
            .
          </p>
          <p>
            Beyond music, I&apos;m the creator of{" "}
            <a href={links.sketchplanations} className={linkClass}>
              Sketchplanations
            </a>
            , where I explain the world one sketch at a time, and the author of{" "}
            <a href={links.book} className={linkClass}>
              Big Ideas Little Pictures
            </a>
            , a book that distils complex ideas into simple, insightful
            sketches.
          </p>
          <p>
            For licensing, contact{" "}
            <a href={`mailto:${email}`} className={linkClass}>
              {email}
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-6">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-2 font-serif text-3xl tracking-tight">{title}</h2>
    </div>
  );
}
