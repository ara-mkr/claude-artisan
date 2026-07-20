// Decopunk — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#12100a",
        "surface": "#1c1811",
        "surface-strong": "#262019",
        "border": "#caa24b",
        "text": "#f6ecd6",
        "text-muted": "#cbb98f",
        "primary": "#e3b23c",
        "accent": "#6fd3c7",
        "chrome": "#e9e4d8",
      },
      borderRadius: {
        "sm": "2px",
        "md": "4px",
        "lg": "8px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 4px rgba(0,0,0,0.4)",
        "md": "0 4px 16px rgba(0,0,0,0.5)",
        "lg": "0 12px 32px rgba(0,0,0,0.55)",
      },
      fontFamily: {
        "sans": ["'Century Gothic'", "'Futura'", "system-ui", "sans-serif"],
        "display": ["'Poiret One'", "'Broadway'", "'Futura'", "serif"],
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
        "standard": "cubic-bezier(0.2, 0, 0, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --gold-gradient: linear-gradient(135deg, #f6d787, #caa24b 45%, #8a6a24 100%);
//   --chevron-bg: repeating-linear-gradient(115deg, rgba(202,162,75,0.08) 0 6px, transparent 6px 26px);
//   --border-metal: 1px solid transparent;
