# Security Policy & Zero-Trust Architecture

DIGO EduTech is committed to the absolute security of our B2B2C ecosystem, operating under a strict **Zero-Trust Architecture**. This policy serves as a binding Non-Disclosure Agreement (NDA) for all contributors.

## Data Protection & NDA
- **B2B Trade Secrets:** All audit metrics (CPA, Revenue, CPL), Case Study reports, and 1:1 reconciliation flows are highly confidential B2B data. Unauthorized leakage will result in immediate legal action.
- **Academic Property:** Syllabi, Competency-Based Rubrics, and mock scenarios designed by CAO Lê Thị Thanh Gô are proprietary assets.
- **PII Data:** Customer data, student profiles, and lead information MUST be masked/encrypted. Exporting data outside the internal Zero-Trust environment is strictly prohibited.

## Secrets Management
- **NO HARDCODING:** Never commit API Keys, Webhook URLs, Server-side CAPI tokens, or CRM credentials into the source code.
- **Environment Variables:** All local configurations must reside in `.env.local` (which is git-ignored).

## Reporting a Vulnerability
If you discover a security vulnerability (especially regarding Server-side Tracking or AI Agents), DO NOT open a public issue.
1. Report directly to the C-Level (CEO/CMO Vương Điền or CAO/CPO Thanh Gô).
2. Provide a detailed reproduction path.
