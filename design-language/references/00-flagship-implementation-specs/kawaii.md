# Kawaii — Implementation Spec

*Aliases:* cute Japanese, chibi  
*Slug:* `kawaii` · *Category:* niche · *Era:* 1970s–present

**Origin.** Japanese 'cute culture' (Sanrio).

**Reference example.** Hello Kitty; Pusheen; Japanese packaging.

## Signature move(s)

Everything is chubby and huggable: extreme border-radius (`--radius-lg: 28px`) on surfaces sized only slightly larger than their content, a candy-pink/sky-blue/yellow palette, and a soft polka-dot texture (`radial-gradient` dots) behind hero sections that reads as printed candy wrapping. Shadows are tinted pink, not neutral gray, so even elevation feels sweet.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Round soft characters, big eyes
- Pastel pinks and candy colors
- Chubby friendly mascots
- Sweet, playful, wholesome

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/kawaii.css`.)

```css
/* Kawaii — design tokens (generated from style_catalog.json) */
/* 1970s–present | Japanese 'cute culture' (Sanrio). */
:root {
  /* color */
  --color-bg: #fff0f6;
  --color-surface: #ffffff;
  --color-surface-strong: #ffe1ec;
  --color-border: #ffb6d5;
  --color-text: #6b2447;
  --color-text-muted: #a45b82;
  --color-primary: #ff6fa5;
  --color-accent: #7fd8e8;
  --color-candy: #ffd166;
  /* radius */
  --radius-sm: 12px;
  --radius-md: 20px;
  --radius-lg: 28px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 2px 8px rgba(255,111,165,0.25);
  --shadow-md: 0 6px 18px rgba(255,111,165,0.30);
  --shadow-lg: 0 12px 32px rgba(255,111,165,0.32);
  /* font */
  --font-sans: 'Baloo 2', 'Quicksand', system-ui, sans-serif;
  --font-display: 'Baloo 2', 'Fredoka', system-ui, sans-serif;
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
  /* extra (polka dots) */
  --dots: radial-gradient(circle at 10px 10px, rgba(255,111,165,0.14) 2.5px, transparent 2.5px);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Kawaii — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#fff0f6",
        "surface": "#ffffff",
        "surface-strong": "#ffe1ec",
        "border": "#ffb6d5",
        "text": "#6b2447",
        "text-muted": "#a45b82",
        "primary": "#ff6fa5",
        "accent": "#7fd8e8",
        "candy": "#ffd166",
      },
      borderRadius: {
        "sm": "12px",
        "md": "20px",
        "lg": "28px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 8px rgba(255,111,165,0.25)",
        "md": "0 6px 18px rgba(255,111,165,0.30)",
        "lg": "0 12px 32px rgba(255,111,165,0.32)",
      },
      fontFamily: {
        "sans": ["'Baloo 2'", "'Quicksand'", "system-ui", "sans-serif"],
        "display": ["'Baloo 2'", "'Fredoka'", "system-ui", "sans-serif"],
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

// Signature `extra` token is CSS-only (dot pattern).
// Add it as a CSS custom property or arbitrary value:
//   --dots: radial-gradient(circle at 10px 10px, rgba(255,111,165,0.14) 2.5px, transparent 2.5px);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--radius-pill`, `--color-primary` fill, tinted pink `--shadow-sm`; press = squish scale(0.95) with `--ease-standard`'s bounce back on release. |
| **Input** | `--radius-md`, thick `--color-border`, candy-pink focus ring using `--color-primary`; placeholder text stays friendly, never sharp/technical. |
| **Card** | `--radius-lg`, `--color-surface` fill, `--dots` texture in the header zone, `--shadow-md`. |
| **Nav** | Rounded pill-shaped bar (`--radius-pill`) floating with `--shadow-sm`, active item gets a `--color-candy` chip behind it. |
| **Modal** | `--radius-lg`, `--shadow-lg`, `--dots` background wash — the "biggest hug" surface on screen. |
| **Table** | Soften to rounded row groups (`--radius-sm` per row) rather than a harsh grid; alternate `--color-surface` / `--color-surface-strong`. |
| **Tooltip** | Small rounded speech-bubble shape with a little pointer, `--shadow-sm`, `--color-surface-strong` fill. |
| **Badge** | `--radius-pill`, `--color-candy` or `--color-accent` fill — think stickers, not status chips. |
| **Toggle** | Chunky rounded track and a knob with a subtle face-like highlight (two tiny dot "eyes" optional) for max cuteness. |
| **Loading** | Bouncing dots (three circles scaling up/down in sequence) rather than a spinner — matches the playful bounce easing. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Pastel-on-pastel text (`--color-text-muted` on `--color-surface-strong`) is a common kawaii trap — verify every muted-text pairing with `contrast_check.py`, not just the primary text color.
- The bouncy overshoot easing (`--ease-standard`) must respect `prefers-reduced-motion: reduce` — fall back to a simple opacity/scale fade with no overshoot.
- Keep body copy on `--font-sans` at full `--text-base` size; rounded display fonts (`--font-display`) lose legibility fast below 16px, so never use them for paragraph text.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Push border-radius as large as the component's size allows — the roundness is non-negotiable.
- ✅ Tint every shadow with the primary pink rather than neutral gray/black.
- ✅ Keep the palette to 3–4 candy colors max — more starts to look chaotic instead of curated-cute.

## Don't

- ❌ Use sharp corners or neutral gray shadows anywhere — it instantly kills the "soft toy" feel.
- ❌ Overload dense data tables with dots/pastels — reserve texture for hero/marketing surfaces.
- ❌ Use saturated primary pink for large text blocks; keep saturated color to accents and fills only.

## Don't confuse this with…

*Commonly confused neighbors:* kidcore, claymorphism.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
