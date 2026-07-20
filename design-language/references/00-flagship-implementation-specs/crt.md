# CRT / Scanline / Retro Monitor — Implementation Spec

*Aliases:* scanlines, phosphor, retro monitor  
*Slug:* `crt` · *Category:* texture · *Era:* Evokes 1970s–90s

**Origin.** Emulation of cathode-ray-tube displays.

**Reference example.** Retro game emulators; Fallout terminals; VHS/CRT web filters.

## Signature move(s)

A `repeating-linear-gradient` scanline overlay (`--scanlines`, dark 1px lines every 3px) sits above every surface as a fixed-position pseudo-element, plus a `text-shadow`/`box-shadow` `--glow` built from `--color-phosphor-glow` on all text and primary fills to simulate phosphor bloom. Text and accents render in a single saturated phosphor color (`--color-text: #7dffb0`) rather than true white, because a real CRT's phosphor never renders neutral white at this saturation.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Horizontal scanlines and screen curvature
- Phosphor glow and bloom
- RGB subpixel/aperture-grille texture
- Flicker, vignette, chromatic edges

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/crt.css`.)

```css
/* CRT / Scanline / Retro Monitor — design tokens (generated from style_catalog.json) */
/* Evokes 1970s–90s | Emulation of cathode-ray-tube displays. */
:root {
  /* color */
  --color-bg: #06110a;
  --color-surface: #0b1f13;
  --color-surface-strong: #123020;
  --color-border: #2f6b45;
  --color-text: #7dffb0;
  --color-text-muted: #4fbf82;
  --color-primary: #39ff88;
  --color-accent: #ff5fa2;
  --color-phosphor-glow: rgba(57, 255, 136, 0.45);
  /* radius */
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 0 4px var(--color-phosphor-glow);
  --shadow-md: 0 0 12px var(--color-phosphor-glow);
  --shadow-lg: 0 0 28px var(--color-phosphor-glow);
  /* font */
  --font-sans: 'VT323', 'Share Tech Mono', ui-monospace, monospace;
  --font-display: 'Press Start 2P', 'VT323', monospace;
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
  --ease-standard: steps(3, end);
  /* extra (signature gradients, composite borders, filters) */
  --scanlines: repeating-linear-gradient(0deg, rgba(0,0,0,0.35) 0px, rgba(0,0,0,0.35) 1px, transparent 1px, transparent 3px);
  --glow: 0 0 2px var(--color-text), 0 0 8px var(--color-phosphor-glow);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// CRT / Scanline / Retro Monitor — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#06110a",
        "surface": "#0b1f13",
        "surface-strong": "#123020",
        "border": "#2f6b45",
        "text": "#7dffb0",
        "text-muted": "#4fbf82",
        "primary": "#39ff88",
        "accent": "#ff5fa2",
        "phosphor-glow": "rgba(57, 255, 136, 0.45)",
      },
      borderRadius: {
        "sm": "2px",
        "md": "4px",
        "lg": "8px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 0 4px var(--color-phosphor-glow)",
        "md": "0 0 12px var(--color-phosphor-glow)",
        "lg": "0 0 28px var(--color-phosphor-glow)",
      },
      fontFamily: {
        "sans": ["'VT323'", "'Share Tech Mono'", "ui-monospace", "monospace"],
        "display": ["'Press Start 2P'", "'VT323'", "monospace"],
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
        "standard": "steps(3, end)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --scanlines: repeating-linear-gradient(0deg, rgba(0,0,0,0.35) 0px, rgba(0,0,0,0.35) 1px, transparent 1px, transparent 3px);
//   --glow: 0 0 2px var(--color-text), 0 0 8px var(--color-phosphor-glow);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--color-surface` fill, `--color-primary` text with `--glow` text-shadow, 1px `--color-border` outline; hover intensifies `--shadow-md` glow, active drops to `--shadow-sm` (dimmer, as if voltage sagged). A `::after` with `--scanlines` sits over the whole button at low opacity. |
| **Input** | Dark field, `--color-primary` caret-style text with a faint `--glow`; focus adds `--shadow-sm` around the border to read as "the beam is active here." |
| **Card** | `--color-surface` panel, `--scanlines` overlay pinned via `::before` (`position: absolute; inset: 0; pointer-events: none`), corners can use `--radius-md` to fake screen-bezel rounding. |
| **Nav** | Bar with a persistent `--scanlines` texture and a bottom `--glow` edge, evoking a terminal header. |
| **Modal** | Larger panel, stronger `--shadow-lg` glow, scanlines overlay, optional vignette (`radial-gradient` dark corners) for the screen-curvature cue. |
| **Table** | Monospace `--font-mono` cells, `--color-border` divider lines that double as faux-scanline rules; header row in `--color-accent` with glow. |
| **Tooltip** | Small glowing chip, `--font-mono`, `--shadow-sm`. |
| **Badge** | Bordered pill, `--glow` text-shadow, no fill (transparent, so it reads as "lit text" not print). |
| **Toggle** | Track dark with scanlines; knob glows `--shadow-md` when on, drops to no glow when off (power-off read). |
| **Loading** | A horizontal scan bar (gradient sweep) plus flicker: brief opacity dips via `steps()` easing rather than a smooth pulse. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- The `--scanlines` overlay and simulated flicker are strobe-adjacent — gate ALL flicker/glow-pulse animation behind `@media (prefers-reduced-motion: no-preference)` and provide a static, non-flickering fallback by default for anyone who hasn't explicitly allowed motion.
- Single-hue phosphor text (`--color-text` green-on-near-black) usually passes contrast, but verify with `contrast_check.py` — the glow's `text-shadow` doesn't count toward contrast, only the base fill color does.
- Keep the scanline overlay's darkening at low opacity (per the token, ~35% on 1px lines) so it doesn't drop body text below readable contrast; never stack scanlines AND a vignette AND chromatic-aberration text-shadow on the same text block.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Keep scanlines and glow on every panel for a consistent "one screen" feel.
- ✅ Use a single phosphor hue as the dominant text/accent color, reserving `--color-accent` for rare highlights.
- ✅ Gate flicker/bloom animation behind `prefers-reduced-motion`.

## Don't

- ❌ Animate flicker/glow by default with no reduced-motion fallback.
- ❌ Mix multiple phosphor colors for body text (pick one — green or amber, not both).
- ❌ Let the scanline overlay intercept pointer events (`pointer-events: none` is required).

## Don't confuse this with…

*Commonly confused neighbors:* ascii-terminal, glitch-art, vhs.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
