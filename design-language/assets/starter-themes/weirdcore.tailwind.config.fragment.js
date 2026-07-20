// Weirdcore — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#d8d3c4",
        "surface": "#eae5d6",
        "surface-strong": "#f4f0e4",
        "border": "#6b6558",
        "text": "#201f1a",
        "text-muted": "#55523f",
        "primary": "#c23b3b",
        "accent": "#3b6fc2",
        "sickly": "#a8b23f",
      },
      borderRadius: {
        "sm": "2px",
        "md": "2px",
        "lg": "2px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 0 rgba(0,0,0,0.3)",
        "md": "0 3px 0 rgba(0,0,0,0.3)",
        "lg": "0 6px 10px rgba(0,0,0,0.35)",
      },
      fontFamily: {
        "sans": ["'Times New Roman'", "'Georgia'", "serif"],
        "display": ["'Impact'", "'Arial Narrow'", "sans-serif"],
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
        "standard": "cubic-bezier(0.6, 0, 0.4, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --grain-filter: contrast(1.05) saturate(0.75) brightness(0.98);
//   --tilt-off: rotate(-0.6deg);
//   --arrow-overlay: "→";
