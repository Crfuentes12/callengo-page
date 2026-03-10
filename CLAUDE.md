# CLAUDE.md — Callengo Landing Page

> Full context document for AI-assisted development on the Callengo marketing website.

---

## Project Overview

**Callengo** is a B2B SaaS platform that automates outbound phone calls using AI voice agents. This repository is the **public marketing website** (landing page, pricing, docs, agent pages, integrations, legal). It is a separate codebase from the main Callengo web application (which lives in a different repo with Supabase, Stripe, Bland AI, etc.).

**One-Line Pitch:** "AI agents that call your contacts, qualify your leads, verify your data, and confirm your appointments — so your team never has to."

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 16.1.6 | App Router, SSR/SSG |
| React | 19.2.3 | UI library |
| TypeScript | 5.9.3 | Type safety |
| Tailwind CSS | 4.x | Styling (PostCSS-based, `@theme` directives) |
| Framer Motion | 12.x | Animations |
| Lucide React | 0.563.x | Icons |

**No backend, no database, no API keys.** This is a static marketing site with interactive demo components.

---

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint
```

---

## Project Structure

```
callengo-page/
├── app/
│   ├── layout.tsx                # Root layout (metadata, fonts, body)
│   ├── page.tsx                  # Homepage — assembles all sections
│   ├── globals.css               # Design system (Tailwind 4 @theme)
│   ├── not-found.tsx             # Custom 404
│   │
│   ├── components/               # Shared UI components
│   │   ├── Header.tsx            # Nav bar with dropdowns, mobile menu
│   │   ├── Hero.tsx              # Hero + interactive audio demo player
│   │   ├── Features.tsx          # 3 animated feature showcases
│   │   ├── HowItWorks.tsx        # Step-by-step guide
│   │   ├── Testimonials.tsx      # Customer quotes
│   │   ├── FAQ.tsx               # Accordion FAQ
│   │   ├── CTA.tsx               # Call-to-action banner
│   │   ├── Footer.tsx            # Site footer
│   │   └── AnimatedBlobs.tsx     # Background lava lamp blobs
│   │
│   ├── agents/                   # Product pages per agent
│   │   ├── data-validation/
│   │   ├── appointment-confirmation/
│   │   └── lead-qualification/
│   │
│   ├── pricing/                  # Pricing page
│   ├── about/                    # About page
│   ├── contact/                  # Contact page
│   ├── blog/                     # Blog listing
│   ├── docs/                     # Documentation
│   │   └── integrations/[slug]/  # Dynamic integration docs
│   ├── help/                     # Help center
│   ├── free-tools/               # Free tools
│   ├── integrations/[slug]/      # Integration showcase pages
│   ├── compliance/               # Compliance info
│   ├── legal/                    # Legal
│   ├── privacy/                  # Privacy policy
│   └── terms/                    # Terms of service
│
├── public/
│   ├── callengo-logo.svg
│   ├── integrations/             # CRM/tool logos (png)
│   └── audio-test/               # Demo audio files (.wav)
│
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
├── package.json
└── CLAUDE.md                     # This file
```

---

## Design System — Callengo v2.0

All tokens are defined in `app/globals.css` using Tailwind 4 `@theme` blocks.

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--color-deep-indigo` | `#1E2D6B` | Brand primary dark |
| `--color-electric` | `#4F5FE8` | CTA, links, active states |
| `--color-accent` | `#1DB87A` | Success, confirmed |
| `--color-void` | `#0D1117` | Darkest backgrounds |
| `--color-arctic` | `#F4F5FA` | Light backgrounds |
| `--color-ink` | `#1A1B2E` | Body text |
| `--color-foreground` | `#1A1B2E` | Primary text |
| `--color-foreground-secondary` | `#4A5072` | Secondary text |
| `--color-foreground-tertiary` | `#9399B8` | Muted text |
| `--color-background` | `#FFFFFF` | Page background |
| `--color-background-secondary` | `#F4F5FA` | Section background |
| `--color-border` | `#DDE0EE` | Default borders |

### Typography

| Role | Font | Weights |
|---|---|---|
| Display / Headings | **Poppins** | 400–800 |
| Body / UI | **Inter** | 400–700 (OpenType cv02, cv03, cv04, cv11) |
| Monospace / Code | **JetBrains Mono** | 400–500 |

CSS variables: `--font-display`, `--font-body`, `--font-mono`.

### Key Utility Classes

- **Layout:** `.section`, `.wrapper`
- **Cards:** `.card`, `.card-glass`, `.card-elevated`
- **Buttons:** `.btn-primary`, `.btn-secondary`, `.btn-ghost`, `.btn-premium`
- **Text:** `.text-display`, `.text-display-sm`, `.gradient-text`, `.gradient-text-electric`
- **Effects:** `.glass-panel`, `.glass-panel-light`, `.glow-orb-*`

### Shadows

Indigo-tinted shadow system (`--shadow-xs` through `--shadow-2xl`), plus `--shadow-electric` and `--shadow-premium`.

### Animations

Defined as `@keyframes` in globals.css:
- `fadeInUp`, `fadeIn`, `slideInLeft`, `slideInRight`, `scaleIn`
- `shimmer`, `float`, `gradient-shift`, `marquee`
- Lava lamp blob animations (45–60s cycles)

---

## Key Components

### Hero.tsx (~600 lines)
The hero section with an interactive audio demo player.

**Features:**
- Lava lamp gradient background (7 animated blobs)
- 3 demo scenarios with audio playback:
  - Data Validation (0:44)
  - Appointment Confirmation (0:49)
  - Lead Qualification (1:23)
- Real-time transcript display (AI vs human bubbles)
- Extracted data pills (Confirmed/Updated badges)
- Play/pause, progress bar, scenario selector pills
- Stats row: 50K+ Calls, 9.2/10 Quality, 120h/mo Saved
- Glassmorphism card with backdrop-filter blur

**Audio files:** `/public/audio-test/*.wav`

### Header.tsx
Sticky nav with:
- Logo + nav links
- Product dropdown (3 agents)
- Integrations dropdown (6 featured CRMs)
- Resources dropdown (docs, help, blog, tools)
- Mobile hamburger menu
- Floating CTA on scroll

### Features.tsx
Three animated feature showcases triggered by Intersection Observer:
1. **Data Verification Table** — CRM mockup with live status changes
2. **Calendar Confirmation** — Weekly grid with appointment status flow
3. **Lead Scoring Funnel** — Three-column scoring pipeline

### HowItWorks.tsx
Step-by-step guide showing the setup flow.

### Footer.tsx
Full footer with nav links, company info, social links.

---

## Product — What Callengo Does

### Three AI Agent Types

#### 1. Lead Qualification Agent
- Calls leads using BANT framework (Budget, Authority, Need, Timeline)
- Scores leads hot/warm/cold
- Schedules meetings with qualified prospects (Zoom, Meet, Teams)
- Writes data back to CRM

#### 2. Data Validation Agent
- Calls contacts to verify email, phone, address, job title
- Updates CRM records with verified data
- Flags disconnected numbers, wrong contacts
- Schedules callbacks for unavailable contacts

#### 3. Appointment Confirmation Agent
- Calls patients/clients 24-48h before appointments
- Confirms, reschedules, or detects cancellations
- Handles no-show auto-retry
- Updates calendar with confirmed/rescheduled status

### Voices
Maya (female), Josh (male), Matt (male), Nat/Natalie (female)

---

## Pricing (V4 — March 2026)

| Plan | Price/mo | Annual/mo | Calls/mo | Minutes | Concurrent | Max Duration | Overage | Users |
|---|---|---|---|---|---|---|---|---|
| Free | $0 | — | ~10 | 15 (one-time) | 1 | 3 min | Blocked | 1 |
| Starter | $99 | $87 | ~200 | 300 | 2 | 3 min | $0.29/min | 1 |
| Growth | $179 | $159 | ~400 | 600 | 3 | 4 min | $0.26/min | 1 |
| Business | $299 | $269 | ~800 | 1,200 | 5 | 5 min | $0.23/min | 3 |
| Teams | $649 | $579 | ~1,500 | 2,250 | 10 | 6 min | $0.20/min | 5 |
| Enterprise | $1,499 | $1,349 | ~4,000+ | 6,000 | Unlimited | Unlimited | $0.17/min | Unlimited |

**Annual billing = 12% discount (2 months free).**

**Calls = minutes / 1.5 min effective average** (weighted: 45% no-answer ~0.5 min, 25% voicemail ~1.5 min, 30% connected ~2.5 min).

### Add-Ons (Starter+)

| Add-on | Price/mo | Description |
|---|---|---|
| Dedicated Number | $15 | Own outbound phone number |
| Recording Vault | $12 | 12-month recording retention (default 30 days) |
| Calls Booster | $35 | +150 calls / +225 min (stackable) |

### Currencies
USD (1.00x), EUR (0.92x), GBP (0.79x).

---

## Integrations (16+)

### By Plan

| Integration | Free | Starter | Growth | Business | Teams | Enterprise |
|---|---|---|---|---|---|---|
| Google Calendar + Meet | Yes | Yes | Yes | Yes | Yes | Yes |
| Zoom | Yes | Yes | Yes | Yes | Yes | Yes |
| Google Sheets | Yes | Yes | Yes | Yes | Yes | Yes |
| Slack | — | Yes | Yes | Yes | Yes | Yes |
| SimplyBook.me | — | Yes | Yes | Yes | Yes | Yes |
| Webhooks (Zapier/Make/n8n) | — | Yes | Yes | Yes | Yes | Yes |
| Microsoft Outlook + Teams | — | — | — | Yes | Yes | Yes |
| HubSpot | — | — | — | Yes | Yes | Yes |
| Pipedrive | — | — | — | Yes | Yes | Yes |
| Zoho CRM | — | — | — | Yes | Yes | Yes |
| Clio (legal) | — | — | — | Yes | Yes | Yes |
| Salesforce | — | — | — | — | Yes | Yes |
| Microsoft Dynamics 365 | — | — | — | — | Yes | Yes |

**Coming soon:** GoHighLevel, Acuity Scheduling.

---

## Feature Access Matrix

| Feature | Free | Starter | Growth | Business | Teams | Enterprise |
|---|---|---|---|---|---|---|
| Active Agents | 1 (locked) | 1 (switchable) | All | All | All | All |
| Voicemail Detection | No | Yes | Yes (smart) | Yes (smart) | Yes (smart) | Yes (smart) |
| Follow-ups | No | 2 max | 5 max (smart) | 5 max (smart) | 10 max | Unlimited |
| No-Show Auto Retry | No | No | Yes | Yes | Yes | Yes |
| User Permissions | No | No | No | No | Yes | Yes |
| Extra Seats | — | — | — | $49/seat | $49/seat | Included |
| Rescheduling | No | Yes | Yes | Yes | Yes | Yes |

---

## Target Market & ICP

### Primary Segments
1. **Healthcare / Medical** — No-show reduction (Appointment Confirmation)
2. **Real Estate** — Database cleanup + lead qualification
3. **SaaS / Tech** — SDR automation (Lead Qualification)
4. **Financial Services** — Compliance data verification
5. **Legal Firms** — Client data + appointment (Clio integration)
6. **E-commerce** — Future: cart abandonment, winback (Q1 2026)

### ICP
- 5–500 employees, $500K–$50M ARR
- 500–50,000 contacts, 300–6,000+ calls/month
- Uses HubSpot, Salesforce, Pipedrive, Zoho, or Clio
- Decision maker: VP Sales, Ops Manager, Practice Manager

---

## Backend Architecture (Main App — Separate Repo)

> For context when writing landing page copy. The landing page does NOT contain backend code.

### Stack
- **Frontend:** Next.js 14+ App Router, TypeScript, Tailwind, Shadcn UI
- **Backend:** Next.js API Routes (serverless)
- **Database:** Supabase (PostgreSQL) with RLS
- **Payments:** Stripe (subscriptions, metered overage, multi-currency)
- **AI Calls:** Bland AI (telephony) + OpenAI GPT-4o-mini (analysis)
- **Deployment:** Vercel

### Sub-Account Architecture
Each company gets an isolated Bland AI sub-account:
- Own API key, independent credit balance
- Independent call history and analytics
- Own concurrent call limits
- Credits allocated from parent account on subscription

### Call Flow
```
Campaign started → contacts queued → Bland AI makes call →
webhook received → OpenAI analyzes transcript →
contact updated → CRM synced → calendar updated →
usage tracked → Stripe metered billing
```

### Database (~57 tables)
Core: `companies`, `users`, `subscription_plans`, `company_subscriptions`, `usage_tracking`, `billing_history`, `company_settings`, `contacts`, `contact_lists`, `company_agents`, `agent_templates`

Execution: `agent_runs`, `call_logs`, `call_queue`, `follow_up_queue`, `voicemail_logs`, `calendar_events`, `analysis_queue`

Integrations: 30+ tables (each CRM has `_integrations`, `_contact_mappings`, `_sync_logs`)

### API Endpoints (~80+)
- Auth, AI chat, billing (13), Bland AI (4), calendar (4), contacts (8), integrations (64+), queue, settings, team (5), webhooks, admin, seed

### App Pages
```
/(app)/dashboard, /agents, /campaigns, /campaigns/[id], /contacts,
/calls, /calendar, /follow-ups, /voicemails, /analytics, /reports,
/integrations, /settings, /team, /billing, /subscription, /admin
```

### Onboarding Flow (Pain-First)
1. Signup → company details + website scraping
2. "What challenge to solve first?" → picks agent
3. Agent test call → user experiences AI
4. Dashboard → ready to create first campaign

---

## Promotional Coupons

| Code | Discount | Duration | Target |
|---|---|---|---|
| LAUNCH50 | 50% off | 3 months | Launch campaign |
| EARLY25 | 25% off | 1st month | Early bird |
| WELCOME15 | 15% off | 1st month | New users |
| LEGAL20 | 20% off | 12 months | Law firms (Clio) |
| PARTNER40 | 40% off | 6 months | Referral/partner |
| ANNUAL20 | 20% off | Forever | Annual billing |
| CALLENGO30 | 30% off | 2 months | General marketing |

---

## Competitive Positioning

| Us | Generic auto-dialers | Manual BPOs |
|---|---|---|
| AI conversation + analysis | Recorded messages | Human agents |
| Minutes setup (templates) | Hours/days | Weeks |
| $0.17–0.29/min overage | $0.05–0.15/min (no intelligence) | $2–5/min |
| 24/7 availability | 24/7 | Business hours |
| Auto-structured data + CRM sync | None | Manual entry |

### Key Differentiators
1. Template-first (3 proven agents vs build-from-scratch)
2. Full-loop automation (call + follow-up + voicemail + calendar + CRM sync)
3. Deep CRM integration (6 native CRMs, not just Zapier)
4. Vertical expertise (Clio for legal, SimplyBook for services)
5. Try-before-buy (15 free minutes, full platform access)

---

## Unit Economics (Bland AI Scale: $0.11/min)

| Plan | Revenue | Bland Cost | Gross Profit | Margin |
|---|---|---|---|---|
| Starter | $99 | $33 | $66 | 66.7% |
| Growth | $179 | $66 | $113 | 63.1% |
| Business | $299 | $132 | $167 | 55.9% |
| Teams | $649 | $247.50 | $401.50 | 61.9% |
| Enterprise | $1,499 | $660 | $839 | 56.0% |

All overage rates stay above $0.11/min Bland cost floor.

---

## Development Guidelines

### Code Style
- TypeScript strict mode
- Tailwind for all styling (no CSS modules)
- Framer Motion for animations
- Lucide React for icons
- Path alias: `@/*` → `./`

### Component Patterns
- All components in `app/components/`
- Pages use App Router conventions (`page.tsx`, `layout.tsx`)
- Intersection Observer for scroll-triggered animations
- Glassmorphism cards with `backdrop-filter: blur()`
- Responsive: mobile-first with `sm:`, `md:`, `lg:` breakpoints

### Important Notes
- **No backend in this repo** — purely static marketing site
- Audio demo files are real `.wav` files in `/public/audio-test/`
- Integration logos are `.png` files in `/public/integrations/`
- The main app lives in a separate repository (callengo-app)
- Deployed on Vercel
- All phone numbers use auto-rotated pool (no Twilio BYOP — Bland limitation)

---

## SEO & Metadata

Configured in `app/layout.tsx`:
- Title: "Callengo — AI Phone Agents for Business"
- Keywords: AI phone agents, appointment confirmation, data validation, lead qualification
- Open Graph + Twitter cards configured
- Canonical URL handling via Next.js

---

## Future Roadmap (Agents in Development)
- Abandoned Cart Agent (e-commerce recovery)
- Win-back Agent (churned customer re-engagement)
- Feedback Collection Agent (post-service satisfaction)
