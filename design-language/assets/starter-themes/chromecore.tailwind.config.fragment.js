// Chromecore — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#e8eaf0",
        "surface": "#f4f5f9",
        "surface-strong": "#ffffff",
        "border": "#c3c8d6",
        "text": "#1c1b2e",
        "text-muted": "#4a4866",
        "primary": "#a78bfa",
        "accent": "#f472b6",
        "mint": "#5eead4",
      },
      borderRadius: {
        "sm": "16px",
        "md": "28px",
        "lg": "44px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 8px rgba(28,27,46,0.1)",
        "md": "0 10px 26px rgba(167,139,250,0.22)",
        "lg": "0 20px 48px rgba(244,114,182,0.24)",
      },
      fontFamily: {
        "sans": ["'Segoe UI'", "'Helvetica Neue'", "system-ui", "sans-serif"],
        "display": ["'Segoe UI'", "'Trebuchet MS'", "system-ui", "sans-serif"],
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
//   --iridescent: linear-gradient(120deg, #a78bfa 0%, #f472b6 33%, #5eead4 66%, #a78bfa 100%);
//   --mercury-sheen: linear-gradient(160deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.2) 35%, rgba(255,255,255,0.7) 60%, rgba(255,255,255,0.1) 100%);
