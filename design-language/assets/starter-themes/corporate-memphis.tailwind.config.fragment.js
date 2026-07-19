// Corporate Memphis — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#ffffff",
        "surface": "#f7f5ff",
        "surface-2": "#eef0ff",
        "text": "#1f2233",
        "text-muted": "#5b607a",
        "primary": "#6c5ce7",
        "accent": "#ff7a8a",
        "secondary": "#00b894",
        "yellow": "#ffd166",
      },
      borderRadius: {
        "sm": "8px",
        "md": "16px",
        "lg": "24px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 4px 12px rgba(108,92,231,0.10)",
        "md": "0 10px 30px rgba(108,92,231,0.14)",
      },
      fontFamily: {
        "sans": ["'Poppins'", "'Circular'", "system-ui", "sans-serif"],
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
        "standard": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --blob: radial-gradient(circle at 30% 30%, #ff7a8a, #6c5ce7);
