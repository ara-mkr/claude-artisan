// Low Poly — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#1b2a4a",
        "surface": "#24365c",
        "surface-strong": "#2f4570",
        "border": "#3c5480",
        "text": "#eef3fb",
        "text-muted": "#aebedc",
        "primary": "#ff7f5c",
        "accent": "#46e0c8",
        "facet-dark": "#16223c",
      },
      borderRadius: {
        "sm": "2px",
        "md": "4px",
        "lg": "6px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 6px rgba(0,0,0,0.35)",
        "md": "0 8px 20px rgba(0,0,0,0.4)",
        "lg": "0 18px 40px rgba(0,0,0,0.45)",
      },
      fontFamily: {
        "sans": ["'Space Grotesk'", "'Rajdhani'", "system-ui", "sans-serif"],
        "display": ["'Space Grotesk'", "system-ui", "sans-serif"],
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
        "standard": "cubic-bezier(0.2, 0, 0, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --facet-corner: polygon(0 0, 100% 0, 100% 100%, 22% 100%, 0 70%);
