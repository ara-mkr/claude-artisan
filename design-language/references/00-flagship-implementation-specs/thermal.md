# Thermal / Infrared — Implementation Spec

*Aliases:* heatmap aesthetic, thermal cam
*Slug:* `thermal` · *Category:* texture · *Era:* 2020s aesthetic use

**Origin.** Thermal-camera color mapping as style.

**Reference example.** Sci-fi/security UI motifs; experimental fashion.

## Signature move(s)

Every state and every emphasis surface is mapped onto the same black→purple→red→orange→yellow→white heat ramp (`--heat-ramp`) instead of a conventional color palette, and interactive/active elements get a soft radial glow (`--shadow-md`/`--shadow-lg` using `rgba(255,106,26,…)`) that mimics an infrared bloom around a warm body against a cold background.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Heat-map gradient (black-purple-red-yellow-white)
- Glowing edges, body-heat blobs
- Sci-fi surveillance vibe
- High-tech, eerie

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/thermal.css`.)

```css
/* Thermal / Infrared — design tokens (generated from style_catalog.json) */
/* 2020s aesthetic use | Thermal-camera color mapping as style. */
:root {
  /* color */
  --color-bg: #0a0014;
  --color-surface: #1a0a2e;
  --color-surface-strong: #26123f;
  --color-border: #5b1a6b;
  --color-text: #f5f0e8;
  --color-text-muted: #c9a8d9;
  --color-primary: #ff6a1a;
  --color-accent: #ffd23f;
  --color-heat-cold: #3a0ca3;
  /* radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 14px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 0 8px rgba(255,106,26,0.25);
  --shadow-md: 0 0 24px rgba(255,106,26,0.35);
  --shadow-lg: 0 0 48px rgba(255,106,26,0.45);
  /* font */
  --font-sans: 'Rajdhani', 'Barlow Condensed', system-ui, sans-serif;
  --font-display: 'Rajdhani', 'Oswald', sans-serif;
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
  --heat-ramp: linear-gradient(90deg, #0a0014 0%, #3a0ca3 30%, #ff1a4a 55%, #ff6a1a 75%, #ffd23f 90%, #fff8e7 100%);
  --heat-glow-edge: linear-gradient(90deg, var(--color-heat-cold), var(--color-primary), var(--color-accent));
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Thermal / Infrared — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0a0014",
        "surface": "#1a0a2e",
        "surface-strong": "#26123f",
        "border": "#5b1a6b",
        "text": "#f5f0e8",
        "text-muted": "#c9a8d9",
        "primary": "#ff6a1a",
        "accent": "#ffd23f",
        "heat-cold": "#3a0ca3",
      },
      borderRadius: {
        "sm": "4px",
        "md": "8px",
        "lg": "14px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 0 8px rgba(255,106,26,0.25)",
        "md": "0 0 24px rgba(255,106,26,0.35)",
        "lg": "0 0 48px rgba(255,106,26,0.45)",
      },
      fontFamily: {
        "sans": ["'Rajdhani'", "'Barlow Condensed'", "system-ui", "sans-serif"],
        "display": ["'Rajdhani'", "'Oswald'", "sans-serif"],
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
//   --heat-ramp: linear-gradient(90deg, #0a0014 0%, #3a0ca3 30%, #ff1a4a 55%, #ff6a1a 75%, #ffd23f 90%, #fff8e7 100%);
//   --heat-glow-edge: linear-gradient(90deg, var(--color-heat-cold), var(--color-primary), var(--color-accent));
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Dark cold-toned fill at rest; hover/active sweeps `--heat-ramp` across the fill left-to-right and adds `--shadow-md` bloom, as if the surface just "heated up". |
| **Input** | Cold `--color-surface` field with `--color-heat-cold` border; focus reassigns the border to `--heat-glow-edge` and adds `--shadow-sm`. |
| **Card** | The hero: cold background, a warm "body-heat blob" — a soft radial `--heat-ramp`-derived glow — positioned behind the key stat or avatar, `--shadow-md` bloom on the whole card edge. |
| **Nav** | Near-black bar with an active-tab underline rendered in `--heat-glow-edge` and a glow (`--shadow-sm`) trailing the indicator. |
| **Modal** | Cold scrim, panel edge lit with `--heat-glow-edge`, title text picks up `--color-accent` as if it were the hottest point in frame. |
| **Table** | Cell values above a threshold render with a heat-mapped background chip (color picked from `--heat-ramp` by magnitude) instead of a plain number. |
| **Tooltip** | Small warm chip with `--shadow-sm` glow, `--color-primary` border, dark interior. |
| **Badge** | Status dot/pill colored by position on `--heat-ramp` (cold = calm, hot = critical) rather than arbitrary semantic colors. |
| **Toggle** | Cold track when off; on-state track fills with `--heat-ramp` and the knob gets a `--shadow-sm` glow. |
| **Loading** | A scanning bar sweeping `--heat-ramp` left to right, or a pulsing radial "heat blob" that brightens and dims. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Never encode meaning by hue alone on the heat ramp — purple-vs-red-vs-yellow distinctions fail for color-blind users, so pair heat-mapped values with a label, icon, or numeric readout.
- Glow-heavy `--shadow-md`/`--shadow-lg` effects can bloom over adjacent text; keep body copy on flat `--color-surface` panels away from the glow radius.
- The condensed `--font-sans` (Rajdhani/Barlow Condensed) is legible at display sizes but tightens at small sizes — bump tracking or size for body text and verify contrast of `--color-text-muted` on `--color-bg`.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Map data/state to the full `--heat-ramp`, not just two colors.
- ✅ Keep the base UI cold/dark so warm accents read as genuinely "hot".
- ✅ Pair every heat-mapped color cue with a text/numeric fallback.

## Don't

- ❌ Use the heat ramp as decoration on everything — reserve it for meaningful emphasis or data.
- ❌ Let glow blur spill across body text.
- ❌ Mix in unrelated saturated hues (blues/greens) outside the ramp.

## Don't confuse this with…

*Commonly confused neighbors:* holographic, cyberpunk.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
