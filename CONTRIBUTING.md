# Engineering Standards & Contributing Guidelines

Welcome to the **DIGO EduTech** development team. Our operating philosophy is: *"Measure Ruthlessly. Build What You Teach. Scale Monopolies."* To maintain our architecture, all engineers and AI Agents must strictly adhere to the following DevSecOps processes and Brand Governance.

## 1. Brand & UI Governance (Strict Rules)
- **Color Palette:** Only use the approved Hex codes: Clay White (`#F7F5F0`), Basalt Black (`#0F0E0E`), Empire Red (`#D91B24` or `#F40009` for CTA), and Amber Gold (`#C88A32`).
- **Typography:** Strictly use *Plus Jakarta Sans* for Headings and *Be Vietnam Pro* for Body Text to prevent Vietnamese font rendering issues.
- **Copywriting Guardrails:** NEVER use terms like "Cam kết bùng nổ" (Explosive commitment) or "Giá tin nhắn siêu rẻ" (Super cheap messaging). ALWAYS use official terminology: "Tối ưu CPQL" (CPL Optimization), "Đối soát 1:1" (1:1 Reconciliation), "Trang đích <1.2s" (Landing Page <1.2s).

## 2. Branching Strategy
We utilize Trunk-based Development:
- `main`: Production branch. Directly maps to the live ecosystem.
- `feat/*`: For new module features (e.g., `feat/academy-rubrics`).
- `fix/*`: For system bug fixes (e.g., `fix/capi-sync`).

## 3. Coding Standards
- **TypeScript:** Strict mode is mandatory. Usage of `any` is prohibited.
- **Components:** All new UI components must inherit the Bento UX/UI architecture (24px - 32px radii for cards, 9999px for buttons).
- **Pre-commit:** Code must pass `npm run lint` and `npm run build` before any commit.

## 4. Conventional Commits
All commits must follow: `<type>(<scope>): <subject>`
- **Example:** `feat(growth): implement 1:1 reconciliation dashboard for B2B partners`.
