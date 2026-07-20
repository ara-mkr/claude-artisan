# Blobmorphism — Implementation Spec

*Aliases:* blob design, blob shapes
*Slug:* `blobmorphism` · *Category:* minimal-organic · *Era:* 2019–present

**Origin.** Trend of amorphous blob shapes as UI/decoration.

**Reference example.** Dribbble blob illustration sets; startup hero backgrounds.

## Signature move(s)

Oversized irregular blob shapes — asymmetric four-value `border-radius` strings like `--radius-md` (`32px 48px 28px 40px`) — sit behind or clip content, filled with the `--blob-gradient` (red → yellow → teal) and animated to slowly morph between `--blob-shape-a` and `--blob-shape-b`. Unlike organic-design's muted naturals, blobmorphism is loud and candy-colored: bright gradient blobs as decoration and as container shapes for cards and image masks alike.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Irregular gooey blob backgrounds and masks
- Bright gradient-filled blobs
- Playful, friendly, soft
- Animated morphing shapes

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/blobmorphism.css`.)

```css
/* Blobmorphism — design tokens (generated from style_catalog.json) */
/* 2019–present | Trend of amorphous blob shapes as UI/decoration. */
:root {
  /* color */
  --color-bg: #fef6ef;
  --color-surface: #ffffff;
  --color-surface-strong: #fff0e0;
  --color-border: #ffd9b8;
  --color-text: #2c1e3a;
  --color-text-muted: #6b5a7d;
  --color-primary: #ff6b6b;
  --color-accent: #4ecdc4;
  --color-yellow: #ffd93d;
  /* radius */
  --radius-sm: 14px;
  --radius-md: 32px 48px 28px 40px;
  --radius-lg: 56px 40px 64px 36px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 4px 12px rgba(255,107,107,0.18);
  --shadow-md: 0 12px 28px rgba(78,205,196,0.22);
  --shadow-lg: 0 20px 44px rgba(255,107,107,0.24);
  /* font */
  --font-sans: 'Quicksand', 'Baloo 2', system-ui, sans-serif;
  --font-display: 'Baloo 2', 'Fredoka', system-ui, sans-serif;
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
  --ease-standard: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-entrance: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-exit: cubic-bezier(0.5, 0, 0.75, 0);
  /* extra (signature blob gradient + shape pair) */
  --blob-gradient: linear-gradient(135deg, #ff6b6b 0%, #ffd93d 50%, #4ecdc4 100%);
  --blob-shape-a: 32px 48px 28px 40px;
  --blob-shape-b: 48px 28px 40px 32px;
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Blobmorphism — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#fef6ef",
        "surface": "#ffffff",
        "surface-strong": "#fff0e0",
        "border": "#ffd9b8",
        "text": "#2c1e3a",
        "text-muted": "#6b5a7d",
        "primary": "#ff6b6b",
        "accent": "#4ecdc4",
        "yellow": "#ffd93d",
      },
      borderRadius: {
        "sm": "14px",
        "md": "32px 48px 28px 40px",
        "lg": "56px 40px 64px 36px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 4px 12px rgba(255,107,107,0.18)",
        "md": "0 12px 28px rgba(78,205,196,0.22)",
        "lg": "0 20px 44px rgba(255,107,107,0.24)",
      },
      fontFamily: {
        "sans": ["'Quicksand'", "'Baloo 2'", "system-ui", "sans-serif"],
        "display": ["'Baloo 2'", "'Fredoka'", "system-ui", "sans-serif"],
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
        "standard": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "entrance": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "exit": "cubic-bezier(0.5, 0, 0.75, 0)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradient fill + shape-morph pair).
// Add as custom properties or arbitrary values:
//   --blob-gradient: linear-gradient(135deg, #ff6b6b 0%, #ffd93d 50%, #4ecdc4 100%);
//   --blob-shape-a: 32px 48px 28px 40px;
//   --blob-shape-b: 48px 28px 40px 32px;
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--radius-pill` for compact buttons, or `--radius-md` for larger CTAs; primary fills `--blob-gradient`. Hover triggers a subtle shape morph toward `--blob-shape-b` via `--ease-standard` (bouncy overshoot). |
| **Input** | `--radius-sm`, keep functional and near-rectangular — blobs belong to decoration, not typing targets. |
| **Card** | The hero: `--radius-md` or `--radius-lg`, `--shadow-md`, background `--color-surface` with a blurred `--blob-gradient` shape bleeding from behind one corner. |
| **Nav** | Pill bar (`--radius-pill`) with a small blob logo mark; keep the bar itself calm so blobs stay a decorative accent. |
| **Modal** | `--radius-lg`, blob-shaped decorative accent in a corner, scrim behind in `--color-text` at low opacity. |
| **Table** | Wrapper takes `--radius-md`; row dividers stay straight so data stays scannable amid the playful chrome. |
| **Tooltip** | Small `--radius-sm` chip, solid `--color-surface-strong` — no gradient, so text stays legible at a glance. |
| **Badge** | `--radius-pill` filled with a mini `--blob-gradient` swatch or a flat tint of `--color-accent`/`--color-yellow`. |
| **Toggle** | Track `--radius-pill`, knob morphs shape slightly on toggle using `--ease-entrance`/`--ease-exit`. |
| **Loading** | An animated blob continuously interpolating between `--blob-shape-a` and `--blob-shape-b`, filled with `--blob-gradient`. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- The shape-morphing animation (blob interpolation, hover overshoot) must respect `prefers-reduced-motion: reduce` — freeze on `--blob-shape-a` and drop the bounce easing to a simple opacity fade.
- Never place body text directly over `--blob-gradient` — the gradient spans light yellow to saturated red/teal and will fail contrast at some point along it; put text on flat `--color-surface` instead.
- `--color-text-muted` (#6b5a7d) on `--color-bg` (#fef6ef) needs verification at small sizes — reserve for secondary labels ≥14px.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Keep blobs as background/decoration or container shape, never as the direct surface for body text.
- ✅ Vary blob-shape values slightly per instance so they don't look like one stamped asset repeated.
- ✅ Pair blob shapes with rounded-but-simple typography (`--font-display`) to keep the whole system friendly.

## Don't

- ❌ Use sharp/angular typography or hairline rules — it fights the soft, gooey premise.
- ❌ Overuse the full three-stop gradient on small UI chrome; save it for hero-scale shapes.
- ❌ Let blobs clip interactive controls (buttons, close icons) — keep hit targets inside the shape's rectangular bounds.

## Don't confuse this with…

*Commonly confused neighbors:* organic-design, claymorphism.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
