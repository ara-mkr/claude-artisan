# Style Selection Decision Tree

Use this when the user describes a **vibe, mood, or era** instead of naming a
style — "make it feel premium and futuristic", "give it that 2000s nostalgia",
"something playful but not childish", "clean and trustworthy". Map the brief to a
specific style or a short shortlist, then open that style's spec (flagship file in
`00-flagship-implementation-specs/`, else the catalog entry in the category file).

When in doubt, **ask one disambiguating question** (see the confusable pairs at
the bottom) rather than guessing — the wrong neighbor produces a subtly wrong UI.

---

## 1. Start with the primary intent

| The user wants it to feel… | Look at first |
| --- | --- |
| Clean, trustworthy, gets-out-of-the-way | `minimalism`, `swiss-design`, `flat-design`, `shadcn-ui`, platform system (`material-design-3`, `apple-hig`) |
| Premium / high-end / expensive | `minimalism`, `quiet-luxury`, `art-deco`, `dark-academia`, `holographic` (accent), `liquid-glass` |
| Futuristic / high-tech | `liquid-glass`, `glassmorphism`, `cyberpunk`, `holographic`, `chrome-metal`, `y2k-futurism` |
| Playful / friendly / approachable | `claymorphism`, `corporate-memphis`, `neubrutalism`, `memphis-design`, `kidcore` |
| Bold / loud / attention-grabbing | `neubrutalism`, `maximalism`, `brutalism`, `pop-art`, `memphis-design` |
| Nostalgic / retro (pin the decade! ↓) | see the era table |
| Calm / cozy / human / natural | `scandinavian`, `japandi`, `solarpunk`, `organic-design`, `cottagecore` |
| Serious / enterprise / data-dense | `material-design-3`, `carbon-design`, `ant-design`, `fluent-design-2`, `dashboard-analytics` |
| Artistic / editorial / "designed" | `editorial-layout`, `swiss-design`, `typographic`, `maximalism`, `brutalist-minimal` |
| Raw / anti-corporate / indie | `brutalism`, `anti-design`, `risograph`, `hand-drawn`, `punk-zine` |

## 2. If they said "retro / nostalgic / vintage" — pin the era

The single most common failure is applying the wrong decade. Ask "which era?" or infer:

| Era / cue | Style |
| --- | --- |
| 1920s–30s glamour, gold, Gatsby | `art-deco`, `decopunk` |
| 1950s–60s atomic, space-race, diner | `mid-century-modern`, `atompunk`, `googie`, `americana-diner` |
| 1960s counterculture, trippy | `psychedelic`, `op-art` |
| 1980s Memphis / MTV / pattern | `memphis-design`, `formicapunk` |
| 1980s neon sci-fi / action | `synthwave`, `cyberpunk` |
| 1990s rave / grunge / early web | `acid-graphics`, `grunge`, `webcore` |
| "2000s nostalgia" — chrome, bubbles, iMac | `y2k-futurism` |
| "2000s nostalgia" — water, grass, glossy Vista | `frutiger-aero` |
| Ironic mall/statue/pastel internet | `vaporwave`, `mallsoft`, `seapunk` |
| 8-bit / 16-bit games | `pixel-art`, `crt` |
| Old terminals / hacker | `ascii-terminal`, `cassette-futurism` |

## 3. If they described a SURFACE / MATERIAL feeling

| "It should look like…" | Style |
| --- | --- |
| Frosted glass over color | `glassmorphism` (static) or `liquid-glass` (Apple, dynamic/refractive) |
| Soft pressed-from-the-background plastic | `neumorphism` |
| Puffy inflated clay/candy | `claymorphism` |
| Real materials (leather, metal, paper) | `skeuomorphism` |
| Thick borders + hard offset shadows | `neubrutalism` |
| Rainbow oil-slick / foil | `holographic` |
| Reflective mirror metal | `chrome-metal` |
| Printed zine, grainy, misregistered | `risograph` |
| Green-screen terminal text | `ascii-terminal` |

## 4. If they described a LAYOUT / COMPOSITION

| "The layout should be…" | Style |
| --- | --- |
| Modular cards of different sizes | `bento-grid` |
| Strict grid, aligned, typographic | `swiss-design` |
| Type is the whole design | `typographic` |
| Off-grid, overlapping, dynamic | `asymmetric-layout` |
| As little as possible | `minimalism` |
| Everything, layered and loud | `maximalism` |
| Magazine spread | `editorial-layout` |

## 5. If they named a SUBCULTURE / MOOD (not a UI system)

Niche aesthetics (`dark-academia`, `cottagecore`, `coquette`, `brat`, `quiet-luxury`,
`weirdcore`, `webcore`, …) are **accent layers, not structural systems.** Steps:

1. Pull the mood's **palette, type feeling, imagery, and motifs** from its catalog
   entry in `09-niche-subculture-kitsch.md`.
2. Choose a **structural base** (usually `minimalism`, `editorial-layout`,
   `swiss-design`, or `bento-grid`) to carry layout and components.
3. Apply the mood on top: colors, fonts, decorative motifs, imagery.

## 6. Constraints that override aesthetics

- **Accessibility-critical / government / regulated** → `uswds`, `govuk-design`,
  or a platform system; avoid low-contrast trend styles.
- **Must feel native to a platform** → the platform's own system (`material-design-3`
  on Android, `apple-hig`/`liquid-glass` on Apple, `fluent-design-2` on Windows).
- **Data-dense product** → `carbon-design`, `ant-design`, `material-design-3`,
  `dashboard-analytics`; avoid `neumorphism`, heavy `glassmorphism`, `claymorphism`.
- **Must ship fast on Tailwind/React** → `shadcn-ui`, `flat-design`, `minimalism`.

---

## Commonly confused pairs — ask before you build

| If they might mean either… | Disambiguating question |
| --- | --- |
| `glassmorphism` vs `liquid-glass` vs `frutiger-aero` | "Static frosted CSS glass, Apple's 2025 refractive Liquid Glass, or glossy 2000s Vista-era 'water & glass'?" |
| `neubrutalism` vs `brutalism` | "Polished + colorful with thick borders (neubrutalism), or raw/undesigned/monochrome (brutalism)?" |
| `neubrutalism` vs `claymorphism` | "Flat + hard-edged + loud, or soft + puffy + pastel?" |
| `neumorphism` vs `claymorphism` | "Subtle same-color emboss, or puffy colorful clay?" |
| `material-design-3` vs `material-design` (M2) | "Dynamic color + big rounded shapes (M3/Material You), or the older shadow-driven Material 2?" |
| `vaporwave` vs `synthwave` | "Ironic mall/statue nostalgia (vaporwave), or earnest 80s neon sun-and-grid (synthwave)?" |
| `y2k-futurism` vs `frutiger-aero` | "Chrome + space-age blobjects (Y2K), or water/grass/glossy-Vista nature-tech (Frutiger Aero)?" |
| `swiss-design` vs `minimalism` | "A rigorous grid/typographic system, or just 'as few elements as possible'?" |
| `art-deco` vs `art-nouveau` | "Geometric/symmetric/gold (Deco), or organic/curvy/botanical (Nouveau)?" |
| `dark-academia` vs `goth` | "Bookish/collegiate/tweed, or dark/dramatic/ecclesiastical?" |

*See each style's `## Don't confuse this with…` section for the full distinction.*
