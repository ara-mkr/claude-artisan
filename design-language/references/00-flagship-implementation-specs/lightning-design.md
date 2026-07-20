# Salesforce Lightning — Implementation Spec

*Aliases:* SLDS, Lightning Design System
*Slug:* `lightning-design` · *Category:* flat-platform · *Era:* 2015–present

**Origin.** Salesforce.

**Reference example.** Salesforce Lightning Experience.

## Signature move(s)

A token-driven CRM density system: every record, list, and panel is a compact `--color-surface` rectangle with a `--radius-sm/md` corner, separated on a neutral `--color-bg` grey canvas, with the Salesforce blue (`--color-primary` #0176d3) reserved almost exclusively for the single `--brand-rule` accent — a link color, an active-tab underline, an icon tint — never a full-bleed fill. The system is built to let hundreds of dense record fields sit on screen at once without visual noise, so color is rationed and utility icons carry most of the meaning.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Enterprise CRM density and consistency
- Token-driven theming (SLDS)
- Data tables, utility icons
- Neutral, professional palette

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/lightning-design.css`.)

```css
/* Salesforce Lightning — design tokens (generated from style_catalog.json) */
/* 2015–present | Salesforce. */
:root {
  /* color */
  --color-bg: #f3f3f3;
  --color-surface: #ffffff;
  --color-surface-strong: #f4f6f9;
  --color-border: #dddbda;
  --color-text: #181818;
  --color-text-muted: #706e6b;
  --color-primary: #0176d3;
  --color-accent: #04844b;
  --color-danger: #ba0517;
  /* radius */
  --radius-sm: 4px;
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.10);
  --shadow-md: 0 2px 6px rgba(0,0,0,0.12);
  --shadow-lg: 0 4px 14px rgba(0,0,0,0.14);
  /* font */
  --font-sans: 'Salesforce Sans', 'Inter', system-ui, sans-serif;
  --font-display: 'Salesforce Sans', 'Inter', system-ui, sans-serif;
  --font-mono: ui-monospace, 'SFMono-Regular', monospace;
  /* text */
  --text-xs: 0.75rem;
  --text-sm: 0.8125rem;
  --text-base: 0.875rem;
  --text-lg: 1rem;
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
  --space-6: 20px;
  --space-8: 28px;
  --space-12: 40px;
  --space-16: 56px;
  --space-24: 88px;
  /* ease */
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  /* extra (signature gradients, composite borders, filters) */
  --brand-rule: var(--color-primary);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Salesforce Lightning — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f3f3f3",
        "surface": "#ffffff",
        "surface-strong": "#f4f6f9",
        "border": "#dddbda",
        "text": "#181818",
        "text-muted": "#706e6b",
        "primary": "#0176d3",
        "accent": "#04844b",
        "danger": "#ba0517",
      },
      borderRadius: {
        "sm": "4px",
        "md": "4px",
        "lg": "8px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 2px rgba(0,0,0,0.10)",
        "md": "0 2px 6px rgba(0,0,0,0.12)",
        "lg": "0 4px 14px rgba(0,0,0,0.14)",
      },
      fontFamily: {
        "sans": ["'Salesforce Sans'", "'Inter'", "system-ui", "sans-serif"],
        "display": ["'Salesforce Sans'", "'Inter'", "system-ui", "sans-serif"],
        "mono": ["ui-monospace", "'SFMono-Regular'", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem",
        "sm": "0.8125rem",
        "base": "0.875rem",
        "lg": "1rem",
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
        "6": "20px",
        "8": "28px",
        "12": "40px",
        "16": "56px",
        "24": "88px",
      },
      transitionTimingFunction: {
        "standard": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --brand-rule: var(--color-primary);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Compact `--radius-sm` rectangle; "brand" buttons fill `--color-primary`, "neutral" buttons stay `--color-surface` with a `--color-border` outline — most buttons on a page are neutral, only one is brand. |
| **Input** | Dense `--radius-sm` field with a 1px `--color-border`; focus swaps the border to `--color-primary` (the `--brand-rule`) with no glow. |
| **Card** | "Lightning Card": `--color-surface` rectangle, `--radius-md`, `--shadow-sm`, a header bar with a small utility icon + title, body padded at `--space-3`. |
| **Nav** | Top App Launcher bar + tab strip; the active tab gets a 3px `--brand-rule` underline, everything else stays neutral text. |
| **Modal** | Centered `--radius-md` panel, `--shadow-lg`, header uses `--color-surface-strong`; footer right-aligns brand + neutral buttons. |
| **Table** | Extremely dense data table, 1px `--color-border` row dividers, sortable headers with a small caret, inline-editable cells on click. |
| **Tooltip** | Small `--color-text` chip, `--radius-sm`, `--shadow-sm`, used heavily for utility-icon explanations. |
| **Badge** | Rectangular `--radius-sm` status chip, semantic colors (`--color-accent` success, `--color-danger` error) with a small leading icon. |
| **Toggle** | Pill track, `--color-primary` on-state, small circular knob — one of the only pill shapes in an otherwise square-ish system. |
| **Loading** | Thin `--color-primary` linear "spinner bar," or the classic SLDS ring spinner over a translucent scrim. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Because color is rationed (only the `--brand-rule` blue and semantic `--color-accent`/`--color-danger` carry meaning), never use color alone to distinguish record status — pair every status color with a text label or icon, verified with `contrast_check.py`.
- Dense data tables with 1px dividers and small `--text-sm`/`--text-xs` type need enough row height and padding (`--space-2`+) to stay scannable — don't compress further for "more rows visible."
- Utility icons that stand in for labels (a common SLDS pattern) must carry an accessible name/tooltip — an icon-only affordance with a color-only hover state is not sufficient.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Reserve `--color-primary` for exactly one brand action per view plus the `--brand-rule` accent line — don't fill multiple elements with it.
- ✅ Keep buttons mostly neutral (outline) with a single brand button per section.
- ✅ Lean on utility icons + `--font-mono`/tabular figures for dense record data.

## Don't

- ❌ Fill every button and card header with `--color-primary` — it collapses the neutral/brand hierarchy SLDS depends on.
- ❌ Use rounded pill shapes outside of toggles and status badges — most Lightning surfaces are `--radius-sm`/`--radius-md` rectangles.
- ❌ Let record-dense tables get so tight that row hover/selection states become the only way to track position.

## Don't confuse this with…

*Commonly confused neighbors:* carbon-design, ant-design.

vs carbon-design: Carbon is zero-radius everywhere and IBM Plex-typeset; Lightning keeps a small 4px radius and Salesforce Sans, with color rationed to a single brand accent rather than Carbon's underline-driven active state. vs ant-design: antd fills primary buttons and focus rings liberally with saturated blue across the whole UI; Lightning treats blue as a scarce brand resource against a mostly neutral, icon-driven surface.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
