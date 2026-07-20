# Engraving / Line Art — Implementation Spec

*Aliases:* etching, woodcut, hatching
*Slug:* `engraving` · *Category:* texture · *Era:* Print heritage

**Origin.** Old-master engraving/etching revival.

**Reference example.** Financial/whisky brand illustration; Ivan Ramen-style menus.

## Signature move(s)

Tone is built from line density, never flat fill or gradient: repeating fine diagonal `linear-gradient` hairlines (simulated hatching/cross-hatching) stand in for shading on every raised surface, edged by a hairline `--color-ink` rule and a double-line "certificate" border (`--border-certificate`) on the most important panels, evoking a banknote or etched plate.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Fine hatching and cross-hatching for tone
- Monochrome, high detail line work
- Vintage currency/certificate feel
- Premium, heritage, editorial

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/engraving.css`.)

```css
/* Engraving / Line Art — design tokens (generated from style_catalog.json) */
/* Print heritage | Old-master engraving/etching revival. */
:root {
  /* color */
  --color-bg: #f2ead9;
  --color-surface: #ece1cb;
  --color-surface-strong: #e4d5b8;
  --color-border: #2b2013;
  --color-text: #1c140b;
  --color-text-muted: #4a3a24;
  --color-primary: #5a2e12;
  --color-accent: #8a6d3b;
  --color-ink: #241a0e;
  /* radius */
  --radius-sm: 2px;
  --radius-md: 2px;
  --radius-lg: 3px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 1px 0 rgba(36,26,14,0.3);
  --shadow-md: 0 2px 0 rgba(36,26,14,0.28), 0 4px 8px rgba(36,26,14,0.18);
  --shadow-lg: 0 4px 0 rgba(36,26,14,0.26), 0 10px 20px rgba(36,26,14,0.22);
  /* font */
  --font-sans: 'Freight Text', 'Georgia', 'Iowan Old Style', serif;
  --font-display: 'Playfair Display', 'Didot', 'Georgia', serif;
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
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
  /* extra (signature gradients, composite borders, filters) */
  --hatch-fine: repeating-linear-gradient(115deg, rgba(28,20,11,0.09) 0 1px, transparent 1px 4px),
                repeating-linear-gradient(25deg, rgba(28,20,11,0.05) 0 1px, transparent 1px 6px);
  --border-certificate: 3px double var(--color-ink);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Engraving / Line Art — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f2ead9",
        "surface": "#ece1cb",
        "surface-strong": "#e4d5b8",
        "border": "#2b2013",
        "text": "#1c140b",
        "text-muted": "#4a3a24",
        "primary": "#5a2e12",
        "accent": "#8a6d3b",
        "ink": "#241a0e",
      },
      borderRadius: {
        "sm": "2px",
        "md": "2px",
        "lg": "3px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 0 rgba(36,26,14,0.3)",
        "md": "0 2px 0 rgba(36,26,14,0.28), 0 4px 8px rgba(36,26,14,0.18)",
        "lg": "0 4px 0 rgba(36,26,14,0.26), 0 10px 20px rgba(36,26,14,0.22)",
      },
      fontFamily: {
        "sans": ["'Freight Text'", "'Georgia'", "'Iowan Old Style'", "serif"],
        "display": ["'Playfair Display'", "'Didot'", "'Georgia'", "serif"],
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
        "standard": "cubic-bezier(0.2, 0, 0, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --hatch-fine: repeating-linear-gradient(115deg, rgba(28,20,11,0.09) 0 1px, transparent 1px 4px), repeating-linear-gradient(25deg, rgba(28,20,11,0.05) 0 1px, transparent 1px 6px);
//   --border-certificate: 3px double var(--color-ink);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--color-ink` hairline border, `--font-display` small-caps label; hover fills the interior with faint `--hatch-fine` hatching instead of a solid color shift. |
| **Input** | Underline-only or thin bordered field on `--color-surface`; focus thickens the rule to `--border-certificate` double line. |
| **Card** | The hero: `--border-certificate` double-line frame, corner flourish, and `--hatch-fine` used sparingly for a shaded corner or watermark. |
| **Nav** | Letterspaced `--font-display` wordmark over a single hairline rule; no fills, only line weight changes on active state. |
| **Modal** | Certificate-style panel: `--border-certificate` edge, engraved corner ornaments, hatched vignette fading toward the edges. |
| **Table** | Hairline row rules only (no zebra fill); header row underlined with a heavier rule, numerals in `--font-mono`. |
| **Tooltip** | Small bordered chip with a single hairline rule, no shadow beyond `--shadow-sm`. |
| **Badge** | Oval or shield outline in `--color-ink`, hatch-fine background for "sold/limited" states rather than a flat accent color. |
| **Toggle** | Engraved track (hairline outline, hatch-fine when off), solid ink knob when on to mimic a struck plate. |
| **Loading** | A hatching density sweep — lines thickening left to right — or a rotating compass-rose line-art spinner. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Cross-hatch fills must stay decorative, never sit directly under body text — the line texture reduces effective contrast even when the base tone passes.
- Serif display faces (Playfair/Didot) have thin strokes at small sizes; keep body copy on `--font-sans` and reserve display type for headings ≥ `--text-xl`.
- Verify `--color-text-muted` against `--color-bg` and `--color-surface` explicitly — the sepia palette is naturally low-contrast and needs checking, not assuming.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Build all shading from line density (hatching), never flat gradients.
- ✅ Reserve the double-line `--border-certificate` treatment for the most premium/important surfaces.
- ✅ Keep the palette strictly monochrome sepia/ink — no saturated color.

## Don't

- ❌ Introduce soft drop-shadows or blur — everything is hard-edged line work.
- ❌ Use bright, saturated accent colors that break the antique-print illusion.
- ❌ Overuse hatching so densely it competes with text for attention.

## Don't confuse this with…

*Commonly confused neighbors:* blueprint, victorian.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
