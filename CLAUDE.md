# Hale Textile Studio — CLAUDE.md

## Project
Next.js 16 (App Router) website for a premium textile studio client. Luxury editorial aesthetic.

## Tech Stack
- **Next.js 16** with App Router, TypeScript
- **Tailwind CSS v4** — config lives in `app/globals.css` via `@theme` (no `tailwind.config.js`)
- **Shadcn/ui** — components in `components/ui/`
- **Framer Motion** — all animations; cubic bezier eases must be typed as `[number, number, number, number]`
- **Fonts** — Cormorant Garamond (display/headlines, `--font-cormorant`) + Jost (body, `--font-jost`)

## Design System

### Colors (CSS variables in `globals.css`)
| Token | Hex | Use |
|---|---|---|
| `--terracotta` | `#d4614a` | Primary accent, CTAs, eyebrows |
| `--navy` | `#0A2A3A` | Dark sections, headings |
| `--cream` | `#F7F3EE` | Section backgrounds |
| `--warm-white` | `#FBF9F6` | Page background |
| `--sand` | `#E8DECE` | Subtle fills |
| `--linen` | `#D4C9B8` | Borders, dividers |
| `--warm-gray` | `#8A7F74` | Body copy, labels |

### Typography conventions
- Headlines: `font-display` (Cormorant Garamond), `font-light`, tight leading
- Eyebrows: `font-body text-[10px] tracking-[0.35em] uppercase text-terracotta`
- Body: `font-body text-sm font-light text-warm-gray leading-relaxed`
- Nav/labels: `font-body text-[11px] tracking-[0.2em] uppercase font-medium`

### Shared components
- `AnimatedSection` — scroll-triggered fade/reveal wrapper, accepts `delay`, `direction`
- `TextileDivider` — woven SVG rule divider, variants: `default | light | dark`
- `TextileMotif` — SVG herringbone corner decoration, used at low opacity
- `PageHero` — reusable inner-page hero, accepts `eyebrow`, `headline`, `subheadline`, `dark`

## Pages
| Route | File |
|---|---|
| `/` | `app/page.tsx` |
| `/fabric-library` | `app/fabric-library/page.tsx` |
| `/wallpaper` | `app/wallpaper/page.tsx` |
| `/accessories` | `app/accessories/page.tsx` |
| `/partner-program` | `app/partner-program/page.tsx` |
| `/about` | `app/about/page.tsx` |
| `/contact` | `app/contact/page.tsx` |

## Images
- Hero: `public/hero-image-new.jpg`
- Studio grid: `public/section/*.jpg` (6 images, used in `StudioGrid` on homepage)
- Placeholder `bg-*` classes used throughout until client provides real images

## Key Conventions
- No comments unless the WHY is non-obvious
- No new pages without adding the route to `Navbar.tsx`, `MobileMenu.tsx`, and `Footer.tsx`
- All inner pages use `PageHero` at the top and end with `MailingList`
- Dark sections use `bg-navy textile-bg`; light sections alternate `bg-warm-white` / `bg-cream textile-bg-cream`
- Framer Motion ease arrays: always cast as `[number, number, number, number]`

## Pending
- Replace remaining placeholder `bg-*` image slots with real photos (client providing)
- Wire `MailingList` to Mailchimp
- Update fictional address in `Footer.tsx`, `About`, and `Contact` pages
- Add real About/founder copy
