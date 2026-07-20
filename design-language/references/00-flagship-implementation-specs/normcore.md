# Normcore — Implementation Spec

*Aliases:* anti-fashion minimal  
*Slug:* `normcore` · *Category:* niche · *Era:* 2013–present

**Origin.** Deliberate unremarkable ordinariness (K-Hole 2013).

**Reference example.** Normcore fashion editorials.

## Signature move(s)

Refuse every trend cue: system fonts, `1px solid` plain rules (`--plain-rule`), gentle low-key shadows, and a muted beige/gray/denim palette that could belong to any decade — the entire signature move is the *absence* of a signature move, applied with total consistency so it reads as intentional restraint, not an unfinished design.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Neutral, generic, unbranded plainness
- Beige/gray/denim ordinariness
- Anti-trend, blends in
- Comfort over statement

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/normcore.css`.)

```css
/* Normcore — design tokens (generated from style_catalog.json) */
/* 2013–present | Deliberate unremarkable ordinariness (K-Hole 2013). */
:root {
  /* color */
  --color-bg: #e9e7e2;
  --color-surface: #f5f4f1;
  --color-surface-strong: #dcdad4;
  --color-border: #b8b5ad;
  --color-text: #2f2e2b;
  --color-text-muted: #6a6862;
  --color-primary: #4a5568;
  --color-accent: #7c8a99;
  --color-denim: #5c7189;
  /* radius */
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 1px 2px rgba(47,46,43,0.08);
  --shadow-md: 0 2px 6px rgba(47,46,43,0.1);
  --shadow-lg: 0 6px 14px rgba(47,46,43,0.12);
  /* font */
  --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
  --font-display: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
  --font-mono: ui-monospace, 'Courier New', monospace;
  /* text */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 2rem;
  --text-4xl: 2.5rem;
  --text-5xl: 3.25rem;
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
  --ease-standard: ease;
  /* extra (plain rule, generic accent line) */
  --plain-rule: 1px solid var(--color-border);
  --generic-accent-line: 2px solid var(--color-denim);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Normcore — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#e9e7e2",
        "surface": "#f5f4f1",
        "surface-strong": "#dcdad4",
        "border": "#b8b5ad",
        "text": "#2f2e2b",
        "text-muted": "#6a6862",
        "primary": "#4a5568",
        "accent": "#7c8a99",
        "denim": "#5c7189",
      },
      borderRadius: {
        "sm": "4px",
        "md": "6px",
        "lg": "8px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 2px rgba(47,46,43,0.08)",
        "md": "0 2px 6px rgba(47,46,43,0.1)",
        "lg": "0 6px 14px rgba(47,46,43,0.12)",
      },
      fontFamily: {
        "sans": ["-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "Arial", "sans-serif"],
        "display": ["-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "Arial", "sans-serif"],
        "mono": ["ui-monospace", "'Courier New'", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem",
        "sm": "0.875rem",
        "base": "1rem",
        "lg": "1.125rem",
        "xl": "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
        "5xl": "3.25rem",
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
        "standard": "ease",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (plain rule/accent line borders).
// Add them as CSS custom properties or arbitrary values:
//   --plain-rule: 1px solid var(--color-border);
//   --generic-accent-line: 2px solid var(--color-denim);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--radius-sm`, `--color-primary` fill, `--shadow-sm`; hover just darkens fill slightly — no glow, no bounce, no flourish. |
| **Input** | `--plain-rule` border on `--color-surface`; focus swaps to `--generic-accent-line` (denim), nothing more elaborate. |
| **Card** | `--radius-md`, `--plain-rule` border, `--shadow-sm` — the most restrained card in the catalog, on purpose. |
| **Nav** | Flat `--color-surface` bar, `--plain-rule` bottom border, active link gets `--generic-accent-line` underline. |
| **Modal** | `--radius-md`, `--shadow-md`, `--plain-rule` border — no glow, no scrim color beyond a simple translucent black. |
| **Table** | `--plain-rule` row dividers, `--color-surface-strong` header — this is where normcore shines: maximally legible, zero decoration. |
| **Tooltip** | Small `--color-surface-strong` chip, `--plain-rule` border, `--shadow-sm`. |
| **Badge** | `--radius-sm`, muted `--color-accent` or `--color-denim` fill, no pill unless the product's other badges are pills elsewhere. |
| **Toggle** | Plain rectangular or slightly rounded track, `--color-denim` active fill — utilitarian, no personality flourish. |
| **Loading** | A plain rotating ring spinner in `--color-primary` — the most generic, recognizable loading indicator available. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Because the whole palette is low-saturation beige/gray, double-check `--color-text-muted` on `--color-surface-strong` clears 4.5:1 with `contrast_check.py` — "quiet" easily drifts into "too low-contrast" without a saturated color to fall back on.
- Since this style relies on `--plain-rule` (a thin 1px border) as the primary affordance for inputs and dividers, ensure focus states still add a visibly thicker `--generic-accent-line` — a barely-different 1px border alone is not a sufficient focus indicator.
- Resist any inherited motion/shadow flourishes from a component library default theme — normcore requires actively stripping decoration, not just picking muted colors.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Use system UI fonts exclusively — no custom display or script fonts anywhere.
- ✅ Keep every shadow subtle and neutral-toned; normcore should look barely elevated at all.
- ✅ Apply `--plain-rule` consistently as the single connective visual language across all components.

## Don't

- ❌ Add any bold accent color, gradient, or glow — it immediately breaks the "unremarkable" premise.
- ❌ Introduce a display/script font for headlines — headlines just get bigger, not fancier.
- ❌ Over-round corners into pill shapes by default — normcore favors small, practical radii.

## Don't confuse this with…

*Commonly confused neighbors:* minimalism, monochrome.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
