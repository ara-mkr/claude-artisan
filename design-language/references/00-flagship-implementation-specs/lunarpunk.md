# Lunarpunk — Implementation Spec

*Aliases:* night solarpunk, moonpunk, dark solarpunk  
*Slug:* `lunarpunk` · *Category:* retrofuturism · *Era:* 2020s–present

**Origin.** Emerged online ~2020s as the nocturnal, mystical counterpart to solarpunk within eco-futurist communities.

**Reference example.** Lunarpunk art communities on Tumblr/DeviantArt; 'nocturnal eco-futurism' zine covers.

## Signature move(s)

Where solarpunk paints appropriate-tech in noon sunlight, lunarpunk paints it at night: deep indigo-to-black grounds lit only by soft bioluminescent glow — teal and violet halos with feathered, blurred edges (never a hard neon stroke) — wrapped around dark botanical silhouettes (moth wings, moonflowers, fern fronds) and celestial motifs (star charts, phases of the moon).

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Moonlit bioluminescence over deep indigo/black
- Dark botanical and celestial motifs (moths, moonflowers, star charts)
- Appropriate-tech-at-night: solar batteries, glow-lanterns, quiet machinery
- Soft glowing edges instead of hard neon; mystical over corporate

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/lunarpunk.css`.)

```css
/* Lunarpunk — design tokens (generated from style_catalog.json) */
/* 2020s–present | Nocturnal, mystical counterpart to solarpunk. */
:root {
  /* color */
  --color-bg: #0a0e1a;
  --color-surface: #12182b;
  --color-surface-2: #1a2340;
  --color-text: #e8ecf7;
  --color-text-muted: #9aa4c4;
  --color-primary: #2dd4bf;
  --color-accent: #a78bfa;
  --color-moonsilver: #c7d2e0;
  --color-nightbloom: #5b4b8a;
  /* radius */
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 28px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-glow-teal: 0 0 24px rgba(45,212,191,0.35), 0 8px 24px rgba(0,0,0,0.4);
  --shadow-glow-violet: 0 0 20px rgba(167,139,250,0.30), 0 8px 20px rgba(0,0,0,0.4);
  /* blur */
  --blur-soft: 18px;
  /* font */
  --font-sans: 'Spectral', 'Cormorant Garamond', system-ui, serif;
  --font-display: 'Cormorant Garamond', 'Spectral', serif;
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
  --ease-standard: cubic-bezier(0.22, 0.61, 0.36, 1);
  /* extra (signature gradients, composite borders, filters) */
  --moonlight-gradient: radial-gradient(circle at 80% 0%, rgba(199,210,224,0.18), transparent 45%);
  --bioluminescent-veil: linear-gradient(180deg, rgba(45,212,191,0.08), rgba(167,139,250,0.08));
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Lunarpunk — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0a0e1a",
        "surface": "#12182b",
        "surface-2": "#1a2340",
        "text": "#e8ecf7",
        "text-muted": "#9aa4c4",
        "primary": "#2dd4bf",
        "accent": "#a78bfa",
        "moonsilver": "#c7d2e0",
        "nightbloom": "#5b4b8a",
      },
      borderRadius: {
        "sm": "8px",
        "md": "16px",
        "lg": "28px",
        "pill": "999px",
      },
      boxShadow: {
        "glow-teal": "0 0 24px rgba(45,212,191,0.35), 0 8px 24px rgba(0,0,0,0.4)",
        "glow-violet": "0 0 20px rgba(167,139,250,0.30), 0 8px 20px rgba(0,0,0,0.4)",
      },
      fontFamily: {
        "sans": ["'Spectral'", "'Cormorant Garamond'", "system-ui", "serif"],
        "display": ["'Cormorant Garamond'", "'Spectral'", "serif"],
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
        "standard": "cubic-bezier(0.22, 0.61, 0.36, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --moonlight-gradient: radial-gradient(circle at 80% 0%, rgba(199,210,224,0.18), transparent 45%);
//   --bioluminescent-veil: linear-gradient(180deg, rgba(45,212,191,0.08), rgba(167,139,250,0.08));
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Dark surface fill with a soft teal glow shadow; dark-navy label text on the primary (glow) fill for contrast. |
| **Input** | Deep surface well with a thin moonsilver border that blooms into a soft teal glow on focus. |
| **Card** | Indigo-black surface with `--moonlight-gradient` washed across the top corner and a violet glow shadow. |
| **Nav** | Slim dark bar with a faint bioluminescent underglow along the bottom edge. |
| **Modal** | Panel fades in through the bioluminescent veil gradient with a soft blur backdrop. |
| **Table** | Flat dark rows; only the header row and hovered row pick up a faint teal glow. |
| **Tooltip** | Small violet-glow bubble, softly blurred edge, no hard outline. |
| **Badge** | Pill with a thin teal border and a faint inner glow, no solid fill. |
| **Toggle** | Dark track; the knob glows teal when on, sits dim silver when off. |
| **Loading** | Pulsing bioluminescent dot(s), like a firefly or moth wing beat. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Verify white/light text against the deep indigo-black background with `contrast_check.py` — it passes easily, but glow shadows must never substitute for text contrast.
- Glow-on-glow (e.g. violet text on a violet-glow surface) can wash out; keep body text on the flat `--color-text` value, reserve glow for decoration.
- Pulsing/breathing glow animations must respect `prefers-reduced-motion` — fall back to a static glow.
- Keep focus rings solid (moonsilver or teal) and offset; the ambient glow is not a substitute for a visible focus indicator.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Keep the palette nocturnal: indigo/black grounds, never a bright daylight background.
- ✅ Feather every glow (blur, radial gradient) — no hard neon edges.
- ✅ Reserve the violet accent for rare, special moments (it reads as more mystical the less it's used).

## Don't

- ❌ Reuse cyberpunk's hard neon-on-black — lunarpunk glow is soft and diffuse, not a scanline glare.
- ❌ Let bioluminescent glow shadows carry text contrast — text must stand on its own against the flat background.
- ❌ Add daylight elements (sun, warm gold) — that's solarpunk's territory, not lunarpunk's.

## Don't confuse this with…

*Commonly confused neighbors:* solarpunk, cyberpunk, dreampunk.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
