# Neubrutalism — Implementation Spec

*Aliases:* neo-brutalism, new brutalism UI  
*Slug:* `neubrutalism` · *Category:* brutalist · *Era:* 2020–present

**Origin.** Rose with Gumroad's 2021 redesign; heavily used by Figma community.

**Reference example.** Gumroad (2021 redesign); Figma marketing; many indie SaaS.

## Signature move(s)

Thick solid black borders + a hard OFFSET drop shadow (no blur) that the element slides into on press. Loud, clashing, saturated flat fills. Apply the border+hard-shadow pair to every interactive surface.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Thick solid black borders and hard offset drop shadows (no blur)
- Loud, clashing saturated colors and flat fills
- Zero-to-chunky border-radius, bold grotesk type
- Playful, intentionally 'ugly-cute', high energy

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/neubrutalism.css`.)

```css
/* Neubrutalism — design tokens (generated from style_catalog.json) */
/* 2020–present | Rose with Gumroad's 2021 redesign; heavily used by Figma community. */
:root {
  /* color */
  --color-bg: #fef6e4;
  --color-surface: #ffffff;
  --color-surface-2: #fde68a;
  --color-text: #0a0a0a;
  --color-text-muted: #3d3d3d;
  --color-primary: #ffde00;
  --color-accent: #ff5c00;
  --color-blue: #3b82f6;
  --color-green: #22c55e;
  --color-pink: #ff5eb3;
  --color-border: #0a0a0a;
  /* radius */
  --radius-sm: 0px;
  --radius-md: 6px;
  --radius-lg: 12px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-hard-sm: 3px 3px 0 #0a0a0a;
  --shadow-hard: 6px 6px 0 #0a0a0a;
  --shadow-hard-lg: 10px 10px 0 #0a0a0a;
  --shadow-hard-primary: 6px 6px 0 #ff5c00;
  /* font */
  --font-sans: 'Space Grotesk', 'Archivo', system-ui, sans-serif;
  --font-display: 'Archivo Black', 'Space Grotesk', sans-serif;
  --font-mono: 'Space Mono', monospace;
  /* text */
  --text-xs: 0.8rem;
  --text-sm: 0.95rem;
  --text-base: 1.05rem;
  --text-lg: 1.25rem;
  --text-xl: 1.6rem;
  --text-2xl: 2.1rem;
  --text-3xl: 2.8rem;
  --text-4xl: 3.8rem;
  --text-5xl: 5rem;
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
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
  --ease-snap: steps(1, end);
  /* extra (signature gradients, composite borders, filters) */
  --border: 3px solid #0a0a0a;
  --border-thick: 4px solid #0a0a0a;
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Neubrutalism — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#fef6e4",
        "surface": "#ffffff",
        "surface-2": "#fde68a",
        "text": "#0a0a0a",
        "text-muted": "#3d3d3d",
        "primary": "#ffde00",
        "accent": "#ff5c00",
        "blue": "#3b82f6",
        "green": "#22c55e",
        "pink": "#ff5eb3",
        "border": "#0a0a0a",
      },
      borderRadius: {
        "sm": "0px",
        "md": "6px",
        "lg": "12px",
        "pill": "999px",
      },
      boxShadow: {
        "hard-sm": "3px 3px 0 #0a0a0a",
        "hard": "6px 6px 0 #0a0a0a",
        "hard-lg": "10px 10px 0 #0a0a0a",
        "hard-primary": "6px 6px 0 #ff5c00",
      },
      fontFamily: {
        "sans": ["'Space Grotesk'", "'Archivo'", "system-ui", "sans-serif"],
        "display": ["'Archivo Black'", "'Space Grotesk'", "sans-serif"],
        "mono": ["'Space Mono'", "monospace"],
      },
      fontSize: {
        "xs": "0.8rem",
        "sm": "0.95rem",
        "base": "1.05rem",
        "lg": "1.25rem",
        "xl": "1.6rem",
        "2xl": "2.1rem",
        "3xl": "2.8rem",
        "4xl": "3.8rem",
        "5xl": "5rem",
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
        "standard": "cubic-bezier(0.2, 0, 0, 1)",
        "snap": "steps(1, end)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --border: 3px solid #0a0a0a;
//   --border-thick: 4px solid #0a0a0a;
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Border (3–4px) + `--shadow-hard`; hover translates 3px toward the shadow (shrinking it), active fully seats it. Bold display font. |
| **Input** | Bordered field with a small hard shadow; focus deepens the shadow. |
| **Card** | Bordered block with `--shadow-hard`, often in a bright fill; slight rotation for playfulness. |
| **Nav** | Bright bar with a thick bottom border; chunky bold links/buttons. |
| **Modal** | Bordered card with a big hard shadow over a flat (often colored) scrim. |
| **Table** | Fully bordered grid, thick outer border, bold header row fill. |
| **Tooltip** | Bordered chip with a small hard shadow. |
| **Badge** | Bordered uppercase tag with a tiny hard shadow. |
| **Toggle** | Bordered track, bordered circular knob that snaps across (steps easing). |
| **Loading** | Bordered progress bar filling in a bright color; chunky skeleton blocks. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Loud saturated fills can crush text contrast — keep near-black text on light fills, white on dark, and verify with `contrast_check.py`.
- Never rely on the hard shadow alone for focus — add a distinct focus outline in a contrasting color.
- Reduce the translate/snap motion under `prefers-reduced-motion`.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Repeat the border weight and shadow offset system-wide.
- ✅ Use 3–5 clashing but intentional saturated colors.
- ✅ Pair a heavy display font with a clean grotesk body.

## Don't

- ❌ Blur the shadow — it must be a hard offset.
- ❌ Mix in soft/rounded/gradient elements.
- ❌ Let the loud fills drop text below 4.5:1.

## Don't confuse this with…

*Commonly confused neighbors:* brutalism, claymorphism, memphis-design.

vs claymorphism: neubrutalism is flat/bordered/hard-shadowed and loud; claymorphism is soft/puffy/pastel. vs memphis: Memphis is a 1980s *pattern* language (squiggles, confetti); neubrutalism is a border+shadow *UI* system.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
