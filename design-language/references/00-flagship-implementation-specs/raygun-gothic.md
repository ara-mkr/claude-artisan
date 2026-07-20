# Raygun Gothic — Implementation Spec

*Aliases:* retro sci-fi, googie sci-fi  
*Slug:* `raygun-gothic` · *Category:* retrofuturism · *Era:* 1930s–1960s (revived)

**Origin.** Term popularized by William Gibson; pulp sci-fi + Googie.

**Reference example.** The Jetsons; Forbidden Planet; Tomorrowland.

## Signature move(s)

Chrome-and-neon "World of Tomorrow" optimism: a diagonal `--chrome-gradient` (silver-to-blue metallic band) applied to any element meant to feel machined, punched through by a `--starburst` conic pattern behind hero content, all set against a deep midnight-blue `--color-bg`. Corners either stay sharp (`--radius-sm`) for panels or go full pill (`--radius-lg`) for rocket-nose buttons — nothing in between.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Sleek rockets, ray guns, chrome fins
- Streamlined optimistic space age
- Bold geometric sans + starbursts
- 1950s "World of Tomorrow" futurism

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/raygun-gothic.css`.)

```css
/* Raygun Gothic — design tokens (generated from style_catalog.json) */
/* 1930s–1960s (revived) | Term popularized by William Gibson; pulp sci-fi + Googie. */
:root {
  /* color */
  --color-bg: #0b1e3d;
  --color-surface: #12315e;
  --color-surface-strong: #1a4180;
  --color-border: #8fb4e6;
  --color-text: #f2f6ff;
  --color-text-muted: #aac2e8;
  --color-primary: #ff5a36;
  --color-accent: #2ee6d0;
  --color-chrome: #c9d6e8;
  /* radius */
  --radius-sm: 4px;
  --radius-md: 12px;
  --radius-lg: 999px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 2px 6px rgba(0,0,0,0.3);
  --shadow-md: 0 6px 18px rgba(0,0,0,0.4);
  --shadow-lg: 0 14px 36px rgba(0,0,0,0.5);
  /* font */
  --font-sans: 'Century Gothic', 'Futura', 'Poppins', sans-serif;
  --font-display: 'Broadway', 'Futura', 'Arial Black', sans-serif;
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
  --ease-standard: cubic-bezier(0.34, 1.56, 0.64, 1);
  /* extra (signature chrome + starburst) */
  --chrome-gradient: linear-gradient(135deg, #eef3ff 0%, #9fb6d8 45%, #4a6a9c 55%, #eef3ff 100%);
  --starburst: repeating-conic-gradient(from 0deg, rgba(46,230,208,0.10) 0deg 8deg, transparent 8deg 20deg);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Raygun Gothic — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0b1e3d",
        "surface": "#12315e",
        "surface-strong": "#1a4180",
        "border": "#8fb4e6",
        "text": "#f2f6ff",
        "text-muted": "#aac2e8",
        "primary": "#ff5a36",
        "accent": "#2ee6d0",
        "chrome": "#c9d6e8",
      },
      borderRadius: {
        "sm": "4px",
        "md": "12px",
        "lg": "999px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 6px rgba(0,0,0,0.3)",
        "md": "0 6px 18px rgba(0,0,0,0.4)",
        "lg": "0 14px 36px rgba(0,0,0,0.5)",
      },
      fontFamily: {
        "sans": ["'Century Gothic'", "'Futura'", "'Poppins'", "sans-serif"],
        "display": ["'Broadway'", "'Futura'", "'Arial Black'", "sans-serif"],
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
        "standard": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients). Add as custom properties:
//   --chrome-gradient: linear-gradient(135deg, #eef3ff 0%, #9fb6d8 45%, #4a6a9c 55%, #eef3ff 100%);
//   --starburst: repeating-conic-gradient(from 0deg, rgba(46,230,208,0.10) 0deg 8deg, transparent 8deg 20deg);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--radius-lg` (full pill "rocket nose"), `--chrome-gradient` fill on secondary, solid `--color-primary` on primary with `--shadow-md` lift on hover. |
| **Input** | `--radius-sm`, `--color-surface` fill, 1px `--color-border`; focus ring in `--color-accent` (teal), evoking a cockpit readout. |
| **Card** | `--color-surface`, `--radius-md`, `--starburst` background layered behind content at low opacity, `--shadow-md`. |
| **Nav** | Chrome bar using `--chrome-gradient`, bold `--font-display` wordmark, pill nav items. |
| **Modal** | `--color-surface-strong`, `--radius-md`, `--shadow-lg`, `--starburst` radiating from the header like a launch backdrop. |
| **Table** | Flat `--color-surface` rows (starburst/chrome reserved for chrome, not data density) with `--color-border` dividers. |
| **Tooltip** | Small chrome-edged chip: `--color-surface-strong` fill, 1px `--color-chrome` border. |
| **Badge** | Pill badge, solid `--color-accent` or `--color-primary` fill, bold uppercase `--font-display` text. |
| **Toggle** | Pill track with `--chrome-gradient`, glowing `--color-accent` knob when on. |
| **Loading** | Radiating `--starburst` spinner rotating slowly, or a chrome progress bar filling with `--color-primary`. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- `--chrome-gradient` text-on-chrome combinations often fail contrast — never place body text directly on the gradient; use it for chrome/borders only, keep text on `--color-surface` or `--color-bg`.
- `--starburst` behind text must stay below ~12% opacity or be masked away from the text block entirely.
- Respect `prefers-reduced-motion` for the rotating starburst loading indicator — swap to a static chrome bar.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Reserve `--chrome-gradient` for borders, buttons, and chrome — not text backgrounds.
- ✅ Use `--starburst` as a subtle background accent, always masked away from legible text.
- ✅ Keep the pill/sharp corner contrast deliberate — don't blend to a uniform medium radius.

## Don't

- ❌ Put body copy directly over the chrome gradient.
- ❌ Use full-opacity starburst patterns behind dense text.
- ❌ Mix in cool modern sans fonts that break the Googie-era display type feel.

## Don't confuse this with…

*Commonly confused neighbors:* atompunk, googie, space-age.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
