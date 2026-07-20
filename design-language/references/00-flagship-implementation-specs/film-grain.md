# Film Grain / Noise — Implementation Spec

*Aliases:* grain, noise texture, grainy  
*Slug:* `film-grain` · *Category:* texture · *Era:* Analog film heritage

**Origin.** Adding grain/noise to fight digital sterility.

**Reference example.** A24 film sites; premium editorial (grainy gradients).

## Signature move(s)

A fine, consistent `--grain-image` noise texture at `--grain-opacity` layered over every flat color surface — cards, backgrounds, buttons alike — so nothing in the interface reads as pure, sterile digital color. Warm amber `--color-primary` and muted sage `--color-accent` sit on deep umber `--color-bg`, with a serif `--font-display` (Canela) giving headlines a cinematic, editorial weight against a clean sans body.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Subtle photographic grain over flat color
- Analog warmth and texture
- Reduces banding on gradients
- Cinematic, tactile

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/film-grain.css`.)

```css
/* Film Grain / Noise — design tokens (generated from style_catalog.json) */
/* Analog film heritage | Adding grain/noise to fight digital sterility. */
:root {
  /* color */
  --color-bg: #211d1a;
  --color-surface: #2b2622;
  --color-surface-strong: #35302a;
  --color-border: #4a423a;
  --color-text: #f2ece2;
  --color-text-muted: #bdb2a3;
  --color-primary: #d98c4a;
  --color-accent: #7fa08f;
  /* radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 14px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 2px 6px rgba(0,0,0,0.35);
  --shadow-md: 0 8px 20px rgba(0,0,0,0.42);
  --shadow-lg: 0 18px 40px rgba(0,0,0,0.5);
  /* font */
  --font-sans: 'Suisse Int\'l', 'Helvetica Neue', Arial, sans-serif;
  --font-display: 'Canela', 'Georgia', serif;
  --font-mono: 'IBM Plex Mono', ui-monospace, monospace;
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
  /* extra (signature grain overlay) */
  --grain-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
  --grain-opacity: 0.16;
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Film Grain / Noise — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#211d1a",
        "surface": "#2b2622",
        "surface-strong": "#35302a",
        "border": "#4a423a",
        "text": "#f2ece2",
        "text-muted": "#bdb2a3",
        "primary": "#d98c4a",
        "accent": "#7fa08f",
      },
      borderRadius: {
        "sm": "4px",
        "md": "8px",
        "lg": "14px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 6px rgba(0,0,0,0.35)",
        "md": "0 8px 20px rgba(0,0,0,0.42)",
        "lg": "0 18px 40px rgba(0,0,0,0.5)",
      },
      fontFamily: {
        "sans": ["'Suisse Int\\'l'", "'Helvetica Neue'", "Arial", "sans-serif"],
        "display": ["'Canela'", "'Georgia'", "serif"],
        "mono": ["'IBM Plex Mono'", "ui-monospace", "monospace"],
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

// Signature grain overlay is CSS-only (SVG noise data-URI). Add as custom properties:
//   --grain-image: url("data:image/svg+xml;utf8,...feTurbulence...");
//   --grain-opacity: 0.16;
// Apply via a fixed ::after pseudo-element with mix-blend-mode: overlay.
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--radius-md`, solid `--color-primary` fill, `--grain-image` overlay at `--grain-opacity` clipped to the button shape via `mix-blend-mode: overlay`. |
| **Input** | `--color-surface`, `--radius-sm`, 1px `--color-border`; grain overlay optional here (keep off to preserve typed-text clarity). |
| **Card** | `--color-surface`, `--radius-lg`, `--shadow-md`, full `--grain-image` overlay — the hero surface for the texture. |
| **Nav** | `--color-bg` bar with a very light grain wash, `--font-display` wordmark. |
| **Modal** | `--color-surface-strong`, `--shadow-lg`, grain overlay across the whole panel for cinematic weight. |
| **Table** | Flat `--color-surface` rows, no grain on rows themselves (legibility), grain reserved for the table's container background. |
| **Tooltip** | Small `--color-surface-strong` chip, no grain (too small a surface for the effect to read). |
| **Badge** | `--radius-pill`, solid `--color-accent` fill, no grain — badges stay crisp for quick scanning. |
| **Toggle** | Pill track in `--color-surface-strong`, `--color-primary` knob, subtle grain on the track only. |
| **Loading** | A softly grained pulsing block, or a warm `--color-primary` progress bar with the grain overlay riding on top. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Never apply the grain overlay directly over live text — layer it behind text via z-index/blend-mode on the container, not across the whole viewport indiscriminately.
- `--grain-opacity` above ~0.2 begins to visually degrade contrast; keep it at or below the documented 0.16 default over any content-bearing surface.
- `--color-text-muted` warm gray must still clear 4.5:1 against the dark `--color-bg`/`--color-surface` — verify since warm dark palettes often undershoot.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Apply grain consistently across all large flat-color surfaces so gradients/flats never look sterile.
- ✅ Keep grain opacity low and constant (~0.16) rather than varying it per component.
- ✅ Reserve the serif `--font-display` for headlines to keep the cinematic editorial tone.

## Don't

- ❌ Lay grain directly across live text glyphs.
- ❌ Crank grain opacity up for "more texture" — it degrades contrast fast.
- ❌ Use pure black/white — this style stays warm and slightly desaturated throughout.

## Don't confuse this with…

*Commonly confused neighbors:* risograph, mesh-gradient.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
