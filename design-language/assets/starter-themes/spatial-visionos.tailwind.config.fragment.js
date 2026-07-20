// Spatial / visionOS — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#05070c",
        "bg-gradient-a": "#0a1220",
        "bg-gradient-b": "#141b2e",
        "surface": "rgba(255, 255, 255, 0.08)",
        "surface-strong": "rgba(255, 255, 255, 0.14)",
        "border": "rgba(255, 255, 255, 0.16)",
        "text": "#f5f7fa",
        "text-muted": "rgba(245, 247, 250, 0.70)",
        "primary": "#4da3ff",
        "accent": "#b98cff",
        "glow": "rgba(77, 163, 255, 0.35)",
      },
      borderRadius: {
        "sm": "14px",
        "md": "22px",
        "lg": "32px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 6px 18px rgba(0,0,0,0.35)",
        "md": "0 16px 40px rgba(0,0,0,0.45)",
        "lg": "0 32px 80px rgba(0,0,0,0.55)",
        "inset-hi": "inset 0 1px 0 rgba(255,255,255,0.28)",
      },
      backdropBlur: {
        "backdrop": "24px",
        "backdrop-strong": "40px",
      },
      fontFamily: {
        "sans": ["'SF Pro Display'", "'Inter'", "system-ui", "-apple-system", "sans-serif"],
        "display": ["'SF Pro Display'", "system-ui", "sans-serif"],
        "mono": ["'SF Mono'", "ui-monospace", "monospace"],
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
        "standard": "cubic-bezier(0.22, 1, 0.36, 1)",
        "entrance": "cubic-bezier(0, 0, 0, 1)",
        "exit": "cubic-bezier(0.4, 0, 1, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --bg-image: radial-gradient(90% 70% at 30% 0%, var(--color-bg-gradient-b) 0%, var(--color-bg-gradient-a) 45%, var(--color-bg) 100%);
//   --glass-fill: linear-gradient(160deg, rgba(255,255,255,0.14), rgba(255,255,255,0.03));
//   --glass-border: 1px solid var(--color-border);
