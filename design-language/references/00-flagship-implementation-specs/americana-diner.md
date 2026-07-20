# Retro Americana / Diner — Implementation Spec

*Aliases:* diner, 50s Americana, rockabilly
*Slug:* `americana-diner` · *Category:* niche · *Era:* 1950s revival

**Origin.** Nostalgic 1950s US diner/roadside culture.

**Reference example.** 50s diners; Route 66 signage; Coca-Cola retro.

## Signature move(s)

A hard offset "chip" shadow (`0 4px 0 rgba(26,26,26,0.9)`, no blur) under every raised surface, like a laminate counter edge, combined with a black checkerboard strip (`--checker`) as a section divider and neon teal glow (`--shadow-neon`) on accents. It reads as chrome diner signage, not a soft SaaS card.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Chrome, red vinyl, checkerboard floors
- Neon signage, script + bold slab type
- Cherry red, cream, turquoise
- Nostalgic, wholesome, kitsch

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/americana-diner.css`.)

```css
/* Retro Americana / Diner — design tokens (generated from style_catalog.json) */
/* 1950s revival | Nostalgic 1950s US diner/roadside culture. */
:root {
  /* color */
  --color-bg: #fdf6e3;
  --color-surface: #ffffff;
  --color-surface-strong: #fff8ea;
  --color-border: #1a1a1a;
  --color-text: #1a1a1a;
  --color-text-muted: #5c5346;
  --color-primary: #d62828;
  --color-accent: #1fb6b0;
  --color-chrome: #c9ccd1;
  /* radius */
  --radius-sm: 4px;
  --radius-md: 10px;
  --radius-lg: 18px;
  --radius-pill: 999px;
  /* shadow (hard offset, no blur — the diner-counter edge) */
  --shadow-sm: 0 2px 0 rgba(26,26,26,0.9);
  --shadow-md: 0 4px 0 rgba(26,26,26,0.9);
  --shadow-lg: 0 8px 0 rgba(26,26,26,0.9);
  --shadow-neon: 0 0 6px rgba(31,182,176,0.7), 0 0 16px rgba(31,182,176,0.4);
  /* font */
  --font-sans: 'Helvetica Neue', Arial, sans-serif;
  --font-display: 'Pacifico', 'Brush Script MT', cursive;
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
  --ease-standard: cubic-bezier(0.34, 1.56, 0.64, 1);
  /* extra (checkerboard floor + chrome edge) */
  --checker: repeating-linear-gradient(45deg, #1a1a1a 0 10px, #fdf6e3 10px 20px);
  --chrome-edge: linear-gradient(180deg, #f4f4f4, #b8bcc2 50%, #f4f4f4);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Retro Americana / Diner — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#fdf6e3",
        "surface": "#ffffff",
        "surface-strong": "#fff8ea",
        "border": "#1a1a1a",
        "text": "#1a1a1a",
        "text-muted": "#5c5346",
        "primary": "#d62828",
        "accent": "#1fb6b0",
        "chrome": "#c9ccd1",
      },
      borderRadius: {
        "sm": "4px", "md": "10px", "lg": "18px", "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 0 rgba(26,26,26,0.9)",
        "md": "0 4px 0 rgba(26,26,26,0.9)",
        "lg": "0 8px 0 rgba(26,26,26,0.9)",
        "neon": "0 0 6px rgba(31,182,176,0.7), 0 0 16px rgba(31,182,176,0.4)",
      },
      fontFamily: {
        "sans": ["'Helvetica Neue'", "Arial", "sans-serif"],
        "display": ["'Pacifico'", "'Brush Script MT'", "cursive"],
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
        "standard": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
};

// Signature checker/chrome tokens are CSS-only (repeating-gradient / linear-gradient):
//   --checker: repeating-linear-gradient(45deg, #1a1a1a 0 10px, #fdf6e3 10px 20px);
//   --chrome-edge: linear-gradient(180deg, #f4f4f4, #b8bcc2 50%, #f4f4f4);
```

## Component rules (the 10 primitives)

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--radius-pill`, cherry-red `--color-primary` fill, cream text, `--shadow-md` hard offset; on press, translate down + shrink shadow to `--shadow-sm` (a "pressed jukebox button" feel). |
| **Input** | White surface, thick 2px `--color-border` black outline (`--radius-sm`), focus ring in `--color-accent` teal. |
| **Card** | White surface, `--color-border` black outline, `--shadow-md` hard offset, `--radius-md`; optional `--chrome-edge` top strip. |
| **Nav** | Cream bar with a `--checker` bottom strip; script `--font-display` wordmark in `--color-primary`. |
| **Modal** | `--chrome-edge` header band, black-outlined white body, `--shadow-lg`. |
| **Table** | White rows with thin `--color-border` rules; header row uses `--checker` at low opacity as texture, not full pattern. |
| **Tooltip** | Small black chip, cream text, `--shadow-neon` teal glow to read as neon signage. |
| **Badge** | Pill outlined in black, filled `--color-primary` or `--color-accent`, always with the hard offset shadow at `--shadow-sm`. |
| **Toggle** | Chrome-edge track, red knob when on, hard black outline throughout. |
| **Loading** | A neon-glow spinner (`--shadow-neon`) or a shimmering checker strip. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Neon teal glow (`--shadow-neon`) is decorative only — never rely on it as the sole focus indicator; pair with a solid, high-contrast outline for focus-visible states.
- Script display font (`--font-display`) must be limited to short labels/headlines; verify body copy stays in `--font-sans` at readable weight/size.
- The full-bleed `--checker` pattern behind text fails contrast easily — keep it to thin strips or low-opacity texture, never directly behind paragraph text.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Use hard offset shadows (no blur) consistently — it's what separates this from generic flat design.
- ✅ Reserve neon-teal glow for accents/badges/CTAs, not entire surfaces.
- ✅ Keep the checkerboard motif thin and structural (strips, borders) rather than a full background fill.

## Don't

- ❌ Soften the hard shadows into blurred drop-shadows — that kills the diner-signage feel.
- ❌ Set body paragraphs in the cursive display font.
- ❌ Mix in cool minimalist grays — commit to cream, cherry-red, chrome, and teal.

## Don't confuse this with…

*Commonly confused neighbors:* googie, streamline-moderne, pop-art.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
