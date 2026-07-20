// Angelcore — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#fdf9f0",
        "surface": "#ffffff",
        "surface-strong": "#fbf1dc",
        "border": "#e8d5a8",
        "text": "#4a3f2a",
        "text-muted": "#7a6849",
        "primary": "#c9a24b",
        "accent": "#f2c98a",
        "halo": "#fff4d6",
      },
      borderRadius: {
        "sm": "10px",
        "md": "18px",
        "lg": "28px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 12px rgba(201,162,75,0.15)",
        "md": "0 10px 30px rgba(201,162,75,0.2)",
        "lg": "0 24px 60px rgba(201,162,75,0.25)",
        "halo": "0 0 0 8px rgba(242,201,138,0.22), 0 0 40px rgba(242,201,138,0.35)",
      },
      fontFamily: {
        "sans": ["'Cormorant Garamond'", "'Georgia'", "serif"],
        "display": ["'Cormorant Garamond'", "'Playfair Display'", "serif"],
        "mono": ["ui-monospace", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem",
        "sm": "0.9rem",
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
        "standard": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --bg-image: radial-gradient(60% 40% at 50% 0%, #fff4d6 0%, transparent 65%), var(--color-bg);
//   --halo-ring: radial-gradient(circle, rgba(242,201,138,0.5) 0%, rgba(242,201,138,0) 70%);
