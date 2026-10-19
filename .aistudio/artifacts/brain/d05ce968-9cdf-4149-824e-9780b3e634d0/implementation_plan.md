# DIGO EduTech Repository Governance, Security & Environment Standardization

Establish the complete DevSecOps and Brand Governance baseline for the **DIGO EduTech Ecosystem** by adding standardized English documentation and configuration templates for release history, engineering contribution standards, Zero-Trust security policy, Git exclusion rules, and local Vite environment variables.

## User Review & Critical Decisions

> [!IMPORTANT]
> All five governance and environment specification documents provided in the prompt will be added verbatim to the project root, with cross-links added in the project documentation so contributors and automated workflows can immediately locate them.

- **Exact Verbatim Governance Standards**: Preserve the exact terminology, version history (`[Unreleased]` and `[1.0.0] - 2026-10-15`), Brand & UI Governance rules (`#F7F5F0`, `#0F0E0E`, `#D91B24` / `#F40009`, `#C88A32`, Plus Jakarta Sans & Be Vietnam Pro), and Zero-Trust NDA enforcement clauses across all repository documents.
- **Cross-Referenced Ecosystem Documentation**: Update the root documentation so the Contributing, Security, and Environment sections link directly to the new governance artifacts.

## 1. Overview & Core Concept

- **What It Does**: Equips the DIGO EduTech repository with enterprise-grade DevSecOps governance, semantic release tracking, Zero-Trust NDA policies, strict secret exclusion rules, and standardized environment variable templates for CAPI, CRM, and LMS integrations.
- **Target Audience / Persona**: Internal DIGO engineers, B2B growth architects, academic product managers, and automated development tools working across the Academy, Growth, Infra & Trust, and Insights pillars.
- **Key Value**: Prevents secret leakage, enforces strict Vietnamese typographic and copywriting guardrails (*"Tối ưu CPQL"*, *"Đối soát 1:1"*, *"Trang đích <1.2s"*), and standardizes onboarding across local development environments.

## 2. User Experience & Visual Design

- **Developer & Contributor Onboarding Flow**:
  1. Engineers cloning the repository copy the standardized environment template to their local configuration without risking secret commits thanks to strict Zero-Trust exclusion rules.
  2. Before submitting changes, contributors verify their UI components and copy against the Engineering Standards & Contributing Guidelines (Bento UX/UI radii, approved hex palette, and Trunk-based branching).
  3. Security audits and B2B reconciliation workflows follow the Zero-Trust Security Policy and NDA reporting chain directly to C-Level leadership.
- **Visual Identity & Governance Alignment**:
  - *Color Palette Enforcement*: Clay White (`#F7F5F0`), Basalt Black (`#0F0E0E`), Empire Red / Primary CTA (`#D91B24` / `#F40009`), and Amber Gold (`#C88A32`).
  - *Typography Hierarchy*: Plus Jakarta Sans for energetic display headings and Be Vietnam Pro for high-legibility Vietnamese body text.
  - *Component Architecture*: Bento UX/UI cards (`24px - 32px` radius) and Pill-shape interactive CTAs (`9999px` radius) with Fluid Spring Effervescence motion.

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Standardized English Governance with Preserved Vietnamese Domain Terms**
  - *Chosen Approach*: Maintain the documents in international standard English (Keep a Changelog, Semantic Versioning, Conventional Commits) while explicitly preserving DIGO's mandatory Vietnamese performance terminology (*"Đối soát 1:1"*, *"Tối ưu CPQL"*, *"Trang đích <1.2s"*).
  - *Why*: Ensures compatibility with standard developer tooling and CI/CD pipelines while preventing copywriting drift in the Vietnamese B2B2C market.
  - *Alternatives Considered*: Translating the domain terms into generic English was rejected because DIGO's brand doctrine strictly prohibits non-standard phrasing.
- **Decision 2: Zero-Trust Environment & Secret Isolation**
  - *Chosen Approach*: Explicitly ignore all local environment overrides and security config files while whitelisting only the sanitized environment template containing Vite-prefixed keys for Meta/TikTok CAPI, CRM Webhooks, and Academy LMS streaming.
  - *Why*: Protects B2B partner CAPI tokens and lead reconciliation webhooks from accidental exposure in version control.

## 4. Technical Architecture & Data Strategy *(Technical Reference)*

- **Architecture & Governance Diagram**:

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    DIGO EDUTECH REPOSITORY GOVERNANCE                   │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │
        ┌────────────────────────────┼────────────────────────────┐
        ▼                            ▼                            ▼
┌──────────────────────┐  ┌──────────────────────┐  ┌──────────────────────┐
│  ENGINEERING & BRAND │  │ ZERO-TRUST SECURITY  │  │ ENVIRONMENT & BUILD  │
│      GOVERNANCE      │  │    & LEGAL POLICY    │  │     CONFIGURATION    │
├──────────────────────┤  ├──────────────────────┤  ├──────────────────────┤
│ • Contribution Rules │  │ • Zero-Trust NDA     │  │ • Git Secret Filter  │
│   - Color & Font DNA │  │   - B2B CAPI Metrics │  │   - Ignore .env.*    │
│   - Copy Guardrails  │  │   - Academic Assets  │  │   - Allow Template   │
│   - Trunk Branching  │  │   - PII Masking      │  │                      │
│   - Strict TS Rules  │  │                      │  │ • Vite Env Template  │
│                      │  │ • Proprietary License│  │   - App Config       │
│ • Semantic Changelog │  │   - C-Level Approval │  │   - CAPI / Pixels    │
│   - [Unreleased]     │  │   - Direct Reporting │  │   - CRM Lead Sync    │
│   - [1.0.0] Release  │  │                      │  │   - Academy Stream   │
└──────────────────────┘  └──────────────────────┘  └──────────────────────┘
```

- **Data Model & Configuration Domains**:
  - **Application Runtime**: Base URL (`http://localhost:3000`) and environment mode (`development`).
  - **Infra & Trust (Server-side CAPI)**: Meta Pixel ID, Meta CAPI Token, and TikTok Pixel ID for 1:1 reconciliation.
  - **Growth (CRM & Lead Sync)**: CRM Webhook endpoint and API key for automated B2B/B2C lead routing.
  - **Academy (LMS Delivery)**: Video streaming token for protected course playback.
