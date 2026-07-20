// Postmodern Graphic Design — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#efe9df",
        "surface": "#ffffff",
        "surface-strong": "#fff2b8",
        "border": "#17171a",
        "text": "#17171a",
        "text-muted": "#514f52",
        "primary": "#e0247a",
        "accent": "#2b6df0",
        "clash": "#ffce00",
      },
      borderRadius: {
        "sm": "0px",
        "md": "2px",
        "lg": "999px 4px 999px 4px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "3px 3px 0 var(--color-primary)",
        "md": "6px 6px 0 var(--color-accent)",
        "lg": "9px 9px 0 var(--color-clash)",
      },
      fontFamily: {
        "sans": ["'Helvetica Neue'", "Arial", "sans-serif"],
        "display": ["Georgia", "'Times New Roman'", "serif"],
        "mono": ["'Courier New'", "ui-monospace", "monospace"],
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
        "standard": "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --collage-tilt: -1.2deg;
//   --overprint-texture: repeating-linear-gradient(45deg, rgba(23,23,26,0.04) 0 2px, transparent 2px 6px);
