# Windows Aero Glass — Implementation Spec

*Aliases:* Aero, Vista glass, Aero Glass  
*Slug:* `aero-glass` · *Category:* glass · *Era:* 2006–2012

**Origin.** Microsoft Windows Vista (2006) and Windows 7 Aero.

**Reference example.** Windows Vista / 7 title bars and taskbar.

## Signature move(s)

A saturated blue-glass tint (`--glass-fill`) with a hard, bright specular streak across the top third of every surface (`--glass-sheen`), a thin bright rim (`--color-border` at 55% white), and a colored outer glow (`--shadow-md`/`--shadow-lg` include a soft blue halo, not just a black drop shadow). The blur is comparatively shallow (`--blur-backdrop: 12px`) — Aero reads as *glossy and reflective* first, blurred second.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Translucent window chrome with Gaussian blur
- Colored glass tint with reflective sheen
- Rounded window corners and glow
- Live thumbnails / Flip 3D

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/aero-glass.css`.)

```css
/* Windows Aero Glass — design tokens (generated from style_catalog.json) */
/* 2006–2012 | Microsoft Windows Vista (2006) and Windows 7 Aero. */
:root {
  /* color */
  --color-bg: #0d2a4a;
  --color-bg-gradient-a: #14406e;
  --color-bg-gradient-b: #0a1c33;
  --color-surface: rgba(173, 216, 255, 0.22);
  --color-surface-strong: rgba(173, 216, 255, 0.35);
  --color-border: rgba(255, 255, 255, 0.55);
  --color-text: #f3faff;
  --color-text-muted: rgba(243, 250, 255, 0.78);
  --color-primary: #3d8eeb;
  --color-accent: #8fd7ff;
  /* radius */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 14px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 2px 6px rgba(0,0,0,0.3);
  --shadow-md: 0 8px 24px rgba(0,0,0,0.4), 0 0 12px rgba(141,206,255,0.3);
  --shadow-lg: 0 20px 50px rgba(0,0,0,0.45), 0 0 24px rgba(141,206,255,0.35);
  --shadow-inset-hi: inset 0 1px 0 rgba(255,255,255,0.7);
  /* blur */
  --blur-backdrop: 12px;
  /* font */
  --font-sans: 'Segoe UI', Tahoma, system-ui, sans-serif;
  --font-display: 'Segoe UI', Tahoma, sans-serif;
  --font-mono: 'Consolas', ui-monospace, monospace;
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
  --ease-standard: cubic-bezier(0.2, 0, 0.1, 1);
  /* extra (signature gradients, composite borders, filters) */
  --bg-image: radial-gradient(120% 100% at 50% -20%, #1f5794 0%, #0d2a4a 55%, #071829 100%);
  --glass-fill: linear-gradient(180deg, rgba(210,235,255,0.4) 0%, rgba(173,216,255,0.15) 45%, rgba(120,170,220,0.1) 100%);
  --glass-sheen: linear-gradient(to bottom, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.08) 40%, rgba(255,255,255,0) 70%);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Windows Aero Glass — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0d2a4a",
        "bg-gradient-a": "#14406e",
        "bg-gradient-b": "#0a1c33",
        "surface": "rgba(173, 216, 255, 0.22)",
        "surface-strong": "rgba(173, 216, 255, 0.35)",
        "border": "rgba(255, 255, 255, 0.55)",
        "text": "#f3faff",
        "text-muted": "rgba(243, 250, 255, 0.78)",
        "primary": "#3d8eeb",
        "accent": "#8fd7ff",
      },
      borderRadius: {
        "sm": "6px",
        "md": "10px",
        "lg": "14px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 6px rgba(0,0,0,0.3)",
        "md": "0 8px 24px rgba(0,0,0,0.4), 0 0 12px rgba(141,206,255,0.3)",
        "lg": "0 20px 50px rgba(0,0,0,0.45), 0 0 24px rgba(141,206,255,0.35)",
        "inset-hi": "inset 0 1px 0 rgba(255,255,255,0.7)",
      },
      backdropBlur: {
        "backdrop": "12px",
      },
      fontFamily: {
        "sans": ["'Segoe UI'", "Tahoma", "system-ui", "sans-serif"],
        "display": ["'Segoe UI'", "Tahoma", "sans-serif"],
        "mono": ["'Consolas'", "ui-monospace", "monospace"],
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
        "standard": "cubic-bezier(0.2, 0, 0.1, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --bg-image: radial-gradient(120% 100% at 50% -20%, #1f5794 0%, #0d2a4a 55%, #071829 100%);
//   --glass-fill: linear-gradient(180deg, rgba(210,235,255,0.4) 0%, rgba(173,216,255,0.15) 45%, rgba(120,170,220,0.1) 100%);
//   --glass-sheen: linear-gradient(to bottom, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.08) 40%, rgba(255,255,255,0) 70%);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Pill/rounded-rect with `--glass-fill` + `--glass-sheen` layered on top, `--shadow-sm`, brightens and thickens `--shadow-inset-hi` on hover as if catching more light. |
| **Input** | Slightly recessed glass well (drop the sheen, keep the tint); focus adds the blue glow from `--shadow-md`. |
| **Card** | Title-bar treatment: `--glass-fill` body, `--glass-sheen` across the top ~35%, `--radius-lg`, glow shadow. |
| **Nav** | Taskbar-style bar: darker glass (`--color-surface-strong`), sheen along the top edge, persistent glow under active items. |
| **Modal** | Window chrome: strong glow shadow (`--shadow-lg`), sheen band, close/minimize affordances top-right per the OS reference. |
| **Table** | Keep rows on `--color-bg` solid, reserve glass+sheen for the header bar only. |
| **Tooltip** | Small glass chip, sheen omitted at this size (it reads as noise), keep the glow. |
| **Badge** | Saturated glass pill with the blue glow as its primary state signal. |
| **Toggle** | Glass track with sheen; knob is solid white with `--shadow-sm` so it never disappears into the glow. |
| **Loading** | A blue glow that pulses (animate `--shadow-md`'s glow radius) — evokes the Aero "busy" glow rather than a flat spinner. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- The saturated blue tint plus light text needs explicit contrast verification — `--color-text-muted` over `--color-surface` at 22% opacity composites lighter than it looks in a mockup; check the real composite with `contrast_check.py`.
- Provide a solid, opaque fallback for `backdrop-filter` and honor `prefers-reduced-transparency`.
- The glow shadow is decorative, not a state indicator — always pair a glowing focus/active state with a visible outline or border change too.
- Keep the sheen gradient out of any region where body text sits; it reduces contrast in its brightest 0–40% band.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Put the sheen highlight only in the top third of a surface — that's what sells "glass," not an even gradient.
- ✅ Pair every glass surface with a colored glow shadow, not a plain black one.
- ✅ Keep blur shallow (10–14px) — Aero is glossier and less diffuse than glassmorphism.

## Don't

- ❌ Skip the sheen and call flat tinted panels "Aero" — the reflective streak is the tell.
- ❌ Use a plain black drop shadow; Aero's glow is always tinted toward the accent blue.
- ❌ Push blur past ~16px — that drifts into modern glassmorphism territory and loses the 2007 read.

## Don't confuse this with…

*Commonly confused neighbors:* glassmorphism, frutiger-aero.

vs glassmorphism: glassmorphism is a flat, low-saturation frosted panel (16–28px blur, neutral white tint, no directional sheen). Aero Glass is more saturated blue, shallower blur (~12px), and always carries a bright specular sheen streak plus a colored glow shadow — it's glossy, not just frosted. vs Frutiger Aero: Frutiger Aero is the broader early-2000s optimism aesthetic (nature photography, water droplets, bright gradients across a whole brand); Aero Glass is specifically the Windows OS *window-chrome material* — the glass, not the imagery around it.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
