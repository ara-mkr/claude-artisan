// Raygun Gothic — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0b1e3d",
        "surface": "#12315e",
        "surface-strong": "#1a4180",
        "border": "#8fb4e6",
        "text": "#f2f6ff",
        "text-muted": "#aac2e8",
        "primary": "#ff5a36",
        "accent": "#2ee6d0",
        "chrome": "#c9d6e8",
      },
      borderRadius: {
        "sm": "4px",
        "md": "12px",
        "lg": "999px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 6px rgba(0,0,0,0.3)",
        "md": "0 6px 18px rgba(0,0,0,0.4)",
        "lg": "0 14px 36px rgba(0,0,0,0.5)",
      },
      fontFamily: {
        "sans": ["'Century Gothic'", "'Futura'", "'Poppins'", "sans-serif"],
        "display": ["'Broadway'", "'Futura'", "'Arial Black'", "sans-serif"],
        "mono": ["ui-monospace", "monospace"],
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
        "standard": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --chrome-gradient: linear-gradient(135deg, #eef3ff 0%, #9fb6d8 45%, #4a6a9c 55%, #eef3ff 100%);
//   --starburst: repeating-conic-gradient(from 0deg, rgba(46,230,208,0.10) 0deg 8deg, transparent 8deg 20deg);
