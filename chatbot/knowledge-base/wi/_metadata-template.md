# KB metadata template

Every knowledge-base doc carries YAML front-matter so Navvy can answer in plain language but cite the official source, and (where supported) so retrieval can filter by state / program / stage.

## Student-facing doc

```yaml
---
id: snap-meal-plan
state: WI
program: FoodShare          # FoodShare | BadgerCare | both
tier: student_friendly
title: How a meal plan affects FoodShare
official_source: Wisconsin FoodShare Handbook
official_section: ""        # fill from the cited section
last_reviewed: 2026-06
# --- richer fields: use ONLY if iBlueprint retrieval can filter/rank on metadata ---
topic: student_eligibility
stage: [screener_results, application_not_started, application_started]
risk_level: high           # high | medium | low
requires_official_verification: true
escalation_required_if: [immigration, denial, conflicting_info]
---
```

## Official-source chunk

```yaml
---
state: WI
program: FoodShare
tier: official
title: FoodShare interview after applying
topic: application_interview
source_type: Wisconsin DHS
source_file: Foodshare_2026-01_Handbook.txt
last_reviewed: 2026-06
---
```

## Notes
- `tier` drives the voice-vs-authority rule: answer from `student_friendly`, verify/cite `official`.
- Leave the richer block out entirely if retrieval is similarity-only (see `chatbot/settings.md`).
- `last_reviewed` is the freshness anchor — bump it whenever the doc is re-verified.
