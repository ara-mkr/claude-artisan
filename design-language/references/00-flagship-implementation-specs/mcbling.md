# McBling — Implementation Spec

*Aliases:* bling era, 2000s glam  
*Slug:* `mcbling` · *Category:* retrofuturism · *Era:* 2003–2008

**Origin.** Mid-2000s pop-culture glamour aesthetic.

**Reference example.** Paris Hilton era; early Myspace glam.

## Signature move(s)

A hot-pink-to-gold glitter fill (`--ease-glitter-fill`) wrapped in a "rhinestone" ring: a bright inset white line plus an outer gold glow (`--shadow-bling`) that reads like a jeweled bezel around every important surface. Every raised element gets its rhinestone bezel treatment, not just the hero card.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Rhinestones, glitter, hot pink, gold bling
- Flip-phone/tabloid celebrity culture
- Juicy/velour, Y2K glam
- Ostentatious, playful excess

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/mcbling.css`.)

```css
/* McBling — design tokens (generated from style_catalog.json) */
/* 2003–2008 | Mid-2000s pop-culture glamour aesthetic. */
:root {
  /* color */
  --color-bg: #2a0a1f;
  --color-surface: #3d0f2c;
  --color-surface-strong: #52123c;
  --color-border: rgba(255, 214, 240, 0.35);
  --color-text: #fff2fa;
  --color-text-muted: #e8b8d8;
  --color-primary: #ff2ea6;
  --color-accent: #ffd23f;
  --color-rhinestone: #9be8ff;
  --color-gold: #ffcf5c;
  /* radius */
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 28px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 2px 8px rgba(255,46,166,0.30);
  --shadow-md: 0 6px 20px rgba(255,46,166,0.35);
  --shadow-lg: 0 14px 40px rgba(255,46,166,0.40);
  --shadow-bling: 0 0 0 2px rgba(255,255,255,0.55) inset, 0 0 18px rgba(255,210,63,0.55);
  /* font */
  --font-sans: 'Comic Sans MS', 'Chalkboard SE', system-ui, sans-serif;
  --font-display: 'Curlz MT', 'Brush Script MT', cursive;
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
  --glitter-fill: linear-gradient(135deg, #ff2ea6 0%, #ff7ac6 35%, #ffd23f 100%);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// McBling — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#2a0a1f",
        "surface": "#3d0f2c",
        "surface-strong": "#52123c",
        "border": "rgba(255, 214, 240, 0.35)",
        "text": "#fff2fa",
        "text-muted": "#e8b8d8",
        "primary": "#ff2ea6",
        "accent": "#ffd23f",
        "rhinestone": "#9be8ff",
        "gold": "#ffcf5c",
      },
      borderRadius: {
        "sm": "8px",
        "md": "16px",
        "lg": "28px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 8px rgba(255,46,166,0.30)",
        "md": "0 6px 20px rgba(255,46,166,0.35)",
        "lg": "0 14px 40px rgba(255,46,166,0.40)",
        "bling": "0 0 0 2px rgba(255,255,255,0.55) inset, 0 0 18px rgba(255,210,63,0.55)",
      },
      fontFamily: {
        "sans": ["'Comic Sans MS'", "'Chalkboard SE'", "system-ui", "sans-serif"],
        "display": ["'Curlz MT'", "'Brush Script MT'", "cursive"],
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
//   --glitter-fill: linear-gradient(135deg, #ff2ea6 0%, #ff7ac6 35%, #ffd23f 100%);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Pill, `--glitter-fill`, wrapped in `--shadow-bling`'s rhinestone bezel; hover intensifies the gold glow, active flattens the bling shadow briefly. |
| **Input** | `--color-surface-strong` field, thin `--color-rhinestone` border; focus adds `--shadow-bling` around the whole field like a jeweled frame. |
| **Card** | The hero: `--glitter-fill` header strip over a `--color-surface` body, full `--shadow-bling` bezel, `--radius-lg`, display font headline in `--font-display`. |
| **Nav** | Dark glam bar, gold-outlined logo chip with `--shadow-bling`, hot-pink active-link underline. |
| **Modal** | Oversized rhinestone bezel around the whole panel, glitter-fill title bar, velour-dark `--color-bg` scrim behind. |
| **Table** | Flat `--color-surface` rows for legibility; header row gets the glitter-fill treatment, gold rule between rows. |
| **Tooltip** | Small gold-bordered chip on `--color-surface-strong`, mini bling glow. |
| **Badge** | Tiny gem-shaped pill, `--color-gold` or `--color-rhinestone` fill with a bling inset ring. |
| **Toggle** | Glitter-fill track when on, dull `--color-surface` when off; knob is a faceted-looking gold/rhinestone circle. |
| **Loading** | Sparkle particles animating around a spinning gold ring, or a shimmering glitter-fill sweep. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- `--font-display` (Curlz MT / Brush Script) is decorative and low-legibility — restrict it to short headlines, never body copy or form labels.
- The dark magenta/plum base (`--color-bg`, `--color-surface`) needs `--color-text`/`--color-text-muted` verified with `contrast_check.py`, especially `--color-text-muted` on `--color-surface-strong`.
- Reserve `--shadow-bling`'s glow for hover/focus/emphasis states — applied everywhere at once it becomes visual noise and buries the actual focus indicator.
- Ensure a solid, high-contrast focus outline exists independent of the decorative glow, since the glow alone is not a reliable focus signal.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Wrap key interactive surfaces in the rhinestone bezel (`--shadow-bling`).
- ✅ Reserve the glitter-fill gradient for headline surfaces (buttons, card headers), not body backgrounds.
- ✅ Keep the base dark and jewel-toned so pink/gold accents pop like actual bling.

## Don't

- ❌ Set body paragraphs in the display cursive/script font.
- ❌ Overuse the bling glow on every element simultaneously — it should mark emphasis, not saturate the whole screen.
- ❌ Use muted, low-saturation colors — McBling is maximal, loud, and unapologetically shiny.

## Don't confuse this with…

*Commonly confused neighbors:* y2k-futurism, barbiecore.

vs y2k-futurism: y2k-futurism is chrome/metallic/tech-optimist; McBling is glitter/rhinestone/celebrity-glam with no tech motif. vs barbiecore: barbiecore is monochrome hot-pink plastic; McBling mixes pink with gold bling and jewel accents rather than staying single-hue.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
