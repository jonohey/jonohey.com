"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { SpotifyEmbed } from "@/components/SpotifyEmbed";
import type { CoverArt } from "@/lib/cover-art";
import type { Release } from "@/lib/music";

export type ReleaseWithCover = { release: Release; cover: CoverArt };

const linkClass =
  "text-accent underline decoration-edge underline-offset-4 transition-colors hover:decoration-accent";

function ExternalLink({
  href,
  label,
  title,
  suffix,
}: {
  href: string;
  label: string;
  title: string;
  suffix: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={linkClass}
    >
      {label}
      <span className="sr-only">
        {" "}
        of {title} {suffix} (opens in a new tab)
      </span>
    </a>
  );
}

function PurchaseLinks({ release, cover }: ReleaseWithCover) {
  if (!cover.printsUrl && !cover.sheetMusicUrl) return null;
  return (
    <p className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-sm">
      {cover.printsUrl && (
        <ExternalLink
          href={cover.printsUrl}
          label="Prints"
          title={release.title}
          suffix="on Redbubble"
        />
      )}
      {cover.sheetMusicUrl && (
        <ExternalLink
          href={cover.sheetMusicUrl}
          label="Sheet music"
          title={release.title}
          suffix="on the Spotify store"
        />
      )}
    </p>
  );
}

export function ReleaseGrid({ items }: { items: ReleaseWithCover[] }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<ReleaseWithCover | null>(null);

  useEffect(() => {
    const el = dialog.current;
    if (selected && el && !el.open) el.showModal();
  }, [selected]);

  return (
    <>
      <ul className="grid gap-x-8 gap-y-14 md:grid-cols-2">
        {items.map((item) => {
          const { release, cover } = item;
          return (
            <li key={release.spotifyId}>
              <button
                type="button"
                onClick={() => setSelected(item)}
                aria-label={`View ${release.title} cover artwork full screen`}
                className="block w-full cursor-zoom-in overflow-hidden rounded-xl border border-line"
              >
                <Image
                  src={cover.image}
                  alt={`Cover artwork for ${release.title} by Jono Hey`}
                  placeholder="blur"
                  sizes="(min-width: 1024px) 480px, (min-width: 768px) 45vw, 100vw"
                  className="aspect-square w-full object-cover"
                />
              </button>
              <div className="mt-3">
                <SpotifyEmbed
                  id={release.spotifyId}
                  title={release.title}
                  highlight={release.latest}
                  height={152}
                />
              </div>
              <h3 className="mt-3 font-medium text-paper">{release.title}</h3>
              <p className="mt-1 text-sm text-muted">
                {release.type} · {release.year} · {cover.location}
              </p>
              <div className="mt-2 [&>p]:justify-start">
                <PurchaseLinks {...item} />
              </div>
            </li>
          );
        })}
      </ul>
      <dialog
        ref={dialog}
        aria-label={selected ? `${selected.release.title} cover artwork` : undefined}
        onClose={() => setSelected(null)}
        onClick={(e) => {
          if (!(e.target as HTMLElement).closest("img, a")) e.currentTarget.close();
        }}
        className="fixed inset-0 m-0 h-dvh max-h-none w-dvw max-w-none cursor-zoom-out bg-ink p-0 text-paper backdrop:bg-transparent"
      >
        {selected && (
          <div className="flex h-full flex-col items-center justify-center gap-4 p-4 sm:p-8">
            <Image
              src={selected.cover.image}
              alt={`Cover artwork for ${selected.release.title} by Jono Hey`}
              quality={90}
              sizes="(min-width: 640px) 85vh, 100vw"
              className="aspect-square max-h-[80dvh] w-auto max-w-full cursor-default object-contain"
            />
            <p className="text-center text-sm text-muted">
              {selected.release.title} · {selected.cover.location}
            </p>
            <PurchaseLinks {...selected} />
          </div>
        )}
        <button
          type="button"
          onClick={() => dialog.current?.close()}
          aria-label="Close"
          className="absolute top-4 right-4 flex size-11 cursor-pointer items-center justify-center rounded-full border border-edge bg-panel text-xl text-paper transition-colors hover:border-accent hover:text-accent"
        >
          <span aria-hidden>✕</span>
        </button>
      </dialog>
    </>
  );
}
