// Pixel Art / 8-bit — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0f1e2e",
        "surface": "#1c3a4f",
        "surface-strong": "#2a5470",
        "border": "#7fd8c5",
        "text": "#eaf6f2",
        "text-muted": "#9fc9c0",
        "primary": "#f4c542",
        "accent": "#ef5b5b",
        "pixel-grid": "rgba(0, 0, 0, 0.25)",
      },
      borderRadius: {
        "sm": "0px",
        "md": "0px",
        "lg": "0px",
        "pill": "0px",
      },
      boxShadow: {
        "sm": "4px 4px 0 #0a1622",
        "md": "6px 6px 0 #0a1622",
        "lg": "8px 8px 0 #0a1622",
      },
      fontFamily: {
        "sans": ["'Press Start 2P'", "'VT323'", "monospace"],
        "display": ["'Press Start 2P'", "monospace"],
        "mono": ["'VT323'", "ui-monospace", "monospace"],
      },
      fontSize: {
        "xs": "0.7rem",
        "sm": "0.8rem",
        "base": "0.95rem",
        "lg": "1.1rem",
        "xl": "1.3rem",
        "2xl": "1.7rem",
        "3xl": "2.1rem",
        "4xl": "2.6rem",
        "5xl": "3.4rem",
      },
      spacing: {
        "1": "8px",
        "2": "16px",
        "3": "16px",
        "4": "24px",
        "6": "32px",
        "8": "40px",
        "12": "56px",
        "16": "72px",
        "24": "96px",
      },
      transitionTimingFunction: {
        "standard": "steps(4, end)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --pixel-grid-bg: linear-gradient(var(--color-pixel-grid) 1px, transparent 1px), linear-gradient(90deg, var(--color-pixel-grid) 1px, transparent 1px);
//   --dither-fill: repeating-conic-gradient(#f4c542 0% 25%, #ef5b5b 0% 50%);
