// Glassmorphism — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0f172a",
        "bg-gradient-a": "#1e3a8a",
        "bg-gradient-b": "#7c3aed",
        "surface": "rgba(255, 255, 255, 0.10)",
        "surface-strong": "rgba(255, 255, 255, 0.18)",
        "border": "rgba(255, 255, 255, 0.22)",
        "text": "#f8fafc",
        "text-muted": "rgba(248, 250, 252, 0.72)",
        "primary": "#38bdf8",
        "accent": "#e879f9",
      },
      borderRadius: {
        "sm": "10px",
        "md": "16px",
        "lg": "24px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 4px 16px rgba(0,0,0,0.18)",
        "md": "0 8px 32px rgba(0,0,0,0.28)",
        "lg": "0 16px 48px rgba(0,0,0,0.36)",
        "inset-hi": "inset 0 1px 0 rgba(255,255,255,0.35)",
      },
      backdropBlur: {
        "backdrop": "16px",
        "backdrop-strong": "28px",
      },
      fontFamily: {
        "sans": ["'Inter'", "system-ui", "-apple-system", "sans-serif"],
        "display": ["'Inter'", "system-ui", "sans-serif"],
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
        "standard": "cubic-bezier(0.2, 0, 0, 1)",
        "entrance": "cubic-bezier(0, 0, 0, 1)",
        "exit": "cubic-bezier(0.3, 0, 1, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --bg-image: radial-gradient(120% 120% at 0% 0%, #1e3a8a 0%, #0f172a 55%, #7c3aed 120%);
//   --glass-fill: linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.06));
//   --glass-border: 1px solid rgba(255,255,255,0.22);
