// VSCO Girl — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f3ece1",
        "surface": "#fbf7f0",
        "surface-strong": "#ece2d0",
        "border": "#d8c9ae",
        "text": "#4a4038",
        "text-muted": "#8a7c68",
        "primary": "#6fa8a3",
        "accent": "#e8a598",
        "shell": "#f0d9c0",
      },
      borderRadius: {
        "sm": "10px",
        "md": "18px",
        "lg": "28px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 8px rgba(74,64,56,0.08)",
        "md": "0 6px 18px rgba(74,64,56,0.12)",
        "lg": "0 12px 32px rgba(74,64,56,0.15)",
      },
      fontFamily: {
        "sans": ["'Poppins'", "'Segoe UI'", "sans-serif"],
        "display": ["'Caveat'", "'Poppins'", "cursive"],
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
        "standard": "cubic-bezier(0.3, 0, 0.2, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --faded-wash: linear-gradient(135deg, rgba(255,255,255,0.5), rgba(232,165,152,0.15));
//   --scrunchie-underline: 3px dashed var(--color-accent);
//   --film-grain-opacity: 0.05;
