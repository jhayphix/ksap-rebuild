
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./app/**/*.{ts,tsx,js,jsx}",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#FFFFFF",
          2: "#f5f5f5",
          3: "#e6e6e6",
          text: "rgba(34, 34, 34, 0.88)",
          "text-2": "rgba(51, 51, 51, 0.89)",
          "text-3": "#444444",
        },
        secondary: {
          DEFAULT: "#0F5E3D",
          2: "#157347",
          3: "#D9F1E1",
          text: "#FFFFFF",
          "text-2": "#FFFFFF",
          "text-3": "#222222",
        },
        blue: {
          DEFAULT: "#0D6EFD",
          light: "#CFE2FF",
          light2: "#D9E6FF",
        },
        success: {
          DEFAULT: "#198754",
          light: "#D9F1E1",
          light2: "#EBFDF1",
        },
        warning: {
          DEFAULT: "#FFC107",
          text: "#CC8800",
          light: "#FFF3CD",
          light2: "#FFF8D1",
        },
        danger: {
          DEFAULT: "#DC3545",
          light: "#F8D7DA",
          light2: "#F9D8DC",
        },
        light: {
          DEFAULT: "#FFFFFF",
          2: "#E8E8E8",
          3: "#D6D6D6",
        },
        dark: {
          DEFAULT: "#222222",
          2: "#333333",
          3: "#444444",
        },
        gray: {
          DEFAULT: "#2F2F2F",
          2: "#6C757D",
          3: "#BDBDBD",
        },
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
      },
      width: {
        // Sidebar widths
        "side-lg": "20vw",
        "side-md": "30vw",
        "side-sm": "35vw",
        "side-default": "65vw",

        // Minimal sidebar widths
        "minimal-lg": "5vw",
        "minimal-md": "7vw",
      },
      // To use z-index 1050
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
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "slide-in": {
          from: {
            transform: "translateX(-100%)",
          },
          to: {
            transform: "translateX(0)",
          },
        },
        "fade-in": {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
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
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
