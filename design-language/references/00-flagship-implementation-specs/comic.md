# Comic / Manga — Implementation Spec

*Aliases:* comic book, manga style
*Slug:* `comic` · *Category:* texture · *Era:* 20th c. → present

**Origin.** Comic-book and manga illustration conventions.

**Reference example.** Comic-styled marketing; webtoon UIs.

## Signature move(s)

Every surface gets a thick black ink outline plus a hard offset drop-shadow rendered as a flat duplicate shape (`box-shadow: 3px 3px 0 var(--color-border)`, not a blur) so panels read like inked comic frames, and any large flat-color area gets a halftone dot overlay (`radial-gradient` dots at `--halftone-size`) standing in for screentone shading instead of a smooth gradient.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Bold ink outlines, cel shading
- Speech bubbles, action lines, SFX lettering
- Halftone/screentone shading
- Dynamic paneling

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/comic.css`.)

```css
/* Comic / Manga — design tokens (generated from style_catalog.json) */
/* 20th c. → present | Comic-book and manga illustration conventions. */
:root {
  /* color */
  --color-bg: #fef9e7;
  --color-surface: #ffffff;
  --color-surface-strong: #fff6cc;
  --color-border: #101010;
  --color-text: #101010;
  --color-text-muted: #43423f;
  --color-primary: #e8272c;
  --color-accent: #ffd400;
  --color-blue: #1c4fd6;
  --color-halftone: rgba(16, 16, 16, 0.14);
  /* radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 14px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 3px 3px 0 var(--color-border);
  --shadow-md: 5px 5px 0 var(--color-border);
  --shadow-lg: 8px 8px 0 var(--color-border);
  /* font */
  --font-sans: 'Anton', 'Bangers', 'Arial Black', system-ui, sans-serif;
  --font-display: 'Bangers', 'Anton', 'Impact', sans-serif;
  --font-mono: 'Comic Mono', ui-monospace, monospace;
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
  --ease-standard: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-entrance: cubic-bezier(0, 0, 0, 1);
  --ease-exit: cubic-bezier(0.3, 0, 1, 1);
  /* extra (signature gradients, composite borders, filters) */
  --ink-outline: 3px solid var(--color-border);
  --halftone-bg: radial-gradient(var(--color-halftone) 1.2px, transparent 1.2px);
  --halftone-size: 7px 7px;
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Comic / Manga — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#fef9e7",
        "surface": "#ffffff",
        "surface-strong": "#fff6cc",
        "border": "#101010",
        "text": "#101010",
        "text-muted": "#43423f",
        "primary": "#e8272c",
        "accent": "#ffd400",
        "blue": "#1c4fd6",
        "halftone": "rgba(16, 16, 16, 0.14)",
      },
      borderRadius: {
        "sm": "4px",
        "md": "8px",
        "lg": "14px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "3px 3px 0 var(--color-border)",
        "md": "5px 5px 0 var(--color-border)",
        "lg": "8px 8px 0 var(--color-border)",
      },
      fontFamily: {
        "sans": ["'Anton'", "'Bangers'", "'Arial Black'", "system-ui", "sans-serif"],
        "display": ["'Bangers'", "'Anton'", "'Impact'", "sans-serif"],
        "mono": ["'Comic Mono'", "ui-monospace", "monospace"],
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
        "standard": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "entrance": "cubic-bezier(0, 0, 0, 1)",
        "exit": "cubic-bezier(0.3, 0, 1, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --ink-outline: 3px solid var(--color-border);
//   --halftone-bg: radial-gradient(var(--color-halftone) 1.2px, transparent 1.2px);
//   --halftone-size: 7px 7px;
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--ink-outline`, `--shadow-sm` flat offset shadow, bold `--font-display` uppercase label; press animates the shadow to 0 offset and the button shifts into its own shadow position. |
| **Input** | White field, `--ink-outline`, no shadow at rest — focus adds `--shadow-sm` so it "pops" off the page like an active panel. |
| **Card** | The hero: `--ink-outline` border, `--shadow-md`, and `--halftone-bg` at `--halftone-size` tiling a corner or full surface for screentone shading. |
| **Nav** | Thick-bordered bar with `--shadow-md`, `--font-display` wordmark, optional diagonal "action line" accent stripe in `--color-accent`. |
| **Modal** | Oversized panel treated like a splash panel: heavy `--ink-outline`, `--shadow-lg`, halftone corner burst behind the title like an SFX callout. |
| **Table** | Ink-outlined rules between rows, header row in `--color-primary` with halftone texture, no rounded corners on the outer frame. |
| **Tooltip** | Speech-bubble shape: `--ink-outline`, `--shadow-sm`, small triangular tail via a rotated pseudo-element. |
| **Badge** | Small pill or starburst with `--ink-outline` and flat `--shadow-sm`, `--font-display` for the SFX-style label. |
| **Toggle** | Ink-outlined track, knob with its own mini `--shadow-sm`; flipping state redraws the offset shadow direction. |
| **Loading** | Halftone dots animating in a wave, or a comic "speed lines" spinner radiating from a center dot. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Halftone overlays behind text can degrade contrast — keep the dot pattern confined to backgrounds/borders, never directly under body copy, and verify with `contrast_check.py`.
- Display fonts like Bangers/Anton read poorly at small sizes — reserve them for headings/SFX and use `--font-sans` for body and UI copy.
- The bouncy `--ease-standard` overshoot easing should respect `prefers-reduced-motion: reduce` by falling back to a linear, non-overshooting transition.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Use flat, hard-edged offset shadows — never blurred drop-shadows.
- ✅ Reserve halftone texture for backgrounds and shading, not text.
- ✅ Keep outlines thick and consistent (`--ink-outline`) on every bordered surface.

## Don't

- ❌ Soften the ink outline with anti-aliased blur or gradients.
- ❌ Mix in soft neumorphic/glass shadows — it breaks the flat-ink illusion.
- ❌ Use script/display fonts for dense body text.

## Don't confuse this with…

*Commonly confused neighbors:* pop-art, halftone.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
