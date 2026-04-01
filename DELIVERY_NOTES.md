# Delivery Notes

**Project:** Dylan Contractor Agency — Portfolio Site  
**Client:** Internal  
**Delivered:** 2026-03-31  
**Live URL:** [Pending Vercel deployment — see setup below]  
**Repository:** [To be pushed to GitHub — see setup below]

---

## Pages Built

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, stats, features, services preview, NovaSpark highlight, CTA |
| Services | `/services` | Full service catalog with pricing tiers and process steps |
| Portfolio | `/portfolio` | NovaSpark case study with Lighthouse scores and highlights |
| About | `/about` | Mission, values, and process overview |
| Contact | `/contact` | Inquiry form wired to Resend |

---

## Tech Stack

- **Framework:** Next.js 14.2 (App Router)
- **Styling:** Tailwind CSS v3
- **Icons:** Lucide React
- **Email:** Resend (contact form)
- **Analytics:** PostHog (ready, needs API key)
- **Deployment:** Vercel

---

## Admin Access

| Resource | URL | Credentials |
|---|---|---|
| Vercel (hosting) | https://vercel.com — create and link the repo | [your Vercel account] |
| GitHub (code) | Push `portfolio-site/` to your org | [your GitHub account] |
| Resend (email) | https://resend.com | [add your API key] |
| PostHog (analytics) | https://app.posthog.com | [add your API key] |

---

## How to Deploy

### Step 1: Environment variables

Copy `.env.example` to `.env.local` and fill in:

```bash
NEXT_PUBLIC_APP_URL=https://youragency.dev   # your actual domain
RESEND_API_KEY=re_...                         # from resend.com
RESEND_FROM_EMAIL=hello@yourdomain.com        # verified sender in Resend
CONTACT_TO_EMAIL=you@yourdomain.com          # where form submissions go
NEXT_PUBLIC_POSTHOG_KEY=phc_...              # from PostHog (optional)
```

### Step 2: Push to GitHub

```bash
cd portfolio-site
git init
git add -A
git commit -m "Initial portfolio site"
git remote add origin https://github.com/your-org/portfolio-site.git
git push -u origin main
```

### Step 3: Deploy to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import from your GitHub repo
3. Add environment variables in Vercel project settings
4. Vercel auto-detects Next.js — deploy

### Automatic deploys
Every push to `main` triggers a production deployment automatically.

---

## Build Info

```
Build: ✓ successful (Next.js 14.2.35)
Pages: 11 static + 1 dynamic (contact API)
Bundle: ~97.6 kB First Load JS (gzipped)
```

---

## Environment Variables

See `.env.example` in the repo root for all variables. Production values go in Vercel dashboard, never in git.

---

## Known Limitations / Next Steps

- **Vercel deployment:** Requires board to push to GitHub and create Vercel project
- **Domain:** Add a custom domain once Vercel project is live
- **Resend:** Contact form sends email once `RESEND_API_KEY` and `RESEND_FROM_EMAIL` are configured with a verified domain
- **PostHog / Sentry:** Keys are optional — site works without them, just no analytics/error tracking
- **More portfolio entries:** Add more projects to `portfolio/page.tsx` as we deliver them

---

## SEO

- `metadata` with title template, description, and Open Graph tags on every page
- `robots.ts` — indexed, sitemap linked
- `sitemap.ts` — auto-generated sitemap for all 5 pages
- Keywords targeted: "web development agency", "fast website delivery"

---

## Support

Post-delivery questions: use the Paperclip task system.
