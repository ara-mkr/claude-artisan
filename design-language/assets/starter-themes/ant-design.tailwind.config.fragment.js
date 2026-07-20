// Ant Design — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f5f5f5",
        "surface": "#ffffff",
        "surface-strong": "#fafafa",
        "border": "#d9d9d9",
        "text": "#1f1f1f",
        "text-muted": "#595959",
        "primary": "#1677ff",
        "accent": "#13c2c2",
      },
      borderRadius: {
        "sm": "4px",
        "md": "6px",
        "lg": "8px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 2px rgba(0,0,0,0.05)",
        "md": "0 2px 8px rgba(0,0,0,0.08)",
        "lg": "0 6px 16px rgba(0,0,0,0.1)",
      },
      fontFamily: {
        "sans": ["-apple-system", "'Segoe UI'", "'PingFang SC'", "'Microsoft YaHei'", "sans-serif"],
        "display": ["-apple-system", "'Segoe UI'", "sans-serif"],
        "mono": ["'SFMono-Regular'", "Consolas", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem",
        "sm": "0.8125rem",
        "base": "0.875rem",
        "lg": "1rem",
        "xl": "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
        "5xl": "3.25rem",
      },
      spacing: {
        "1": "4px",
        "2": "8px",
        "3": "12px",
        "4": "16px",
        "6": "20px",
        "8": "24px",
        "12": "32px",
        "16": "48px",
        "24": "64px",
      },
      transitionTimingFunction: {
        "standard": "cubic-bezier(0.645, 0.045, 0.355, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --focus-ring: 0 0 0 3px rgba(22,119,255,0.16);
