// Futurism (Italian) — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#efe6d8",
        "surface": "#f7f1e6",
        "surface-strong": "#e9ddc7",
        "border": "#171512",
        "text": "#171512",
        "text-muted": "#4c4640",
        "primary": "#c81d1d",
        "accent": "#1c1c8a",
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
        "sans": ["'Futura'", "'Eurostile'", "Arial", "sans-serif"],
        "display": ["'Bifur'", "'Anton'", "'Impact'", "sans-serif"],
        "mono": ["ui-monospace", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem",
        "sm": "0.875rem",
        "base": "1rem",
        "lg": "1.125rem",
        "xl": "1.5rem",
        "2xl": "2.1rem",
        "3xl": "2.9rem",
        "4xl": "4rem",
        "5xl": "5.4rem",
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
        "standard": "cubic-bezier(0.7, 0, 0.2, 1)",
        "tilt-heading": "rotate(-2.5deg)",
        "tilt-badge": "rotate(3deg)",
        "speed-lines": "repeating-linear-gradient(115deg, rgba(23,21,18,0.05) 0 2px, transparent 2px 22px)",
      },
    },
  },
};

