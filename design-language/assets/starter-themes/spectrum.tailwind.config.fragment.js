// Adobe Spectrum — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#ffffff",
        "surface": "#f8f8f8",
        "surface-strong": "#eaeaea",
        "border": "#d5d5d5",
        "text": "#1f1f1f",
        "text-muted": "#5a5a5a",
        "primary": "#1473e6",
        "accent": "#9256d9",
        "negative": "#e34850",
      },
      borderRadius: {
        "sm": "4px",
        "md": "8px",
        "lg": "16px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 2px rgba(0,0,0,0.10)",
        "md": "0 2px 8px rgba(0,0,0,0.12)",
        "lg": "0 8px 24px rgba(0,0,0,0.16)",
        "focus-ring": "0 0 0 2px #ffffff, 0 0 0 4px var(--color-primary)",
      },
      fontFamily: {
        "sans": ["'Adobe Clean'", "'Source Sans Pro'", "system-ui", "sans-serif"],
        "display": ["'Adobe Clean'", "'Source Sans Pro'", "system-ui", "sans-serif"],
        "mono": ["'Source Code Pro'", "ui-monospace", "monospace"],
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
        "standard": "cubic-bezier(0.15, 0, 0.15, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --focus-ring: var(--shadow-focus-ring);
