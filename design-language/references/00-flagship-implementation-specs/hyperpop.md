# Hyperpop Visuals — Implementation Spec

*Aliases:* hyperpop, glitchcore pop
*Slug:* `hyperpop` · *Category:* niche · *Era:* 2019–present

**Origin.** Hyperpop music-scene visual identity.

**Reference example.** 100 gecs; SOPHIE-adjacent visuals.

## Signature move(s)

A chromatic-aberration glitch offset — a `--candy-gradient` fill sliding across every surface plus a doubled `--glitch-text-shadow` (magenta/cyan split) on headline type — layered onto near-black surfaces edged in hot pink. Interactive elements get a bouncy overshoot easing (`--ease-standard: cubic-bezier(0.68, -0.55, 0.27, 1.55)`) so nothing settles calmly; it should feel like the UI is slightly overdriven.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Oversaturated candy + glitch chaos
- 3D chrome, distorted type, motion blur
- Ironic maximal internet-native energy
- Loud, fast, chaotic

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/hyperpop.css`.)

```css
/* Hyperpop Visuals — design tokens (generated from style_catalog.json) */
/* 2019–present | Hyperpop music-scene visual identity. */
:root {
  /* color */
  --color-bg: #0d0018;
  --color-surface: #1a0330;
  --color-surface-strong: #290548;
  --color-border: #ff2fd0;
  --color-text: #fbf3ff;
  --color-text-muted: #d6a9f0;
  --color-primary: #ff2fd0;
  --color-accent: #2ff3ff;
  --color-lime: #c6ff2f;
  /* radius */
  --radius-sm: 4px;
  --radius-md: 10px;
  --radius-lg: 18px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 0 0 2px var(--color-primary), 0 0 14px rgba(255,47,208,0.5);
  --shadow-md: -2px 0 0 var(--color-accent), 2px 0 0 var(--color-primary), 0 8px 24px rgba(255,47,208,0.35);
  --shadow-lg: -3px 0 0 var(--color-accent), 3px 0 0 var(--color-primary), 0 16px 42px rgba(255,47,208,0.4);
  /* font */
  --font-sans: 'Space Grotesk', 'Arial', sans-serif;
  --font-display: 'Rubik', 'Chrome Bold', 'Arial Black', sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, monospace;
  /* text */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.4rem;
  --text-2xl: 1.9rem;
  --text-3xl: 2.6rem;
  --text-4xl: 3.6rem;
  --text-5xl: 5.2rem;
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
  --ease-standard: cubic-bezier(0.68, -0.55, 0.27, 1.55);
  /* extra */
  --candy-gradient: linear-gradient(120deg, var(--color-primary), var(--color-accent) 50%, var(--color-lime));
  --glitch-text-shadow: -1px 0 var(--color-accent), 1px 0 var(--color-primary);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Hyperpop Visuals — Tailwind theme fragment (generated).
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0d0018",
        "surface": "#1a0330",
        "surface-strong": "#290548",
        "border": "#ff2fd0",
        "text": "#fbf3ff",
        "text-muted": "#d6a9f0",
        "primary": "#ff2fd0",
        "accent": "#2ff3ff",
        "lime": "#c6ff2f",
      },
      borderRadius: {
        "sm": "4px",
        "md": "10px",
        "lg": "18px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 0 0 2px #ff2fd0, 0 0 14px rgba(255,47,208,0.5)",
        "md": "-2px 0 0 #2ff3ff, 2px 0 0 #ff2fd0, 0 8px 24px rgba(255,47,208,0.35)",
        "lg": "-3px 0 0 #2ff3ff, 3px 0 0 #ff2fd0, 0 16px 42px rgba(255,47,208,0.4)",
      },
      fontFamily: {
        "sans": ["'Space Grotesk'", "'Arial'", "sans-serif"],
        "display": ["'Rubik'", "'Chrome Bold'", "'Arial Black'", "sans-serif"],
        "mono": ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem", "sm": "0.875rem", "base": "1rem", "lg": "1.125rem",
        "xl": "1.4rem", "2xl": "1.9rem", "3xl": "2.6rem", "4xl": "3.6rem", "5xl": "5.2rem",
      },
      spacing: {
        "1": "4px", "2": "8px", "3": "12px", "4": "16px", "6": "24px",
        "8": "32px", "12": "48px", "16": "64px", "24": "96px",
      },
      transitionTimingFunction: {
        "standard": "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only:
//   --candy-gradient: linear-gradient(120deg, var(--color-primary), var(--color-accent) 50%, var(--color-lime));
//   --glitch-text-shadow: -1px 0 var(--color-accent), 1px 0 var(--color-primary);
```

## Component rules (the 10 primitives)

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--candy-gradient` fill, `--radius-md`, `--shadow-sm` neon ring; hover snaps with `--ease-standard` overshoot and swaps to `--shadow-md`. |
| **Input** | `--color-surface` fill, `--color-border` outline; focus adds `--glitch-text-shadow`-style double-offset ring in primary/accent. |
| **Card** | `--color-surface-strong`, `--radius-lg`, `--shadow-md` split-color offset shadow, optional `--candy-gradient` corner bleed. |
| **Nav** | `--color-bg` bar, wordmark set in `--font-display` with `--glitch-text-shadow` applied permanently (not just on hover). |
| **Modal** | `--color-surface-strong`, `--radius-lg`, `--shadow-lg`, candy-gradient top edge bar. |
| **Table** | Flat `--color-surface` rows (glitch effects reserved for headings/CTAs, never dense data) with `--color-border` dividers. |
| **Tooltip** | Small `--color-bg` chip, `--color-primary` border, `--glitch-text-shadow` on the label text. |
| **Badge** | `--radius-pill` chip, solid `--color-lime` or `--color-accent` fill, dark text for contrast. |
| **Toggle** | Track uses `--candy-gradient` when on, `--color-surface-strong` when off; knob bounces via `--ease-standard`. |
| **Loading** | Glitchy RGB-split text or bar that jitters horizontally using the `--glitch-text-shadow` offset animated. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

- Provide `prefers-reduced-motion` overrides that disable the overshoot easing and glitch-jitter animations — the bouncy, RGB-split motion is exactly the kind that triggers motion sensitivity.
- `--glitch-text-shadow` splits color away from the glyph edge; never apply it to body text or long labels — restrict to short display headlines and verify the base text color still clears contrast on its own.
- Check `--color-text-muted` (#d6a9f0) against `--color-bg` (#0d0018) with `contrast_check.py` — light purple on near-black can fail at small sizes despite looking vivid.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Reserve the RGB-split glitch shadow for short display headlines, never body copy.
- ✅ Use the bouncy overshoot easing consistently on interactive feedback (buttons, toggles) so the chaos feels systematic.
- ✅ Keep data-dense surfaces (tables) flat and calm so the glitch energy stays legible where it matters.

## Don't

- ❌ Don't apply glitch shadows or candy gradients to paragraph text.
- ❌ Don't skip `prefers-reduced-motion` handling — this is one of the highest-motion styles in the catalog.
- ❌ Don't tone down the saturation "for taste" — muted hyperpop isn't hyperpop, it's just neon-lite.

## Don't confuse this with…

*Commonly confused neighbors:* maximalism, acid-graphics, glitch-art.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
