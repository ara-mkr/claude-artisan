# Brutalist Web Design — Implementation Spec

*Aliases:* web brutalism, raw web  
*Slug:* `brutalism` · *Category:* brutalist · *Era:* 2014–present

**Origin.** Named after architectural Brutalism (béton brut); web movement popularized via brutalistwebsites.com (Pascal Deville).

**Reference example.** brutalistwebsites.com; Bloomberg Businessweek features; Craigslist ethos.

## Signature move(s)

Raw, near-default HTML honesty: system/serif or monospace fonts, hard 2px black borders, zero rounding, default-blue underlined links, visible structure. Utilitarian, high-contrast, undesigned-looking.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Raw, unstyled or near-default HTML aesthetics
- System fonts, default blue links, visible structure
- High contrast, monospace, hard edges, no rounding
- Deliberately 'undesigned', utilitarian honesty

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/brutalism.css`.)

```css
/* Brutalist Web Design — design tokens (generated from style_catalog.json) */
/* 2014–present | Named after architectural Brutalism (béton brut); web movement popularized via brutalistwebsites.com (Pascal Deville). */
:root {
  /* color */
  --color-bg: #ffffff;
  --color-surface: #ffffff;
  --color-surface-2: #f0f0f0;
  --color-text: #000000;
  --color-text-muted: #333333;
  --color-primary: #0000ff;
  --color-accent: #ff0000;
  --color-visited: #800080;
  /* radius */
  --radius-sm: 0px;
  --radius-md: 0px;
  --radius-lg: 0px;
  --radius-pill: 0px;
  /* shadow */
  --shadow-none: none;
  --shadow-hard: 4px 4px 0 #000000;
  /* font */
  --font-sans: 'Times New Roman', Times, serif;
  --font-display: 'Courier New', 'Times New Roman', serif;
  --font-mono: 'Courier New', monospace;
  /* text */
  --text-xs: 0.75rem;
  --text-sm: 0.9rem;
  --text-base: 1rem;
  --text-lg: 1.25rem;
  --text-xl: 1.6rem;
  --text-2xl: 2.2rem;
  --text-3xl: 3rem;
  --text-4xl: 4.5rem;
  --text-5xl: 6rem;
  /* space */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  /* ease */
  --ease-standard: linear;
  /* extra (signature gradients, composite borders, filters) */
  --link-decoration: underline;
  --border: 2px solid #000000;
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Brutalist Web Design — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#ffffff",
        "surface": "#ffffff",
        "surface-2": "#f0f0f0",
        "text": "#000000",
        "text-muted": "#333333",
        "primary": "#0000ff",
        "accent": "#ff0000",
        "visited": "#800080",
      },
      borderRadius: {
        "sm": "0px",
        "md": "0px",
        "lg": "0px",
        "pill": "0px",
      },
      boxShadow: {
        "none": "none",
        "hard": "4px 4px 0 #000000",
      },
      fontFamily: {
        "sans": ["'Times New Roman'", "Times", "serif"],
        "display": ["'Courier New'", "'Times New Roman'", "serif"],
        "mono": ["'Courier New'", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem",
        "sm": "0.9rem",
        "base": "1rem",
        "lg": "1.25rem",
        "xl": "1.6rem",
        "2xl": "2.2rem",
        "3xl": "3rem",
        "4xl": "4.5rem",
        "5xl": "6rem",
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
      },
      transitionTimingFunction: {
        "standard": "linear",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --link-decoration: underline;
//   --border: 2px solid #000000;
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Bordered box, square corners, monospace label; hover inverts fg/bg. No gradient, no shadow (or one hard offset). |
| **Input** | Plain bordered field, square, monospace; visible label above. |
| **Card** | A bordered rectangle. That's it. Padding and a 2px border. |
| **Nav** | A row of underlined text links separated by a rule; current page is bold. |
| **Modal** | A bordered box centered on a plain (or no) overlay. |
| **Table** | Full bordered grid with visible cell lines — the browser-default look, embraced. |
| **Tooltip** | A bordered box; or just the native title attribute. |
| **Badge** | A 1px-bordered inline tag, square. |
| **Toggle** | A labeled checkbox or two text options; keep it literal. |
| **Loading** | Plain text ('Loading…') or a text-based progress indicator. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Brutalism is naturally high-contrast (black on white → AAA) — preserve that; don't switch to trendy low-contrast grays.
- Keep link underlines and default focus outlines; do not strip them for 'cleanliness'.
- Ensure the raw layout still has logical heading order and landmarks.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Embrace system fonts and default link colors.
- ✅ Use a real content-first single-column structure.
- ✅ Pick one border weight and stick to it.

## Don't

- ❌ Confuse ugliness for brutalism — it still needs internal consistency.
- ❌ Add rounded corners, soft shadows, or gradients.
- ❌ Remove focus/hover affordances.

## Don't confuse this with…

*Commonly confused neighbors:* neubrutalism, minimalism.

vs neubrutalism: web brutalism is austere/monochrome/raw; neubrutalism is a polished, colorful *product* style with thick borders and hard OFFSET drop-shadows and loud fills.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
