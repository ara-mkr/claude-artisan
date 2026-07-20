# Vercel Geist — Implementation Spec

*Aliases:* Geist, Vercel design
*Slug:* `geist` · *Category:* flat-platform · *Era:* 2023–present

**Origin.** Vercel Geist design system + Geist typeface.

**Reference example.** Vercel.com; Next.js docs.

## Signature move(s)

Near-pure black (`#0a0a0a`) surfaces built up in three tight steps (`--color-bg` → `--color-surface` → `--color-surface-strong`), separated only by 1px hairline borders (`--color-border`) and a faint SVG grain texture (`--grain-image`) — no gradients, no glow, just precise geometric type in Geist Sans/Mono. The hairline is the primary structural device; depth comes from tone-stepping, not shadow.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- High-contrast black/white, precise geometry
- Geist Sans/Mono, tight grid
- Subtle gradients and grain accents
- Developer-premium minimalism

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/geist.css`.)

```css
/* Vercel Geist — design tokens (generated from style_catalog.json) */
/* 2023–present | Vercel Geist design system + Geist typeface. */
:root {
  /* color */
  --color-bg: #0a0a0a;
  --color-surface: #111111;
  --color-surface-strong: #191919;
  --color-border: #2a2a2a;
  --color-text: #fafafa;
  --color-text-muted: #a1a1a1;
  --color-primary: #fafafa;
  --color-accent: #0072f5;
  /* radius */
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.5);
  --shadow-md: 0 4px 16px rgba(0,0,0,0.55);
  --shadow-lg: 0 12px 32px rgba(0,0,0,0.6);
  /* font */
  --font-sans: 'Geist', 'Geist Sans', system-ui, -apple-system, sans-serif;
  --font-display: 'Geist', system-ui, sans-serif;
  --font-mono: 'Geist Mono', ui-monospace, monospace;
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
  --ease-standard: cubic-bezier(0.16, 1, 0.3, 1);
  /* extra (hairline border + grain texture) */
  --hairline: 1px solid var(--color-border);
  --grain-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/></svg>");
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Vercel Geist — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0a0a0a",
        "surface": "#111111",
        "surface-strong": "#191919",
        "border": "#2a2a2a",
        "text": "#fafafa",
        "text-muted": "#a1a1a1",
        "primary": "#fafafa",
        "accent": "#0072f5",
      },
      borderRadius: {
        "sm": "6px", "md": "8px", "lg": "12px", "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 2px rgba(0,0,0,0.5)",
        "md": "0 4px 16px rgba(0,0,0,0.55)",
        "lg": "0 12px 32px rgba(0,0,0,0.6)",
      },
      fontFamily: {
        "sans": ["'Geist'", "'Geist Sans'", "system-ui", "-apple-system", "sans-serif"],
        "display": ["'Geist'", "system-ui", "sans-serif"],
        "mono": ["'Geist Mono'", "ui-monospace", "monospace"],
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
        "standard": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
};

// Grain texture and hairline are CSS-only. Add as custom properties:
//   --hairline: 1px solid var(--color-border);
//   --grain-image: url("data:image/svg+xml...") (fractal-noise SVG, ~3.5% opacity overlay)
```

## Component rules (the 10 primitives)

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--radius-md`, `--color-primary` (near-white) fill with `--color-bg` text for primary; ghost variant uses `--hairline` only. Hover brightens by one surface step. |
| **Input** | `--color-surface` fill, `--hairline` border, `--radius-md`; focus swaps border to `--color-accent` with a thin outer glow. |
| **Card** | `--color-surface`, `--hairline`, `--shadow-sm`, `--radius-lg`; optional `--grain-image` overlay at low opacity for texture. |
| **Nav** | `--color-bg` bar with a single bottom `--hairline` — no elevation, pure tone separation. |
| **Modal** | `--color-surface-strong` panel, `--hairline`, `--shadow-lg`, centered over a near-black scrim. |
| **Table** | `--hairline` row dividers, header row in `--color-surface-strong`, tabular numerals for data columns. |
| **Tooltip** | `--color-surface-strong` chip, `--hairline`, `--shadow-md`, small `--text-xs` label. |
| **Badge** | `--radius-pill`, `--color-surface-strong` fill with `--hairline`, `--color-accent` dot for status. |
| **Toggle** | `--color-surface-strong` track with `--hairline`, `--color-accent` when on. |
| **Loading** | `--color-surface-strong` skeleton with grain-textured shimmer, or a minimal single-pixel-stroke spinner in `--color-text-muted`. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- The three near-black tone steps (`bg`/`surface`/`surface-strong`) are visually subtle — never rely on tone alone to signal state; pair with the `--hairline` border or an icon.
- `--color-text-muted` (#a1a1a1) on `--color-surface` sits near the AA boundary for small text — verify with `contrast_check.py` before shipping body copy at that pairing.
- The grain overlay must stay decorative (`pointer-events: none`, low opacity) and never applied behind small text, where it can degrade legibility further.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Build depth from tone-stepping + hairlines, not drop shadows or color.
- ✅ Use `--color-accent` blue as the only saturated color in the interface, reserved for links/primary actions.
- ✅ Keep grain texture subtle and consistent — one texture recipe reused everywhere, never varied per component.

## Don't

- ❌ Add colorful gradients or glows — Geist's restraint is the signature, not an accident.
- ❌ Use pure `#000000`/`#ffffff` — the whole palette is deliberately off-black/off-white.
- ❌ Skip the hairline border on "flat" components — without it, tone-stepped surfaces blend together.

## Don't confuse this with…

*Commonly confused neighbors:* minimalism, shadcn-ui, bento-grid.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
