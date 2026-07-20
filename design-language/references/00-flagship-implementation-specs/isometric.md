# Isometric — Implementation Spec

*Aliases:* iso illustration, 2.5D  
*Slug:* `isometric` · *Category:* texture · *Era:* 2015–present

**Origin.** Flat 2.5D illustration trend.

**Reference example.** Tech explainer illustrations; game art.

## Signature move(s)

Every "raised" surface gets a hard-offset, un-blurred shadow in `--color-iso-shadow-a` — `6px 6px 0` — instead of a soft blur, simulating the flat side-face of an axonometric block sitting at a fixed 30° projection. A secondary lighter tone (`--color-iso-shadow-b`) and a diagonal `--iso-facet` gradient stand in for the "top face" catching light versus the "side face" in shade, so even flat 2D cards read as extruded 3D volumes without an actual 3D transform.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Parallel projection, no perspective vanishing
- 30° axonometric grids
- Cutaway rooms/cities, tiny detailed scenes
- Clean vector or soft 3D

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/isometric.css`.)

```css
/* Isometric — design tokens (generated from style_catalog.json) */
/* 2015–present | Flat 2.5D illustration trend. */
:root {
  /* color */
  --color-bg: #eef1fb;
  --color-surface: #ffffff;
  --color-surface-strong: #e2e7f9;
  --color-border: #c7d0f0;
  --color-text: #1c2340;
  --color-text-muted: #5b6486;
  --color-primary: #6d5ef5;
  --color-accent: #14b8a6;
  --color-iso-shadow-a: #4c46c9;
  --color-iso-shadow-b: #8f89ff;
  /* radius */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 3px 0 var(--color-iso-shadow-a);
  --shadow-md: 6px 6px 0 var(--color-iso-shadow-a);
  --shadow-lg: 10px 10px 0 var(--color-iso-shadow-a);
  /* font */
  --font-sans: 'Poppins', 'Inter', system-ui, sans-serif;
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
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
  /* extra (signature gradients, composite borders, filters) */
  --iso-facet: linear-gradient(155deg, #ffffff 0%, var(--color-surface-strong) 100%);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Isometric — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#eef1fb",
        "surface": "#ffffff",
        "surface-strong": "#e2e7f9",
        "border": "#c7d0f0",
        "text": "#1c2340",
        "text-muted": "#5b6486",
        "primary": "#6d5ef5",
        "accent": "#14b8a6",
        "iso-shadow-a": "#4c46c9",
        "iso-shadow-b": "#8f89ff",
      },
      borderRadius: {
        "sm": "6px",
        "md": "10px",
        "lg": "16px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 3px 0 var(--color-iso-shadow-a)",
        "md": "6px 6px 0 var(--color-iso-shadow-a)",
        "lg": "10px 10px 0 var(--color-iso-shadow-a)",
      },
      fontFamily: {
        "sans": ["'Poppins'", "'Inter'", "system-ui", "sans-serif"],
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
        "standard": "cubic-bezier(0.2, 0, 0, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --iso-facet: linear-gradient(155deg, #ffffff 0%, var(--color-surface-strong) 100%);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--iso-facet` gradient fill, `--shadow-sm` hard offset in `--color-iso-shadow-a` standing in for the "side face"; hover lifts the shadow to `--shadow-md`, active collapses it to 0 (block pressed flush). |
| **Input** | Flat `--color-surface`, thin `--color-border`; focus adds `--shadow-sm` in `--color-accent` instead of the default shadow tone, marking it distinct from static blocks. |
| **Card** | `--iso-facet` gradient body, `--shadow-md` offset, `--radius-lg` — reads as one axonometric block resting on the page. |
| **Nav** | Flat bar, no shadow (nav is "the ground plane," not a raised block); active item gets a small `--shadow-sm` chip to pop it forward. |
| **Modal** | Larger block with `--shadow-lg`, floating clearly above a dimmed ground-plane scrim. |
| **Table** | Flat rows on the ground plane; only the header row is raised with `--shadow-sm` to mark it as a fixed block. |
| **Tooltip** | Tiny raised chip, `--shadow-sm`, `--iso-facet` fill. |
| **Badge** | Small pill with `--shadow-sm` in `--color-iso-shadow-b` for a lighter, secondary-object feel. |
| **Toggle** | Track is a flat groove (no shadow); knob is a raised block with `--shadow-sm` that slides and keeps its offset direction constant (never rotates with position). |
| **Loading** | A stack of small iso "blocks" (squares with the facet gradient + hard shadow) pulsing in sequence, evoking blocks being placed. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Hard-offset shadows can be mistaken for borders by low-vision users — keep a real `--color-border` outline in addition to the shadow so shape boundaries don't rely on shadow color alone.
- The active/pressed state (shadow flush to 0) removes the only depth cue for "clicked" — pair it with a fill or icon change so state isn't shadow-only.
- Check `--color-iso-shadow-a` (`#4c46c9`) text-on-shadow combinations with `contrast_check.py` before using the shadow color as a text or icon color.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Keep the shadow offset direction (down-right, 30°) identical on every block.
- ✅ Reserve the raised-shadow treatment for genuinely interactive/elevated elements.
- ✅ Use `--iso-facet` to distinguish "top" (light) vs "side" (shadow) faces consistently.

## Don't

- ❌ Blur any of the hard offset shadows — blur breaks the axonometric-block illusion.
- ❌ Mix true perspective (vanishing-point) illustration into an isometric layout.
- ❌ Rotate the shadow angle per element — one global light source only.

## Don't confuse this with…

*Commonly confused neighbors:* low-poly, soft-3d.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
