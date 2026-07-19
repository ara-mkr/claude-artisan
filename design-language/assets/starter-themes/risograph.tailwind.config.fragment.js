// Risograph — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f3ecde",
        "surface": "#f3ecde",
        "text": "#1a1a1a",
        "text-muted": "#444444",
        "primary": "#ff5b45",
        "accent": "#0078bf",
        "yellow": "#ffd200",
        "green": "#00a95c",
        "pink": "#ff48b0",
      },
      borderRadius: {
        "sm": "0px",
        "md": "2px",
        "lg": "4px",
        "pill": "999px",
      },
      boxShadow: {
        "none": "none",
      },
      fontFamily: {
        "sans": ["'Space Grotesk'", "'Archivo'", "system-ui", "sans-serif"],
        "display": ["'Archivo Black'", "sans-serif"],
        "mono": ["'Space Mono'", "monospace"],
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
        "standard": "linear",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --grain: url('data:image/svg+xml;...noise');
//   --halftone: radial-gradient(#ff5b45 30%, transparent 31%) 0 0 / 6px 6px;
//   --multiply: multiply;
