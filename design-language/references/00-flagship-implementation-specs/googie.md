# Googie — Implementation Spec

*Aliases:* populuxe, doo-wop architecture  
*Slug:* `googie` · *Category:* retrofuturism · *Era:* 1945–1969

**Origin.** Southern California car-culture architecture.

**Reference example.** LAX Theme Building; retro motel/diner signs.

## Signature move(s)

Hard offset shadows and asymmetric radii that mimic upswept roofs and boomerang forms: every raised surface gets a flat, unblurred `--shadow-sm/md/lg` (a solid color offset, not a blur), and the corner radius itself is asymmetric (`4px 24px 4px 24px`) rather than uniform — echoing the cantilevered, kidney-bean geometry of Googie architecture. Gold, orange, and teal pop hard against a warm cream base.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Upswept roofs, boomerangs, starbursts, atoms
- Bold neon signage, cantilevers
- Space-age optimism
- Amoeba/kidney-bean shapes

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/googie.css`.)

```css
/* Googie — design tokens (generated from style_catalog.json) */
/* 1945–1969 | Southern California car-culture architecture. */
:root {
  /* color */
  --color-bg: #f5ede0;
  --color-surface: #ffffff;
  --color-surface-strong: #fff2df;
  --color-border: #1f2a44;
  --color-text: #1f2a44;
  --color-text-muted: #4c5878;
  --color-primary: #ff6b3d;
  --color-accent: #1fb6b0;
  --color-gold: #f0b429;
  /* radius (asymmetric — the signature "boomerang" corner) */
  --radius-sm: 4px;
  --radius-md: 4px 24px 4px 24px;
  --radius-lg: 8px 48px 8px 48px;
  --radius-pill: 999px;
  /* shadow (hard offset, no blur) */
  --shadow-sm: 3px 3px 0 var(--color-border);
  --shadow-md: 5px 5px 0 var(--color-border);
  --shadow-lg: 8px 8px 0 var(--color-border);
  /* font */
  --font-sans: 'Century Gothic', 'Avant Garde', 'Futura', sans-serif;
  --font-display: 'Broadway', 'Cooper Black', 'Futura', sans-serif;
  --font-mono: ui-monospace, monospace;
  /* text */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.5rem;
  --text-2xl: 2rem;
  --text-3xl: 2.75rem;
  --text-4xl: 3.75rem;
  --text-5xl: 5rem;
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
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Googie — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f5ede0",
        "surface": "#ffffff",
        "surface-strong": "#fff2df",
        "border": "#1f2a44",
        "text": "#1f2a44",
        "text-muted": "#4c5878",
        "primary": "#ff6b3d",
        "accent": "#1fb6b0",
        "gold": "#f0b429",
      },
      borderRadius: {
        "sm": "4px",
        "md": "4px 24px 4px 24px",
        "lg": "8px 48px 8px 48px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "3px 3px 0 #1f2a44",
        "md": "5px 5px 0 #1f2a44",
        "lg": "8px 8px 0 #1f2a44",
      },
      fontFamily: {
        "sans": ["'Century Gothic'", "'Avant Garde'", "'Futura'", "sans-serif"],
        "display": ["'Broadway'", "'Cooper Black'", "'Futura'", "sans-serif"],
        "mono": ["ui-monospace", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem",
        "sm": "0.875rem",
        "base": "1rem",
        "lg": "1.125rem",
        "xl": "1.5rem",
        "2xl": "2rem",
        "3xl": "2.75rem",
        "4xl": "3.75rem",
        "5xl": "5rem",
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
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--radius-md` asymmetric corner, `--color-primary` fill, `--shadow-sm` hard offset that shifts to `0 0 0` on `:active` (button "presses into" the page). |
| **Input** | `--radius-sm`, 2px `--color-border`, `--color-surface` fill; focus swaps border to `--color-accent`. |
| **Card** | `--radius-lg` (biggest asymmetric sweep), `--color-surface`, `--shadow-md` hard offset — the hero "boomerang panel." |
| **Nav** | Cream `--color-surface-strong` bar, bold `--font-display` wordmark, asymmetric-radius pill nav items. |
| **Modal** | `--radius-lg`, `--shadow-lg`, `--color-surface`; corners must keep the boomerang asymmetry even at large sizes. |
| **Table** | Flat rows in `--color-surface`, `--color-border` dividers — shadows reserved for raised elements only, not table rows. |
| **Tooltip** | Small `--radius-sm` chip, `--shadow-sm`, `--color-gold` accent border. |
| **Badge** | `--radius-pill`, solid `--color-gold`/`--color-accent` fill, bold text. |
| **Toggle** | Pill track, `--color-primary` knob, hard offset shadow on the knob for a physical "starburst button" feel. |
| **Loading** | A rotating starburst/atom motif in `--color-gold`, or a hard-edged progress bar filling in `--color-primary`. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Hard offset shadows can visually merge with adjacent dark elements — keep at least `--space-3` gap around shadowed elements so the offset stays legible.
- Asymmetric radii on small tap targets (badges, buttons) can make hit-testing feel imprecise — keep the actual clickable/tappable box rectangular even when the visual radius is asymmetric.
- Verify `--color-primary` orange and `--color-gold` on `--color-bg` cream both clear 4.5:1 for body text use; reserve them for large text/UI chrome if not.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Keep the asymmetric radius consistent in direction (top-left/bottom-right sweep) across all components.
- ✅ Use hard, unblurred offset shadows everywhere — no soft blurred shadows in this style.
- ✅ Let gold/teal pop against the cream base for accents and small UI, not large text blocks.

## Don't

- ❌ Blur the shadows — Googie shadows are flat, hard-edged offsets, not soft drop shadows.
- ❌ Use a uniform border-radius; symmetry undercuts the "boomerang" signature.
- ❌ Overcrowd a single view with too many starburst/atom motifs — reserve for hero moments.

## Don't confuse this with…

*Commonly confused neighbors:* atompunk, streamline-moderne, space-age.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
