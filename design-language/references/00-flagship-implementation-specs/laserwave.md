# Laserwave / Darksynth — Implementation Spec

*Aliases:* darksynth, dreamwave  
*Slug:* `laserwave` · *Category:* retrofuturism · *Era:* 2013–present

**Origin.** Darker, harder subgenre of synthwave.

**Reference example.** Perturbator; Carpenter Brut visuals.

## Signature move(s)

A near-black void (`--color-bg: #0a0014`) pierced by a double-red-and-purple laser glow — `--shadow-md`/`--shadow-lg` layer a tight crimson bloom under a wider violet bloom, with a faint `--scanlines` texture laid over everything like a VHS horror tape. Corners stay tight (`--radius-sm`/`--radius-md`, 2–4px) — nothing here is soft or friendly.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Aggressive neon on black, horror tones
- Red/purple/cyan, chrome skulls
- Cinematic, ominous
- VHS grain and glow

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/laserwave.css`.)

```css
/* Laserwave / Darksynth — design tokens (generated from style_catalog.json) */
/* 2013–present | Darker, harder subgenre of synthwave. */
:root {
  /* color */
  --color-bg: #0a0014;
  --color-surface: #170a2e;
  --color-surface-strong: #23103f;
  --color-border: rgba(255,43,109,0.35);
  --color-text: #f5e9ff;
  --color-text-muted: #b48ecf;
  --color-primary: #ff2b53;
  --color-accent: #9b30ff;
  --color-glow-2: #ff2b6d;
  /* radius */
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 0 8px rgba(255,43,83,0.45);
  --shadow-md: 0 0 20px rgba(255,43,83,0.5), 0 0 40px rgba(155,48,255,0.25);
  --shadow-lg: 0 0 32px rgba(255,43,83,0.6), 0 0 64px rgba(155,48,255,0.35);
  /* font */
  --font-sans: 'Rajdhani', 'Barlow Condensed', system-ui, sans-serif;
  --font-display: 'Orbitron', 'Rajdhani', system-ui, sans-serif;
  --font-mono: 'Share Tech Mono', ui-monospace, monospace;
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
  --scanlines: repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 3px);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Laserwave / Darksynth — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0a0014",
        "surface": "#170a2e",
        "surface-strong": "#23103f",
        "border": "rgba(255,43,109,0.35)",
        "text": "#f5e9ff",
        "text-muted": "#b48ecf",
        "primary": "#ff2b53",
        "accent": "#9b30ff",
        "glow-2": "#ff2b6d",
      },
      borderRadius: {
        "sm": "2px",
        "md": "4px",
        "lg": "8px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 0 8px rgba(255,43,83,0.45)",
        "md": "0 0 20px rgba(255,43,83,0.5), 0 0 40px rgba(155,48,255,0.25)",
        "lg": "0 0 32px rgba(255,43,83,0.6), 0 0 64px rgba(155,48,255,0.35)",
      },
      fontFamily: {
        "sans": ["'Rajdhani'", "'Barlow Condensed'", "system-ui", "sans-serif"],
        "display": ["'Orbitron'", "'Rajdhani'", "system-ui", "sans-serif"],
        "mono": ["'Share Tech Mono'", "ui-monospace", "monospace"],
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
//   --scanlines: repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 3px);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Sharp `--radius-sm` rectangle, `--color-surface-strong` fill, `--color-primary` border with `--shadow-sm` bloom; hover escalates to `--shadow-md`'s double red/purple glow. |
| **Input** | Near-black field, thin `--color-border` outline; focus swaps to a solid `--color-primary` border plus glow. |
| **Card** | The hero: `--color-surface`, `--scanlines` overlay at low opacity, `--color-border` edge, `--shadow-md` double-color bloom, `--radius-md`. |
| **Nav** | Void-black bar, active link underlined in `--color-primary` with a tight glow, logo rendered in `--font-display` chrome/red. |
| **Modal** | Strongest glow (`--shadow-lg`) around a sharp-cornered panel over a near-black scrim, scanlines visible across the whole overlay. |
| **Table** | Flat `--color-surface` rows with `--color-border` rules; header row glows faintly in `--color-primary`. |
| **Tooltip** | Small sharp-cornered chip, tight red glow, `--shadow-sm`. |
| **Badge** | Outlined tag in `--color-primary` or `--color-accent`, no fill, thin glow. |
| **Toggle** | Dark track; on-state glows `--color-glow-2` red, off-state stays flat `--color-surface-strong`. |
| **Loading** | A pulsing red/purple glow ring, or scanlines sweeping vertically across a dark skeleton block. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- `--color-text-muted` (muted violet) on `--color-bg`/`--color-surface` is low-contrast by design for mood — verify actual body text uses `--color-text` and check with `contrast_check.py`; reserve `--color-text-muted` for secondary/decorative labels only.
- The `--scanlines` texture and glow blooms must respect `prefers-reduced-motion` if animated (pulsing/flicker) — provide a static fallback.
- Glow alone is not a visible focus indicator on a near-black background — pair focus-visible with a solid, slightly-desaturated outline so it doesn't disappear into the ambient red/purple bloom.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Keep corners tight and geometric — no soft, friendly rounding.
- ✅ Layer red and purple glows together (`--shadow-md`) rather than using a single neon color.
- ✅ Add the scanline texture as a subtle overlay, not a dominant pattern.

## Don't

- ❌ Soften the palette toward pastel neon — laserwave stays saturated and ominous.
- ❌ Round corners generously — that drifts toward friendly synthwave/vaporwave, not darksynth.
- ❌ Let flicker/pulse animation run without a reduced-motion fallback.

## Don't confuse this with…

*Commonly confused neighbors:* synthwave, cyberpunk.

vs synthwave: synthwave is earnest, cinematic, sun-and-grid nostalgia in magenta/cyan; laserwave is darker, harder, horror-tinged in red/purple with tighter corners and no gradient sun. vs cyberpunk: cyberpunk is dystopian HUD/data-density; laserwave is sparse, moody, and glow-driven with almost no on-screen data chrome.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
