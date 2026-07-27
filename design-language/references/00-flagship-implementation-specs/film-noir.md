# Film Noir - Implementation Guide

*Aliases:* noir, detective noir  
*Slug:* `film-noir` | *Category:* historical | *Era:* 1940s-1950s revival

**Origin.** Postwar American crime cinema shaped by German Expressionist lighting, hard-boiled fiction, and urban shadows.

**Reference example.** The Third Man, Double Indemnity, and Saul Bass-inspired title treatments.

## Signature system

High-contrast black, smoke, and cream. Venetian-blind stripes and hard pools of light. Editorial crime-file typography and precise red evidence marks. The component library repeats this language across navigation, actions, fields, cards, and status rather than using it as a one-off hero decoration.

## Token starting point

The ready-to-import token file is [`assets/starter-themes/film-noir.css`](../../assets/starter-themes/film-noir.css); the matching Tailwind fragment is [`film-noir.tailwind.config.fragment.js`](../../assets/starter-themes/film-noir.tailwind.config.fragment.js).

| Token | Value |
| --- | --- |
| `--color-bg` | `#111111` |
| `--color-surface` | `#1b1b1b` |
| `--color-surface-2` | `#292929` |
| `--color-text` | `#f5eedc` |
| `--color-text-muted` | `#c9c0ac` |
| `--color-primary` | `#e8dfc9` |
| `--color-accent` | `#bb342f` |
| `--color-smoke` | `#78736a` |

Use the supplied spacing, typography, radius, shadow, and easing tokens before introducing any custom values.

## Component rules

| Primitive | Film Noir treatment |
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

Do not confuse Film Noir with dark-academia, linear-dark, goth. Its defining difference is: high-contrast black, smoke, and cream.

---

The standalone component reference is [`assets/component-examples/film-noir.html`](../../assets/component-examples/film-noir.html).
