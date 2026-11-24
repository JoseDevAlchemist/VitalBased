# Vital Home Based Care & Emergency Services

VitalBased is a public website for patients, relatives and caregivers. It describes 14 healthcare and emergency services and provides two direct phone and WhatsApp contacts, plus email. The app uses Next.js 16.4.3, React 19.3.0, TypeScript 5, Tailwind CSS 4 and pnpm 12.9.1.

## Run locally

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open `http://localhost:3000`. Use `pnpm lint` for ESLint, `pnpm build` for the production build and `pnpm start` to serve it. Run `pnpm exec tsc --noEmit` after a build when checking generated route types. The app has no required environment variables or dedicated test script.

## Routes and content

| Route | Content |
| --- | --- |
| `/` | Home healthcare introduction, six featured services, About Vital, FAQs and direct contact actions |
| `/about` | Company introduction and practical guidance on discussing care |
| `/services` | Responsive catalogue with 14 service cards, individual anchors and direct contact actions |
| `/contact` | A directory with separate phone and WhatsApp links for each contact and a single email link |
| `/privacy` | How the site and its direct contact channels handle information |

The website has five public pages. Next.js returns a permanent HTTP 308 redirect from each former `/services/<slug>` URL to its matching `/services#<slug>` catalogue entry. The homepage previews six catalogue cards and links to the full Services page. The route source, anchor and redirect all use the same slug.

| Service | Anchor and legacy slug |
| --- | --- |
| Doctor’s home visits | `doctors-home-visits` |
| 24-hour nursing care | `24-hour-nursing-care` |
| Laboratory tests | `laboratory-tests` |
| Physiotherapy services | `physiotherapy` |
| Diagnostic services | `diagnostic-services` |
| Health education | `health-education` |
| Maternal and neonatal care | `maternal-neonatal-care` |
| Palliative care | `palliative-care` |
| Basic first aid | `basic-first-aid` |
| Outreach services | `outreach-services` |
| Ambulance services | `ambulance-services` |
| Caregiver support | `caregiver-support` |
| Post-surgery care | `post-surgery-care` |
| Medical equipment | `medical-equipment` |

## Editing the site

- [Service and contact data](app/lib/site-data.ts) holds service titles, catalogue descriptions, image descriptions and shared contact details. Keep existing slugs stable so old links and bookmarks still resolve. The homepage selects its featured services by slug in [app/page.tsx](app/page.tsx).
- [Shared metadata](app/lib/metadata.ts) sets a page-specific title, description and Open Graph fields. The Services page has a single title and description for the catalogue. The root layout sets the site name and British English language. Canonical URLs, an Open Graph image URL, robots and sitemap configuration await a confirmed production origin.
- [Shared shell](app/components/page-shell.tsx) renders the header, accessible main landmark and footer. The client header uses active navigation and a mobile disclosure with Escape handling. The FAQ uses native details and summary elements.
- [Global CSS](app/globals.css) holds the navy, teal, sage and ivory tokens, responsive layouts and reduced-motion rules. [Local fonts](app/fonts) and their licences ship with the app. [Local imagery and credits](public/images/credits.md) document the original logo, licensed stock photos and generated WebP placeholders.
- [Business information](Propmts/information.md) records poster-derived facts and publication boundaries. [Progress](Propmts/progress.md) records implementation history, verification and open questions.

## Contact links

| Number shown | Phone | WhatsApp destination |
| --- | --- | --- |
| 0712 780 902 | `tel:+254712780902` | `https://wa.me/254712780902` |
| 0702 613 253 | `tel:+254702613253` | `https://wa.me/254702613253` |

Both WhatsApp links use the shared URL builder and prefill “Hello VitalBased Homecare, I have an inquiry to make.” The visitor sends the message in WhatsApp. Email opens `mailto:vital2HBC@gmail.com`. The site has no application API, accounts, contact form, booking, payments or analytics integration.

## Build notes

The repository enables Cache Components, partial prefetching and experimental agent feedback. Tailwind uses the existing Turbopack rule and PostCSS configuration. See [the progress log](Propmts/progress.md) for the environment-specific verification results and the earlier production CSS incident.
