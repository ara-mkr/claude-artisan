// Halftone — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#fdf6e8",
        "surface": "#ffffff",
        "surface-strong": "#fff2c9",
        "border": "#16130f",
        "text": "#16130f",
        "text-muted": "#4d463a",
        "primary": "#e0263b",
        "accent": "#1f6fd6",
        "yellow": "#f6c93b",
      },
      borderRadius: {
        "sm": "2px",
        "md": "4px",
        "lg": "8px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "3px 3px 0 var(--color-border)",
        "md": "5px 5px 0 var(--color-border)",
        "lg": "8px 8px 0 var(--color-border)",
      },
      fontFamily: {
        "sans": ["'Archivo Black'", "'Helvetica Neue'", "sans-serif"],
        "display": ["'Bangers'", "'Anton'", "'Archivo Black'", "sans-serif"],
        "mono": ["'Courier New'", "ui-monospace", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem",
        "sm": "0.9rem",
        "base": "1rem",
        "lg": "1.15rem",
        "xl": "1.5rem",
        "2xl": "2rem",
        "3xl": "2.75rem",
        "4xl": "3.75rem",
        "5xl": "5.25rem",
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
        "dot-grid": "radial-gradient(var(--color-primary) 32%, transparent 34%) 0 0/10px 10px",
        "dot-grid-blue": "radial-gradient(var(--color-accent) 32%, transparent 34%) 0 0/8px 8px",
      },
    },
  },
};

