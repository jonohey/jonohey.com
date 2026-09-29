# jonohey.com

Personal site for Jono Hey. Next.js (App Router) + Tailwind CSS, deployed on Vercel.

```bash
pnpm install
pnpm dev
```

- `src/lib/music.ts` — bio, streaming links, sheet music store and the release list (Spotify album IDs, newest first).
- `src/lib/bibliography.ts` — thesis bibliography.
- `public/files/` — research PDFs (URLs kept from the old Hugo site; people link to them).
- `public/sheet-music/` — old free sheet music PDFs, kept so existing links still work.
- `next.config.ts` — redirects (`/zoom`, `/books`).
- Social images: `src/app/opengraph-image.jpg` (site default) and `src/app/music/opengraph-image.tsx` (generated).
