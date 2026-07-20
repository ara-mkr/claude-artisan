# Asymmetric / Broken Grid — Implementation Spec

*Aliases:* broken grid, offset layout
*Slug:* `asymmetric-layout` · *Category:* minimal-organic · *Era:* 2017–present

**Origin.** Reaction to templated symmetric layouts.

**Reference example.** Awwwards agency sites; fashion lookbooks.

## Signature move(s)

Elements deliberately break grid alignment: cards and images sit at `--tilt-1`/`--tilt-2` (small ±1–1.5° rotations) and overlap their neighbors by `--overlap` (-14px), stacked with hard `--shadow-md`/`--shadow-lg` offset shadows (flat 8px/14px black offsets, no blur) that read as printed collage layers rather than soft elevation. Zero border-radius everywhere except the pill toggle — corners stay sharp so the diagonal tension of the tilts is the only softness in the system.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Intentional off-grid, overlapping elements
- Dynamic tension and asymmetry
- Layered z-depth, diagonal flow
- Editorial, expressive

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/asymmetric-layout.css`.)

```css
/* Asymmetric / Broken Grid — design tokens (generated from style_catalog.json) */
/* 2017–present | Reaction to templated symmetric layouts. */
:root {
  /* color */
  --color-bg: #f5f4f0;
  --color-surface: #ffffff;
  --color-surface-strong: #101010;
  --color-border: #101010;
  --color-text: #101010;
  --color-text-muted: #55534c;
  --color-primary: #ff3d1a;
  --color-accent: #1a1aff;
  /* radius */
  --radius-sm: 0px;
  --radius-md: 0px;
  --radius-lg: 0px;
  --radius-pill: 999px;
  /* shadow (hard offset, no blur) */
  --shadow-sm: 4px 4px 0 rgba(16,16,16,0.9);
  --shadow-md: 8px 8px 0 rgba(16,16,16,0.9);
  --shadow-lg: 14px 14px 0 rgba(16,16,16,0.9);
  /* font */
  --font-sans: 'Neue Haas Grotesk', 'Helvetica Neue', Arial, sans-serif;
  --font-display: 'Neue Haas Grotesk', 'Helvetica Neue', Arial, sans-serif;
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
  --ease-standard: cubic-bezier(0.7, 0, 0.3, 1);
  /* extra (signature tilt + overlap for broken-grid layering) */
  --tilt-1: rotate(-1.4deg);
  --tilt-2: rotate(1.1deg);
  --overlap: -14px;
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Asymmetric / Broken Grid — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f5f4f0",
        "surface": "#ffffff",
        "surface-strong": "#101010",
        "border": "#101010",
        "text": "#101010",
        "text-muted": "#55534c",
        "primary": "#ff3d1a",
        "accent": "#1a1aff",
      },
      borderRadius: {
        "sm": "0px",
        "md": "0px",
        "lg": "0px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "4px 4px 0 rgba(16,16,16,0.9)",
        "md": "8px 8px 0 rgba(16,16,16,0.9)",
        "lg": "14px 14px 0 rgba(16,16,16,0.9)",
      },
      fontFamily: {
        "sans": ["'Neue Haas Grotesk'", "'Helvetica Neue'", "Arial", "sans-serif"],
        "display": ["'Neue Haas Grotesk'", "'Helvetica Neue'", "Arial", "sans-serif"],
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
        "standard": "cubic-bezier(0.7, 0, 0.3, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (rotation + negative overlap for the
// broken-grid stack). Add as custom properties or arbitrary values:
//   --tilt-1: rotate(-1.4deg);
//   --tilt-2: rotate(1.1deg);
//   --overlap: -14px;
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--radius-sm` (0px), `--shadow-sm` hard offset; hover shifts the button `translate(-2px,-2px)` and grows the shadow to `--shadow-md` — a "peel off the page" motion. |
| **Input** | `--radius-sm` (0px), thick 2px `--color-border`, no shadow at rest — flat grid citizen so the tilted elements around it read as the deviation. |
| **Card** | The hero: `transform: var(--tilt-1)` or `--tilt-2` alternating per card, `--shadow-lg`, negative `margin` of `--overlap` pulling it over its neighbor's edge. |
| **Nav** | Stays perfectly level (0° tilt) and grid-aligned — the nav is the "straight line" the rest of the layout breaks against. |
| **Modal** | `--radius-sm`, appears with a slight `--tilt-1` rotation and `--shadow-lg`, scrim in `--color-surface-strong` at high opacity. |
| **Table** | Kept grid-perfect (no tilt) since data must stay scannable — reserve asymmetry for marketing/editorial surfaces, not data tables. |
| **Tooltip** | Small `--radius-sm` chip, `--shadow-sm`, no tilt — needs to stay legible and fast to read. |
| **Badge** | `--radius-sm`, `transform: var(--tilt-2)`, `--color-accent` or `--color-primary` fill — a small stamp-like accent. |
| **Toggle** | Track `--radius-pill` (the sole rounded element in the system), knob square-cornered where mechanically possible. |
| **Loading** | A rotating hard-edged square (using `--ease-standard`) rather than a circular spinner — stays in the system's angular language. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Overlapping elements (`--overlap: -14px`) must preserve a minimum 44×44px non-overlapped hit area for every interactive control — verify nothing critical is hidden under a higher z-index neighbor.
- Rotated text (`--tilt-1`/`--tilt-2`) should be reserved for decorative/short labels; long-form body copy must stay unrotated for readability and to avoid disorienting low-vision users.
- `--color-primary` (#ff3d1a) and `--color-accent` (#1a1aff) are both saturated — verify both against `--color-bg` and `--color-surface` with the contrast tool before using them for text, not just fills.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Keep tilts small (1–1.5°) and inconsistent between neighbors — uniform tilt angles look accidental-templated, not intentional.
- ✅ Let the nav and body-copy blocks stay grid-perfect so the asymmetric elements have a stable baseline to break against.
- ✅ Use the hard offset shadows (`--shadow-sm/md/lg`) consistently — they're the system's stand-in for elevation, not decoration.

## Don't

- ❌ Round any corner beyond the toggle pill — sharp corners are what make the tilts read as deliberate composition, not sloppy CSS.
- ❌ Rotate data tables, forms, or long paragraphs — asymmetry belongs to hero/marketing layout, not functional UI.
- ❌ Let overlap hide focus rings or interactive affordances — z-index stacking must never break keyboard/focus visibility.

## Don't confuse this with…

*Commonly confused neighbors:* editorial-layout, swiss-punk.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
