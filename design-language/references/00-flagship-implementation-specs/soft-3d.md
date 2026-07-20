# Soft 3D Illustration — Implementation Spec

*Aliases:* 3D render UI, Spline 3D, claymation UI
*Slug:* `soft-3d` · *Category:* morphism · *Era:* 2020–present

**Origin.** Rise of Spline, Blender, and Dribbble 3D illustration trend.

**Reference example.** Spline showcase sites; Stripe/Vercel 3D hero scenes.

## Signature move(s)

Matte, pastel, soft-lit forms with dual-direction shadow (`--shadow-sm/md/lg` pair a warm ambient-occlusion shadow with a cool rim highlight) simulating a single soft studio light — applied not just to hero illustrations but bled into flat UI chrome as an "inset relief" so buttons and cards feel gently extruded from the same material.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Rounded, soft-lit 3D rendered objects
- Matte pastel materials, ambient occlusion
- Floating isometric-ish scenes
- Paired with flat UI chrome

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/soft-3d.css`.)

```css
/* Soft 3D Illustration — design tokens (generated from style_catalog.json) */
/* 2020–present | Rise of Spline, Blender, and Dribbble 3D illustration trend. */
:root {
  /* color */
  --color-bg: #eef1fb;
  --color-surface: #ffffff;
  --color-surface-strong: #f6f4ff;
  --color-text: #2d2a45;
  --color-text-muted: #6b6690;
  --color-primary: #6d5ae6;
  --color-accent: #ff9e7d;
  --color-mint: #7be0c4;
  /* radius */
  --radius-sm: 16px;
  --radius-md: 24px;
  --radius-lg: 32px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 6px 6px 14px rgba(151, 143, 199, 0.28), -4px -4px 12px rgba(255, 255, 255, 0.85);
  --shadow-md: 10px 10px 24px rgba(151, 143, 199, 0.32), -6px -6px 18px rgba(255, 255, 255, 0.9);
  --shadow-lg: 16px 16px 40px rgba(151, 143, 199, 0.36), -10px -10px 26px rgba(255, 255, 255, 0.95);
  --shadow-inset-hi: inset 2px 2px 4px rgba(255, 255, 255, 0.9), inset -2px -2px 6px rgba(151, 143, 199, 0.25);
  /* font */
  --font-sans: 'Inter', 'Quicksand', system-ui, -apple-system, sans-serif;
  --font-display: 'Quicksand', 'Poppins', sans-serif;
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
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
  --ease-entrance: cubic-bezier(0, 0, 0, 1);
  --ease-exit: cubic-bezier(0.3, 0, 1, 1);
  /* extra */
  --clay-gradient: linear-gradient(160deg, #ffffff 0%, #f3f1ff 60%, #e9e5ff 100%);
  --relief-highlight: rgba(255, 255, 255, 0.9);
  --relief-shadow: rgba(151, 143, 199, 0.32);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Soft 3D Illustration — Tailwind theme fragment (generated).
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#eef1fb",
        "surface": "#ffffff",
        "surface-strong": "#f6f4ff",
        "text": "#2d2a45",
        "text-muted": "#6b6690",
        "primary": "#6d5ae6",
        "accent": "#ff9e7d",
        "mint": "#7be0c4",
      },
      borderRadius: {
        "sm": "16px", "md": "24px", "lg": "32px", "pill": "999px",
      },
      boxShadow: {
        "sm": "6px 6px 14px rgba(151, 143, 199, 0.28), -4px -4px 12px rgba(255, 255, 255, 0.85)",
        "md": "10px 10px 24px rgba(151, 143, 199, 0.32), -6px -6px 18px rgba(255, 255, 255, 0.9)",
        "lg": "16px 16px 40px rgba(151, 143, 199, 0.36), -10px -10px 26px rgba(255, 255, 255, 0.95)",
        "inset-hi": "inset 2px 2px 4px rgba(255, 255, 255, 0.9), inset -2px -2px 6px rgba(151, 143, 199, 0.25)",
      },
      fontFamily: {
        "sans": ["'Inter'", "'Quicksand'", "system-ui", "-apple-system", "sans-serif"],
        "display": ["'Quicksand'", "'Poppins'", "sans-serif"],
        "mono": ["ui-monospace", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem", "sm": "0.875rem", "base": "1rem", "lg": "1.125rem",
        "xl": "1.375rem", "2xl": "1.75rem", "3xl": "2.25rem", "4xl": "3rem", "5xl": "4rem",
      },
      spacing: {
        "1": "4px", "2": "8px", "3": "12px", "4": "16px", "6": "24px",
        "8": "32px", "12": "48px", "16": "64px", "24": "96px",
      },
      transitionTimingFunction: {
        "standard": "cubic-bezier(0.2, 0, 0, 1)",
        "entrance": "cubic-bezier(0, 0, 0, 1)",
        "exit": "cubic-bezier(0.3, 0, 1, 1)",
      },
    },
  },
};

// `--clay-gradient`, `--relief-highlight`, `--relief-shadow` are CSS-only material
// tokens — wire them as custom properties or arbitrary Tailwind values.
```

## Component rules (the 10 primitives)

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--radius-pill`, `--clay-gradient` fill, `--shadow-sm` at rest; pressed state swaps to `--shadow-inset-hi` so it looks physically pushed in. |
| **Input** | `--color-surface` fill with `--shadow-inset-hi` baked in permanently (looks carved in), no border; focus adds `--color-primary` glow ring. |
| **Card** | `--radius-lg`, `--clay-gradient`, `--shadow-md`; hovering interactive cards lifts to `--shadow-lg`. |
| **Nav** | Pill-shaped floating bar, `--shadow-sm`, `--color-surface`, echoing the same clay material as buttons. |
| **Modal** | `--radius-lg`, `--shadow-lg`, centered with a soft blurred scrim; feels like a large clay tile floating over the page. |
| **Table** | Flat `--color-surface` rows (no relief — reserve 3D relief for discrete controls, not dense grids). |
| **Tooltip** | Tiny clay chip, `--radius-sm`, `--shadow-sm`. |
| **Badge** | Small pill, `--shadow-sm` at reduced scale, tinted with `--color-accent` or `--color-mint` for status. |
| **Toggle** | Track uses `--shadow-inset-hi` (carved-in look); knob uses `--shadow-sm` (raised) so on/off reads as literal depth inversion. |
| **Loading** | A soft-shadowed pulsing clay blob or skeleton block using `--shadow-inset-hi` fading in and out. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

- Dual-tone soft shadows have low contrast by design — never rely on the shadow alone to mark a control as interactive; pair with a visible fill/border change on hover/focus.
- `--color-text-muted` on `--color-bg` is close in luminance for a pastel palette — verify with `contrast_check.py` and darken muted text if it fails.
- The pressed/inset state (`--shadow-inset-hi`) can look identical to a disabled state at a glance — add a clear opacity or cursor change for actually-disabled controls.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Keep the light source direction consistent across every shadow pair in the UI (top-left highlight, bottom-right shadow).
- ✅ Use `--radius-lg`/`--radius-pill` liberally — sharp corners break the "molded" illusion.
- ✅ Reserve full 3D relief for buttons, cards, and toggles; keep dense data flat.

## Don't

- ❌ Mix inset and outset shadows on the same element without a state reason (pressed vs resting).
- ❌ Use saturated, dark colors — the style depends on pastel matte materials.
- ❌ Apply the clay shadow pair to body text or fine UI chrome — it gets muddy at small sizes.

## Don't confuse this with…

*Commonly confused neighbors:* claymorphism, isometric.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
