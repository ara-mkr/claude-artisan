# Halftone — Implementation Spec

*Aliases:* dot pattern, Ben-Day dots  
*Slug:* `halftone` · *Category:* texture · *Era:* Print heritage

**Origin.** Newspaper/comic printing technique as aesthetic.

**Reference example.** Comic books; Roy Lichtenstein; retro posters.

## Signature move(s)

Tone is simulated with a repeating radial-gradient dot grid — `radial-gradient(var(--color-primary) 32%, transparent 34%) 0 0/10px 10px` — laid over flat color fields, exactly mimicking a CMYK printing screen where dot size, not opacity, carries the tone. A second offset dot grid in `--color-accent` at a slightly different scale (`8px`) simulates a mis-registered ink plate, the classic "almost aligned" comic-print look. Hard black outlines (`--color-border`) and flat offset shadows finish the printed-page illusion.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Dot grids simulate tone via dot size
- Comic/newsprint texture
- Bold with CMYK registration feel
- Retro print nostalgia

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/halftone.css`.)

```css
/* Halftone — design tokens (generated from style_catalog.json) */
/* Print heritage | Newspaper/comic printing technique as aesthetic. */
:root {
  /* color */
  --color-bg: #fdf6e8;
  --color-surface: #ffffff;
  --color-surface-strong: #fff2c9;
  --color-border: #16130f;
  --color-text: #16130f;
  --color-text-muted: #4d463a;
  --color-primary: #e0263b;
  --color-accent: #1f6fd6;
  --color-yellow: #f6c93b;
  /* radius */
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 3px 3px 0 var(--color-border);
  --shadow-md: 5px 5px 0 var(--color-border);
  --shadow-lg: 8px 8px 0 var(--color-border);
  /* font */
  --font-sans: 'Archivo Black', 'Helvetica Neue', sans-serif;
  --font-display: 'Bangers', 'Anton', 'Archivo Black', sans-serif;
  --font-mono: 'Courier New', ui-monospace, monospace;
  /* text */
  --text-xs: 0.75rem;
  --text-sm: 0.9rem;
  --text-base: 1rem;
  --text-lg: 1.15rem;
  --text-xl: 1.5rem;
  --text-2xl: 2rem;
  --text-3xl: 2.75rem;
  --text-4xl: 3.75rem;
  --text-5xl: 5.25rem;
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
  --dot-grid: radial-gradient(var(--color-primary) 32%, transparent 34%) 0 0/10px 10px;
  --dot-grid-blue: radial-gradient(var(--color-accent) 32%, transparent 34%) 0 0/8px 8px;
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Halftone — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#fdf6e8",
        "surface": "#ffffff",
        "surface-strong": "#fff2c9",
        "border": "#16130f",
        "text": "#16130f",
        "text-muted": "#4d463a",
        "primary": "#e0263b",
        "accent": "#1f6fd6",
        "yellow": "#f6c93b",
      },
      borderRadius: {
        "sm": "2px",
        "md": "4px",
        "lg": "8px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "3px 3px 0 var(--color-border)",
        "md": "5px 5px 0 var(--color-border)",
        "lg": "8px 8px 0 var(--color-border)",
      },
      fontFamily: {
        "sans": ["'Archivo Black'", "'Helvetica Neue'", "sans-serif"],
        "display": ["'Bangers'", "'Anton'", "'Archivo Black'", "sans-serif"],
        "mono": ["'Courier New'", "ui-monospace", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem",
        "sm": "0.9rem",
        "base": "1rem",
        "lg": "1.15rem",
        "xl": "1.5rem",
        "2xl": "2rem",
        "3xl": "2.75rem",
        "4xl": "3.75rem",
        "5xl": "5.25rem",
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
//   --dot-grid: radial-gradient(var(--color-primary) 32%, transparent 34%) 0 0/10px 10px;
//   --dot-grid-blue: radial-gradient(var(--color-accent) 32%, transparent 34%) 0 0/8px 8px;
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Flat `--color-primary` fill, thick `--color-border` outline, `--shadow-sm` hard offset; hover swaps the fill to a `--dot-grid` texture over the same red to fake ink coverage change. |
| **Input** | White field, thick border, no dots (keeps typed text readable); focus thickens the border and adds `--shadow-sm`. |
| **Card** | Header band gets `--dot-grid` at full opacity over `--color-yellow`; body stays flat white with border + `--shadow-md` — dots mark "printed panel," not content. |
| **Nav** | Bar with `--dot-grid-blue` texture bleeding off one edge like a mis-cut newsprint panel. |
| **Modal** | Comic-panel border (thick, black), `--shadow-lg`; scrim uses `--dot-grid` at low density instead of flat black. |
| **Table** | Header row gets the dot texture; body rows flat with border-only cell dividers, so tone-vs-data stays legible. |
| **Tooltip** | Small bordered chip, `--shadow-sm`, solid fill (dots too fine to render at this size). |
| **Badge** | Bordered pill, `--dot-grid` fill at small scale reads as a printed sticker. |
| **Toggle** | Track alternates solid `--color-primary` / `--color-accent`; knob is a bordered white circle, thick outline, small hard shadow. |
| **Loading** | Dot-grid density sweeps left-to-right (animate `background-size` or a clip-path wipe) to read as ink filling in. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Never place body text directly over a `--dot-grid` fill — the alternating dot/gap pattern destroys character recognition; keep all text on flat `--color-surface`.
- The two-plate registration trick (offset red/blue dot grids) can trigger visual discomfort at large scale or in motion — keep it static and confined to decorative panels, not full backgrounds behind interactive content.
- Respect `prefers-reduced-motion` for the ink-fill loading sweep; fall back to a static filled bar.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Keep dot grids confined to background/decorative panels, never under body copy.
- ✅ Pair every filled shape with a thick black outline for that "printed line art" read.
- ✅ Use the offset dual-dot-grid trick sparingly, as a signature accent, not everywhere.

## Don't

- ❌ Put text on top of an active dot pattern.
- ❌ Round corners heavily — halftone reads as print, and print panels are square-ish.
- ❌ Use soft drop shadows — shadows here must be hard, flat offsets only.

## Don't confuse this with…

*Commonly confused neighbors:* pop-art, risograph, comic.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
