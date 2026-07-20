// Punk Zine / Cut-and-Paste — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#efefe8",
        "surface": "#ffffff",
        "surface-strong": "#f5f2e6",
        "border": "#0d0d0d",
        "text": "#0d0d0d",
        "text-muted": "#3d3d3a",
        "primary": "#e60023",
        "accent": "#f5d000",
        "tape": "rgba(245, 208, 0, 0.55)",
      },
      borderRadius: {
        "sm": "0px",
        "md": "0px",
        "lg": "0px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "3px 3px 0 #0d0d0d",
        "md": "5px 5px 0 #0d0d0d",
        "lg": "8px 8px 0 #0d0d0d",
      },
      fontFamily: {
        "sans": ["Arial", "'Helvetica Neue'", "sans-serif"],
        "display": ["'Times New Roman'", "Georgia", "serif"],
        "mono": ["'Courier New'", "ui-monospace", "monospace"],
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
        "standard": "steps(3, end)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --xerox-noise: repeating-linear-gradient(0deg, rgba(13,13,13,0.05) 0px, transparent 1px, transparent 3px), repeating-linear-gradient(90deg, rgba(13,13,13,0.03) 0px, transparent 1px, transparent 4px);
//   --tape-strip: linear-gradient(var(--color-tape), var(--color-tape));
