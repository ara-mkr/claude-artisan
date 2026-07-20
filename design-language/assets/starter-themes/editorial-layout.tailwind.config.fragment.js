// Editorial / Magazine — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#faf7f2",
        "surface": "#ffffff",
        "surface-strong": "#f0ebe1",
        "border": "#d8cfbe",
        "text": "#211d17",
        "text-muted": "#665c4a",
        "primary": "#8a2a1e",
        "accent": "#1e4f4a",
      },
      borderRadius: {
        "sm": "2px",
        "md": "3px",
        "lg": "4px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 3px rgba(33,29,23,0.08)",
        "md": "0 4px 14px rgba(33,29,23,0.10)",
        "lg": "0 12px 32px rgba(33,29,23,0.14)",
      },
      fontFamily: {
        "sans": ["'Helvetica Neue'", "system-ui", "sans-serif"],
        "display": ["'Playfair Display'", "'Georgia'", "serif"],
        "mono": ["'Courier New'", "ui-monospace", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem",
        "sm": "0.875rem",
        "base": "1.0625rem",
        "lg": "1.25rem",
        "xl": "1.5rem",
        "2xl": "2rem",
        "3xl": "2.75rem",
        "4xl": "3.75rem",
        "5xl": "5rem",
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
//   --dropcap-font: var(--font-display);
