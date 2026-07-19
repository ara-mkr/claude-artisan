# Minimalism — Implementation Spec

*Aliases:* minimal, less is more  
*Slug:* `minimalism` · *Category:* minimal-organic · *Era:* 1960s art → 2000s digital

**Origin.** Roots in minimal art (Donald Judd) + Dieter Rams; digital via Apple/Google.

**Reference example.** Apple product pages; Dieter Rams Braun; Google homepage.

## Signature move(s)

Extreme restraint — whitespace, few elements, a limited (often monochrome) palette, and strong typographic hierarchy carrying the design. Every element earns its place.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Extreme restraint: whitespace, few elements
- Limited (often monochrome) palette
- Strong typographic hierarchy carries design
- Every element earns its place

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/minimalism.css`.)

```css
/* Minimalism — design tokens (generated from style_catalog.json) */
/* 1960s art → 2000s digital | Roots in minimal art (Donald Judd) + Dieter Rams; digital via Apple/Google. */
:root {
  /* color */
  --color-bg: #ffffff;
  --color-surface: #ffffff;
  --color-surface-2: #fafafa;
  --color-text: #111111;
  --color-text-muted: #767676;
  --color-primary: #111111;
  --color-accent: #111111;
  --color-border: #e6e6e6;
  /* radius */
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-none: none;
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
  /* font */
  --font-sans: 'Inter', 'Helvetica Neue', system-ui, sans-serif;
  --font-display: 'Inter', system-ui, sans-serif;
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
  --space-1: 8px;
  --space-2: 16px;
  --space-3: 24px;
  --space-4: 32px;
  --space-6: 48px;
  --space-8: 64px;
  --space-12: 96px;
  --space-16: 128px;
  --space-24: 192px;
  /* ease */
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  /* extra (signature gradients, composite borders, filters) */
  --hairline: 1px solid #e6e6e6;
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Minimalism — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#ffffff",
        "surface": "#ffffff",
        "surface-2": "#fafafa",
        "text": "#111111",
        "text-muted": "#767676",
        "primary": "#111111",
        "accent": "#111111",
        "border": "#e6e6e6",
      },
      borderRadius: {
        "sm": "2px",
        "md": "4px",
        "lg": "8px",
        "pill": "999px",
      },
      boxShadow: {
        "none": "none",
        "sm": "0 1px 2px rgba(0,0,0,0.04)",
      },
      fontFamily: {
        "sans": ["'Inter'", "'Helvetica Neue'", "system-ui", "sans-serif"],
        "display": ["'Inter'", "system-ui", "sans-serif"],
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
        "1": "8px",
        "2": "16px",
        "3": "24px",
        "4": "32px",
        "6": "48px",
        "8": "64px",
        "12": "96px",
        "16": "128px",
        "24": "192px",
      },
      transitionTimingFunction: {
        "standard": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --hairline: 1px solid #e6e6e6;
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | A text or hairline-outline button; one solid primary for the single key action; generous padding. |
| **Input** | A field with a hairline underline/border; label as placeholder or small caption; quiet focus. |
| **Card** | Defined by whitespace and maybe a hairline — rarely by shadow or fill. |
| **Nav** | A few text links with lots of space; a small wordmark; no chrome. |
| **Modal** | A clean panel with ample padding and a plain scrim. |
| **Table** | Hairline rules, airy rows, aligned type; no zebra unless needed. |
| **Tooltip** | A small quiet label. |
| **Badge** | Small text or a hairline pill; minimal color. |
| **Toggle** | A restrained pill; single accent for 'on'. |
| **Loading** | A thin bar or a small quiet spinner. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Minimalism often over-reduces contrast (light gray text) — keep body ≥4.5:1; restraint isn't an excuse to go faint.
- Don't hide affordances so much they're undiscoverable; keep focus states clear.
- Ensure touch targets stay ≥44px despite the airy look.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Use a strong type scale and generous whitespace.
- ✅ Limit to one accent color.
- ✅ Remove anything that isn't pulling weight.

## Don't

- ❌ Make whitespace timid (half-minimalism reads unfinished).
- ❌ Drop contrast for the sake of 'subtle'.
- ❌ Hide key actions.

## Don't confuse this with…

*Commonly confused neighbors:* swiss-design, flat-design, minimalism-japanese.

vs Swiss: Swiss is a grid/type *system* (can be dense); minimalism is about *quantity/restraint*. vs flat: flat is a surface treatment; minimalism is a reduction philosophy.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
