// Acid Graphics / Acid Design — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0a0510",
        "surface": "#1a0f2e",
        "surface-strong": "#2a1a45",
        "border": "#ccff00",
        "text": "#eafff0",
        "text-muted": "rgba(234, 255, 240, 0.68)",
        "primary": "#ccff00",
        "accent": "#ff2ee0",
        "toxic-green": "#7cff2e",
      },
      borderRadius: {
        "sm": "4px",
        "md": "10px",
        "lg": "18px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 10px rgba(204, 255, 0, 0.18)",
        "md": "0 8px 28px rgba(255, 46, 224, 0.25), 0 0 0 1px rgba(204,255,0,0.15)",
        "lg": "0 18px 48px rgba(124, 255, 46, 0.22), 0 0 0 1px rgba(255,46,224,0.2)",
      },
      fontFamily: {
        "sans": ["'Space Grotesk'", "'Helvetica Neue'", "system-ui", "sans-serif"],
        "display": ["'Chrome'", "'Arial Black'", "'Space Grotesk'", "sans-serif"],
        "mono": ["'JetBrains Mono'", "ui-monospace", "monospace"],
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
        "standard": "cubic-bezier(0.6, 0, 0.2, 1.4)",
        "entrance": "cubic-bezier(0.2, 1.4, 0.4, 1)",
        "exit": "cubic-bezier(0.6, 0, 1, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --chrome-gradient: linear-gradient(120deg, #eafff0 0%, #ccff00 22%, #ff2ee0 50%, #7cff2e 74%, #eafff0 100%);
//   --bg-image: radial-gradient(140% 100% at 10% -10%, #2a1a45 0%, #0a0510 55%, #150826 100%);
//   --warp: skewY(-1.4deg) rotate(-0.6deg);
