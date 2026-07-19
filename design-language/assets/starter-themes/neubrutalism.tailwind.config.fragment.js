// Neubrutalism — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#fef6e4",
        "surface": "#ffffff",
        "surface-2": "#fde68a",
        "text": "#0a0a0a",
        "text-muted": "#3d3d3d",
        "primary": "#ffde00",
        "accent": "#ff5c00",
        "blue": "#3b82f6",
        "green": "#22c55e",
        "pink": "#ff5eb3",
        "border": "#0a0a0a",
      },
      borderRadius: {
        "sm": "0px",
        "md": "6px",
        "lg": "12px",
        "pill": "999px",
      },
      boxShadow: {
        "hard-sm": "3px 3px 0 #0a0a0a",
        "hard": "6px 6px 0 #0a0a0a",
        "hard-lg": "10px 10px 0 #0a0a0a",
        "hard-primary": "6px 6px 0 #ff5c00",
      },
      fontFamily: {
        "sans": ["'Space Grotesk'", "'Archivo'", "system-ui", "sans-serif"],
        "display": ["'Archivo Black'", "'Space Grotesk'", "sans-serif"],
        "mono": ["'Space Mono'", "monospace"],
      },
      fontSize: {
        "xs": "0.8rem",
        "sm": "0.95rem",
        "base": "1.05rem",
        "lg": "1.25rem",
        "xl": "1.6rem",
        "2xl": "2.1rem",
        "3xl": "2.8rem",
        "4xl": "3.8rem",
        "5xl": "5rem",
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
        "snap": "steps(1, end)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --border: 3px solid #0a0a0a;
//   --border-thick: 4px solid #0a0a0a;
