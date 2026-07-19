# Skeuomorphism — Implementation Spec

*Aliases:* skeuo, realistic UI, textured UI  
*Slug:* `skeuomorphism` · *Category:* morphism · *Era:* 1980s–2013 (peak iOS 2007–2012)

**Origin.** Apple; term from Greek 'skeuos' (vessel). Popularized by early iOS/Mac OS X under Scott Forstall.

**Reference example.** Apple iOS 6 Notes (yellow legal pad), Find My Friends (leather), GarageBand wood.

## Signature move(s)

Digital objects mimic real materials and real controls: leather, felt, brushed metal, paper, with literal metaphors (notepad, shelf) and physical affordances (bevels, gloss, stitching, shadows).

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Digital objects mimic real materials (leather, felt, brushed metal, paper)
- Literal metaphors: notepad, bookshelf, calculator keys
- Rich gradients, bevels, drop shadows and highlights for depth
- Realistic affordances signaling how to interact

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/skeuomorphism.css`.)

```css
/* Skeuomorphism — design tokens (generated from style_catalog.json) */
/* 1980s–2013 (peak iOS 2007–2012) | Apple; term from Greek 'skeuos' (vessel). Popularized by early iOS/Mac OS X under Scott Forstall. */
:root {
  /* color */
  --color-bg: #d9c7a8;
  --color-surface: #f3ead2;
  --color-surface-2: #e8dcc0;
  --color-text: #2d2416;
  --color-text-muted: #6b5d43;
  --color-primary: #3a7d44;
  --color-accent: #b23b2e;
  --color-stitch: #8a7856;
  /* radius */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 14px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-raised: 0 1px 0 rgba(255,255,255,0.6) inset, 0 2px 4px rgba(0,0,0,0.35), 0 6px 12px rgba(0,0,0,0.25);
  --shadow-pressed: inset 0 2px 6px rgba(0,0,0,0.45);
  --shadow-bevel: inset 0 1px 0 rgba(255,255,255,0.55), inset 0 -2px 3px rgba(0,0,0,0.25);
  /* font */
  --font-sans: 'Helvetica Neue', 'Lucida Grande', system-ui, sans-serif;
  --font-display: Georgia, 'Times New Roman', serif;
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
  /* extra (signature gradients, composite borders, filters) */
  --leather: linear-gradient(#f3ead2, #e2d3b0);
  --gloss: linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.05) 50%, rgba(0,0,0,0.06) 51%, rgba(0,0,0,0.14) 100%);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Skeuomorphism — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#d9c7a8",
        "surface": "#f3ead2",
        "surface-2": "#e8dcc0",
        "text": "#2d2416",
        "text-muted": "#6b5d43",
        "primary": "#3a7d44",
        "accent": "#b23b2e",
        "stitch": "#8a7856",
      },
      borderRadius: {
        "sm": "6px",
        "md": "10px",
        "lg": "14px",
        "pill": "999px",
      },
      boxShadow: {
        "raised": "0 1px 0 rgba(255,255,255,0.6) inset, 0 2px 4px rgba(0,0,0,0.35), 0 6px 12px rgba(0,0,0,0.25)",
        "pressed": "inset 0 2px 6px rgba(0,0,0,0.45)",
        "bevel": "inset 0 1px 0 rgba(255,255,255,0.55), inset 0 -2px 3px rgba(0,0,0,0.25)",
      },
      fontFamily: {
        "sans": ["'Helvetica Neue'", "'Lucida Grande'", "system-ui", "sans-serif"],
        "display": ["Georgia", "'Times New Roman'", "serif"],
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

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --leather: linear-gradient(#f3ead2, #e2d3b0);
//   --gloss: linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.05) 50%, rgba(0,0,0,0.06) 51%, rgba(0,0,0,0.14) 100%);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Beveled 3D key with a top gloss highlight and bottom shadow; press pushes it in (inset). |
| **Input** | Recessed field with an inner top shadow, like an engraved slot. |
| **Card** | A real object: paper on a desk, a leather panel, with stitching and drop shadow. |
| **Nav** | Brushed-metal or wood toolbar with beveled tab 'buttons'. |
| **Modal** | A dialog that looks like a physical card/sheet lifting off a textured surface. |
| **Table** | Ledger/spreadsheet metaphor: ruled lines, alternating paper rows. |
| **Tooltip** | A small paper label or engraved plaque. |
| **Badge** | A stitched patch, wax seal, or metal tag. |
| **Toggle** | A physical rocker switch or sliding metal toggle with realistic travel. |
| **Loading** | A spinning gauge, mechanical dial, or barber-pole progress. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Heavy textures reduce text contrast — keep type on clean areas and verify against the busiest background patch.
- Don't let gloss/reflection highlights wash out label text.
- Ensure the 'realistic' affordance still has a real focus state and isn't only communicated by texture.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Use texture and metaphor consistently (one material world).
- ✅ Make affordances match real-world interaction (push, slide, flip).
- ✅ Reserve for playful/nostalgic or hardware-adjacent products.

## Don't

- ❌ Over-texture every surface — it gets noisy and dated fast.
- ❌ Mix incompatible metaphors (leather + neon glass) randomly.
- ❌ Use for information-dense productivity apps.

## Don't confuse this with…

*Commonly confused neighbors:* neumorphism, claymorphism.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
