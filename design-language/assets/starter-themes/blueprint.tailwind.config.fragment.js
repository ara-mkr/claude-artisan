// Blueprint / Technical Drawing — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0d3b66",
        "surface": "#0f4a7d",
        "surface-strong": "#135a96",
        "border": "#bcd9f0",
        "text": "#eaf4ff",
        "text-muted": "#9fc4e6",
        "primary": "#ffffff",
        "accent": "#ffb703",
      },
      borderRadius: {
        "sm": "0px",
        "md": "0px",
        "lg": "0px",
        "pill": "2px",
      },
      boxShadow: {
        "sm": "0 1px 0 rgba(255,255,255,0.15)",
        "md": "0 2px 8px rgba(0,0,0,0.35)",
        "lg": "0 6px 18px rgba(0,0,0,0.4)",
      },
      fontFamily: {
        "sans": ["'Archivo'", "'Helvetica Neue'", "system-ui", "sans-serif"],
        "display": ["'Archivo'", "system-ui", "sans-serif"],
        "mono": ["'IBM Plex Mono'", "'Courier New'", "ui-monospace", "monospace"],
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
//   --grid-line: rgba(234,244,255,0.14);
//   --dim-line: 1px dashed var(--color-text-muted);
