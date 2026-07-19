# Corporate Memphis — Implementation Spec

*Aliases:* Alegria, big tech illustration, flat humano  
*Slug:* `corporate-memphis` · *Category:* minimal-organic · *Era:* 2017–present

**Origin.** Named after Facebook's 'Alegria' illustration style; ubiquitous big-tech look.

**Reference example.** Facebook 'Alegria'; Google/Slack/startup illustrations.

## Signature move(s)

Flat vector illustrations of people with tiny heads and long bendy limbs in bold flat colors ('Alegria'), wrapped in friendly rounded UI. Ubiquitous big-tech look.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Flat vector people with tiny heads, long bendy limbs
- Simple geometric bodies, bold flat colors
- Friendly, inclusive, generic illustration
- Soft rounded UI around it

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/corporate-memphis.css`.)

```css
/* Corporate Memphis — design tokens (generated from style_catalog.json) */
/* 2017–present | Named after Facebook's 'Alegria' illustration style; ubiquitous big-tech look. */
:root {
  /* color */
  --color-bg: #ffffff;
  --color-surface: #f7f5ff;
  --color-surface-2: #eef0ff;
  --color-text: #1f2233;
  --color-text-muted: #5b607a;
  --color-primary: #6c5ce7;
  --color-accent: #ff7a8a;
  --color-secondary: #00b894;
  --color-yellow: #ffd166;
  /* radius */
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 4px 12px rgba(108,92,231,0.10);
  --shadow-md: 0 10px 30px rgba(108,92,231,0.14);
  /* font */
  --font-sans: 'Poppins', 'Circular', system-ui, sans-serif;
  --font-display: 'Poppins', system-ui, sans-serif;
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
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  /* extra (signature gradients, composite borders, filters) */
  --blob: radial-gradient(circle at 30% 30%, #ff7a8a, #6c5ce7);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Corporate Memphis — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#ffffff",
        "surface": "#f7f5ff",
        "surface-2": "#eef0ff",
        "text": "#1f2233",
        "text-muted": "#5b607a",
        "primary": "#6c5ce7",
        "accent": "#ff7a8a",
        "secondary": "#00b894",
        "yellow": "#ffd166",
      },
      borderRadius: {
        "sm": "8px",
        "md": "16px",
        "lg": "24px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 4px 12px rgba(108,92,231,0.10)",
        "md": "0 10px 30px rgba(108,92,231,0.14)",
      },
      fontFamily: {
        "sans": ["'Poppins'", "'Circular'", "system-ui", "sans-serif"],
        "display": ["'Poppins'", "system-ui", "sans-serif"],
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
        "standard": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --blob: radial-gradient(circle at 30% 30%, #ff7a8a, #6c5ce7);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Rounded, friendly, flat fill with the brand accent; soft hover. |
| **Input** | Rounded field, generous padding, gentle border. |
| **Card** | Rounded card, soft shadow, often paired with a Memphis-style spot illustration. |
| **Nav** | Clean rounded nav with a flat logo and an illustrated hero nearby. |
| **Modal** | Rounded panel with a friendly illustration and clear CTA. |
| **Table** | Kept simple and rounded; not the star of this style. |
| **Tooltip** | Small rounded chip in a friendly tone. |
| **Badge** | Rounded pill in a bright flat color. |
| **Toggle** | Rounded pill toggle in the accent color. |
| **Loading** | Simple flat spinner or a friendly animated blob illustration. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- The friendly flat colors are often mid-saturation — verify text contrast, especially white-on-accent.
- Illustrations are decorative: give them empty alt text so screen readers skip them.
- Don't let the illustration style replace clear, high-contrast UI affordances.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Pair flat human illustrations with clean rounded components.
- ✅ Keep a small friendly palette with one strong accent.
- ✅ Use generous whitespace and rounded geometry.

## Don't

- ❌ Overuse the trope until it feels generic/soulless (it already reads dated).
- ❌ Rely on illustration for meaning without text.
- ❌ Mix wildly different illustration styles.

## Don't confuse this with…

*Commonly confused neighbors:* claymorphism, flat-design.

vs claymorphism: corporate memphis is FLAT vector illustration; claymorphism is 3D-puffy UI surfaces. They often co-occur but are different layers.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
