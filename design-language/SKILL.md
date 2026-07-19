---
name: design-language
description: Apply a named UI design language consistently and correctly across a real codebase. Use whenever a user wants to style, restyle, theme, or "make it look like" a specific aesthetic — glassmorphism, liquid glass, neumorphism, claymorphism, skeuomorphism, brutalism, neubrutalism, flat design, Material Design 3 / Material You, Fluent, bento grid, corporate memphis, Swiss, Bauhaus, memphis, art deco, minimalism, maximalism, cyberpunk, vaporwave, synthwave, Y2K, Frutiger Aero, solarpunk, ASCII/terminal, holographic, risograph, dark academia, and 180+ more. ALSO use when the user describes a vibe, mood, or era WITHOUT the exact term ("2000s nostalgia", "make it premium/futuristic", "playful but not childish", "retro terminal", "clean and trustworthy"), when restyling existing components, or when writing a design spec / handing off tokens to another coding agent (Codex, Cursor, etc.). Covers design tokens, Tailwind config, per-component rules, accessibility fixes, and a consistency audit.
---

# Design Language Applicator

This skill makes you exceptional at **applying a named UI design language** —
neumorphism, glassmorphism, liquid glass, brutalism, Material 3, cyberpunk, Y2K,
Bauhaus, and 180+ others — *consistently and correctly* across a real codebase.
The goal is to take "make this brutalist" and turn it into a coherent,
accessible, fully-implemented UI with **zero guesswork**: real tokens, every
component type styled, the signature move repeated everywhere, contrast fixed.

## Scope

This skill governs the **visual/aesthetic system** — color, type, shape, depth,
motion, texture — *on top of* good UX. A style sits on top of solid information
architecture; it does not substitute for it. Keep the layout usable, the
hierarchy clear, and the accessibility intact; then apply the aesthetic.

## What's in here

```
SKILL.md                       ← you are here (workflow + navigation)
scripts/
  style_catalog.json           ← SINGLE SOURCE OF TRUTH: 186 styles, tokens for 33
  generate_tokens.py           ← style slug → CSS custom props + Tailwind fragment
  contrast_check.py            ← real WCAG AA/AAA math; pair or CSS-file scan
  consistency_audit.py         ← the "half-applied style" detector (run this last)
references/
  00-flagship-implementation-specs/<slug>.md   ← full deep spec per top style
  01..09-<family>.md           ← every catalogued style, grouped by family
  style-selection-decision-tree.md   ← vague vibe/brief → specific style
assets/
  starter-themes/<slug>.css    ← drop-in token file (+ base components for top styles)
  starter-themes/<slug>.tailwind.config.fragment.js
  component-examples/<slug>.html  ← fully-styled button/card/nav examples
```

**Everything derives from `scripts/style_catalog.json`.** The prose files and the
scripts read the same catalog, so don't hand-edit generated files in a way that
makes them disagree with the JSON — change the source and regenerate.

## Workflow

### 1. Identify the target style

- **User named a style** (e.g. "glassmorphism", "neubrutalism", "Material You"):
  resolve it to a slug. `python3 scripts/generate_tokens.py --list` shows every
  slug and alias. Aliases resolve too ("soft UI" → neumorphism).
- **User described a vibe/mood/era** ("2000s nostalgia", "premium and
  futuristic", "playful", "retro terminal"): open
  `references/style-selection-decision-tree.md` and map it to a style or a short
  shortlist. **Pin the decade** for anything "retro/nostalgic" — the #1 mistake
  is the wrong era (Y2K vs Frutiger Aero vs vaporwave are all "2000s").
- **Disambiguate confusable neighbors before building.** Glassmorphism vs liquid
  glass vs Frutiger Aero; neubrutalism vs brutalism vs claymorphism; Material 3
  vs Material 2. If the brief could mean either, ask one question (the decision
  tree lists the exact questions) — a wrong neighbor yields a subtly wrong UI.

### 2. Pull the implementation spec

- **Flagship style** (33 of them): read
  `references/00-flagship-implementation-specs/<slug>.md`. It has the full token
  set, Tailwind fragment, per-primitive component rules, signature move(s),
  accessibility corrections, do/don't, and "don't confuse with X".
- **Non-flagship style** (the other 150+): read its entry in the matching family
  file (`references/0X-<family>.md`) for era, traits, example, and confusions,
  then **derive tokens on the spot using the same schema** as the flagship specs
  (color, radius, shadow, blur, font, text/type-scale, space, ease, extra) and
  the traits as your guide. `generate_tokens.py <slug>` prints that metadata for
  non-flagship styles to seed you.
- **Style not in the catalog at all**: research it live (web search the
  era/origin, 3–5 defining visual traits, and one real reference example),
  then derive tokens with the same schema. Add it to the catalog if it'll recur.

### 3. Apply it consistently — token-first

This is where "looks intentional" is won or lost. In order:

1. **Tokens first.** Generate the token layer and put it in one place:
   ```bash
   python3 scripts/generate_tokens.py <slug> ./out   # writes .css + tailwind fragment
   ```
   Or copy `assets/starter-themes/<slug>.css` directly (the top styles also ship
   base component classes in that file). Wire the whole UI to the tokens
   (`var(--color-primary)`, not a raw hex) so there's a single source of truth.
2. **Walk every component type.** Go through the 10 primitives in the spec's
   component table — button (default/hover/active/disabled/focus), input, card,
   nav, modal, table, tooltip, badge, toggle, loading/empty. Style each so it
   expresses the style's signature move. Don't style the hero and leave the
   table looking default.
3. **Repeat the signature move everywhere relevant.** The 1–2 moves that make the
   style recognizable (the hard offset shadow, the frosted blur, the neon edge
   glow) go on *every* surface that warrants them — not once decoratively.
4. **Run the accessibility pass.** Apply the spec's style-specific corrections
   (scrims for glass, color-not-just-emboss for neumorphism, reduced-motion for
   glitch/cyberpunk, contrast fixes for pastel/neon). Then verify:
   ```bash
   python3 scripts/contrast_check.py "#f8fafc" "#0f172a"     # a real text/bg pair
   python3 scripts/contrast_check.py --css out/<slug>.css --bg "#0f172a"
   ```

### 4. If the target is a spec for ANOTHER coding agent

When asked to write a design brief/spec for Codex, Cursor, or another agent
(rather than applying it yourself), **hand over the tokens explicitly**, not just
the style name. Include: the full CSS custom-property block *and* the Tailwind
fragment (from `generate_tokens.py`), the per-primitive component rules, the
signature move with the instruction to repeat it, and the accessibility
corrections. A style name alone will produce an inconsistent result; concrete
tokens + component rules will not.

### 5. Final check — before you call it done

Run the consistency audit. **This is the single highest-leverage step for making
a styled UI look intentional instead of half-applied.**

```bash
python3 scripts/consistency_audit.py <target-dir> --style <slug>
# or, if you generated/derived a token file:
python3 scripts/consistency_audit.py <target-dir> --tokens out/<slug>.css
```

It flags hardcoded colors/radii/shadows/fonts that don't reference the style's
token set — the rogue `#3b82f6` in a system built on `var(--color-primary)`, the
`border-radius: 5px` in a 16px system. Replace each flagged value with the right
token (or, if genuinely needed, add it to the token set so the system stays the
single source of truth). If code execution isn't available in the target
environment, do the same reasoning by hand: scan for literal color/radius/shadow
values and confirm each maps to a token.

## Quick reference: the 33 flagship (deep-spec) styles

`glassmorphism · liquid-glass · neumorphism · claymorphism · skeuomorphism ·
flat-design · material-design-3 · fluent-design-2 · brutalism · neubrutalism ·
corporate-memphis · bento-grid · swiss-design · bauhaus · memphis-design ·
art-deco · constructivism · de-stijl · pop-art · cyberpunk · vaporwave ·
synthwave · y2k-futurism · frutiger-aero · solarpunk · ascii-terminal ·
holographic · risograph · glitch-art · minimalism · maximalism · scandinavian ·
dark-academia`

For any other style, use its family file + the token schema. Run
`python3 scripts/generate_tokens.py --list` for all 186 slugs and aliases, or
`--flagship` for just the deep-spec set.

## Principles that make application good, not just present

- **Token-first, always.** A hardcoded value anywhere is future inconsistency.
- **Consistency > intensity.** The signature move applied everywhere at 70%
  beats it applied once at 100%.
- **Accessibility is not optional.** Many trendy styles fight legibility by
  default; the spec tells you exactly how to fix each one. Verify, don't assume.
- **Respect the era/platform.** A named movement or platform system has real
  rules — honor them rather than approximating a vibe.
- **Aesthetic sits on UX.** Never let the style degrade usability, contrast,
  focus states, touch targets, or reading order.
