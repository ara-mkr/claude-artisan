// Barbiecore — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#ff2e93",
        "surface": "#ffffff",
        "surface-strong": "#ffd6ec",
        "border": "#ffffff",
        "text": "#3a0021",
        "text-muted": "#7a0a45",
        "primary": "#ff0080",
        "accent": "#ffe600",
      },
      borderRadius: {
        "sm": "12px",
        "md": "20px",
        "lg": "32px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 4px 10px rgba(122,10,69,0.25)",
        "md": "0 10px 26px rgba(122,10,69,0.3)",
        "lg": "0 20px 46px rgba(122,10,69,0.34)",
      },
      fontFamily: {
        "sans": ["'Poppins'", "'Baloo 2'", "system-ui", "sans-serif"],
        "display": ["'Baloo 2'", "'Poppins'", "system-ui", "sans-serif"],
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
//   --gloss-shine: linear-gradient(115deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 35%);
