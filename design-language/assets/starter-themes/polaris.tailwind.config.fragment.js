// Shopify Polaris — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f1f2f4",
        "surface": "#ffffff",
        "surface-strong": "#f6f6f7",
        "border": "#d2d5d9",
        "text": "#1a1c1d",
        "text-muted": "#5c5f62",
        "primary": "#008060",
        "accent": "#2c6ecb",
        "critical": "#d82c0d",
      },
      borderRadius: {
        "sm": "6px",
        "md": "8px",
        "lg": "12px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 0 rgba(26, 28, 29, 0.05)",
        "md": "0 1px 3px rgba(26, 28, 29, 0.1), 0 1px 2px rgba(26,28,29,0.06)",
        "lg": "0 4px 10px rgba(26, 28, 29, 0.12)",
      },
      fontFamily: {
        "sans": ["-apple-system", "'Segoe UI'", "'Helvetica Neue'", "system-ui", "sans-serif"],
        "display": ["-apple-system", "'Segoe UI'", "system-ui", "sans-serif"],
        "mono": ["ui-monospace", "'SFMono-Regular'", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem",
        "sm": "0.8125rem",
        "base": "0.875rem",
        "lg": "1rem",
        "xl": "1.25rem",
        "2xl": "1.625rem",
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
//   --focus-ring: 0 0 0 4px rgba(0, 91, 211, 0.24);
//   --card-divider: 1px solid var(--color-border);
