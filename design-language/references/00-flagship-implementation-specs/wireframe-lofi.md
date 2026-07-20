# Lo-fi Wireframe — Implementation Spec

*Aliases:* wireframe aesthetic, sketch UI, lo-fi mockup
*Slug:* `wireframe-lofi` · *Category:* texture · *Era:* 2015–present

**Origin.** Wireframe/mockup look used as a finished style.

**Reference example.** Balsamiq mockups; 'in progress' brand sites.

## Signature move(s)

Every surface is a dashed-outline (`--dashed-outline: 1.5px dashed var(--color-border)`) grey box with zero shadow, and image/media slots render as literal `--color-placeholder` X'd rectangles. A slight sketch jitter (`--sketch-jitter: rotate(-0.2deg)`) on alternating elements keeps it from looking like a broken production site — it must look deliberately, charmingly unfinished.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Grey boxes, placeholder lines, X'd images
- Hand-drawn or Balsamiq sketch strokes
- Deliberately unfinished honesty
- Neutral, structural, playful

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/wireframe-lofi.css`.)

```css
/* Lo-fi Wireframe — design tokens (generated from style_catalog.json) */
/* 2015–present | Wireframe/mockup look used as a finished style. */
:root {
  /* color */
  --color-bg: #fafafa;
  --color-surface: #ffffff;
  --color-surface-strong: #f0f0f0;
  --color-border: #9a9a9a;
  --color-text: #333333;
  --color-text-muted: #7a7a7a;
  --color-primary: #6b6b6b;
  --color-accent: #ff5a36;
  --color-placeholder: #cfcfcf;
  /* radius */
  --radius-sm: 2px;
  --radius-md: 3px;
  --radius-lg: 4px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: none;
  --shadow-md: none;
  --shadow-lg: none;
  /* font */
  --font-sans: 'Helvetica Neue', Arial, sans-serif;
  --font-display: 'Helvetica Neue', Arial, sans-serif;
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
  --ease-standard: ease;
  /* extra */
  --dashed-outline: 1.5px dashed var(--color-border);
  --sketch-jitter: rotate(-0.2deg);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Lo-fi Wireframe — Tailwind theme fragment (generated).
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#fafafa",
        "surface": "#ffffff",
        "surface-strong": "#f0f0f0",
        "border": "#9a9a9a",
        "text": "#333333",
        "text-muted": "#7a7a7a",
        "primary": "#6b6b6b",
        "accent": "#ff5a36",
        "placeholder": "#cfcfcf",
      },
      borderRadius: {
        "sm": "2px",
        "md": "3px",
        "lg": "4px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "none",
        "md": "none",
        "lg": "none",
      },
      fontFamily: {
        "sans": ["'Helvetica Neue'", "Arial", "sans-serif"],
        "display": ["'Helvetica Neue'", "Arial", "sans-serif"],
        "mono": ["'Courier New'", "ui-monospace", "monospace"],
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
        "standard": "ease",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only:
//   --dashed-outline: 1.5px dashed var(--color-border);
//   --sketch-jitter: rotate(-0.2deg);
```

## Component rules (the 10 primitives)

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--dashed-outline` box, no fill (or `--color-surface-strong`), label like "[ Submit ]"; hover swaps border to solid `--color-accent`. |
| **Input** | `--dashed-outline` rectangle, placeholder text literally reading field purpose (e.g. "text input"); focus solidifies the outline. |
| **Card** | `--color-surface` box with `--dashed-outline`, a diagonal-X placeholder block standing in for any image, zero shadow. |
| **Nav** | Grey `--color-surface-strong` bar of dashed boxes labelled "Home / About / Contact" — literal wireframe labels, not icons. |
| **Modal** | `--dashed-outline` panel centered over a flat grey scrim, corner marked "[X close]" as text, not an icon. |
| **Table** | Dashed row dividers, cells showing "Row 1 / Col A" style placeholder text where real content would live. |
| **Tooltip** | Small dashed box with a hand-drawn-style pointer line to its target. |
| **Badge** | Dashed-outline chip with plain text label, no color fill except the occasional `--color-accent` "TODO" marker. |
| **Toggle** | Two dashed boxes side by side ("Off [ ] / On [x]") rather than a rendered switch — leans into the sketch metaphor. |
| **Loading** | A dashed box cycling through "Loading... / Loading.. / Loading." text, or a simple striped placeholder bar. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

- Dashed borders alone are a weak focus signal — add a solid `--color-accent` outline plus background shift on `:focus-visible` so keyboard nav is unambiguous.
- `--color-text-muted` (#7a7a7a) on `--color-bg` (#fafafa) is borderline for small text; check with `contrast_check.py` and darken if needed for body copy.
- The "unfinished" aesthetic must not be used as an excuse to skip real alt text or ARIA labels on placeholder/X'd image blocks — label them as if they were finished.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Use literal text labels for placeholder content ("[image]", "Row 1") — the honesty is the joke.
- ✅ Keep the palette to greys plus one `--color-accent` flag color for calls-to-action or annotations.
- ✅ Apply `--sketch-jitter` sparingly, only on a few elements, to suggest hand-sketching without looking broken.

## Don't

- ❌ Don't add real shadows or gradients — `--shadow-*` tokens are intentionally `none`.
- ❌ Don't over-polish icons or imagery; anything that looks "finished" breaks the wireframe conceit.
- ❌ Don't apply the sketch jitter to every element — it should read as occasional hand-drawn imperfection, not a shaky page.

## Don't confuse this with…

*Commonly confused neighbors:* hand-drawn, blueprint, brutalism.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
