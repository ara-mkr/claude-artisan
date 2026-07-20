# Cassette Futurism — Implementation Spec

*Aliases:* cassette punk, analog sci-fi  
*Slug:* `cassette-futurism` · *Category:* retrofuturism · *Era:* 2010s–present (evokes 1970s–80s)

**Origin.** Fan term for retro-analog sci-fi tech aesthetics.

**Reference example.** Alien (Nostromo); Severance; Fallout Pip-Boy.

## Signature move(s)

A chunky beige/grey plastic console housing a dark CRT `--color-screen` inset: every interactive block is framed like hardware — a molded bezel (`--shadow-md` inset highlight + drop shadow), a recessed `--color-screen` panel with `--scanlines` and `--screen-glow`, and amber/green monospace readout text. The device casing is warm and matte; the screen inside is cold and glowing.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Chunky beige/grey plastic hardware
- CRT monitors, blinking LEDs, physical switches
- Monospace amber/green terminal type
- Lo-fi analog 'future as imagined in 1979'

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/cassette-futurism.css`.)

```css
/* Cassette Futurism — design tokens (generated from style_catalog.json) */
/* 2010s–present (evokes 1970s–80s) | Fan term for retro-analog sci-fi tech aesthetics. */
:root {
  /* color */
  --color-bg: #b8b09a;
  --color-surface: #c9c2ad;
  --color-surface-strong: #d9d2ba;
  --color-border: #8a8367;
  --color-text: #2a2820;
  --color-text-muted: #5b5641;
  --color-primary: #b5651d;
  --color-accent: #ffb000;
  --color-screen: #1a1c14;
  --color-led: #4caf50;
  /* radius */
  --radius-sm: 3px;
  --radius-md: 6px;
  --radius-lg: 10px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: inset 0 1px 0 rgba(255,255,255,0.35), 0 1px 2px rgba(0,0,0,0.3);
  --shadow-md: inset 0 1px 0 rgba(255,255,255,0.3), 0 3px 8px rgba(0,0,0,0.35);
  --shadow-lg: inset 0 2px 0 rgba(255,255,255,0.25), 0 6px 16px rgba(0,0,0,0.4);
  /* font */
  --font-sans: 'Eurostile', 'Helvetica Neue', system-ui, sans-serif;
  --font-display: 'Eurostile', 'Bank Gothic', system-ui, sans-serif;
  --font-mono: 'VT323', 'Courier New', ui-monospace, monospace;
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
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
  /* extra (signature gradients, composite borders, filters) */
  --scanlines: repeating-linear-gradient(0deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 1px, transparent 1px, transparent 3px);
  --screen-glow: 0 0 12px rgba(255,176,0,0.35);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Cassette Futurism — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#b8b09a",
        "surface": "#c9c2ad",
        "surface-strong": "#d9d2ba",
        "border": "#8a8367",
        "text": "#2a2820",
        "text-muted": "#5b5641",
        "primary": "#b5651d",
        "accent": "#ffb000",
        "screen": "#1a1c14",
        "led": "#4caf50",
      },
      borderRadius: {
        "sm": "3px",
        "md": "6px",
        "lg": "10px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "inset 0 1px 0 rgba(255,255,255,0.35), 0 1px 2px rgba(0,0,0,0.3)",
        "md": "inset 0 1px 0 rgba(255,255,255,0.3), 0 3px 8px rgba(0,0,0,0.35)",
        "lg": "inset 0 2px 0 rgba(255,255,255,0.25), 0 6px 16px rgba(0,0,0,0.4)",
      },
      fontFamily: {
        "sans": ["'Eurostile'", "'Helvetica Neue'", "system-ui", "sans-serif"],
        "display": ["'Eurostile'", "'Bank Gothic'", "system-ui", "sans-serif"],
        "mono": ["'VT323'", "'Courier New'", "ui-monospace", "monospace"],
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
        "standard": "cubic-bezier(0.2, 0, 0, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --scanlines: repeating-linear-gradient(0deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 1px, transparent 1px, transparent 3px);
//   --screen-glow: 0 0 12px rgba(255,176,0,0.35);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Molded plastic key: `--color-surface-strong` fill, `--shadow-sm` bevel, `--font-display` uppercase label; active state presses in (invert the inset shadow direction). |
| **Input** | Recessed `--color-screen` readout strip with `--font-mono` amber (`--color-accent`) text and `--screen-glow`; the surrounding bezel is plastic `--color-surface`. |
| **Card** | Console panel: plastic `--color-surface` housing, a `--color-screen` sub-panel with `--scanlines`, chunky `--radius-md` corners. |
| **Nav** | Physical switch-panel bar — each item is a raised plastic key with an LED (`--color-led`) dot indicating active state. |
| **Modal** | Full CRT takeover: `--color-screen` background, `--scanlines`, `--font-mono` content, thick plastic bezel border. |
| **Table** | Green/amber monospace readout rows on `--color-screen`, hairline dividers, no zebra striping (that's too modern — use scanlines for rhythm instead). |
| **Tooltip** | Tiny LED-lit label, `--color-led` or `--color-accent` glow, `--font-mono`. |
| **Badge** | Blinking-LED metaphor: small solid dot + `--font-mono` text, `--color-led` for "on/good", `--color-primary` for "warn". |
| **Toggle** | Physical rocker switch: rectangular track, hard-edged knob, audible-feeling snap (no smooth slide easing). |
| **Loading** | Blinking cursor block or scanning bar sweeping across the `--color-screen`, styled like a terminal boot sequence. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- `--scanlines` overlaid on text can reduce effective contrast — keep opacity low (as tokened, ~0.15) and never stack it twice on the same text block.
- Amber-on-black (`--color-accent` on `--color-screen`) reads well, but verify green `--color-led` text/background pairs too — green-on-dark can undershoot AA at small sizes.
- `--screen-glow` and any CRT flicker/scanline animation must respect `prefers-reduced-motion` — provide a static, non-animated scanline texture as the fallback.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Always pair a plastic housing surface with a distinct dark screen surface — the contrast between the two materials is the whole style.
- ✅ Use monospace type exclusively inside "screen" surfaces; use the sans/display faces on the plastic chassis labels.
- ✅ Add tactile details — LEDs, switches, bezels — to reinforce hardware, not flat UI.

## Don't

- ❌ Put screen-style amber/green monospace text directly on the beige plastic background — keep it confined to `--color-screen` panels.
- ❌ Smooth out the toggle/switch motion — cassette futurism is mechanical and abrupt, not fluid.
- ❌ Use pure black or pure white — the whole palette is warm, slightly desaturated "old plastic."

## Don't confuse this with…

*Commonly confused neighbors:* ascii-terminal, crt, dieselpunk.

vs ascii-terminal: ascii-terminal is content rendered as text-mode glyphs anywhere on the page; cassette futurism is a physical hardware chassis (plastic bezel + screen) with terminal type only inside the screen area. vs crt: crt is the pure display-effect layer (scanlines/glow) applicable to any style; cassette futurism additionally demands the beige plastic housing and physical switches around it. vs dieselpunk: dieselpunk is riveted steel and WWII-era propaganda color; cassette futurism is molded consumer plastic and late-70s/80s computing.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
