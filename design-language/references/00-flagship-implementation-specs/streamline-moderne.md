# Streamline Moderne — Implementation Spec

*Aliases:* Art Moderne, Streamline  
*Slug:* `streamline-moderne` · *Category:* historical · *Era:* 1930s

**Origin.** Late Art Deco offshoot, US industrial design.

**Reference example.** Chrysler Airflow; diners; ocean-liner graphics.

## Signature move(s)

Repeating horizontal chrome "speed line" bands (`--speed-lines`) placed along the leading edge of nav bars and cards, combined with fully-rounded, aerodynamic-nose corners (`--radius-lg`: 40px) that mimic a locomotive or ocean-liner hull cutting forward. The whole system leans into implied forward motion rather than static ornament — buttons translate 3px on hover as if gliding, echoing the Chrysler Airflow's wind-tunnel-shaped bodywork.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Aerodynamic curves and horizontal speed lines
- Rounded corners, nautical/machine forms
- Silver, cream, chrome accents
- Sleek, futuristic-for-its-time

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/streamline-moderne.css`.)

```css
/* Streamline Moderne — design tokens (generated from style_catalog.json) */
/* 1930s | Late Art Deco offshoot, US industrial design. */
:root {
  /* color */
  --color-bg: #f2efe9;
  --color-surface: #ffffff;
  --color-surface-strong: #e6e2d8;
  --color-border: #b9c1c6;
  --color-text: #1c2226;
  --color-text-muted: #52605f;
  --color-primary: #16414d;
  --color-accent: #c9a34b;
  --color-chrome: #9aa7ac;
  /* radius */
  --radius-sm: 10px;
  --radius-md: 20px;
  --radius-lg: 40px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 2px 5px rgba(28,34,38,0.14);
  --shadow-md: 0 6px 16px rgba(28,34,38,0.16);
  --shadow-lg: 0 16px 36px rgba(28,34,38,0.2);
  /* font */
  --font-sans: 'Century Gothic', 'Poppins', system-ui, sans-serif;
  --font-display: 'Broadway', 'Bebas Neue', 'Poppins', system-ui, sans-serif;
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
  --ease-standard: cubic-bezier(0.16, 1, 0.3, 1);
  /* extra (signature gradients, composite borders, filters) */
  --speed-lines: repeating-linear-gradient(180deg, var(--color-chrome) 0px, var(--color-chrome) 2px, transparent 2px, transparent 7px);
  --chrome-band: linear-gradient(180deg, #fdfdfd, var(--color-chrome) 50%, #7c898d);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Streamline Moderne — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f2efe9",
        "surface": "#ffffff",
        "surface-strong": "#e6e2d8",
        "border": "#b9c1c6",
        "text": "#1c2226",
        "text-muted": "#52605f",
        "primary": "#16414d",
        "accent": "#c9a34b",
        "chrome": "#9aa7ac",
      },
      borderRadius: {
        "sm": "10px",
        "md": "20px",
        "lg": "40px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 5px rgba(28,34,38,0.14)",
        "md": "0 6px 16px rgba(28,34,38,0.16)",
        "lg": "0 16px 36px rgba(28,34,38,0.2)",
      },
      fontFamily: {
        "sans": ["'Century Gothic'", "'Poppins'", "system-ui", "sans-serif"],
        "display": ["'Broadway'", "'Bebas Neue'", "'Poppins'", "system-ui", "sans-serif"],
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
        "standard": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --speed-lines: repeating-linear-gradient(180deg, var(--color-chrome) 0px, var(--color-chrome) 2px, transparent 2px, transparent 7px);
//   --chrome-band: linear-gradient(180deg, #fdfdfd, var(--color-chrome) 50%, #7c898d);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--radius-pill` fully-rounded ends, `--color-surface` fill, 1px `--color-border`; hover translates 3px sideways like it's gliding forward, `--shadow-sm` → `--shadow-md`; primary fills `--color-primary` deep teal. |
| **Input** | `--radius-md` rounded-end field, `--color-surface` fill, 1px `--color-border`; focus swaps border to `--color-primary` with a soft ring. |
| **Card** | The hero surface: `--radius-lg` aerodynamic corner, a `--speed-lines` band down the left edge, `--shadow-md`, 1px `--color-border`. |
| **Nav** | `--radius-pill` bar with a `--color-primary` left "prow" edge and a `--speed-lines` band bleeding from it, like the nose of a streamlined locomotive. |
| **Modal** | Largest `--radius-lg` curve, `--chrome-band` top accent strip, `--shadow-lg`, over a cool graphite scrim. |
| **Table** | Flatten to `--radius-sm` rows — speed lines and full aerodynamic curves belong on chrome, not data grids; keep only a `--chrome-band` header rule. |
| **Tooltip** | Small `--radius-pill` chip, `--color-surface` fill, thin `--color-border` — no speed lines at this size. |
| **Badge** | `--color-accent` (brass) fill, `--radius-pill`, evoking a chrome nameplate. |
| **Toggle** | Pill track in `--color-surface-strong`; on-state fills `--chrome-band` gradient, knob is a plain chrome-white circle sliding along the track like a train door. |
| **Loading** | The `--speed-lines` pattern animated scrolling horizontally across a pill bar — literal motion lines standing in for a progress indicator. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- `--color-chrome` and `--chrome-band` are mid-gray metallics that can fail contrast against both `--color-bg` and `--color-surface` — never use them for text; reserve them for decorative bands and verify any adjacent text with `contrast_check.py`.
- The condensed, all-caps display font (`--font-display`, Broadway/Bebas Neue) is a legibility risk below large headline sizes — keep body and form copy in `--font-sans` at `--text-base` or larger.
- Reduce or remove the hover/hover-translate "gliding" motion and the animated `--speed-lines` loading pattern under `prefers-reduced-motion: reduce`.
- Keep the `--speed-lines` band confined to a fixed-width edge strip, never running behind body text, so the repeating stripe pattern doesn't interfere with reading.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Repeat the fully-rounded aerodynamic-end radius on every primary surface.
- ✅ Keep the speed-line band as a fixed decorative edge strip, not a full-surface texture.
- ✅ Use chrome/brass accents sparingly against the cream/white base for a metallic highlight, not the dominant palette.

## Don't

- ❌ Use chrome gray for any text.
- ❌ Set body copy in the condensed all-caps display font.
- ❌ Sharpen corners to 0px anywhere — the aerodynamic curve is the entire identity.

## Don't confuse this with…

*Commonly confused neighbors:* art-deco, googie.

vs art-deco: Art Deco is vertical, geometric, and ornamented with zigzags and sunbursts (skyscraper imagery); Streamline Moderne strips that ornament away in favor of smooth horizontal curves and speed lines borrowed from aerodynamics and naval design. vs googie: Googie is the 1950s-60s roadside-diner descendant with boomerangs, starbursts, and jetsons-era exaggeration; Streamline Moderne is its more restrained, industrial-design-grade 1930s predecessor.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
