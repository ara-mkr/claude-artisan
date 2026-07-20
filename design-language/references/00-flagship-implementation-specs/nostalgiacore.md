# Nostalgiacore — Implementation Spec

*Aliases:* memorycore  
*Slug:* `nostalgiacore` · *Category:* niche · *Era:* 2019–present

**Origin.** Broad nostalgia for the recent past.

**Reference example.** Nostalgiacore compilations.

## Signature move(s)

A warm sepia `--grain-overlay` film-grain texture and a soft `--photo-vignette` darken every surface's edges, as if each panel were a scanned disposable-camera print. A monospace `--timestamp-font` orange date-stamp (`--color-timestamp`) sits in a corner of photo-bearing surfaces, exactly like an embedded camera timestamp — that stamp is the recurring signature detail that separates this from generic "vintage" styling.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Faded photos of childhood/00s ephemera
- Warm degraded color, timestamps
- Familiar objects and places
- Wistful, comforting

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/nostalgiacore.css`.)

```css
/* Nostalgiacore — design tokens (generated from style_catalog.json) */
/* 2019–present | Broad nostalgia for the recent past. */
:root {
  /* color */
  --color-bg: #e8dcc8;
  --color-surface: #f2e9d8;
  --color-surface-strong: #ede0c4;
  --color-border: #b8a37e;
  --color-text: #4a3d2c;
  --color-text-muted: #7a6a52;
  --color-primary: #c17a4e;
  --color-accent: #8a9a6b;
  --color-sepia-tint: rgba(163, 120, 63, 0.18);
  --color-timestamp: #e8622c;
  /* radius */
  --radius-sm: 3px;
  --radius-md: 6px;
  --radius-lg: 10px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 1px 3px rgba(74, 61, 44, 0.22);
  --shadow-md: 0 4px 10px rgba(74, 61, 44, 0.26);
  --shadow-lg: 0 10px 24px rgba(74, 61, 44, 0.3);
  /* font */
  --font-sans: 'Century Gothic', 'Trebuchet MS', system-ui, sans-serif;
  --font-display: 'Courier New', 'Trebuchet MS', monospace;
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
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  /* extra: sepia grain overlay + faded-photo vignette + timestamp stamp */
  --grain-overlay: repeating-radial-gradient(circle at 20% 30%, rgba(74,61,44,0.04) 0px, transparent 2px), repeating-radial-gradient(circle at 70% 80%, rgba(74,61,44,0.03) 0px, transparent 2px);
  --photo-vignette: radial-gradient(120% 100% at 50% 40%, transparent 55%, rgba(74,61,44,0.14) 100%);
  --timestamp-font: 'Courier New', monospace;
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Nostalgiacore — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#e8dcc8",
        "surface": "#f2e9d8",
        "surface-strong": "#ede0c4",
        "border": "#b8a37e",
        "text": "#4a3d2c",
        "text-muted": "#7a6a52",
        "primary": "#c17a4e",
        "accent": "#8a9a6b",
        "sepia-tint": "rgba(163, 120, 63, 0.18)",
        "timestamp": "#e8622c",
      },
      borderRadius: {
        "sm": "3px",
        "md": "6px",
        "lg": "10px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 3px rgba(74, 61, 44, 0.22)",
        "md": "0 4px 10px rgba(74, 61, 44, 0.26)",
        "lg": "0 10px 24px rgba(74, 61, 44, 0.3)",
      },
      fontFamily: {
        "sans": ["'Century Gothic'", "'Trebuchet MS'", "system-ui", "sans-serif"],
        "display": ["'Courier New'", "'Trebuchet MS'", "monospace"],
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
        "standard": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --grain-overlay: repeating-radial-gradient(circle at 20% 30%, rgba(74,61,44,0.04) 0px, transparent 2px), repeating-radial-gradient(circle at 70% 80%, rgba(74,61,44,0.03) 0px, transparent 2px);
//   --photo-vignette: radial-gradient(120% 100% at 50% 40%, transparent 55%, rgba(74,61,44,0.14) 100%);
//   --timestamp-font: 'Courier New', monospace;
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--color-surface-strong` fill, `--grain-overlay` texture, `--radius-md`; hover warms toward `--color-primary` terracotta, like film exposure shifting. |
| **Input** | `--color-surface` fill, `--color-border` hairline (a worn tan, not black); focus ring in `--color-accent` sage. |
| **Card** | The hero: `--color-surface` base with `--grain-overlay` + `--photo-vignette`, `--color-timestamp` stamp in the corner using `--timestamp-font`, `--shadow-md`. |
| **Nav** | Flat `--color-surface-strong` bar, `--grain-overlay` subtle texture, no gloss — feels like a printed photo album spine. |
| **Modal** | Centered card with heavier `--photo-vignette`, `--shadow-lg`, as if flipping to a single photo in a memory book. |
| **Table** | Rows alternate `--color-surface` / `--color-bg`, grain kept very faint so data stays legible. |
| **Tooltip** | Small `--color-surface-strong` chip with `--color-timestamp` text for any date/time metadata specifically. |
| **Badge** | Muted pill in `--color-accent` sage or `--color-primary` terracotta — never neon, always sun-faded. |
| **Toggle** | Worn `--color-surface-strong` track, `--color-primary` knob, slow unhurried `--ease-standard` transition. |
| **Loading** | A slow film-reel-style flicker or fade using `--grain-overlay`, evoking a slideshow advancing. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Verify `--color-text` and `--color-text-muted` against the warm beige `--color-bg`/`--color-surface` with `contrast_check.py` — sepia palettes drift low-contrast easily and need real checking, not just "looks vintage enough."
- Keep `--grain-overlay` and `--photo-vignette` intensities low (under ~10–14% as shipped) behind any text block; never stack both at full strength on the same surface as body copy.
- The `--timestamp-font` monospace stamp is decorative metadata, not a substitute for a real accessible date/time — pair it with proper semantic markup (`<time>`) for assistive tech.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Stamp a timestamp-styled label on photo-bearing cards for the signature detail.
- ✅ Keep the whole palette warm and slightly desaturated, never cool or crisp.
- ✅ Use grain/vignette consistently across every card so the "photo album" feels continuous.

## Don't

- ❌ Let grain or vignette intensity spike on text-heavy surfaces.
- ❌ Introduce cool blues or high-saturation neons — this palette is strictly warm sepia/olive.
- ❌ Treat the timestamp as purely decorative pixels with no real semantic time value.

## Don't confuse this with…

*Commonly confused neighbors:* webcore, vhs, mallsoft.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
