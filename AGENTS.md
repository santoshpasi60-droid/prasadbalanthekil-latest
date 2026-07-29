# AGENTS.md

This document provides an overview of the project structure for developers and AI agents working on this codebase.

## Project Overview

A premium portfolio site for Prasad Balan Thekil (Creative Director / Arrey Waah Entertainment), built with TanStack Start and deployed on Netlify. Visual theme is a black/white/red, Netflix/JioHotstar-inspired presentation of a broadcast and brand-storytelling career.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 (file-based routing) |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 (dark theme, red accent) |
| UI Components | Radix UI + custom components |
| Content | Content Collections (type-safe markdown) |
| Forms | Netlify Forms |
| Language | TypeScript 5.9 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
├── content
│   ├── blog        # News & recognition entries (awards, features, milestones)
│   ├── education    # Education history
│   ├── jobs         # Career timeline entries
│   └── projects     # Showreel entries (brand films, promos, campaigns)
├── public
│   ├── contact.html # Static shadow form Netlify Forms parses at deploy time
│   └── headshot-on-white.jpg
├── src
│   ├── components
│   │   ├── ui       # Card, Badge, Checkbox, Separator, HoverCard
│   │   └── Header.tsx  # Sticky top nav
│   ├── lib/utils.ts # cn() helper
│   ├── routes
│   │   ├── __root.tsx     # Root layout: Header, footer, global head/meta
│   │   ├── index.tsx      # Hero landing page
│   │   ├── resume.tsx     # Career timeline, education, tools, languages
│   │   ├── projects.tsx   # Showreel gallery (YouTube previews)
│   │   ├── news.tsx        # News & recognition list
│   │   ├── news_.$slug.tsx # News & recognition detail (non-nested; the trailing underscore in
  │   │   │                   the filename escapes TanStack Router's automatic layout nesting
  │   │   │                   under news.tsx)
│   │   └── contact.tsx    # Contact page with Netlify form
│   └── styles.css   # Tailwind imports + black/white/red theme tokens
├── content-collections.ts # Zod schemas for jobs, education, blog, projects
├── netlify.toml
└── vite.config.ts
```

## Key Concepts

### File-Based Routing (TanStack Router)

Routes are defined by files in `src/routes/`. A file named `news_.$slug.tsx` (trailing underscore before the dot) creates `/news/$slug` as a standalone route rather than nesting it under `news.tsx` as a layout — this was needed because both a list page (`/news`) and a detail page (`/news/$slug`) exist independently.

### Content Collections

Editing site content (career history, showreel entries, news items) never requires touching route code — just add or edit markdown files under `content/` matching the schema in `content-collections.ts`:

- `jobs` — jobTitle, company, startDate, endDate, location, tags, content
- `education` — school, summary, startDate, endDate, tags, content
- `blog` (rendered as "News & Recognition") — title, date, summary, tags, author, content
- `projects` (rendered as "Showreel") — title, description, tags, liveUrl (YouTube link), github, image, content

The Showreel page extracts a YouTube video ID from `liveUrl` to render a thumbnail preview automatically — no separate image asset is required for video entries.

## Configuration Files

| File | Purpose |
|------|---------|
| `vite.config.ts` | Vite plugins: TanStack Start, Netlify, Tailwind, Content Collections |
| `tsconfig.json` | TypeScript config with `@/*` path alias for `src/*` |
| `netlify.toml` | Build command, output directory, dev server settings |
| `content-collections.ts` | Zod schemas for content frontmatter |
| `styles.css` | Tailwind imports + CSS custom properties (oklch colors, dark black/white/red theme) |

## Development Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
```

## Conventions

### Naming
- Components: PascalCase
- Utilities/hooks: camelCase
- Routes: kebab-case files, TanStack Router dot/underscore notation for nesting control

### Styling
- Tailwind CSS utility classes
- `cn()` helper for conditional class merging
- CSS variables for theme tokens in `styles.css` (dark background, red primary/accent)
- `.font-display` utility class applies the display typeface (Bebas Neue) used for headings

### TypeScript
- Strict mode enabled
- Import paths use `@/` alias
- Zod for runtime validation
- Type-only imports with `type` keyword
