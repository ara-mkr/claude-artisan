// Holographic / Iridescent — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0b0b12",
        "surface": "rgba(255,255,255,0.08)",
        "text": "#ffffff",
        "text-muted": "#c7c7d9",
        "primary": "#a0f0ff",
        "accent": "#ff9ff3",
        "cyan": "#7cf9ff",
        "pink": "#ff9ff3",
        "lime": "#c8ff8f",
      },
      borderRadius: {
        "sm": "10px",
        "md": "18px",
        "lg": "28px",
        "pill": "999px",
      },
      boxShadow: {
        "iri": "0 8px 30px rgba(160,240,255,0.35)",
      },
      backdropBlur: {
        "backdrop": "8px",
      },
      fontFamily: {
        "sans": ["'Space Grotesk'", "system-ui", "sans-serif"],
        "display": ["'Space Grotesk'", "sans-serif"],
        "mono": ["'Space Mono'", "monospace"],
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
//   --holo: linear-gradient(115deg, #ff9ff3, #a0f0ff, #c8ff8f, #ff9ff3);
//   --foil: conic-gradient(from 0deg, #ff9ff3, #a0f0ff, #c8ff8f, #ffd28f, #ff9ff3);
