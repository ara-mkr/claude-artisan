# Anti-Design — Implementation Spec

*Aliases:* ugly design, undesign
*Slug:* `anti-design` · *Category:* brutalist · *Era:* 2016–present

**Origin.** Reaction against polished "design-by-committee" minimalism.

**Reference example.** Balenciaga site experiments; art/fashion microsites.

## Signature move(s)

Clashing, oversaturated color pairs (`--color-bg` yellow against `--color-surface` magenta and `--color-surface-strong` cyan) with zero-radius everything and hard offset "sticker" shadows (`--shadow-sm/md/lg` are solid-color offsets, no blur) that deliberately fight for attention; add small random rotations (`--extra-tilt-a/b`) to break grid alignment on purpose.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Deliberate rule-breaking: clashing type, misalignment
- Default/system styling embraced
- Rejects visual hierarchy conventions
- Provocative, expressive, DIY

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/anti-design.css`.)

```css
/* Anti-Design — design tokens (generated from style_catalog.json) */
/* 2016–present | Reaction against polished 'design-by-committee' minimalism. */
:root {
  /* color */
  --color-bg: #ffe600;
  --color-surface: #ff00ff;
  --color-surface-strong: #00ffff;
  --color-border: #000000;
  --color-text: #000000;
  --color-text-muted: #1a1a1a;
  --color-primary: #0000ff;
  --color-accent: #ff0000;
  /* radius */
  --radius-sm: 0px;
  --radius-md: 0px;
  --radius-lg: 0px;
  --radius-pill: 0px;
  /* shadow */
  --shadow-sm: 3px 3px 0 #ff0000;
  --shadow-md: 5px 5px 0 #0000ff, -3px -3px 0 #00ffff;
  --shadow-lg: 8px 8px 0 #ff0000, -5px -5px 0 #0000ff;
  /* font */
  --font-sans: 'Times New Roman', Times, serif;
  --font-display: 'Comic Sans MS', 'Chalkboard SE', cursive;
  --font-mono: 'Courier New', monospace;
  /* text */
  --text-xs: 0.7rem;
  --text-sm: 0.9rem;
  --text-base: 1rem;
  --text-lg: 1.2rem;
  --text-xl: 1.6rem;
  --text-2xl: 2.1rem;
  --text-3xl: 2.8rem;
  --text-4xl: 3.6rem;
  --text-5xl: 4.8rem;
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
  --ease-standard: steps(1);
  /* extra */
  --tilt-a: rotate(-1.6deg);
  --tilt-b: rotate(1.1deg);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Anti-Design — Tailwind theme fragment (generated).
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#ffe600",
        "surface": "#ff00ff",
        "surface-strong": "#00ffff",
        "border": "#000000",
        "text": "#000000",
        "text-muted": "#1a1a1a",
        "primary": "#0000ff",
        "accent": "#ff0000",
      },
      borderRadius: {
        "sm": "0px", "md": "0px", "lg": "0px", "pill": "0px",
      },
      boxShadow: {
        "sm": "3px 3px 0 #ff0000",
        "md": "5px 5px 0 #0000ff, -3px -3px 0 #00ffff",
        "lg": "8px 8px 0 #ff0000, -5px -5px 0 #0000ff",
      },
      fontFamily: {
        "sans": ["'Times New Roman'", "Times", "serif"],
        "display": ["'Comic Sans MS'", "'Chalkboard SE'", "cursive"],
        "mono": ["'Courier New'", "monospace"],
      },
      fontSize: {
        "xs": "0.7rem", "sm": "0.9rem", "base": "1rem", "lg": "1.2rem",
        "xl": "1.6rem", "2xl": "2.1rem", "3xl": "2.8rem", "4xl": "3.6rem", "5xl": "4.8rem",
      },
      spacing: {
        "1": "4px", "2": "8px", "3": "12px", "4": "16px", "6": "24px",
        "8": "32px", "12": "48px", "16": "64px", "24": "96px",
      },
      transitionTimingFunction: {
        "standard": "steps(1)",
      },
    },
  },
};

// Random tilt tokens are CSS-only transforms:
//   --tilt-a: rotate(-1.6deg);
//   --tilt-b: rotate(1.1deg);
```

## Component rules (the 10 primitives)

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Zero radius, `--color-primary` fill, `--shadow-sm` hard offset, `--tilt-a` rotation; hover flips shadow direction instead of lifting. |
| **Input** | Default browser-ish styling: `--color-surface-strong` fill, thick `2px solid var(--color-border)` — deliberately clashing with the surrounding page hue. |
| **Card** | `--color-surface`, `--shadow-md` two-tone offset, `--tilt-b`; multiple cards on a page get alternating tilts so nothing lines up. |
| **Nav** | Loud `--color-accent` bar in `--font-display`, links underlined in default blue/purple to look "unstyled" on purpose. |
| **Modal** | Off-center, tilted panel with `--shadow-lg`, sitting crookedly over a flat-color (not dimmed) backdrop. |
| **Table** | Clashing zebra rows alternating `--color-surface`/`--color-surface-strong`, thick black rules, no alignment polish. |
| **Tooltip** | Comic-Sans chip, hard black border, offset shadow — reads as a speech bubble, not a system tooltip. |
| **Badge** | Solid clashing-color rectangle (never a pill — radius is 0), rotated a few degrees. |
| **Toggle** | Ugly-on-purpose: garish track color swap, no smooth transition (`steps(1)`), snaps instantly. |
| **Loading** | A blinking `<marquee>`-style text loop or hard-cut frame animation (`steps(1)`) rather than a smooth spinner. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

- The palette is intentionally clashing (yellow/magenta/cyan) — run every text/background pair through `contrast_check.py` anyway; "ugly on purpose" must still not mean illegible, so nudge `--color-text` weight/size up rather than softening the palette.
- `steps(1)` transitions plus rotation can trigger motion discomfort — provide a `prefers-reduced-motion` path that keeps color/position but removes snap-transform jumps.
- Rotated (`--tilt-a/b`) text blocks hurt screen-reader-adjacent low-vision users; cap rotation at ~2deg and never rotate body copy, only card/sticker containers.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Let default/system UI quirks (underlined links, system fonts) show through instead of overriding everything.
- ✅ Vary tilt and shadow direction per element so nothing feels templated.
- ✅ Keep actual body copy legible even while chrome is chaotic.

## Don't

- ❌ Soften the clashing palette "for taste" — the clash is the point.
- ❌ Add rounded corners or soft shadows anywhere — that reintroduces the polish this style rejects.
- ❌ Rotate primary body text blocks past ~2deg — decoration should not cost readability.

## Don't confuse this with…

*Commonly confused neighbors:* brutalism, dadaist-web.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
