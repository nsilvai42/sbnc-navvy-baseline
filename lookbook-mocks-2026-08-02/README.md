# Navvy mocks handoff — roadmaps, ineligible pages, components (2026-08-02)

Design reference for the Rails lookbook (roadmap.navvyai.com). Built in plain HTML with **Tailwind v4 utilities on the app's real `roadmap-*` theme tokens**, so markup ports with minimal translation. Every surface now ships in **both a mobile and a desktop version**.

## What's in here

| Folder | Surface | Canonical file | Companion |
|---|---|---|---|
| `roadmap_general/` | State-general roadmap, Illinois worked example (4 journey states) | un-suffixed = **desktop** (1180px, ticket corners) | `--mobile` (448px, symmetric rounding) |
| `roadmap_wisconsin/` | Application roadmap, Wisconsin/Impactica flow (4 journey states) | un-suffixed = **mobile** (448px) | `--desktop` (1180px, ticket corners) |
| `ineligible/` | Ineligible / $0 result page — Illinois + Wisconsin variants (new surface) | un-suffixed = **desktop** | `--mobile` |
| `components/` | Reusable component specimens (see below) | — | — |
| `tokens/` | `tailwind-theme.css` — the full token set as a Tailwind v4 `@theme` block, for verification | — | — |

The **canonical file is each surface's primary viewport** (~85–90% of student traffic is mobile, so the Wisconsin app surface is mobile-first; the state-general page and ineligible page were designed desktop-first and re-shelled down). Companions carry identical content in the other shell — first-line HTML comment in each file says which one it is.

## How to port (Tailwind notes)

- Class names use the app's compiled theme tokens (`bg-roadmap-coral`, `border-roadmap-line`, `font-roadmap-body`, …) verified against the compiled CSS 2026-08-02. **Do not copy the inline `@theme` block** — it exists only so the standalone files render; the app's theme already defines every token.
- The only non-token values: the pale-yellow tip callout `#fdf8e3` / `#ecdfa8` (proposed additions, e.g. `--color-roadmap-tip` / `--color-roadmap-tip-line`) and one-off shadows written inline (`shadow-[0_8px_18px_#ff5a5f4d]` mobile CTA, `shadow-[0_10px_22px_#ff5a5f47]` desktop CTA) matching current lookbook values.
- Radius systems per surface: mobile = symmetric `rounded-lg/xl/2xl/full`; desktop state roadmap = ticket corners (`rounded-[26px_6px]` hero, `[6px_22px]` panel, `[14px_4px]` step cards, `[12px_3px]` CTAs, `[6px_2px]` chips, `[10px_3px]` icon tiles). Never mixed.
- Interactivity is visual-state only (agreed 2026-07-28): no data capture, no localStorage, no network. External links open new tabs. Step-navigation controls (see below) link between the four state files in these mocks as a stand-in for the app's front-end step flip — bind them to the roadmap's user-interaction-only step state.
- Each file now declares `<meta charset="utf-8">` — keep it if previews are ever opened from disk (em dashes garble without it).

## Components (`components/`)

Starter set of two, extracted from the shipped mocks, per 2026-07-28 agreement — ready to drop into a lookbook "components" section:

1. **`component--roadmap_step_card.html`** — the timeline step in all three states (done / current / locked), mobile and desktop variants, with connector and usage rules.
2. **`component--tile_list.html`** — the stacked-tile pattern: info sub-tile (± status chip), resource row (± CTA), doc chip (mobile stack + desktop 3-up), and the proposed tip callout.

Each specimen page labels its variants and states the surface-specific radius/token swaps inline.

## Key deltas vs. the live lookbook (what to implement)

### Both roadmap surfaces
- Greens unified on `roadmap-green #0e744a` — `roadmap-green-bold #0e7a4e` is retired.
- Hero: solid green, no decorative circles/dots; chip → headline → hairline hedge footnote. Dollar amount in Archivo Black `roadmap-green-bright`.
- Done steps collapse to a slim green-soft bar; locked steps show eyebrow + title only.
- Timeline connectors (desktop): done→done solid green; gradient green→coral only entering the current step; current→upcoming coral→gray.
- Canonical step titles: "Check your eligibility" / "Select programs to apply to" (WI) / "Submit your application" (general) / "Complete follow-up requests" / "Get your decision".
- Contact-channel phrasing everywhere: "email, mail, and voicemail".
- Specimen student name is now **Jordan** throughout (was "Niko" in some earlier copies).

### Desktop state-general roadmap (Illinois)
- Worked example is Illinois: Illinois ABE (abe.illinois.gov), Manage My Case, Illinois Link card; the state (not county) decides.
- Per-state headings: 01 "Your next step: Check if you're eligible" · 02 "Next: Apply with your state" · 03 "After applying: Watch for follow-up requests" · 04 "Heard back? Here's what you need to know."
- **Step navigation (2026-08-02, both shells):** every card signals how to move forward or back. Done bars carry a green "← Go back" link (desktop: right end of the bar; mobile: right of the DONE label). The current card carries a coral-outlined self-report button below its content — 01 "I've already checked my eligibility — show step 2" · 02 "I've submitted my application — show step 3" · 03 "I've finished my follow-ups — show step 4"; the final step has none. Locked desktop cards show a padlock hint ("Opens after step N"). A footnote under the list reassures students that updating a step never changes the real application. In the mocks these controls link between the state files; in the app they're front-end state flips only (no data capture).
- 02 current step: doc chips + "You can still start even if you don't have everything." + coral CTA "Continue to my application" + self-report advance button (replaces the earlier `#step-3` anchor).
- 03 current step: three white sub-tiles (Save your confirmation / Check for messages and follow-ups / Respond by the deadline + IMPORTANT chip) + pale-yellow tip callout.
- 04 current step: "Illinois decides within 30-45 days…" + three sub-tiles (Check Manage My Case / If approved / If denied).

### Mobile Wisconsin roadmap
- 01: no "Good news" chip; hedge shortened to "Applying is free — your agency makes the final decision."
- CTAs: 01 "Start my eligibility check" · 02 "Choose my benefits" · 03 "Continue my application".
- 04_all_done: Archivo "Congrats on applying!" heading, done-summary tile with green "Review my application" button, "What to expect" mini-timeline.

### Ineligible pages (new surface)
- Navy hero (no dollars, no greeting) + hedge "Screeners aren't perfect — only the state can make the official call, and applying is always free."
- Section 1 "FREE HELP NEAR YOU": findhelp.org row carries the single coral CTA; 211 and campus rows quieter.
- Section 2 "WORTH A SECOND LOOK": three green-check reassurance lines + navy-outline "Retake the screener" + muted "apply anyway" link.
- Wisconsin variant: `{campus_resource_url}` placeholder (per-school config) and an unwired "apply anyway" href.

## Open items for implementation
1. Wisconsin ineligible "apply anyway" URL + `{campus_resource_url}` per-school config.
2. WI 04_all_done: add the ACCESS link ("ACCESS account" → access.wisconsin.gov) — reference currently has no hyperlink, matching the live page.
3. CTA min-height on general 02 is 48px (surface spec says 56px) — density chosen deliberately; confirm preference.
4. "1 in 3 students qualify…" headline (general 01 hero) pending SBNC voice sign-off.
5. General `05_all_done` and `default` previews were not re-designed this round — the live lookbook versions still stand.
6. Retake-screener buttons are `href="#"` placeholders — wire to the screener entry point.

## Change-request workflow
Per our 2026-07-28 agreement: Slack the specific copy or code change, linking the lookbook preview URL. These files are structured so a single tile/step/section can be copied out and pasted as the change request.

## Design tokens (verified against compiled CSS, 2026-08-02)
navy `#1e2658` · navy-deep `#11163a` · navy-appbar `#16204f` · coral `#ff5a5f` · coral-dark `#e84a4f` · coral-soft `#ffedef` · coral-tint `#fffafb` · coral-line `#ffb9bc` · coral-divider `#f0dadd` · green `#0e744a` · green-deep `#075d3a` · green-bright `#68e0a0` · green-soft `#e5f6ee` · green-line `#cae9da` · cream `#f7f6ef` · line `#dfe3ea` · line-strong `#d9dde5` · muted `#6f768c` · muted-dim `#60687a` · muted-soft `#9aa0b0` · muted-cool `#7a8093` · tile `#f1f3f5` · surface-muted `#f7f8fa`. Fonts: Poppins (400–800) body, Archivo Black display. Full set in `tokens/tailwind-theme.css`.
