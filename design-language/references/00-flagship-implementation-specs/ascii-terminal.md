# ASCII / Terminal / TUI — Implementation Spec

*Aliases:* terminal UI, TUI, ANSI art, green screen  
*Slug:* `ascii-terminal` · *Category:* texture · *Era:* 1970s–present

**Origin.** Text-only terminals; revived as retro/hacker aesthetic.

**Reference example.** Old DOS/Unix terminals; modern TUIs; hacker movie UIs.

## Signature move(s)

Text-only monospace layouts with box-drawing characters, phosphor green/amber on black, a blinking cursor, and ASCII art. Utilitarian hacker nostalgia; measure spacing in `ch`.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Monospace text-only layouts, box-drawing chars
- Green/amber phosphor on black
- Blinking cursor, ASCII art, command-line framing
- Utilitarian, hacker, nostalgic

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/ascii-terminal.css`.)

```css
/* ASCII / Terminal / TUI — design tokens (generated from style_catalog.json) */
/* 1970s–present | Text-only terminals; revived as retro/hacker aesthetic. */
:root {
  /* color */
  --color-bg: #0a0e0a;
  --color-surface: #0f150f;
  --color-text: #33ff66;
  --color-text-muted: #1f9940;
  --color-primary: #33ff66;
  --color-accent: #ffb000;
  --color-amber: #ffb000;
  --color-cursor: #33ff66;
  --color-dim: #0a3d1a;
  /* radius */
  --radius-sm: 0px;
  --radius-md: 0px;
  --radius-lg: 0px;
  --radius-pill: 0px;
  /* shadow */
  --shadow-glow: 0 0 4px rgba(51,255,102,0.7);
  /* font */
  --font-sans: 'IBM Plex Mono', 'Courier New', monospace;
  --font-display: 'IBM Plex Mono', monospace;
  --font-mono: 'IBM Plex Mono', 'Courier New', monospace;
  /* text */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 2rem;
  --text-4xl: 2.5rem;
  --text-5xl: 3rem;
  /* space */
  --space-1: 0.5ch;
  --space-2: 1ch;
  --space-3: 1.5ch;
  --space-4: 2ch;
  --space-6: 3ch;
  --space-8: 4ch;
  --space-12: 6ch;
  --space-16: 8ch;
  /* ease */
  --ease-standard: steps(1, end);
  /* extra (signature gradients, composite borders, filters) */
  --scanline: repeating-linear-gradient(0deg, rgba(51,255,102,0.08) 0 1px, transparent 1px 2px);
  --border: 1px solid #33ff66;
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// ASCII / Terminal / TUI — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0a0e0a",
        "surface": "#0f150f",
        "text": "#33ff66",
        "text-muted": "#1f9940",
        "primary": "#33ff66",
        "accent": "#ffb000",
        "amber": "#ffb000",
        "cursor": "#33ff66",
        "dim": "#0a3d1a",
      },
      borderRadius: {
        "sm": "0px",
        "md": "0px",
        "lg": "0px",
        "pill": "0px",
      },
      boxShadow: {
        "glow": "0 0 4px rgba(51,255,102,0.7)",
      },
      fontFamily: {
        "sans": ["'IBM Plex Mono'", "'Courier New'", "monospace"],
        "display": ["'IBM Plex Mono'", "monospace"],
        "mono": ["'IBM Plex Mono'", "'Courier New'", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem",
        "sm": "0.875rem",
        "base": "1rem",
        "lg": "1.125rem",
        "xl": "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
        "5xl": "3rem",
      },
      spacing: {
        "1": "0.5ch",
        "2": "1ch",
        "3": "1.5ch",
        "4": "2ch",
        "6": "3ch",
        "8": "4ch",
        "12": "6ch",
        "16": "8ch",
      },
      transitionTimingFunction: {
        "standard": "steps(1, end)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --scanline: repeating-linear-gradient(0deg, rgba(51,255,102,0.08) 0 1px, transparent 1px 2px);
//   --border: 1px solid #33ff66;
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `[ LABEL ]` in monospace with a bracket/box border; hover inverts fg/bg; focus underlines. |
| **Input** | A `>` prompt with a blinking cursor; underline or box-drawn field. |
| **Card** | A box-drawn panel (`┌─┐│└─┘`) with a title in the top border. |
| **Nav** | A menu of numbered/lettered options or a box-drawn tab bar. |
| **Modal** | A centered box-drawn dialog with `[ OK ] [ CANCEL ]`. |
| **Table** | Box-drawing grid with aligned monospace columns. |
| **Tooltip** | A small box-drawn note or inline `# comment`. |
| **Badge** | `[TAG]` in brackets, amber for warnings. |
| **Toggle** | `[x]`/`[ ]` or `[ON]`/`[OFF]` text states. |
| **Loading** | A spinner from `\|/-\` or an ASCII progress bar `[####----]`. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Phosphor green on black passes, but keep font size ≥16px equivalent and avoid pure #00FF00 (use ~#33ff66).
- Blinking cursor is fine; avoid broader blinking that violates seizure/motion guidance — honor reduced-motion.
- Ensure it's real semantic HTML underneath, not ASCII images of controls.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Use box-drawing characters and monospace alignment.
- ✅ Measure spacing in `ch`; keep a strict grid.
- ✅ Amber/green phosphor with subtle glow and scanlines.

## Don't

- ❌ Fake it with images of text (breaks a11y and selection).
- ❌ Use proportional fonts.
- ❌ Add rounded corners or shadows.

## Don't confuse this with…

*Commonly confused neighbors:* crt, cassette-futurism, cyberpunk.

vs cassette futurism: cassette-futurism is the broader *physical* retro-analog hardware aesthetic; ASCII/terminal is specifically the text-screen. vs CRT: CRT is the display artifact (scanlines/curvature) layerable on any style.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
