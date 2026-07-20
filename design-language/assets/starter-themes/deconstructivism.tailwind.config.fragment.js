// Deconstructivism (Graphic) — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f0efe9",
        "surface": "#ffffff",
        "surface-strong": "#e6e3d8",
        "border": "#16151a",
        "text": "#16151a",
        "text-muted": "#4a4854",
        "primary": "#ff2d1f",
        "accent": "#1c3fff",
      },
      borderRadius: {
        "sm": "0px",
        "md": "0px",
        "lg": "0px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "3px 3px 0 var(--color-border)",
        "md": "6px 6px 0 var(--color-border)",
        "lg": "10px 10px 0 var(--color-border)",
      },
      fontFamily: {
        "sans": ["'Franklin Gothic'", "'Helvetica Neue'", "system-ui", "sans-serif"],
        "display": ["'Univers'", "'Franklin Gothic'", "system-ui", "sans-serif"],
        "mono": ["'OCR A Std'", "ui-monospace", "monospace"],
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
//   --tilt-a: -1.4deg;
//   --tilt-b: 1.1deg;
//   --collide-offset: -8px;
