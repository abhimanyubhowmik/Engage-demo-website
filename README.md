# ENGAGE website

Redesigned website for **ENGAGE — Educating Europe’s Future Engineers for the Next Generation of Mobile Working Machines**, a
Marie Skłodowska-Curie Doctoral Network (Grant Agreement No. 101226234).

Built with [Astro](https://astro.build) as a fully static site: no CMS, no cookies, no third-party scripts or fonts.
Content lives in plain Markdown and TypeScript files, so adding a doctoral candidate or a news story is a single file.

## Pages

| Route | What it shows |
| --- | --- |
| `/` | Hero whose headline word, background image and industry tab change together (forestry, construction & mining, agriculture, logistics), numbers, industries, research objectives, DC carousel, consortium map, news, network figure and partner logos |
| `/research/` | The four research objectives with their doctoral projects, and how ENGAGE trains |
| `/doctoral-candidates/` | All DCs with filters (theme, industry, host country, free-text search; filters are kept in the URL) |
| `/doctoral-candidates/dc01/` … `dc13/` | One profile page per DC: project, background, supervision team, host, industrial partner |
| `/supervisors/` | Academic and industrial supervisors with photo/monogram, institution, short bio, links and the DCs they supervise |
| `/consortium/` | Interactive map of Europe with beneficiaries and associated partners, DC collaboration lines, and a partner directory |
| `/news/` and `/news/<slug>/` | Featured story, category filter, events timeline, photo wall; articles with a photo gallery and lightbox |
| `/contact/`, `/recruitment/`, `/imprint/`, `/privacy-policy/` | Contact, position status and legal pages |

## Editing content

| To change… | Edit |
| --- | --- |
| A doctoral candidate | `src/content/dcs/dcXX.md` (front matter: name, photo, title, host, partners, supervisors, theme, industries, keywords, text) |
| A supervisor | `src/data/supervisors.ts` — DCs are linked automatically from each DC’s `supervisors` list |
| A beneficiary / partner, or a map marker | `src/data/partners.ts` (`lat`/`lon` place the marker; partners in the same city are grouped) |
| News and events | add a Markdown file to `src/content/news/` (cover image, category, optional `gallery`) |
| Contacts, funding text, navigation, research themes, industries (label, blurb, hero image, headline words) | `src/data/site.ts` |
| Colours of the green and blue themes | the `:root[data-theme=…]` blocks at the top of `src/styles/global.css` |

Images live in `public/images/`:

- `people/` — DC portraits (3:4); `people/supervisors/` — supervisor portraits (square). Set `photo` on a DC or supervisor; without one, a monogram is shown.
- `news/` — event photos. `logos/` — partner logos. `brand/` — the ENGAGE wordmark, the brain-and-gear icon, the network figure and favicons.
- `photos/` — the industry key visuals (`hero-*.webp`, portrait) used by the home hero and industry tiles. `generated/` — procedural point-cloud artwork used for the research themes.

## Themes

The switch in the header toggles between the **blue** (navy, default) and **green** (forest) theme. The logo is the same in both:
the header shows the brain-and-gear icon next to the ENGAGE wordmark, the footer shows the complete ENGAGE logo. A visitor’s choice is remembered in their browser.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run check    # type-check
npm run build    # static site in dist/
```

## Deploy

- **Own domain / any static host:** `npm run build` and upload `dist/`.
- **GitHub Pages:** in *Settings → Pages*, set *Source* to **GitHub Actions**. `.github/workflows/deploy.yml` builds and deploys on
  every push to `main` (or run it manually). The workflow sets `SITE_URL`/`BASE_PATH` so links work under `/<repo>/`.
