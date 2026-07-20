# VSCO Girl — Implementation Spec

*Aliases:* 2019 aesthetic, soft summer
*Slug:* `vsco-girl` · *Category:* niche · *Era:* 2019

**Origin.** Summer-2019 teen aesthetic (named after VSCO app).

**Reference example.** 2019 VSCO/TikTok trend.

## Signature move(s)

A faded warm-film wash (`--faded-wash`) with a low-opacity grain overlay (`--film-grain-opacity: 0.05`) sits over every image/hero surface, and a hand-lettered scrunchie-style dashed underline (`--scrunchie-underline`) marks headings and links — the whole thing reads like an oversaturated beach photo run through a washed-out VSCO filter.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Faded warm film-filter photos
- Scrunchies, Hydro Flasks, seashells
- Beige/teal beachy palette
- Casual, sunny, laid-back

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/vsco-girl.css`.)

```css
/* VSCO Girl — design tokens (generated from style_catalog.json) */
/* 2019 | Summer-2019 teen aesthetic (named after VSCO app). */
:root {
  /* color */
  --color-bg: #f3ece1;
  --color-surface: #fbf7f0;
  --color-surface-strong: #ece2d0;
  --color-border: #d8c9ae;
  --color-text: #4a4038;
  --color-text-muted: #8a7c68;
  --color-primary: #6fa8a3;
  --color-accent: #e8a598;
  --color-shell: #f0d9c0;
  /* radius */
  --radius-sm: 10px;
  --radius-md: 18px;
  --radius-lg: 28px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 2px 8px rgba(74,64,56,0.08);
  --shadow-md: 0 6px 18px rgba(74,64,56,0.12);
  --shadow-lg: 0 12px 32px rgba(74,64,56,0.15);
  /* font */
  --font-sans: 'Poppins', 'Segoe UI', sans-serif;
  --font-display: 'Caveat', 'Poppins', cursive;
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
  --ease-standard: cubic-bezier(0.3, 0, 0.2, 1);
  /* extra */
  --faded-wash: linear-gradient(135deg, rgba(255,255,255,0.5), rgba(232,165,152,0.15));
  --scrunchie-underline: 3px dashed var(--color-accent);
  --film-grain-opacity: 0.05;
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// VSCO Girl — Tailwind theme fragment (generated).
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f3ece1",
        "surface": "#fbf7f0",
        "surface-strong": "#ece2d0",
        "border": "#d8c9ae",
        "text": "#4a4038",
        "text-muted": "#8a7c68",
        "primary": "#6fa8a3",
        "accent": "#e8a598",
        "shell": "#f0d9c0",
      },
      borderRadius: {
        "sm": "10px",
        "md": "18px",
        "lg": "28px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 8px rgba(74,64,56,0.08)",
        "md": "0 6px 18px rgba(74,64,56,0.12)",
        "lg": "0 12px 32px rgba(74,64,56,0.15)",
      },
      fontFamily: {
        "sans": ["'Poppins'", "'Segoe UI'", "sans-serif"],
        "display": ["'Caveat'", "'Poppins'", "cursive"],
        "mono": ["ui-monospace", "monospace"],
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
        "standard": "cubic-bezier(0.3, 0, 0.2, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only:
//   --faded-wash: linear-gradient(135deg, rgba(255,255,255,0.5), rgba(232,165,152,0.15));
//   --scrunchie-underline: 3px dashed var(--color-accent);
//   --film-grain-opacity: 0.05; (apply via an SVG noise overlay at this opacity)
```

## Component rules (the 10 primitives)

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--radius-pill`, `--color-primary` teal fill, `--faded-wash` overlay for a sun-bleached feel; hover brightens toward `--color-accent`. |
| **Input** | `--color-surface` fill, `--radius-md`, bottom border styled as `--scrunchie-underline` on focus. |
| **Card** | `--color-surface` panel with `--faded-wash` layered over any image, `--radius-lg`, `--shadow-sm`. |
| **Nav** | `--color-bg` bar, hand-lettered `--font-display` wordmark, `--scrunchie-underline` beneath the active nav item. |
| **Modal** | `--color-surface`, `--radius-lg`, `--faded-wash` header band, `--shadow-lg`. |
| **Table** | Flat `--color-surface` rows, `--color-border` dividers, no wash (keep data legible). |
| **Tooltip** | `--color-shell` fill, `--radius-md`, small and casual, `--font-sans` label. |
| **Badge** | `--radius-pill` chip, `--color-shell` or `--color-accent` fill, casual lowercase label. |
| **Toggle** | Track in `--color-surface-strong`, knob in `--color-primary`; on-state track gets a light `--faded-wash` tint. |
| **Loading** | A scrunchie-dash border spins around a circle, or the faded wash pulses gently. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

- `--film-grain-opacity` noise overlays must sit below text layers and stay under ~0.06 opacity or they measurably reduce text contrast — verify with `contrast_check.py` on real composited values.
- `--color-text-muted` (#8a7c68) on `--color-bg` (#f3ece1) is a warm-on-warm low-contrast pairing — check it explicitly, don't assume the "faded" look is fine for body copy.
- The dashed scrunchie underline is decorative, not a focus indicator — pair links/buttons with a solid `--color-primary` focus outline.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Apply the faded wash consistently to photographic/hero surfaces, not to every UI chrome element.
- ✅ Keep the palette to warm beige, teal, and coral blush — the "beachy" triad is the whole story.
- ✅ Use the scrunchie dashed underline as a recurring, recognizable accent motif on headings/active states.

## Don't

- ❌ Don't let the film grain overlay sit at a strength that dulls text contrast.
- ❌ Don't oversaturate colors — the entire point is a washed-out, faded palette.
- ❌ Don't mix in cool blues/greys; VSCO girl stays warm beige and beach teal, not corporate cool tones.

## Don't confuse this with…

*Commonly confused neighbors:* nostalgiacore, cottagecore.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
