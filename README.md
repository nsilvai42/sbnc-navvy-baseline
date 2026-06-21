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

## chatbot/ — Navvy chatbot baseline (v1.1)

Source of truth for the Navvy benefits-navigation chatbot: the four system-prompt blocks, a knowledge-base scaffold (student-facing voice + official-source authority tiers, with metadata), settings, docs, and QA. **No student data** — public program info and placeholders only. Full layout in [`chatbot/README.md`](chatbot/README.md).

- `chatbot/prompts/` — prompt blocks: 01 identity · 02 Wisconsin state context · 03 data & API · 04 guardrails
- `chatbot/settings.md` — model, retrieval, and deployment settings
- `chatbot/docs/` — architecture + paste-ready prompts/settings
- `chatbot/knowledge-base/wi/` — student-facing, official-sources (see MANIFEST), escalation-ops, + metadata template
- `chatbot/CHANGELOG.md`
