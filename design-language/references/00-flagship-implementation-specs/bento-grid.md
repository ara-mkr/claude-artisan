# Bento Grid — Implementation Spec

*Aliases:* bento box layout, bento UI  
*Slug:* `bento-grid` · *Category:* minimal-organic · *Era:* 2022–present

**Origin.** Named after Japanese bento boxes; popularized by Apple keynote slides & MagicUI.

**Reference example.** Apple keynote feature slides; Vercel/Linear marketing; MagicUI.

## Signature move(s)

A modular grid of rounded-rectangle cells of varying sizes, each holding exactly one idea/feature, with consistent gaps. Scannable, dashboard-like composition (named after Japanese bento boxes).

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Modular rounded-rectangle cells of varied sizes
- Each cell one idea/feature; dense but tidy
- Consistent gaps, mixed media per cell
- Scannable dashboard-like composition

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/bento-grid.css`.)

```css
/* Bento Grid — design tokens (generated from style_catalog.json) */
/* 2022–present | Named after Japanese bento boxes; popularized by Apple keynote slides & MagicUI. */
:root {
  /* color */
  --color-bg: #0b0b0f;
  --color-surface: #16161d;
  --color-surface-2: #1f1f28;
  --color-text: #f5f5f7;
  --color-text-muted: #a1a1aa;
  --color-primary: #0a84ff;
  --color-accent: #30d158;
  --color-border: rgba(255,255,255,0.08);
  /* radius */
  --radius-sm: 14px;
  --radius-md: 20px;
  --radius-lg: 28px;
  --radius-cell: 24px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.4);
  --shadow-cell: 0 8px 30px rgba(0,0,0,0.35);
  /* font */
  --font-sans: 'Inter', 'SF Pro Text', system-ui, sans-serif;
  --font-display: 'Inter Display', 'SF Pro Display', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
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
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
  /* extra (signature gradients, composite borders, filters) */
  --grid-gap: 16px;
  --cell-padding: 24px;
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Bento Grid — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0b0b0f",
        "surface": "#16161d",
        "surface-2": "#1f1f28",
        "text": "#f5f5f7",
        "text-muted": "#a1a1aa",
        "primary": "#0a84ff",
        "accent": "#30d158",
        "border": "rgba(255,255,255,0.08)",
      },
      borderRadius: {
        "sm": "14px",
        "md": "20px",
        "lg": "28px",
        "cell": "24px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 2px rgba(0,0,0,0.4)",
        "cell": "0 8px 30px rgba(0,0,0,0.35)",
      },
      fontFamily: {
        "sans": ["'Inter'", "'SF Pro Text'", "system-ui", "sans-serif"],
        "display": ["'Inter Display'", "'SF Pro Display'", "system-ui", "sans-serif"],
        "mono": ["'JetBrains Mono'", "monospace"],
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
        "standard": "cubic-bezier(0.2, 0, 0, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --grid-gap: 16px;
//   --cell-padding: 24px;
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Lives inside a cell; secondary to the cell itself. Rounded, subtle. |
| **Input** | Given its own cell or a prominent cell; large and clear. |
| **Card** | The cell IS the card: `--radius-cell`, consistent `--cell-padding`, one focal element each. |
| **Nav** | Often a top bar above the grid; or the first cell acts as brand/nav. |
| **Modal** | A larger overlay; the grid itself rarely modals. |
| **Table** | A data-dense cell or a wide cell spanning columns. |
| **Tooltip** | Standard small chip inside a cell. |
| **Badge** | Small label in a cell corner (e.g., 'New', a metric). |
| **Toggle** | Inside a settings cell. |
| **Loading** | Skeleton cells matching the grid so layout doesn't shift. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Ensure a logical DOM/reading order independent of the visual grid placement.
- Each cell should be a real landmark/section with a heading, not just a div.
- Maintain contrast per cell — cells may have different backgrounds.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Vary cell sizes to create rhythm; one hero cell.
- ✅ Keep gaps and corner radius uniform across all cells.
- ✅ One idea per cell — resist cramming.

## Don't

- ❌ Make every cell the same size (loses the bento charm).
- ❌ Overflow cells with multiple competing ideas.
- ❌ Let the grid collapse to chaos on mobile — define a clear stack order.

## Don't confuse this with…

*Commonly confused neighbors:* minimalism, dashboard-analytics.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
