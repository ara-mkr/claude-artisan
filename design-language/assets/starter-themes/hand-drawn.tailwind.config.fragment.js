// Hand-Drawn / Sketch — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#fffdf7",
        "surface": "#ffffff",
        "surface-strong": "#fff5e0",
        "border": "#2b2b2b",
        "text": "#2b2b2b",
        "text-muted": "#5c5c54",
        "primary": "#ff6b4a",
        "accent": "#3b7dd8",
        "marker": "#ffd93b",
      },
      borderRadius: {
        "sm": "6px 9px 7px 10px",
        "md": "12px 16px 13px 18px",
        "lg": "22px 28px 24px 30px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "2px 3px 0 rgba(43,43,43,0.5)",
        "md": "3px 5px 0 rgba(43,43,43,0.4)",
        "lg": "5px 8px 0 rgba(43,43,43,0.3)",
      },
      fontFamily: {
        "sans": ["'Patrick Hand'", "'Comic Neue'", "'Segoe Print'", "sans-serif"],
        "display": ["'Caveat'", "'Kalam'", "'Patrick Hand'", "cursive"],
        "mono": ["'Courier New'", "ui-monospace", "monospace"],
      },
      fontSize: {
        "xs": "0.8rem",
        "sm": "0.95rem",
        "base": "1.05rem",
        "lg": "1.2rem",
        "xl": "1.5rem",
        "2xl": "1.9rem",
        "3xl": "2.5rem",
        "4xl": "3.4rem",
        "5xl": "4.6rem",
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
        "standard": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "sketch-border": "2px solid var(--color-border)",
        "sketch-wobble": "2px 2px 0 -1px var(--color-bg), 2px 2px 0 0 var(--color-border)",
        "marker-swipe": "linear-gradient(180deg, transparent 55%, var(--color-marker) 55%, var(--color-marker) 85%, transparent 85%)",
      },
    },
  },
};

