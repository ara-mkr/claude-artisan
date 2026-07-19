# Neumorphism — Implementation Spec

*Aliases:* soft UI, neo-skeuomorphism, new skeuomorphism  
*Slug:* `neumorphism` · *Category:* morphism · *Era:* 2019–2021

**Origin.** Named after Alexander Plyuto's 2019 Dribbble concept; 'neumorphism' coined by Michał Malewicz.

**Reference example.** Alexander Plyuto's Skeuomorph 2.0 Dribbble concept; many fintech dashboard concepts.

## Signature move(s)

Same-color extrusion: shapes look pressed from the background using a paired light+dark shadow (light top-left, dark bottom-right). 'Pressed' state swaps the outer shadow for an inset. Every element shares the exact background color.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Extruded shapes that look pressed from the background (same base color)
- Dual light+dark shadow pair creates soft embossing
- Very low contrast, monochromatic surfaces
- Inset shadow toggles for 'pressed' state

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/neumorphism.css`.)

```css
/* Neumorphism — design tokens (generated from style_catalog.json) */
/* 2019–2021 | Named after Alexander Plyuto's 2019 Dribbble concept; 'neumorphism' coined by Michał Malewicz. */
:root {
  /* color */
  --color-bg: #e0e5ec;
  --color-surface: #e0e5ec;
  --color-text: #4b5563;
  --color-text-muted: #8a94a6;
  --color-primary: #6d5dfc;
  --color-accent: #4d80e4;
  --color-light: #ffffff;
  --color-dark: #a3b1c6;
  /* radius */
  --radius-sm: 12px;
  --radius-md: 20px;
  --radius-lg: 32px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-raised: 8px 8px 16px #a3b1c6, -8px -8px 16px #ffffff;
  --shadow-raised-sm: 4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff;
  --shadow-pressed: inset 6px 6px 12px #a3b1c6, inset -6px -6px 12px #ffffff;
  --shadow-pressed-sm: inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff;
  /* font */
  --font-sans: 'Poppins', system-ui, sans-serif;
  --font-display: 'Poppins', system-ui, sans-serif;
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
  /* extra (signature gradients, composite borders, filters) */
  --bg-tint-light: #ffffff;
  --bg-tint-dark: #a3b1c6;
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Neumorphism — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#e0e5ec",
        "surface": "#e0e5ec",
        "text": "#4b5563",
        "text-muted": "#8a94a6",
        "primary": "#6d5dfc",
        "accent": "#4d80e4",
        "light": "#ffffff",
        "dark": "#a3b1c6",
      },
      borderRadius: {
        "sm": "12px",
        "md": "20px",
        "lg": "32px",
        "pill": "999px",
      },
      boxShadow: {
        "raised": "8px 8px 16px #a3b1c6, -8px -8px 16px #ffffff",
        "raised-sm": "4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff",
        "pressed": "inset 6px 6px 12px #a3b1c6, inset -6px -6px 12px #ffffff",
        "pressed-sm": "inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff",
      },
      fontFamily: {
        "sans": ["'Poppins'", "system-ui", "sans-serif"],
        "display": ["'Poppins'", "system-ui", "sans-serif"],
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

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --bg-tint-light: #ffffff;
//   --bg-tint-dark: #a3b1c6;
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Raised extrusion (`--shadow-raised-sm`); on press swap to `--shadow-pressed-sm`. Text/icon in the accent color for affordance. |
| **Input** | Always inset (`--shadow-pressed-sm`) so fields read as recessed wells; focus adds a colored outline (shadows can't signal focus). |
| **Card** | Gently raised (`--shadow-raised`), generous radius, same bg color. |
| **Nav** | Raised bar or a row of raised icon buttons on the shared surface. |
| **Modal** | Raised panel over a subtly darkened same-hue backdrop. |
| **Table** | Very hard — use inset dividers, not shadows per row; keep it mostly flat with one raised container. |
| **Tooltip** | Small raised chip; add a real border for edge definition. |
| **Badge** | Small raised or inset pill; use color for meaning since emboss is monochrome. |
| **Toggle** | Inset track (pressed well) with a raised knob that slides. |
| **Loading** | Pulsing raised/inset skeleton blocks in the base color. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- This style fights contrast by design — the default muted text can pass (~5.5:1) but soft shadows carry ZERO contrast, so every state change must also change color or an icon, never emboss alone.
- Add a 1px inset border under `@media (prefers-contrast: more)` so controls have a visible edge.
- Focus must be a solid colored outline; never signal focus with a shadow tweak.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Keep it monochromatic and low-contrast between surfaces.
- ✅ Reserve neumorphism for a few controls; pair with clear color accents.
- ✅ Use inset for inputs, raised for actions — consistently.

## Don't

- ❌ Use it for dense data or long forms — it becomes unreadable.
- ❌ Rely on the emboss alone to show state or focus.
- ❌ Put it on a pure white or pure black bg — the dual shadow needs a mid-tone.

## Don't confuse this with…

*Commonly confused neighbors:* skeuomorphism, claymorphism.

vs claymorphism: neumorphism is subtle, same-color, low-contrast emboss; claymorphism is puffy, colorful, high-radius with a strong outer drop shadow. vs skeuomorphism: skeuo mimics real materials/textures, neumorphism is abstract monochrome plastic.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
