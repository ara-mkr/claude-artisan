# Webcore / Old Web — Implementation Spec

*Aliases:* oldweb, internetcore, Web 1.0  
*Slug:* `webcore` · *Category:* niche · *Era:* 2019–present (evokes 1997–2005)

**Origin.** Nostalgia for early personal internet.

**Reference example.** GeoCities/Angelfire pages; Neocities revival.

## Signature move(s)

Windows-95-era chrome: `--radius-*` is 0 everywhere, and every raised surface gets a beveled inset/outset border (`--bevel-outset`, `--bevel-inset`, `--shadow-sm`/`--shadow-md` as inset highlight+shadow pairs) instead of a soft drop shadow. Sit it all on a tiled magenta `--tile-bg` conic gradient — the digital equivalent of a GeoCities background GIF.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- GeoCities clutter, tiled backgrounds, GIFs
- Guestbooks, hit counters, 'under construction'
- Comic Sans, marquee, bevel buttons
- DIY, chaotic, nostalgic

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/webcore.css`.)

```css
/* Webcore / Old Web — design tokens (generated from style_catalog.json) */
/* 2019–present (evokes 1997–2005) | Nostalgia for early personal internet. */
:root {
  /* color */
  --color-bg: #ff00ff;
  --color-surface: #c0c0c0;
  --color-surface-strong: #e0e0e0;
  --color-border: #000080;
  --color-text: #000000;
  --color-text-muted: #333366;
  --color-primary: #0000ff;
  --color-accent: #00ff00;
  --color-link-visited: #800080;
  /* radius */
  --radius-sm: 0px;
  --radius-md: 0px;
  --radius-lg: 0px;
  --radius-pill: 0px;
  /* shadow */
  --shadow-sm: inset -1px -1px 0 #808080, inset 1px 1px 0 #ffffff;
  --shadow-md: inset -2px -2px 0 #808080, inset 2px 2px 0 #ffffff;
  --shadow-lg: 4px 4px 0 #000000;
  /* font */
  --font-sans: 'Comic Sans MS', 'Comic Neue', cursive;
  --font-display: 'Comic Sans MS', 'Impact', cursive;
  --font-mono: 'Courier New', monospace;
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
  --ease-standard: linear;
  /* extra (signature gradients, composite borders, filters) */
  --tile-bg: repeating-conic-gradient(#ff00ff 0% 25%, #cc00cc 0% 50%) 0 0/24px 24px;
  --bevel-outset: 2px outset #c0c0c0;
  --bevel-inset: 2px inset #c0c0c0;
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Webcore / Old Web — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#ff00ff",
        "surface": "#c0c0c0",
        "surface-strong": "#e0e0e0",
        "border": "#000080",
        "text": "#000000",
        "text-muted": "#333366",
        "primary": "#0000ff",
        "accent": "#00ff00",
        "link-visited": "#800080",
      },
      borderRadius: {
        "sm": "0px",
        "md": "0px",
        "lg": "0px",
        "pill": "0px",
      },
      boxShadow: {
        "sm": "inset -1px -1px 0 #808080, inset 1px 1px 0 #ffffff",
        "md": "inset -2px -2px 0 #808080, inset 2px 2px 0 #ffffff",
        "lg": "4px 4px 0 #000000",
      },
      fontFamily: {
        "sans": ["'Comic Sans MS'", "'Comic Neue'", "cursive"],
        "display": ["'Comic Sans MS'", "'Impact'", "cursive"],
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
        "standard": "linear",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --tile-bg: repeating-conic-gradient(#ff00ff 0% 25%, #cc00cc 0% 50%) 0 0/24px 24px;
//   --bevel-outset: 2px outset #c0c0c0;
//   --bevel-inset: 2px inset #c0c0c0;
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Gray (`--color-surface`) rectangle, `--bevel-outset` border, flips to `--bevel-inset` on `:active` — the literal Windows 95 push-button. |
| **Input** | White/gray field with `--bevel-inset` (sunken look), black 1px `--color-border`, Comic Sans placeholder. |
| **Card** | Rectangular `--color-surface-strong` panel, `--shadow-lg` hard offset shadow, thin navy border — like a desktop window. |
| **Nav** | A gray beveled toolbar strip with blue/purple/visited link colors exactly like default browser link states. |
| **Modal** | A titlebar-style window: blue titlebar bar, gray body, bevel border, tiny X close button. |
| **Table** | Classic HTML table with visible 1px navy borders on every cell — no modern spacing. |
| **Tooltip** | A yellow rectangular "title attribute" style balloon, hard 1px border, no radius. |
| **Badge** | A blinking "NEW!" or hit-counter style rectangle in `--color-accent` green on black. |
| **Toggle** | A literal checkbox styled with `--bevel-inset`, not a modern switch — stay period-accurate. |
| **Loading** | An animated GIF-style spinning globe/hourglass cursor, or a marquee "loading..." text (respect reduced-motion with a static frame). |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- The magenta `--tile-bg` background must never sit directly behind body text — always place text on the solid `--color-surface`/`--color-surface-strong` gray, verified with `contrast_check.py`.
- Comic Sans and Impact are fine for short display text but hurt long-form legibility — cap body copy length and keep `--font-mono`/system fallbacks in the stack.
- Blinking/marquee effects are a seizure and distraction risk — gate every one behind `prefers-reduced-motion` and cap blink rate well under 3Hz, or replace with a static "NEW" badge.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Use real bevel borders (inset/outset) on every raised or pressed surface — this is the load-bearing signature move.
- ✅ Keep radius at 0 everywhere; rounded corners instantly break the illusion.
- ✅ Lean into period-accurate link colors (blue unvisited, purple visited).

## Don't

- ❌ Add drop shadows or blur — 90s web chrome only knew hard bevels and solid offset shadows.
- ❌ Overuse blinking/marquee text past a novelty accent — it becomes unusable and inaccessible fast.
- ❌ Smooth the palette into modern flat colors — the saturated magenta/lime/navy clash is the point.

## Don't confuse this with…

*Commonly confused neighbors:* y2k-futurism, kidcore.

vs y2k-futurism: y2k-futurism is chrome/holographic/optimistic-future; webcore is flat, beveled, and deliberately amateur-DIY. vs kidcore: kidcore is bright and toy-like but modern/rounded; webcore is specifically period browser chrome (bevels, hit counters, guestbooks).

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
