# Angelcore — Implementation Spec

*Aliases:* ethereal core  
*Slug:* `angelcore` · *Category:* niche · *Era:* 2019–present

**Origin.** Ethereal celestial/religious-art aesthetic.

**Reference example.** Angelcore moodboards; Renaissance-cherub edits.

## Signature move(s)

A pale gold halo (`--halo-ring`, `--shadow-halo`) radiating from key surfaces against a cream-and-white field, quoting Renaissance religious painting rather than internet-cute. Typography leans entirely on a classical serif (`Cormorant Garamond`) with generous type scale jumps, and the page background itself carries a soft radial gold wash (`--bg-image`) as if lit from above.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Cherubs, clouds, soft gold light
- White/cream/pale gold, halos
- Renaissance-painting references
- Divine, soft, romantic

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/angelcore.css`.)

```css
/* Angelcore — design tokens (generated from style_catalog.json) */
/* 2019–present | Ethereal celestial/religious-art aesthetic. */
:root {
  /* color */
  --color-bg: #fdf9f0;
  --color-surface: #ffffff;
  --color-surface-strong: #fbf1dc;
  --color-border: #e8d5a8;
  --color-text: #4a3f2a;
  --color-text-muted: #7a6849;
  --color-primary: #c9a24b;
  --color-accent: #f2c98a;
  --color-halo: #fff4d6;
  /* radius */
  --radius-sm: 10px;
  --radius-md: 18px;
  --radius-lg: 28px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 2px 12px rgba(201,162,75,0.15);
  --shadow-md: 0 10px 30px rgba(201,162,75,0.2);
  --shadow-lg: 0 24px 60px rgba(201,162,75,0.25);
  --shadow-halo: 0 0 0 8px rgba(242,201,138,0.22), 0 0 40px rgba(242,201,138,0.35);
  /* font */
  --font-sans: 'Cormorant Garamond', 'Georgia', serif;
  --font-display: 'Cormorant Garamond', 'Playfair Display', serif;
  --font-mono: ui-monospace, monospace;
  /* text */
  --text-xs: 0.75rem;
  --text-sm: 0.9rem;
  --text-base: 1.05rem;
  --text-lg: 1.2rem;
  --text-xl: 1.5rem;
  --text-2xl: 1.9rem;
  --text-3xl: 2.5rem;
  --text-4xl: 3.4rem;
  --text-5xl: 4.6rem;
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
  --ease-standard: cubic-bezier(0.16, 1, 0.3, 1);
  /* extra (background wash, halo ring) */
  --bg-image: radial-gradient(60% 40% at 50% 0%, #fff4d6 0%, transparent 65%), var(--color-bg);
  --halo-ring: radial-gradient(circle, rgba(242,201,138,0.5) 0%, rgba(242,201,138,0) 70%);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Angelcore — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#fdf9f0",
        "surface": "#ffffff",
        "surface-strong": "#fbf1dc",
        "border": "#e8d5a8",
        "text": "#4a3f2a",
        "text-muted": "#7a6849",
        "primary": "#c9a24b",
        "accent": "#f2c98a",
        "halo": "#fff4d6",
      },
      borderRadius: {
        "sm": "10px",
        "md": "18px",
        "lg": "28px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 12px rgba(201,162,75,0.15)",
        "md": "0 10px 30px rgba(201,162,75,0.2)",
        "lg": "0 24px 60px rgba(201,162,75,0.25)",
        "halo": "0 0 0 8px rgba(242,201,138,0.22), 0 0 40px rgba(242,201,138,0.35)",
      },
      fontFamily: {
        "sans": ["'Cormorant Garamond'", "'Georgia'", "serif"],
        "display": ["'Cormorant Garamond'", "'Playfair Display'", "serif"],
        "mono": ["ui-monospace", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem",
        "sm": "0.9rem",
        "base": "1.05rem",
        "lg": "1.2rem",
        "xl": "1.5rem",
        "2xl": "1.9rem",
        "3xl": "2.5rem",
        "4xl": "3.4rem",
        "5xl": "4.6rem",
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
        "standard": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (radial washes).
// Add them as CSS custom properties or arbitrary values:
//   --bg-image: radial-gradient(60% 40% at 50% 0%, #fff4d6 0%, transparent 65%), var(--color-bg);
//   --halo-ring: radial-gradient(circle, rgba(242,201,138,0.5) 0%, rgba(242,201,138,0) 70%);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--radius-pill`, cream `--color-surface` fill with `--color-primary` gold text/border, `--shadow-sm`; hover adds `--shadow-halo`. |
| **Input** | `--color-surface`, thin `--color-border`; focus uses `--halo-ring` behind the field rather than a hard outline. |
| **Card** | `--radius-lg`, `--bg-image` wash as the card background, `--shadow-md`, serif `--font-display` for the card title. |
| **Nav** | Minimal cream bar, wordmark in `--font-display` italic-style serif, no heavy chrome. |
| **Modal** | `--radius-lg`, `--shadow-halo` fully applied as the defining frame, centered on the `--bg-image` wash. |
| **Table** | Plain `--color-surface` rows, thin gold-tinted dividers (`--color-border`) — keep dense data free of halo effects. |
| **Tooltip** | Small cream chip, `--shadow-sm`, serif label. |
| **Badge** | `--radius-pill`, `--color-accent` fill with a faint halo on "blessed/featured" states only. |
| **Toggle** | Cream track, gold knob; active state gets a subtle `--halo-ring` glow. |
| **Loading** | A slow-rotating soft halo ring (`--halo-ring` rotating at low opacity) rather than a mechanical spinner. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- `--color-primary` (muted gold) on `--color-bg` (cream) is a low-contrast pairing by design — verify with `contrast_check.py` and use `--color-text` (dark brown) for any text that must be reliably legible, reserving gold for large display type and decorative accents only.
- The serif `--font-sans`/`--font-display` at large x-heights can still read thin at small sizes on low-DPI screens — bump `font-weight` slightly for body text under `--text-base`.
- Halo glow effects must never replace a solid focus outline — always pair `--shadow-halo` with a crisp `--color-text` or `--color-primary` 2px outline for keyboard focus.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Center the gold radial wash (`--bg-image`) as an ambient top-down light source across the whole page.
- ✅ Use serif type consistently for both body and display — mixing in a sans body font breaks the Renaissance reference.
- ✅ Reserve `--shadow-halo` for the single most important surface on a screen (hero card, primary CTA).

## Don't

- ❌ Mix in playful rounded sans fonts — they read as kawaii, not divine/classical.
- ❌ Apply halo glow to every component; it should feel like grace, not decoration.
- ❌ Use cool-toned grays or blues in shadows — every shadow here is warm gold-brown.

## Don't confuse this with…

*Commonly confused neighbors:* fairycore, light-academia.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
