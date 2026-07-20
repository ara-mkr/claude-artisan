// Salesforce Lightning — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f3f3f3",
        "surface": "#ffffff",
        "surface-strong": "#f4f6f9",
        "border": "#dddbda",
        "text": "#181818",
        "text-muted": "#706e6b",
        "primary": "#0176d3",
        "accent": "#04844b",
        "danger": "#ba0517",
      },
      borderRadius: {
        "sm": "4px",
        "md": "4px",
        "lg": "8px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 2px rgba(0,0,0,0.10)",
        "md": "0 2px 6px rgba(0,0,0,0.12)",
        "lg": "0 4px 14px rgba(0,0,0,0.14)",
      },
      fontFamily: {
        "sans": ["'Salesforce Sans'", "'Inter'", "system-ui", "sans-serif"],
        "display": ["'Salesforce Sans'", "'Inter'", "system-ui", "sans-serif"],
        "mono": ["ui-monospace", "'SFMono-Regular'", "monospace"],
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
        "24": "88px",
      },
      transitionTimingFunction: {
        "standard": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --brand-rule: var(--color-primary);
