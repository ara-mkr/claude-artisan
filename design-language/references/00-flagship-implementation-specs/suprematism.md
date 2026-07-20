# Suprematism — Implementation Spec

*Aliases:* Malevich style  
*Slug:* `suprematism` · *Category:* historical · *Era:* 1913–1920s

**Origin.** Russia (Kazimir Malevich).

**Reference example.** Malevich's *Black Square* (1915); *Suprematist Composition*.

## Signature move(s)

A flat, solid-color geometric plane — a rectangle or bar, never a card-shaped rounded rect — tilted a few degrees off-axis and set adrift with zero shadow, zero gradient, zero border-radius. The tilt is the only "energy" allowed; everything else stays perfectly flat, as if cut from colored paper and dropped onto a white void. Repeat the tilted-plane accent as a background motif behind nav and card, never as a one-off hero graphic.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Pure geometric abstraction floating in space
- Limited palette, often on white ground
- Feeling over representation
- Circles, rectangles, crosses, tilted planes

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/suprematism.css`.)

```css
/* Suprematism — design tokens (generated from style_catalog.json) */
/* 1913–1920s | Russia (Kazimir Malevich). */
:root {
  /* color: pure limited palette floating on white ground */
  --color-bg: #f7f7f5;
  --color-surface: #ffffff;
  --color-surface-strong: #efefec;
  --color-border: #16161a;
  --color-text: #16161a;
  --color-text-muted: #55555c;
  --color-primary: #d21f1f;
  --color-accent: #1c4fa0;
  --color-black: #16161a;
  --color-ochre: #e0a415;
  /* radius: pure geometry — no rounding, circles are the only curve */
  --radius-sm: 0px;
  --radius-md: 0px;
  --radius-lg: 0px;
  --radius-pill: 999px;
  /* shadow: flat forms floating in space, no depth cues */
  --shadow-sm: none;
  --shadow-md: none;
  --shadow-lg: none;
  /* font */
  --font-sans: 'Futura', 'Helvetica Neue', system-ui, sans-serif;
  --font-display: 'Futura', 'Helvetica Neue', sans-serif;
  --font-mono: ui-monospace, monospace;
  /* text */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.375rem;
  --text-2xl: 1.75rem;
  --text-3xl: 2.25rem;
  --text-4xl: 3rem;
  --text-5xl: 4rem;
  /* space */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-24: 96px;
  /* ease */
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  /* extra: tilted geometric plane accent — a rotated rectangle floating behind content, the signature move */
  --tilt-plane: 8deg;
  --plane-red: var(--color-primary);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Suprematism — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f7f7f5",
        "surface": "#ffffff",
        "surface-strong": "#efefec",
        "border": "#16161a",
        "text": "#16161a",
        "text-muted": "#55555c",
        "primary": "#d21f1f",
        "accent": "#1c4fa0",
        "black": "#16161a",
        "ochre": "#e0a415",
      },
      borderRadius: {
        "sm": "0px",
        "md": "0px",
        "lg": "0px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "none",
        "md": "none",
        "lg": "none",
      },
      fontFamily: {
        "sans": ["'Futura'", "'Helvetica Neue'", "system-ui", "sans-serif"],
        "display": ["'Futura'", "'Helvetica Neue'", "sans-serif"],
        "mono": ["ui-monospace", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem",
        "sm": "0.875rem",
        "base": "1rem",
        "lg": "1.125rem",
        "xl": "1.375rem",
        "2xl": "1.75rem",
        "3xl": "2.25rem",
        "4xl": "3rem",
        "5xl": "4rem",
      },
      spacing: {
        "1": "4px",
        "2": "8px",
        "3": "12px",
        "4": "16px",
        "6": "24px",
        "8": "32px",
        "12": "48px",
        "16": "64px",
        "24": "96px",
      },
      transitionTimingFunction: {
        "standard": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --tilt-plane: 8deg;
//   --plane-red: var(--color-primary);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Square-cornered box, 2px black border, `--shadow-sm` (none) — no depth, only a `rotate(-1.5deg)` tilt on hover as if the plane shifted. Primary fills solid `--color-primary`. |
| **Input** | Flat rectangle, 2px black border, `--radius-sm` (0px); focus swaps the border to `--color-accent` with a hard ring, never a soft glow. |
| **Card** | Flat white/surface block with a small `--color-ochre` bar tucked behind one corner at `calc(var(--tilt-plane) * -1)`, standing in for depth since real shadows are forbidden. |
| **Nav** | A bar with one solid tilted-plane accent (`--plane-red`, `--tilt-plane`) parked at the edge like a Suprematist composition element. |
| **Modal** | A flat white plane centered over a dimmed void; no blur, no gradient scrim — just a solid darkened `--color-black` overlay at reduced opacity. |
| **Table** | Hard-ruled grid, 2px black borders only, header row in `--color-surface-strong`; no zebra striping — Suprematism doesn't do texture. |
| **Tooltip** | Small square chip, black border, solid fill, no shadow — floats via a 1–2px offset rather than blur. |
| **Badge** | Pill (`--radius-pill`, the one permitted curve) filled with `--color-accent`, bold small caps. |
| **Toggle** | Square track with a circular knob — the only place a circle appears outside decoration — snapping instantly, no easing overshoot. |
| **Loading** | A single tilted bar sweeping left to right like a plane crossing the canvas, or a rotating circle — never a soft pulsing skeleton. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Zero shadows mean interactive affordance depends entirely on border weight and color — keep the 2px black border on every clickable element so buttons don't read as flat decoration.
- The limited red/blue/ochre/black palette must still clear 4.5:1 against `--color-bg`; verify each accent color pairing individually with `contrast_check.py`, since two of them (`--color-accent` blue, `--color-ochre`) sit close to the AA line on white.
- Reserve rotation (`--tilt-plane`) for decorative background elements only — never rotate body copy or form labels, since tilted text is measurably slower to read.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Keep every surface perfectly flat — no shadow, no blur, no gradient fill.
- ✅ Limit the palette to black, white, and 2–3 pure hues (red/blue/ochre) system-wide.
- ✅ Use rotation sparingly and only on non-text geometric accents.

## Don't

- ❌ Add drop shadows or rounded corners "for polish" — it breaks the flat-plane logic entirely.
- ❌ Introduce a fourth or fifth accent color — Suprematism's power is restraint.
- ❌ Rotate paragraphs or form fields — tilt is for shapes, not for reading.

## Don't confuse this with…

*Commonly confused neighbors:* constructivism, de-stijl. vs constructivism: Suprematism is non-objective and feeling-driven with no political/typographic machinery; Constructivism reintroduces diagonal typography, photomontage, and propaganda function on top of the same geometric vocabulary. vs De Stijl: De Stijl locks to a strict orthogonal grid (Mondrian) with primary colors only; Suprematism's planes float off-grid and tilt freely.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
