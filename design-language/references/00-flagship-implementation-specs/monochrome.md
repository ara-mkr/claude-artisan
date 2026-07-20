# Monochrome / Grayscale — Implementation Spec

*Aliases:* black and white, single-hue  
*Slug:* `monochrome` · *Category:* minimal-organic · *Era:* Timeless

**Origin.** Reductive palette discipline.

**Reference example.** Fashion houses (COS, Céline); photography portfolios.

## Signature move(s)

Contrast and texture, not color, carry every visual decision: near-pure `--color-text` black against `--color-bg` white, a single tightly-rationed `--color-accent` red used only for the one thing that must never be missed (an alert, a live indicator), and a serif `--font-display` paired against a clean sans body to create hierarchy purely through typographic contrast rather than hue.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Single hue or pure grayscale
- Contrast and texture do the work
- Photography-forward, elegant
- Optional single accent color

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/monochrome.css`.)

```css
/* Monochrome / Grayscale — design tokens (generated from style_catalog.json) */
/* Timeless | Reductive palette discipline. */
:root {
  /* color */
  --color-bg: #ffffff;
  --color-surface: #f4f4f4;
  --color-surface-strong: #e6e6e6;
  --color-border: #c9c9c9;
  --color-text: #0a0a0a;
  --color-text-muted: #5a5a5a;
  --color-primary: #0a0a0a;
  --color-accent: #d0021b;
  /* radius */
  --radius-sm: 0px;
  --radius-md: 2px;
  --radius-lg: 4px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.08);
  --shadow-md: 0 4px 10px rgba(0,0,0,0.10);
  --shadow-lg: 0 12px 28px rgba(0,0,0,0.14);
  /* font */
  --font-sans: 'Helvetica Neue', 'Inter', Arial, sans-serif;
  --font-display: 'Times New Roman', 'Georgia', serif;
  --font-mono: ui-monospace, 'Courier New', monospace;
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
  /* extra (signature grain + hairline) */
  --grain: repeating-conic-gradient(from 0deg, rgba(0,0,0,0.015) 0deg 1deg, transparent 1deg 2deg);
  --hairline: 1px solid var(--color-text);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Monochrome / Grayscale — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#ffffff",
        "surface": "#f4f4f4",
        "surface-strong": "#e6e6e6",
        "border": "#c9c9c9",
        "text": "#0a0a0a",
        "text-muted": "#5a5a5a",
        "primary": "#0a0a0a",
        "accent": "#d0021b",
      },
      borderRadius: {
        "sm": "0px",
        "md": "2px",
        "lg": "4px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 2px rgba(0,0,0,0.08)",
        "md": "0 4px 10px rgba(0,0,0,0.10)",
        "lg": "0 12px 28px rgba(0,0,0,0.14)",
      },
      fontFamily: {
        "sans": ["'Helvetica Neue'", "'Inter'", "Arial", "sans-serif"],
        "display": ["'Times New Roman'", "'Georgia'", "serif"],
        "mono": ["ui-monospace", "'Courier New'", "monospace"],
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

// Signature `extra` tokens are CSS-only. Add as custom properties:
//   --grain: repeating-conic-gradient(from 0deg, rgba(0,0,0,0.015) 0deg 1deg, transparent 1deg 2deg);
//   --hairline: 1px solid var(--color-text);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Sharp `--radius-sm`, solid `--color-primary` (black) fill with white text; the *only* colored button in a view uses `--color-accent`. |
| **Input** | `--hairline` bottom border only (no full box), `--color-bg` fill; focus thickens the hairline to 2px. |
| **Card** | `--color-surface`, `--radius-md`, `--shadow-sm` — restrained, photography does the visual work, not the chrome. |
| **Nav** | White `--color-bg` bar, `--hairline` bottom rule, uppercase `--font-sans` labels tracked wide. |
| **Modal** | `--color-bg`, `--shadow-lg`, `--hairline` border — no color, just contrast and precise alignment. |
| **Table** | `--hairline` row dividers only, no zebra striping — let whitespace and the hairline carry structure. |
| **Tooltip** | Solid `--color-primary` chip, white text, `--radius-sm`. |
| **Badge** | Reserved almost exclusively for `--color-accent` — a badge is the one place color is expected. |
| **Toggle** | Black/white contrast switch: `--color-primary` fill when on, `--color-border` outline when off. |
| **Loading** | A thin animated `--hairline` bar, or a rotating grayscale dot sequence — never colored. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- `--color-text-muted` gray-on-white must still clear 4.5:1 for body copy — verify explicitly, since "muted gray" is exactly where this style tends to slip below threshold.
- Because color carries almost no semantic weight, status/error states leaning on `--color-accent` red alone need an icon or text label too.
- Serif display type at small sizes can lose legibility on screens — cap `--font-display` usage to `--text-xl` and above.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Ration `--color-accent` to one meaningful use per view — its rarity is what gives it power.
- ✅ Let large, well-cropped photography and generous whitespace do the visual work.
- ✅ Use hairline rules for structure instead of boxes/shadows wherever possible.

## Don't

- ❌ Introduce a second accent hue — the entire system depends on staying single-hue.
- ❌ Let muted grays creep below 4.5:1 contrast for body text.
- ❌ Add heavy shadows or gradients — this style stays flat and print-like.

## Don't confuse this with…

*Commonly confused neighbors:* minimalism, swiss-design.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
