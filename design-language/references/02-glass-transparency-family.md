# Glass & Transparency Family

*7 styles in this family (2 flagship). Generated from `scripts/style_catalog.json` — the single source of truth.*

Translucent, blurred surfaces that let a colorful backdrop show through. The family spans a decade of platform materials — from Windows Aero to macOS vibrancy to Apple's 2025 Liquid Glass — plus the CSS `backdrop-filter` trend called glassmorphism. They differ mostly in how much the surface *refracts* vs merely *frosts*.

> **How to apply this family.** **Legibility is the whole battle.** A translucent panel needs a scrim or a tint floor behind text, a solid fallback where `backdrop-filter` is unsupported, and a `prefers-reduced-transparency` path. Never stack glass on glass on glass — depth needs an opaque anchor.

## Contents
- [Glassmorphism](#glassmorphism) ⭐
- [Liquid Glass](#liquid-glass) ⭐
- [Acrylic (Fluent Material)](#acrylic-fluent-material)
- [Frosted Glass](#frosted-glass)
- [Spatial / visionOS](#spatial--visionos)
- [Windows Aero Glass](#windows-aero-glass)
- [macOS Vibrancy / Translucency](#macos-vibrancy--translucency)

---

### Glassmorphism  ⭐ *flagship — full spec in [00-flagship-implementation-specs/glassmorphism.md](00-flagship-implementation-specs/glassmorphism.md)*
*Aliases:* glass UI, frosted glass, glass morphism  
*Slug:* `glassmorphism` · *Era:* 2020–present

**Origin.** Coined by Michał Malewicz (2020); echoes macOS Big Sur / Windows Acrylic.

**Defining traits.**
- Frosted translucent panels via background blur
- Thin light border + subtle inner highlight
- Vivid colorful background shows through
- Layered floating cards with depth

**Reference example.** macOS Big Sur Control Center; Windows 11 Acrylic; countless 2020–2022 dashboards.

**Don't confuse with:** liquid-glass, frutiger-aero, acrylic-fluent.

---

### Liquid Glass  ⭐ *flagship — full spec in [00-flagship-implementation-specs/liquid-glass.md](00-flagship-implementation-specs/liquid-glass.md)*
*Aliases:* Apple Liquid Glass, iOS 26 glass  
*Slug:* `liquid-glass` · *Era:* 2025–present

**Origin.** Apple, announced WWDC June 2025; ships in iOS/iPadOS 26, macOS Tahoe, etc.

**Defining traits.**
- Dynamic 'meta-material' that bends and refracts light like a lens
- Specular edge highlights and real-time refraction of content behind
- Hierarchy through depth, not color/size
- Fluid, springy motion; concentric rounded shapes matching hardware

**Reference example.** iOS 26 / macOS Tahoe system UI (tab bars, controls, sidebars).

**Don't confuse with:** glassmorphism, frutiger-aero.

---

### Acrylic (Fluent Material)
*Aliases:* Fluent acrylic, Windows 11 acrylic  
*Slug:* `acrylic-fluent` · *Era:* 2017–present

**Origin.** Microsoft Fluent Design System.

**Defining traits.**
- Translucency + blur + subtle noise texture
- Light-dismiss transient surfaces (menus, flyouts)
- Mode-aware (light/dark)
- Sits beneath interactive UI as a base layer

**Reference example.** Windows 11 flyouts, command bars, context menus.

**Don't confuse with:** glassmorphism, liquid-glass.

---

### Frosted Glass
*Aliases:* frosted panel, blur overlay  
*Slug:* `frosted-glass` · *Era:* 2013–present

**Origin.** Generic pattern popularized by iOS 7 blur layers.

**Defining traits.**
- Simple backdrop-filter blur behind modals/overlays
- Semi-opaque white or dark scrim
- Content legibility via blur + tint
- No strong refraction or edge lighting

**Reference example.** iOS Control Center; modal backdrops across the web.

**Don't confuse with:** glassmorphism.

---

### Spatial / visionOS
*Aliases:* spatial design, visionOS, mixed reality UI  
*Slug:* `spatial-visionos` · *Era:* 2023–present

**Origin.** Apple visionOS (Vision Pro, 2023–2024).

**Defining traits.**
- Floating glass panels in 3D space
- Depth, parallax, and light-based hierarchy
- Eye/hand-driven interaction affordances
- Translucent materials over the real world

**Reference example.** Apple Vision Pro visionOS UI.

**Don't confuse with:** liquid-glass, glassmorphism.

---

### Windows Aero Glass
*Aliases:* Aero, Vista glass, Aero Glass  
*Slug:* `aero-glass` · *Era:* 2006–2012

**Origin.** Microsoft Windows Vista (2006) and Windows 7 Aero.

**Defining traits.**
- Translucent window chrome with Gaussian blur
- Colored glass tint with reflective sheen
- Rounded window corners and glow
- Live thumbnails / Flip 3D

**Reference example.** Windows Vista / 7 title bars and taskbar.

**Don't confuse with:** glassmorphism, frutiger-aero.

---

### macOS Vibrancy / Translucency
*Aliases:* vibrancy, NSVisualEffectView  
*Slug:* `macos-vibrancy` · *Era:* 2014–present

**Origin.** Apple OS X Yosemite (2014).

**Defining traits.**
- Sidebar/toolbar materials that sample and blur the desktop
- Vibrant text/icons that adapt to backdrop
- Subtle luminance blending
- System-level material tiers (menu, sidebar, HUD)

**Reference example.** macOS Finder sidebar; Notification Center.

**Don't confuse with:** glassmorphism, liquid-glass.

---
