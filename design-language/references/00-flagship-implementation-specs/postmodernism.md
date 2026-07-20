# Postmodern Graphic Design — Implementation Spec

*Aliases:* postmodern design  
*Slug:* `postmodernism` · *Category:* historical · *Era:* 1970s–1990s

**Origin.** Reaction to Modernism (Wolfgang Weingart, April Greiman, David Carson).

**Reference example.** Emigre magazine; MTV identity; Cranbrook work.

## Signature move(s)

A layered "collage" offset shadow — a flat solid-color block sitting behind the surface, not a soft blur — combined with a slight rotation, so every element looks physically stacked and slightly askew, like paste-up boards from a Weingart or Carson layout. The shadow color deliberately clashes with the surface (pink under white, blue under pink) rather than matching a neutral gray, and the rotation direction alternates so nothing lines up on a tidy grid.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Rejects rigid grid and objectivity
- Layering, collage, historical pastiche, irony
- Mixed type, texture, decoration
- Expressive and subjective

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/postmodernism.css`.)

```css
/* Postmodern Graphic Design — design tokens (generated from style_catalog.json) */
/* 1970s–1990s | Reaction to Modernism (Wolfgang Weingart, April Greiman, David Carson). */
:root {
  /* color: clashing, ironic, layered */
  --color-bg: #efe9df;
  --color-surface: #ffffff;
  --color-surface-strong: #fff2b8;
  --color-border: #17171a;
  --color-text: #17171a;
  --color-text-muted: #514f52;
  --color-primary: #e0247a;
  --color-accent: #2b6df0;
  --color-clash: #ffce00;
  /* radius: irregular, intentionally inconsistent */
  --radius-sm: 0px;
  --radius-md: 2px;
  --radius-lg: 999px 4px 999px 4px;
  --radius-pill: 999px;
  /* shadow: layered collage offset shadow */
  --shadow-sm: 3px 3px 0 var(--color-primary);
  --shadow-md: 6px 6px 0 var(--color-accent);
  --shadow-lg: 9px 9px 0 var(--color-clash);
  /* font: mixed, clashing type families */
  --font-sans: 'Helvetica Neue', Arial, sans-serif;
  --font-display: Georgia, 'Times New Roman', serif;
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
  --ease-standard: cubic-bezier(0.68, -0.55, 0.27, 1.55);
  /* extra: layered rotated collage border, mixed-type headline treatment */
  --collage-tilt: -1.2deg;
  --overprint-texture: repeating-linear-gradient(45deg, rgba(23,23,26,0.04) 0 2px, transparent 2px 6px);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Postmodern Graphic Design — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#efe9df",
        "surface": "#ffffff",
        "surface-strong": "#fff2b8",
        "border": "#17171a",
        "text": "#17171a",
        "text-muted": "#514f52",
        "primary": "#e0247a",
        "accent": "#2b6df0",
        "clash": "#ffce00",
      },
      borderRadius: {
        "sm": "0px",
        "md": "2px",
        "lg": "999px 4px 999px 4px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "3px 3px 0 var(--color-primary)",
        "md": "6px 6px 0 var(--color-accent)",
        "lg": "9px 9px 0 var(--color-clash)",
      },
      fontFamily: {
        "sans": ["'Helvetica Neue'", "Arial", "sans-serif"],
        "display": ["Georgia", "'Times New Roman'", "serif"],
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
        "standard": "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --collage-tilt: -1.2deg;
//   --overprint-texture: repeating-linear-gradient(45deg, rgba(23,23,26,0.04) 0 2px, transparent 2px 6px);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Set in `--font-display` (serif, ironically formal for a UI button), `--shadow-sm` solid-color offset shadow; hover rotates by `--collage-tilt` and slides toward the shadow color, active flattens it back to zero offset. |
| **Input** | Monospace type (`--font-mono`) with a hard border and `--shadow-sm`; focus swaps the shadow color to `--color-accent` at `--shadow-md` size — the collage "peels back" further on focus. |
| **Card** | Permanently rotated `-0.6deg`, `--shadow-md`, mixed type inside (serif headline over sans body) — the card should look like it was pasted down slightly crooked. |
| **Nav** | Flat bar, `--shadow-sm`, no rotation (the one steady anchor on the page so navigation stays usable) but mixed type in the logo vs. links. |
| **Modal** | Rotated panel with `--shadow-lg` in `--color-clash`, over the `--overprint-texture` diagonal hatch scrim rather than a flat dim — reinforces the collage/print feel even on the backdrop. |
| **Table** | Deliberately break the grid: alternate header cells in different type families, hard borders, no zebra striping — inconsistency is the point, but keep cell alignment functional. |
| **Tooltip** | Small chip with `--shadow-sm`, rotated a couple degrees, set in `--font-mono` like a typewritten annotation. |
| **Badge** | `--color-clash` fill, hard 2px border, tiny independent rotation per badge instance so a row of badges looks hand-scattered, not uniform. |
| **Toggle** | Track and knob both hard-bordered, no gradient; state change snaps with the bouncy `--ease-standard` overshoot instead of a smooth glide. |
| **Loading** | A stack of offset bars/blocks that shuffle and re-layer (collage shuffle) rather than a single smooth progress fill. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Mixed type families and rotation must never touch running body copy — keep paragraphs in `--font-sans` at 0deg rotation; reserve `--collage-tilt` and font-mixing for headlines, cards, and badges only.
- The bouncy overshoot easing (`--ease-standard`) should be disabled entirely under `prefers-reduced-motion: reduce` — replace with an instant or linear transition, since overshoot motion is one of the more nausea-inducing patterns for vestibular-sensitive users.
- Solid-color offset shadows (`--shadow-sm/md/lg`) don't dim contrast the way blurred shadows do, but verify the shadow color itself never touches text directly — it's a background decoration, not a text-contrast surface.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Mix at least two clashing type families (serif headline, mono body/label) deliberately, not accidentally.
- ✅ Use flat solid-color offset shadows everywhere instead of blurred neutral shadows.
- ✅ Rotate decorative surfaces (cards, badges) by small, varied amounts so nothing aligns too neatly.

## Don't

- ❌ Rotate or mix fonts inside body paragraphs — irony belongs in headlines and chrome, not reading text.
- ❌ Let the bouncy easing run under reduced-motion preference.
- ❌ Use a single "safe" neutral gray shadow — the clashing color is the whole point.

## Don't confuse this with…

*Commonly confused neighbors:* memphis-design, swiss-punk. vs Memphis: Memphis is a product/pattern language (squiggles, confetti, laminate) from Milan in the 1980s; postmodern graphic design is specifically print/typography-driven (Weingart, Carson) and layers real content rather than applying decorative pattern. vs swiss-punk: swiss-punk deliberately vandalizes the International Typographic Style's grid from within; postmodernism here is broader — it also embraces historical pastiche and irony, not just grid-breaking.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
