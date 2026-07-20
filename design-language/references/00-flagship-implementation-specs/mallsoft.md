# Mallsoft — Implementation Spec

*Aliases:* mall vaporwave  
*Slug:* `mallsoft` · *Category:* niche · *Era:* 2014–present

**Origin.** Vaporwave subgenre evoking dead shopping malls.

**Reference example.** Mallsoft album art; dead-mall photography.

## Signature move(s)

A faded teal-and-beige retail haze sits over every surface — a soft `--haze-fill` gradient wash plus a barely-visible `--tile-line` repeating stripe that reads as distant escalator rails or food-court tile, all lit as if by dying skylights. Radii stay small and unglamorous (real 90s retail fixtures, not app-store rounding), and corners feel slightly worn rather than crisp.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Empty-mall photography, muzak nostalgia
- Faded teal/beige 90s retail palette
- Fountains, food courts, plants
- Melancholic consumer nostalgia

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/mallsoft.css`.)

```css
/* Mallsoft — design tokens (generated from style_catalog.json) */
/* 2014–present | Vaporwave subgenre evoking dead shopping malls. */
:root {
  /* color */
  --color-bg: #2f3b3a;
  --color-surface: #3d4c48;
  --color-surface-strong: #4a5c56;
  --color-border: rgba(212, 196, 168, 0.28);
  --color-text: #f1ead9;
  --color-text-muted: #c9c0a8;
  --color-primary: #d98fae;
  --color-accent: #6fb8ae;
  --color-fountain: #7fa39c;
  --color-marquee: #e0b060;
  /* radius */
  --radius-sm: 3px;
  --radius-md: 6px;
  --radius-lg: 10px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 2px 6px rgba(0,0,0,0.30);
  --shadow-md: 0 6px 18px rgba(0,0,0,0.36);
  --shadow-lg: 0 14px 34px rgba(0,0,0,0.42);
  --shadow-haze: inset 0 0 40px rgba(217,143,174,0.10);
  /* font */
  --font-sans: 'Century Gothic', 'Trebuchet MS', system-ui, sans-serif;
  --font-display: 'Copperplate', 'Trebuchet MS', serif;
  --font-mono: 'Courier New', ui-monospace, monospace;
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
  /* extra: faded muzak haze — desaturated teal/beige gradient + soft vignette,
     as if lit by dying skylights over a food court */
  --bg-image: radial-gradient(140% 100% at 50% -10%, #3d4c48 0%, #2f3b3a 60%, #24302f 100%);
  --haze-fill: linear-gradient(160deg, rgba(111,184,174,0.12), rgba(217,143,174,0.06));
  --tile-line: repeating-linear-gradient(90deg, rgba(212,196,168,0.05) 0 2px, transparent 2px 40px);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Mallsoft — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#2f3b3a",
        "surface": "#3d4c48",
        "surface-strong": "#4a5c56",
        "border": "rgba(212, 196, 168, 0.28)",
        "text": "#f1ead9",
        "text-muted": "#c9c0a8",
        "primary": "#d98fae",
        "accent": "#6fb8ae",
        "fountain": "#7fa39c",
        "marquee": "#e0b060",
      },
      borderRadius: {
        "sm": "3px",
        "md": "6px",
        "lg": "10px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 6px rgba(0,0,0,0.30)",
        "md": "0 6px 18px rgba(0,0,0,0.36)",
        "lg": "0 14px 34px rgba(0,0,0,0.42)",
        "haze": "inset 0 0 40px rgba(217,143,174,0.10)",
      },
      fontFamily: {
        "sans": ["'Century Gothic'", "'Trebuchet MS'", "system-ui", "sans-serif"],
        "display": ["'Copperplate'", "'Trebuchet MS'", "serif"],
        "mono": ["'Courier New'", "ui-monospace", "monospace"],
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
//   --bg-image: radial-gradient(140% 100% at 50% -10%, #3d4c48 0%, #2f3b3a 60%, #24302f 100%);
//   --haze-fill: linear-gradient(160deg, rgba(111,184,174,0.12), rgba(217,143,174,0.06));
//   --tile-line: repeating-linear-gradient(90deg, rgba(212,196,168,0.05) 0 2px, transparent 2px 40px);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Muted `--color-surface-strong` fill with `--haze-fill` wash, `--radius-md`, thin `--color-border`; hover brings the `--color-marquee` gold in as an underglow, like a dying neon sign flickering on. |
| **Input** | Flat `--color-surface`, hairline `--color-border`, no glow until focus — focus ring uses `--color-accent` teal at low opacity, echoing a fountain reflection. |
| **Card** | `--bg-image` gradient base + `--haze-fill` overlay + `--tile-line` texture, `--radius-lg`, `--shadow-haze` inset — the hero surface where the "empty mall" mood concentrates. |
| **Nav** | Wide flat bar in `--color-surface`, `--color-marquee` accent line beneath it like a food-court directory sign. |
| **Modal** | Centered card with `--shadow-lg`, kept on `--color-surface-strong` so it reads as a lit storefront window against the dim mall haze. |
| **Table** | Alternate rows between `--color-surface` and `--color-bg` at very low contrast — like tile flooring, not a data grid. |
| **Tooltip** | Small `--color-surface-strong` chip, `--color-fountain` border, feels like a directory kiosk label. |
| **Badge** | Muted pill in `--color-fountain` or `--color-marquee`, never neon-bright — everything here is sun-faded. |
| **Toggle** | Worn-looking track (`--color-surface`), knob in `--color-primary` dusty rose, slow `--ease-standard` transition. |
| **Loading** | A slow fountain-like pulse or shimmer using `--haze-fill`, evoking water circulating in an empty atrium. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- The whole palette is intentionally low-contrast and hazy — verify `--color-text` and `--color-text-muted` against `--color-bg`/`--color-surface` with `contrast_check.py` and nudge text lightness up if it fails, without losing the faded mood.
- `--tile-line` and `--haze-fill` textures must stay under ~12% opacity behind text blocks; anything stronger competes with reading.
- Avoid animating the haze/vignette continuously — a static melancholic stillness is the point, and constant motion undercuts both the mood and motion-sensitivity needs.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Keep everything slightly desaturated and dim — no surface should read as "bright."
- ✅ Reuse the `--tile-line` and `--haze-fill` textures across every large surface for cohesion.
- ✅ Let `--color-marquee` gold stand in for "signage" accents sparingly, like a lit sign in a dark corridor.

## Don't

- ❌ Saturate the palette up to full vaporwave neon — that's a different, louder style.
- ❌ Use crisp, modern radii or shadows — mallsoft fixtures are dated, not sleek.
- ❌ Overuse motion — this is a still, contemplative aesthetic, not an animated one.

## Don't confuse this with…

*Commonly confused neighbors:* vaporwave, liminal-spaces.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
