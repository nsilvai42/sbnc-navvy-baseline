# SBNC x Navvy mockups

Placeholder / example content for design review ("Example — not production").

## screener/
Before/after HTML mockups for the baseline screener redesign, hosted live via GitHub Pages:

| Screen | Current (live) | Redesign |
|---|---|---|
| Landing / Cover | landing-current.html | landing-redesign.html |
| Email & Phone | email-phone-current.html | email-phone-redesign.html |
| Education | education-current.html | education-redesign.html |
| Results — Immediate | result-current.html | result-redesign.html |
| Results — Delay | result-delay-current.html | result-delay-redesign.html |

## research/
- personal-info-disclosure.html — behavioral-science brief on reducing drop-off when collecting personal information.

## roadmap/
Mobile roadmap-flow mockups:

| Screen | File |
|---|---|
| Step 2 — Option A | step2-option-a.html |
| Step 2 — Option B | step2-option-b.html |
| Step 3 — Option A | step3-option-a.html |
| Step 3 — Option B | step3-option-b.html |
| What you might need | what-you-might-need.html |
| Choose your benefits | choose-your-benefits.html |

Live URLs: https://nsilvai42.github.io/sbnc-navvy-baseline/<folder>/<file>.html

## state-general-roadmap/
Post-screener "state general roadmap" idea set (ideas42 mockups) — the at-a-glance roadmap that shows a student their estimate and next steps after the screener. Two portal models (single combined vs. separate portals), each in a mobile and a web frame, plus the progress-comms and self-reported-progress companions. Self-contained: shared styles in `roadmap-kit.css`, layout toggle in `roadmap-toggle.js`. Start at `index.html`.

| Screen | File |
|---|---|
| Overview / hub | index.html |
| Roadmap — mobile, single portal (CA) | roadmap-mobile-single.html |
| Roadmap — web, single portal (CA) | roadmap-web-single.html |
| Roadmap — mobile, separate portals (TN) | roadmap-mobile-separate.html |
| Roadmap — web, separate portals (TN) | roadmap-web-separate.html |
| Progress comms — single portal | comms-single.html |
| Progress comms — separate portals | comms-separate.html |
| Self-reported progress | self-report.html |
| Feedback / build reference | feedback-build-reference.html |

Notes on the design decisions and suggested meeting flow: `MEETING_GUIDE.md`.

## chatbot/ — Navvy chatbot baseline (v1.1)

Source of truth for the Navvy benefits-navigation chatbot: the four system-prompt blocks, a knowledge-base scaffold (student-facing voice + official-source authority tiers, with metadata), settings, docs, and QA. **No student data** — public program info and placeholders only. Full layout in [`chatbot/README.md`](chatbot/README.md).

- `chatbot/prompts/` — prompt blocks: 01 identity · 02 Wisconsin state context · 03 data & API · 04 guardrails
- `chatbot/settings.md` — model, retrieval, and deployment settings
- `chatbot/docs/` — architecture + paste-ready prompts/settings
- `chatbot/knowledge-base/wi/` — student-facing, official-sources (see MANIFEST), escalation-ops, + metadata template
- `chatbot/CHANGELOG.md`
