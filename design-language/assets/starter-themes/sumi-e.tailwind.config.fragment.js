// Sumi-e — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f4efe4",
        "surface": "#faf6ec",
        "surface-2": "#ede5d3",
        "text": "#1c1c1c",
        "text-muted": "#5a564c",
        "primary": "#232323",
        "accent": "#b13d2c",
        "ink-grey": "#8c8676",
        "ink-wash": "#3d3a33",
      },
      borderRadius: {
        "sm": "2px",
        "md": "6px",
        "lg": "14px",
        "pill": "999px",
      },
      boxShadow: {
        "ink-bleed": "0 6px 18px rgba(28,28,28,0.14)",
        "ink-bleed-sm": "0 2px 8px rgba(28,28,28,0.10)",
      },
      fontFamily: {
        "sans": ["'Shippori Mincho'", "'Noto Serif JP'", "'Zen Old Mincho'", "serif"],
        "display": ["'Zen Old Mincho'", "'Shippori Mincho'", "serif"],
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
        "standard": "cubic-bezier(0.4, 0.0, 0.2, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --ink-gradient: linear-gradient(160deg, #232323 0%, #5a564c 55%, transparent 100%);
//   --seal-stamp: 0 0 0 2px #b13d2c;
