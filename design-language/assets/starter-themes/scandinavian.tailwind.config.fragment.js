// Scandinavian / Nordic — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f7f4ef",
        "surface": "#ffffff",
        "surface-2": "#efe9e1",
        "text": "#2b2b2b",
        "text-muted": "#6f6a63",
        "primary": "#3a5a40",
        "accent": "#c98a6a",
        "sky": "#a8c5d6",
        "wood": "#d8b8a0",
      },
      borderRadius: {
        "sm": "6px",
        "md": "12px",
        "lg": "20px",
        "pill": "999px",
      },
      boxShadow: {
        "soft": "0 6px 20px rgba(43,43,43,0.06)",
      },
      fontFamily: {
        "sans": ["'Poppins'", "'Work Sans'", "system-ui", "sans-serif"],
        "display": ["'Fraunces'", "'Poppins'", "serif"],
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
        "1": "8px",
        "2": "16px",
        "3": "24px",
        "4": "32px",
        "6": "48px",
        "8": "64px",
        "12": "96px",
        "16": "128px",
      },
      transitionTimingFunction: {
        "standard": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --hairline: 1px solid #e4ddd2;
