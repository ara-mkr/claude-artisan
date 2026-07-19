// Art Deco — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0e0e12",
        "surface": "#16161d",
        "text": "#f5e9c8",
        "text-muted": "#b8a878",
        "primary": "#c8a253",
        "accent": "#1f7a6d",
        "gold": "#c8a253",
        "black": "#0e0e12",
        "cream": "#f5e9c8",
      },
      borderRadius: {
        "sm": "0px",
        "md": "2px",
        "lg": "4px",
        "pill": "0px",
      },
      boxShadow: {
        "gold": "0 0 0 1px #c8a253, 0 8px 24px rgba(0,0,0,0.5)",
      },
      fontFamily: {
        "sans": ["'Poiret One'", "'Century Gothic'", "sans-serif"],
        "display": ["'Cinzel'", "'Poiret One'", "serif"],
        "mono": ["ui-monospace", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem",
        "sm": "0.9rem",
        "base": "1rem",
        "lg": "1.3rem",
        "xl": "1.8rem",
        "2xl": "2.6rem",
        "3xl": "3.8rem",
        "4xl": "5.4rem",
        "5xl": "7.6rem",
      },
      spacing: {
        "1": "8px",
        "2": "16px",
        "3": "24px",
        "4": "32px",
        "6": "48px",
        "8": "64px",
        "12": "96px",
        "16": "128px",
      },
      transitionTimingFunction: {
        "standard": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --chevron: #c8a253;
//   --sunburst: repeating-conic-gradient(#c8a253 0deg 4deg, transparent 4deg 8deg);
