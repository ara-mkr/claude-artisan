// Chrome / Liquid Metal — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#1c1e22",
        "surface": "#2a2d33",
        "surface-strong": "#383c44",
        "border": "#6b727e",
        "text": "#f1f3f5",
        "text-muted": "#b7bec8",
        "primary": "#c7cdd6",
        "accent": "#7dd3fc",
      },
      borderRadius: {
        "sm": "4px",
        "md": "8px",
        "lg": "14px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 2px rgba(0,0,0,0.5)",
        "md": "0 6px 16px rgba(0,0,0,0.5)",
        "lg": "0 14px 32px rgba(0,0,0,0.55)",
      },
      fontFamily: {
        "sans": ["'Helvetica Neue'", "Arial", "system-ui", "sans-serif"],
        "display": ["'Helvetica Neue'", "Arial", "system-ui", "sans-serif"],
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
        "standard": "cubic-bezier(0.2, 0, 0, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --chrome-gradient: linear-gradient(180deg, #f4f6f8 0%, #c7cdd6 18%, #6b727e 48%, #9aa1ab 62%, #eef1f4 100%);
//   --rainbow-edge: linear-gradient(90deg, #ff8fab, #ffd97d, #7dd3fc, #b794f6);
