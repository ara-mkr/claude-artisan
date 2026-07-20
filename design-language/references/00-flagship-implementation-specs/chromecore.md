# Chromecore — Implementation Spec

*Aliases:* liquid chrome, metal type  
*Slug:* `chromecore` · *Category:* retrofuturism · *Era:* 2020s (evokes Y2K)

**Origin.** Revived Y2K metallic aesthetic.

**Reference example.** 2020s album covers; fashion (Balenciaga, Rui).

## Signature move(s)

A blobby, oversized-radius surface (`--radius-lg: 44px`) coated in a mercury sheen: a diagonal streak of near-white highlight (`--mercury-sheen`) crossing a cool-neutral fill, with an iridescent lavender→pink→mint sweep (`--iridescent`) reserved for the surfaces that should look "wet" chrome. Everything is smooth, blobby, and reflective — no hard edges, no matte flats.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Liquid/reflective chrome surfaces and type
- Silver, mercury, iridescent reflections
- Blobby metallic 3D forms
- Futuristic, sleek, cold

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/chromecore.css`.)

```css
/* Chromecore — design tokens (generated from style_catalog.json) */
/* 2020s (evokes Y2K) | Revived Y2K metallic aesthetic. */
:root {
  /* color */
  --color-bg: #e8eaf0;
  --color-surface: #f4f5f9;
  --color-surface-strong: #ffffff;
  --color-border: #c3c8d6;
  --color-text: #1c1b2e;
  --color-text-muted: #4a4866;
  --color-primary: #a78bfa;
  --color-accent: #f472b6;
  --color-mint: #5eead4;
  /* radius */
  --radius-sm: 16px;
  --radius-md: 28px;
  --radius-lg: 44px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 2px 8px rgba(28,27,46,0.1);
  --shadow-md: 0 10px 26px rgba(167,139,250,0.22);
  --shadow-lg: 0 20px 48px rgba(244,114,182,0.24);
  /* font */
  --font-sans: 'Segoe UI', 'Helvetica Neue', system-ui, sans-serif;
  --font-display: 'Segoe UI', 'Trebuchet MS', system-ui, sans-serif;
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
  --ease-standard: cubic-bezier(0.34, 1.56, 0.64, 1);
  /* extra (signature gradients, composite borders, filters) */
  --iridescent: linear-gradient(120deg, #a78bfa 0%, #f472b6 33%, #5eead4 66%, #a78bfa 100%);
  --mercury-sheen: linear-gradient(160deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.2) 35%, rgba(255,255,255,0.7) 60%, rgba(255,255,255,0.1) 100%);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Chromecore — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#e8eaf0",
        "surface": "#f4f5f9",
        "surface-strong": "#ffffff",
        "border": "#c3c8d6",
        "text": "#1c1b2e",
        "text-muted": "#4a4866",
        "primary": "#a78bfa",
        "accent": "#f472b6",
        "mint": "#5eead4",
      },
      borderRadius: {
        "sm": "16px",
        "md": "28px",
        "lg": "44px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 8px rgba(28,27,46,0.1)",
        "md": "0 10px 26px rgba(167,139,250,0.22)",
        "lg": "0 20px 48px rgba(244,114,182,0.24)",
      },
      fontFamily: {
        "sans": ["'Segoe UI'", "'Helvetica Neue'", "system-ui", "sans-serif"],
        "display": ["'Segoe UI'", "'Trebuchet MS'", "system-ui", "sans-serif"],
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
        "standard": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --iridescent: linear-gradient(120deg, #a78bfa 0%, #f472b6 33%, #5eead4 66%, #a78bfa 100%);
//   --mercury-sheen: linear-gradient(160deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.2) 35%, rgba(255,255,255,0.7) 60%, rgba(255,255,255,0.1) 100%);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Blobby pill, `--mercury-sheen` diagonal streak across the fill, `--radius-pill`; hover swaps in `--iridescent` briefly, active flattens the sheen. |
| **Input** | Rounded `--radius-md` field on `--color-surface-strong` with a faint mercury streak along the top edge; focus ring shifts to `--iridescent` at low opacity. |
| **Card** | The hero: `--radius-lg` blob shape, `--mercury-sheen` overlay, `--shadow-md`, thin `--color-border` rim like polished metal edge. |
| **Nav** | White chrome bar, `--iridescent` used only on the active-tab indicator or logo mark. |
| **Modal** | Extra-large `--radius-lg` blob panel with a strong mercury streak, `--shadow-lg`, floats over a cool-neutral scrim. |
| **Table** | Flat `--color-surface` rows (chrome sheen stays off body text); header row gets the mercury streak. |
| **Tooltip** | Small blobby chip, mercury highlight along one edge, `--shadow-sm`. |
| **Badge** | Tiny iridescent pill using `--color-mint` or `--color-accent`. |
| **Toggle** | Mercury-sheen track when on, flat `--color-border` fill when off; knob is a glossy blob with its own mini highlight. |
| **Loading** | A rotating iridescent blob or a sweeping mercury streak across a skeleton shape. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- `--color-primary` (lavender) and `--color-accent` (pink) are both mid-value pastels — verify against `--color-surface`/`--color-surface-strong` with `contrast_check.py` before using them for text, not just fills.
- Never let the `--mercury-sheen` or `--iridescent` gradients run behind body text; keep copy on flat `--color-surface`/`--color-text`.
- The glossy, low-contrast aesthetic makes focus states easy to lose — pair focus-visible with a solid dark ring, not just a brighter sheen.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Keep every raised shape blobby with generous, oversized radii.
- ✅ Rake a mercury highlight across every glossy surface at a consistent angle.
- ✅ Reserve the iridescent sweep for accents and active states, not full backgrounds.

## Don't

- ❌ Use sharp corners or flat matte fills — that breaks the liquid-metal illusion.
- ❌ Warm up the palette — chromecore stays cool, silver, and slightly clinical.
- ❌ Place text directly on the mercury sheen without a flat text-safe zone.

## Don't confuse this with…

*Commonly confused neighbors:* y2k-futurism, holographic, chrome-metal.

vs y2k-futurism: y2k-futurism is broader (bubble UI, translucent plastics); chromecore is specifically liquid, blobby, reflective metal. vs holographic: holographic shifts hue across a rainbow spectrum on flat surfaces; chromecore stays silver/mercury with iridescence as a restrained accent, always on 3D-blobby forms.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
