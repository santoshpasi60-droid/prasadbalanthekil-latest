# Arrey Waah — Prasad Balan Thekil Portfolio

A premium, Netflix/JioHotstar-inspired portfolio site for Prasad Balan Thekil — Creative Director, Senior Supervising Promo Editor, and founder of Arrey Waah Entertainment. Built to present a 20-year career in television promotions, brand storytelling, and AI-powered content creation.

## Key Technologies

- **TanStack Start** (file-based routing, SSR) on **React 19**
- **Vite 7** build tooling
- **Tailwind CSS 4** with a custom black / white / red theme
- **Content Collections** for type-safe markdown (career timeline, showreel projects, news & recognition)
- **Netlify Forms** for the contact form
- Deployed on **Netlify**

## Pages

- `/` — hero landing page with summary, core expertise, and key achievements
- `/resume` — career timeline, education, software & tools, languages
- `/projects` — showreel of brand films, promos, and campaigns with YouTube previews
- `/news` — news & recognition (awards, features, milestones)
- `/contact` — contact details and a Netlify-powered contact form

## Running Locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Content

All career, project, and news content lives in `content/` as markdown files with frontmatter validated by `content-collections.ts`. Edit or add files there to update the site — no code changes required.
