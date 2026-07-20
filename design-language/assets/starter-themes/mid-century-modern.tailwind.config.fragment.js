// Mid-Century Modern — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f2e9d8",
        "surface": "#fbf5e9",
        "surface-strong": "#e8dcc0",
        "border": "#b08d4f",
        "text": "#2b241a",
        "text-muted": "#6b5c42",
        "primary": "#c1531c",
        "accent": "#2f7d6e",
        "mustard": "#e0a52c",
        "brown": "#6f4324",
      },
      borderRadius: {
        "sm": "4px",
        "md": "10px",
        "lg": "18px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 4px rgba(43,36,26,0.14)",
        "md": "0 6px 14px rgba(43,36,26,0.18)",
        "lg": "0 14px 32px rgba(43,36,26,0.22)",
      },
      fontFamily: {
        "sans": ["'Futura'", "'Century Gothic'", "'Poppins'", "sans-serif"],
        "display": ["'Cooper Black'", "'Futura'", "serif"],
        "mono": ["'Courier New'", "ui-monospace", "monospace"],
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
        "standard": "cubic-bezier(0.3, 0, 0.2, 1)",
        "sunburst-rule": "linear-gradient(90deg, var(--color-primary), var(--color-mustard) 50%, var(--color-accent))",
      },
    },
  },
};

