// Monochrome / Grayscale — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#ffffff",
        "surface": "#f4f4f4",
        "surface-strong": "#e6e6e6",
        "border": "#c9c9c9",
        "text": "#0a0a0a",
        "text-muted": "#5a5a5a",
        "primary": "#0a0a0a",
        "accent": "#d0021b",
      },
      borderRadius: {
        "sm": "0px",
        "md": "2px",
        "lg": "4px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 2px rgba(0,0,0,0.08)",
        "md": "0 4px 10px rgba(0,0,0,0.10)",
        "lg": "0 12px 28px rgba(0,0,0,0.14)",
      },
      fontFamily: {
        "sans": ["'Helvetica Neue'", "'Inter'", "Arial", "sans-serif"],
        "display": ["'Times New Roman'", "'Georgia'", "serif"],
        "mono": ["ui-monospace", "'Courier New'", "monospace"],
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
        "grain": "repeating-conic-gradient(from 0deg, rgba(0,0,0,0.015) 0deg 1deg, transparent 1deg 2deg)",
        "hairline": "1px solid var(--color-text)",
      },
    },
  },
};

