# Airbrush / 70s-80s Illustration — Implementation Spec

*Aliases:* airbrushed, van art
*Slug:* `airbrush` · *Category:* texture · *Era:* 1970s–1980s

**Origin.** Airbrush illustration golden age (sci-fi/van art).

**Reference example.** 70s-80s sci-fi paperback covers; van murals.

## Signature move(s)

Smooth, sourceless radial gradients that fake airbrush shading: every raised surface gets a soft glow blooming from one corner (`--color-primary` → `--color-accent`), oversized soft radii, and diffuse warm-hued shadows instead of hard drop shadows. Nothing is flat — every surface looks like it was rendered with a spray gun and a stencil.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Smooth gradient shading and soft glows
- Chrome, lasers, fantasy sci-fi scenes
- Highly polished rendered surfaces
- Retro album/poster illustration

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/airbrush.css`.)

```css
/* Airbrush / 70s-80s Illustration — design tokens (generated from style_catalog.json) */
/* 1970s–1980s | Airbrush illustration golden age (sci-fi/van art). */
:root {
  /* color */
  --color-bg: #1a0f2e;
  --color-surface: #2b1b3d;
  --color-surface-strong: #3d2554;
  --color-border: #6b4a8a;
  --color-text: #fdf3e7;
  --color-text-muted: rgba(253, 243, 231, 0.72);
  --color-primary: #ff6b35;
  --color-accent: #ff2e88;
  --color-chrome: #cbd5e1;
  /* radius */
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 32px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 2px 10px rgba(255,107,53,0.25);
  --shadow-md: 0 10px 30px rgba(255,46,136,0.28);
  --shadow-lg: 0 24px 60px rgba(255,107,53,0.3);
  /* font */
  --font-sans: 'Avenir Next', 'Century Gothic', system-ui, sans-serif;
  --font-display: 'Eurostile', 'Century Gothic', sans-serif;
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
  --ease-standard: cubic-bezier(0.3, 0, 0.15, 1);
  /* extra */
  --bg-image: radial-gradient(140% 100% at 20% 0%, #3d2554 0%, #1a0f2e 60%);
  --glow-fill: radial-gradient(120% 120% at 30% 20%, var(--color-primary), var(--color-accent) 70%);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Airbrush / 70s-80s Illustration — Tailwind theme fragment (generated).
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#1a0f2e",
        "surface": "#2b1b3d",
        "surface-strong": "#3d2554",
        "border": "#6b4a8a",
        "text": "#fdf3e7",
        "text-muted": "rgba(253, 243, 231, 0.72)",
        "primary": "#ff6b35",
        "accent": "#ff2e88",
        "chrome": "#cbd5e1",
      },
      borderRadius: {
        "sm": "8px",
        "md": "16px",
        "lg": "32px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 10px rgba(255,107,53,0.25)",
        "md": "0 10px 30px rgba(255,46,136,0.28)",
        "lg": "0 24px 60px rgba(255,107,53,0.3)",
      },
      fontFamily: {
        "sans": ["'Avenir Next'", "'Century Gothic'", "system-ui", "sans-serif"],
        "display": ["'Eurostile'", "'Century Gothic'", "sans-serif"],
        "mono": ["ui-monospace", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem", "sm": "0.875rem", "base": "1rem", "lg": "1.125rem",
        "xl": "1.375rem", "2xl": "1.75rem", "3xl": "2.25rem", "4xl": "3rem", "5xl": "4rem",
      },
      spacing: {
        "1": "4px", "2": "8px", "3": "12px", "4": "16px", "6": "24px",
        "8": "32px", "12": "48px", "16": "64px", "24": "96px",
      },
      transitionTimingFunction: {
        "standard": "cubic-bezier(0.3, 0, 0.15, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only:
//   --bg-image: radial-gradient(140% 100% at 20% 0%, #3d2554 0%, #1a0f2e 60%);
//   --glow-fill: radial-gradient(120% 120% at 30% 20%, var(--color-primary), var(--color-accent) 70%);
```

## Component rules (the 10 primitives)

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--radius-lg` fully soft pill-ish shape, `--glow-fill` gradient fill, `--shadow-sm` diffuse glow; hover intensifies to `--shadow-md`. |
| **Input** | `--color-surface` fill with a soft inner glow ring on focus using `--color-accent` at low opacity, generous `--radius-md`. |
| **Card** | `--color-surface` panel with `--glow-fill` bleeding from one corner, `--radius-lg`, `--shadow-lg` diffuse warm glow. |
| **Nav** | `--color-surface-strong` bar with a chrome (`--color-chrome`) hairline underline and a laser-streak gradient accent behind the logo. |
| **Modal** | Centered panel, `--radius-lg`, strongest `--shadow-lg`, `--glow-fill` wash across the header area. |
| **Table** | Rows on flat `--color-surface` (glow reserved for cards/hero) with `--color-chrome` divider lines to keep data legible. |
| **Tooltip** | Small `--radius-md` chip with a tight `--shadow-sm` glow, solid `--color-surface-strong` fill for legibility. |
| **Badge** | `--radius-pill` chip, solid `--color-primary` or `--color-accent` fill, no glow (keep small elements crisp). |
| **Toggle** | Track glows with `--glow-fill` when on; knob is solid `--color-chrome` for contrast against the gradient. |
| **Loading** | Radial pulse animation cycling `--color-primary` → `--color-accent`, mimicking an airbrushed spotlight sweep. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

- Gradient-filled buttons can wash out contrast at the fade edge — check the lightest region of `--glow-fill` against `--color-text` with `contrast_check.py`, not just the deepest hue.
- Soft diffuse shadows are not enough for focus visibility — add a solid 2px `--color-chrome` or `--color-accent` outline on `:focus-visible`.
- Keep dense body copy on flat `--color-surface`, never directly on the `--glow-fill` gradient, so text doesn't cross a shifting-contrast background.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Let every hero surface bloom from one gradient light source, consistently positioned.
- ✅ Use generous, soft radii — hard corners break the airbrushed illusion.
- ✅ Reserve `--color-chrome` for structural accents (dividers, knobs) to sell the "polished metal" contrast.

## Don't

- ❌ Don't flatten fills to solid color — the gradient glow is the entire signature move.
- ❌ Don't stack more than one glow direction per surface; it reads as noisy, not airbrushed.
- ❌ Don't use hard, sharp-edged shadows — they belong to a different (brutalist/skeuomorphic) style family.

## Don't confuse this with…

*Commonly confused neighbors:* synthwave, chrome-metal.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
