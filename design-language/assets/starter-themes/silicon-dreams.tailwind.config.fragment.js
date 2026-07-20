// Silicon Dreams — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#050b14",
        "surface": "#0d1b2a",
        "surface-strong": "#132840",
        "border": "#234a6b",
        "text": "#eaf4ff",
        "text-muted": "#8fb3d1",
        "primary": "#2fb8ff",
        "accent": "#6ee7ff",
        "glow": "rgba(47,184,255,0.55)",
      },
      borderRadius: {
        "sm": "6px",
        "md": "12px",
        "lg": "20px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 8px rgba(0,0,0,0.4)",
        "md": "0 8px 24px rgba(0,0,0,0.5), 0 0 20px var(--color-glow)",
        "lg": "0 18px 44px rgba(0,0,0,0.55), 0 0 32px var(--color-glow)",
      },
      fontFamily: {
        "sans": ["'Frutiger'", "'Segoe UI'", "system-ui", "sans-serif"],
        "display": ["'Frutiger'", "'Eurostile'", "'Segoe UI'", "sans-serif"],
        "mono": ["'Consolas'", "ui-monospace", "monospace"],
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
//   --glass-sheen: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0) 40%);
