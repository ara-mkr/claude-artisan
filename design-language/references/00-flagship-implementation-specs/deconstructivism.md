# Deconstructivism (Graphic) — Implementation Spec

*Aliases:* deconstruction, fragmented type
*Slug:* `deconstructivism` · *Category:* brutalist · *Era:* 1980s–1990s

**Origin.** Cranbrook Academy; influenced by Derrida; Katherine McCoy, Edward Fella.

**Reference example.** Cranbrook design work; Emigre magazine.

## Signature move(s)

Fragment type and layout across multiple overlapping, independently-rotated layers (`--extra-tilt-a/b`, `--extra-collide-offset`) so the reading path becomes ambiguous by design; hard offset shadows (`--shadow-sm/md/lg`) give each fragment a distinct depth plane, implying elements were exploded apart from a single original grid.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Fragmented, layered, exploded typography
- Rejection of the grid; ambiguous reading paths
- Overlap, rotation, and collision of elements
- Theory-driven, questions legibility

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/deconstructivism.css`.)

```css
/* Deconstructivism (Graphic) — design tokens (generated from style_catalog.json) */
/* 1980s–1990s | Cranbrook Academy; influenced by Derrida; Katherine McCoy, Edward Fella. */
:root {
  /* color */
  --color-bg: #f0efe9;
  --color-surface: #ffffff;
  --color-surface-strong: #e6e3d8;
  --color-border: #16151a;
  --color-text: #16151a;
  --color-text-muted: #4a4854;
  --color-primary: #ff2d1f;
  --color-accent: #1c3fff;
  /* radius */
  --radius-sm: 0px;
  --radius-md: 0px;
  --radius-lg: 0px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 3px 3px 0 var(--color-border);
  --shadow-md: 6px 6px 0 var(--color-border);
  --shadow-lg: 10px 10px 0 var(--color-border);
  /* font */
  --font-sans: 'Franklin Gothic', 'Helvetica Neue', system-ui, sans-serif;
  --font-display: 'Univers', 'Franklin Gothic', system-ui, sans-serif;
  --font-mono: 'OCR A Std', ui-monospace, monospace;
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
  /* extra */
  --tilt-a: -1.4deg;
  --tilt-b: 1.1deg;
  --collide-offset: -8px;
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Deconstructivism (Graphic) — Tailwind theme fragment (generated).
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f0efe9",
        "surface": "#ffffff",
        "surface-strong": "#e6e3d8",
        "border": "#16151a",
        "text": "#16151a",
        "text-muted": "#4a4854",
        "primary": "#ff2d1f",
        "accent": "#1c3fff",
      },
      borderRadius: {
        "sm": "0px", "md": "0px", "lg": "0px", "pill": "999px",
      },
      boxShadow: {
        "sm": "3px 3px 0 #16151a",
        "md": "6px 6px 0 #16151a",
        "lg": "10px 10px 0 #16151a",
      },
      fontFamily: {
        "sans": ["'Franklin Gothic'", "'Helvetica Neue'", "system-ui", "sans-serif"],
        "display": ["'Univers'", "'Franklin Gothic'", "system-ui", "sans-serif"],
        "mono": ["'OCR A Std'", "ui-monospace", "monospace"],
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
        "standard": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
};

// Fragment rotation/offset tokens are CSS-only:
//   --tilt-a: -1.4deg;  --tilt-b: 1.1deg;  --collide-offset: -8px;
```

## Component rules (the 10 primitives)

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Rectangular, `--color-primary` fill, `--shadow-sm`, label rotated `--tilt-a`; a second ghost duplicate of the label offset by `--collide-offset` behind it implies "exploded" type. |
| **Input** | Plain rectangle, `--color-surface`, thick `--color-border`; label sits overlapping the top edge of the field rather than above it, rotated `--tilt-b`. |
| **Card** | Two or three overlapping panels (`--color-surface`/`--color-surface-strong`) at slightly different `--tilt-a/b` angles, each with its own `--shadow-md`, colliding at the edges. |
| **Nav** | Links set at staggered baselines and independent rotation, deliberately non-aligned instead of a tidy horizontal row. |
| **Modal** | Panel offset from center by `--collide-offset`, `--shadow-lg`, with a fragment of its own title bleeding outside the panel edge. |
| **Table** | Column headers intentionally misaligned with their data columns by a few pixels (`--collide-offset`) as a controlled "error." |
| **Tooltip** | A fragment chip that appears to have been torn from the parent element, offset and rotated `--tilt-a`. |
| **Badge** | Small rectangle overlapping its parent element's corner rather than sitting fully inside or outside it. |
| **Toggle** | Track and knob rendered as two independently-rotated rectangles that only align when "on." |
| **Loading** | Fragmented type/shapes assembling and disassembling (via `--tilt-a/b` and `--collide-offset` animating toward 0) as the loading motion. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

- Fragmentation and rotation must never touch the actual DOM reading order — keep markup semantic and linear even when the visual layer is exploded, so assistive tech gets a normal document.
- Overlapping/rotated text fragments risk illegibility — reserve them for display headlines only; body copy, labels, and error messages must render fully upright and unbroken.
- Ghost/duplicate offset copies of text (`--collide-offset`) must be `aria-hidden` decorative duplicates, never the only copy of real content.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Keep the underlying document structure and reading order fully linear and accessible.
- ✅ Vary tilt/offset per element so the "exploded from one grid" illusion feels intentional, not random.
- ✅ Use ghost/ ­duplicate type sparingly, and mark it `aria-hidden`.

## Don't

- ❌ Fragment or rotate the only copy of essential content (labels, errors, CTAs).
- ❌ Let overlapping fragments cover interactive hit targets — clickable regions must stay usable.
- ❌ Apply this style to data-dense screens where reading order actually matters moment to moment.

## Don't confuse this with…

*Commonly confused neighbors:* swiss-punk, grunge.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
