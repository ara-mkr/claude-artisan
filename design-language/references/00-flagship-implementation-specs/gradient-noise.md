# Grainy Gradient — Implementation Spec

*Aliases:* noise gradient, grainy gradient
*Slug:* `gradient-noise` · *Category:* texture · *Era:* 2021–present

**Origin.** Adding grain to smooth gradients for depth.

**Reference example.** Vercel/Linear backgrounds; A24-style sites.

## Signature move(s)

A soft multi-stop radial gradient (`--bg-image`) fills the page, then an SVG `feTurbulence`-generated noise layer (`--grain-svg`) is composited on top at `mix-blend-mode: overlay` — on every surface that carries the gradient, not just the page background — to kill banding and give the color field a tactile, filmic texture instead of a flat digital gradient.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Smooth color gradient overlaid with fine grain
- Reduces banding, adds tactility
- Soft dreamy color fields
- Premium editorial feel

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/gradient-noise.css`.)

```css
/* Grainy Gradient — design tokens (generated from style_catalog.json) */
/* 2021–present | Adding grain to smooth gradients for depth. */
:root {
  /* color */
  --color-bg: #1c1626;
  --color-surface: #241d31;
  --color-surface-strong: #2e2540;
  --color-border: rgba(255,255,255,0.10);
  --color-text: #f4f1f8;
  --color-text-muted: #b8aec7;
  --color-primary: #ff8a5c;
  --color-accent: #7c6cf0;
  --color-grad-a: #2a1b3d;
  --color-grad-b: #6b3fa0;
  --color-grad-c: #ff8a5c;
  /* radius */
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 22px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 3px 10px rgba(0,0,0,0.25);
  --shadow-md: 0 10px 30px rgba(0,0,0,0.35);
  --shadow-lg: 0 24px 60px rgba(0,0,0,0.45);
  /* font */
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --font-display: 'Söhne', 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, monospace;
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
  --bg-image: radial-gradient(120% 90% at 15% -10%, var(--color-grad-c) 0%, var(--color-grad-b) 45%, var(--color-grad-a) 100%);
  --grain-svg: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/></svg>");
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Grainy Gradient — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#1c1626",
        "surface": "#241d31",
        "surface-strong": "#2e2540",
        "border": "rgba(255,255,255,0.10)",
        "text": "#f4f1f8",
        "text-muted": "#b8aec7",
        "primary": "#ff8a5c",
        "accent": "#7c6cf0",
        "grad-a": "#2a1b3d",
        "grad-b": "#6b3fa0",
        "grad-c": "#ff8a5c",
      },
      borderRadius: {
        "sm": "8px",
        "md": "14px",
        "lg": "22px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 3px 10px rgba(0,0,0,0.25)",
        "md": "0 10px 30px rgba(0,0,0,0.35)",
        "lg": "0 24px 60px rgba(0,0,0,0.45)",
      },
      fontFamily: {
        "sans": ["'Inter'", "system-ui", "-apple-system", "sans-serif"],
        "display": ["'Söhne'", "'Inter'", "system-ui", "sans-serif"],
        "mono": ["'JetBrains Mono'", "ui-monospace", "monospace"],
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
//   --bg-image: radial-gradient(120% 90% at 15% -10%, var(--color-grad-c) 0%, var(--color-grad-b) 45%, var(--color-grad-a) 100%);
//   --grain-svg: url("data:image/svg+xml;utf8,...feTurbulence noise...");
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Primary fill uses a short segment of `--bg-image`'s hues with `--grain-svg` overlaid at `mix-blend-mode: overlay`; hover shifts the gradient stops slightly rather than changing flat color. |
| **Input** | Flat `--color-surface` with a faint grain overlay, no gradient — keeps typed text crisp against a calmer texture. |
| **Card** | The hero: `--bg-image` (or a card-scoped variant) plus `--grain-svg` overlay, `--shadow-md`, `--radius-lg` — the gradient should feel like it's part of the material, not a background image. |
| **Nav** | Bar carries a subtle vertical slice of the page gradient with grain, so it reads continuous with the hero background as you scroll. |
| **Modal** | Panel gradient pulls from `--color-grad-b`/`--color-grad-c` with grain overlay and a soft `--shadow-lg`; scrim stays flat/dark so the panel's texture pops. |
| **Table** | Keep rows on flat `--color-surface` (no gradient/grain) — texture on tabular data destroys scanability; reserve gradient for the header band only. |
| **Tooltip** | Small flat chip with light grain only, no gradient — needs to read instantly. |
| **Badge** | Gradient-filled pill sampling two adjacent `--bg-image` stops, grain kept subtle at low opacity. |
| **Toggle** | Off state flat `--color-surface`; on state fills with a short gradient sample plus grain, echoing the hero treatment at small scale. |
| **Loading** | An animated gradient sweep (shifting `--bg-image` stops) with grain overlay, or a soft pulsing blurred gradient blob. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Never set body text directly over the raw `--bg-image` gradient without a flat text-safe zone or scrim — gradient contrast varies across its stops and will fail in the darker/lighter regions.
- Respect `prefers-reduced-motion: reduce` for any animated gradient-shift or grain-shimmer effect — replace with a static frame.
- Keep `--grain-svg` opacity low (≤0.35 as tokened) and never layer it directly under small text — noise reduces edge crispness of glyphs.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Pair every gradient surface with the same `--grain-svg` overlay — a gradient without grain looks like a different, unfinished style.
- ✅ Keep dense text (tables, forms) on flat, grain-only surfaces.
- ✅ Use soft, wide gradient stops — abrupt color transitions defeat the "dreamy" quality.

## Don't

- ❌ Apply hard-edged gradients with only 2 stops and no grain.
- ❌ Overdo grain opacity so it reads as static/noise rather than texture.
- ❌ Put body copy directly on the raw gradient with no contrast safeguard.

## Don't confuse this with…

*Commonly confused neighbors:* mesh-gradient, film-grain.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
