import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
// No CI, GITHUB_PAGES_BASE garante o mesmo casing do nome do repositório no GitHub (ex.: /Portifolio/).
export default defineConfig(({ mode }) => ({
  base:
    process.env.GITHUB_PAGES_BASE ||
    (mode === "production" && process.env.GITHUB_REPOSITORY
      ? `/${process.env.GITHUB_REPOSITORY.split("/")[1]}/`
      : "/"),
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
