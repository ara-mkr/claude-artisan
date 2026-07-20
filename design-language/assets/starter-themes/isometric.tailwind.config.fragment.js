// Isometric — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#eef1fb",
        "surface": "#ffffff",
        "surface-strong": "#e2e7f9",
        "border": "#c7d0f0",
        "text": "#1c2340",
        "text-muted": "#5b6486",
        "primary": "#6d5ef5",
        "accent": "#14b8a6",
        "iso-shadow-a": "#4c46c9",
        "iso-shadow-b": "#8f89ff",
      },
      borderRadius: {
        "sm": "6px",
        "md": "10px",
        "lg": "16px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 3px 0 var(--color-iso-shadow-a)",
        "md": "6px 6px 0 var(--color-iso-shadow-a)",
        "lg": "10px 10px 0 var(--color-iso-shadow-a)",
      },
      fontFamily: {
        "sans": ["'Poppins'", "'Inter'", "system-ui", "sans-serif"],
        "display": ["'Poppins'", "system-ui", "sans-serif"],
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
//   --iso-facet: linear-gradient(155deg, #ffffff 0%, var(--color-surface-strong) 100%);
