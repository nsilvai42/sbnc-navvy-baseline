# Changelog

## v1.1 — 2026-06 (architecture refresh)
- Restructured the system prompt into **four blocks**: 01 Identity & Behavior, 02 State Context (Wisconsin), 03 Data & API Context (new), 04 Guardrails & Integrity. Renamed the former Block 03 Guardrails to **Block 04**.
- Added **Block 03 — Data & API Context**: how Navvy uses the injected `[student_context]` (screener + application data) safely. Reverses the old "never imply you can see results" rule — Navvy now transparently states it has the data so students don't retype sensitive info; added protections against reciting or dumping sensitive values.
- Pulled all data-handling out of the reusable blocks so 01 and 04 stay deployment-agnostic.
- Knowledge base reorganized into **four KBs**: student-facing (voice), FoodShare official + BadgerCare official (authority), and a staff-facing escalation & ops KB.
- Adopted the **voice-vs-authority** rule: student-facing wins wording, official wins factual conflicts, uncertainty escalates. Citations now name the **official source**.
- Added a **KB metadata schema** (`official_source`, `last_reviewed`, optional `stage` / `risk_level` / `requires_official_verification`) — richer fields gated on whether retrieval can filter on metadata.
- Escalation now routes by context to official agency sources or the student's school — not SBNC support.
- Added a QA / release-gate section.

## Open (pending confirmation)
- HSAI: prompt stacking, metadata-filtered retrieval vs. similarity-only, screener/journey fields injected, temp/seed, KB version pinning.
- SBNC / legal: exact ACCESS/agency wording, FoodShare benefit figure, privacy/data-flow claim, financial-aid wording + held file, immigration referral wording, official-source links, escalation contacts.
