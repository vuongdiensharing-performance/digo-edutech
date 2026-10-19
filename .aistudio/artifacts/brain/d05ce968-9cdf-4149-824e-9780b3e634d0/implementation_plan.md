# Scroll Reveal Animations & Collapsible FAQ Accordion for DIGO EduTech

Implement high-performance IntersectionObserver-driven scroll animations (subtle opacity fade-in with a gentle upward slide) across sections and cards, alongside a clean, accessible single-expand FAQ accordion on the HomePage addressing key questions across all three DIGO pillars: Academy, Growth, and Infra & Trust.

> [!IMPORTANT]
> **Confirmed User Decisions:**
> - **FAQ Scope**: Covers all three core pillars — Academy, Growth, and Infra & Trust — with bilingual (VI/EN) questions and answers.
> - **Accordion Interaction**: Single item open at a time with smooth expand/collapse transition, rotating chevron indicator, and accessible keyboard support.
> - **Scroll Animation Style**: Subtle fade-in with gentle upward slide (`opacity: 0 -> 1`, `transform: translateY(18px) -> translateY(0)`) using `IntersectionObserver`, respecting user `prefers-reduced-motion` settings.

---

## 1. Overview & Core Concept

- **What It Delivers**:
  1. A reusable, performant React hook or scroll-reveal component (`useIntersectionObserver` / `ScrollReveal`) applying smooth CSS-driven fade-and-rise transitions to section wrappers and card grids without external heavy libraries.
  2. A dedicated, responsive **FAQ Section Component** on the HomePage between the Team/Evidence sections and CTA band, styled in harmony with DIGO EduTech's typographic hierarchy and dark/light accents.
- **Target Audience**: Prospective learners, enterprise founders, and growth marketing teams seeking clarity on DIGO's pedagogical model, performance attribution methods, and data infrastructure governance.
- **Core Value**: Elevates the sensory polish of the application while addressing key customer objections and onboarding questions.

---

## 2. User Experience & Visual Design

- **User Flows**:
  - **Scroll Reveal**: As the user scrolls through HomePage and sub-pages, sections and info cards smoothly glide up into view with a 400ms ease-out curve. Once revealed, elements stay active to prevent distracting re-trigger flashes.
  - **FAQ Interaction**: Users can browse questions filtered or grouped by pillar (or clean continuous list). Clicking a question smoothly expands the answer with an accordion height transition and toggles a chevron indicator. Clicking another question collapses the open one automatically.
- **Visual Identity & Theme**:
  - **Color Tokens**: Adheres strictly to the established design system (`--bg: #f7f5f0`, `--surface: #ffffff`, `--text: #0f0e0e`, `--brand-red: #d91b24`, `--brand-gold: #c88a32`).
  - **Typography**: Display titles in `Plus Jakarta Sans`, body and answers in `Be Vietnam Pro`, and question index metadata in `JetBrains Mono`.
  - **Accessibility**: ARIA attributes (`aria-expanded`, `aria-controls`, `role="region"`), keyboard Tab navigation, and `Enter`/`Space` activation.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Native IntersectionObserver vs. Framer Motion**:
  - *Chosen Approach*: Lightweight custom React hook + pure CSS classes (`.reveal-on-scroll`, `.is-revealed`).
  - *Why*: Zero additional bundle overhead, 60fps compositor performance without hydration lag, full compatibility with mobile devices and `prefers-reduced-motion`.
- **Decision 2: FAQ Single-Expand vs. Multi-Expand**:
  - *Chosen Approach*: Single active item state (`activeId: string | null`) with smooth toggle.
  - *Why*: Maintains clean visual hierarchy and prevents excessive page height expansion on mobile devices.
- **Decision 3: Bilingual Data Structure**:
  - *Chosen Approach*: Integrated Vietnamese and English Q&A records that respond dynamically to the existing `LanguageContext` switcher.

---

## 4. Technical Architecture & Component Mapping

```
┌────────────────────────────────────────────────────────┐
│                      App.tsx                           │
│        (LanguageProvider & View Routing)               │
└───────────────────────────┬────────────────────────────┘
                            │
            ┌───────────────┴───────────────┐
            │                               │
            ▼                               ▼
┌───────────────────────┐       ┌───────────────────────┐
│     Header.tsx        │       │      HomePage.tsx     │
└───────────────────────┘       └───────────┬───────────┘
                                            │
        ┌───────────────────────────────────┼───────────────────────────────────┐
        ▼                                   ▼                                   ▼
┌───────────────────┐             ┌───────────────────┐               ┌───────────────────┐
│  ScrollReveal     │             │    FAQSection     │               │   Existing Cards  │
│  (Custom Hook &   │             │   (Accordion UI   │               │   & Signal Panel  │
│   Intersection)   │             │    & Pillar Q&As) │               │   (Fades on view) │
└───────────────────┘             └───────────────────┘               └───────────────────┘
```

### Component & State Mapping

1. **`src/hooks/useScrollReveal.ts` (or Reveal Wrapper)**:
   - Attaches `IntersectionObserver` with `threshold: 0.1` and `rootMargin: '0px 0px -40px 0px'`.
   - Adds `.is-revealed` class when element enters viewport.
   - Automatically unobserves once revealed for performance.
2. **`src/components/FAQSection.tsx`**:
   - Houses 6 curated Q&As addressing Academy (IELTS, DaVinci, Ads), Growth (CPA measurement, testing cycles), and Infra & Trust (Server-side tracking, CAPI, AI agents).
   - State: `activeId: string | null`.
   - Bilingual support via `useLanguage()` context.
3. **`src/index.css` updates**:
   - CSS transitions for `.reveal-on-scroll` (`opacity 0 -> 1`, `transform translateY(20px) -> 0`).
   - Accordion item styling (`border-bottom`, smooth height transition, hover states).
4. **`src/pages/HomePage.tsx` & sub-pages**:
   - Integration of FAQ section.
   - Attachment of scroll reveal classes or wrappers to section containers and card grids.
