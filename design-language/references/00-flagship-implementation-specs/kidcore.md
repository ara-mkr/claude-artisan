# Kidcore — Implementation Spec

*Aliases:* childcore  
*Slug:* `kidcore` · *Category:* niche · *Era:* 2018–present

**Origin.** Nostalgia for 90s/00s childhood.

**Reference example.** 90s kids' TV; Lisa Frank-adjacent.

## Signature move(s)

Hard black outlines + a rotating six-stop rainbow palette (`--color-rainbow-1` through `-6`) + a chunky offset shadow (`--shadow-sm/md/lg` all use flat `Npx Npx 0 var(--color-border)`, no blur). Every element looks like a sticker cut out and slapped onto the page.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Primary-color rainbows, stars, smileys
- Toy/cartoon motifs, stickers
- Chunky bubbly type
- Playful, nostalgic, hyper

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/kidcore.css`.)

```css
/* Kidcore — design tokens (generated from style_catalog.json) */
/* 2018–present | Nostalgia for 90s/00s childhood. */
:root {
  /* color */
  --color-bg: #fffdf0;
  --color-surface: #ffffff;
  --color-surface-strong: #fff6cf;
  --color-border: #1a1a1a;
  --color-text: #1a1a1a;
  --color-text-muted: #55524a;
  --color-primary: #ff5757;
  --color-accent: #3dd9eb;
  --color-rainbow-1: #ff5757;
  --color-rainbow-2: #ffb703;
  --color-rainbow-3: #ffe74c;
  --color-rainbow-4: #4dd671;
  --color-rainbow-5: #3dd9eb;
  --color-rainbow-6: #a06cff;
  /* radius */
  --radius-sm: 10px;
  --radius-md: 16px;
  --radius-lg: 22px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 3px 3px 0 var(--color-border);
  --shadow-md: 5px 5px 0 var(--color-border);
  --shadow-lg: 8px 8px 0 var(--color-border);
  /* font */
  --font-sans: 'Baloo 2', 'Comic Neue', system-ui, sans-serif;
  --font-display: 'Fredoka', 'Baloo 2', system-ui, sans-serif;
  --font-mono: ui-monospace, monospace;
  /* text */
  --text-xs: 0.75rem;
  --text-sm: 0.9rem;
  --text-base: 1rem;
  --text-lg: 1.15rem;
  --text-xl: 1.5rem;
  --text-2xl: 2rem;
  --text-3xl: 2.75rem;
  --text-4xl: 3.5rem;
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
  --ease-standard: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Kidcore — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#fffdf0",
        "surface": "#ffffff",
        "surface-strong": "#fff6cf",
        "border": "#1a1a1a",
        "text": "#1a1a1a",
        "text-muted": "#55524a",
        "primary": "#ff5757",
        "accent": "#3dd9eb",
        "rainbow-1": "#ff5757",
        "rainbow-2": "#ffb703",
        "rainbow-3": "#ffe74c",
        "rainbow-4": "#4dd671",
        "rainbow-5": "#3dd9eb",
        "rainbow-6": "#a06cff",
      },
      borderRadius: {
        "sm": "10px",
        "md": "16px",
        "lg": "22px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "3px 3px 0 var(--color-border)",
        "md": "5px 5px 0 var(--color-border)",
        "lg": "8px 8px 0 var(--color-border)",
      },
      fontFamily: {
        "sans": ["'Baloo 2'", "'Comic Neue'", "system-ui", "sans-serif"],
        "display": ["'Fredoka'", "'Baloo 2'", "system-ui", "sans-serif"],
        "mono": ["ui-monospace", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem",
        "sm": "0.9rem",
        "base": "1rem",
        "lg": "1.15rem",
        "xl": "1.5rem",
        "2xl": "2rem",
        "3xl": "2.75rem",
        "4xl": "3.5rem",
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
        "standard": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
};
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Thick black outline, one rainbow-slot fill (cycle `--color-rainbow-1..6` across button variants), `--shadow-md` flat offset that compresses to `--shadow-sm` on `:active` (press-down feel). |
| **Input** | White field, thick black outline, `--radius-md`, a chunky `--font-display` label above it like a worksheet. |
| **Card** | `--color-surface` panel, thick outline, `--shadow-lg` offset shadow, a rainbow-colored corner sticker/badge. |
| **Nav** | A row of rainbow pill tabs (`--radius-pill`), each in a different `--color-rainbow-N`, active tab gets the flat offset shadow lift. |
| **Modal** | Bold-outlined card, confetti/star motif in corners, `--font-display` heading in a rainbow color. |
| **Table** | Header row in one rainbow color per column, thick black cell borders, chunky radius on the outer frame only. |
| **Badge** | Small rainbow pill with a star/smiley glyph, thick outline. |
| **Tooltip** | A comic-style speech bubble: white fill, black outline, small offset shadow. |
| **Toggle** | A thick-outlined pill track that cycles through a rainbow color when 'on' rather than a single accent. |
| **Loading** | A bouncing/spinning rainbow dot sequence (cycle through `--color-rainbow-1..6`); provide a static rainbow bar for reduced-motion. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Not every rainbow slot has enough contrast against white/cream for text-on-fill — check each `--color-rainbow-N` against `--color-bg`/`--color-text` individually with `contrast_check.py`, and use black text (`--color-border`) on the lighter slots (yellow, cyan).
- Bouncy easing (`--ease-standard` overshoots) and rainbow-cycling animation must respect `prefers-reduced-motion` — provide an instant-snap fallback.
- Keep the thick black outline as the primary legibility anchor — don't let busy rainbow fills replace it, since the outline is what keeps shapes readable against the cream background.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Keep the thick black outline + flat offset shadow on every raised element — it's the load-bearing signature move.
- ✅ Rotate through the full 6-stop rainbow across sibling elements (tabs, badges, chart series) rather than repeating one color.
- ✅ Use bouncy, overshooting easing for entrances to sell the "toy" feel.

## Don't

- ❌ Swap the flat offset shadow for a soft blurred drop shadow — that reads as generic modern UI, not kidcore.
- ❌ Desaturate the rainbow into pastels — kidcore wants saturated primary/secondary hues.
- ❌ Skip the outline on smaller elements like badges/tooltips — inconsistent outlining breaks the sticker-sheet cohesion.

## Don't confuse this with…

*Commonly confused neighbors:* webcore, memphis-design, kawaii.

vs webcore: webcore is beveled/flat 90s browser chrome; kidcore is bold-outlined, rounded, and toy-like. vs memphis-design: memphis-design is a formal 80s design-history movement with squiggles/confetti shapes on a design-system level; kidcore is TV/toy nostalgia with rainbows and stickers. vs kawaii: kawaii is pastel and soft/round with big-eyed mascots; kidcore is saturated primary colors with hard black outlines.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
