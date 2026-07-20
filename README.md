<img width="7616" height="1800" alt="CLAUDE ARTISAN HEADER copy" src="https://github.com/user-attachments/assets/8b37aa7e-1b22-459d-93eb-d195def9f600" />
<img width="7616" height="3080" alt="banner_grid_landscape copy" src="https://github.com/user-attachments/assets/264709c1-3297-4dd7-b1dd-150ece8a925e" />
# Claude Artisan

**A Claude Code skill that turns "make this brutalist" into a finished, accessible, production UI — zero guesswork.**

`design-language` is a skill repository built for [Claude Code](https://claude.com/claude-code) (and any coding agent that can read Anthropic-format skills). Point it at a codebase, say a style name or just a vibe, and it ships real tokens, real components, real accessibility fixes — not a mood board.

```
"make my landing page glassmorphic"        → resolved instantly, named style
"2000s nostalgia, chrome and bubbles"       → resolved via decision tree → Y2K Futurism
"premium and futuristic, not childish"      → vibe → shortlist → disambiguated
"a spec I can paste into Cursor for this"   → tokens handed off explicitly, no ambiguity
```

---

## Why this exists

Design systems live in people's heads. An agent told "make it brutalist" will improvise — wrong border-radius, half the buttons still soft-shadowed, contrast that fails AA, a signature move applied once and forgotten. `design-language` exists so an agent applies a style **the way someone who actually knows that style would**: tokens first, every component walked, the signature move repeated everywhere on purpose, then an accessibility pass, then a drift check before calling it done.

---

## By the numbers

| | |
|---|---|
| **Styles cataloged** | 186, researched — not invented |
| **Deep implementation specs** | 186 — every style, full implementation-grade |
| **Style families** | 9 |
| **Starter theme files** | 372 (186 CSS + 186 Tailwind fragments) |
| **Component examples** | 186 fully-styled HTML references — one per style |
| **Scripts** | 3, stdlib-only, all tested |
| **Single source of truth** | `scripts/style_catalog.json` — everything else derives from it |

Every one of the 186 cataloged styles now has the full treatment: tokens, Tailwind fragment, a 10-primitive component-rules table, style-specific accessibility corrections, do/don't, and confusable neighbors — see `references/00-flagship-implementation-specs/`.

<details>
<summary><strong>All 9 families</strong> (186 styles total)</summary>

| Family | Count | Covers |
|---|---:|---|
| Niche subculture & kitsch | 41 | dark academia, cottagecore, webcore, cyberprep — accent layers, not full systems |
| Retrofuturism & speculative genres | 29 | cyberpunk, solarpunk, steampunk, dieselpunk, atompunk, cassette futurism |
| Texture / material / rendering | 29 | chrome, holographic, halftone, risograph, isometric, voxel, pixel art, glitch |
| Historical graphic movements | 26 | Bauhaus, Swiss, De Stijl, Constructivism, Art Deco, Memphis, Pop Art, Dada |
| Flat, material & platform systems | 22 | Material 3, Fluent 2, Liquid Glass, Carbon, Ant Design, Polaris, USWDS |
| Minimal / maximal / organic | 15 | minimalism, maximalism, bento grid, biomorphic, Scandinavian |
| Morphism / tactile-dimensional | 9 | skeuomorphism, neumorphism, claymorphism, glassmorphism hybrids |
| Brutalist & anti-design | 8 | brutalist web, neubrutalism, anti-design, Swiss Punk |
| Glass & transparency | 7 | glassmorphism, liquid glass, acrylic, aero glass, frosted variants |

</details>

---

## Repo map

```
design-language/
├── SKILL.md                                    ← workflow, navigation, triggers (159 lines)
├── references/
│   ├── 00-flagship-implementation-specs/       ← 186 files — one per style, full deep-spec
│   ├── 01-morphism-tactile-dimensional.md
│   ├── 02-glass-transparency-family.md
│   ├── 03-brutalist-antidesign.md
│   ├── 04-flat-material-platform-systems.md
│   ├── 05-historical-graphic-movements.md
│   ├── 06-retrofuturism-punk-genres.md
│   ├── 07-minimal-maximal-organic.md
│   ├── 08-texture-material-rendering.md
│   ├── 09-niche-subculture-kitsch.md
│   └── style-selection-decision-tree.md        ← vague vibe → specific style
├── scripts/
│   ├── style_catalog.json                      ← SINGLE SOURCE OF TRUTH (186 styles)
│   ├── generate_tokens.py                      ← slug → CSS tokens + Tailwind fragment
│   ├── contrast_check.py                       ← real WCAG AA/AAA luminance math
│   └── consistency_audit.py                    ← the "half-applied style" detector
├── assets/
│   ├── starter-themes/                         ← drop-in .css (186) + .tailwind.config.fragment.js (186)
│   └── component-examples/                     ← styled button/card/nav HTML — one per style (186)
└── LICENSE.txt
```

Everything downstream — the 9 category files, the 186 deep specs, the starter themes, both scripts — reads `scripts/style_catalog.json`. Change the catalog, regenerate; never hand-edit the derived files out of sync with it.

---

## How an agent actually uses it

1. **Identify the target style.** Named style → resolve slug/alias (`glassmorphism`, `"soft UI"` → `neumorphism`). Vibe/era/mood → `references/style-selection-decision-tree.md`, which forces a decade pin for anything "retro" (Y2K vs. Frutiger Aero vs. vaporwave are all "2000s" and easy to conflate).
2. **Pull the spec.** Every style has a full deep-spec file in `references/00-flagship-implementation-specs/`.
3. **Apply consistently, token-first.** Walk every primitive — button, input, card, nav, modal, table, tooltip, badge, toggle, loading/empty state — and repeat the signature move everywhere it's relevant, not once decoratively.
4. **Fix accessibility for that specific style.** Every flagship spec lists the exact contrast/scrim/motion-reduction corrections that style needs by default.
5. **Run the drift check before calling it done.**

```bash
python3 scripts/consistency_audit.py ./src --style glassmorphism
# exit 0 = clean · exit 1 = drift found (hardcoded values that skipped the token set)
```

6. **Handing off to another agent** (Codex, Cursor, etc.)? Tokens are handed over explicitly — never just a style name.

---

## The three scripts

All standard-library Python, no dependencies, all tested against synthetic cases before being called done.

### `generate_tokens.py` — style → paste-ready tokens
```bash
python3 scripts/generate_tokens.py glassmorphism ./out   # writes .css + .tailwind.config.fragment.js
python3 scripts/generate_tokens.py --list                # every slug + alias
python3 scripts/generate_tokens.py --flagship             # all 186 now have deep specs
```

### `contrast_check.py` — real WCAG math, not an approximation
```bash
python3 scripts/contrast_check.py "#0f172a" "#f8fafc"     # manual pair
python3 scripts/contrast_check.py --css styles.css --bg "#0b0b0f"   # scan a file
```
Verified against known boundaries: black/white = 21.00:1, `#767676` on white = 4.54:1 (AA pass), `#777` = 4.48:1 (AA **fail**). Composites alpha over the assumed background so translucent glass fills are judged as they actually render.

### `consistency_audit.py` — the half-applied-style detector
```bash
python3 scripts/consistency_audit.py ./src --tokens glassmorphism.css
python3 scripts/consistency_audit.py ./src --style glassmorphism
```
Flags hex/`rgb()` colors, radius, shadow, and font-family literals that don't trace back to the applied style's token set — the exact drift that makes a styled UI look accidental instead of intentional. Regex-based by design (documented as a lightweight linter, not a CSS parser): treat every hit as a lead, not a verdict.

---

## Install

```bash
# Point Claude Code at the source directory directly:
design-language/
```

---

## Design ground rules this repo was held to

- **Research, don't invent.** Every cataloged style has a verified era, origin, and at least one real reference implementation.
- **No placeholders.** Every token is one that would genuinely ship — real hex-adjacent palettes, real `box-shadow`/`backdrop-filter` values, real easing curves.
- **Depth everywhere.** All 186 cataloged styles get the full implementation-grade treatment — tokens, Tailwind, component rules, a11y, do/don't, confusables.
- **Single source of truth.** The JSON catalog and every prose file agree by construction — the prose is generated from the catalog, not hand-synced.
- **Known deviations, stated up front:** six starter themes (glassmorphism, neubrutalism, claymorphism, neumorphism, brutalism, cyberpunk) are hand-tuned and deliberately left untouched by the generic generator — they beat the auto-generated output. The remaining 180 CSS/Tailwind files were generated from catalog tokens (33 originally hand-authored as flagship specs, 153 authored alongside their deep-spec write-up). The optional trigger-description eval/benchmark loop from skill-creator was not run; it's polish, not scope.

---

## License

MIT — see [`design-language/LICENSE.txt`](design-language/LICENSE.txt).
