# Vaporwave — Implementation Spec

*Aliases:* vapor, aesthetic (A E S T H E T I C)  
*Slug:* `vaporwave` · *Category:* retrofuturism · *Era:* 2010–present

**Origin.** Internet music/visual microgenre (~2010–2012).

**Reference example.** Macintosh Plus 'Floral Shoppe'; vaporwave album art.

## Signature move(s)

Ironic 80s/90s consumer nostalgia: pink/purple/cyan sunset gradients, Roman busts, palm trees, perspective grids, Japanese katakana, and glitch. Dreamy and kitsch.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Roman busts, 80s/90s consumer nostalgia, glitch
- Pink/purple/cyan sunset gradients
- Japanese katakana, marble, palm trees, grids
- Ironic, dreamy, mall-nostalgic

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/vaporwave.css`.)

```css
/* Vaporwave — design tokens (generated from style_catalog.json) */
/* 2010–present | Internet music/visual microgenre (~2010–2012). */
:root {
  /* color */
  --color-bg: #1a0033;
  --color-surface: #2d0a4e;
  --color-text: #ffffff;
  --color-text-muted: #c9a6ff;
  --color-primary: #ff71ce;
  --color-accent: #01cdfe;
  --color-purple: #b967ff;
  --color-mint: #05ffa1;
  --color-yellow: #fffb96;
  /* radius */
  --radius-sm: 0px;
  --radius-md: 6px;
  --radius-lg: 12px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-glow: 0 0 20px rgba(255,113,206,0.6);
  --shadow-text-chrome: 2px 2px 0 #01cdfe, -2px -2px 0 #ff71ce;
  /* font */
  --font-sans: 'VT323', 'Poppins', system-ui, sans-serif;
  --font-display: 'Monoton', 'VT323', cursive;
  --font-mono: 'VT323', monospace;
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
  /* extra (signature gradients, composite borders, filters) */
  --grid: linear-gradient(#ff71ce 1px, transparent 1px), linear-gradient(90deg, #ff71ce 1px, transparent 1px);
  --sunset: linear-gradient(180deg, #ff71ce, #ff9a5a, #fffb96);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Vaporwave — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#1a0033",
        "surface": "#2d0a4e",
        "text": "#ffffff",
        "text-muted": "#c9a6ff",
        "primary": "#ff71ce",
        "accent": "#01cdfe",
        "purple": "#b967ff",
        "mint": "#05ffa1",
        "yellow": "#fffb96",
      },
      borderRadius: {
        "sm": "0px",
        "md": "6px",
        "lg": "12px",
        "pill": "999px",
      },
      boxShadow: {
        "glow": "0 0 20px rgba(255,113,206,0.6)",
        "text-chrome": "2px 2px 0 #01cdfe, -2px -2px 0 #ff71ce",
      },
      fontFamily: {
        "sans": ["'VT323'", "'Poppins'", "system-ui", "sans-serif"],
        "display": ["'Monoton'", "'VT323'", "cursive"],
        "mono": ["'VT323'", "monospace"],
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
        "standard": "linear",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --grid: linear-gradient(#ff71ce 1px, transparent 1px), linear-gradient(90deg, #ff71ce 1px, transparent 1px);
//   --sunset: linear-gradient(180deg, #ff71ce, #ff9a5a, #fffb96);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Gradient or chrome-text button; wide-letter-spaced or katakana-flavored label; pink/cyan glow. |
| **Input** | Dark purple field with a neon border; retro mono/pixel font. |
| **Card** | Gradient sunset card with a grid floor and a statue/plant motif. |
| **Nav** | Retro bar with chrome/gradient logo; A E S T H E T I C spacing. |
| **Modal** | Gradient panel with glitch edges and a grid backdrop. |
| **Table** | Dark grid with neon rules; playful, not data-serious. |
| **Tooltip** | Neon gradient chip. |
| **Badge** | Chrome/gradient pill, maybe katakana. |
| **Toggle** | Gradient track; neon knob. |
| **Loading** | A retro spinning globe / perspective grid animation. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Gradient text and neon-on-purple often fail — provide a solid-color legible variant for real content.
- Wide letter-spacing hurts readability; use it for display only.
- Offer reduced-motion for glitch/animation.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Use sunset gradients, grids, statues, palms as motifs.
- ✅ Embrace the irony and kitsch.
- ✅ Keep functional text on solid legible surfaces.

## Don't

- ❌ Set body copy in gradient/wide-spaced display type.
- ❌ Confuse it with the harder-edged synthwave.
- ❌ Take it too seriously — it's parody.

## Don't confuse this with…

*Commonly confused neighbors:* synthwave, seapunk, mallsoft.

vs synthwave: vaporwave is ironic/pastel/statues-and-malls; synthwave is earnest 80s action-movie neon. vs seapunk: seapunk is the aquatic teal offshoot.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
