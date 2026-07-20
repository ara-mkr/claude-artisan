# Balletcore — Implementation Spec

*Aliases:* coquette ballet
*Slug:* `balletcore` · *Category:* niche · *Era:* 2022–present

**Origin.** Ballet-inspired soft feminine aesthetic.

**Reference example.** Balletcore fashion moodboards.

## Signature move(s)

A satin-fill gradient (`--satin-fill`) wash on raised surfaces combined with a dashed "ribbon" border (`--ribbon-border: 2px dashed var(--color-border)`) that evokes tied pointe-shoe ribbons — soft blush surfaces, generously rounded corners, and a display serif for headings that reads as delicate rather than loud.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Soft pinks, cream, tulle, ribbon
- Delicate, graceful, romantic
- Serif/script accents
- Ethereal femininity

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/balletcore.css`.)

```css
/* Balletcore — design tokens (generated from style_catalog.json) */
/* 2022–present | Ballet-inspired soft feminine aesthetic. */
:root {
  /* color */
  --color-bg: #fdf3f1;
  --color-surface: #fffbfa;
  --color-surface-strong: #fbe4e3;
  --color-border: #e7b8bd;
  --color-text: #5a3a3f;
  --color-text-muted: #8a6266;
  --color-primary: #c98a9c;
  --color-accent: #b9a6d9;
  /* radius */
  --radius-sm: 10px;
  --radius-md: 18px;
  --radius-lg: 28px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 2px 8px rgba(90,58,63,0.1);
  --shadow-md: 0 8px 20px rgba(90,58,63,0.12);
  --shadow-lg: 0 16px 36px rgba(90,58,63,0.14);
  /* font */
  --font-sans: 'Nunito', 'Quicksand', system-ui, sans-serif;
  --font-display: 'Cormorant Garamond', 'Playfair Display', serif;
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
  --ease-standard: cubic-bezier(0.34, 1.2, 0.64, 1);
  /* extra */
  --ribbon-border: 2px dashed var(--color-border);
  --satin-fill: linear-gradient(160deg, #fffbfa 0%, #fce8e7 100%);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Balletcore — Tailwind theme fragment (generated).
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#fdf3f1",
        "surface": "#fffbfa",
        "surface-strong": "#fbe4e3",
        "border": "#e7b8bd",
        "text": "#5a3a3f",
        "text-muted": "#8a6266",
        "primary": "#c98a9c",
        "accent": "#b9a6d9",
      },
      borderRadius: {
        "sm": "10px",
        "md": "18px",
        "lg": "28px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 8px rgba(90,58,63,0.1)",
        "md": "0 8px 20px rgba(90,58,63,0.12)",
        "lg": "0 16px 36px rgba(90,58,63,0.14)",
      },
      fontFamily: {
        "sans": ["'Nunito'", "'Quicksand'", "system-ui", "sans-serif"],
        "display": ["'Cormorant Garamond'", "'Playfair Display'", "serif"],
        "mono": ["ui-monospace", "monospace"],
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
        "standard": "cubic-bezier(0.34, 1.2, 0.64, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only:
//   --ribbon-border: 2px dashed var(--color-border);
//   --satin-fill: linear-gradient(160deg, #fffbfa 0%, #fce8e7 100%);
```

## Component rules (the 10 primitives)

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--radius-pill`, `--satin-fill` gradient background, `--ribbon-border` outline; hover deepens the gradient toward `--color-primary`. |
| **Input** | `--color-surface` fill, `--radius-md`, bottom edge only in `--ribbon-border` style (a ribbon "tie" underline); focus solidifies to `--color-primary`. |
| **Card** | `--satin-fill` background, `--radius-lg`, `--ribbon-border` frame, `--shadow-sm` soft lift. |
| **Nav** | `--color-surface` bar, script/serif wordmark (`--font-display`), a thin dashed ribbon rule beneath. |
| **Modal** | `--satin-fill` panel, `--radius-lg`, `--ribbon-border` double-frame, `--shadow-lg`. |
| **Table** | `--color-surface` rows with dashed `--ribbon-border`-style row dividers instead of solid lines. |
| **Tooltip** | Small `--color-surface-strong` chip, `--radius-md`, `--ribbon-border` outline. |
| **Badge** | `--radius-pill` chip, `--color-accent` or `--color-primary` fill, white/cream text. |
| **Toggle** | Track uses `--satin-fill`; knob rendered like a small pearl/bow shape via `--radius-pill` + `--shadow-sm`. |
| **Loading** | A ribbon-dash border animates rotating around a circle, or satin gradient shimmer sweeps left to right. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

- `--color-text-muted` (#8a6266) on `--color-bg` (#fdf3f1) is a soft muted-on-pastel pairing — verify with `contrast_check.py` and darken for body copy if it fails AA.
- Dashed ribbon borders are decorative, not a focus indicator — give interactive elements a solid `--color-primary` focus ring at 2px minimum.
- Keep primary body text on `--color-surface` (near-white) rather than the deeper `--surface-strong` blush, to preserve reading contrast.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Use the dashed ribbon motif consistently as the connective visual thread across borders and dividers.
- ✅ Keep the palette restricted to blush, cream, and one lavender accent — restraint reads as delicate, not childish.
- ✅ Pair the display serif with generous line-height for a graceful, airy feel.

## Don't

- ❌ Don't sharpen corners — balletcore depends on soft, generous radii throughout.
- ❌ Don't saturate the pinks past pastel; oversaturated pink reads as barbiecore, not balletcore.
- ❌ Don't skip the ribbon border on cards/modals — a plain solid border loses the signature move.

## Don't confuse this with…

*Commonly confused neighbors:* coquette, light-academia.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
