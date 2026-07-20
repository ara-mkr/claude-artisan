// macOS Vibrancy / Translucency — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#dfe6ee",
        "surface": "rgba(255,255,255,0.55)",
        "surface-strong": "rgba(255,255,255,0.78)",
        "border": "rgba(0,0,0,0.08)",
        "text": "#1d1d1f",
        "text-muted": "rgba(29,29,31,0.6)",
        "primary": "#007aff",
        "accent": "#ff9f0a",
        "scrim": "rgba(255,255,255,0.4)",
      },
      borderRadius: {
        "sm": "8px",
        "md": "10px",
        "lg": "14px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 2px rgba(0,0,0,0.06)",
        "md": "0 8px 24px rgba(0,0,0,0.10)",
        "lg": "0 20px 48px rgba(0,0,0,0.14)",
        "inset-hi": "inset 0 1px 0 rgba(255,255,255,0.6)",
      },
      backdropBlur: {
        "backdrop": "20px",
        "backdrop-strong": "30px",
      },
      fontFamily: {
        "sans": ["-apple-system", "'SF Pro Text'", "'Helvetica Neue'", "system-ui", "sans-serif"],
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
        "standard": "cubic-bezier(0.2, 0, 0, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --bg-image: linear-gradient(160deg, #a7c6f2 0%, #dfe6ee 45%, #f3d9c4 100%);
//   --vibrancy: blur(var(--blur-backdrop)) saturate(1.8);
