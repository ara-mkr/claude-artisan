// Base Web — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#ffffff",
        "surface": "#ffffff",
        "surface-strong": "#f6f6f6",
        "border": "#e2e2e2",
        "text": "#000000",
        "text-muted": "#5e5e5e",
        "primary": "#276ef1",
        "accent": "#06c167",
      },
      borderRadius: {
        "sm": "4px",
        "md": "8px",
        "lg": "12px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 2px rgba(0,0,0,0.08)",
        "md": "0 4px 12px rgba(0,0,0,0.1)",
        "lg": "0 10px 24px rgba(0,0,0,0.12)",
      },
      fontFamily: {
        "sans": ["'Uber Move'", "'Helvetica Neue'", "Arial", "sans-serif"],
        "display": ["'Uber Move'", "'Helvetica Neue'", "Arial", "sans-serif"],
        "mono": ["'Uber Mono'", "ui-monospace", "monospace"],
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
        "seam": "var(--color-primary)",
        "seam-underline": "3px solid var(--seam)",
      },
    },
  },
};

