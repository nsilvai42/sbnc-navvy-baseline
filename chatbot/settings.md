# Chatbot settings

## Prompt blocks — scope & placement (iBlueprint)

| Block | File | Scope | Placement |
|---|---|---|---|
| 01 Identity & Behavior | `prompts/01-identity-and-behavior.md` | Org Prompt (all states) | Start (first) |
| 02 State Context: Wisconsin | `prompts/02-state-context-wisconsin.md` | Deployment (per-state) | Start (after 01) |
| 03 Data & API Context | `prompts/03-data-and-api-context.md` | Org Prompt (injection deployments only) | Start (after 02) |
| 04 Guardrails & Integrity | `prompts/04-guardrails-and-integrity.md` | Org Prompt (all states) | End (last, after RAG + injected data) |

Read order: 01 → 02 → 03 → [retrieved KB + injected `[student_context]`] → 04.

## Model & generation (recommended)

| Setting | Recommended | Note |
|---|---|---|
| Temperature | 0.2 (low) | consistency + accuracy on benefits facts; [confirm control w/ HSAI] |
| Max output | ~600–800 tokens | answers are short by design |
| Retrieval (RAG) | top-k from student-facing first, fall back to official | k tuned in QA |
| Determinism / seed | pin if available | [open w/ HSAI: temp/seed, regression snapshots, KB version pinning] |

## Knowledge base — attachment & retrieval

| Setting | Value |
|---|---|
| KBs attached (WI bot) | WI Student-Facing · WI FoodShare/SNAP Official · WI BadgerCare Plus Official · WI Escalation & Ops (staff-facing) |
| Answer priority | student-facing first (voice); official tiers verify + are cited; escalation KB never student-exposed |
| Chunking | official docs by section (heading retrievable for citation); student-facing per file |
| Citation | name the official source (+ section); never the student-facing file name; no URLs unless asked |
| Namespacing | all WI content tagged `state: WI` |
| [Confirm w/ HSAI] | can retrieval filter/rank on metadata, or similarity-only? (gates the optional metadata fields) |

## Deployment / widget (baseline `wi-baseline-v1`)

| Setting | Value |
|---|---|
| Surface | floating chat widget (embed on roadmap site = Travis's step) |
| Branding | Navy `#1E2658`, Coral `#FF5A5F`, Poppins (logo asset still to add) |
| Starter chips | "What does this mean?" · "What should I put here?" · "What if I'm missing a document?" · "What happens next?" |
| Disclaimer | "Estimates, not decisions" |
| File upload | disabled |
| Copy / print | enabled |
| Release gate | by-hand QA suite in iBlueprint Test Chat before launch + after every prompt/KB change |
