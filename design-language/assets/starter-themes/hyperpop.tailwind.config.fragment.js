// Hyperpop Visuals — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0d0018",
        "surface": "#1a0330",
        "surface-strong": "#290548",
        "border": "#ff2fd0",
        "text": "#fbf3ff",
        "text-muted": "#d6a9f0",
        "primary": "#ff2fd0",
        "accent": "#2ff3ff",
        "lime": "#c6ff2f",
      },
      borderRadius: {
        "sm": "4px",
        "md": "10px",
        "lg": "18px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 0 0 2px var(--color-primary), 0 0 14px rgba(255,47,208,0.5)",
        "md": "-2px 0 0 var(--color-accent), 2px 0 0 var(--color-primary), 0 8px 24px rgba(255,47,208,0.35)",
        "lg": "-3px 0 0 var(--color-accent), 3px 0 0 var(--color-primary), 0 16px 42px rgba(255,47,208,0.4)",
      },
      fontFamily: {
        "sans": ["'Space Grotesk'", "'Arial'", "sans-serif"],
        "display": ["'Rubik'", "'Chrome Bold'", "'Arial Black'", "sans-serif"],
        "mono": ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem",
        "sm": "0.875rem",
        "base": "1rem",
        "lg": "1.125rem",
        "xl": "1.4rem",
        "2xl": "1.9rem",
        "3xl": "2.6rem",
        "4xl": "3.6rem",
        "5xl": "5.2rem",
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
        "standard": "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
        "candy-gradient": "linear-gradient(120deg, var(--color-primary), var(--color-accent) 50%, var(--color-lime))",
        "glitch-text-shadow": "-1px 0 var(--color-accent), 1px 0 var(--color-primary)",
      },
    },
  },
};

