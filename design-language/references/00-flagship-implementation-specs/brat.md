# Brat — Implementation Spec

*Aliases:* brat green, Charli XCX green  
*Slug:* `brat` · *Category:* niche · *Era:* 2024–present

**Origin.** Charli XCX 'Brat' album (2024).

**Reference example.** Charli XCX 'Brat' album cover and campaign.

## Signature move(s)

One flat, toxic lime-green field (`--color-bg: #8ace00`), zero shadows, zero radius, and low-res stretched Arial text (`--stretch: scaleX(1.12)`) blurred by less than half a pixel (`--blur: blur(0.4px)`) to fake a compressed-JPEG, screenshot-of-a-screenshot look. The confrontation is the point: the UI refuses every normal polish cue.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Single toxic lime-green (#8ACE00-ish) field
- Low-res stretched Arial-style text
- Deliberately blunt and lo-fi
- Confrontational, cool, ironic

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/brat.css`.)

```css
/* Brat — design tokens (generated from style_catalog.json) */
/* 2024–present | Charli XCX 'Brat' album (2024). */
:root {
  /* color */
  --color-bg: #8ace00;
  --color-surface: #97d611;
  --color-surface-strong: #a4e022;
  --color-border: #111111;
  --color-text: #0e0e0e;
  --color-text-muted: #2c2c2c;
  --color-primary: #0e0e0e;
  --color-accent: #ffffff;
  /* radius */
  --radius-sm: 0px;
  --radius-md: 0px;
  --radius-lg: 0px;
  --radius-pill: 0px;
  /* shadow */
  --shadow-sm: none;
  --shadow-md: none;
  --shadow-lg: none;
  /* font */
  --font-sans: Arial, 'Helvetica Neue', sans-serif;
  --font-display: Arial, 'Helvetica Neue', sans-serif;
  --font-mono: 'Courier New', monospace;
  /* text */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.375rem;
  --text-2xl: 1.75rem;
  --text-3xl: 2.25rem;
  --text-4xl: 3.25rem;
  --text-5xl: 4.5rem;
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
  --ease-standard: linear;
  /* extra (lo-fi blur, stretch) */
  --blur: blur(0.4px);
  --stretch: scaleX(1.12);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Brat — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#8ace00",
        "surface": "#97d611",
        "surface-strong": "#a4e022",
        "border": "#111111",
        "text": "#0e0e0e",
        "text-muted": "#2c2c2c",
        "primary": "#0e0e0e",
        "accent": "#ffffff",
      },
      borderRadius: {
        "sm": "0px",
        "md": "0px",
        "lg": "0px",
        "pill": "0px",
      },
      boxShadow: {
        "sm": "none",
        "md": "none",
        "lg": "none",
      },
      fontFamily: {
        "sans": ["Arial", "'Helvetica Neue'", "sans-serif"],
        "display": ["Arial", "'Helvetica Neue'", "sans-serif"],
        "mono": ["'Courier New'", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem",
        "sm": "0.875rem",
        "base": "1rem",
        "lg": "1.125rem",
        "xl": "1.375rem",
        "2xl": "1.75rem",
        "3xl": "2.25rem",
        "4xl": "3.25rem",
        "5xl": "4.5rem",
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
        "standard": "linear",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (blur/stretch filters).
// Add them as CSS custom properties or arbitrary values:
//   --blur: blur(0.4px);
//   --stretch: scaleX(1.12);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Flat rectangle, `--radius-sm` (0), `--color-primary` (near-black) fill, `--color-accent` (white) text, `--shadow-sm` (none); hover just inverts fill/text, no lift. |
| **Input** | Flat `--color-surface`, 1px `--color-border` (black), no radius, no glow ring — focus is a thicker 2px black border, nothing else. |
| **Card** | Flat `--color-surface` or `--color-surface-strong` block, hard black 1–2px border, zero radius, zero shadow. |
| **Nav** | Flat bar in `--color-bg`, Arial wordmark with `--stretch` applied, black 1px bottom border. |
| **Modal** | Flat black-bordered rectangle, no radius, no shadow — appears "pasted" rather than "elevated." |
| **Table** | Flat rows, thin black gridlines, no zebra striping — deliberately plain. |
| **Tooltip** | Flat black-on-lime chip, zero radius, no shadow. |
| **Badge** | Flat rectangle, inverted black/lime or black/white, all-caps Arial label. |
| **Toggle** | Flat rectangular track (no pill), hard-edged knob — resist the urge to round it. |
| **Loading** | A blunt blinking text label ("LOADING...") rather than a spinner — spinners feel too polished for this style. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Black text on the lime `--color-bg` is actually a strong-contrast pairing — verify it anyway with `contrast_check.py`, and never lighten `--color-text` toward gray for "style," since the whole point of the palette is stark black-on-green.
- The `--blur: blur(0.4px)` lo-fi filter must be applied to decorative/display text only, never to body copy, form labels, or anything a screen-reader-adjacent sighted user needs to read quickly.
- `--stretch: scaleX(1.12)` distorts letterforms — apply it to short display headlines only; never to paragraph text or interactive control labels, where it slows reading and can misalign click targets if applied to the whole element including its hit area.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Keep every surface completely flat — no radius, no shadow, no gradient, anywhere.
- ✅ Use only black, white, and the single lime-green field — resist adding a "safe" accent color.
- ✅ Apply the sub-pixel blur/stretch combo only to large display type, sparingly.

## Don't

- ❌ Add rounded corners or drop shadows "for polish" — it directly contradicts the aesthetic.
- ❌ Introduce a second accent color beyond black/white/lime.
- ❌ Blur or stretch body copy, buttons, or form labels — distortion is a display-type-only trick.

## Don't confuse this with…

*Commonly confused neighbors:* anti-design, minimalism.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
