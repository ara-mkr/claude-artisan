# Cyberpunk — Implementation Spec

*Aliases:* cyber, high tech low life, neon noir  
*Slug:* `cyberpunk` · *Category:* retrofuturism · *Era:* 1982–present

**Origin.** Literary roots (Gibson 'Neuromancer' 1984); visual codex from Blade Runner (1982); revived by Cyberpunk 2077.

**Reference example.** Blade Runner; Cyberpunk 2077 UI; Ghost in the Shell.

## Signature move(s)

Neon glow (cyan/magenta) on near-black, dense HUD/mono type, hard clipped corners, and scanline overlays. Glow the borders and edges, not the fills. High-tech dystopian.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Neon glow (cyan/magenta) on near-black
- Dense HUD/glitch overlays, mono type, scanlines
- Rain-slick megacity noir, holograms
- High-contrast, dystopian, tech-saturated

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/cyberpunk.css`.)

```css
/* Cyberpunk — design tokens (generated from style_catalog.json) */
/* 1982–present | Literary roots (Gibson 'Neuromancer' 1984); visual codex from Blade Runner (1982); revived by Cyberpunk 2077. */
:root {
  /* color */
  --color-bg: #05010d;
  --color-surface: #0d0221;
  --color-surface-2: #160a2b;
  --color-text: #e8f9ff;
  --color-text-muted: #7a8fa6;
  --color-primary: #00fff5;
  --color-accent: #ff003c;
  --color-magenta: #ff00e6;
  --color-yellow: #faff00;
  --color-border: #00fff5;
  /* radius */
  --radius-sm: 0px;
  --radius-md: 2px;
  --radius-lg: 4px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-glow-cyan: 0 0 6px #00fff5, 0 0 18px rgba(0,255,245,0.6);
  --shadow-glow-magenta: 0 0 6px #ff00e6, 0 0 18px rgba(255,0,230,0.6);
  /* font */
  --font-sans: 'Rajdhani', 'Chakra Petch', system-ui, sans-serif;
  --font-display: 'Orbitron', 'Rajdhani', sans-serif;
  --font-mono: 'Share Tech Mono', ui-monospace, monospace;
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
  --ease-standard: steps(3, end);
  --ease-glitch: steps(2, jump-none);
  /* extra (signature gradients, composite borders, filters) */
  --scanline: repeating-linear-gradient(0deg, rgba(0,255,245,0.05) 0 1px, transparent 1px 3px);
  --neon-border: 1px solid #00fff5;
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Cyberpunk — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#05010d",
        "surface": "#0d0221",
        "surface-2": "#160a2b",
        "text": "#e8f9ff",
        "text-muted": "#7a8fa6",
        "primary": "#00fff5",
        "accent": "#ff003c",
        "magenta": "#ff00e6",
        "yellow": "#faff00",
        "border": "#00fff5",
      },
      borderRadius: {
        "sm": "0px",
        "md": "2px",
        "lg": "4px",
        "pill": "999px",
      },
      boxShadow: {
        "glow-cyan": "0 0 6px #00fff5, 0 0 18px rgba(0,255,245,0.6)",
        "glow-magenta": "0 0 6px #ff00e6, 0 0 18px rgba(255,0,230,0.6)",
      },
      fontFamily: {
        "sans": ["'Rajdhani'", "'Chakra Petch'", "system-ui", "sans-serif"],
        "display": ["'Orbitron'", "'Rajdhani'", "sans-serif"],
        "mono": ["'Share Tech Mono'", "ui-monospace", "monospace"],
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
        "standard": "steps(3, end)",
        "glitch": "steps(2, jump-none)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --scanline: repeating-linear-gradient(0deg, rgba(0,255,245,0.05) 0 1px, transparent 1px 3px);
//   --neon-border: 1px solid #00fff5;
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Transparent with a neon 1px border + glow; clipped corner; hover floods the neon fill. Uppercase mono/display. |
| **Input** | Dark field, neon border, mono text; focus intensifies the glow. |
| **Card** | Dark surface, neon border, clipped corners, faint scanlines. |
| **Nav** | Dark bar with a glowing accent underline; glitchy hover. |
| **Modal** | Dark panel with neon frame over a scanline scrim; glitch-in animation. |
| **Table** | Dark grid with neon rules; monospace numerals; row hover glow. |
| **Tooltip** | Neon-bordered dark chip. |
| **Badge** | Neon-outlined uppercase tag (often yellow for warnings). |
| **Toggle** | Neon track; glowing knob; 'on' in cyan. |
| **Loading** | Glitchy scanline bar or a neon HUD spinner. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Saturated neon on black can shimmer at small sizes — verify body text and prefer slightly desaturated neon for reading.
- Scanlines/glitch must respect `prefers-reduced-motion` (disable the overlay).
- Keep a non-glow focus indicator too (border-color change).

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Glow edges/borders, keep fills dark.
- ✅ Use monospace/techy display type and HUD framing.
- ✅ Add restrained scanlines/glitch as atmosphere.

## Don't

- ❌ Glow everything — it becomes an unreadable blur.
- ❌ Use light backgrounds.
- ❌ Animate constantly with no reduced-motion path.

## Don't confuse this with…

*Commonly confused neighbors:* synthwave, vaporwave, glitch-art.

vs synthwave: cyberpunk is dystopian HUD/neon-noir (function-heavy); synthwave is nostalgic 80s sunset-grid (mood-heavy). vs vaporwave: vaporwave is ironic/pastel consumer nostalgia, not techno-dystopia.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
