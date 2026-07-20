// Stipple / Pointillism — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f7f5ef",
        "surface": "#ffffff",
        "surface-strong": "#ece8dc",
        "border": "#cfc9b8",
        "text": "#1e1c17",
        "text-muted": "#5e594c",
        "primary": "#2b2620",
        "accent": "#a1361c",
        "dot": "#1e1c17",
      },
      borderRadius: {
        "sm": "2px",
        "md": "4px",
        "lg": "8px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 2px rgba(30,28,23,0.10)",
        "md": "0 3px 10px rgba(30,28,23,0.12)",
        "lg": "0 10px 24px rgba(30,28,23,0.16)",
      },
      fontFamily: {
        "sans": ["'Georgia'", "'Source Serif Pro'", "serif"],
        "display": ["'Playfair Display'", "'Georgia'", "serif"],
        "mono": ["'Courier Prime'", "ui-monospace", "monospace"],
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
//   --stipple-fine: radial-gradient(circle, var(--color-dot) 0.6px, transparent 0.6px);
//   --stipple-coarse: radial-gradient(circle, var(--color-dot) 1px, transparent 1px);
//   --stipple-size-fine: 4px 4px;
//   --stipple-size-coarse: 7px 7px;
