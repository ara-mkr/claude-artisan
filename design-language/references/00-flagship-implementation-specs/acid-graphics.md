# Acid Graphics / Acid Design — Implementation Spec

*Aliases:* acid design, psybient graphics, Y2K acid  
*Slug:* `acid-graphics` · *Category:* niche · *Era:* 2019–present (evokes 90s rave)

**Origin.** Revival of 90s rave/acid-house flyer graphics.

**Reference example.** Techno/rave posters; 2020s fashion (Balenciaga-adjacent).

## Signature move(s)

A five-stop chrome gradient (`--chrome-gradient`: off-white → toxic lime → hot magenta → acid green → off-white) painted across type and key surfaces to simulate melted liquid-metal lettering, plus a slight skew/rotate warp (`--warp: skewY(-1.4deg) rotate(-0.6deg)`) applied to hero blocks so the whole layout feels like it's mid-melt over a near-black purple void.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Melted chrome type, distorted 3D blobs
- Toxic greens, purples, chrome
- Trippy warped compositions
- Rave/underground energy

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/acid-graphics.css`.)

```css
/* Acid Graphics / Acid Design — design tokens (generated from style_catalog.json) */
/* 2019–present (evokes 90s rave) | Revival of 90s rave/acid-house flyer graphics. */
:root {
  /* color */
  --color-bg: #0a0510;
  --color-surface: #1a0f2e;
  --color-surface-strong: #2a1a45;
  --color-border: #ccff00;
  --color-text: #eafff0;
  --color-text-muted: rgba(234, 255, 240, 0.68);
  --color-primary: #ccff00;
  --color-accent: #ff2ee0;
  --color-toxic-green: #7cff2e;
  /* radius */
  --radius-sm: 4px;
  --radius-md: 10px;
  --radius-lg: 18px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 2px 10px rgba(204, 255, 0, 0.18);
  --shadow-md: 0 8px 28px rgba(255, 46, 224, 0.25), 0 0 0 1px rgba(204,255,0,0.15);
  --shadow-lg: 0 18px 48px rgba(124, 255, 46, 0.22), 0 0 0 1px rgba(255,46,224,0.2);
  /* font */
  --font-sans: 'Space Grotesk', 'Helvetica Neue', system-ui, sans-serif;
  --font-display: 'Chrome', 'Arial Black', 'Space Grotesk', sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, monospace;
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
  --ease-standard: cubic-bezier(0.6, 0, 0.2, 1.4);
  --ease-entrance: cubic-bezier(0.2, 1.4, 0.4, 1);
  --ease-exit: cubic-bezier(0.6, 0, 1, 1);
  /* extra (chrome gradient, bg wash, warp) */
  --chrome-gradient: linear-gradient(120deg, #eafff0 0%, #ccff00 22%, #ff2ee0 50%, #7cff2e 74%, #eafff0 100%);
  --bg-image: radial-gradient(140% 100% at 10% -10%, #2a1a45 0%, #0a0510 55%, #150826 100%);
  --warp: skewY(-1.4deg) rotate(-0.6deg);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Acid Graphics / Acid Design — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0a0510",
        "surface": "#1a0f2e",
        "surface-strong": "#2a1a45",
        "border": "#ccff00",
        "text": "#eafff0",
        "text-muted": "rgba(234, 255, 240, 0.68)",
        "primary": "#ccff00",
        "accent": "#ff2ee0",
        "toxic-green": "#7cff2e",
      },
      borderRadius: {
        "sm": "4px",
        "md": "10px",
        "lg": "18px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 10px rgba(204, 255, 0, 0.18)",
        "md": "0 8px 28px rgba(255, 46, 224, 0.25), 0 0 0 1px rgba(204,255,0,0.15)",
        "lg": "0 18px 48px rgba(124, 255, 46, 0.22), 0 0 0 1px rgba(255,46,224,0.2)",
      },
      fontFamily: {
        "sans": ["'Space Grotesk'", "'Helvetica Neue'", "system-ui", "sans-serif"],
        "display": ["'Chrome'", "'Arial Black'", "'Space Grotesk'", "sans-serif"],
        "mono": ["'JetBrains Mono'", "ui-monospace", "monospace"],
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
        "standard": "cubic-bezier(0.6, 0, 0.2, 1.4)",
        "entrance": "cubic-bezier(0.2, 1.4, 0.4, 1)",
        "exit": "cubic-bezier(0.6, 0, 1, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/warp transforms).
// Add them as CSS custom properties or arbitrary values:
//   --chrome-gradient: linear-gradient(120deg, #eafff0 0%, #ccff00 22%, #ff2ee0 50%, #7cff2e 74%, #eafff0 100%);
//   --bg-image: radial-gradient(140% 100% at 10% -10%, #2a1a45 0%, #0a0510 55%, #150826 100%);
//   --warp: skewY(-1.4deg) rotate(-0.6deg);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--chrome-gradient` background-clip on text, or full chrome fill for the primary CTA; `--shadow-md`, sharp `--radius-sm`, slight `--warp` on hover. |
| **Input** | `--color-surface` fill, `--color-border` (acid lime) 1px border; focus swaps border to `--color-accent` (magenta) with `--shadow-sm`. |
| **Card** | `--radius-md`, `--color-surface-strong`, `--shadow-md`; header text rendered in `--chrome-gradient`. |
| **Nav** | Flat `--color-bg` bar, wordmark in chrome gradient, active link underlined in `--color-primary`. |
| **Modal** | `--radius-lg`, `--shadow-lg`, apply `--warp` to the whole panel for a "melting" entrance, then settle to 0 warp. |
| **Table** | Keep flat and un-warped (`--color-surface`, thin `--color-border` gridlines) — warp/chrome are for hero moments, not dense data. |
| **Tooltip** | Small `--color-surface-strong` chip with `--color-border` outline, no warp (must stay legible instantly). |
| **Badge** | `--radius-sm`, alternating `--color-primary`/`--color-accent`/`--color-toxic-green` fills for variety, black text for contrast. |
| **Toggle** | Track in `--color-surface-strong`; active knob picks up `--chrome-gradient`. |
| **Loading** | An animated chrome-gradient bar (`background-position` sweep) rather than a plain spinner — reads as "liquid metal flowing." |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- `--color-text-muted` at 68% opacity on `--color-bg` is a near-black background with reduced-opacity light text — re-verify with `contrast_check.py`; bump opacity or switch to a solid muted tone if it fails.
- `--chrome-gradient` text (background-clip: text) must never carry the only copy of critical information — always keep a solid-color fallback for body/paragraph text, restrict the gradient treatment to short headlines/logotype.
- The `--warp` skew/rotate transform and gradient-sweep loading animation must respect `prefers-reduced-motion: reduce` — disable the warp entrance and swap the sweep for a static state.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Reserve the chrome gradient for display type and one hero CTA — using it everywhere flattens its impact.
- ✅ Keep dense UI (tables, forms, tooltips) flat and legible; save warp/gradient chaos for marketing surfaces.
- ✅ Layer acid lime, magenta, and toxic green together — the clash of all three is what reads as "acid," not any single color alone.

## Don't

- ❌ Warp or skew body text — it becomes illegible fast.
- ❌ Use pastel or muted versions of these colors — the palette must stay maximally saturated/toxic.
- ❌ Animate the chrome sweep or warp transform without a `prefers-reduced-motion` fallback.

## Don't confuse this with…

*Commonly confused neighbors:* chromecore, psychedelic, holographic.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
