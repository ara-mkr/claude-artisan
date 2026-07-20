// Cyanotype — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0d2c61",
        "surface": "#123a7a",
        "surface-strong": "#17458f",
        "border": "#6f92d1",
        "text": "#eaf1ff",
        "text-muted": "#b6c9ec",
        "primary": "#ffffff",
        "accent": "#a9c4f5",
        "bleed": "rgba(255, 255, 255, 0.10)",
      },
      borderRadius: {
        "sm": "2px",
        "md": "4px",
        "lg": "6px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 6px rgba(0, 0, 0, 0.30)",
        "md": "0 6px 16px rgba(0, 0, 0, 0.34)",
        "lg": "0 12px 28px rgba(0, 0, 0, 0.38)",
      },
      fontFamily: {
        "sans": ["'Cormorant Garamond'", "'EB Garamond'", "Georgia", "serif"],
        "display": ["'Cormorant Garamond'", "'Playfair Display'", "serif"],
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
//   --emulsion-vignette: radial-gradient(120% 100% at 50% 0%, transparent 55%, rgba(0,0,0,0.28) 100%);
//   --botanical-border: 1px solid rgba(255,255,255,0.35);
