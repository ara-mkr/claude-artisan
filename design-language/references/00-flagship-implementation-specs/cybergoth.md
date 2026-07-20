# Cybergoth — Implementation Spec

*Aliases:* cyber goth, rivethead-adjacent  
*Slug:* `cybergoth` · *Category:* niche · *Era:* 1990s–2010s

**Origin.** Goth + rave + industrial fusion.

**Reference example.** Early-2000s industrial/rave scene.

## Signature move(s)

A toxic acid-green `--neon-edge` outline (1px, saturated, always visible not just on hover) rings every interactive surface, radiating a `--color-toxic-glow` shadow instead of a soft drop shadow. A diagonal `--hazard-stripe` (UV pink repeating stripe) marks anything that needs industrial "caution" energy. Black stays the base, but instead of goth's restrained gold accent, this is aggressive, saturated, rave-lit neon.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Black + toxic neon (green, UV pink)
- Industrial, PVC, goggles, dreads
- Rave energy meets goth darkness
- Aggressive, futuristic

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/cybergoth.css`.)

```css
/* Cybergoth — design tokens (generated from style_catalog.json) */
/* 1990s–2010s | Goth + rave + industrial fusion. */
:root {
  /* color */
  --color-bg: #08070a;
  --color-surface: #131018;
  --color-surface-strong: #1c1724;
  --color-border: #3a2f47;
  --color-text: #f1e9ff;
  --color-text-muted: #b9a9d6;
  --color-primary: #b6ff1a;
  --color-accent: #ff2fd0;
  --color-uv: #33f0ff;
  --color-toxic-glow: rgba(182, 255, 26, 0.35);
  /* radius */
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 6px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 0 6px var(--color-toxic-glow);
  --shadow-md: 0 0 16px var(--color-toxic-glow), 0 4px 12px rgba(0,0,0,0.6);
  --shadow-lg: 0 0 32px var(--color-toxic-glow), 0 8px 24px rgba(0,0,0,0.7);
  /* font */
  --font-sans: 'Rubik', 'Eurostile', system-ui, sans-serif;
  --font-display: 'Orbitron', 'Rubik', sans-serif;
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
  --ease-standard: cubic-bezier(0.7, 0, 0.3, 1);
  /* extra: toxic neon edge glow + industrial hazard stripe accent */
  --neon-edge: 1px solid var(--color-primary);
  --hazard-stripe: repeating-linear-gradient(45deg, var(--color-accent) 0 6px, transparent 6px 12px);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Cybergoth — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#08070a",
        "surface": "#131018",
        "surface-strong": "#1c1724",
        "border": "#3a2f47",
        "text": "#f1e9ff",
        "text-muted": "#b9a9d6",
        "primary": "#b6ff1a",
        "accent": "#ff2fd0",
        "uv": "#33f0ff",
        "toxic-glow": "rgba(182, 255, 26, 0.35)",
      },
      borderRadius: {
        "sm": "2px",
        "md": "4px",
        "lg": "6px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 0 6px var(--color-toxic-glow)",
        "md": "0 0 16px var(--color-toxic-glow), 0 4px 12px rgba(0,0,0,0.6)",
        "lg": "0 0 32px var(--color-toxic-glow), 0 8px 24px rgba(0,0,0,0.7)",
      },
      fontFamily: {
        "sans": ["'Rubik'", "'Eurostile'", "system-ui", "sans-serif"],
        "display": ["'Orbitron'", "'Rubik'", "sans-serif"],
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
        "standard": "cubic-bezier(0.7, 0, 0.3, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --neon-edge: 1px solid var(--color-primary);
//   --hazard-stripe: repeating-linear-gradient(45deg, var(--color-accent) 0 6px, transparent 6px 12px);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--color-surface-strong` fill, `--neon-edge` border, `--shadow-sm` glow at rest that intensifies to `--shadow-md` on hover — the glow itself is the hover feedback. |
| **Input** | `--color-surface` fill, `--color-border` dark purple hairline; focus swaps the border to `--neon-edge` and adds `--shadow-sm`. |
| **Card** | The hero: `--color-surface-strong` base, `--neon-edge`, `--hazard-stripe` corner accent, `--shadow-md` toxic glow. |
| **Nav** | Black bar, `--neon-edge` bottom border, active tab gets `--color-accent` UV-pink underline with its own small glow. |
| **Modal** | `--shadow-lg` (maximum glow), `--neon-edge`, centered on a near-black scrim — the glow should be the brightest thing on screen. |
| **Table** | Rows on flat `--color-surface`/`--color-surface-strong`, no glow on body rows (reserve glow for interactive elements only) — `--hazard-stripe` reserved for header only. |
| **Tooltip** | Small chip, `--neon-edge`, `--shadow-sm` glow, `--color-uv` cyan text for secondary metadata. |
| **Badge** | Pill with `--hazard-stripe` background for "warning" states, solid `--color-primary` or `--color-accent` fill for standard status. |
| **Toggle** | Track in `--color-surface`, `--neon-edge` outline; knob glows `--shadow-md` toxic green when active, dark and glow-less when off. |
| **Loading** | A pulsing neon-edge ring or a `--hazard-stripe` marquee scrolling — industrial, mechanical motion, not smooth easing. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Acid-green `--color-primary` and UV-pink `--color-accent` on near-black pass contrast well for large text but should still be verified with `contrast_check.py` for smaller UI labels — glow effects can visually flatter a combination that measures poorly.
- The signature glow shadows (`--shadow-sm/md/lg`) are decorative, not a substitute for a real focus outline — pair every focus-visible state with a solid, high-contrast outline in addition to the glow.
- Rapid neon pulse/flicker motion (common in cybergoth references) is a photosensitivity risk — cap any flicker/strobe effect and provide a static fallback under `prefers-reduced-motion`.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Keep the neon glow reserved for interactive/active elements so it reads as energy, not wallpaper.
- ✅ Use `--hazard-stripe` sparingly as a warning/accent motif, not a general background texture.
- ✅ Pair the acid-green primary with UV-pink and cyan accents for the full toxic-rave palette — don't collapse to one neon color.

## Don't

- ❌ Soften the neon glow into a gentle pastel — the aggression is the point.
- ❌ Use smooth, gentle easing curves — cybergoth motion should feel mechanical/industrial, not bouncy or soft.
- ❌ Rely on glow alone for focus indication — always add a solid outline too.

## Don't confuse this with…

*Commonly confused neighbors:* cyberpunk, goth, acid-graphics.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
