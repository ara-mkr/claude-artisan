# VHS / Analog Video — Implementation Spec

*Aliases:* retro video, tracking lines, camcorder  
*Slug:* `vhs` · *Category:* texture · *Era:* Evokes 1980s–90s

**Origin.** Nostalgia for analog videotape artifacts.

**Reference example.** 80s home-video aesthetic; music videos; horror pastiche.

## Signature move(s)

Simulated tape degradation layered over every surface: a `--chroma-shadow` red/cyan fringe offset on display type (mimicking chromatic bleed), `--scanlines` repeating-linear-gradient overlaying the whole viewport, and stepped `steps(6, end)` easing so motion feels like a tracking-glitchy tape deck rather than smooth digital animation. A REC/timestamp HUD chip in `--font-display` VCR-OSD monospace completes the camcorder illusion.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Tracking distortion, tape warble, timestamp overlay
- Chromatic bleed, soft blur, grain
- Date/REC HUD, interlacing
- Warm nostalgic degradation

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/vhs.css`.)

```css
/* VHS / Analog Video — design tokens (generated from style_catalog.json) */
/* Evokes 1980s–90s | Nostalgia for analog videotape artifacts. */
:root {
  /* color */
  --color-bg: #0a0a0f;
  --color-surface: #16161f;
  --color-surface-strong: #1e1e2a;
  --color-border: #3a3a4a;
  --color-text: #f0ece0;
  --color-text-muted: #a3a0ae;
  --color-primary: #ff3b5c;
  --color-accent: #2de2e6;
  --color-tape-yellow: #f5c518;
  /* radius */
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 6px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 2px 6px rgba(0, 0, 0, 0.5);
  --shadow-md: 0 6px 18px rgba(0, 0, 0, 0.55);
  --shadow-lg: 0 12px 32px rgba(0, 0, 0, 0.6);
  /* font */
  --font-sans: 'Helvetica Neue', Arial, sans-serif;
  --font-display: 'VCR OSD Mono', 'Courier New', monospace;
  --font-mono: 'VCR OSD Mono', 'Courier New', ui-monospace, monospace;
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
  /* ease (signature stepped/glitch treatment) */
  --ease-standard: steps(6, end);
  --chroma-shadow: -1.5px 0 var(--color-accent), 1.5px 0 var(--color-primary);
  --scanlines: repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 3px);
  --tape-grain: radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.06), transparent 70%);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// VHS / Analog Video — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0a0a0f",
        "surface": "#16161f",
        "surface-strong": "#1e1e2a",
        "border": "#3a3a4a",
        "text": "#f0ece0",
        "text-muted": "#a3a0ae",
        "primary": "#ff3b5c",
        "accent": "#2de2e6",
        "tape-yellow": "#f5c518",
      },
      borderRadius: {
        "sm": "2px",
        "md": "4px",
        "lg": "6px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 6px rgba(0, 0, 0, 0.5)",
        "md": "0 6px 18px rgba(0, 0, 0, 0.55)",
        "lg": "0 12px 32px rgba(0, 0, 0, 0.6)",
      },
      fontFamily: {
        "sans": ["'Helvetica Neue'", "Arial", "sans-serif"],
        "display": ["'VCR OSD Mono'", "'Courier New'", "monospace"],
        "mono": ["'VCR OSD Mono'", "'Courier New'", "ui-monospace", "monospace"],
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
        "standard": "steps(6, end)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (text-shadow/gradients). Add as custom properties:
//   --chroma-shadow: -1.5px 0 #2de2e6, 1.5px 0 #ff3b5c;
//   --scanlines: repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 3px);
//   --tape-grain: radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.06), transparent 70%);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--radius-sm`, `--color-primary` fill, `--chroma-shadow` applied to the label text on hover for a glitch flicker. |
| **Input** | `--color-surface`, 1px `--color-border`, `--font-mono` for typed text (evokes on-screen-display captions); focus adds `--color-accent` border. |
| **Card** | `--color-surface`, `--radius-md`, `--shadow-md`, `--scanlines` overlay at low opacity across the whole card. |
| **Nav** | Dark `--color-surface-strong` bar with a timestamp/REC chip in `--font-display`, `--chroma-shadow` on the active label. |
| **Modal** | `--color-surface-strong`, `--scanlines` + `--tape-grain` layered, `steps()` entrance for a "tape loading" feel. |
| **Table** | Flat rows, `--color-border` dividers, `--font-mono` for numeric data to sell the OSD readout look. |
| **Tooltip** | Small `--font-display` chip resembling a timestamp overlay, `--color-surface-strong` fill. |
| **Badge** | `--radius-sm`, solid `--color-tape-yellow`/`--color-primary` fill, `--font-mono` text, mimicking a REC indicator. |
| **Toggle** | Blocky `--radius-sm` track (not pill — VHS decks used chunky switches), `--color-primary` on-state. |
| **Loading** | A tracking-glitch bar using `--ease-standard: steps(6, end)`, or a "please stand by" scanline-covered overlay. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- `--chroma-shadow` fringing must never be applied to body text — reserve it for short display labels/headlines where a 1-2px offset doesn't blur legibility.
- `--scanlines` and `--tape-grain` overlays must stay under ~8% opacity over any text-bearing surface, or be excluded from the text container entirely via a clipped inner layer.
- Wrap all glitch/`steps()` motion and flicker effects in `prefers-reduced-motion` checks — VHS-style stutter animation is a common vestibular trigger.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Reserve `--chroma-shadow` for short display type, never paragraph text.
- ✅ Keep `--scanlines`/`--tape-grain` as thin, low-opacity overlays layered above solid content, not the primary surface.
- ✅ Use `steps()` easing intentionally for glitch beats, and normal easing for anything a user needs to track precisely (like scroll position).

## Don't

- ❌ Apply chromatic fringe to long-form body copy.
- ❌ Let grain/scanline overlays push effective contrast below 4.5:1.
- ❌ Autoplay flicker/glitch loops without a reduced-motion fallback.

## Don't confuse this with…

*Commonly confused neighbors:* crt, glitch-art, vaporwave.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
