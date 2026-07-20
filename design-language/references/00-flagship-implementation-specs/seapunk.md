# Seapunk — Implementation Spec

*Aliases:* aquatic vaporwave  
*Slug:* `seapunk` · *Category:* retrofuturism · *Era:* 2011–2013

**Origin.** Tumblr-born internet microgenre.

**Reference example.** Seapunk Tumblr; Rihanna 2012 SNL visuals.

## Signature move(s)

Cyan-teal aquatic glow over deep ocean-dark surfaces: a saturated `--color-primary` (`#00e5ff`) cyan border/glow ring on every interactive element paired with a shifting `--holo-gradient` (cyan → pink → lime → cyan) used sparingly on hero accents, evoking dolphin/Y2K-CGI nostalgia. Low-fi Web 1.0 fonts (Verdana body, Papyrus/Herculanum display) undercut the digital gloss with deliberate irony.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Aquatic teal/cyan, dolphins, waves
- 90s CGI/Web 1.0 nostalgia
- Yin-yang, glitch, holographic
- Watery, kitschy, ironic

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/seapunk.css`.)

```css
/* Seapunk — design tokens (generated from style_catalog.json) */
/* 2011–2013 | Tumblr-born internet microgenre. */
:root {
  /* color */
  --color-bg: #062c31;
  --color-surface: #0d4750;
  --color-surface-strong: #135b66;
  --color-border: #00e5ff;
  --color-text: #eafffc;
  --color-text-muted: #9fd9d4;
  --color-primary: #00e5ff;
  --color-accent: #ff6ec7;
  --color-lime: #a6ff3d;
  /* radius */
  --radius-sm: 4px;
  --radius-md: 12px;
  --radius-lg: 24px;
  --radius-pill: 999px;
  /* shadow (cyan glow) */
  --shadow-sm: 0 2px 8px rgba(0,229,255,0.25);
  --shadow-md: 0 8px 20px rgba(0,229,255,0.28);
  --shadow-lg: 0 18px 40px rgba(0,229,255,0.32);
  /* font */
  --font-sans: 'Verdana', 'Geneva', sans-serif;
  --font-display: 'Papyrus', 'Herculanum', 'Verdana', sans-serif;
  --font-mono: 'Courier New', monospace;
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
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  /* extra (signature holographic sweep) */
  --holo-gradient: linear-gradient(120deg, #00e5ff, #ff6ec7, #a6ff3d, #00e5ff);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Seapunk — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#062c31",
        "surface": "#0d4750",
        "surface-strong": "#135b66",
        "border": "#00e5ff",
        "text": "#eafffc",
        "text-muted": "#9fd9d4",
        "primary": "#00e5ff",
        "accent": "#ff6ec7",
        "lime": "#a6ff3d",
      },
      borderRadius: {
        "sm": "4px",
        "md": "12px",
        "lg": "24px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 8px rgba(0,229,255,0.25)",
        "md": "0 8px 20px rgba(0,229,255,0.28)",
        "lg": "0 18px 40px rgba(0,229,255,0.32)",
      },
      fontFamily: {
        "sans": ["'Verdana'", "'Geneva'", "sans-serif"],
        "display": ["'Papyrus'", "'Herculanum'", "'Verdana'", "sans-serif"],
        "mono": ["'Courier New'", "monospace"],
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
        "standard": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
};

// Signature `extra` token is CSS-only (gradient). Add as a custom property:
//   --holo-gradient: linear-gradient(120deg, #00e5ff, #ff6ec7, #a6ff3d, #00e5ff);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--radius-pill`, `--color-primary` cyan border glow via `--shadow-md`, `--holo-gradient` fill reserved for the primary CTA only. |
| **Input** | `--radius-md`, `--color-surface` fill, 1px `--color-border` cyan; focus intensifies to `--shadow-md` glow. |
| **Card** | `--color-surface`, `--radius-lg`, `--shadow-sm` cyan glow border — a "porthole" feel over the dark ocean `--color-bg`. |
| **Nav** | Dark `--color-surface-strong` bar, `--holo-gradient` underline on the active tab. |
| **Modal** | `--color-surface`, `--radius-lg`, `--shadow-lg`, cyan `--color-border` outline against a near-black scrim. |
| **Table** | `--color-surface` rows with `--color-border` cyan hairlines — keep the glow off dense rows to preserve legibility. |
| **Tooltip** | Small `--color-surface-strong` chip, cyan border, `--shadow-sm` glow. |
| **Badge** | `--radius-pill`, solid `--color-accent` (pink) or `--color-lime` fill for playful status variety. |
| **Toggle** | Pill track in `--color-surface-strong`, `--holo-gradient` knob when on. |
| **Loading** | A pulsing cyan glow ring, or the `--holo-gradient` sweeping across a thin progress bar. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Cyan-on-dark-teal (`--color-primary` on `--color-surface`) is visually loud but check it still clears 4.5:1 for body text; if not, restrict cyan to large text, borders, and glows only.
- The `--holo-gradient` must never sit behind body text — reserve it for buttons, underlines, and knobs where text is either absent or high-contrast white/black.
- Verdana at small sizes on a dark, glowing background can blur under the shadow glow — keep `--shadow-sm`/`md` glows off text containers, applied only to card/button edges.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Keep the cyan glow (`--shadow-*`) on borders and edges, never bleeding into text.
- ✅ Use `--holo-gradient` as a rare, celebratory accent — one per view, not everywhere.
- ✅ Lean into the deliberate Web 1.0 font irony (Verdana/Papyrus) rather than "fixing" it with a modern sans.

## Don't

- ❌ Overuse the holographic gradient until it becomes visual noise.
- ❌ Place text directly on the holographic gradient without a solid contrasting layer.
- ❌ Swap in a clean modern typeface — it kills the ironic Tumblr-era reference.

## Don't confuse this with…

*Commonly confused neighbors:* vaporwave, vectordelia, y2k-futurism.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
