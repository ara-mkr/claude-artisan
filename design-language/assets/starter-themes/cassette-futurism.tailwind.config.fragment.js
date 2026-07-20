// Cassette Futurism — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#b8b09a",
        "surface": "#c9c2ad",
        "surface-strong": "#d9d2ba",
        "border": "#8a8367",
        "text": "#2a2820",
        "text-muted": "#5b5641",
        "primary": "#b5651d",
        "accent": "#ffb000",
        "screen": "#1a1c14",
        "led": "#4caf50",
      },
      borderRadius: {
        "sm": "3px",
        "md": "6px",
        "lg": "10px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "inset 0 1px 0 rgba(255,255,255,0.35), 0 1px 2px rgba(0,0,0,0.3)",
        "md": "inset 0 1px 0 rgba(255,255,255,0.3), 0 3px 8px rgba(0,0,0,0.35)",
        "lg": "inset 0 2px 0 rgba(255,255,255,0.25), 0 6px 16px rgba(0,0,0,0.4)",
      },
      fontFamily: {
        "sans": ["'Eurostile'", "'Helvetica Neue'", "system-ui", "sans-serif"],
        "display": ["'Eurostile'", "'Bank Gothic'", "system-ui", "sans-serif"],
        "mono": ["'VT323'", "'Courier New'", "ui-monospace", "monospace"],
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
//   --scanlines: repeating-linear-gradient(0deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 1px, transparent 1px, transparent 3px);
//   --screen-glow: 0 0 12px rgba(255,176,0,0.35);
