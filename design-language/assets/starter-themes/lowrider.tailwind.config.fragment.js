// Lowrider — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#25071c",
        "surface": "#3c0d30",
        "surface-2": "#64143e",
        "text": "#fff1d6",
        "text-muted": "#e2b8c8",
        "primary": "#f05a9f",
        "accent": "#48d7df",
        "gold": "#e6bc55",
      },
      borderRadius: {
        "sm": "2px",
        "md": "8px",
        "lg": "18px",
        "pill": "999px",
      },
      boxShadow: {
        "candy": "0 2px 0 rgba(255,255,255,.35) inset, 0 12px 28px rgba(0,0,0,.35)",
        "chrome": "0 0 0 1px #e6bc55, 0 0 0 4px #3c0d30, 0 0 0 5px #48d7df",
      },
      fontFamily: {
        "sans": ["Arial", "Helvetica", "sans-serif"],
        "display": ["Georgia", "serif"],
        "mono": ["ui-monospace", "monospace"],
      },
      fontSize: {
        "xs": ".75rem",
        "sm": ".875rem",
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
        "standard": "cubic-bezier(.2,.8,.2,1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --candy-gradient: linear-gradient(135deg, #f05a9f, #64143e 52%, #48d7df);
