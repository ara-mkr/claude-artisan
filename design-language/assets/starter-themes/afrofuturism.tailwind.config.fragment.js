// Afrofuturism — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#100c1b",
        "surface": "#1d1630",
        "surface-2": "#2c2145",
        "text": "#fff8df",
        "text-muted": "#d3c6b2",
        "primary": "#f4b942",
        "accent": "#2dd4bf",
        "violet": "#a78bfa",
      },
      borderRadius: {
        "sm": "4px",
        "md": "12px",
        "lg": "24px",
        "pill": "999px",
      },
      boxShadow: {
        "glow": "0 0 0 1px rgba(244,185,66,.45), 0 18px 45px rgba(0,0,0,.35)",
        "orbit": "0 0 28px rgba(45,212,191,.22)",
      },
      fontFamily: {
        "sans": ["Inter", "system-ui", "sans-serif"],
        "display": ["Georgia", "serif"],
        "mono": ["ui-monospace", "monospace"],
      },
      fontSize: {
        "xs": ".75rem",
        "sm": ".875rem",
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
        "standard": "cubic-bezier(.22,.61,.36,1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --constellation: radial-gradient(circle at 20% 15%, #f4b942 0 1px, transparent 2px), radial-gradient(circle at 78% 34%, #2dd4bf 0 1px, transparent 2px);
