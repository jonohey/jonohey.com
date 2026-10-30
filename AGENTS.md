<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Before opening a PR

Follow `docs/pre-pr-checklist.md` first: lint/build, accessibility, performance, security, SEO, mobile-first styling, no unused code or CSS bloat, and reuse of existing patterns.

## Adding a music release

Add the new entry at the top of `releases` in `src/lib/music.ts` (newest first, Spotify album ID). Give it `latest: true` so its embed uses Spotify's coloured theme, and remove `latest` from the previous release so only one embed is highlighted.
