// WPA / Vintage Poster — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#e8d9b5",
        "surface": "#f0e6c8",
        "surface-strong": "#dcc98f",
        "border": "#1c3d5a",
        "text": "#1c1c1c",
        "text-muted": "#4a3f2c",
        "primary": "#c1502e",
        "accent": "#1c3d5a",
        "mustard": "#d69c2f",
      },
      borderRadius: {
        "sm": "0px",
        "md": "0px",
        "lg": "0px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "2px 2px 0 var(--color-border)",
        "md": "4px 4px 0 var(--color-border)",
        "lg": "6px 6px 0 var(--color-border)",
      },
      fontFamily: {
        "sans": ["'Futura'", "'Century Gothic'", "sans-serif"],
        "display": ["'Bebas Neue'", "'Futura'", "sans-serif"],
        "mono": ["ui-monospace", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem",
        "sm": "0.9rem",
        "base": "1rem",
        "lg": "1.2rem",
        "xl": "1.6rem",
        "2xl": "2.2rem",
        "3xl": "3rem",
        "4xl": "4rem",
        "5xl": "5.5rem",
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
//   --sky-gradient: linear-gradient(180deg, var(--color-mustard) 0%, var(--color-primary) 55%, var(--color-accent) 100%);
//   --ink-band: 6px solid var(--color-border);
//   --sun-rays: repeating-conic-gradient(from 0deg, var(--color-mustard) 0deg 4deg, transparent 4deg 20deg);
