// Acrylic (Fluent Material) — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f3f3f3",
        "surface": "rgba(255, 255, 255, 0.65)",
        "surface-strong": "rgba(255, 255, 255, 0.85)",
        "border": "rgba(0, 0, 0, 0.08)",
        "text": "#1b1b1b",
        "text-muted": "#5c5c5c",
        "primary": "#0067c0",
        "accent": "#744da9",
      },
      borderRadius: {
        "sm": "4px",
        "md": "8px",
        "lg": "12px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 2px rgba(0,0,0,0.08)",
        "md": "0 4px 16px rgba(0,0,0,0.10), 0 0 0 1px rgba(0,0,0,0.04)",
        "lg": "0 12px 32px rgba(0,0,0,0.14)",
      },
      backdropBlur: {
        "backdrop": "30px",
        "backdrop-strong": "40px",
      },
      fontFamily: {
        "sans": ["'Segoe UI Variable'", "'Segoe UI'", "system-ui", "sans-serif"],
        "display": ["'Segoe UI Variable Display'", "'Segoe UI'", "sans-serif"],
        "mono": ["'Cascadia Code'", "ui-monospace", "monospace"],
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
        "standard": "cubic-bezier(0.8, 0, 0.2, 1)",
        "entrance": "cubic-bezier(0.1, 0.9, 0.2, 1)",
        "exit": "cubic-bezier(0.7, 0, 0.84, 0)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --acrylic-tint: linear-gradient(180deg, rgba(255,255,255,0.75), rgba(255,255,255,0.45));
//   --acrylic-noise: repeating-conic-gradient(rgba(0,0,0,0.015) 0% 0.5%, transparent 0% 1%);
//   --acrylic-border: 1px solid rgba(255,255,255,0.5);
