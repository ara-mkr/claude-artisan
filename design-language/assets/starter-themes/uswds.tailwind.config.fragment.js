// U.S. Web Design System — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#ffffff",
        "surface": "#f0f0f0",
        "surface-strong": "#e6e6e6",
        "border": "#a9aeb1",
        "text": "#1b1b1b",
        "text-muted": "#565c65",
        "primary": "#005ea2",
        "accent": "#b50909",
        "primary-dark": "#1a4480",
        "focus": "#2491ff",
      },
      borderRadius: {
        "sm": "4px",
        "md": "6px",
        "lg": "8px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 2px rgba(0, 0, 0, 0.12)",
        "md": "0 2px 6px rgba(0, 0, 0, 0.14)",
        "lg": "0 4px 12px rgba(0, 0, 0, 0.16)",
        "none": "none",
      },
      fontFamily: {
        "sans": ["'Public Sans'", "system-ui", "-apple-system", "sans-serif"],
        "display": ["'Public Sans'", "system-ui", "sans-serif"],
        "mono": ["'Roboto Mono'", "ui-monospace", "monospace"],
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
        "gov-band": "linear-gradient(180deg, var(--color-primary-dark) 0%, var(--color-primary-dark) 70%, var(--color-accent) 70%, var(--color-accent) 100%)",
        "trust-rule": "4px solid var(--color-primary)",
      },
    },
  },
};

