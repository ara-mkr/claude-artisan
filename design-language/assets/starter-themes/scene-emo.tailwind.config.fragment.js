// Scene / Emo — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0a0a0c",
        "surface": "#17151c",
        "surface-strong": "#211c29",
        "border": "#ff2fb0",
        "text": "#f5f2fa",
        "text-muted": "#b9aecb",
        "primary": "#ff2fb0",
        "accent": "#ccff00",
        "electric": "#7a2fff",
      },
      borderRadius: {
        "sm": "2px",
        "md": "10px",
        "lg": "18px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 0 6px rgba(255,47,176,0.45)",
        "md": "0 0 18px rgba(255,47,176,0.5), 0 4px 14px rgba(0,0,0,0.6)",
        "lg": "0 0 32px rgba(255,47,176,0.55), 0 10px 26px rgba(0,0,0,0.7)",
      },
      fontFamily: {
        "sans": ["'Comic Sans MS'", "'Chalkboard SE'", "'Trebuchet MS'", "sans-serif"],
        "display": ["'Jokerman'", "'Impact'", "'Trebuchet MS'", "sans-serif"],
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
        "standard": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --checkerboard: repeating-conic-gradient(#1c1822 0% 25%, #0a0a0c 0% 50%) 0 0 / 16px 16px;
//   --neon-text-glow: 0 0 8px rgba(255,47,176,0.8), 0 0 18px rgba(255,47,176,0.4);
