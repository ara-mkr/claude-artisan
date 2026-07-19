# Claymorphism — Implementation Spec

*Aliases:* clay UI, 3D clay, puffy UI  
*Slug:* `claymorphism` · *Category:* morphism · *Era:* 2021–present

**Origin.** Coined by Michał Malewicz (Hype4) in 2021.

**Reference example.** Hype4 claymorphism generator; many 2022 illustration-heavy landing pages.

## Signature move(s)

Puffy, inflated shapes like modeling clay: big border-radius + a double INNER shadow (light top-left, colored bottom-right) + a soft outer drop shadow. Candy pastel palette. One recipe, everywhere.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Puffy, inflated 3D shapes like modeling clay
- Large border-radius on everything
- Double inner shadow (light top-left, colored bottom-right) plus soft outer drop shadow
- Pastel, candy-like palettes

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/claymorphism.css`.)

```css
/* Claymorphism — design tokens (generated from style_catalog.json) */
/* 2021–present | Coined by Michał Malewicz (Hype4) in 2021. */
:root {
  /* color */
  --color-bg: #eef1ff;
  --color-surface: #ffffff;
  --color-surface-2: #f2eaff;
  --color-text: #3a2e5c;
  --color-text-muted: #7c6f9e;
  --color-primary: #7c5cff;
  --color-accent: #ff8fab;
  --color-secondary: #5ce1e6;
  /* radius */
  --radius-sm: 18px;
  --radius-md: 28px;
  --radius-lg: 40px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-clay: 35px 35px 68px rgba(124,92,255,0.20), inset -8px -8px 16px rgba(124,92,255,0.16), inset 8px 8px 20px rgba(255,255,255,0.90);
  --shadow-clay-sm: 16px 16px 30px rgba(124,92,255,0.18), inset -4px -4px 10px rgba(124,92,255,0.14), inset 6px 6px 14px rgba(255,255,255,0.90);
  /* font */
  --font-sans: 'Nunito', 'Baloo 2', system-ui, sans-serif;
  --font-display: 'Baloo 2', 'Nunito', system-ui, sans-serif;
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
  /* extra (signature gradients, composite borders, filters) */
  --clay-inner-light: inset 8px 8px 20px rgba(255,255,255,0.9);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Claymorphism — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#eef1ff",
        "surface": "#ffffff",
        "surface-2": "#f2eaff",
        "text": "#3a2e5c",
        "text-muted": "#7c6f9e",
        "primary": "#7c5cff",
        "accent": "#ff8fab",
        "secondary": "#5ce1e6",
      },
      borderRadius: {
        "sm": "18px",
        "md": "28px",
        "lg": "40px",
        "pill": "999px",
      },
      boxShadow: {
        "clay": "35px 35px 68px rgba(124,92,255,0.20), inset -8px -8px 16px rgba(124,92,255,0.16), inset 8px 8px 20px rgba(255,255,255,0.90)",
        "clay-sm": "16px 16px 30px rgba(124,92,255,0.18), inset -4px -4px 10px rgba(124,92,255,0.14), inset 6px 6px 14px rgba(255,255,255,0.90)",
      },
      fontFamily: {
        "sans": ["'Nunito'", "'Baloo 2'", "system-ui", "sans-serif"],
        "display": ["'Baloo 2'", "'Nunito'", "system-ui", "sans-serif"],
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

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --clay-inner-light: inset 8px 8px 20px rgba(255,255,255,0.9);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Rounded pill/rect with `--shadow-clay-sm`; bright fill, white text; springy overshoot on hover. |
| **Input** | Recessed clay well (inner shadow only) or a soft raised field with big radius. |
| **Card** | The showcase: big radius (`--radius-lg`), full `--shadow-clay`, pastel surface. |
| **Nav** | Floating rounded clay pill bar. |
| **Modal** | Big puffy panel that scales in with overshoot easing. |
| **Table** | Wrap the table in one clay card; keep rows flat inside — don't clay every cell. |
| **Tooltip** | Tiny puffy bubble. |
| **Badge** | Small clay pill in a secondary color. |
| **Toggle** | Puffy track with a fat rounded knob. |
| **Loading** | Bouncing pastel clay blobs / skeleton with big radius. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Pastel-on-pastel and white-on-bright-pastel routinely fail AA — darken text or fills and verify with `contrast_check.py`.
- The overshoot/bounce motion should be reduced under `prefers-reduced-motion`.
- Keep focus rings solid and offset — the soft shadows don't indicate focus.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Commit to big radius and pastels wholeheartedly.
- ✅ Use bouncy (overshoot) easing for the playful feel.
- ✅ Keep the light source consistent (top-left) across all clay.

## Don't

- ❌ Mix tiny radii with clay — it breaks the 'inflated' illusion.
- ❌ Use for serious/enterprise/data-dense UI.
- ❌ Let white text sit on a light pastel fill.

## Don't confuse this with…

*Commonly confused neighbors:* neumorphism, corporate-memphis.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
