# Vital Home Based Care — Codex implementation prompt

## Assignment
Build a polished, responsive Next.js website for **Vital Home Based Care & Emergency Services**, using TypeScript, App Router, Tailwind CSS and pnpm. Read `information.md` and `progress.md` before starting. Inspect the existing repository and any AGENTS.md before changing files. Preserve existing work. Use current stable compatible dependencies and the lockfile; do not blindly upgrade an existing application.

The current delivery is an implemented local prototype. Continue to carry changes through design, implementation and verification, updating progress.md with actual results. Do not claim a form, integration or deployment works without verifying it.

## Design reference and ownership
Reference: https://homecare.5thgenerationoutsourcing.com/
Use its approachable homecare journey as inspiration: welcoming hero, about, service overview, reasons to choose care and contact. Create an original Vital design. Do not copy NK branding, prices, testimonials, statistics, staff, contact details or business claims. Do not assume access to its source code or permission to reuse its images.

## Brand direction
- Use the **logo from poster 4**: the blue house/medical cross, caring hands and nurse-cap emblem above the business name. Do not substitute the house-in-hands logo from poster 3 or the Vital Card shield from poster 2.
- Preserve the emblem proportions and blue identity. Obtain a clean original logo if available. For a prototype, a carefully isolated crop from poster 4 may be used; do not use the full poster as the website header. Record any resolution limitation. Do not invent a different emblem.
- Use the approved blue logo and match the website to its colours: navy headings, medical blue, white, very pale blue backgrounds and restrained teal accents. Keep the blue emblem intact.
- Aim for a calm, trustworthy, contemporary healthcare website with generous spacing, large readable headings, warm photography, rounded image crops and restrained shadows. Avoid turning the layout into a crowded poster, excessive medical-cross decorations or a generic dashboard.
- Use a legible font such as locally hosted Inter or Manrope. Give headings clear hierarchy. Teal buttons need verified text contrast; adjust proposed colours as needed.

## Content rules
Use information.md as the business source of truth. The posters are business-supplied evidence, not independent verification of clinical or regulatory claims. Correct spelling and grammar without changing the offered services.
**No prices, cost tables, discounts, promotional percentages, payment checkout or pricing placeholders anywhere.** Use “Discuss your care needs” or “Request a callback” as actions.
Do not fabricate years of experience, client counts, credentials, doctor biographies, reviews, affiliations, outcome guarantees, an office address or ambulance response times. Do not describe stock models as Vital employees. Do not publish Vital Card, cashless insurance or hospital-partnership claims until confirmed. Do not automatically publish the dated November health-facts campaign.

## Pages and sections
Build `/` as a complete landing page, plus `/services`, `/services/[slug]`, `/about` and `/contact`. Add a factual `/privacy` page matching the actual implemented data handling; identify missing operator details before production. Avoid empty navigation destinations.

Homepage sequence:
1. **Header:** logo, Home, About, Services, Contact, and a prominent call action. Accessible mobile menu.
2. **Hero:** heading “Compassionate care, in the comfort of your home.” Short introduction to home care and emergency-service enquiries. Primary “Discuss your care needs” action and secondary “Explore our services”. Strong, warm image of a care professional with an older adult in a home. Display the confirmed service areas without invented statistics.
3. **About:** concise description grounded in the provided services; image of a reassuring home-care conversation. No invented founding story.
4. **Services:** cover every service in information.md. Use image-led cards with a useful summary and a working detail link; 3 columns on larger screens, 2 on medium screens, 1 on narrow screens. Keep the grid readable rather than forcing all text into tiny cards.
5. **Care at home:** explain nursing, caregiver support and post-surgery support using a wide contextual photograph and clear copy. Distinguish services without promising outcomes.
6. **Why Vital:** focus on care in a familiar setting, support for families and access to the listed services. Avoid unverified licensing, partnership and guaranteed availability claims. Use a warm caregiver/family photograph.
7. **FAQ:** concise answers about making an enquiry, requesting care and service availability. No invented medical advice or policies.
8. **Contact:** reproduce the approved four-card, two-column layout with Felix WhatsApp, Nelius WhatsApp, calls and email. The contact page is photograph-free and has no geographic section. Footer repeats contact and useful links without clutter.

Service detail pages must have a relevant service-specific hero image, short overview, enquiry guidance and call/WhatsApp actions. Preserve all 14 service entries, including medical equipment from poster 3. Combine related diagnostics in one clearly described service. Do not imply every test is performed at home; ask visitors to confirm arrangements with the team.

## Image requirements
Use relevant images in each major content section and each service card/detail page. Prefer respectful, natural imagery reflecting Kenyan or African patients, families and professionals. Show clinically plausible situations; avoid distressed patients, graphic procedures and misleading uniforms or branding. Subjects must not be labelled as actual staff or clients without approval.
Select appropriately licensed assets or user-owned photographs; do not scrape the reference site's photographs. Download permitted assets into `public/images/`, record source URL and licence/permission in `public/images/credits.md`, and give files descriptive names. No broken remote URLs or unrelated repeated stock image. If suitable assets cannot be obtained, record the gap honestly; do not call an image placeholder a finished section.
Use next/image with explicit dimensions or stable aspect ratios, responsive sizes, useful alt text and modern compressed files. Prioritise only the hero/LCP image; lazy-load below-fold images. Avoid loading full-resolution poster files as page backgrounds.

## Functional requirements
- Felix: `tel:+254712780902`, WhatsApp `https://wa.me/254712780902`.
- Nelius: `tel:+254702613253`, WhatsApp `https://wa.me/254702613253`.
- Email: `mailto:vital2HBC@gmail.com`.
- WhatsApp can prefill a generic service enquiry, URL-encoded. Do not prefill sensitive medical information. Label the contact selected.
- Add an accessible floating WhatsApp action without obscuring text, footer or keyboard focus.
- Start with direct call, email and WhatsApp enquiries. If a callback form is added, request only name, phone, preferred service and callback preference. Never ask for diagnosis, records or detailed symptoms in this public form. Provide clear privacy text.
- A callback form needs a working server handler, server validation, spam protection, loading/error/success states and environment-variable documentation. Without a delivery provider, omit the form or explicitly mark it unavailable; never display a fake successful submission.
- No payment system, patient portal, database, analytics or medical chatbot is required for the first release.
- Use “Call to discuss availability” for emergency-service enquiries. Do not promise instant dispatch, confirmed attendance or universal 24/7 response based solely on promotional wording. The poster explicitly lists 24-hour nursing care; actual scheduling remains subject to confirmation.

## Engineering and verification
Prefer Server Components; isolate interactive menus/forms into small client components. Keep services, contacts and image metadata in typed data files. Create reusable header, footer, service card and CTA components. Use semantic HTML, keyboard navigation, visible focus, reduced-motion support and accessible menu state.
Provide accurate page metadata, Open Graph assets and sitemap/robots after a real canonical domain is known. Do not invent a domain, address, ratings or opening hours in structured data. Do not add medical advice articles without reviewed content.
Check mobile at 360/390px, tablet at 768px and desktop at 1366px or wider. Verify no overflow, readable image crops, working menus, CTA links, all service routes and no exposed prices or geographic coverage references. Run available lint/type checks and a production build; log actual commands and results. Test form delivery only if implemented. Review the pages visually, not just with a compiler.

## Workflow and handover
Maintain `prompt.md` for implementation requirements, `information.md` for sourced facts and unresolved content, and `progress.md` for completed work, current status, validation and next steps. Never mark unchecked work complete. Keep secrets out of git and provide `.env.example` only when needed.
When implementation is requested, finish the usable website and document any genuine blocker. This planning request alone does not authorise publishing a website or registering a domain.
