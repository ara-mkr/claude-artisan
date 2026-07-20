# Raw / Default HTML — Implementation Spec

*Aliases:* unstyled web, default styles, HTML brutalism
*Slug:* `raw-html` · *Category:* brutalist · *Era:* 1991–present (revival 2016+)

**Origin.** The literal default browser stylesheet; revived as an aesthetic statement.

**Reference example.** motherfuckingwebsite.com; bettermotherfuckingwebsite.com.

## Signature move(s)

Ship the browser's user-agent stylesheet, on purpose: Times New Roman body copy, unstyled blue/purple links (`--color-primary`/`--color-visited`), no border-radius, no shadow, single-column flow. Any "component" that exists is built from literal form-control bevels (`--extra-bevel-outset/inset`) rather than custom CSS — restraint itself is the signature move.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Times New Roman, default blue/purple links
- No CSS or minimal CSS
- Single-column, top-to-bottom flow
- Radical performance and honesty

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/raw-html.css`.)

```css
/* Raw / Default HTML — design tokens (generated from style_catalog.json) */
/* 1991–present (revival 2016+) | The literal default browser stylesheet; revived as an aesthetic statement. */
:root {
  /* color */
  --color-bg: #ffffff;
  --color-surface: #ffffff;
  --color-surface-strong: #eeeeee;
  --color-border: #000000;
  --color-text: #000000;
  --color-text-muted: #444444;
  --color-primary: #0000ee;
  --color-accent: #551a8b;
  --color-visited: #551a8b;
  /* radius */
  --radius-sm: 0px;
  --radius-md: 0px;
  --radius-lg: 0px;
  --radius-pill: 0px;
  /* shadow */
  --shadow-sm: none;
  --shadow-md: none;
  --shadow-lg: none;
  /* font */
  --font-sans: Arial, Helvetica, sans-serif;
  --font-display: 'Times New Roman', Times, serif;
  --font-mono: 'Courier New', monospace;
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
  --ease-standard: linear;
  /* extra */
  --bevel-outset: 2px outset #c0c0c0;
  --bevel-inset: 2px inset #c0c0c0;
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Raw / Default HTML — Tailwind theme fragment (generated).
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#ffffff",
        "surface": "#ffffff",
        "surface-strong": "#eeeeee",
        "border": "#000000",
        "text": "#000000",
        "text-muted": "#444444",
        "primary": "#0000ee",
        "accent": "#551a8b",
        "visited": "#551a8b",
      },
      borderRadius: {
        "sm": "0px", "md": "0px", "lg": "0px", "pill": "0px",
      },
      boxShadow: {
        "sm": "none", "md": "none", "lg": "none",
      },
      fontFamily: {
        "sans": ["Arial", "Helvetica", "sans-serif"],
        "display": ["'Times New Roman'", "Times", "serif"],
        "mono": ["'Courier New'", "monospace"],
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
        "standard": "linear",
      },
    },
  },
};

// Classic UA form-control bevels are CSS-only:
//   --bevel-outset: 2px outset #c0c0c0;
//   --bevel-inset: 2px inset #c0c0c0;
```

## Component rules (the 10 primitives)

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Literal `<button>` element, unstyled: `--bevel-outset` border, `--color-surface-strong` fill, system font; `:active` swaps to `--bevel-inset`. No custom CSS beyond browser default. |
| **Input** | Default `<input>` with its native 2px sunken border, no radius, system font size. |
| **Card** | A plain `<div>` or `<fieldset>` with a 1px `--color-border` rule and `--space-4` padding — no shadow, no elevation. |
| **Nav** | An unstyled `<ul>` of underlined `--color-primary` links, vertically stacked or space-separated, no active-state pill. |
| **Modal** | Native `<dialog>` element with its default browser chrome and backdrop — do not restyle it. |
| **Table** | Default `<table border="1">` rendering: visible grid lines, no zebra striping, no custom padding beyond UA default. |
| **Tooltip** | The native `title` attribute — no custom tooltip component at all. |
| **Badge** | Plain bracketed text, e.g. `[NEW]`, in `--color-accent`, not a styled pill. |
| **Toggle** | Native `<input type="checkbox">`, completely unstyled. |
| **Loading** | The word "Loading…" as plain text, or the browser's native loading indicator — no custom spinner. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility) — note that for this style these states should mostly be the browser's own defaults, not hand-authored ones.

## Accessibility corrections (required)

- This style is accidentally one of the most accessible by default (native controls, native focus rings, native semantics) — the main risk is a builder "improving" it and breaking that; explicitly forbid removing `outline` or native focus styles.
- Verify default link blue (`--color-primary` #0000ee) on `--color-bg` white still passes contrast in whatever browser/OS default is targeted — most do, but confirm with `contrast_check.py` if the palette is ever adjusted.
- Keep line-length reasonable (~70–80 characters) via a max-width wrapper — raw HTML with no CSS at all can stretch to full viewport width on wide screens, hurting readability.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Let native browser defaults do the work — resist adding custom component CSS.
- ✅ Use semantic HTML elements (`<button>`, `<dialog>`, `<table border>`) exactly as designed.
- ✅ Cap body text measure with a simple max-width container for readability.

## Don't

- ❌ Add border-radius, box-shadow, or custom fonts anywhere — that breaks the premise entirely.
- ❌ Restyle native controls (checkboxes, buttons, `<dialog>`) with custom CSS.
- ❌ Remove or override the browser's native focus outline.

## Don't confuse this with…

*Commonly confused neighbors:* brutalism, minimalism.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
