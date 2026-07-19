# Morphism & Tactile / Dimensional Styles

*9 styles in this family (3 flagship). Generated from `scripts/style_catalog.json` — the single source of truth.*

Styles defined by *simulated physical depth* — how light, shadow, and material make a flat screen feel raised, pressed, glassy, or moulded. They live and die on shadow discipline: the recipe (which shadows, what blur, what light direction) must be applied identically to every surface or the illusion collapses.

> **How to apply this family.** **Apply the depth recipe as a reusable token/class, never per-component.** Pick one light direction (usually top-left) and keep it global. These styles are the most likely to fail contrast — run `contrast_check.py` on body text over every surface.

## Contents
- [Claymorphism](#claymorphism) ⭐
- [Neumorphism](#neumorphism) ⭐
- [Skeuomorphism](#skeuomorphism) ⭐
- [Aurora UI](#aurora-ui)
- [Emboss / Deboss](#emboss--deboss)
- [Flat 2.0 / Semi-flat](#flat-20--semi-flat)
- [Hyperrealism UI](#hyperrealism-ui)
- [Mesh Gradient](#mesh-gradient)
- [Soft 3D Illustration](#soft-3d-illustration)

---

### Claymorphism  ⭐ *flagship — full spec in [00-flagship-implementation-specs/claymorphism.md](00-flagship-implementation-specs/claymorphism.md)*
*Aliases:* clay UI, 3D clay, puffy UI  
*Slug:* `claymorphism` · *Era:* 2021–present

**Origin.** Coined by Michał Malewicz (Hype4) in 2021.

**Defining traits.**
- Puffy, inflated 3D shapes like modeling clay
- Large border-radius on everything
- Double inner shadow (light top-left, colored bottom-right) plus soft outer drop shadow
- Pastel, candy-like palettes

**Reference example.** Hype4 claymorphism generator; many 2022 illustration-heavy landing pages.

**Don't confuse with:** neumorphism, corporate-memphis.

---

### Neumorphism  ⭐ *flagship — full spec in [00-flagship-implementation-specs/neumorphism.md](00-flagship-implementation-specs/neumorphism.md)*
*Aliases:* soft UI, neo-skeuomorphism, new skeuomorphism  
*Slug:* `neumorphism` · *Era:* 2019–2021

**Origin.** Named after Alexander Plyuto's 2019 Dribbble concept; 'neumorphism' coined by Michał Malewicz.

**Defining traits.**
- Extruded shapes that look pressed from the background (same base color)
- Dual light+dark shadow pair creates soft embossing
- Very low contrast, monochromatic surfaces
- Inset shadow toggles for 'pressed' state

**Reference example.** Alexander Plyuto's Skeuomorph 2.0 Dribbble concept; many fintech dashboard concepts.

**Don't confuse with:** skeuomorphism, claymorphism.

---

### Skeuomorphism  ⭐ *flagship — full spec in [00-flagship-implementation-specs/skeuomorphism.md](00-flagship-implementation-specs/skeuomorphism.md)*
*Aliases:* skeuo, realistic UI, textured UI  
*Slug:* `skeuomorphism` · *Era:* 1980s–2013 (peak iOS 2007–2012)

**Origin.** Apple; term from Greek 'skeuos' (vessel). Popularized by early iOS/Mac OS X under Scott Forstall.

**Defining traits.**
- Digital objects mimic real materials (leather, felt, brushed metal, paper)
- Literal metaphors: notepad, bookshelf, calculator keys
- Rich gradients, bevels, drop shadows and highlights for depth
- Realistic affordances signaling how to interact

**Reference example.** Apple iOS 6 Notes (yellow legal pad), Find My Friends (leather), GarageBand wood.

**Don't confuse with:** neumorphism, claymorphism.

---

### Aurora UI
*Aliases:* gradient glow, aurora gradients  
*Slug:* `aurora-ui` · *Era:* 2020–present

**Origin.** Popularized ~2020 across product marketing sites (Stripe-influenced).

**Defining traits.**
- Large soft blurred color blobs behind content
- Aurora-like overlapping gradients
- Often paired with glass surfaces
- Dark backgrounds with luminous color washes

**Reference example.** Stripe landing pages; many AI startup sites (2023–2024).

**Don't confuse with:** glassmorphism, mesh-gradient.

---

### Emboss / Deboss
*Aliases:* letterpress UI, pressed type  
*Slug:* `emboss-deboss` · *Era:* 2000s–present

**Origin.** Print letterpress heritage adapted to screen (text-shadow technique).

**Defining traits.**
- Type looks stamped into or raised from the surface
- Subtle 1px light/dark text-shadow pair
- Works on textured/tinted backgrounds
- Tactile, premium feel

**Reference example.** Letterpress text effects on textured web headers (~2010).

**Don't confuse with:** neumorphism.

---

### Flat 2.0 / Semi-flat
*Aliases:* almost flat, flat design 2.0, semi-flat  
*Slug:* `flat-2` · *Era:* 2015–present

**Origin.** Google Material (2014) and industry reaction to pure flat's usability problems.

**Defining traits.**
- Flat foundation with subtle shadows and depth cues restored
- Long/ghost shadows, subtle gradients
- Clear affordances without skeuomorphic texture
- Layered card surfaces

**Reference example.** Google Material Design; most modern SaaS dashboards.

**Don't confuse with:** flat-design, material-design.

---

### Hyperrealism UI
*Aliases:* photoreal UI, realistic skeuomorphism  
*Slug:* `realism-ui` · *Era:* 2008–2013

**Origin.** High-water mark of skeuomorphic app design.

**Defining traits.**
- Photorealistic materials and reflections
- Physically plausible lighting
- Detailed micro-textures
- Tactile knobs, dials, switches

**Reference example.** Korg iMS-20 synth app; early podcast/voice-memo apps.

**Don't confuse with:** skeuomorphism.

---

### Mesh Gradient
*Aliases:* gradient mesh, fluid gradient  
*Slug:* `mesh-gradient` · *Era:* 2021–present

**Origin.** Popularized by design tools (Mesh Gradient generators, Figma plugins).

**Defining traits.**
- Multi-point smooth gradients that blend many hues
- Organic, cloud-like color transitions
- Used as hero backgrounds
- Often animated/shifting

**Reference example.** Stripe backgrounds; Apple event key art.

**Don't confuse with:** aurora-ui, holographic.

---

### Soft 3D Illustration
*Aliases:* 3D render UI, Spline 3D, claymation UI  
*Slug:* `soft-3d` · *Era:* 2020–present

**Origin.** Rise of Spline, Blender, and Dribbble 3D illustration trend.

**Defining traits.**
- Rounded, soft-lit 3D rendered objects
- Matte pastel materials, ambient occlusion
- Floating isometric-ish scenes
- Paired with flat UI chrome

**Reference example.** Spline showcase sites; Stripe/Vercel 3D hero scenes.

**Don't confuse with:** claymorphism, isometric.

---
