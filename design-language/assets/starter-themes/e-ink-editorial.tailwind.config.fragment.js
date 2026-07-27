// E-Ink Editorial — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#e7e5dc",
        "surface": "#f2f0e7",
        "surface-2": "#d5d3ca",
        "text": "#22221f",
        "text-muted": "#62615b",
        "primary": "#22221f",
        "accent": "#59574f",
        "inverted": "#f2f0e7",
      },
      borderRadius: {
        "sm": "0",
        "md": "0",
        "lg": "0",
        "pill": "999px",
      },
      boxShadow: {
        "line": "0 1px 0 #22221f",
        "none": "none",
      },
      fontFamily: {
        "sans": ["Arial", "Helvetica", "sans-serif"],
        "display": ["Georgia", "serif"],
        "mono": ["'Courier New'", "monospace"],
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
//   --dither: repeating-linear-gradient(45deg, rgba(34,34,31,.045) 0 1px, transparent 1px 4px);
