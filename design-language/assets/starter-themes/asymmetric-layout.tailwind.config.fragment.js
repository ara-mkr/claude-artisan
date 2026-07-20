// Asymmetric / Broken Grid — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f5f4f0",
        "surface": "#ffffff",
        "surface-strong": "#101010",
        "border": "#101010",
        "text": "#101010",
        "text-muted": "#55534c",
        "primary": "#ff3d1a",
        "accent": "#1a1aff",
      },
      borderRadius: {
        "sm": "0px",
        "md": "0px",
        "lg": "0px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "4px 4px 0 rgba(16,16,16,0.9)",
        "md": "8px 8px 0 rgba(16,16,16,0.9)",
        "lg": "14px 14px 0 rgba(16,16,16,0.9)",
      },
      fontFamily: {
        "sans": ["'Neue Haas Grotesk'", "'Helvetica Neue'", "Arial", "sans-serif"],
        "display": ["'Neue Haas Grotesk'", "'Helvetica Neue'", "Arial", "sans-serif"],
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
        "standard": "cubic-bezier(0.7, 0, 0.3, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --tilt-1: rotate(-1.4deg);
//   --tilt-2: rotate(1.1deg);
//   --overlap: -14px;
