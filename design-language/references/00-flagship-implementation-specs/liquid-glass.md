# Liquid Glass — Implementation Spec

*Aliases:* Apple Liquid Glass, iOS 26 glass  
*Slug:* `liquid-glass` · *Category:* glass · *Era:* 2025–present

**Origin.** Apple, announced WWDC June 2025; ships in iOS/iPadOS 26, macOS Tahoe, etc.

**Reference example.** iOS 26 / macOS Tahoe system UI (tab bars, controls, sidebars).

## Signature move(s)

A dynamic 'meta-material' that refracts and specular-highlights the content behind it — brighter/springier than static glassmorphism. Hierarchy comes from depth (transparency, refraction) not color or size. Use concentric rounded shapes and fluid spring motion everywhere.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Dynamic 'meta-material' that bends and refracts light like a lens
- Specular edge highlights and real-time refraction of content behind
- Hierarchy through depth, not color/size
- Fluid, springy motion; concentric rounded shapes matching hardware

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/liquid-glass.css`.)

```css
/* Liquid Glass — design tokens (generated from style_catalog.json) */
/* 2025–present | Apple, announced WWDC June 2025; ships in iOS/iPadOS 26, macOS Tahoe, etc. */
:root {
  /* color */
  --color-bg: #000000;
  --color-surface: rgba(255,255,255,0.06);
  --color-surface-strong: rgba(255,255,255,0.14);
  --color-border: rgba(255,255,255,0.30);
  --color-specular: rgba(255,255,255,0.65);
  --color-text: #ffffff;
  --color-text-muted: rgba(235,235,245,0.60);
  --color-primary: #0a84ff;
  --color-accent: #64d2ff;
  --color-scrim: rgba(0,0,0,0.35);
  /* radius */
  --radius-sm: 12px;
  --radius-md: 20px;
  --radius-lg: 28px;
  --radius-pill: 999px;
  --radius-concentric: 22px;
  /* shadow */
  --shadow-sm: 0 2px 10px rgba(0,0,0,0.25);
  --shadow-md: 0 10px 40px rgba(0,0,0,0.35);
  --shadow-lg: 0 20px 60px rgba(0,0,0,0.45);
  --shadow-edge: inset 0 1px 0 rgba(255,255,255,0.55), inset 0 -1px 0 rgba(255,255,255,0.10);
  /* blur */
  --blur-backdrop: 20px;
  --blur-backdrop-thick: 40px;
  /* font */
  --font-sans: -apple-system, 'SF Pro Text', system-ui, sans-serif;
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
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-spring: cubic-bezier(0.2, 0.9, 0.1, 1.1);
  --ease-entrance: cubic-bezier(0.16, 1, 0.3, 1);
  /* extra (signature gradients, composite borders, filters) */
  --lens-highlight: linear-gradient(135deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.05) 40%, rgba(255,255,255,0) 70%);
  --refraction: saturate(1.8) brightness(1.1);
  --glass-border: 1px solid rgba(255,255,255,0.30);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Liquid Glass — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#000000",
        "surface": "rgba(255,255,255,0.06)",
        "surface-strong": "rgba(255,255,255,0.14)",
        "border": "rgba(255,255,255,0.30)",
        "specular": "rgba(255,255,255,0.65)",
        "text": "#ffffff",
        "text-muted": "rgba(235,235,245,0.60)",
        "primary": "#0a84ff",
        "accent": "#64d2ff",
        "scrim": "rgba(0,0,0,0.35)",
      },
      borderRadius: {
        "sm": "12px",
        "md": "20px",
        "lg": "28px",
        "pill": "999px",
        "concentric": "22px",
      },
      boxShadow: {
        "sm": "0 2px 10px rgba(0,0,0,0.25)",
        "md": "0 10px 40px rgba(0,0,0,0.35)",
        "lg": "0 20px 60px rgba(0,0,0,0.45)",
        "edge": "inset 0 1px 0 rgba(255,255,255,0.55), inset 0 -1px 0 rgba(255,255,255,0.10)",
      },
      backdropBlur: {
        "backdrop": "20px",
        "backdrop-thick": "40px",
      },
      fontFamily: {
        "sans": ["-apple-system", "'SF Pro Text'", "system-ui", "sans-serif"],
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
        "standard": "cubic-bezier(0.4, 0, 0.2, 1)",
        "spring": "cubic-bezier(0.2, 0.9, 0.1, 1.1)",
        "entrance": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --lens-highlight: linear-gradient(135deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.05) 40%, rgba(255,255,255,0) 70%);
//   --refraction: saturate(1.8) brightness(1.1);
//   --glass-border: 1px solid rgba(255,255,255,0.30);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Capsule with a specular edge highlight (`--shadow-edge`) and slight refraction; springy scale on press. |
| **Input** | Recessed glass field; focus deepens refraction and lifts the specular edge rather than drawing a hard ring. |
| **Card** | Floating glass with `blur(20px)`, `--shadow-edge` top highlight, concentric radius matched to its container. |
| **Nav** | Floating tab bar/toolbar that refracts scrolling content; it should feel like a lens over the app. |
| **Modal** | Sheet of thicker glass (`blur(40px)`) rising with spring easing; scrim dims the backdrop. |
| **Table** | Content stays on opaque surfaces; only the chrome (toolbar, header) is liquid glass. |
| **Tooltip** | Small capsule with edge highlight; solid fallback for legibility. |
| **Badge** | Glass capsule; lean on depth/highlight, not saturated fills, for hierarchy. |
| **Toggle** | Glass track with an opaque knob that springs across; motion is part of the identity. |
| **Loading** | Shimmering glass with a subtle light sweep along the specular edge. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Honor the system accessibility switches: Reduced Transparency (frostier/opaque), Increased Contrast (predominant black/white + contrasting borders), Reduced Motion (kill the elastic/spring behavior).
- Depth-only hierarchy is invisible to low-vision users — pair it with real contrast and never make refraction the *only* signal.
- On the web this is an approximation; provide an opaque high-contrast fallback path.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Match corner radius concentrically to the enclosing shape/hardware.
- ✅ Use spring/entrance easing for a live, fluid feel.
- ✅ Let content behind drive the look — busy, colorful backdrops.

## Don't

- ❌ Copy static glassmorphism and call it Liquid Glass — it must refract and move.
- ❌ Use it as flat opaque panels with a fake highlight.
- ❌ Ignore the reduced-transparency/motion settings.

## Don't confuse this with…

*Commonly confused neighbors:* glassmorphism, frutiger-aero.

vs glassmorphism: glassmorphism is a *static* frosted look (one blur value, flat highlight); Liquid Glass is Apple's 2025 *dynamic* material that refracts live content and moves with spring physics. vs Frutiger Aero: Aero is glossy skeuomorphic 2000s optimism, not a refractive material.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
