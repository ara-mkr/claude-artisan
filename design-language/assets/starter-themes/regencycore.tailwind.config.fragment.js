// Regencycore — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#fbeef0",
        "surface": "#fffaf6",
        "surface-strong": "#f6e0e4",
        "border": "#e3b8c2",
        "text": "#4a2c3a",
        "text-muted": "#8a6274",
        "primary": "#c1436a",
        "accent": "#c9a35c",
        "sage": "#8fa583",
      },
      borderRadius: {
        "sm": "8px",
        "md": "16px",
        "lg": "28px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 6px rgba(193, 67, 106, 0.10)",
        "md": "0 8px 20px rgba(193, 67, 106, 0.14)",
        "lg": "0 18px 36px rgba(193, 67, 106, 0.16)",
      },
      fontFamily: {
        "sans": ["'Cormorant Garamond'", "Georgia", "serif"],
        "display": ["'Great Vibes'", "'Snell Roundhand'", "cursive"],
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
        "standard": "cubic-bezier(0.25, 0.1, 0.25, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --gilt-frame: 1px solid var(--color-accent);
//   --gilt-outer: 2px solid var(--color-border);
//   --floral-wash: radial-gradient(120% 100% at 100% 0%, rgba(201,163,92,0.14), transparent 55%);
