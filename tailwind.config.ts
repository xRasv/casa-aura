import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    screens: {
      xs: "380px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: "#26352C",
        "on-primary": "#FBF6EC",
        secondary: "#A55338",
        "on-secondary": "#FFF9F0",
        tertiary: "#8B765F",
        neutral: "#F7F0E6",
        surface: "#FFFAF3",
        "surface-muted": "#E9DDD0",
        "surface-strong": "#D6C4B2",
        "clay-soft": "#C98B69",
        "olive-soft": "#67735F",
        "brass-soft": "#B08A55",
        ink: "#1E1B17",
        "on-surface": "#26211C",
        "on-surface-muted": "#6D6258",
        outline: "#CDBEAE",
        inverse: "#171C18",
        error: "#8D3028",
      },
      fontFamily: {
        serif: ["var(--font-newsreader)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "Arial", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["76px", { lineHeight: "0.96", fontWeight: "500" }],
        "display-lg": ["60px", { lineHeight: "1.02", fontWeight: "500" }],
        "headline-lg": ["48px", { lineHeight: "1.08", fontWeight: "500" }],
        "headline-md": ["36px", { lineHeight: "1.12", fontWeight: "500" }],
        "headline-sm": ["28px", { lineHeight: "1.18", fontWeight: "500" }],
        "body-lg": ["19px", { lineHeight: "1.65", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "1.62", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "1.5", fontWeight: "400" }],
        "label-lg": ["14px", { lineHeight: "1.15", fontWeight: "650", letterSpacing: "0" }],
        "label-md": ["12px", { lineHeight: "1.2", fontWeight: "650" }],
        caption: ["12px", { lineHeight: "1.45", fontWeight: "400" }],
      },
      borderRadius: {
        none: "0px",
        xs: "2px",
        sm: "4px",
        md: "6px",
        lg: "8px",
        full: "9999px",
      },
      spacing: {
        gutter: "28px",
        "page-mobile": "20px",
        "page-desktop": "48px",
        "section-mobile": "76px",
        "section-desktop": "116px",
      },
      maxWidth: {
        page: "1240px",
      },
    },
  },
  plugins: [],
};

export default config;
