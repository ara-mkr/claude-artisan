# U.S. Web Design System — Implementation Spec

*Aliases:* USWDS  
*Slug:* `uswds` · *Category:* flat-platform · *Era:* 2017–present

**Origin.** U.S. General Services Administration (18F).

**Reference example.** US federal government websites.

## Signature move(s)

Trust-first plain design: a thick 4px `--color-primary` top rule (the "banner rule") anchors every page header, a blue/red/neutral palette signals authority without decoration, and Public Sans keeps everything legible at any zoom level. Every interactive control gets an unmistakable 2px `--color-focus` outline — accessibility is not optional polish here, it's the point.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Accessibility- and trust-first (Section 508)
- Government blue/red/neutral palette
- Public Sans typeface
- Plain-language, high-legibility

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/uswds.css`.)

```css
/* U.S. Web Design System — design tokens (generated from style_catalog.json) */
/* 2017–present | U.S. General Services Administration (18F). */
:root {
  /* color */
  --color-bg: #ffffff;
  --color-surface: #f0f0f0;
  --color-surface-strong: #e6e6e6;
  --color-border: #a9aeb1;
  --color-text: #1b1b1b;
  --color-text-muted: #565c65;
  --color-primary: #005ea2;
  --color-accent: #b50909;
  --color-primary-dark: #1a4480;
  --color-focus: #2491ff;
  /* radius */
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.12);
  --shadow-md: 0 2px 6px rgba(0, 0, 0, 0.14);
  --shadow-lg: 0 4px 12px rgba(0, 0, 0, 0.16);
  --shadow-none: none;
  /* font */
  --font-sans: 'Public Sans', system-ui, -apple-system, sans-serif;
  --font-display: 'Public Sans', system-ui, sans-serif;
  --font-mono: 'Roboto Mono', ui-monospace, monospace;
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
  /* extra (signature gov band + trust rule) */
  --gov-band: linear-gradient(180deg, var(--color-primary-dark) 0%, var(--color-primary-dark) 70%, var(--color-accent) 70%, var(--color-accent) 100%);
  --trust-rule: 4px solid var(--color-primary);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// U.S. Web Design System — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#ffffff",
        "surface": "#f0f0f0",
        "surface-strong": "#e6e6e6",
        "border": "#a9aeb1",
        "text": "#1b1b1b",
        "text-muted": "#565c65",
        "primary": "#005ea2",
        "accent": "#b50909",
        "primary-dark": "#1a4480",
        "focus": "#2491ff",
      },
      borderRadius: {
        "sm": "4px",
        "md": "6px",
        "lg": "8px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 2px rgba(0, 0, 0, 0.12)",
        "md": "0 2px 6px rgba(0, 0, 0, 0.14)",
        "lg": "0 4px 12px rgba(0, 0, 0, 0.16)",
        "none": "none",
      },
      fontFamily: {
        "sans": ["'Public Sans'", "system-ui", "-apple-system", "sans-serif"],
        "display": ["'Public Sans'", "system-ui", "sans-serif"],
        "mono": ["'Roboto Mono'", "ui-monospace", "monospace"],
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

// Signature tokens are CSS-only (gradients/borders). Add as custom properties:
//   --gov-band: linear-gradient(180deg, var(--color-primary-dark) 0%, var(--color-primary-dark) 70%, var(--color-accent) 70%, var(--color-accent) 100%);
//   --trust-rule: 4px solid var(--color-primary);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--radius-sm`, solid `--color-primary` fill for primary; `--shadow-sm`; 2px `--color-focus` outline on focus-visible, never a subtle glow. |
| **Input** | 1px `--color-border`, `--radius-sm`, generous `--space-3` padding for touch/low-vision use; label always visible, never placeholder-only. |
| **Card** | `--color-surface` on `--color-bg`, `--shadow-sm`, `--radius-md`; optional `--trust-rule` top border for official/notice cards. |
| **Nav** | `--gov-band` used only on the identity header, not repeated in-page; primary nav bar is flat `--color-primary` with white text. |
| **Modal** | Solid `--color-bg`, `--shadow-lg`, `--radius-md`; must trap focus and return it — 508 compliance is required, not aspirational. |
| **Table** | Alternating `--color-surface`/`--color-bg` rows, 1px `--color-border` dividers, sortable headers with visible focus states. |
| **Tooltip** | High-contrast `--color-text` on `--color-bg` with `--color-border`, never relies on hover alone — must be keyboard reachable. |
| **Badge** | `--radius-pill`, solid state colors with text labels (not color alone) for status. |
| **Toggle** | Large (44px) hit target, `--color-primary` on-state, explicit on/off text label alongside the switch. |
| **Loading** | Text-labeled progress bar in `--color-primary`; never a spinner-only state with no text alternative. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- This is a WCAG-mandated system — verify every text/background pair hits 4.5:1 (body) or 3:1 (large text) with no exceptions.
- Never rely on `--color-accent` red alone to mean "error" — always pair with icon + text.
- The `--color-focus` outline must be 2px minimum and never suppressed with `outline: none` even in custom components.
- Support 200% browser zoom without horizontal scroll or clipped content — this is a hard federal requirement, not a nicety.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Use plain, short sentences and visible labels over icons-only.
- ✅ Keep the `--trust-rule` reserved for identity/official banners, not decoration.
- ✅ Test every flow at 200% zoom and with keyboard-only navigation.

## Don't

- ❌ Round corners past `--radius-lg` (8px) — this style stays boxy and official.
- ❌ Use color as the sole differentiator for state or status.
- ❌ Hide focus indicators for aesthetic reasons.

## Don't confuse this with…

*Commonly confused neighbors:* govuk-design.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
