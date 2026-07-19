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
