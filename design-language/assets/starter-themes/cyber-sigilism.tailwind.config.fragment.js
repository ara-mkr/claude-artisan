// Cyber Sigilism — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0e0e12",
        "surface": "#17171d",
        "surface-2": "#282832",
        "text": "#ececf2",
        "text-muted": "#aaaab8",
        "primary": "#d6d8e4",
        "accent": "#b068ff",
        "chrome": "#7d8495",
      },
      borderRadius: {
        "sm": "0",
        "md": "2px",
        "lg": "6px",
        "pill": "999px",
      },
      boxShadow: {
        "metal": "0 0 0 1px #7d8495, 0 12px 30px rgba(0,0,0,.45)",
        "sigil": "0 0 22px rgba(176,104,255,.3)",
      },
      fontFamily: {
        "sans": ["Arial", "Helvetica", "sans-serif"],
        "display": ["Georgia", "serif"],
        "mono": ["ui-monospace", "monospace"],
      },
      fontSize: {
        "xs": ".75rem",
        "sm": ".875rem",
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
        "standard": "cubic-bezier(.22,.61,.36,1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --sigil-grid: conic-gradient(from 45deg, transparent 0 24%, rgba(214,216,228,.22) 25% 26%, transparent 27% 49%, rgba(176,104,255,.28) 50% 51%, transparent 52% 74%, rgba(214,216,228,.22) 75% 76%, transparent 77%);
