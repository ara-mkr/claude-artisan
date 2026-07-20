# Ant Design — Implementation Spec

*Aliases:* antd
*Slug:* `ant-design` · *Category:* flat-platform · *Era:* 2015–present

**Origin.** Ant Group / Alibaba (Chinese enterprise ecosystem).

**Reference example.** Alibaba enterprise consoles; many admin panels.

## Signature move(s)

A dense, blue-primary (`#1677ff`) enterprise UI where every interactive control gets the same soft `--radius-md` (6px) corner and the same layered `--shadow-sm/md/lg` triplet, and every focusable field grows a diffuse `--focus-ring` halo (`rgba(22,119,255,0.16)`) rather than a hard outline. The whole system reads as "many small components, one consistent corner radius and one consistent focus glow," which is what lets antd apps pack dozens of controls per screen without feeling chaotic.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Dense, component-rich enterprise UI
- Blue primary, subtle shadows, 6px radius default
- Comprehensive form/table components
- Pragmatic, information-heavy

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/ant-design.css`.)

```css
/* Ant Design — design tokens (generated from style_catalog.json) */
/* 2015–present | Ant Group / Alibaba (Chinese enterprise ecosystem). */
:root {
  /* color */
  --color-bg: #f5f5f5;
  --color-surface: #ffffff;
  --color-surface-strong: #fafafa;
  --color-border: #d9d9d9;
  --color-text: #1f1f1f;
  --color-text-muted: #595959;
  --color-primary: #1677ff;
  --color-accent: #13c2c2;
  /* radius */
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 2px 8px rgba(0,0,0,0.08);
  --shadow-lg: 0 6px 16px rgba(0,0,0,0.1);
  /* font */
  --font-sans: -apple-system, 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif;
  --font-display: -apple-system, 'Segoe UI', sans-serif;
  --font-mono: 'SFMono-Regular', Consolas, monospace;
  /* text */
  --text-xs: 0.75rem;
  --text-sm: 0.8125rem;
  --text-base: 0.875rem;
  --text-lg: 1rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 2rem;
  --text-4xl: 2.5rem;
  --text-5xl: 3.25rem;
  /* space */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 20px;
  --space-8: 24px;
  --space-12: 32px;
  --space-16: 48px;
  --space-24: 64px;
  /* ease */
  --ease-standard: cubic-bezier(0.645, 0.045, 0.355, 1);
  /* extra (signature gradients, composite borders, filters) */
  --focus-ring: 0 0 0 3px rgba(22,119,255,0.16);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Ant Design — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f5f5f5",
        "surface": "#ffffff",
        "surface-strong": "#fafafa",
        "border": "#d9d9d9",
        "text": "#1f1f1f",
        "text-muted": "#595959",
        "primary": "#1677ff",
        "accent": "#13c2c2",
      },
      borderRadius: {
        "sm": "4px",
        "md": "6px",
        "lg": "8px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 2px rgba(0,0,0,0.05)",
        "md": "0 2px 8px rgba(0,0,0,0.08)",
        "lg": "0 6px 16px rgba(0,0,0,0.1)",
      },
      fontFamily: {
        "sans": ["-apple-system", "'Segoe UI'", "'PingFang SC'", "'Microsoft YaHei'", "sans-serif"],
        "display": ["-apple-system", "'Segoe UI'", "sans-serif"],
        "mono": ["'SFMono-Regular'", "Consolas", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem",
        "sm": "0.8125rem",
        "base": "0.875rem",
        "lg": "1rem",
        "xl": "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
        "5xl": "3.25rem",
      },
      spacing: {
        "1": "4px",
        "2": "8px",
        "3": "12px",
        "4": "16px",
        "6": "20px",
        "8": "24px",
        "12": "32px",
        "16": "48px",
        "24": "64px",
      },
      transitionTimingFunction: {
        "standard": "cubic-bezier(0.645, 0.045, 0.355, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --focus-ring: 0 0 0 3px rgba(22,119,255,0.16);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--radius-md` (6px), solid `--color-primary` fill for primary, outline for default; hover lightens fill 1 step, focus adds `--focus-ring`. |
| **Input** | `--radius-md` field with 1px `--color-border`; focus swaps border to `--color-primary` and grows `--focus-ring` around the whole field. |
| **Card** | `--color-surface`, `--radius-lg`, `--shadow-sm` at rest, a compact header with 1px bottom `--color-border` divider. |
| **Nav** | Dense horizontal or side menu, items get `--color-surface-strong` background + `--color-primary` text/icon when active, no radius on the menu bar itself. |
| **Modal** | Centered `--radius-lg` panel, `--shadow-lg`, dark scrim; header/body/footer separated by `--color-border` hairlines. |
| **Table** | Very dense rows, `--color-border` hairline dividers, sticky header on `--color-surface-strong`, hover row tint. |
| **Tooltip** | Small dark chip, `--radius-sm`, `--shadow-md`, arrow pointer. |
| **Badge** | Small solid dot or numeral pill (`--radius-pill`) in `--color-accent` or a semantic status color. |
| **Toggle** | Pill track (`--radius-pill`), `--color-primary` when on, sliding circular knob with `--shadow-sm`. |
| **Loading** | Circular spinner in `--color-primary`, or skeleton blocks on `--color-surface-strong` shimmering with `--ease-standard`. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- At antd's dense information scale, `--text-sm` (0.8125rem) and `--text-base` (0.875rem) are genuinely small — verify body copy still clears 4.5:1 against `--color-surface` with `contrast_check.py`, especially `--color-text-muted` used for secondary labels in tables/forms.
- Don't let the diffuse `--focus-ring` glow substitute for keyboard focus visibility on non-form controls (menu items, table rows) — pair it with a visible outline or background shift.
- In data-dense tables, keep enough row padding (`--space-2`/`--space-3`) that hover/selection states remain distinguishable from the `--grid` zebra pattern, not just a 1px color shift.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Use `--radius-md` (6px) as the default corner everywhere — buttons, inputs, cards, dropdowns.
- ✅ Reserve the diffuse `--focus-ring` for form-field focus specifically, not general hover states.
- ✅ Pack information densely but keep a consistent `--space-2`–`--space-4` rhythm between elements.

## Don't

- ❌ Mix in large, loose spacing from a marketing-site aesthetic — antd is deliberately dense.
- ❌ Swap the blue `--color-primary` for a low-saturation neutral — the saturated blue is core to the brand recognition.
- ❌ Drop the `--focus-ring` glow in favor of a hard 1px outline; it changes the system's signature feel.

## Don't confuse this with…

*Commonly confused neighbors:* carbon-design, material-design.

vs carbon-design: Carbon is zero-radius and sharp-cornered with underline-based active states; antd rounds everything to 6px and uses a glow-based focus ring. vs material-design: Material's hierarchy comes from elevation shadows and ripple feedback; antd's hierarchy comes from density, consistent radius, and the blue focus glow, with much flatter shadows.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
