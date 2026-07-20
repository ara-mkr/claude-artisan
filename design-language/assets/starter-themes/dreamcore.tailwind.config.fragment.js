// Dreamcore — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f3e9f7",
        "surface": "#fdf6ff",
        "surface-strong": "#ecd9f2",
        "border": "#d9b8e8",
        "text": "#3a1f4d",
        "text-muted": "#6d4a80",
        "primary": "#c04fd6",
        "accent": "#f4c96b",
        "glow": "#ffe9a8",
      },
      borderRadius: {
        "sm": "10px",
        "md": "18px",
        "lg": "28px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 10px rgba(150, 70, 170, 0.14)",
        "md": "0 8px 28px rgba(150, 70, 170, 0.20)",
        "lg": "0 20px 50px rgba(150, 70, 170, 0.26)",
        "glow": "0 0 32px rgba(255, 233, 168, 0.55)",
      },
      fontFamily: {
        "sans": ["'Quicksand'", "'Comic Neue'", "system-ui", "sans-serif"],
        "display": ["'Cormorant Garamond'", "'Playfair Display'", "serif"],
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
        "standard": "cubic-bezier(0.2, 0, 0, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --glow-ring: 0 0 0 6px rgba(255, 233, 168, 0.35);
