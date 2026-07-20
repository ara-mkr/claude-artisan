# Clowncore — Implementation Spec

*Aliases:* clown aesthetic  
*Slug:* `clowncore` · *Category:* niche · *Era:* 2019–present

**Origin.** Circus/clown maximal color subculture.

**Reference example.** Clowncore fashion/edits.

## Signature move(s)

A hard black `--color-border` outlines every shape while a full-primary `--rainbow-stripe` gradient and a repeating `--polka-dots` texture get applied across surfaces in clashing combinations — red, yellow, blue, green never blend, they collide. Radii bounce between very round (circus tent scallops) and comic-thick outlines, with a flat hard-offset `--shadow-*` (no blur) that reads as a cardboard cutout, not a soft drop shadow.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Primary + rainbow clash, polka dots, stripes
- Ruffles, checkerboard, harlequin
- Playful-creepy circus motifs
- Chaotic, loud, campy

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/clowncore.css`.)

```css
/* Clowncore — design tokens (generated from style_catalog.json) */
/* 2019–present | Circus/clown maximal color subculture. */
:root {
  /* color: primary clash, chaotic and loud */
  --color-bg: #fef7e0;
  --color-surface: #ffffff;
  --color-surface-strong: #fff2f8;
  --color-border: #16161d;
  --color-text: #16161d;
  --color-text-muted: #514f5c;
  --color-primary: #ff2d55;
  --color-accent: #ffd400;
  --color-blue: #2f6fed;
  --color-green: #17b26a;
  /* radius: bouncy circus-tent scallops */
  --radius-sm: 8px;
  --radius-md: 20px;
  --radius-lg: 32px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 3px 3px 0 var(--color-border);
  --shadow-md: 5px 5px 0 var(--color-border);
  --shadow-lg: 8px 8px 0 var(--color-border);
  /* font: playful rounded display */
  --font-sans: 'Baloo 2', 'Comic Neue', system-ui, sans-serif;
  --font-display: 'Fredoka', 'Baloo 2', system-ui, sans-serif;
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
  /* ease: bouncy */
  --ease-standard: cubic-bezier(0.34, 1.56, 0.64, 1);
  /* extra: polka-dot texture + rainbow stripe rule, the signature move */
  --polka-dots: radial-gradient(circle, var(--color-primary) 2px, transparent 2.5px);
  --rainbow-stripe: linear-gradient(90deg, #ff2d55, #ffd400, #17b26a, #2f6fed, #ff2d55);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Clowncore — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#fef7e0",
        "surface": "#ffffff",
        "surface-strong": "#fff2f8",
        "border": "#16161d",
        "text": "#16161d",
        "text-muted": "#514f5c",
        "primary": "#ff2d55",
        "accent": "#ffd400",
        "blue": "#2f6fed",
        "green": "#17b26a",
      },
      borderRadius: {
        "sm": "8px",
        "md": "20px",
        "lg": "32px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "3px 3px 0 var(--color-border)",
        "md": "5px 5px 0 var(--color-border)",
        "lg": "8px 8px 0 var(--color-border)",
      },
      fontFamily: {
        "sans": ["'Baloo 2'", "'Comic Neue'", "system-ui", "sans-serif"],
        "display": ["'Fredoka'", "'Baloo 2'", "system-ui", "sans-serif"],
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
//   --polka-dots: radial-gradient(circle, var(--color-primary) 2px, transparent 2.5px);
//   --rainbow-stripe: linear-gradient(90deg, #ff2d55, #ffd400, #17b26a, #2f6fed, #ff2d55);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--color-primary` fill, thick `--color-border` outline, `--shadow-sm` hard offset; active state removes the offset entirely so it "presses flat" like a squeeze toy. |
| **Input** | `--color-surface` fill with thick `--color-border`, `--radius-sm`; focus swaps the border to `--rainbow-stripe` via a gradient border trick. |
| **Card** | The hero: `--color-surface` base, `--polka-dots` texture overlay, `--rainbow-stripe` top edge, thick `--color-border`, `--shadow-md`. |
| **Nav** | `--rainbow-stripe` bar with `--color-border` bottom edge, tabs alternate `--color-blue`/`--color-green`/`--color-accent` fills. |
| **Modal** | Big `--radius-lg`, `--shadow-lg`, `--polka-dots` background peeking around the edges like a circus tent interior. |
| **Table** | Header row gets `--rainbow-stripe`; body rows alternate `--color-surface`/`--color-surface-strong`, keep polka dots off dense data rows. |
| **Tooltip** | Small chip in `--color-accent` yellow, `--color-border` outline, `--shadow-sm`. |
| **Badge** | Circular pill alternating through `--color-primary`/`--color-blue`/`--color-green`/`--color-accent` per status — a rainbow of state colors, not one accent. |
| **Toggle** | Track in `--color-surface-strong` with `--color-border`, knob cycles through primary colors with the bouncy `--ease-standard`. |
| **Loading** | A bouncing multi-color dot sequence cycling through the rainbow stripe colors — never a single-color spinner. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Clashing primary colors are prone to vibration/afterimage effects for some users — keep `--polka-dots` and `--rainbow-stripe` restricted to borders/accents/backgrounds behind large text, never as a fill directly under body copy.
- Verify every primary color pairing (`--color-primary`/`--color-blue`/`--color-green`/`--color-accent` against `--color-text`) individually with `contrast_check.py` — a palette this loud needs every combination checked, not just one.
- The bouncy `--ease-standard` overshoot and rapid multi-color loading cycle should respect `prefers-reduced-motion`, collapsing to a single calm color and a linear ease.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Rotate through all four accent colors (primary/blue/green/accent) for status and state, not just one.
- ✅ Keep the thick black outline on every shape — it's what holds the clashing colors together as one system.
- ✅ Use `--polka-dots`/`--rainbow-stripe` as borders, headers, and background texture, never under long body text.

## Don't

- ❌ Tone down the color clash into a harmonious palette — the discord is the point.
- ❌ Drop the black outline in favor of soft shadows — that reads as a different, softer style entirely.
- ❌ Run the bouncy animations at full intensity for users who've opted into reduced motion.

## Don't confuse this with…

*Commonly confused neighbors:* kidcore, memphis-design, maximalism.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
