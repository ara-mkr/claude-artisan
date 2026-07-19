// Maximalism — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#14002e",
        "surface": "#2a0a52",
        "text": "#fff6d5",
        "text-muted": "#f2c9ff",
        "primary": "#ff007a",
        "accent": "#ffd400",
        "lime": "#aaff00",
        "cyan": "#00e5ff",
        "orange": "#ff6a00",
      },
      borderRadius: {
        "sm": "6px",
        "md": "16px",
        "lg": "28px",
        "pill": "999px",
      },
      boxShadow: {
        "pop": "8px 8px 0 #ffd400, 16px 16px 0 #ff007a",
        "glow": "0 0 24px rgba(255,0,122,0.6)",
      },
      fontFamily: {
        "sans": ["'Fraunces'", "'Poppins'", "system-ui", "sans-serif"],
        "display": ["'Rubik Mono One'", "'Fraunces'", "serif"],
        "mono": ["'Space Mono'", "monospace"],
      },
      fontSize: {
        "xs": "0.8rem",
        "sm": "1rem",
        "base": "1.15rem",
        "lg": "1.5rem",
        "xl": "2.1rem",
        "2xl": "3rem",
        "3xl": "4.2rem",
        "4xl": "6rem",
        "5xl": "8.5rem",
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
//   --clash: linear-gradient(135deg, #ff007a, #ffd400, #00e5ff);
