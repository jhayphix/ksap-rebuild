import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 3000,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(
    Boolean
  ),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@src": path.resolve(__dirname, "./src"),
      "@data": path.resolve(__dirname, "./src/_data"),

      "@assets": path.resolve(__dirname, "./src/assets"),
      "@images": path.resolve(__dirname, "./src/assets/images"),

      "@components": path.resolve(__dirname, "./src/components"),
      "@contexts": path.resolve(__dirname, "./src/contexts"),
      "@contest": path.resolve(__dirname, "./src/contest"),

      "@layouts": path.resolve(__dirname, "./src/layouts"),
      "@webRouting": path.resolve(__dirname, "./src/webRouting"),
      "@middleware": path.resolve(__dirname, "./src/middleware"),

      "@pages": path.resolve(__dirname, "./src/pages"),
    },
  },
}));
