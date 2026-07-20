# Chrome / Liquid Metal — Implementation Spec

*Aliases:* liquid metal, metallic, chrome type  
*Slug:* `chrome-metal` · *Category:* texture · *Era:* 1990s & 2020s revival

**Origin.** 90s 3D chrome + Y2K revival (2020s).

**Reference example.** 90s metal logos; 2020s chrome typography trend.

## Signature move(s)

A five-stop vertical gradient — bright highlight, mid-steel, dark trough, secondary highlight, bright highlight again — standing in for an environment-map reflection, applied as `background: var(--chrome-gradient)` with `background-clip: text` on display type and as a fill on raised surfaces. A thin `rainbow-edge` gradient traces one edge to fake a prismatic reflection off the metal. The illusion only works if the gradient bands repeat identically everywhere metal appears — one static "light source" for the whole UI.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Reflective mirror-metal surfaces and type
- Environment-map reflections, gradients top-light
- Cold silver/steel with rainbow edge
- Heavy, premium, futuristic

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/chrome-metal.css`.)

```css
/* Chrome / Liquid Metal — design tokens (generated from style_catalog.json) */
/* 1990s & 2020s revival | 90s 3D chrome + Y2K revival (2020s). */
:root {
  /* color */
  --color-bg: #1c1e22;
  --color-surface: #2a2d33;
  --color-surface-strong: #383c44;
  --color-border: #6b727e;
  --color-text: #f1f3f5;
  --color-text-muted: #b7bec8;
  --color-primary: #c7cdd6;
  --color-accent: #7dd3fc;
  /* radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 14px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.5);
  --shadow-md: 0 6px 16px rgba(0,0,0,0.5);
  --shadow-lg: 0 14px 32px rgba(0,0,0,0.55);
  /* font */
  --font-sans: 'Helvetica Neue', Arial, system-ui, sans-serif;
  --font-display: 'Helvetica Neue', Arial, system-ui, sans-serif;
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
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
  /* extra (signature gradients, composite borders, filters) */
  --chrome-gradient: linear-gradient(180deg, #f4f6f8 0%, #c7cdd6 18%, #6b727e 48%, #9aa1ab 62%, #eef1f4 100%);
  --rainbow-edge: linear-gradient(90deg, #ff8fab, #ffd97d, #7dd3fc, #b794f6);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Chrome / Liquid Metal — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#1c1e22",
        "surface": "#2a2d33",
        "surface-strong": "#383c44",
        "border": "#6b727e",
        "text": "#f1f3f5",
        "text-muted": "#b7bec8",
        "primary": "#c7cdd6",
        "accent": "#7dd3fc",
      },
      borderRadius: {
        "sm": "4px",
        "md": "8px",
        "lg": "14px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 2px rgba(0,0,0,0.5)",
        "md": "0 6px 16px rgba(0,0,0,0.5)",
        "lg": "0 14px 32px rgba(0,0,0,0.55)",
      },
      fontFamily: {
        "sans": ["'Helvetica Neue'", "Arial", "system-ui", "sans-serif"],
        "display": ["'Helvetica Neue'", "Arial", "system-ui", "sans-serif"],
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
        "standard": "cubic-bezier(0.2, 0, 0, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --chrome-gradient: linear-gradient(180deg, #f4f6f8 0%, #c7cdd6 18%, #6b727e 48%, #9aa1ab 62%, #eef1f4 100%);
//   --rainbow-edge: linear-gradient(90deg, #ff8fab, #ffd97d, #7dd3fc, #b794f6);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `background: var(--chrome-gradient)`, 1px `--rainbow-edge` bottom border sliver, dark text (`--color-bg`) for contrast on the bright bands; hover intensifies highlight stop by ~10%, active inverts the gradient direction to read as "pressed in." |
| **Input** | Recessed `--color-surface` fill (no gradient, metal reads as raised) with an inset `--shadow-sm`; focus adds a thin `--color-accent` outline, the only non-metal color allowed on it. |
| **Card** | `--chrome-gradient` header strip over a flat `--color-surface` body — full-card chrome is illegible for content, so chrome is reserved for chrome/frame, not fields of text. |
| **Nav** | Bar filled with `--chrome-gradient`, `--rainbow-edge` as a 2px underline on the active item. |
| **Modal** | Chrome titlebar strip (echoes OS chrome), flat `--color-surface-strong` body beneath it. |
| **Table** | Flat surface body; header row alone gets the chrome gradient to mark it as a fixed control, not data. |
| **Tooltip** | Small chrome chip, dark text, `--shadow-sm`. |
| **Badge** | Pill with `--chrome-gradient` fill and `--rainbow-edge` 1px ring for "premium" status badges only. |
| **Toggle** | Chrome knob on a dark `--color-surface` track; the knob's gradient direction flips left-to-right instead of top-to-bottom to sell it rolling. |
| **Loading** | A thin `--rainbow-edge` bar sweeping left-to-right, or a chrome disc spinner using the same five-stop gradient rotating. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- `background-clip: text` chrome type has wildly variable contrast band-to-band — never use it for body copy or anything below display/headline size; verify the darkest gradient stop against its surface with `contrast_check.py`.
- Metal gradients read as decoration to screen readers — always pair chrome text with a real, unstyled text alternative in the accessibility tree (don't rely on the gradient text as the only content).
- Disabled states must desaturate the gradient toward flat gray, not just dim opacity, or they read as "still shiny/active."

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Keep the gradient light-source direction (top-light) identical on every chrome surface.
- ✅ Reserve chrome fill for chrome/frame elements (buttons, headers, badges), not text blocks.
- ✅ Use the rainbow edge sparingly, as a 1-2px accent, never as a fill.

## Don't

- ❌ Apply `background-clip: text` chrome to paragraph copy.
- ❌ Mix multiple light-source angles across surfaces — it breaks the "one material" illusion.
- ❌ Skip the flat unstyled text fallback for chrome headlines.

## Don't confuse this with…

*Commonly confused neighbors:* holographic, y2k-futurism, chromecore.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
