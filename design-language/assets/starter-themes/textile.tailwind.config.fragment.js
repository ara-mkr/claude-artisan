// Textile / Knit / Embroidery — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#efe6d8",
        "surface": "#f7f1e6",
        "surface-strong": "#ece0cd",
        "border": "#c9b28c",
        "text": "#3a2a20",
        "text-muted": "#6b5744",
        "primary": "#b5502f",
        "accent": "#4a6b4d",
        "thread": "#d9c299",
      },
      borderRadius: {
        "sm": "6px",
        "md": "10px",
        "lg": "16px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 3px rgba(58,42,32,0.12)",
        "md": "0 4px 12px rgba(58,42,32,0.16)",
        "lg": "0 10px 28px rgba(58,42,32,0.20)",
      },
      fontFamily: {
        "sans": ["'Quicksand'", "'Nunito'", "system-ui", "sans-serif"],
        "display": ["'Fraunces'", "'Georgia'", "serif"],
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
//   --stitch-border: repeating-linear-gradient(90deg, var(--color-thread) 0 8px, transparent 8px 16px);
//   --weave-fill: repeating-linear-gradient(45deg, rgba(181,80,47,0.05) 0 6px, rgba(74,107,77,0.05) 6px 12px);
//   --stitch-dash: 2px dashed var(--color-thread);
