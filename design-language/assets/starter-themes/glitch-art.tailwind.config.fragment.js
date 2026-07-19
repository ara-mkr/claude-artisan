// Glitch Art — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#050505",
        "surface": "#0d0d0d",
        "text": "#f2f2f2",
        "text-muted": "#8a8a8a",
        "primary": "#ff003c",
        "accent": "#00f0ff",
        "green": "#00ff5f",
        "border": "#ff003c",
      },
      borderRadius: {
        "sm": "0px",
        "md": "0px",
        "lg": "0px",
        "pill": "0px",
      },
      boxShadow: {
        "rgb-split": "2px 0 #ff003c, -2px 0 #00f0ff",
      },
      fontFamily: {
        "sans": ["'Space Mono'", "'Courier New'", "monospace"],
        "display": ["'Major Mono Display'", "monospace"],
        "mono": ["'Space Mono'", "monospace"],
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
        "standard": "steps(2, jump-none)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --chromatic: drop-shadow(2px 0 #ff003c) drop-shadow(-2px 0 #00f0ff);
//   --noise: repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 2px);
