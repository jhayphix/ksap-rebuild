import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./app/**/*.{ts,tsx,js,jsx}",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },

      colors: {
        // Dynamic CSS-variable driven palette (themeable via :root or dark mode)
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        // Static custom palette
        brand: {
          DEFAULT: "#FFFFFF",
          subtle: "#F5F5F5",
          faint: "#E6E6E6",
          text: {
            DEFAULT: "rgba(34, 34, 34, 0.88)",
            subtle: "rgba(51, 51, 51, 0.89)",
            faint: "#444444",
          },
        },
        primary: {
          DEFAULT: "#0F5E3D",
          subtle: "#157347",
          faint: "#D9F1E1",
          text: {
            DEFAULT: "#FFFFFF",
            subtle: "#FFFFFF",
            faint: "#222222",
          },
        },
        info: {
          DEFAULT: "#0D6EFD",
          subtle: "#CFE2FF",
          faint: "#D9E6FF",
        },
        success: {
          DEFAULT: "#198754",
          subtle: "#D9F1E1",
          faint: "#EBFDF1",
        },
        warning: {
          DEFAULT: "#FFC107",
          subtle: "#FFF3CD",
          faint: "#FFF8D1",
          text: {
            DEFAULT: "#CC8800",
          },
        },
        danger: {
          DEFAULT: "#DC3545",
          subtle: "#F8D7DA",
          faint: "#F9D8DC",
        },
        neutral: {
          white: "#FFFFFF",
          subtle: "#E8E8E8",
          muted: "#D6D6D6",
        },
        dark: {
          DEFAULT: "#222222",
          medium: "#333333",
          muted: "#444444",
        },
        gray: {
          dark: "#2F2F2F",
          medium: "#6C757D",
          light: "#BDBDBD",
        },
      },
      width: {
        "side-lg": "20vw", // For large sidebar
        "side-md": "30vw", // Medium
        "side-sm": "35vw", // Smaller sidebar
        "side-default": "65vw", // Possibly main content area when sidebar is open

        "minimal-lg": "5vw", // Minimal collapsed version
        "minimal-md": "7vw",
      },
      zIndex: {
        1050: "1050",
      },
      translate: {
        "-full": "-100%",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "slide-in": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slide-in": "slide-in 0.3s ease-out",
        "fade-in": "fade-in 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
} satisfies Config;
