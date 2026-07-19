// Y2K Futurism — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#dfe9f5",
        "surface": "#ffffff",
        "text": "#1b2a4a",
        "text-muted": "#5a6b8c",
        "primary": "#8ab6ff",
        "accent": "#c0f0ff",
        "silver": "#c7d2df",
        "lilac": "#d6c7ff",
        "hotpink": "#ff8fd6",
      },
      borderRadius: {
        "sm": "8px",
        "md": "18px",
        "lg": "999px",
        "pill": "999px",
      },
      boxShadow: {
        "bubble": "inset 0 2px 6px rgba(255,255,255,0.9), 0 6px 14px rgba(120,160,220,0.4)",
        "chrome": "inset 0 1px 0 #ffffff, inset 0 -3px 6px rgba(0,0,0,0.15)",
      },
      fontFamily: {
        "sans": ["'Michroma'", "'Eurostile'", "'Arial'", "sans-serif"],
        "display": ["'Michroma'", "'Orbitron'", "sans-serif"],
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
        "standard": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --aqua-gel: linear-gradient(180deg, #ffffff 0%, #c0f0ff 45%, #8ab6ff 100%);
//   --chrome-metal: linear-gradient(180deg, #f4f8ff, #c7d2df 50%, #9fb0c4 51%, #eef3fb);
