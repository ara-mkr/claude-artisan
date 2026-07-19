# Memphis Design — Implementation Spec

*Aliases:* Memphis Group, Memphis Milano  
*Slug:* `memphis-design` · *Category:* historical · *Era:* 1981–1987

**Origin.** Memphis Group, Milan (Ettore Sottsass).

**Reference example.** Sottsass Carlton bookcase; 1980s MTV graphics.

## Signature move(s)

Playful clashing colors + bold geometric shapes with squiggles, zigzags, confetti, polka dots, and black-and-white grids. Anti-'good-taste' 1980s postmodern exuberance.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Playful clashing colors and bold geometric shapes
- Squiggles, zigzags, confetti, polka dots
- Black-and-white grids and patterns
- Anti-'good taste' postmodern exuberance

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/memphis-design.css`.)

```css
/* Memphis Design — design tokens (generated from style_catalog.json) */
/* 1981–1987 | Memphis Group, Milan (Ettore Sottsass). */
:root {
  /* color */
  --color-bg: #fdf6e3;
  --color-surface: #ffffff;
  --color-text: #1a1a2e;
  --color-text-muted: #575780;
  --color-primary: #ff2e63;
  --color-accent: #08d9d6;
  --color-yellow: #ffde22;
  --color-purple: #8a4fff;
  --color-black: #252a34;
  /* radius */
  --radius-sm: 0px;
  --radius-md: 8px;
  --radius-lg: 20px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-hard: 6px 6px 0 #252a34;
  /* font */
  --font-sans: 'Poppins', 'Futura', system-ui, sans-serif;
  --font-display: 'Righteous', 'Poppins', sans-serif;
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
  --squiggle: #ff2e63;
  --confetti: #08d9d6 #ffde22 #8a4fff;
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Memphis Design — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#fdf6e3",
        "surface": "#ffffff",
        "text": "#1a1a2e",
        "text-muted": "#575780",
        "primary": "#ff2e63",
        "accent": "#08d9d6",
        "yellow": "#ffde22",
        "purple": "#8a4fff",
        "black": "#252a34",
      },
      borderRadius: {
        "sm": "0px",
        "md": "8px",
        "lg": "20px",
        "pill": "999px",
      },
      boxShadow: {
        "hard": "6px 6px 0 #252a34",
      },
      fontFamily: {
        "sans": ["'Poppins'", "'Futura'", "system-ui", "sans-serif"],
        "display": ["'Righteous'", "'Poppins'", "sans-serif"],
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
//   --squiggle: #ff2e63;
//   --confetti: #08d9d6 #ffde22 #8a4fff;
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Bright fill with a squiggle or dot accent; often a hard offset shadow. |
| **Input** | Rounded or square field on a patterned background; bold border. |
| **Card** | Bright card scattered with Memphis motifs (squiggle, triangle, confetti). |
| **Nav** | Playful bar with clashing colors and a pattern strip. |
| **Modal** | Bright panel with confetti/geometric decoration. |
| **Table** | Kept simpler; header in a Memphis color, maybe a dotted rule. |
| **Tooltip** | Small bright chip. |
| **Badge** | Bright pill, possibly with a pattern. |
| **Toggle** | Colorful pill toggle. |
| **Loading** | Bouncing geometric confetti / squiggle animation. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Busy patterns behind text destroy contrast — keep text on a solid patch and verify.
- Lots of motion/pattern can overwhelm; provide calm zones and reduced-motion.
- Don't encode meaning in the decorative shapes.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Commit to clashing color and geometric motifs.
- ✅ Use black-and-white grid/dot patterns as counterpoint.
- ✅ Keep text areas clean amid the chaos.

## Don't

- ❌ Confuse Memphis (patterns/motifs) with neubrutalism (borders/shadows).
- ❌ Put body text directly over busy patterns.
- ❌ Use muted/tasteful palettes — Memphis is loud.

## Don't confuse this with…

*Commonly confused neighbors:* neubrutalism, postmodernism, pop-art.

vs pop-art: Pop Art references mass-media imagery (Ben-Day dots, comics); Memphis is abstract geometric pattern-play. vs neubrutalism: Memphis = 80s decorative patterns; neubrutalism = modern border/shadow UI.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
