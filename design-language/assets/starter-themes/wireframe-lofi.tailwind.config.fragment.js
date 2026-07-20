// Lo-fi Wireframe — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#fafafa",
        "surface": "#ffffff",
        "surface-strong": "#f0f0f0",
        "border": "#9a9a9a",
        "text": "#333333",
        "text-muted": "#7a7a7a",
        "primary": "#6b6b6b",
        "accent": "#ff5a36",
        "placeholder": "#cfcfcf",
      },
      borderRadius: {
        "sm": "2px",
        "md": "3px",
        "lg": "4px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "none",
        "md": "none",
        "lg": "none",
      },
      fontFamily: {
        "sans": ["'Helvetica Neue'", "Arial", "sans-serif"],
        "display": ["'Helvetica Neue'", "Arial", "sans-serif"],
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
        "standard": "ease",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --dashed-outline: 1.5px dashed var(--color-border);
//   --sketch-jitter: rotate(-0.2deg);
