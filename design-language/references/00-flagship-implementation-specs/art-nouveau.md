# Art Nouveau — Implementation Spec

*Aliases:* Jugendstil, Liberty style  
*Slug:* `art-nouveau` · *Category:* historical · *Era:* 1890–1910

**Origin.** Europe (Alphonse Mucha, Hector Guimard, Gustav Klimt).

**Reference example.** Mucha's theatrical posters; Paris Métro entrances.

## Signature move(s)

The "whiplash curve": an asymmetric, organic border-radius that bulges wide on two opposite corners and stays tight on the other two, as if the rectangle grew a vine. Pair it with a thin gilt (gold) border and a gold vine-gradient underline, echoing Guimard's cast-iron Métro entrances and Mucha's flowing botanical frames. Repeat the same asymmetric radius shape everywhere so the interface reads as one continuous organic form, not a random assortment of rounded rectangles.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Organic, sinuous "whiplash" curves from nature
- Floral and botanical ornament, flowing hair
- Muted earthy + gold palettes
- Decorative custom lettering

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/art-nouveau.css`.)

```css
/* Art Nouveau — design tokens (generated from style_catalog.json) */
/* 1890–1910 | Europe (Alphonse Mucha, Hector Guimard, Gustav Klimt). */
:root {
  /* color */
  --color-bg: #f3ead9;
  --color-surface: #fbf6ec;
  --color-surface-strong: #ede0c4;
  --color-border: #8a6d3b;
  --color-text: #2e2412;
  --color-text-muted: #6b5a3c;
  --color-primary: #2f5233;
  --color-accent: #b8860b;
  --color-terracotta: #a5502c;
  /* radius — whiplash curves: deliberately asymmetric, never uniform corners */
  --radius-sm: 6px;
  --radius-md: 30px 6px 30px 6px;
  --radius-lg: 60px 12px 60px 12px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 2px 6px rgba(46,36,18,0.12);
  --shadow-md: 0 6px 18px rgba(46,36,18,0.16);
  --shadow-lg: 0 14px 32px rgba(46,36,18,0.2);
  /* font */
  --font-sans: 'Cormorant Garamond', 'EB Garamond', Georgia, serif;
  --font-display: 'Cinzel Decorative', 'Playfair Display', Georgia, serif;
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
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  /* extra — signature whiplash vine border + gilded underline */
  --vine-underline: linear-gradient(90deg, transparent, var(--color-accent) 20%, var(--color-accent) 80%, transparent);
  --gilt-border: 1px solid var(--color-accent);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Art Nouveau — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f3ead9",
        "surface": "#fbf6ec",
        "surface-strong": "#ede0c4",
        "border": "#8a6d3b",
        "text": "#2e2412",
        "text-muted": "#6b5a3c",
        "primary": "#2f5233",
        "accent": "#b8860b",
        "terracotta": "#a5502c",
      },
      borderRadius: {
        "sm": "6px",
        "md": "30px 6px 30px 6px",
        "lg": "60px 12px 60px 12px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 6px rgba(46,36,18,0.12)",
        "md": "0 6px 18px rgba(46,36,18,0.16)",
        "lg": "0 14px 32px rgba(46,36,18,0.2)",
      },
      fontFamily: {
        "sans": ["'Cormorant Garamond'", "'EB Garamond'", "Georgia", "serif"],
        "display": ["'Cinzel Decorative'", "'Playfair Display'", "Georgia", "serif"],
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
        "standard": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --vine-underline: linear-gradient(90deg, transparent, var(--color-accent) 20%, var(--color-accent) 80%, transparent);
//   --gilt-border: 1px solid var(--color-accent);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--radius-md` whiplash corners, `--gilt-border`, soft `--shadow-sm` lifting to `--shadow-md` on hover with a 1px rise — never a hard snap, motion should feel like a stem bending. |
| **Input** | Same asymmetric `--radius-md`, gilt border, focus swaps to `--color-primary` (deep botanical green) with a soft green-tinted ring. |
| **Card** | `--radius-lg` (the deepest whiplash curve), gilt border, `--shadow-md`, and a `--vine-underline` gold gradient rule along the bottom edge standing in for a decorative botanical border. |
| **Nav** | Flat bar with only a `--gilt-border` bottom rule and `--shadow-sm` — the ornament lives in the underline, not the shape, so the bar stays scannable. |
| **Modal** | `--radius-lg` panel over a warm sepia-tinted scrim (not neutral black) so the whole overlay stays inside the earthy palette. |
| **Table** | Flat rows (no whiplash radius inside a grid — that would break alignment); reserve the curve for the table's outer container only, with a gilt top border. |
| **Tooltip** | Small `--radius-sm` chip, gilt border, `--shadow-sm` — legible and understated, ornament is for hero surfaces not micro-UI. |
| **Badge** | `--radius-pill`, `--surface-strong` fill, gilt border — the pill shape reads as a locket or medallion. |
| **Toggle** | Track uses `--radius-pill`, knob is a plain circle; on state, tint the track with `--color-primary` rather than adding decoration. |
| **Loading** | A slow, sinuous progress line that eases like a drawn vine (`--ease-standard`, no snap) rather than a mechanical bar-fill. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- The decorative display serif (`--font-display`, Cinzel Decorative) is for short headlines only — never set body copy or form labels in it; use `--font-sans` (Cormorant/EB Garamond) at `--text-base` or larger, since light-weight serifs lose legibility below 16px.
- `--color-text-muted` on `--color-bg` (both warm mid-tones) is the pairing most likely to fail contrast — verify with `contrast_check.py` before using it for any label or helper text.
- Asymmetric radii can visually shift a click target's center; keep the actual hit area a full rectangle even though the drawn shape is irregular.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Use the same asymmetric whiplash radius (two corners bulge, two stay tight) on every raised surface.
- ✅ Reserve the display serif for headlines; keep body text in a readable serif at 16px+.
- ✅ Let gold (`--color-accent`) do all the ornament work — underlines, borders, dividers — instead of adding busy botanical imagery everywhere.

## Don't

- ❌ Round all four corners evenly — that reads as generic "rounded," not whiplash.
- ❌ Set paragraphs in the decorative display font.
- ❌ Overload every surface with texture; Art Nouveau ornament is precise and sparing, not maximalist noise.

## Don't confuse this with…

*Commonly confused neighbors:* art-deco, solarpunk. vs Art Deco: Art Deco is symmetric, geometric, machine-age (chevrons, sunbursts, hard gold lines); Art Nouveau is asymmetric and organic (vines, curves, hand-drawn botanicals). vs solarpunk: solarpunk borrows nature imagery too but points forward — bright, techno-optimist, plant-covered architecture — where Art Nouveau is a fin-de-siècle decorative language rooted in illustration and ironwork.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
