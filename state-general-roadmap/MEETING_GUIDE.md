# State-roadmap product meeting guide

## What changed

| Source feedback | Where it appears |
|---|---|
| Recommend one benefit first in separate-portal states | Separate-portal roadmap and comms; all eligible programs remain visible |
| Use self-reported progress to tailor next steps | `self-report.html` and Email 4 in both comms versions |
| Learn from denials and offer recovery support | “I heard back” branch, optional reason categories, and Travis build reference |
| Help students recognize interview calls | Roadmaps, Email 3, and Change 4 in the build reference |
| Avoid treating a portal click as application progress | Self-report caveats and build notes distinguish observed clicks, self-report, and unknown state activity |
| Avoid making the roadmap another destination if SBNC owns the screener | Listed as a meeting decision: render directly after results if feasible |

## Six decisions to leave with

1. **Recommendation rule:** Does the SNAP estimate alone set order, or is another rule needed for programs without comparable dollar values?
2. **Progress channel:** Roadmap, email/SMS, or both?
3. **Entry point:** Can the roadmap render immediately after an in-house screener?
4. **Phone data:** Who owns the verified agency number, source, and refresh cadence?
5. **Reporting guardrails:** What privacy rules and minimum cell sizes apply to geographic or demographic cuts?
6. **V1 scope:** Recommend-first screens plus one progress check-in, or a larger build?

## Suggested 30-minute flow

- **5 minutes:** Open `feedback-build-reference.html` in the compact package (or `examples/state-roadmap/feedback-build-reference.html` in the full source) and confirm that the four changes reflect the intent.
- **10 minutes:** Compare single-portal and separate-portal roadmaps.
- **5 minutes:** Review Email 4 and the self-report options as one shared data capability.
- **5 minutes:** Resolve the six decisions in the meeting hub.
- **5 minutes:** Confirm owner, first test, and implementation sequence.

## Evidence and measurement boundary

- **Observed by Navvy:** screener completion, message send/delivery where available, and link clicks.
- **Self-reported:** started, submitted, heard back, outcome, and denial reason.
- **Unknown without self-report or state integration:** application completion, documents submitted, interviews completed, decisions, and benefit receipt.

Report self-reported patterns among respondents, keep nonresponse visible, and do not present subgroup comparisons as causal or population denial rates.

## Good-enough V1

Ship the recommend-first presentation for separate portals and one low-friction progress check-in using the same event model. Keep denial recovery and tailored follow-up as the first extension once capture, persistence, record linkage, and reporting are reliable.
