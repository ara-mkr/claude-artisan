# Goblincore — Implementation Spec

*Aliases:* gremlincore  
*Slug:* `goblincore` · *Category:* niche · *Era:* 2019–present

**Origin.** Earthy 'ugly-cute' nature subculture.

**Reference example.** Goblincore Tumblr/TikTok.

## Signature move(s)

Organic, lumpy, unpolished shapes: `--radius-md`/`--radius-lg` use asymmetric elliptical values (`40% 60% 55% 45% / …`), never a clean rounded rectangle, so every surface looks like a mushroom cap or a smooth river stone. Dark moss/soil surfaces (`--color-bg`, `--color-moss`) with a hand-scrawled `--font-display` for headings complete the "found treasure in the dirt" feel.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Mushrooms, moss, frogs, snails, shiny trinkets
- Muddy greens and browns
- Chaotic natural collecting
- Anti-perfection, whimsical

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/goblincore.css`.)

```css
/* Goblincore — design tokens (generated from style_catalog.json) */
/* 2019–present | Earthy 'ugly-cute' nature subculture. */
:root {
  /* color */
  --color-bg: #3a3222;
  --color-surface: #4a4128;
  --color-surface-strong: #574c2e;
  --color-border: #6b5c34;
  --color-text: #f1ead2;
  --color-text-muted: #c9bd97;
  --color-primary: #7c9a4a;
  --color-accent: #d4a72c;
  --color-moss: #556b2f;
  /* radius */
  --radius-sm: 6px;
  --radius-md: 40% 60% 55% 45% / 45% 40% 60% 55%;
  --radius-lg: 55% 45% 40% 60% / 50% 55% 45% 50%;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 2px 6px rgba(20,17,8,0.35);
  --shadow-md: 0 8px 20px rgba(20,17,8,0.4);
  --shadow-lg: 0 16px 36px rgba(20,17,8,0.45);
  /* font */
  --font-sans: 'Atkinson Hyperlegible', 'Nunito', system-ui, sans-serif;
  --font-display: 'Fredericka the Great', 'Amatic SC', 'Georgia', serif;
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
  --ease-standard: cubic-bezier(0.34, 1.4, 0.64, 1);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Goblincore — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#3a3222",
        "surface": "#4a4128",
        "surface-strong": "#574c2e",
        "border": "#6b5c34",
        "text": "#f1ead2",
        "text-muted": "#c9bd97",
        "primary": "#7c9a4a",
        "accent": "#d4a72c",
        "moss": "#556b2f",
      },
      borderRadius: {
        "sm": "6px",
        "md": "40% 60% 55% 45% / 45% 40% 60% 55%",
        "lg": "55% 45% 40% 60% / 50% 55% 45% 50%",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 6px rgba(20,17,8,0.35)",
        "md": "0 8px 20px rgba(20,17,8,0.4)",
        "lg": "0 16px 36px rgba(20,17,8,0.45)",
      },
      fontFamily: {
        "sans": ["'Atkinson Hyperlegible'", "'Nunito'", "system-ui", "sans-serif"],
        "display": ["'Fredericka the Great'", "'Amatic SC'", "'Georgia'", "serif"],
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
        "standard": "cubic-bezier(0.34, 1.4, 0.64, 1)",
      },
    },
  },
};
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Lumpy `--radius-md` blob shape, moss-green fill, gold (`--color-accent`) trinket-like highlight on hover — never a crisp rectangle. |
| **Input** | `--color-surface` field with an irregular `--radius-md` outline, like a leaf-shaped pocket. |
| **Card** | The hero of the style: `--radius-lg` asymmetric blob, dark moss surface, `--shadow-md`, gold accent stroke like a snail shell's shine. |
| **Nav** | A meandering, non-rectangular pill nav using `--radius-pill` segments that overlap slightly, like stepping stones. |
| **Modal** | An oversized blob card centered on a darkened backdrop, `--font-display` heading. |
| **Table** | Loosen the grid — rows use blob-radius corners instead of hard edges; avoid a sterile spreadsheet look. |
| **Tooltip** | Tiny irregular blob chip, gold border, like a found pebble. |
| **Badge** | Gold or moss pill badge with a slight organic wobble in its radius. |
| **Toggle** | A pill track with a blob-shaped knob (not a perfect circle) that shifts moss→gold on activation. |
| **Loading** | A wobbling/breathing blob shape rather than a spinner — a slow amoeba-like pulse (respect reduced-motion). |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- The dark moss/soil palette needs cream `--color-text` at full opacity for body copy — check `--color-text-muted` against `--color-surface` and `--color-surface-strong` for 4.5:1.
- Asymmetric blob radii can visually swallow small tap targets — keep the actual hit area rectangular/generous even when the visible shape is irregular.
- Any "breathing"/pulsing blob loader must respect `prefers-reduced-motion` and fall back to a static shape.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Use the asymmetric elliptical radius formula consistently — it's the one thing that makes this read as goblincore and not just "dark green theme."
- ✅ Keep the palette muddy and desaturated; let gold accents be the only "shiny" note.
- ✅ Lean into intentional visual imperfection (slight rotation, uneven spacing) in moderation.

## Don't

- ❌ Round every corner uniformly — that collapses the style into generic neumorphism/claymorphism.
- ❌ Clean the palette up into bright, cheerful greens — it should feel earthy and a little grimy.
- ❌ Overdo the "chaotic" framing to the point of harming usability — the anti-perfection is aesthetic, not functional.

## Don't confuse this with…

*Commonly confused neighbors:* cottagecore, fairycore.

vs cottagecore: cottagecore is tidy, floral, and domestic; goblincore is muddy, chaotic, and collects "ugly-cute" trinkets rather than baking bread. vs fairycore: fairycore is ethereal and sparkly with pastel glow; goblincore is grounded, dark, and earthy with no shimmer.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
