// Formicapunk — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#170f2e",
        "surface": "#241a44",
        "surface-strong": "#2e2158",
        "border": "#5b4b96",
        "text": "#f4eefe",
        "text-muted": "#b6a7dd",
        "primary": "#ff5fa2",
        "accent": "#2fe6d8",
        "chrome": "#c9c3e0",
      },
      borderRadius: {
        "sm": "2px",
        "md": "4px",
        "lg": "8px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 0 0 1px rgba(255,95,162,0.3), 0 2px 8px rgba(0,0,0,0.4)",
        "md": "0 0 18px rgba(255,95,162,0.35), 0 8px 24px rgba(0,0,0,0.5)",
        "lg": "0 0 32px rgba(47,230,216,0.3), 0 16px 40px rgba(0,0,0,0.55)",
      },
      fontFamily: {
        "sans": ["'Eurostile'", "'Avenir Next'", "'Century Gothic'", "sans-serif"],
        "display": ["'Eurostile Extended'", "'Bank Gothic'", "'Arial Narrow'", "sans-serif"],
        "mono": ["'Space Mono'", "ui-monospace", "monospace"],
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
        "bg-image": "linear-gradient(180deg, #170f2e 0%, #291a4e 55%, #170f2e 100%)",
        "neon-edge": "linear-gradient(90deg, var(--color-primary), var(--color-accent))",
      },
    },
  },
};

