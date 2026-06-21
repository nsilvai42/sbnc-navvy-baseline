# sbnc-navvy-baseline

Source of truth for the **Navvy** benefits-navigation chatbot — system prompts, knowledge base, and QA — deployed on the iBlueprint platform and supported by the Student Basic Needs Coalition (SBNC).

> **No student data lives in this repo.** The knowledge base contains only public program information. Screener and application data are injected at runtime by the app and are never committed here. Do not add API keys, secrets, or any personally identifiable information.

## How this maps to the deployment

Navvy is assembled from four prompt blocks in a fixed read order, over a two-role knowledge base, with a QA release gate. Full explanation in [`docs/architecture.md`](docs/architecture.md); paste-ready prompts + settings in [`docs/prompts-and-settings.md`](docs/prompts-and-settings.md).

```
Block 01 Identity → Block 02 State Context → Block 03 Data & API → [retrieved KB + injected student_context] → Block 04 Guardrails (last)
```

- **Blocks 01, 03, 04** are reusable across states (iBlueprint Org Prompts).
- **Block 02** is the only per-state block.
- The **knowledge base** swaps per state.

## Layout

```
docs/
  architecture.md            full system architecture (v1.1)
  prompts-and-settings.md    paste-ready prompts + every setting
chatbot/
  prompts/
    01-identity-and-behavior.md     (Org Prompt · Start)
    02-state-context-wisconsin.md   (Deployment · Start · per-state)
    03-data-and-api-context.md      (Org Prompt · Start · injection only)
    04-guardrails-and-integrity.md  (Org Prompt · End · read last)
  settings.md                model, retrieval, and deployment settings
knowledge-base/
  wi/
    student-facing/          11 plain-language docs (the answer "voice")
    official-sources/        MANIFEST + stored official docs (the "authority")
    escalation-ops/          staff-facing routing (never student-exposed)
    _metadata-template.md     front-matter every KB doc should carry
verification/                by-hand QA suite (release gate)
CHANGELOG.md
```

## Knowledge base in one rule

For wording, the student-facing layer wins; for factual conflicts, the official source wins; for missing or uncertain facts, escalate. Answers are phrased from the student-facing layer but **cite the official source** by name.

## Update loop

edit in git (PR) → SBNC/legal ratify → load into iBlueprint → run the QA gate → tag the version + bump `last_reviewed`.
