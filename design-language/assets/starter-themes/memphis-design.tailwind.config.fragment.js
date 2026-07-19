// Memphis Design — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#fdf6e3",
        "surface": "#ffffff",
        "text": "#1a1a2e",
        "text-muted": "#575780",
        "primary": "#ff2e63",
        "accent": "#08d9d6",
        "yellow": "#ffde22",
        "purple": "#8a4fff",
        "black": "#252a34",
      },
      borderRadius: {
        "sm": "0px",
        "md": "8px",
        "lg": "20px",
        "pill": "999px",
      },
      boxShadow: {
        "hard": "6px 6px 0 #252a34",
      },
      fontFamily: {
        "sans": ["'Poppins'", "'Futura'", "system-ui", "sans-serif"],
        "display": ["'Righteous'", "'Poppins'", "sans-serif"],
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
//   --squiggle: #ff2e63;
//   --confetti: #08d9d6 #ffde22 #8a4fff;
