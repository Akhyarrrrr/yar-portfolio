# Yar Portfolio

An archive of Akhyar's bilingual engineering portfolio. It collects web, mobile, and production infrastructure case studies, with English and Indonesian copy, a downloadable CV, and a portfolio assistant.

[Browse the archive](https://yarrr-portfolio.vercel.app/) · [Read the Gilir case study](https://yarrr-portfolio.vercel.app/projects/gilir) · [Download the CV](https://yarrr-portfolio.vercel.app/api/cv)

## Run locally

Use Node.js 22, as configured in CI.

```sh
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). Before publishing, run `npm run lint` for ESLint and TypeScript, then `npm run build` for the production build. Use `npm run start` to preview that build locally.

## Source layout

| Path | Responsibility |
| --- | --- |
| `app/` | Homepage, shared components, project detail routes, metadata, and API handlers |
| `content/profile.ts` | Profile, availability, external links, and skill groups |
| `content/experience.ts` | Bilingual work and education timeline |
| `content/projects/` | Bilingual project records |
| `context/LanguageProvider.tsx` | Language preference and UI translations |
| `lib/` | Content parsing, structured data, the assistant's knowledge base, and rate limiting |
| `public/` | Project media, 3D assets, and the distributed CV |
| `.github/workflows/ci.yml` | Lint, type checks, and production build |

Next.js renders the homepage and project details from the same content. Project records use MDX frontmatter parsed by gray-matter. Add or update case-study fields there and keep the English and Indonesian versions consistent. The supported fields are defined in `lib/content.ts`. The assistant and structured metadata use the same profile and project sources.

The archive homepage is accessible directly. Project detail pages have their own canonical URLs and are listed in [the archive sitemap](https://yarrr-portfolio.vercel.app/sitemap.xml).

### Case-study evidence

- The archived Gilir write-up records a launch without active tenants at the time and a real production payment test through Mayar.
- RWikiStat's 88.26% UMUX score comes from a usability evaluation with 22 Statistics students. Its App Store release is historical and currently unavailable.
- Presence liveness is demonstration-grade. The OJS 3.3 to 3.5 upgrade was tested locally.
- The Web Programming and Software Engineering classes had 44 and 41 enrollments, respectively.

## CV and optional services

Replace `public/cv_akhyar.pdf` with the latest distribution copy when the CV changes. `GET /api/cv` validates the file as a PDF and serves it as a download.

Set up optional integrations in `.env.local` for local development or use project environment variables in Vercel.

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Send mail from the contact form |
| `CONTACT_FROM_EMAIL` | Resend-verified sender |
| `EMAIL_RECEIVER` | Contact form recipient |
| `GROQ_API_KEY` | Enable the portfolio assistant |
| `GROQ_MODEL` | Optional model override, defaults to `openai/gpt-oss-20b` |

Project pages and CV downloads work independently of these integrations. The contact and assistant routes validate requests and rate-limit abuse per server instance.
