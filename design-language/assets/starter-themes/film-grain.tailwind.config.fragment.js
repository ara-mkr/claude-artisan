// Film Grain / Noise — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#211d1a",
        "surface": "#2b2622",
        "surface-strong": "#35302a",
        "border": "#4a423a",
        "text": "#f2ece2",
        "text-muted": "#bdb2a3",
        "primary": "#d98c4a",
        "accent": "#7fa08f",
      },
      borderRadius: {
        "sm": "4px",
        "md": "8px",
        "lg": "14px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 6px rgba(0,0,0,0.35)",
        "md": "0 8px 20px rgba(0,0,0,0.42)",
        "lg": "0 18px 40px rgba(0,0,0,0.5)",
      },
      fontFamily: {
        "sans": ["'Suisse Int\'l'", "'Helvetica Neue'", "Arial", "sans-serif"],
        "display": ["'Canela'", "'Georgia'", "serif"],
        "mono": ["'IBM Plex Mono'", "ui-monospace", "monospace"],
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
        "grain-image": "url(\"data:image/svg+xml",
        "grain-opacity": "0.16",
      },
    },
  },
};

