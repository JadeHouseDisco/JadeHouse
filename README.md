# JadeHouse

Personal and professional portfolio built with Next.js, React, TypeScript, and Tailwind CSS.

## Local development

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env.local` and configure the contact-form services.
3. Run `npm run dev` and open <http://localhost:3000>.

## Quality checks

- `npm run lint` — ESLint, with warnings treated as failures.
- `npm run typecheck` — strict TypeScript validation.
- `npm run build` — optimized production build and static route generation.

## Contact form

The contact endpoint requires Cloudflare Turnstile, Upstash Redis, and a Resend API key. Redis enforces burst, per-IP daily, and global daily limits. `CONTACT_ALLOWED_ORIGINS` accepts a comma-separated list and defaults to the production JadeHouse domains.
