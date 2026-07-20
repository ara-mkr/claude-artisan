# Scene / Emo — Implementation Spec

*Aliases:* scene aesthetic, emo, 2000s scene  
*Slug:* `scene-emo` · *Category:* niche · *Era:* 2004–2012

**Origin.** Mid-2000s Myspace youth subculture.

**Reference example.** Myspace scene profiles; 2000s emo band art.

## Signature move(s)

Neon hot-pink text and borders glowing against near-black (`--shadow: 0 0 18px rgba(255,47,176,0.5)`), layered over a checkerboard background pattern (`--checkerboard`) and set in chaotic display fonts (Jokerman/Impact) — the loud, DIY, "customized Myspace profile" energy where nothing matches on purpose but everything glows.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Neon + black, hot pink, leopard, checkerboard
- Choppy hair, glittery graphics, hearts/skulls
- Comic-sans-adjacent chaos, sparkles
- Loud, angsty, DIY

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/scene-emo.css`.)

```css
/* Scene / Emo — design tokens (generated from style_catalog.json) */
/* 2004–2012 | Mid-2000s Myspace youth subculture. */
:root {
  /* color */
  --color-bg: #0a0a0c;
  --color-surface: #17151c;
  --color-surface-strong: #211c29;
  --color-border: #ff2fb0;
  --color-text: #f5f2fa;
  --color-text-muted: #b9aecb;
  --color-primary: #ff2fb0;
  --color-accent: #ccff00;
  --color-electric: #7a2fff;
  /* radius */
  --radius-sm: 2px;
  --radius-md: 10px;
  --radius-lg: 18px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 0 6px rgba(255,47,176,0.45);
  --shadow-md: 0 0 18px rgba(255,47,176,0.5), 0 4px 14px rgba(0,0,0,0.6);
  --shadow-lg: 0 0 32px rgba(255,47,176,0.55), 0 10px 26px rgba(0,0,0,0.7);
  /* font */
  --font-sans: 'Comic Sans MS', 'Chalkboard SE', 'Trebuchet MS', sans-serif;
  --font-display: 'Jokerman', 'Impact', 'Trebuchet MS', sans-serif;
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
  /* extra (checkerboard, neon text glow) */
  --checkerboard: repeating-conic-gradient(#1c1822 0% 25%, #0a0a0c 0% 50%) 0 0 / 16px 16px;
  --neon-text-glow: 0 0 8px rgba(255,47,176,0.8), 0 0 18px rgba(255,47,176,0.4);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Scene / Emo — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0a0a0c",
        "surface": "#17151c",
        "surface-strong": "#211c29",
        "border": "#ff2fb0",
        "text": "#f5f2fa",
        "text-muted": "#b9aecb",
        "primary": "#ff2fb0",
        "accent": "#ccff00",
        "electric": "#7a2fff",
      },
      borderRadius: {
        "sm": "2px",
        "md": "10px",
        "lg": "18px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 0 6px rgba(255,47,176,0.45)",
        "md": "0 0 18px rgba(255,47,176,0.5), 0 4px 14px rgba(0,0,0,0.6)",
        "lg": "0 0 32px rgba(255,47,176,0.55), 0 10px 26px rgba(0,0,0,0.7)",
      },
      fontFamily: {
        "sans": ["'Comic Sans MS'", "'Chalkboard SE'", "'Trebuchet MS'", "sans-serif"],
        "display": ["'Jokerman'", "'Impact'", "'Trebuchet MS'", "sans-serif"],
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

// Signature `extra` tokens are CSS-only (checkerboard/glow).
// Add them as CSS custom properties or arbitrary values:
//   --checkerboard: repeating-conic-gradient(#1c1822 0% 25%, #0a0a0c 0% 50%) 0 0 / 16px 16px;
//   --neon-text-glow: 0 0 8px rgba(255,47,176,0.8), 0 0 18px rgba(255,47,176,0.4);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--color-primary` fill or outline, `--shadow-sm` neon glow at rest, `--shadow-md` on hover; label text gets `--neon-text-glow`. |
| **Input** | `--color-surface` fill, `--color-border` (hot pink) 2px border; focus intensifies to `--shadow-md`. |
| **Card** | `--checkerboard` background at low opacity behind `--color-surface-strong`, `--shadow-md` glow border. |
| **Nav** | `--color-bg` bar with a checkerboard strip accent, active link gets `--neon-text-glow`. |
| **Modal** | `--radius-lg`, `--shadow-lg`, `--checkerboard` backdrop pattern visible around the edges. |
| **Table** | Keep this primitive the calmest: flat `--color-surface` rows, thin `--color-border` dividers, glow reserved for header only. |
| **Tooltip** | Small `--color-surface-strong` chip with `--shadow-sm` glow, `--color-electric` accent border. |
| **Badge** | `--radius-sm`, alternating `--color-primary`/`--color-accent`/`--color-electric` fills, tiny glow. |
| **Toggle** | Track = checkerboard pattern; active knob = neon `--color-primary` with `--shadow-sm` glow. |
| **Loading** | A pulsing neon-glow bar or spinning skull/star glyph (if illustration budget allows), synced to `--shadow-md` intensity change. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Comic Sans / Jokerman / Impact display fonts must never carry dense body copy or form instructions — restrict them to headlines and short glowing labels; keep actual body text on a plain, highly legible fallback even if it dilutes the chaos slightly.
- Neon glow text-shadow (`--neon-text-glow`) can reduce legibility at small sizes — verify body-adjacent text still passes `contrast_check.py` against `--color-bg` with the glow accounted for, and drop the glow below `--text-base` if it fails.
- The checkerboard pattern must stay at low opacity/contrast behind text-bearing surfaces — never place body text directly over full-strength `--checkerboard`.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Push hot-pink neon glow on every interactive element's focus/hover state — the glow is the primary affordance signal.
- ✅ Use the checkerboard pattern as a background texture at reduced opacity, not as a text backdrop.
- ✅ Mix in `--color-accent` (acid green) and `--color-electric` (violet) sparingly against the pink/black base for that "everything clashes on purpose" chaos.

## Don't

- ❌ Set body paragraphs in Comic Sans or Jokerman — reserve loud fonts for headlines only.
- ❌ Drop the neon glow shadows in favor of flat neutral ones — that erases the entire identity of the style.
- ❌ Place text directly on full-opacity checkerboard — it destroys legibility.

## Don't confuse this with…

*Commonly confused neighbors:* mcbling, kidcore, webcore.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
