// Samsung One UI — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f5f6f8",
        "surface": "#ffffff",
        "surface-strong": "#eef1f6",
        "border": "#e1e5ec",
        "text": "#1c1c1e",
        "text-muted": "#6b7079",
        "primary": "#1259e3",
        "accent": "#0091ff",
      },
      borderRadius: {
        "sm": "14px",
        "md": "20px",
        "lg": "28px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 3px rgba(28, 28, 30, 0.06)",
        "md": "0 6px 18px rgba(28, 28, 30, 0.08)",
        "lg": "0 16px 36px rgba(28, 28, 30, 0.1)",
      },
      fontFamily: {
        "sans": ["'SamsungOne'", "'SF Pro'", "-apple-system", "system-ui", "sans-serif"],
        "display": ["'SamsungOne'", "-apple-system", "system-ui", "sans-serif"],
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
        "standard": "cubic-bezier(0.25, 0.1, 0.25, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --reach-zone-radius: 32px;
//   --bottom-safe-pad: 28px;
