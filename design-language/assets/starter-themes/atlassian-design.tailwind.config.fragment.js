// Atlassian Design System — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f7f8f9",
        "surface": "#ffffff",
        "surface-strong": "#f1f2f4",
        "border": "#dcdfe4",
        "text": "#172b4d",
        "text-muted": "#44546f",
        "primary": "#0052cc",
        "accent": "#36b37e",
      },
      borderRadius: {
        "sm": "3px",
        "md": "6px",
        "lg": "10px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 2px rgba(9,30,66,0.13)",
        "md": "0 4px 8px rgba(9,30,66,0.14), 0 0 1px rgba(9,30,66,0.28)",
        "lg": "0 8px 16px rgba(9,30,66,0.16), 0 0 1px rgba(9,30,66,0.31)",
      },
      fontFamily: {
        "sans": ["'Charlie Sans'", "'Segoe UI'", "system-ui", "-apple-system", "sans-serif"],
        "display": ["'Charlie Sans'", "'Segoe UI'", "system-ui", "sans-serif"],
        "mono": ["'SFMono-Regular'", "ui-monospace", "monospace"],
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
//   --focus-ring: 0 0 0 2px rgba(0,82,204,0.4);
//   --accent-bar: linear-gradient(90deg, var(--color-primary), var(--color-accent));
