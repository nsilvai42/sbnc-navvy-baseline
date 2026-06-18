# Navvy Knowledge Base — Student-Facing (v1)

Plain-language, student-facing knowledge files for the Navvy Wisconsin benefits chatbot
(FoodShare = WI SNAP; BadgerCare Plus = WI Medicaid). These are the chatbot's PRIMARY
retrieval layer — in iBlueprint, link them at higher priority than the raw WI handbook PDFs.

## Status
- **01–11:** drafted by ideas42, cross-source verified against WI DHS / USDA / 7 CFR 273.5
  (plus corroborating secondary sources) on 2026-06-18.
- **12_financial-aid-SENSITIVE:** DRAFT — pending SBNC/legal sign-off (contains
  `[SBNC/legal to approve]` brackets). Do not load into the live KB until cleared.
- Whole set is pending SBNC sign-off on sensitive language.

## Conventions
- No dollar amounts, income limits, or FPL percentages (they go stale and are determinations);
  students are pointed to their screener estimate and the official source instead.
- Each file ends with `Source:` and `Valid as of:` lines. Re-verify on each WI handbook
  release (versioned; current FoodShare Handbook = P-16001 Release 26-01) and at least annually.
- One topic per file (chunk-friendly for retrieval).

## Files
01 student eligibility · 02 work / work-study exemptions · 03 other exemptions ·
04 meal-plan rule · 05 income & household · 06 documents · 07 school breaks ·
08 BadgerCare Plus · 09 FoodShare vs. BadgerCare · 10 how applying works · 11 glossary ·
12 financial aid (pending legal)

## verification/
- `VERIFICATION_MATRIX.md` — every claim, its governing agency source + URL, and verdict.
- `Navvy_KB_Claims_for_Verification.xlsx` — 118-claim sheet with cross-source verdicts
  (for SBNC sign-off and/or a Perplexity second pass).
