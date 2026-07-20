# Cyberprep — Implementation Spec

*Aliases:* optimistic cyberpunk  
*Slug:* `cyberprep` · *Category:* retrofuturism · *Era:* 1990s–present

**Origin.** Optimistic counterpart to dystopian cyberpunk (Frutiger-adjacent).

**Reference example.** Mirror's Edge; early 2000s tech ads.

## Signature move(s)

Everything is glossy and lit from above: a `--glossy-fill` vertical gradient (bright highlight fading to base surface) on every raised element, generous `--radius-lg` rounding, and an `--aqua-gradient` (cyan-to-mint) reserved for primary actions and hero accents. The palette stays almost entirely light — this is cyberpunk's utopian twin, tech that feels safe, clean, and friendly.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Clean, bright, safe high-tech future
- White/aqua/green, glossy surfaces
- Seamless friendly tech integration
- Utopian consumer sci-fi

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/cyberprep.css`.)

```css
/* Cyberprep — design tokens (generated from style_catalog.json) */
/* 1990s–present | Optimistic counterpart to dystopian cyberpunk (Frutiger-adjacent). */
:root {
  /* color */
  --color-bg: #eef9fb;
  --color-surface: #ffffff;
  --color-surface-strong: #dcf3f6;
  --color-border: #b7e6ec;
  --color-text: #0c3a3f;
  --color-text-muted: #3f6c70;
  --color-primary: #0fb5c4;
  --color-accent: #3ddc84;
  --color-glossy-hi: rgba(255, 255, 255, 0.85);
  /* radius */
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 28px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 2px 8px rgba(15, 181, 196, 0.18);
  --shadow-md: 0 8px 20px rgba(15, 181, 196, 0.20);
  --shadow-lg: 0 16px 36px rgba(15, 181, 196, 0.22);
  --shadow-inset-hi: inset 0 1px 0 rgba(255,255,255,0.9);
  /* font */
  --font-sans: 'Segoe UI', 'Frutiger', system-ui, sans-serif;
  --font-display: 'Eurostile', 'Segoe UI', sans-serif;
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
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
  --ease-entrance: cubic-bezier(0, 0, 0, 1);
  --ease-exit: cubic-bezier(0.3, 0, 1, 1);
  /* extra (signature gradients, composite borders, filters) */
  --glossy-fill: linear-gradient(180deg, var(--color-glossy-hi) 0%, var(--color-surface) 45%, var(--color-surface-strong) 100%);
  --aqua-gradient: linear-gradient(135deg, var(--color-primary), var(--color-accent));
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Cyberprep — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#eef9fb",
        "surface": "#ffffff",
        "surface-strong": "#dcf3f6",
        "border": "#b7e6ec",
        "text": "#0c3a3f",
        "text-muted": "#3f6c70",
        "primary": "#0fb5c4",
        "accent": "#3ddc84",
        "glossy-hi": "rgba(255, 255, 255, 0.85)",
      },
      borderRadius: {
        "sm": "8px",
        "md": "16px",
        "lg": "28px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 8px rgba(15, 181, 196, 0.18)",
        "md": "0 8px 20px rgba(15, 181, 196, 0.20)",
        "lg": "0 16px 36px rgba(15, 181, 196, 0.22)",
        "inset-hi": "inset 0 1px 0 rgba(255,255,255,0.9)",
      },
      fontFamily: {
        "sans": ["'Segoe UI'", "'Frutiger'", "system-ui", "sans-serif"],
        "display": ["'Eurostile'", "'Segoe UI'", "sans-serif"],
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
        "standard": "cubic-bezier(0.2, 0, 0, 1)",
        "entrance": "cubic-bezier(0, 0, 0, 1)",
        "exit": "cubic-bezier(0.3, 0, 1, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --glossy-fill: linear-gradient(180deg, var(--color-glossy-hi) 0%, var(--color-surface) 45%, var(--color-surface-strong) 100%);
//   --aqua-gradient: linear-gradient(135deg, var(--color-primary), var(--color-accent));
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Pill (`--radius-pill`) with `--aqua-gradient` fill and `--shadow-inset-hi` top highlight; hover brightens the gradient, active flattens the highlight briefly. |
| **Input** | White `--color-surface` field with `--glossy-fill`, soft `--color-border`; focus adds an aqua glow ring using `--shadow-sm` at `--color-primary`. |
| **Card** | `--glossy-fill` panel, `--radius-lg`, `--shadow-md`, `--shadow-inset-hi` top-edge sheen. |
| **Nav** | Glossy white bar floating with `--shadow-sm`; active item gets an `--aqua-gradient` pill background. |
| **Modal** | Large glossy `--radius-lg` panel with a soft light scrim (never a heavy dark scrim — this style stays bright even for overlays). |
| **Table** | Clean white rows, aqua-gradient header, generous row padding for a "friendly" feel rather than dense data. |
| **Tooltip** | Small glossy white chip, aqua-tinted border, `--shadow-sm`. |
| **Badge** | Aqua-gradient pill, white text, `--radius-pill`. |
| **Toggle** | Glossy white track, aqua-gradient knob; smooth easy motion using `--ease-standard`. |
| **Loading** | Soft pulsing aqua-gradient ring or a gentle glossy shimmer sweep — calm, never urgent. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- The palette is almost entirely light-on-light (white/aqua/mint) — verify `--color-text-muted` against `--color-surface-strong` specifically, since secondary text is the most likely failure point.
- `--aqua-gradient` text-on-fill (e.g., button labels) must use white text, never `--color-text`, and should be checked at both gradient endpoints for contrast.
- Glossy inset highlights can visually mimic a focus state — keep a distinct, higher-contrast focus ring (solid `--color-primary` outline) so real focus is never mistaken for ambient sheen.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Keep the palette bright and light — cyberprep is defined by feeling safe, not by darkness.
- ✅ Reserve `--aqua-gradient` for primary/hero actions so it stays a meaningful signal.
- ✅ Add a glossy top highlight to every raised surface for consistency.

## Don't

- ❌ Darken the background to "make it feel more techy" — that turns it into plain cyberpunk.
- ❌ Use hard, sharp corners — cyberprep rounds generously and softly.
- ❌ Add neon glow or scanline textures — those belong to the dystopian cyberpunk family, not this one.

## Don't confuse this with…

*Commonly confused neighbors:* frutiger-aero, cyberpunk.

vs frutiger-aero: frutiger-aero leans further into nature imagery (water droplets, leaves, blue skies) and Web 2.0-era skeuomorphism; cyberprep is more restrained and product/UI-focused, aqua-and-white rather than illustrative. vs cyberpunk: cyberpunk is dark, neon, dystopian, and HUD-dense; cyberprep is its direct optimistic inversion — light, glossy, and reassuring.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
