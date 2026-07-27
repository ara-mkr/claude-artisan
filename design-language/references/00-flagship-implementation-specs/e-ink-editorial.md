# E-Ink Editorial - Implementation Guide

*Aliases:* e-ink UI, paper display editorial  
*Slug:* `e-ink-editorial` | *Category:* flat-platform | *Era:* 2000s-present

**Origin.** Reflective e-paper displays and newspaper design: a monochrome interface designed for durable reading, not luminous spectacle.

**Reference example.** E-reader interfaces, newsroom dashboards, and legible long-form editorial systems.

## Signature system

Near-monochrome charcoal on warm e-paper. Crisp hairlines, labels, and reading-first hierarchy. No decorative shadows, transparency, or color-dependent meaning. The component library repeats this language across navigation, actions, fields, cards, and status rather than using it as a one-off hero decoration.

## Token starting point

The ready-to-import token file is [`assets/starter-themes/e-ink-editorial.css`](../../assets/starter-themes/e-ink-editorial.css); the matching Tailwind fragment is [`e-ink-editorial.tailwind.config.fragment.js`](../../assets/starter-themes/e-ink-editorial.tailwind.config.fragment.js).

| Token | Value |
| --- | --- |
| `--color-bg` | `#e7e5dc` |
| `--color-surface` | `#f2f0e7` |
| `--color-surface-2` | `#d5d3ca` |
| `--color-text` | `#22221f` |
| `--color-text-muted` | `#62615b` |
| `--color-primary` | `#22221f` |
| `--color-accent` | `#59574f` |
| `--color-inverted` | `#f2f0e7` |

Use the supplied spacing, typography, radius, shadow, and easing tokens before introducing any custom values.

## Component rules

| Primitive | E-Ink Editorial treatment |
| --- | --- |
| Button | Primary actions use `--color-primary`; secondary actions stay on the base surface. Preserve default, hover, active, disabled, and `:focus-visible` states. |
| Input | Keep the control quiet enough for sustained reading; the focus ring uses `--color-accent`, never color alone as the only focus signal. |
| Card | Apply the signature surface treatment to every card and preserve generous internal spacing. |
| Nav | Treat navigation as a clear structural band, not an unrelated generic header. |
| Modal | Use the same surface, border, and elevation language as cards; trap focus and close with Escape. |
| Table | Keep rows scannable with stable alignment; place stylistic texture on the wrapper and header, not the data cells. |
| Tooltip | Use the surface and text token pair with a visible boundary; never rely on hover alone for essential information. |
| Badge | Use as a compact status marker, with text and shape in addition to color. |
| Toggle | Give on/off states distinct position, label, and contrast, with a 44px minimum touch target. |
| Loading / empty state | Reuse the style's signature detail sparingly and offer a textual loading state for assistive technology. |

## Accessibility corrections

- Verify every body-text pairing with `scripts/contrast_check.py`; this palette should not rely on texture, decoration, or saturation for legibility.
- Keep visible keyboard focus on every interactive element and retain it against the style's busiest background treatment.
- Respect `prefers-reduced-motion`; decorative movement must pause or collapse to a static state.
- Use semantic headings, buttons, form labels, and status text before applying any visual treatment.

## Do

- Repeat the signature move throughout relevant components so the style reads as a system.
- Use the starter theme as the first source for color, spacing, and interaction values.
- Keep body copy on the most stable surface in the palette.

## Do not

- Add unrelated gradients, glass, or soft shadows that conflict with the style's visual grammar.
- Turn every component into a decorative artifact; interaction and reading still lead.
- Remove focus, labels, or disabled-state clarity for the sake of the look.

## Distinguish from adjacent styles

Do not confuse E-Ink Editorial with monochrome, editorial-layout, raw-html. Its defining difference is: near-monochrome charcoal on warm e-paper.

---

The standalone component reference is [`assets/component-examples/e-ink-editorial.html`](../../assets/component-examples/e-ink-editorial.html).
