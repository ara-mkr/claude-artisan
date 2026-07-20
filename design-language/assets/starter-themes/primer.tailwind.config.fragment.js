// Primer — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f6f8fa",
        "surface": "#ffffff",
        "surface-strong": "#f6f8fa",
        "border": "#d0d7de",
        "text": "#1f2328",
        "text-muted": "#59636e",
        "primary": "#1f883d",
        "accent": "#0969da",
        "danger": "#cf222e",
      },
      borderRadius: {
        "sm": "6px",
        "md": "6px",
        "lg": "12px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 0 rgba(31, 35, 40, 0.04)",
        "md": "0 3px 6px rgba(140, 149, 159, 0.15)",
        "lg": "0 8px 24px rgba(140, 149, 159, 0.2)",
      },
      fontFamily: {
        "sans": ["-apple-system", "'Segoe UI'", "'Noto Sans'", "'Helvetica Neue'", "sans-serif"],
        "display": ["-apple-system", "'Segoe UI'", "sans-serif"],
        "mono": ["ui-monospace", "'SFMono-Regular'", "'Consolas'", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem",
        "sm": "0.8125rem",
        "base": "0.875rem",
        "lg": "1rem",
        "xl": "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
        "5xl": "3.25rem",
      },
      spacing: {
        "1": "4px",
        "2": "8px",
        "3": "12px",
        "4": "16px",
        "6": "20px",
        "8": "28px",
        "12": "40px",
        "16": "56px",
        "24": "80px",
      },
      transitionTimingFunction: {
        "standard": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --focus-ring: 0 0 0 3px rgba(9, 105, 218, 0.3);
//   --code-diff-add: #d1f4dc;
