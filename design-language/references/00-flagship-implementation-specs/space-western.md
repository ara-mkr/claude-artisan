# Space Western - Implementation Guide

*Aliases:* cosmic western, sci-fi western  
*Slug:* `space-western` | *Category:* retrofuturism | *Era:* 1950s-present

**Origin.** Science-fiction storytelling that borrows frontier motifs: dusty horizons, saloons, wanted posters, and practical spacecraft.

**Reference example.** Cowboy Bebop, Firefly, and the lived-in machinery of frontier science fiction.

## Signature system

Dusty desert neutrals against nocturnal space. Stenciled utility type and star-map details. Weathered panels, stamped labels, and frontier red. The component library repeats this language across navigation, actions, fields, cards, and status rather than using it as a one-off hero decoration.

## Token starting point

The ready-to-import token file is [`assets/starter-themes/space-western.css`](../../assets/starter-themes/space-western.css); the matching Tailwind fragment is [`space-western.tailwind.config.fragment.js`](../../assets/starter-themes/space-western.tailwind.config.fragment.js).

| Token | Value |
| --- | --- |
| `--color-bg` | `#17151a` |
| `--color-surface` | `#272129` |
| `--color-surface-2` | `#44363a` |
| `--color-text` | `#f5e5c8` |
| `--color-text-muted` | `#c6ae91` |
| `--color-primary` | `#d56b3e` |
| `--color-accent` | `#74bcc1` |
| `--color-dust` | `#b58b61` |

Use the supplied spacing, typography, radius, shadow, and easing tokens before introducing any custom values.

## Component rules

| Primitive | Space Western treatment |
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

Do not confuse Space Western with atompunk, cassette-futurism, dieselpunk. Its defining difference is: dusty desert neutrals against nocturnal space.

---

The standalone component reference is [`assets/component-examples/space-western.html`](../../assets/component-examples/space-western.html).
