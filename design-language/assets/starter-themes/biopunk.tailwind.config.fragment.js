// Biopunk — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0a1410",
        "surface": "#10201a",
        "surface-strong": "#16291f",
        "border": "#2f6b4c",
        "text": "#e6f5ea",
        "text-muted": "#9fc9ac",
        "primary": "#39ff8c",
        "accent": "#d63bff",
        "membrane": "#1f3d2c",
      },
      borderRadius: {
        "sm": "40% 60% 55% 45% / 45% 40% 60% 55%",
        "md": "60% 40% 55% 45% / 50% 55% 45% 50%",
        "lg": "55% 45% 60% 40% / 45% 55% 40% 60%",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 0 10px rgba(57,255,140,0.25)",
        "md": "0 0 22px rgba(57,255,140,0.3)",
        "lg": "0 0 40px rgba(57,255,140,0.35)",
      },
      fontFamily: {
        "sans": ["'Space Grotesk'", "'IBM Plex Sans'", "system-ui", "sans-serif"],
        "display": ["'Space Grotesk'", "'IBM Plex Mono'", "sans-serif"],
        "mono": ["'IBM Plex Mono'", "ui-monospace", "monospace"],
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
//   --glow-border: 1px solid rgba(57,255,140,0.5);
