# macOS Vibrancy / Translucency — Implementation Spec

*Aliases:* vibrancy, NSVisualEffectView  
*Slug:* `macos-vibrancy` · *Category:* glass · *Era:* 2014–present

**Origin.** Apple OS X Yosemite (2014).

**Reference example.** macOS Finder sidebar; Notification Center.

## Signature move(s)

A blur-plus-saturate composite filter (`--vibrancy: blur(20px) saturate(1.8)`) applied to *system chrome* — sidebars, toolbars, notification panels — so that content-adaptive text and icons appear to pull color from whatever's behind them, boosted in saturation rather than just dimmed. Unlike decorative glass, vibrancy always sits at one of a few fixed material "tiers" (menu, sidebar, HUD, under-window) and is warm/neutral, never a loud accent color.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Sidebar/toolbar materials that sample and blur the desktop
- Vibrant text/icons that adapt to backdrop
- Subtle luminance blending
- System-level material tiers (menu, sidebar, HUD)

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/macos-vibrancy.css`.)

```css
/* macOS Vibrancy / Translucency — design tokens (generated from style_catalog.json) */
/* 2014–present | Apple OS X Yosemite (2014). */
:root {
  /* color */
  --color-bg: #dfe6ee;
  --color-surface: rgba(255,255,255,0.55);
  --color-surface-strong: rgba(255,255,255,0.78);
  --color-border: rgba(0,0,0,0.08);
  --color-text: #1d1d1f;
  --color-text-muted: rgba(29,29,31,0.6);
  --color-primary: #007aff;
  --color-accent: #ff9f0a;
  --color-scrim: rgba(255,255,255,0.4);
  /* radius */
  --radius-sm: 8px;
  --radius-md: 10px;
  --radius-lg: 14px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.06);
  --shadow-md: 0 8px 24px rgba(0,0,0,0.10);
  --shadow-lg: 0 20px 48px rgba(0,0,0,0.14);
  --shadow-inset-hi: inset 0 1px 0 rgba(255,255,255,0.6);
  /* blur */
  --blur-backdrop: 20px;
  --blur-backdrop-strong: 30px;
  /* font */
  --font-sans: -apple-system, 'SF Pro Text', 'Helvetica Neue', system-ui, sans-serif;
  --font-display: -apple-system, 'SF Pro Display', system-ui, sans-serif;
  --font-mono: 'SF Mono', ui-monospace, monospace;
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
  /* extra (signature gradients, composite borders, filters) */
  --bg-image: linear-gradient(160deg, #a7c6f2 0%, #dfe6ee 45%, #f3d9c4 100%);
  --vibrancy: blur(var(--blur-backdrop)) saturate(1.8);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// macOS Vibrancy / Translucency — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#dfe6ee",
        "surface": "rgba(255,255,255,0.55)",
        "surface-strong": "rgba(255,255,255,0.78)",
        "border": "rgba(0,0,0,0.08)",
        "text": "#1d1d1f",
        "text-muted": "rgba(29,29,31,0.6)",
        "primary": "#007aff",
        "accent": "#ff9f0a",
        "scrim": "rgba(255,255,255,0.4)",
      },
      borderRadius: {
        "sm": "8px",
        "md": "10px",
        "lg": "14px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 2px rgba(0,0,0,0.06)",
        "md": "0 8px 24px rgba(0,0,0,0.10)",
        "lg": "0 20px 48px rgba(0,0,0,0.14)",
        "inset-hi": "inset 0 1px 0 rgba(255,255,255,0.6)",
      },
      backdropBlur: {
        "backdrop": "20px",
        "backdrop-strong": "30px",
      },
      fontFamily: {
        "sans": ["-apple-system", "'SF Pro Text'", "'Helvetica Neue'", "system-ui", "sans-serif"],
        "display": ["-apple-system", "'SF Pro Display'", "system-ui", "sans-serif"],
        "mono": ["'SF Mono'", "ui-monospace", "monospace"],
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
        "standard": "cubic-bezier(0.2, 0, 0, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --bg-image: linear-gradient(160deg, #a7c6f2 0%, #dfe6ee 45%, #f3d9c4 100%);
//   --vibrancy: blur(var(--blur-backdrop)) saturate(1.8);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Flat vibrancy-tier fill (`--color-surface`) with the `--vibrancy` filter; icon-only buttons let their glyph color visibly shift with the backdrop. |
| **Input** | Fully opaque `--color-surface-strong` — text fields sit *on* vibrant chrome, not made of it, so typed content stays crisp. |
| **Card** | Content cards stay opaque white/near-white; vibrancy is reserved for the chrome around them (sidebar, toolbar), not the content itself. |
| **Nav** | The archetype: sidebar/toolbar with `--vibrancy` applied, `--shadow-inset-hi` along the top edge, icons tinted to feel "pulled from" the desktop behind. |
| **Modal** | HUD-tier material: stronger blur (`--blur-backdrop-strong`), dark scrim variant for overlays, rounded `--radius-lg`. |
| **Table** | Solid `--color-surface-strong` rows; only the enclosing toolbar/header strip carries vibrancy. |
| **Tooltip** | Small HUD-style vibrant chip with `--shadow-sm`. |
| **Badge** | Solid, saturated fill — badges must stay legible regardless of backdrop, so skip vibrancy here. |
| **Toggle** | Opaque track/knob — never vibrant, since state must be unambiguous at a glance. |
| **Loading** | A vibrancy-tier progress bar or spinner that subtly shifts hue as it animates over changing content behind it. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Vibrancy's entire premise is content-adaptive color — this is unpredictable for contrast. Never rely on it for text; keep all readable text on an opaque `--color-surface-strong` layer and verify with `contrast_check.py`.
- Honor "Reduce Transparency" (macOS system setting) by falling back `--vibrancy` to a flat opaque tint with no blur/saturate.
- Icon color should never be the *only* differentiator for state (selected/unselected) since vibrant tinting shifts with backdrop — pair with a background chip or outline.
- Keep material tiers consistent: don't mix a HUD-strength blur with a sidebar-strength one in the same view — it breaks the system's implied hierarchy.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Apply vibrancy only to system chrome tiers (sidebar, toolbar, HUD, menu) — never to primary content cards.
- ✅ Use the `saturate(1.8)` boost, not just blur — that's what makes it feel "vibrant" rather than merely frosted.
- ✅ Keep interactive/readable text on a fully opaque surface layered above the vibrant material.

## Don't

- ❌ Apply vibrancy to body content or long-form reading surfaces.
- ❌ Drop the saturate boost and call plain blur "vibrancy" — desaturated blur is just frosted glass.
- ❌ Ignore the OS-level Reduce Transparency setting; it must have a real opaque fallback.

## Don't confuse this with…

*Commonly confused neighbors:* glassmorphism, liquid-glass.

vs glassmorphism: glassmorphism is decorative and used on persistent content cards over a vivid backdrop; Vibrancy is a *system material tier* reserved for chrome (sidebars, toolbars) and defined by its `saturate()` boost pulling color from the desktop, not by a colorful gradient background. vs Liquid Glass: Liquid Glass refracts and moves with spring physics as a dynamic "meta-material"; Vibrancy is static and its identity comes entirely from the saturation/luminance blend, with no refraction or specular highlight.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
