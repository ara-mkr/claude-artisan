# Space Age Pop — Implementation Spec

*Aliases:* space age, 1960s futurism  
*Slug:* `space-age` · *Category:* retrofuturism · *Era:* 1957–1972

**Origin.** Space-race-era design optimism.

**Reference example.** 2001: A Space Odyssey interiors; Panton furniture.

## Signature move(s)

Molded-plastic pod geometry: very large, evenly-rounded radii (`--radius-lg: 48px`) on every raised surface so panels read as injection-molded pods, finished with a `--shadow-chrome` inset highlight/shadow pair that simulates curved plastic catching light. A rotating `--starburst` sun-burst pattern and `--chrome-gradient` trims give hero moments an "op-art meets astronaut" polish.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Sleek white + primary pops, molded plastic
- Spherical/pod forms, chrome
- Op-art and geometric patterns
- Astronaut-era optimism

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/space-age.css`.)

```css
/* Space Age Pop — design tokens (generated from style_catalog.json) */
/* 1957–1972 | Space-race-era design optimism. */
:root {
  /* color */
  --color-bg: #f4f2ec;
  --color-surface: #ffffff;
  --color-surface-strong: #eceae2;
  --color-border: #d8d4c6;
  --color-text: #1c1b17;
  --color-text-muted: #5a564a;
  --color-primary: #e8542a;
  --color-accent: #2f8fd4;
  --color-chrome: #c7ccd1;
  --color-sun: #f2b705;
  /* radius (pod-like, large and even) */
  --radius-sm: 12px;
  --radius-md: 24px;
  --radius-lg: 48px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 2px 6px rgba(28,27,23,0.10);
  --shadow-md: 0 8px 20px rgba(28,27,23,0.14);
  --shadow-lg: 0 18px 40px rgba(28,27,23,0.18);
  --shadow-chrome: inset 0 1px 0 rgba(255,255,255,0.8), inset 0 -6px 10px rgba(0,0,0,0.08);
  /* font */
  --font-sans: 'Century Gothic', 'Poppins', 'Futura', system-ui, sans-serif;
  --font-display: 'Cooper Black', 'Baloo 2', 'Poppins', system-ui, sans-serif;
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
  --ease-standard: cubic-bezier(0.34, 1.2, 0.64, 1);
  --ease-entrance: cubic-bezier(0, 0, 0, 1);
  --ease-exit: cubic-bezier(0.3, 0, 1, 1);
  /* extra (signature starburst + chrome) */
  --starburst: repeating-conic-gradient(from 0deg, var(--color-sun) 0deg 8deg, transparent 8deg 20deg);
  --chrome-gradient: linear-gradient(135deg, #fdfdfd, #c7ccd1 45%, #fdfdfd 55%, #a9afb5);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Space Age Pop — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f4f2ec",
        "surface": "#ffffff",
        "surface-strong": "#eceae2",
        "border": "#d8d4c6",
        "text": "#1c1b17",
        "text-muted": "#5a564a",
        "primary": "#e8542a",
        "accent": "#2f8fd4",
        "chrome": "#c7ccd1",
        "sun": "#f2b705",
      },
      borderRadius: {
        "sm": "12px",
        "md": "24px",
        "lg": "48px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 6px rgba(28,27,23,0.10)",
        "md": "0 8px 20px rgba(28,27,23,0.14)",
        "lg": "0 18px 40px rgba(28,27,23,0.18)",
        "chrome": "inset 0 1px 0 rgba(255,255,255,0.8), inset 0 -6px 10px rgba(0,0,0,0.08)",
      },
      fontFamily: {
        "sans": ["'Century Gothic'", "'Poppins'", "'Futura'", "system-ui", "sans-serif"],
        "display": ["'Cooper Black'", "'Baloo 2'", "'Poppins'", "system-ui", "sans-serif"],
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
        "standard": "cubic-bezier(0.34, 1.2, 0.64, 1)",
        "entrance": "cubic-bezier(0, 0, 0, 1)",
        "exit": "cubic-bezier(0.3, 0, 1, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients). Add as custom properties:
//   --starburst: repeating-conic-gradient(from 0deg, #f2b705 0deg 8deg, transparent 8deg 20deg);
//   --chrome-gradient: linear-gradient(135deg, #fdfdfd, #c7ccd1 45%, #fdfdfd 55%, #a9afb5);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--radius-pill` or `--radius-lg` pod shape, `--shadow-chrome` inset highlight over a solid `--color-primary` fill for that molded-plastic look. |
| **Input** | `--radius-md`, `--color-surface`, `--shadow-chrome` subtle inset; focus ring in `--color-accent`. |
| **Card** | `--radius-lg` (48px pod), `--shadow-md` + `--shadow-chrome` layered, `--color-surface` — the archetypal "space pod" panel. |
| **Nav** | `--chrome-gradient` bar or pill, `--radius-pill`, bold `--font-display` wordmark. |
| **Modal** | `--radius-lg`, `--shadow-lg`, `--starburst` behind the header at low opacity radiating from the top. |
| **Table** | Flatter `--radius-sm` rows, `--color-border` dividers — pod radius reserved for containers, not dense rows. |
| **Tooltip** | Small `--radius-md` chip, `--color-surface-strong`, `--shadow-sm`. |
| **Badge** | `--radius-pill`, solid `--color-sun`/`--color-accent` fill. |
| **Toggle** | Pill track with `--chrome-gradient`, round knob with `--shadow-chrome` for a 3D pod-button feel. |
| **Loading** | Rotating `--starburst` motif, or a pulsing pod-shaped orb using `--shadow-chrome`. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- `--shadow-chrome`'s inset highlight can wash out text placed directly on it — keep text on the flat center of the surface, never near the inset edges.
- `--color-sun` (gold/yellow) on `--color-bg` (cream) is a common contrast failure for body text — reserve it for large starburst accents and icons, not text.
- Respect `prefers-reduced-motion` for the rotating starburst loader; swap to a static chrome progress bar.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Keep radii large and even (pod-like) rather than sharp — this is the core visual signature.
- ✅ Use `--shadow-chrome` consistently on every "molded" surface to sell the plastic material.
- ✅ Reserve the starburst pattern for hero/decorative zones, not dense content areas.

## Don't

- ❌ Mix in sharp, boxy corners — this breaks the molded-pod illusion.
- ❌ Place body text directly over the starburst pattern at full opacity.
- ❌ Use `--color-sun` as a body-text color.

## Don't confuse this with…

*Commonly confused neighbors:* atompunk, mid-century-modern.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
