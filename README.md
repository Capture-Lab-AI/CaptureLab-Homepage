# Capture Lab homepage

The marketing homepage served at [capture-lab.com](https://capture-lab.com).

One page, built around the positioning: *enterprises can tell you to the dollar
what AI costs them — almost none can tell you what any of it is worth.* The
category is **AI portfolio management** (never "cost management", "observability",
"governance", or "ROI platform"), the metric is **cost per successful outcome**,
and the pitch runs waste → reallocation → propagation, in that order.

## Theme

Ported from `Capture-Lab-AI/Agent-ROI` (itself ported from `prospecting-app`) so
the site and the products read as one company: the sand/umber/pink ramps, the
five-face type system (Libre Caslon Condensed headlines, Inter body, Urbanist
figures), warm elevation, and paper grain. The one divergence: the page commits
to the espresso ground at `:root` and flips individual sections to sand via
`.theme-light`, because a marketing page chooses its look per-section rather
than per-OS.

## Stack

Next.js (App Router) · TypeScript · Tailwind v4 (CSS-first, no config file) ·
[motion](https://motion.dev) for animation. Animations respect
`prefers-reduced-motion`.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # must pass before deploying
npm run typecheck
```

## Deploy

Vercel, project `capturelab-homepage` on the Capture Lab team. DNS lives in AWS
Route53 (`capture-lab.com` hosted zone): the apex A record points at Vercel
(`76.76.21.21`) and `www` CNAMEs to `cname.vercel-dns.com`.
