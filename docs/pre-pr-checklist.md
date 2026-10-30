# Pre-PR checklist

Agents: work through this before opening any PR. Review your own diff (`git diff origin/main...HEAD`) against each item and fix problems first. In the PR description, note anything you deliberately skipped and why.

## 1. Checks pass

- `pnpm lint` is clean.
- `pnpm build` succeeds (this also type-checks). Fix warnings you introduced.
- For UI changes, run the dev server and look at the result at mobile (375px) and desktop widths, in light and dark if the site supports both. Check the browser console for errors.

## 2. Accessibility

- Use semantic elements (`button` for actions, `a` for navigation, real headings in order, `nav`/`main`/`footer` landmarks). No clickable `div`s.
- Every image has meaningful `alt` text, or `alt=""` if purely decorative. Icon-only controls have an accessible name.
- Everything works by keyboard: logical tab order, visible focus styles (don't remove outlines without a replacement), dialogs/lightboxes trap and restore focus and close on Escape.
- Text and interactive elements meet WCAG AA contrast. Tap targets are comfortably large on mobile.
- Respect `prefers-reduced-motion` for any new animation or transition.
- Third-party embeds (e.g. Spotify) have a descriptive `title`.

## 3. Performance

- Default to Server Components. Only add `"use client"` where state, effects or browser APIs are needed, and keep the client boundary as small as possible.
- Use `next/image` with correct `width`/`height` or `sizes`, and `priority` only for above-the-fold LCP images. Use `next/font` rather than font `<link>`s.
- Lazy-load below-the-fold embeds and heavy components. Avoid layout shift (reserve space for images and embeds).
- Don't add large dependencies or ship big data/assets to the client when they could stay on the server.
- Prefer static rendering; don't opt a route into dynamic rendering without a reason.

## 4. Security

- No secrets, tokens or deploy hooks in code, commits or `NEXT_PUBLIC_*` variables.
- External links that open a new tab use `rel="noopener noreferrer"`.
- No `dangerouslySetInnerHTML` unless the content is fully trusted; JSON-LD must be serialized safely (escape `<`).
- Validate and sanitise any user-controlled input (query params, form data). Redirect targets must not be user-controlled.
- Third-party iframes/scripts come only from origins we already use, with the minimum permissions (`allow`, `sandbox`) they need.

## 5. No unused or leftover code

- Remove anything left from earlier iterations of this change: dead components, unused props, exports, imports, types, state, helper functions, commented-out code, `console.log`s, TODOs you didn't intend to leave.
- **CSS**: every rule, custom property, keyframe and Tailwind `@apply`/`@theme` addition must be used. Search for each new class/variable to confirm. Delete duplicate or overridden rules and merge near-identical ones. If a later tweak made an earlier one redundant, remove the earlier one rather than layering on top of it.
- Remove unused files and assets (`public/`, images, fonts) you added or orphaned, but never delete files under `public/files/` or `public/sheet-music/`: external links depend on them.
- The diff contains only changes related to the task. Revert incidental reformatting and unrelated edits.

## 6. Reuse what's already here

- Before writing anything new, look for an existing component (`src/components`), helper or data module (`src/lib`), CSS convention or Tailwind pattern that already does the job, and use or extend it.
- Don't add a dependency for something the platform, Next.js, React or the current dependencies already provide. If a new dependency really is warranted, justify it in the PR description.
- Follow the file layout, naming and style of the surrounding code. Match comment density.
- Content like releases and bibliography lives in `src/lib/*` data files, not hard-coded in components.

## 7. Code quality

- TypeScript: no `any`, no unnecessary type assertions or `!`. Let types flow from data where possible.
- Keep components small and single-purpose; derive values instead of duplicating them in state; keep effects minimal and with correct dependencies and cleanup.
- Stable `key`s for lists (not array index when order can change).
- Prefer Tailwind utilities consistent with existing usage over ad-hoc inline styles or new CSS files.
- Style mobile first: write the base styles for small screens, then layer on `sm:`/`md:`/`lg:` overrides for larger ones. Avoid `max-*` breakpoints and desktop-first overrides that need undoing on mobile.
- Comments explain *why*, not what. No narration of the change itself.

## 8. SEO

- One `h1` per page, with headings nested in order (no skipping levels for styling; use classes for that).
- Use semantic elements so crawlers can understand the page: `header`, `nav`, `main`, `article`/`section` (with a heading), `footer`, lists for lists, `figure`/`figcaption` for captioned images.
- Each page has a unique `<title>` and meta description via `metadata`, plus a canonical URL and Open Graph/Twitter tags.
- Important content is rendered on the server as real HTML, not injected client-side after load.
- Links have descriptive text (not "click here"), and internal links use `next/link`.
- Add or update structured data (JSON-LD, using the existing `JsonLd` component) where it fits, e.g. `Person`, `MusicAlbum`/`MusicRecording`, `Article`, `BreadcrumbList`. Keep it accurate and in sync with the visible page.
- New public pages are in `sitemap.ts` and not blocked by `robots.ts`. Pages that shouldn't be indexed are marked `noindex`.
- Image `alt` text is descriptive, and file names are meaningful where we control them.

## 9. Site-specific

- Existing URLs keep working. If a route or file moves, add a redirect in `next.config.ts`.
- Links and external URLs in changed content are correct (click through new ones).
- Release additions follow the steps in `AGENTS.md`.
