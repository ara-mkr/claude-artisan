// Streamline Moderne — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f2efe9",
        "surface": "#ffffff",
        "surface-strong": "#e6e2d8",
        "border": "#b9c1c6",
        "text": "#1c2226",
        "text-muted": "#52605f",
        "primary": "#16414d",
        "accent": "#c9a34b",
        "chrome": "#9aa7ac",
      },
      borderRadius: {
        "sm": "10px",
        "md": "20px",
        "lg": "40px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 5px rgba(28,34,38,0.14)",
        "md": "0 6px 16px rgba(28,34,38,0.16)",
        "lg": "0 16px 36px rgba(28,34,38,0.2)",
      },
      fontFamily: {
        "sans": ["'Century Gothic'", "'Poppins'", "system-ui", "sans-serif"],
        "display": ["'Broadway'", "'Bebas Neue'", "'Poppins'", "system-ui", "sans-serif"],
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
        "standard": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --speed-lines: repeating-linear-gradient(180deg, var(--color-chrome) 0px, var(--color-chrome) 2px, transparent 2px, transparent 7px);
//   --chrome-band: linear-gradient(180deg, #fdfdfd, var(--color-chrome) 50%, #7c898d);
