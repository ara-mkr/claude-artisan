// Liminal Spaces — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#d9cf9a",
        "surface": "#e7ddab",
        "surface-strong": "#cfc188",
        "border": "#b0a267",
        "text": "#24211a",
        "text-muted": "#565034",
        "primary": "#8a6a3d",
        "accent": "#5f6b3f",
        "fluoro": "#eef0a8",
      },
      borderRadius: {
        "sm": "0px",
        "md": "2px",
        "lg": "2px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 4px rgba(20,18,10,0.30)",
        "md": "0 0 26px rgba(238,240,168,0.35), 0 2px 8px rgba(20,18,10,0.35)",
        "lg": "0 0 40px rgba(238,240,168,0.4), 0 6px 18px rgba(20,18,10,0.4)",
      },
      fontFamily: {
        "sans": ["'Arial'", "'Helvetica Neue'", "system-ui", "sans-serif"],
        "display": ["'Arial'", "system-ui", "sans-serif"],
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
        "standard": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --vignette: radial-gradient(120% 90% at 50% 30%, transparent 45%, rgba(10,9,4,0.30) 100%);
//   --hum-line: repeating-linear-gradient(180deg, rgba(238,240,168,0.05) 0px, transparent 2px, transparent 5px);
