# Steampunk — Implementation Spec

*Aliases:* Victorian sci-fi, gaslamp  
*Slug:* `steampunk` · *Category:* retrofuturism · *Era:* 1980s–present

**Origin.** Coined 1987 (K.W. Jeter); Victorian-era speculative tech.

**Reference example.** The Difference Engine; Wild Wild West; BioShock Infinite-adjacent.

## Signature move(s)

Brass-and-leather machinery treated as architecture: every raised surface gets a `--brass-sheen` metallic gradient edge, a riveted border, and a hard inset bevel (`--shadow-bevel`) that reads like stamped metal plating, not flat color. Ornate serif display type sits over a dark mahogany/tobacco surface as if engraved on a brass plaque.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Brass, copper, wood, leather materials
- Exposed gears, cogs, rivets, pipes, gauges
- Ornate Victorian serif type and filigree
- Analog steam-powered anachronistic tech

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/steampunk.css`.)

```css
/* Steampunk — design tokens (generated from style_catalog.json) */
/* 1980s–present | Coined 1987 (K.W. Jeter); Victorian-era speculative tech. */
:root {
  /* color */
  --color-bg: #241b12;
  --color-surface: #34281a;
  --color-surface-strong: #422f1c;
  --color-border: #8a6a3a;
  --color-text: #f2e2c4;
  --color-text-muted: #cbb188;
  --color-primary: #b5762b;
  --color-accent: #7a9e8e;
  --color-brass: #c99a3d;
  --color-rivet: #5a4326;
  /* radius */
  --radius-sm: 3px;
  --radius-md: 6px;
  --radius-lg: 10px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 2px 4px rgba(0,0,0,0.4);
  --shadow-md: 0 6px 14px rgba(0,0,0,0.5);
  --shadow-lg: 0 14px 30px rgba(0,0,0,0.55);
  --shadow-bevel: inset 0 1px 0 rgba(255,229,173,0.25), inset 0 -2px 3px rgba(0,0,0,0.5);
  /* font */
  --font-sans: 'Rockwell', 'Roboto Slab', Georgia, serif;
  --font-display: 'Playfair Display', 'Old Standard TT', 'Georgia', serif;
  --font-mono: 'Courier Prime', ui-monospace, monospace;
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
  /* extra (signature gradients, composite borders, filters) */
  --brass-sheen: linear-gradient(160deg, #e0b563, var(--color-brass) 50%, #8f6a2a);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Steampunk — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#241b12",
        "surface": "#34281a",
        "surface-strong": "#422f1c",
        "border": "#8a6a3a",
        "text": "#f2e2c4",
        "text-muted": "#cbb188",
        "primary": "#b5762b",
        "accent": "#7a9e8e",
        "brass": "#c99a3d",
        "rivet": "#5a4326",
      },
      borderRadius: {
        "sm": "3px",
        "md": "6px",
        "lg": "10px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 4px rgba(0,0,0,0.4)",
        "md": "0 6px 14px rgba(0,0,0,0.5)",
        "lg": "0 14px 30px rgba(0,0,0,0.55)",
        "bevel": "inset 0 1px 0 rgba(255,229,173,0.25), inset 0 -2px 3px rgba(0,0,0,0.5)",
      },
      fontFamily: {
        "sans": ["'Rockwell'", "'Roboto Slab'", "Georgia", "serif"],
        "display": ["'Playfair Display'", "'Old Standard TT'", "'Georgia'", "serif"],
        "mono": ["'Courier Prime'", "ui-monospace", "monospace"],
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
//   --brass-sheen: linear-gradient(160deg, #e0b563, var(--color-brass) 50%, #8f6a2a);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--brass-sheen` fill, `--shadow-bevel` for a stamped-metal look, `--color-rivet` corner dots at `--radius-sm`. Hover deepens the sheen angle; active flattens the bevel to read "pressed." |
| **Input** | Sunken `--color-surface` field with the bevel shadow inverted (dark inset only), thin `--color-border` frame like a gauge window; focus adds a thin `--color-accent` (verdigris) ring. |
| **Card** | Wood/leather `--color-surface`, `--color-border` brass trim, corner rivets, `--shadow-md`; header strip uses `--brass-sheen`. |
| **Nav** | Dark riveted brass rail; active item gets a brass-sheen underline "gauge needle." |
| **Modal** | Framed like a boiler hatch: thick brass border, corner bolts, `--shadow-lg`, scrim of `--color-bg` at high opacity. |
| **Table** | Ledger styling — `--font-mono` numerals, hairline `--color-border` rules, alternating rows tinted with `--color-surface-strong`. |
| **Tooltip** | Small brass-edged plaque, `--font-display` label, `--shadow-sm`. |
| **Badge** | Riveted brass pill with engraved-style uppercase text. |
| **Toggle** | Lever/valve metaphor: brass track, knurled knob that "rotates" between states rather than sliding flat. |
| **Loading** | Spinning gear glyph or a pressure-gauge needle sweep, not a generic spinner. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- The dark tobacco/brass palette is low-key by design — verify `--color-text-muted` on `--color-surface` still clears body-text contrast, not just headline contrast.
- Ornate display serifs (`--font-display`) get illegible at small sizes and in filigree-heavy headers — cap their use to headings ≥ `--text-xl` and use `--font-sans` for body copy.
- Bevel/inset shadows can visually hide focus rings — always pair focus with a solid `--color-accent` outline, not just a shadow shift.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Treat every raised surface as stamped or cast metal — bevel, rivets, sheen.
- ✅ Reserve ornate display type for headings; keep body text in a readable slab/serif.
- ✅ Use verdigris (`--color-accent`) sparingly as the "aged copper" counterpoint to brass.

## Don't

- ❌ Flatten the bevel shadows into plain drop shadows — that loses the machined-metal read.
- ❌ Set long paragraphs in the filigree display font.
- ❌ Mix in glossy/plastic gradients — everything should read as forged or oxidized metal, wood, or leather.

## Don't confuse this with…

*Commonly confused neighbors:* dieselpunk, victorian.

vs dieselpunk: steampunk is ornate brass/copper Victorian clockwork (rounded, filigreed); dieselpunk is blunt riveted steel interwar machine-age (angular, stenciled). vs victorian: victorian is the historical decorative style itself; steampunk fictionalizes it with visible mechanical technology.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
