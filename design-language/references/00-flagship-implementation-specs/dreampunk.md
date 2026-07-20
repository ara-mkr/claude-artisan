# Dreampunk — Implementation Spec

*Aliases:* oneiric aesthetic  
*Slug:* `dreampunk` · *Category:* retrofuturism · *Era:* 2010s–present

**Origin.** Surreal, dream-logic offshoot of vaporwave/ambient.

**Reference example.** Dreampunk music visuals; 2814 album art.

## Signature move(s)

Every surface dissolves into `--fog-fill`: a low-opacity periwinkle-to-mint gradient over a heavily blurred (`--blur-backdrop: 22px`) translucent panel, with edges softened by large radii (`--radius-lg: 32px`) so nothing feels solid or fully in focus. Depth comes from diffuse, wide-spread glow shadows rather than sharp elevation.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Hazy, ethereal, foggy gradients
- Soft glow, indistinct forms
- Liminal, otherworldly calm
- Ambient, hypnagogic

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/dreampunk.css`.)

```css
/* Dreampunk — design tokens (generated from style_catalog.json) */
/* 2010s–present | Surreal, dream-logic offshoot of vaporwave/ambient. */
:root {
  /* color */
  --color-bg: #171b2e;
  --color-surface: rgba(255, 255, 255, 0.06);
  --color-surface-strong: rgba(255, 255, 255, 0.11);
  --color-border: rgba(180, 200, 255, 0.22);
  --color-text: #eef1ff;
  --color-text-muted: rgba(238, 241, 255, 0.68);
  --color-primary: #7c9cff;
  --color-accent: #9df0e0;
  /* radius */
  --radius-sm: 12px;
  --radius-md: 20px;
  --radius-lg: 32px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 2px 14px rgba(90, 110, 220, 0.20);
  --shadow-md: 0 10px 40px rgba(90, 110, 220, 0.28);
  --shadow-lg: 0 24px 70px rgba(90, 110, 220, 0.34);
  /* blur */
  --blur-backdrop: 22px;
  /* font */
  --font-sans: 'Nunito Sans', system-ui, sans-serif;
  --font-display: 'Quicksand', 'Nunito Sans', sans-serif;
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
  --ease-standard: cubic-bezier(0.16, 1, 0.3, 1);
  /* extra (signature gradients, composite borders, filters) */
  --fog-fill: linear-gradient(160deg, rgba(124,156,255,0.14), rgba(157,240,224,0.06));
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Dreampunk — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#171b2e",
        "surface": "rgba(255, 255, 255, 0.06)",
        "surface-strong": "rgba(255, 255, 255, 0.11)",
        "border": "rgba(180, 200, 255, 0.22)",
        "text": "#eef1ff",
        "text-muted": "rgba(238, 241, 255, 0.68)",
        "primary": "#7c9cff",
        "accent": "#9df0e0",
      },
      borderRadius: {
        "sm": "12px",
        "md": "20px",
        "lg": "32px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 14px rgba(90, 110, 220, 0.20)",
        "md": "0 10px 40px rgba(90, 110, 220, 0.28)",
        "lg": "0 24px 70px rgba(90, 110, 220, 0.34)",
      },
      backdropBlur: {
        "backdrop": "22px",
      },
      fontFamily: {
        "sans": ["'Nunito Sans'", "system-ui", "sans-serif"],
        "display": ["'Quicksand'", "'Nunito Sans'", "sans-serif"],
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
        "standard": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --fog-fill: linear-gradient(160deg, rgba(124,156,255,0.14), rgba(157,240,224,0.06));
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Pill or `--radius-md`, `--fog-fill` over translucent `--color-surface`, blurred backdrop; hover softly brightens rather than snapping to a hard new color. |
| **Input** | Translucent `--color-surface` field, barely-there `--color-border`; focus fades in a soft `--color-primary` glow ring, no hard outline. |
| **Card** | The hero surface: `--fog-fill` + `--blur-backdrop`, `--radius-lg`, diffuse `--shadow-md`; content should feel like it's floating in mist. |
| **Nav** | A translucent fogged bar that barely separates from the background — legibility carried by `--color-text`, not by hard contrast framing. |
| **Modal** | Deep fog: strongest blur, `--shadow-lg`, content fades/dissolves in rather than sliding. |
| **Table** | Keep the row body on a slightly more opaque `--color-surface-strong` — full fog on dense text destroys scannability. |
| **Tooltip** | Small fogged chip with a soft glow; still needs a readable near-opaque core. |
| **Badge** | Soft glowing pill, low-contrast fill, `--color-accent` for gentle emphasis, never harsh. |
| **Toggle** | Fogged track, glowing knob that drifts rather than snaps between states. |
| **Loading** | A slow-breathing soft glow pulse or drifting fog particles — hypnagogic, unhurried. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Low-opacity `--color-surface` and `--color-text-muted` are the two biggest contrast risks here — verify composited text-on-fog values with `contrast_check.py`, not the nominal hex alone.
- Provide a `@media (prefers-reduced-transparency: reduce)` fallback that raises `--color-surface` opacity and drops the blur, since the whole aesthetic relies on translucency.
- All "drift" and "breathe" motion must respect `prefers-reduced-motion` — freeze on a static mid-state rather than removing the effect abruptly.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Let every edge soften — large radii, blur, and diffuse shadows, never a hard line.
- ✅ Use slow, drifting motion for state changes instead of snappy transitions.
- ✅ Keep a near-opaque legibility floor under any text-bearing surface.

## Don't

- ❌ Use hard-edged shadows or sharp corners — that breaks the liminal, unfocused mood.
- ❌ Rely on saturated, punchy color — dreampunk stays desaturated and pastel-cool.
- ❌ Animate everything constantly at full speed; the pacing should feel unhurried and ambient.

## Don't confuse this with…

*Commonly confused neighbors:* vaporwave, dreamcore.

vs vaporwave: vaporwave is saturated pink/cyan with explicit 80s/90s consumer nostalgia (grids, statues, VHS); dreampunk is desaturated, foggy, and mood-first with no explicit retro iconography. vs dreamcore: dreamcore leans into uncanny/surreal imagery and liminal-space photography; dreampunk is the UI-token translation of that mood into soft glowing interface material.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
