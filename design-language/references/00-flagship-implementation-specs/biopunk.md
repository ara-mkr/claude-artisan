# Biopunk — Implementation Spec

*Aliases:* organic sci-fi, biotech  
*Slug:* `biopunk` · *Category:* retrofuturism · *Era:* 1990s–present

**Origin.** Offshoot of cyberpunk focused on biotechnology.

**Reference example.** The Thing; Scorn; Annihilation.

## Signature move(s)

Fluid, asymmetric organic-blob radii (`--radius-sm`/`md`/`lg` are all multi-value elliptical shapes, never a plain circle) on every container, as if each surface were grown rather than drawn. Surfaces pulse with a soft `--color-primary` bio-luminescent glow instead of a drop shadow, and a `--color-membrane` tone lines interior edges like tissue.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Wet organic textures, flesh and fungus
- Bio-luminescence, veins, membranes
- Genetic/lab motifs
- Body-horror-adjacent futurism

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/biopunk.css`.)

```css
/* Biopunk — design tokens (generated from style_catalog.json) */
/* 1990s–present | Offshoot of cyberpunk focused on biotechnology. */
:root {
  /* color */
  --color-bg: #0a1410;
  --color-surface: #10201a;
  --color-surface-strong: #16291f;
  --color-border: #2f6b4c;
  --color-text: #e6f5ea;
  --color-text-muted: #9fc9ac;
  --color-primary: #39ff8c;
  --color-accent: #d63bff;
  --color-membrane: #1f3d2c;
  /* radius */
  --radius-sm: 40% 60% 55% 45% / 45% 40% 60% 55%;
  --radius-md: 60% 40% 55% 45% / 50% 55% 45% 50%;
  --radius-lg: 55% 45% 60% 40% / 45% 55% 40% 60%;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 0 10px rgba(57,255,140,0.25);
  --shadow-md: 0 0 22px rgba(57,255,140,0.3);
  --shadow-lg: 0 0 40px rgba(57,255,140,0.35);
  /* font */
  --font-sans: 'Space Grotesk', 'IBM Plex Sans', system-ui, sans-serif;
  --font-display: 'Space Grotesk', 'IBM Plex Mono', sans-serif;
  --font-mono: 'IBM Plex Mono', ui-monospace, monospace;
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
  --glow-border: 1px solid rgba(57,255,140,0.5);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Biopunk — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0a1410",
        "surface": "#10201a",
        "surface-strong": "#16291f",
        "border": "#2f6b4c",
        "text": "#e6f5ea",
        "text-muted": "#9fc9ac",
        "primary": "#39ff8c",
        "accent": "#d63bff",
        "membrane": "#1f3d2c",
      },
      borderRadius: {
        "sm": "40% 60% 55% 45% / 45% 40% 60% 55%",
        "md": "60% 40% 55% 45% / 50% 55% 45% 50%",
        "lg": "55% 45% 60% 40% / 45% 55% 40% 60%",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 0 10px rgba(57,255,140,0.25)",
        "md": "0 0 22px rgba(57,255,140,0.3)",
        "lg": "0 0 40px rgba(57,255,140,0.35)",
      },
      fontFamily: {
        "sans": ["'Space Grotesk'", "'IBM Plex Sans'", "system-ui", "sans-serif"],
        "display": ["'Space Grotesk'", "'IBM Plex Mono'", "sans-serif"],
        "mono": ["'IBM Plex Mono'", "ui-monospace", "monospace"],
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
//   --glow-border: 1px solid rgba(57,255,140,0.5);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Organic-blob `--radius-md`, `--glow-border`, `--color-surface` fill; hover intensifies `--shadow-md` like the surface is "pulsing." |
| **Input** | `--color-membrane`-lined blob field, `--glow-border`; focus brightens the glow and border to full `--color-primary`. |
| **Card** | Membrane-edged organic panel: `--color-surface`, asymmetric `--radius-lg`, soft bio-glow `--shadow-md`, faint `--color-membrane` inner vein lines as a background texture. |
| **Nav** | A single elongated blob bar; active item swells slightly and glows brighter than siblings. |
| **Modal** | Large blob "cyst" shape overlaying a near-black scrim, strong `--shadow-lg` glow so it reads as emerging from the dark. |
| **Table** | Keep rows on flat `--color-surface` rectangles (organic radii on every cell would be unreadable); reserve the blob shapes for containers, not dense grids. |
| **Tooltip** | Small glowing blob chip, `--color-accent` (magenta) for a "mutation/warning" variant. |
| **Badge** | Tiny pill or blob tag pulsing with `--shadow-sm`; use `--color-accent` for anomaly/alert states. |
| **Toggle** | Track is a membrane-lined capsule; knob is a glowing "cell" that drifts (not slides linearly) between states. |
| **Loading** | Pulsing bio-glow blob that breathes in scale/opacity, evoking a heartbeat or spore pulse. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- The near-black `--color-bg` with glowing green/magenta accents needs explicit contrast verification for body text — glow shadows don't add to actual contrast ratio, only `--color-text` vs background does.
- Pulsing/breathing glow animation on cards and loaders must respect `prefers-reduced-motion` — freeze at mid-glow intensity instead of stopping abruptly.
- Asymmetric organic radii can make focus outlines look clipped — use `outline` with generous `outline-offset` rather than trying to match the blob curvature exactly.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Give every container an asymmetric organic radius — no two blobs should look identical.
- ✅ Use glow (`box-shadow`, not `border`) as the primary depth cue instead of hard drop shadows.
- ✅ Reserve `--color-accent` (magenta) for anomaly/mutation/alert states to keep it meaningful.

## Don't

- ❌ Apply the blob radius to dense data tables or grids — it destroys scannability.
- ❌ Use crisp hard-edged shadows — everything should feel soft, wet, and glowing.
- ❌ Let the glow animation run indefinitely without a reduced-motion fallback.

## Don't confuse this with…

*Commonly confused neighbors:* cyberpunk, organic-design.

vs cyberpunk: cyberpunk is hard-edged neon HUD on black with clipped rectangular corners; biopunk is soft organic blobs with a wet bio-luminescent glow and no hard geometry. vs organic-design: organic-design uses natural curves in a calm, often light, wellness-brand context; biopunk pushes the same curvature into a dark, body-horror-adjacent sci-fi register.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
