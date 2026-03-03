# CLAUDE.md — Portfolio Website Context

> This file is auto-loaded into Claude's context each session. Update it as decisions are made or context changes.

---

## Project Identity

- **Owner:** Nate Taylor
- **Current role:** Web UX/UI Project Manager, Utah State University
- **Portfolio goal:** Target **UI Designer / Visual Designer / Interaction Designer** roles
- **Site name / brand:** "u-ndefined" (from package.json) — logo is "n8" mark

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | Astro 5 (static output) |
| Styling | Tailwind CSS v4 via `@tailwindcss/vite` |
| Language | TypeScript (tsconfig.json present) |
| Package manager | npm |
| Dev server | `npm run dev` → localhost:4321 |
| Build | `npm run build` → `./dist/` |

---

## Brand Tokens (from `src/styles/global.css`)

| Token | Value |
|---|---|
| `brand-primary` | violet-600 |
| `brand-primary-dark` | violet-800 |
| `brand-secondary` | slate-500 |
| `brand-secondary-dark` | slate-700 |
| `brand-accent` | rose-500 |
| `brand-accent-dark` | rose-700 |
| `brand-neutral-primary-light` | sky-50 |
| `brand-neutral-secondary-light` | rose-100 |
| `brand-neutral-primary-dark` | sky-950 |
| `brand-neutral-secondary-dark` | rose-950 |
| `brand-background-dark` | slate-900 |
| `brand-body-dark` | slate-200 |
| Font (heading) | Trebuchet MS stack |
| Font (body) | System sans-serif stack |

**Custom CSS utilities:**
- `.bg-n8-pattern` — tiled n8 SVG logo background (light + dark variants)
- `.header-text-shadow` — text shadow for hero headings

---

## Public Assets

| File | Use |
|---|---|
| `/n8-logo-solid-1.svg` | Nav logo (active) |
| `/favicon.svg` | Favicon |
| `/footer-banner.png` | Full-width banner above footer (homepage) |
| `/fat-logo-offset-rows copy.svg` | Tile source for `.bg-n8-pattern` |
| Other fat-logo SVGs | Available for decorative use |

---

## Planned Site Structure

```
/                    → Home: elevator pitch, stats strip, case study grid
/about               → Bio, skills section, career timeline, CTA
/contact             → Contact info (no backend form)
/case-studies/[slug] → Individual case study pages (Content Collections)
```

**Navigation links already in place:** Home, About, Projects (→ rename to Case Studies?), Contact

---

## Design Decisions Made

| Decision | Choice | Notes |
|---|---|---|
| Page structure | Multi-page | Not single-scroll |
| Headshot | None yet | Design without photo; use graphic placeholder |
| Case study format | Hybrid | Visual-forward + process narrative |
| Case study data | Astro Content Collections | `src/content/case-studies/*.md` |
| Contact | Info only | No backend form needed |

---

## Homepage Sections (planned order)

1. **Hero** — Name, title, elevator pitch, CTA → "See My Work", branded graphic/SVG accent
2. **Stats Strip** — 3–4 snapshot stats (e.g. years of experience, org, skills)
3. **Selected Work** — `CaseStudyCard` grid, placeholder "Coming Soon" card
4. *(Optional)* **About Teaser** — brief + CTA to `/about`

---

## About Page Sections

1. Page hero (short)
2. Professional bio (2–4 paragraphs)
3. Skills (grouped tags: Tools / Disciplines / Methods)
4. Career timeline (vertical, hardcoded data)
5. CTA → `/contact`

---

## Case Study Frontmatter Schema

```md
---
title: string
description: string       # 1-sentence summary
role: string              # e.g. "UX Project Manager / Lead Designer"
timeline: string          # e.g. "Jan – Jun 2024"
tools: string[]           # ["Figma", "Miro", ...]
tags: string[]            # ["Interaction Design", "Design Systems"]
coverImage: string        # path relative to /public
status: "published" | "coming-soon"
---
```

---

## Implementation Order

1. Add `src/content/config.ts` (Content Collections schema) + placeholder `.md`
2. Rebuild `src/pages/index.astro` (new homepage)
3. Create `src/pages/about.astro`
4. Create `src/pages/contact.astro`
5. Create `src/layouts/CaseStudyLayout.astro` + `src/pages/case-studies/[slug].astro`
6. Update `src/components/Footer.astro` with real links
7. Polish: spacing, responsive, dark mode, transitions

---

## Open Questions / To Revisit

- [ ] Finalize actual stats for the stats strip (years of exp, project count, etc.)
- [ ] Collect case study artifacts and write content
- [ ] Add real LinkedIn, email, GitHub links in footer/contact
- [ ] Decide if "Projects" nav link should be renamed to "Work" or "Case Studies"
- [ ] Consider adding resume PDF download link on About page
