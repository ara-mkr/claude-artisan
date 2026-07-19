// Synthwave / Outrun — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0d0221",
        "surface": "#170a3a",
        "text": "#f6f0ff",
        "text-muted": "#9d8bd6",
        "primary": "#ff2a6d",
        "accent": "#05d9e8",
        "purple": "#d300c5",
        "orange": "#ff8b00",
        "grid": "#ff2a6d",
      },
      borderRadius: {
        "sm": "0px",
        "md": "4px",
        "lg": "8px",
        "pill": "999px",
      },
      boxShadow: {
        "glow-pink": "0 0 8px #ff2a6d, 0 0 24px rgba(255,42,109,0.6)",
        "glow-cyan": "0 0 8px #05d9e8, 0 0 24px rgba(5,217,232,0.6)",
      },
      fontFamily: {
        "sans": ["'Kanit'", "'Rajdhani'", "system-ui", "sans-serif"],
        "display": ["'Monoton'", "'Audiowide'", "cursive"],
        "mono": ["'Share Tech Mono'", "monospace"],
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
//   --sun: linear-gradient(180deg, #ff8b00 0%, #ff2a6d 60%, #d300c5 100%);
//   --perspective-grid: linear-gradient(#05d9e8 1px, transparent 1px);
