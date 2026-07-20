// Gorpcore — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#e8e4d8",
        "surface": "#f2efe6",
        "surface-strong": "#ddd7c4",
        "border": "#4a4638",
        "text": "#24221b",
        "text-muted": "#565243",
        "primary": "#3c5a3e",
        "accent": "#e8630a",
        "hi-vis": "#d7ff3f",
      },
      borderRadius: {
        "sm": "2px",
        "md": "4px",
        "lg": "6px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 2px rgba(36,34,27,0.2)",
        "md": "0 4px 12px rgba(36,34,27,0.24)",
        "lg": "0 10px 24px rgba(36,34,27,0.28)",
      },
      fontFamily: {
        "sans": ["'Helvetica Neue'", "'Inter'", "Arial", "sans-serif"],
        "display": ["'Bebas Neue'", "'Oswald'", "Arial", "sans-serif"],
        "mono": ["'JetBrains Mono'", "ui-monospace", "monospace"],
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
        "stitch-line": "repeating-linear-gradient(90deg, var(--color-hi-vis) 0 6px, transparent 6px 12px)",
      },
    },
  },
};

