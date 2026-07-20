// Clockpunk — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#3b2b1a",
        "surface": "#4f3a24",
        "surface-strong": "#61472c",
        "border": "#b08d4f",
        "text": "#f2e6cc",
        "text-muted": "#cbb489",
        "primary": "#b08d4f",
        "accent": "#7a9e7e",
      },
      borderRadius: {
        "sm": "2px",
        "md": "6px",
        "lg": "12px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 2px rgba(0,0,0,0.4)",
        "md": "0 6px 16px rgba(0,0,0,0.45)",
        "lg": "0 14px 32px rgba(0,0,0,0.5)",
      },
      fontFamily: {
        "sans": ["'Cormorant Garamond'", "Georgia", "serif"],
        "display": ["'Cormorant Garamond'", "'Trajan Pro'", "Georgia", "serif"],
        "mono": ["'Courier Prime'", "ui-monospace", "monospace"],
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
//   --brass-gradient: linear-gradient(180deg, #d8b968 0%, #b08d4f 45%, #8a6a35 100%);
//   --gear-ring: 3px dashed var(--color-primary);
