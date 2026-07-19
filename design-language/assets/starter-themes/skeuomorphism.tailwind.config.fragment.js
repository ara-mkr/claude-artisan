// Skeuomorphism — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#d9c7a8",
        "surface": "#f3ead2",
        "surface-2": "#e8dcc0",
        "text": "#2d2416",
        "text-muted": "#6b5d43",
        "primary": "#3a7d44",
        "accent": "#b23b2e",
        "stitch": "#8a7856",
      },
      borderRadius: {
        "sm": "6px",
        "md": "10px",
        "lg": "14px",
        "pill": "999px",
      },
      boxShadow: {
        "raised": "0 1px 0 rgba(255,255,255,0.6) inset, 0 2px 4px rgba(0,0,0,0.35), 0 6px 12px rgba(0,0,0,0.25)",
        "pressed": "inset 0 2px 6px rgba(0,0,0,0.45)",
        "bevel": "inset 0 1px 0 rgba(255,255,255,0.55), inset 0 -2px 3px rgba(0,0,0,0.25)",
      },
      fontFamily: {
        "sans": ["'Helvetica Neue'", "'Lucida Grande'", "system-ui", "sans-serif"],
        "display": ["Georgia", "'Times New Roman'", "serif"],
        "mono": ["'Courier New'", "monospace"],
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
//   --leather: linear-gradient(#f3ead2, #e2d3b0);
//   --gloss: linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.05) 50%, rgba(0,0,0,0.06) 51%, rgba(0,0,0,0.14) 100%);
