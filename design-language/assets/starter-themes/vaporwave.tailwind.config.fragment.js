// Vaporwave — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#1a0033",
        "surface": "#2d0a4e",
        "text": "#ffffff",
        "text-muted": "#c9a6ff",
        "primary": "#ff71ce",
        "accent": "#01cdfe",
        "purple": "#b967ff",
        "mint": "#05ffa1",
        "yellow": "#fffb96",
      },
      borderRadius: {
        "sm": "0px",
        "md": "6px",
        "lg": "12px",
        "pill": "999px",
      },
      boxShadow: {
        "glow": "0 0 20px rgba(255,113,206,0.6)",
        "text-chrome": "2px 2px 0 #01cdfe, -2px -2px 0 #ff71ce",
      },
      fontFamily: {
        "sans": ["'VT323'", "'Poppins'", "system-ui", "sans-serif"],
        "display": ["'Monoton'", "'VT323'", "cursive"],
        "mono": ["'VT323'", "monospace"],
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
        "standard": "linear",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --grid: linear-gradient(#ff71ce 1px, transparent 1px), linear-gradient(90deg, #ff71ce 1px, transparent 1px);
//   --sunset: linear-gradient(180deg, #ff71ce, #ff9a5a, #fffb96);
