# Futurism (Italian) — Implementation Spec

*Aliases:* Futurismo, parole in libertà  
*Slug:* `futurism-italian` · *Category:* historical · *Era:* 1909–1944

**Origin.** Italy (Filippo Marinetti).

**Reference example.** Marinetti's *Zang Tumb Tumb*; Fortunato Depero.

## Signature move(s)

"Words-in-freedom" (parole in libertà): headline type and badges thrown off the horizontal at a sharp diagonal (`--tilt-heading`, `--tilt-badge`), set in a heavy condensed display face, radiating over a field of fine diagonal "speed lines" (`--speed-lines`) that suggest velocity and mechanical energy even on a static page. Every raised surface gets a hard, unblurred offset shadow — like ink printed slightly out of register — reinforcing the sense of motion-blur without any actual animation. Repeat the diagonal tilt and speed-line texture across nav, card, and badge so the whole interface reads as one propulsive composition celebrating the machine.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Words-in-freedom: explosive dynamic typography
- Speed, machines, motion lines
- Diagonal, chaotic type on the page
- Celebration of technology and energy

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/futurism-italian.css`.)

```css
/* Futurism (Italian) — design tokens (generated from style_catalog.json) */
/* 1909–1944 | Italy (Filippo Marinetti). */
:root {
  /* color */
  --color-bg: #efe6d8;
  --color-surface: #f7f1e6;
  --color-surface-strong: #e9ddc7;
  --color-border: #171512;
  --color-text: #171512;
  --color-text-muted: #4c4640;
  --color-primary: #c81d1d;
  --color-accent: #1c1c8a;
  /* radius: sharp, almost no rounding — speed and mechanism, not softness */
  --radius-sm: 0px;
  --radius-md: 0px;
  --radius-lg: 0px;
  --radius-pill: 999px;
  /* shadow: hard offset "printed poster" shadow, no blur */
  --shadow-sm: 3px 3px 0 var(--color-border);
  --shadow-md: 6px 6px 0 var(--color-border);
  --shadow-lg: 10px 10px 0 var(--color-border);
  /* font */
  --font-sans: 'Futura', 'Eurostile', Arial, sans-serif;
  --font-display: 'Bifur', 'Anton', 'Impact', sans-serif;
  --font-mono: ui-monospace, monospace;
  /* text */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.5rem;
  --text-2xl: 2.1rem;
  --text-3xl: 2.9rem;
  --text-4xl: 4rem;
  --text-5xl: 5.4rem;
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
  --ease-standard: cubic-bezier(0.7, 0, 0.2, 1);
  /* extra: diagonal "words-in-freedom" tilt applied to headings/badges, plus
     radiating speed-lines behind surfaces — the two signature moves of
     parole in libertà typography */
  --tilt-heading: rotate(-2.5deg);
  --tilt-badge: rotate(3deg);
  --speed-lines: repeating-linear-gradient(115deg, rgba(23,21,18,0.05) 0 2px, transparent 2px 22px);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Futurism (Italian) — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#efe6d8",
        "surface": "#f7f1e6",
        "surface-strong": "#e9ddc7",
        "border": "#171512",
        "text": "#171512",
        "text-muted": "#4c4640",
        "primary": "#c81d1d",
        "accent": "#1c1c8a",
      },
      borderRadius: {
        "sm": "0px",
        "md": "0px",
        "lg": "0px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "3px 3px 0 var(--color-border)",
        "md": "6px 6px 0 var(--color-border)",
        "lg": "10px 10px 0 var(--color-border)",
      },
      fontFamily: {
        "sans": ["'Futura'", "'Eurostile'", "Arial", "sans-serif"],
        "display": ["'Bifur'", "'Anton'", "'Impact'", "sans-serif"],
        "mono": ["ui-monospace", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem",
        "sm": "0.875rem",
        "base": "1rem",
        "lg": "1.125rem",
        "xl": "1.5rem",
        "2xl": "2.1rem",
        "3xl": "2.9rem",
        "4xl": "4rem",
        "5xl": "5.4rem",
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
        "standard": "cubic-bezier(0.7, 0, 0.2, 1)",
        "tilt-heading": "rotate(-2.5deg)",
        "tilt-badge": "rotate(3deg)",
        "speed-lines": "repeating-linear-gradient(115deg, rgba(23,21,18,0.05) 0 2px, transparent 2px 22px)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --tilt-heading: rotate(-2.5deg);
//   --tilt-badge: rotate(3deg);
//   --speed-lines: repeating-linear-gradient(115deg, rgba(23,21,18,0.05) 0 2px, transparent 2px 22px);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Uppercase `--font-display`, hard `--shadow-sm`; hover thrusts the button diagonally with `translate(-2px,-2px)` and deepens to `--shadow-md`, as if accelerating — active slams it flat back to `--shadow-sm`. |
| **Input** | `--surface-strong` fill (a step darker, like primed poster stock), 2px hard border, no tilt — text entry stays level so it's actually typeable, but the focus shadow snaps to `--shadow-sm` sharply rather than fading in. |
| **Card** | `--speed-lines` background wash, hard border, `--shadow-md` — radiating diagonal lines behind the content give even a static card a sense of forward motion. |
| **Nav** | Flat bar with a 3px hard bottom border — the one level anchor, so wayfinding survives the diagonal chaos elsewhere on the page. |
| **Modal** | Panel tilted by a reduced fraction of `--tilt-heading` (halved, so the close button stays reachable), `--shadow-lg`, `--speed-lines` scrim behind it. |
| **Table** | Hard-ruled grid, header row set in `--font-display` uppercase with a slight `--tilt-heading` on the table's caption only — body cells stay level and legible. |
| **Tooltip** | Small hard-bordered chip, `--shadow-sm`, no tilt — brief data callouts stay legible and level. |
| **Badge** | `--color-accent` fill, `--radius-pill`, permanently set to `--tilt-badge` — the badge is the smallest, safest place to let the diagonal energy loose. |
| **Toggle** | Rectangular track (not soft pill), hard border, knob snaps across with the `cubic-bezier(0.7,0,0.2,1)` "machine acceleration" curve — starts fast, no idle drift. |
| **Loading** | A hard-edged bar that fills in bursts (accelerate–stop–accelerate) rather than a smooth continuous fill, echoing mechanical, propulsive motion. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Diagonal tilt (`--tilt-heading`, `--tilt-badge`) is for short headline/badge text only — rotated body copy or form labels measurably slow reading speed, so keep paragraphs and inputs perfectly level.
- The condensed, heavy display face (`--font-display`) can crowd letterforms at small sizes — never drop below `--text-lg` for anything set in it, and use `--font-sans` for any body-length text.
- Motion cues here are implied by static diagonals and speed-lines, not animation, but if you do animate the "acceleration" easing (`cubic-bezier(0.7,0,0.2,1)`) on hover/press, disable it under `prefers-reduced-motion: reduce` and swap to an instant state change.
- Verify `--color-primary` (red) and `--color-accent` (navy) against the warm parchment `--color-bg`/`--color-surface` with `contrast_check.py` — both were tuned for poster impact, not digital AA compliance by default.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Reserve diagonal tilt for headlines and badges — never for body copy, labels, or table cells.
- ✅ Use the hard, unblurred offset shadow system-wide instead of soft drop shadows, to keep the "poster printed on cheap stock" feel.
- ✅ Keep navigation and form fields level and calm so the diagonal energy elsewhere doesn't compromise usability.

## Don't

- ❌ Tilt an input field, paragraph, or anything requiring sustained reading.
- ❌ Blur the offset shadows — Futurism's shadows are hard registration marks, not soft depth.
- ❌ Overuse the heaviest display weight below `--text-lg` where it becomes illegible.

## Don't confuse this with…

*Commonly confused neighbors:* constructivism, dada. vs Constructivism: Constructivism (Soviet, Rodchenko/Lissitzky) shares diagonal dynamism but serves collective political propaganda with strict geometric photomontage; Italian Futurism is individualist, celebrates speed/war/machines, and its typography is expressive "words-in-freedom" rather than rigid constructed geometry. vs Dada: Dada is contemporaneous but anti-art and absurdist, built from chance collage of found media; Futurism is sincere and propulsive — it genuinely celebrates technology and velocity rather than mocking rational composition.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
