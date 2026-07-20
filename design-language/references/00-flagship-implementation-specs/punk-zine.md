# Punk Zine / Cut-and-Paste — Implementation Spec

*Aliases:* zine, ransom note, DIY punk  
*Slug:* `punk-zine` · *Category:* historical · *Era:* 1976–1985

**Origin.** UK/US punk subculture (Jamie Reid, Sex Pistols).

**Reference example.** Jamie Reid Sex Pistols "God Save the Queen"; punk fanzines.

## Signature move(s)

A hard black offset shadow with zero blur — `3px 3px 0 #0d0d0d` scaling up to `8px 8px 0` — simulating a cut-out scrap of paper photocopied and Pritt-sticked to the page, plus a fine xerox-grain texture washing over the whole body. Headlines mix a serif "ransom note" clipping (`--font-display: 'Times New Roman'`) against a plain sans body (`--font-sans: Arial`), as if two different magazines were cut up for the same sentence. Cards get a literal tape strip pseudo-element and a slight rotation, so nothing sits perfectly square.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Photocopied, torn, cut-and-paste collage
- Ransom-note lettering from clippings
- High-contrast xerox degradation
- Anti-authority DIY energy

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/punk-zine.css`.)

```css
/* Punk Zine / Cut-and-Paste — design tokens (generated from style_catalog.json) */
/* 1976–1985 | UK/US punk subculture (Jamie Reid, Sex Pistols). */
:root {
  /* color: high-contrast xerox degradation */
  --color-bg: #efefe8;
  --color-surface: #ffffff;
  --color-surface-strong: #f5f2e6;
  --color-border: #0d0d0d;
  --color-text: #0d0d0d;
  --color-text-muted: #3d3d3a;
  --color-primary: #e60023;
  --color-accent: #f5d000;
  --color-tape: rgba(245, 208, 0, 0.55);
  /* radius: none, torn scraps aren't rounded */
  --radius-sm: 0px;
  --radius-md: 0px;
  --radius-lg: 0px;
  --radius-pill: 999px;
  /* shadow: hard xerox offset, no blur */
  --shadow-sm: 3px 3px 0 #0d0d0d;
  --shadow-md: 5px 5px 0 #0d0d0d;
  --shadow-lg: 8px 8px 0 #0d0d0d;
  /* font: ransom-note mixed clippings */
  --font-sans: Arial, 'Helvetica Neue', sans-serif;
  --font-display: 'Times New Roman', Georgia, serif;
  --font-mono: 'Courier New', ui-monospace, monospace;
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
  /* extra: xerox noise texture + ransom-note letter jitter */
  --xerox-noise: repeating-linear-gradient(0deg, rgba(13,13,13,0.05) 0px, transparent 1px, transparent 3px), repeating-linear-gradient(90deg, rgba(13,13,13,0.03) 0px, transparent 1px, transparent 4px);
  --tape-strip: linear-gradient(var(--color-tape), var(--color-tape));
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Punk Zine / Cut-and-Paste — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#efefe8",
        "surface": "#ffffff",
        "surface-strong": "#f5f2e6",
        "border": "#0d0d0d",
        "text": "#0d0d0d",
        "text-muted": "#3d3d3a",
        "primary": "#e60023",
        "accent": "#f5d000",
        "tape": "rgba(245, 208, 0, 0.55)",
      },
      borderRadius: {
        "sm": "0px",
        "md": "0px",
        "lg": "0px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "3px 3px 0 #0d0d0d",
        "md": "5px 5px 0 #0d0d0d",
        "lg": "8px 8px 0 #0d0d0d",
      },
      fontFamily: {
        "sans": ["Arial", "'Helvetica Neue'", "sans-serif"],
        "display": ["'Times New Roman'", "Georgia", "serif"],
        "mono": ["'Courier New'", "ui-monospace", "monospace"],
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
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --xerox-noise: repeating-linear-gradient(0deg, rgba(13,13,13,0.05) 0px, transparent 1px, transparent 3px), repeating-linear-gradient(90deg, rgba(13,13,13,0.03) 0px, transparent 1px, transparent 4px);
//   --tape-strip: linear-gradient(var(--color-tape), var(--color-tape));
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | 2px black border + `--shadow-sm`, `--font-display` clipping type; hover shifts `translate(-2px,-2px) rotate(1deg)` and grows to `--shadow-md`, active seats it to `1px 1px 0`. |
| **Input** | Mono `--font-mono` field (looks typewritten), 2px border, `--shadow-sm`; focus swaps border to `--color-primary` and deepens to `--shadow-md`. |
| **Card** | The hero: `--shadow-lg`, slight `rotate(0.7deg)`, and a literal `--tape-strip` pseudo-element pinning it to the page like a real cut-out. |
| **Nav** | Rotated `-0.4deg`, `--shadow-sm`, mixed-weight logotype next to plain sans links — the masthead reads assembled, not designed. |
| **Modal** | Largest offset (`--shadow-lg`) over a flat dark scrim; keep the modal itself axis-aligned (no rotation) so the one alarming element is legible. |
| **Table** | Thick 2px rules between rows instead of hairlines; header row in `--color-accent` to read like a highlighter pass on a flyer. |
| **Tooltip** | Small clipped-paper chip, 2px border, `--shadow-sm`, no rotation — it must stay legible and quick to parse. |
| **Badge** | Uppercase, `--color-accent` fill, 2px border, `--shadow-sm` — reads like a rubber-stamped sticker. |
| **Toggle** | Bordered rectangular track (not pill) that snaps in `steps(3, end)` rather than easing, mimicking a mechanical stamp. |
| **Loading** | A torn strip of xerox-noise texture sliding left-to-right in discrete steps rather than a smooth spinner. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Ransom-note type mixing multiple display faces at small sizes is a real legibility risk — reserve the mixed-clipping treatment for headlines only; body copy stays in the plain `--font-sans` at full contrast.
- The `--xerox-noise` texture must stay under ~5% opacity behind body text, or verify contrast with `contrast_check.py` including the texture's darkest pixels composited in.
- `steps(3, end)` motion reads as glitchy/strobing — respect `prefers-reduced-motion` and drop to a simple opacity fade.
- Rotated cards/nav must not rotate focus outlines out of alignment with their target — keep `:focus-visible` outlines axis-aligned and high-contrast (`--color-accent`) regardless of parent rotation.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Repeat the exact hard-offset shadow value across every raised surface.
- ✅ Clash exactly two fonts (one serif clipping, one plain sans) — no third.
- ✅ Use rotation sparingly (under 1°) so it reads as "taped down," not "spinning."

## Don't

- ❌ Blur the shadow — any blur kills the photocopy illusion instantly.
- ❌ Rotate interactive controls enough to misalign their click target from their visual bounds.
- ❌ Let xerox-grain texture sit directly under long-form body text without a contrast check.

## Don't confuse this with…

*Commonly confused neighbors:* dada, grunge.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
