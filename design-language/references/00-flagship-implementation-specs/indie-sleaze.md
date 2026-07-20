# Indie Sleaze — Implementation Spec

*Aliases:* hipster 2008, blog-house  
*Slug:* `indie-sleaze` · *Category:* niche · *Era:* 2006–2012 (revived 2021)

**Origin.** Late-2000s hipster party aesthetic.

**Reference example.** Cobrasnake party photos; blog-house era.

## Signature move(s)

A harsh on-camera flash look: pure-white "flash" highlights (`--color-flash: #ffffff`) blown out against near-black surfaces, everything slightly tilted (`--collage-tilt: rotate(-1.5deg)`) like a scanned party photo dropped into a collage, with almost no border-radius so nothing feels designed — it feels dumped.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Harsh on-camera flash photography
- Grainy, messy, American Apparel era
- Neon-on-black party grit
- Ironic, hedonistic, lo-fi

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/indie-sleaze.css`.)

```css
/* Indie Sleaze — design tokens (generated from style_catalog.json) */
/* 2006–2012 (revived 2021) | Late-2000s hipster party aesthetic. */
:root {
  /* color */
  --color-bg: #0c0c0c;
  --color-surface: #161616;
  --color-surface-strong: #1f1f1f;
  --color-border: #3a3a3a;
  --color-text: #f5f5f2;
  --color-text-muted: #b8b3ad;
  --color-primary: #ff2d9c;
  --color-accent: #ccff00;
  --color-flash: #ffffff;
  /* radius */
  --radius-sm: 1px;
  --radius-md: 2px;
  --radius-lg: 3px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 0 0 1px rgba(255,255,255,0.08), 0 2px 10px rgba(0,0,0,0.6);
  --shadow-md: 0 0 24px rgba(255,255,255,0.14), 0 8px 24px rgba(0,0,0,0.7);
  --shadow-lg: 0 0 40px rgba(255,255,255,0.18), 0 16px 40px rgba(0,0,0,0.75);
  /* font */
  --font-sans: 'Helvetica Neue', Arial, sans-serif;
  --font-display: 'Impact', 'Arial Black', sans-serif;
  --font-mono: 'Courier New', ui-monospace, monospace;
  /* text */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.375rem;
  --text-2xl: 1.85rem;
  --text-3xl: 2.5rem;
  --text-4xl: 3.4rem;
  --text-5xl: 4.6rem;
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
  --ease-standard: cubic-bezier(0.3, 0, 0.4, 1);
  /* extra (collage tilt, flash grain) */
  --collage-tilt: rotate(-1.5deg);
  --collage-tilt-alt: rotate(1deg);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Indie Sleaze — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0c0c0c",
        "surface": "#161616",
        "surface-strong": "#1f1f1f",
        "border": "#3a3a3a",
        "text": "#f5f5f2",
        "text-muted": "#b8b3ad",
        "primary": "#ff2d9c",
        "accent": "#ccff00",
        "flash": "#ffffff",
      },
      borderRadius: {
        "sm": "1px",
        "md": "2px",
        "lg": "3px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 0 0 1px rgba(255,255,255,0.08), 0 2px 10px rgba(0,0,0,0.6)",
        "md": "0 0 24px rgba(255,255,255,0.14), 0 8px 24px rgba(0,0,0,0.7)",
        "lg": "0 0 40px rgba(255,255,255,0.18), 0 16px 40px rgba(0,0,0,0.75)",
      },
      fontFamily: {
        "sans": ["'Helvetica Neue'", "Arial", "sans-serif"],
        "display": ["'Impact'", "'Arial Black'", "sans-serif"],
        "mono": ["'Courier New'", "ui-monospace", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem",
        "sm": "0.875rem",
        "base": "1rem",
        "lg": "1.125rem",
        "xl": "1.375rem",
        "2xl": "1.85rem",
        "3xl": "2.5rem",
        "4xl": "3.4rem",
        "5xl": "4.6rem",
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
        "standard": "cubic-bezier(0.3, 0, 0.4, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (collage tilt transforms).
// Add them as CSS custom properties or arbitrary values:
//   --collage-tilt: rotate(-1.5deg);
//   --collage-tilt-alt: rotate(1deg);
// A grain/noise texture is best added as a background-image data-URI SVG
// filter overlay per component-example; see assets/starter-themes/indie-sleaze.css.
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Near-square (`--radius-sm`), `--color-primary` fill or plain white outline; hover flashes to `--color-flash` background briefly, like a camera pop. |
| **Input** | Flat `--color-surface`, thin `--color-border`; focus adds `--shadow-sm`'s white halo (simulated flash bounce). |
| **Card** | Slight `--collage-tilt` rotation, `--shadow-md` white-bloom + black drop combo, near-zero radius. |
| **Nav** | Flat `--color-bg` bar, `--font-display` wordmark in Impact, no tilt (nav should stay usable/orderly). |
| **Modal** | `--shadow-lg`, `--collage-tilt-alt` for a slight "polaroid dropped on the table" feel, hard `--radius-md` corners. |
| **Table** | Flat, untilted, `--color-surface` rows with `--color-border` gridlines — keep data legible and grid-aligned. |
| **Tooltip** | Small flash-white chip on `--color-surface-strong`, `--shadow-sm`. |
| **Badge** | Flat rectangle, `--color-primary`/`--color-accent`, `--radius-sm`, optional slight tilt for flavor. |
| **Toggle** | Flat rectangular track, hard-edged knob that flashes white momentarily on toggle. |
| **Loading** | A rapid white flash-flicker (camera-strobe effect, 2–3 quick pulses) rather than a smooth spinner. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Flash-strobe effects (rapid white flicker on loading/hover) are a photosensitivity risk — gate them fully behind `prefers-reduced-motion: reduce` and cap flash frequency well under 3 flashes/second even when motion is allowed.
- `--collage-tilt` rotation must never be applied to primary reading content (paragraphs, forms, tables) — restrict to card/modal container framing only, and keep the tilt small enough (≤2deg) that clickable targets stay easy to hit.
- Verify `--color-text-muted` (warm gray) against the near-black `--color-bg` with `contrast_check.py` — grainy dark palettes often look fine visually but sit right at the contrast floor.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Keep radii near zero across the board — any roundness makes it look too polished/modern.
- ✅ Reserve `--collage-tilt` for card/photo-like containers, applied inconsistently (not all the same angle) to feel unplanned.
- ✅ Use pure white flash highlights sparingly as accents on hover/active states, not as a base fill.

## Don't

- ❌ Round corners or add soft pastel shadows — this style is deliberately harsh, not cute.
- ❌ Apply strobe/flash animation without a reduced-motion gate.
- ❌ Tilt body text or form fields — tilt is a container-level flourish only.

## Don't confuse this with…

*Commonly confused neighbors:* vhs, grunge.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
