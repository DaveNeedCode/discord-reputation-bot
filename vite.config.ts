import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";

// Setup __dirname equivalent for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cartographer plugin (conditionally included)
let cartographerPlugin = [];
if (
  process.env.NODE_ENV !== "production" &&
  process.env.REPL_ID !== undefined
) {
  // Import sync, not await
  const cartographer = require("@replit/vite-plugin-cartographer");
  cartographerPlugin = [cartographer.cartographer()];
}

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...cartographerPlugin,
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
  },
});
