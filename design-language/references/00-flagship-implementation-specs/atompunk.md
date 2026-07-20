# Atompunk — Implementation Spec

*Aliases:* atomic age, raygun gothic-adjacent  
*Slug:* `atompunk` · *Category:* retrofuturism · *Era:* 1998–present

**Origin.** Retrofuturism of the atomic age (1945–1965).

**Reference example.** Fallout series UI; The Jetsons; mid-century ads.

## Signature move(s)

Boomerang-cornered forms: the `--radius-md`/`--radius-lg` values are asymmetric compound radii (`40px 4px 40px 4px`, `60px 8px 60px 8px`) that read as a Googie boomerang, not a plain rounded rect. Pair that shape with a warm cream background, teal/orange contrast pairing, and a `--chrome-stripe` gradient band standing in for polished chrome trim on any "hero" surface.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Googie curves, boomerangs, starbursts
- Space-race optimism, atoms and rockets
- Teal, orange, chrome, formica
- Populuxe consumer futurism

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/atompunk.css`.)

```css
/* Atompunk — design tokens (generated from style_catalog.json) */
/* 1998–present | Retrofuturism of the atomic age (1945–1965). */
:root {
  /* color */
  --color-bg: #f7ecd2;
  --color-surface: #ffffff;
  --color-surface-strong: #fdd9a5;
  --color-border: #1c3f4a;
  --color-text: #14262b;
  --color-text-muted: #3d5a61;
  --color-primary: #e0692b;
  --color-accent: #1c8c8c;
  --color-chrome: #9fb4b8;
  /* radius */
  --radius-sm: 4px;
  --radius-md: 40px 4px 40px 4px;
  --radius-lg: 60px 8px 60px 8px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 2px 6px rgba(20,38,43,0.2);
  --shadow-md: 0 6px 16px rgba(20,38,43,0.24);
  --shadow-lg: 0 14px 30px rgba(20,38,43,0.28);
  /* font */
  --font-sans: 'Century Gothic', 'Futura', 'Poppins', sans-serif;
  --font-display: 'Trend Sans', 'Bank Gothic', 'Century Gothic', sans-serif;
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
  --ease-standard: cubic-bezier(0.34, 1.4, 0.64, 1);
  /* extra (signature gradients, composite borders, filters) */
  --chrome-stripe: linear-gradient(180deg, #ffffff 0%, var(--color-chrome) 50%, #ffffff 100%);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Atompunk — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f7ecd2",
        "surface": "#ffffff",
        "surface-strong": "#fdd9a5",
        "border": "#1c3f4a",
        "text": "#14262b",
        "text-muted": "#3d5a61",
        "primary": "#e0692b",
        "accent": "#1c8c8c",
        "chrome": "#9fb4b8",
      },
      borderRadius: {
        "sm": "4px",
        "md": "40px 4px 40px 4px",
        "lg": "60px 8px 60px 8px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 6px rgba(20,38,43,0.2)",
        "md": "0 6px 16px rgba(20,38,43,0.24)",
        "lg": "0 14px 30px rgba(20,38,43,0.28)",
      },
      fontFamily: {
        "sans": ["'Century Gothic'", "'Futura'", "'Poppins'", "sans-serif"],
        "display": ["'Trend Sans'", "'Bank Gothic'", "'Century Gothic'", "sans-serif"],
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
        "standard": "cubic-bezier(0.34, 1.4, 0.64, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --chrome-stripe: linear-gradient(180deg, #ffffff 0%, var(--color-chrome) 50%, #ffffff 100%);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Boomerang `--radius-md`, `--color-primary` fill with `--chrome-stripe` top edge, bouncy `--ease-standard` overshoot on hover/press. |
| **Input** | White `--color-surface` field, thick `--color-border` outline, `--radius-sm` corners (inputs stay simple so text stays legible); focus ring in `--color-accent`. |
| **Card** | Formica-white surface, boomerang `--radius-lg`, `--chrome-stripe` header band, `--shadow-md`. |
| **Nav** | Cream bar with teal underline sweep; logo/wordmark in `--font-display` uppercase. |
| **Modal** | Boomerang-cornered panel on a starburst-patterned scrim, `--shadow-lg`. |
| **Table** | Clean formica-white rows, teal header with chrome-stripe rule beneath it. |
| **Tooltip** | Small boomerang chip, `--color-accent` fill, white text. |
| **Badge** | Pill or boomerang tag in `--color-primary`/`--color-accent`, bold uppercase. |
| **Toggle** | Chrome-stripe track, orange knob that overshoots slightly on toggle (bouncy ease). |
| **Loading** | Spinning atom-orbit glyph (three ellipses) in `--color-accent`, not a plain ring. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Verify `--color-primary` (orange) and `--color-accent` (teal) text/background pairs individually — mid-saturation atomic-age colors can sit right at the AA boundary on the cream `--color-bg`.
- The asymmetric boomerang radius can clip focus-ring corners oddly — use `outline` with `outline-offset` rather than relying on `border-radius` to contain the ring.
- The bouncy `--ease-standard` overshoot must respect `prefers-reduced-motion` — swap to a linear, no-overshoot transition when set.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Use the boomerang compound radius on hero surfaces (cards, buttons, hero panels).
- ✅ Keep the base palette cream/white with teal+orange as the only saturated accents.
- ✅ Let interactive elements overshoot slightly on entrance — it reads as "populuxe" bounce.

## Don't

- ❌ Round every corner uniformly — the asymmetric boomerang shape is the signature, not a generic rounded rect.
- ❌ Introduce neon or dystopian dark palettes — atompunk is bright, optimistic, consumer-facing.
- ❌ Skip the chrome-stripe accent — flat color fields read as generic mid-century, not Googie/atomic.

## Don't confuse this with…

*Commonly confused neighbors:* googie, raygun-gothic, space-age.

vs googie: googie is the architectural source style (upswept roofs, neon signage) atompunk borrows from; atompunk is broader pop-consumer atomic-age media styling. vs raygun-gothic: raygun-gothic skews toward pulp sci-fi rocket/raygun imagery on dark space-blue; atompunk stays light, cream, and domestic/consumer. vs space-age: space-age (1957–72) is later, whiter, more minimal/pod-like; atompunk is earlier, warmer, and more Googie-curved.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
