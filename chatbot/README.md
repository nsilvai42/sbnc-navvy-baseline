# Navvy Chatbot — System Prompt (Behavioral Baseline v1)

System-prompt configuration for the Navvy benefits-navigation chatbot, built on iBlueprint. ideas42 owns this behavioral design; SBNC approves sensitive language; HSAI/Travis implement on the platform.

## How iBlueprint assembles the prompt
iBlueprint builds the final system prompt from ordered blocks:

> **Start prompts → RAG search results → API data → Metadata prompts → End prompts**

Retrieved knowledge base chunks are auto-injected at the RAG step. So our behavioral instructions go in **Start** blocks (before the data) and our hard guardrails go in an **End** block (after the data, read last — better adherence + injection resistance).

## The blocks

| File | Type | Placement | Scope |
|---|---|---|---|
| `01_identity-and-behavior.md` | System | Start (before RAG/API) | **Shared** — save as an Org Prompt, reuse for every state |
| `02_state-context-wisconsin.md` | System | Start (before RAG/API) | **Per-state** — inline; swap this one file per state (IL, TN…) |
| `03_guardrails-and-integrity.md` | System | End (after RAG/API) | **Shared** — save as an Org Prompt, reuse for every state |

This split is what keeps the bot reusable across states: blocks 01 and 03 never change; only `02_state-context` does.

## Loading into iBlueprint
Chatbot → **Manage → System Prompt Blocks → Add Block**. For each block: set **Block Type = System**, set **Placement** per the table, and paste the file's content (or, for the two shared blocks, reference them from the **Org Prompts** library so all state bots share one copy).

## Chatbot metadata
- **Name:** SBNC WI Benefits Advisor — ideas42 Behavioral Baseline
- **Description:** Navvy assistant helps Wisconsin college students apply for FoodShare (SNAP) and BadgerCare Plus (Medicaid) — explaining steps, decoding questions, pointing to approved official sources for sensitive or out-of-scope items. Gives estimates only ("you may qualify," never "you qualify"); not a caseworker or a legal/immigration/tax/medical/financial-aid advisor.
- **Tags:** navvy, benefits-navigation, wisconsin, foodshare-snap, badgercare-medicaid, college-students, baseline

## Open items (before go-live)
- **`[approved source]` placeholders** in `03_guardrails-and-integrity.md` — SBNC/legal to supply the official referral links (legal, immigration/citizenship, financial-aid).
- **Support / escalation contact** — per SBNC's chatbot scope-refinement doc the escalation inbox is `help@studentbasicneeds.com`; confirm before wiring into the "approved support contact" line.
- **API vs. no-API:** this baseline assumes **no** per-session API/screener context (the bot knows only what the student types). If screener/roadmap data is later piped in via iBlueprint API Sources, add API Data / Metadata blocks and the eligibility-reason mechanism (`SNAP_eligibility_reason`); the per-state context can then be injected via metadata instead of block `02`.
- **Status:** v1 — pending SBNC sign-off on sensitive language (privacy, financial aid, immigration).
