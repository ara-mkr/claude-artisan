# Liminal Spaces — Implementation Spec

*Aliases:* backrooms, liminal  
*Slug:* `liminal-spaces` · *Category:* niche · *Era:* 2019–present

**Origin.** Internet fascination with empty transitional spaces.

**Reference example.** The Backrooms; empty-mall photos.

## Signature move(s)

A jaundiced fluorescent wash — a sickly yellow-green glow (`--color-fluoro: #eef0a8`) bleeding out of every surface as a soft halo, over near-square corners and a worn beige/khaki palette that reads as old carpet and drop-ceiling tile. A radial `--vignette` darkens the frame edges so every screen feels like a photo taken alone in an empty building.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Empty familiar-yet-wrong places (malls, halls)
- Fluorescent lighting, worn carpet
- Uncanny emptiness and déjà-vu
- Nostalgic unease

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/liminal-spaces.css`.)

```css
/* Liminal Spaces — design tokens (generated from style_catalog.json) */
/* 2019–present | Internet fascination with empty transitional spaces. */
:root {
  /* color */
  --color-bg: #d9cf9a;
  --color-surface: #e7ddab;
  --color-surface-strong: #cfc188;
  --color-border: #b0a267;
  --color-text: #24211a;
  --color-text-muted: #565034;
  --color-primary: #8a6a3d;
  --color-accent: #5f6b3f;
  --color-fluoro: #eef0a8;
  /* radius */
  --radius-sm: 0px;
  --radius-md: 2px;
  --radius-lg: 2px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 1px 4px rgba(20,18,10,0.30);
  --shadow-md: 0 0 26px rgba(238,240,168,0.35), 0 2px 8px rgba(20,18,10,0.35);
  --shadow-lg: 0 0 40px rgba(238,240,168,0.4), 0 6px 18px rgba(20,18,10,0.4);
  /* font */
  --font-sans: 'Arial', 'Helvetica Neue', system-ui, sans-serif;
  --font-display: 'Arial', system-ui, sans-serif;
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
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  /* extra (vignette, hum lines) */
  --vignette: radial-gradient(120% 90% at 50% 30%, transparent 45%, rgba(10,9,4,0.30) 100%);
  --hum-line: repeating-linear-gradient(180deg, rgba(238,240,168,0.05) 0px, transparent 2px, transparent 5px);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Liminal Spaces — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#d9cf9a",
        "surface": "#e7ddab",
        "surface-strong": "#cfc188",
        "border": "#b0a267",
        "text": "#24211a",
        "text-muted": "#565034",
        "primary": "#8a6a3d",
        "accent": "#5f6b3f",
        "fluoro": "#eef0a8",
      },
      borderRadius: {
        "sm": "0px",
        "md": "2px",
        "lg": "2px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 4px rgba(20,18,10,0.30)",
        "md": "0 0 26px rgba(238,240,168,0.35), 0 2px 8px rgba(20,18,10,0.35)",
        "lg": "0 0 40px rgba(238,240,168,0.4), 0 6px 18px rgba(20,18,10,0.4)",
      },
      fontFamily: {
        "sans": ["'Arial'", "'Helvetica Neue'", "system-ui", "sans-serif"],
        "display": ["'Arial'", "system-ui", "sans-serif"],
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

// Signature `extra` tokens are CSS-only (vignette/hum-line gradients).
// Add them as CSS custom properties or arbitrary values:
//   --vignette: radial-gradient(120% 90% at 50% 30%, transparent 45%, rgba(10,9,4,0.30) 100%);
//   --hum-line: repeating-linear-gradient(180deg, rgba(238,240,168,0.05) 0px, transparent 2px, transparent 5px);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Near-square (`--radius-md`), flat `--color-surface-strong` fill; hover adds `--shadow-md`'s fluoro glow bleed instead of lifting. |
| **Input** | Flat `--color-surface`, 1px `--color-border`, sharp corners — no soft affordances, like an old form field. |
| **Card** | `--color-surface` panel with `--vignette` layered on top as an overlay pseudo-element, `--shadow-sm`. |
| **Nav** | Flat bar, `--color-surface-strong`, with `--hum-line` texture faintly visible — evokes flickering fluorescent tube light. |
| **Modal** | Centered panel with `--shadow-lg` (the fluoro glow at its strongest) against a fully vignetted backdrop. |
| **Table** | Minimal-contrast rows on `--color-surface`; keep grid lines faint (`--color-border` at low opacity) to preserve the "empty, quiet" feel. |
| **Tooltip** | Small flat chip, `--shadow-sm`, no rounding — looks like an old tape label. |
| **Badge** | Flat rectangle, `--color-accent` or `--color-primary`, `--radius-sm` — avoid pill shapes, they feel too friendly for this mood. |
| **Toggle** | Utilitarian rectangular track (`--radius-md`), no glow on the track itself — reserve fluoro glow for the active knob only. |
| **Loading** | A slow flicker (opacity 1↔0.85 irregular timing) on the fluoro glow, mimicking a dying fluorescent tube. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- The khaki/beige palette is intentionally low-contrast and desaturated — verify `--color-text` on `--color-bg` still clears 4.5:1 with `contrast_check.py`; darken `--color-text` further if the mood needs pushing but contrast must not slip.
- Flicker/hum animations must respect `prefers-reduced-motion: reduce` — disable irregular opacity flicker entirely rather than slowing it, since irregular flicker is a known motion-sickness/photosensitivity trigger.
- Keep focus indicators crisp and high-contrast (a solid `--color-accent` outline) — the deliberately washed-out palette means default browser focus rings can vanish entirely.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Keep corners near-square (0–2px) everywhere — soft radii undercut the institutional unease.
- ✅ Let the fluoro glow bleed outward from a single implied light source, not evenly.
- ✅ Use empty negative space liberally — the emptiness is the point, don't fill every gap.

## Don't

- ❌ Add saturated, cheerful accent colors — the palette must stay muted khaki/olive.
- ❌ Round corners or add soft shadows — that reads as friendly SaaS, not abandoned backrooms.
- ❌ Use rapid, jittery flicker animation without a reduced-motion fallback.

## Don't confuse this with…

*Commonly confused neighbors:* weirdcore, dreamcore, mallsoft.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
