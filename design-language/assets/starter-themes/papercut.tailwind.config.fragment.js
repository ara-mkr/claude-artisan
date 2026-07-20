// Papercut / Paper Collage — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#fbf3e7",
        "surface": "#fff9f0",
        "surface-strong": "#ffe8cc",
        "border": "#e3c9a3",
        "text": "#3b2c22",
        "text-muted": "#6b5847",
        "primary": "#e8623d",
        "accent": "#4f9c8e",
        "torn-shadow": "rgba(59, 44, 34, 0.18)",
      },
      borderRadius: {
        "sm": "4px",
        "md": "8px",
        "lg": "14px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "2px 3px 0 rgba(59, 44, 34, 0.12), 0 2px 6px rgba(59,44,34,0.1)",
        "md": "4px 6px 0 rgba(59, 44, 34, 0.14), 0 6px 14px rgba(59,44,34,0.12)",
        "lg": "6px 10px 0 rgba(59, 44, 34, 0.16), 0 12px 28px rgba(59,44,34,0.14)",
      },
      fontFamily: {
        "sans": ["'Quicksand'", "'Comic Neue'", "system-ui", "sans-serif"],
        "display": ["'Caveat'", "'Comic Neue'", "cursive"],
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
//   --torn-edge-clip: polygon(0% 2%, 3% 0%, 8% 3%, 14% 0%, 20% 2%, 27% 0%, 34% 3%, 41% 0%, 48% 2%, 55% 0%, 62% 3%, 69% 0%, 76% 2%, 83% 0%, 90% 3%, 97% 0%, 100% 2%, 100% 98%, 96% 100%, 90% 98%, 83% 100%, 76% 98%, 69% 100%, 62% 98%, 55% 100%, 48% 98%, 41% 100%, 34% 98%, 27% 100%, 20% 98%, 14% 100%, 8% 98%, 3% 100%, 0% 98%);
//   --fold-line: linear-gradient(90deg, transparent 0%, rgba(59,44,34,0.08) 50%, transparent 100%);
