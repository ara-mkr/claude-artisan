// Cyberprep — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#eef9fb",
        "surface": "#ffffff",
        "surface-strong": "#dcf3f6",
        "border": "#b7e6ec",
        "text": "#0c3a3f",
        "text-muted": "#3f6c70",
        "primary": "#0fb5c4",
        "accent": "#3ddc84",
        "glossy-hi": "rgba(255, 255, 255, 0.85)",
      },
      borderRadius: {
        "sm": "8px",
        "md": "16px",
        "lg": "28px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 8px rgba(15, 181, 196, 0.18)",
        "md": "0 8px 20px rgba(15, 181, 196, 0.20)",
        "lg": "0 16px 36px rgba(15, 181, 196, 0.22)",
        "inset-hi": "inset 0 1px 0 rgba(255,255,255,0.9)",
      },
      fontFamily: {
        "sans": ["'Segoe UI'", "'Frutiger'", "system-ui", "sans-serif"],
        "display": ["'Eurostile'", "'Segoe UI'", "sans-serif"],
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
        "entrance": "cubic-bezier(0, 0, 0, 1)",
        "exit": "cubic-bezier(0.3, 0, 1, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --glossy-fill: linear-gradient(180deg, var(--color-glossy-hi) 0%, var(--color-surface) 45%, var(--color-surface-strong) 100%);
//   --aqua-gradient: linear-gradient(135deg, var(--color-primary), var(--color-accent));
