# Cyanotype — Implementation Spec

*Aliases:* sun print, blueprint photo
*Slug:* `cyanotype` · *Category:* texture · *Era:* 1842–present

**Origin.** Sir John Herschel's photographic process.

**Reference example.** Anna Atkins botanical cyanotypes.

## Signature move(s)

The entire UI lives inside a single Prussian-blue exposure: near-white content (`--color-primary: #ffffff`, `--color-text`) sits as a bleached "silhouette" against deepening blue surfaces (`--color-bg` → `--color-surface` → `--color-surface-strong`), with a soft `--emulsion-vignette` radial darkening toward the bottom edge to mimic uneven paper exposure, and hairline `--botanical-border` frames standing in for the print's paper edge.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Prussian-blue monochrome photographic prints
- White silhouettes on deep blue
- Botanical/photogram subjects
- Antique handmade quality

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/cyanotype.css`.)

```css
/* Cyanotype — design tokens (generated from style_catalog.json) */
/* 1842–present | Sir John Herschel's photographic process. */
:root {
  /* color */
  --color-bg: #0d2c61;
  --color-surface: #123a7a;
  --color-surface-strong: #17458f;
  --color-border: #6f92d1;
  --color-text: #eaf1ff;
  --color-text-muted: #b6c9ec;
  --color-primary: #ffffff;
  --color-accent: #a9c4f5;
  --color-bleed: rgba(255, 255, 255, 0.10);
  /* radius */
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 6px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 2px 6px rgba(0, 0, 0, 0.30);
  --shadow-md: 0 6px 16px rgba(0, 0, 0, 0.34);
  --shadow-lg: 0 12px 28px rgba(0, 0, 0, 0.38);
  /* font */
  --font-sans: 'Cormorant Garamond', 'EB Garamond', Georgia, serif;
  --font-display: 'Cormorant Garamond', 'Playfair Display', serif;
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
  --emulsion-vignette: radial-gradient(120% 100% at 50% 0%, transparent 55%, rgba(0,0,0,0.28) 100%);
  --botanical-border: 1px solid rgba(255,255,255,0.35);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Cyanotype — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0d2c61",
        "surface": "#123a7a",
        "surface-strong": "#17458f",
        "border": "#6f92d1",
        "text": "#eaf1ff",
        "text-muted": "#b6c9ec",
        "primary": "#ffffff",
        "accent": "#a9c4f5",
        "bleed": "rgba(255, 255, 255, 0.10)",
      },
      borderRadius: {
        "sm": "2px",
        "md": "4px",
        "lg": "6px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 6px rgba(0, 0, 0, 0.30)",
        "md": "0 6px 16px rgba(0, 0, 0, 0.34)",
        "lg": "0 12px 28px rgba(0, 0, 0, 0.38)",
      },
      fontFamily: {
        "sans": ["'Cormorant Garamond'", "'EB Garamond'", "Georgia", "serif"],
        "display": ["'Cormorant Garamond'", "'Playfair Display'", "serif"],
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
//   --emulsion-vignette: radial-gradient(120% 100% at 50% 0%, transparent 55%, rgba(0,0,0,0.28) 100%);
//   --botanical-border: 1px solid rgba(255,255,255,0.35);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--botanical-border` outline, transparent/`--color-surface` fill; hover bleeds a touch of `--color-bleed` white glow at the edges like overexposure. |
| **Input** | `--color-surface` field, `--botanical-border`; focus adds a soft white `--color-bleed` halo instead of a bright ring, keeping it in-palette. |
| **Card** | The hero: `--color-surface` panel, `--botanical-border` frame like a paper edge, `--emulsion-vignette` overlay darkening the lower portion, `--shadow-md`. |
| **Nav** | Deep `--color-bg` bar, wordmark in `--color-primary` white, thin `--botanical-border` bottom rule. |
| **Modal** | Panel on `--color-surface-strong` with `--emulsion-vignette` and `--botanical-border`, scrim in darker blue rather than black to stay in-gamut. |
| **Table** | Row rules in `--color-border`; values rendered as white silhouette text, no zebra striping (keep the single-tone print illusion). |
| **Tooltip** | Small `--color-surface-strong` chip with `--botanical-border`, white text. |
| **Badge** | Outlined pill (`--botanical-border`) with white text; filled state uses `--color-bleed` as a faint white wash, never a foreign hue. |
| **Toggle** | Track in `--color-surface`, knob in `--color-primary` white — the toggle itself is the "silhouette" against the blue field. |
| **Loading** | A vignette pulse (the `--emulsion-vignette` breathing in opacity) or a white silhouette spinner tracing a botanical/leaf outline. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Stay strictly monochrome-blue; introducing any other hue (even for "error" states) breaks the single-exposure illusion and should instead be signaled via silhouette shape/icon plus a slightly warmer off-white, verified for contrast.
- The `--emulsion-vignette` darkens the lower/edge regions — never place body text or controls in the vignette's darkest zone without re-checking contrast there specifically.
- Serif `--font-sans` (Cormorant Garamond) is a light, high-contrast-stroke face — avoid it below `--text-base` for body copy; use `--font-mono` or increase weight for small UI text.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Keep the entire palette within Prussian-blue-to-white — no secondary hues.
- ✅ Use `--botanical-border` as the universal frame/edge treatment.
- ✅ Reserve pure `--color-primary` white for the most important silhouette/content, not decoration.

## Don't

- ❌ Introduce red/green/yellow status colors — express state via shape, icon, or opacity instead.
- ❌ Flatten out the `--emulsion-vignette` — losing it makes the surface look like a plain blue app, not a print.
- ❌ Use crisp sans-serif display type — it undercuts the antique photographic mood.

## Don't confuse this with…

*Commonly confused neighbors:* blueprint, duotone.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
