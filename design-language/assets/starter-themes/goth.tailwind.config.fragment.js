// Goth / Gothic — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0a0508",
        "surface": "#150c11",
        "surface-strong": "#1f1218",
        "border": "#4a1f2e",
        "text": "#ece3e6",
        "text-muted": "#b79aa5",
        "primary": "#7a1128",
        "accent": "#9c6b3f",
        "blood": "#5c0e1f",
        "rose": "#b83a52",
      },
      borderRadius: {
        "sm": "2px",
        "md": "4px",
        "lg": "6px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 8px rgba(0,0,0,0.6)",
        "md": "0 6px 20px rgba(0,0,0,0.7)",
        "lg": "0 14px 40px rgba(0,0,0,0.8)",
        "ecclesiastic": "inset 0 0 0 1px rgba(156,107,63,0.35)",
      },
      fontFamily: {
        "sans": ["'Cormorant Garamond'", "'EB Garamond'", "Georgia", "serif"],
        "display": ["'UnifrakturCook'", "'Pirata One'", "'Cinzel Decorative'", "serif"],
        "mono": ["'Courier Prime'", "ui-monospace", "monospace"],
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
//   --border-filigree: 1px solid var(--color-border);
//   --hairline-gradient: linear-gradient(90deg, transparent, var(--color-accent) 50%, transparent);
//   --bg-image: radial-gradient(90% 60% at 50% -10%, #1f0c14 0%, #0a0508 60%);
