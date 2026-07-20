# Analytics Dashboard — Implementation Spec

*Aliases:* admin dashboard, data dashboard
*Slug:* `dashboard-analytics` · *Category:* flat-platform · *Era:* Ongoing

**Origin.** Conventional data-product UI patterns.

**Reference example.** Stripe Dashboard; Vercel Analytics; admin panels.

## Signature move(s)

A neutral light-gray canvas (`--color-bg`) holding tight white KPI/card tiles with a single indigo `--color-primary` for the one primary action per view, a green/red pair (`--color-accent` / `--color-negative`) reserved strictly for up/down data deltas, and tabular numerals (`--tabular`) on every metric so columns of numbers align. The signature move isn't decorative — it's disciplined restraint so the data, not the chrome, carries visual weight.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Card grids, KPI tiles, charts, tables
- Neutral surfaces, one or two accent colors
- Dense but scannable, clear hierarchy
- Function-first legibility

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/dashboard-analytics.css`.)

```css
/* Analytics Dashboard — design tokens (generated from style_catalog.json) */
/* Ongoing | Conventional data-product UI patterns. */
:root {
  /* color */
  --color-bg: #f5f6f8;
  --color-surface: #ffffff;
  --color-surface-strong: #eef0f4;
  --color-border: #e2e5eb;
  --color-text: #1b2130;
  --color-text-muted: #5b6274;
  --color-primary: #4f46e5;
  --color-accent: #16a34a;
  --color-negative: #dc2626;
  /* radius */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 14px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 1px 2px rgba(16,24,40,0.06);
  --shadow-md: 0 2px 8px rgba(16,24,40,0.08);
  --shadow-lg: 0 8px 24px rgba(16,24,40,0.10);
  /* font */
  --font-sans: 'Inter', 'Helvetica Neue', system-ui, -apple-system, sans-serif;
  --font-display: 'Inter', system-ui, sans-serif;
  --font-mono: 'IBM Plex Mono', ui-monospace, monospace;
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
  /* extra (data-legibility helpers) */
  --kpi-label-color: var(--color-text-muted);
  --hairline: 1px solid var(--color-border);
  --tabular: 'tnum' 1, 'lnum' 1;
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Analytics Dashboard — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f5f6f8",
        "surface": "#ffffff",
        "surface-strong": "#eef0f4",
        "border": "#e2e5eb",
        "text": "#1b2130",
        "text-muted": "#5b6274",
        "primary": "#4f46e5",
        "accent": "#16a34a",
        "negative": "#dc2626",
      },
      borderRadius: {
        "sm": "6px", "md": "10px", "lg": "14px", "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 2px rgba(16,24,40,0.06)",
        "md": "0 2px 8px rgba(16,24,40,0.08)",
        "lg": "0 8px 24px rgba(16,24,40,0.10)",
      },
      fontFamily: {
        "sans": ["'Inter'", "'Helvetica Neue'", "system-ui", "-apple-system", "sans-serif"],
        "display": ["'Inter'", "system-ui", "sans-serif"],
        "mono": ["'IBM Plex Mono'", "ui-monospace", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem", "sm": "0.875rem", "base": "1rem", "lg": "1.125rem",
        "xl": "1.375rem", "2xl": "1.75rem", "3xl": "2.25rem", "4xl": "3rem", "5xl": "4rem",
      },
      spacing: {
        "1": "4px", "2": "8px", "3": "12px", "4": "16px", "6": "24px",
        "8": "32px", "12": "48px", "16": "64px", "24": "96px",
      },
      transitionTimingFunction: {
        "standard": "cubic-bezier(0.2, 0, 0, 1)",
      },
      fontVariantNumeric: {
        "tabular": "tabular-nums lining-nums",
      },
    },
  },
};

// Apply tabular numerals to all metric/KPI text via the `tabular` utility
// or the CSS custom property: font-variant-numeric: var(--tabular);
```

## Component rules (the 10 primitives)

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--radius-md`, `--color-primary` indigo fill for primary action (one per view); secondary uses `--color-surface` + `--hairline`. |
| **Input** | `--color-surface` fill, `--hairline`, `--radius-md`; focus border switches to `--color-primary`. |
| **Card / KPI tile** | The hero: `--color-surface`, `--hairline`, `--shadow-sm`, `--radius-lg`; label in `--kpi-label-color` uppercase small caps, value in large `--tabular` numerals, delta chip colored `--color-accent`/`--color-negative`. |
| **Nav** | Left sidebar or top bar in `--color-surface` with `--hairline` divider; active item gets a `--color-primary` left-border or pill. |
| **Modal** | `--color-surface`, `--shadow-lg`, `--radius-lg`, neutral scrim — used sparingly for drill-down detail, not decoration. |
| **Table** | `--hairline` row dividers, `--color-surface-strong` header row, right-aligned `--tabular` numeric columns, hover row tint. |
| **Tooltip** | Small `--color-text` dark chip with white text (chart tooltips), `--shadow-md`, `--tabular` for any numbers shown. |
| **Badge** | `--radius-pill`, tinted `--color-accent`/`--color-negative`/neutral fills for status — the only saturated color allowed outside the primary button. |
| **Toggle** | `--color-surface-strong` track, `--color-primary` fill when on. |
| **Loading** | `--color-surface-strong` skeleton blocks matching the exact shape of KPI tiles/charts/rows, shimmering — never a generic spinner over the whole dashboard. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Never encode up/down or good/bad purely by `--color-accent` (green) vs `--color-negative` (red) — always pair with an icon (arrow) or explicit sign (+/−) for colorblind users.
- Dense tables need enough row height and `--hairline` contrast to scan without a cursor — verify `--color-border` against `--color-surface` clears at least a 3:1 non-text contrast ratio.
- Chart colors (beyond `--color-primary`/`--color-accent`/`--color-negative`) must be chosen from a colorblind-safe categorical palette — don't default to arbitrary hues per series.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Reserve saturated color for exactly one primary action and data deltas — everything else stays neutral gray.
- ✅ Use tabular numerals on every metric so multi-row numbers align vertically.
- ✅ Keep KPI tiles and charts on `--color-surface` white against the `--color-bg` gray canvas for clear figure/ground separation.

## Don't

- ❌ Color-code every card differently "for visual interest" — it destroys the data hierarchy.
- ❌ Use proportional (non-tabular) numerals in tables or KPI tiles.
- ❌ Add decorative shadows/gradients to charts — keep the data ink-to-chrome ratio high.

## Don't confuse this with…

*Commonly confused neighbors:* bento-grid, material-design-3, carbon-design.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
