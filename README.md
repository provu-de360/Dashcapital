# Dash Capital — Next.js Website

A simple, beginner-friendly recreation of the Dash Capital website
(https://dashcapital.in/), built with Next.js App Router + TypeScript.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.

## Project structure

```
app/            → pages (routes), one folder per URL
  page.tsx        → homepage (/)
  about/          → /about
  contact/        → /contact
  blog/           → /blog and /blog/[slug]
  services/       → /services and /services/[slug]
  layout.tsx      → wraps every page with Header + Footer
  globals.css     → all site-wide styles + color variables

components/     → small, reusable UI pieces (Header, Hero, ServiceCard, etc.)

data/           → all editable content lives here as plain arrays/objects
  services.ts     → the 7 products shown in the header dropdown, homepage, /services
  team.ts         → team members shown on /about
  faq.ts          → FAQ shown on the homepage
  blog.ts         → blog posts shown on /blog

public/images/  → placeholder SVG images — swap these for real photos any time
```

## How to make common changes

- **Add a new service:** add one object to `data/services.ts`. It will
  automatically show up in the header dropdown, the homepage, and get its
  own page at `/services/your-slug`.
- **Add a new blog post:** add one object to `data/blog.ts`.
- **Change colors:** edit the CSS variables at the top of `app/globals.css`
  (`--primary-color`, `--secondary-color`, etc).
- **Replace placeholder images:** drop your real image into `public/images/...`
  and update the matching `image` path in the relevant `data/*.ts` file.
- **Connect the contact form to email/a backend:** open
  `components/ContactForm.tsx` and edit the `handleSubmit` function — right
  now it only logs to the console.

## Notes

- All images are placeholder SVGs generated for this project (no
  copyrighted photos were used). Replace them with your own licensed
  photography before going live.
- The color palette (navy blue + gold) was chosen to match the general
  look of the original Dash Capital site — adjust the variables in
  `globals.css` to fine-tune it further.
# Dashcapital
