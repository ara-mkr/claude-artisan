// Fluent Design 2 (Fluent 2) — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f3f3f3",
        "surface": "rgba(255,255,255,0.70)",
        "mica": "rgba(243,243,243,0.85)",
        "acrylic": "rgba(252,252,252,0.60)",
        "text": "#1b1b1b",
        "text-muted": "#616161",
        "primary": "#0f6cbd",
        "accent": "#005fb8",
        "stroke": "rgba(0,0,0,0.10)",
      },
      borderRadius: {
        "sm": "4px",
        "md": "8px",
        "lg": "12px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 4px rgba(0,0,0,0.14)",
        "md": "0 8px 16px rgba(0,0,0,0.14)",
        "lg": "0 32px 64px rgba(0,0,0,0.19)",
        "card-stroke": "inset 0 0 0 1px rgba(0,0,0,0.06), inset 0 -1px 0 rgba(0,0,0,0.10)",
      },
      backdropBlur: {
        "acrylic": "30px",
        "acrylic-thin": "60px",
      },
      fontFamily: {
        "sans": ["'Segoe UI Variable'", "'Segoe UI'", "system-ui", "sans-serif"],
        "display": ["'Segoe UI Variable Display'", "'Segoe UI'", "sans-serif"],
        "mono": ["'Cascadia Code'", "ui-monospace", "monospace"],
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
        "standard": "cubic-bezier(0.33, 0, 0.67, 1)",
        "decel": "cubic-bezier(0.1, 0.9, 0.2, 1)",
        "accel": "cubic-bezier(0.7, 0, 1, 0.5)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --acrylic-noise: 0.02;
//   --reveal-highlight: radial-gradient(circle at var(--x,50%) var(--y,50%), rgba(255,255,255,0.35), transparent 60%);
