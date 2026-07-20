# Hand-Drawn / Sketch — Implementation Spec

*Aliases:* doodle, sketchy, hand-illustrated  
*Slug:* `hand-drawn` · *Category:* texture · *Era:* 2016–present

**Origin.** Humanizing counter to sterile flat UI.

**Reference example.** Excalidraw; Basecaseinvest-style doodle sites; tldraw.

## Signature move(s)

Every rectangle lies to you: asymmetric multi-value border-radius (`6px 9px 7px 10px`) and a hard offset "sketch" shadow with no blur (`2px 3px 0 rgba(43,43,43,0.5)`) instead of a soft drop shadow, so surfaces read as if drawn in one imperfect pen stroke rather than rendered by a computer. A yellow marker-swipe gradient stands in for highlighter ink under emphasized words.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Rough, wobbly hand-drawn strokes
- Sketch-style borders and arrows
- Marker/pencil textures
- Friendly, approachable, human

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/hand-drawn.css`.)

```css
/* Hand-Drawn / Sketch — design tokens (generated from style_catalog.json) */
/* 2016–present | Humanizing counter to sterile flat UI. */
:root {
  /* color */
  --color-bg: #fffdf7;
  --color-surface: #ffffff;
  --color-surface-strong: #fff5e0;
  --color-border: #2b2b2b;
  --color-text: #2b2b2b;
  --color-text-muted: #5c5c54;
  --color-primary: #ff6b4a;
  --color-accent: #3b7dd8;
  --color-marker: #ffd93b;
  /* radius */
  --radius-sm: 6px 9px 7px 10px;
  --radius-md: 12px 16px 13px 18px;
  --radius-lg: 22px 28px 24px 30px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 2px 3px 0 rgba(43,43,43,0.5);
  --shadow-md: 3px 5px 0 rgba(43,43,43,0.4);
  --shadow-lg: 5px 8px 0 rgba(43,43,43,0.3);
  /* font */
  --font-sans: 'Patrick Hand', 'Comic Neue', 'Segoe Print', sans-serif;
  --font-display: 'Caveat', 'Kalam', 'Patrick Hand', cursive;
  --font-mono: 'Courier New', ui-monospace, monospace;
  /* text */
  --text-xs: 0.8rem;
  --text-sm: 0.95rem;
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
  --ease-standard: cubic-bezier(0.34, 1.56, 0.64, 1);
  /* extra (signature borders, wobble, marker swipe) */
  --sketch-border: 2px solid var(--color-border);
  --sketch-wobble: 2px 2px 0 -1px var(--color-bg), 2px 2px 0 0 var(--color-border);
  --marker-swipe: linear-gradient(180deg, transparent 55%, var(--color-marker) 55%, var(--color-marker) 85%, transparent 85%);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Hand-Drawn / Sketch — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#fffdf7",
        "surface": "#ffffff",
        "surface-strong": "#fff5e0",
        "border": "#2b2b2b",
        "text": "#2b2b2b",
        "text-muted": "#5c5c54",
        "primary": "#ff6b4a",
        "accent": "#3b7dd8",
        "marker": "#ffd93b",
      },
      borderRadius: {
        "sm": "6px 9px 7px 10px",
        "md": "12px 16px 13px 18px",
        "lg": "22px 28px 24px 30px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "2px 3px 0 rgba(43,43,43,0.5)",
        "md": "3px 5px 0 rgba(43,43,43,0.4)",
        "lg": "5px 8px 0 rgba(43,43,43,0.3)",
      },
      fontFamily: {
        "sans": ["'Patrick Hand'", "'Comic Neue'", "'Segoe Print'", "sans-serif"],
        "display": ["'Caveat'", "'Kalam'", "'Patrick Hand'", "cursive"],
        "mono": ["'Courier New'", "ui-monospace", "monospace"],
      },
      fontSize: {
        "xs": "0.8rem",
        "sm": "0.95rem",
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
        "standard": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (borders/wobble/gradients).
// Add them as CSS custom properties or arbitrary values:
//   --sketch-border: 2px solid var(--color-border);
//   --sketch-wobble: 2px 2px 0 -1px var(--color-bg), 2px 2px 0 0 var(--color-border);
//   --marker-swipe: linear-gradient(180deg, transparent 55%, var(--color-marker) 55%, var(--color-marker) 85%, transparent 85%);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--sketch-border` at 2px, asymmetric `--radius-sm`, hard offset `--shadow-sm`; press = shadow collapses to 0 and button shifts down-right 2px (mimics a pen pressing down). |
| **Input** | Same wobble border, no fill change on focus — swap the border color to `--color-primary` and thicken to 2.5px so it still looks hand-inked, never a glowing ring. |
| **Card** | `--radius-lg`, `--shadow-lg`, 2px border; optional corner "tape" doodle via a rotated pseudo-element. |
| **Nav** | A single wobbly underline (`border-bottom` with the wobble box-shadow trick) tracks the active link instead of a pill background. |
| **Modal** | Larger sketch shadow (`--shadow-lg`) and a slightly rotated (-0.5deg) card to sell the "pinned index card" feel. |
| **Table** | Rows separated by dashed hand-drawn-style borders (`border-bottom: 2px dashed var(--color-border)`); no zebra striping — keep it looking like ruled paper. |
| **Tooltip** | Small sketch bubble with a hand-drawn triangle tail (clip-path), `--shadow-sm`. |
| **Badge** | `--color-marker` swipe background behind text, no border, `--radius-pill` skipped in favor of the sketch radius for character. |
| **Toggle** | Track is a wobbly pill outline; knob is a filled circle that "jumps" with `--ease-standard`'s overshoot on state change. |
| **Loading** | An animated dashed-circle spinner (`stroke-dasharray`) that looks pencil-drawn, or a wiggling underline bar. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Script/cursive `--font-display` must never carry body copy or form labels — restrict it to headlines; body text stays on `--font-sans` at `--text-base` or larger for legibility.
- The 2px hand-drawn border is the only affordance many components have (no fill change) — verify it still meets 3:1 non-text contrast against `--color-bg` with `contrast_check.py`.
- Wobble/overshoot easing (`--ease-standard`) should respect `prefers-reduced-motion: reduce` by dropping to a simple linear fade — the bounce is charming, not essential.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Vary corner radii per-corner so nothing looks like a perfect CSS rectangle.
- ✅ Use hard offset shadows (no blur) consistently — mixing soft and hard shadows breaks the pen-and-paper illusion.
- ✅ Reserve the marker-swipe highlight for one emphasized phrase per view, not every heading.

## Don't

- ❌ Use a real SVG-filter "roughen" effect on every element — it's expensive and unnecessary once the radius/shadow trick sells the look.
- ❌ Put cursive `--font-display` in dense UI copy like table cells or nav labels.
- ❌ Round every corner identically — that reads as normal rounded-corner flat design, not hand-drawn.

## Don't confuse this with…

*Commonly confused neighbors:* papercut, blueprint.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
