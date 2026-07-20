// Linear Style — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#08090a",
        "surface": "#101113",
        "surface-strong": "#17181b",
        "border": "rgba(255,255,255,0.09)",
        "text": "#f7f8f8",
        "text-muted": "#8a8f98",
        "primary": "#5e6ad2",
        "accent": "#4ea7fc",
        "glow": "rgba(94,106,210,0.5)",
      },
      borderRadius: {
        "sm": "6px",
        "md": "8px",
        "lg": "12px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 2px rgba(0,0,0,0.4)",
        "md": "0 4px 16px rgba(0,0,0,0.5)",
        "lg": "0 16px 40px rgba(0,0,0,0.6)",
      },
      fontFamily: {
        "sans": ["'Inter'", "system-ui", "-apple-system", "sans-serif"],
        "display": ["'Inter'", "system-ui", "sans-serif"],
        "mono": ["'Berkeley Mono'", "ui-monospace", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem",
        "sm": "0.8125rem",
        "base": "0.9375rem",
        "lg": "1.0625rem",
        "xl": "1.25rem",
        "2xl": "1.625rem",
        "3xl": "2.125rem",
        "4xl": "2.75rem",
        "5xl": "3.75rem",
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
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --bg-image: radial-gradient(60% 45% at 50% -5%, rgba(94,106,210,0.18) 0%, transparent 60%), var(--color-bg);
