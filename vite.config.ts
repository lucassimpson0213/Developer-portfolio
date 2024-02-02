import path from "path"; // Corrected import
import react from "@vitejs/plugin-react";
import { splitVendorChunkPlugin } from "vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Now 'path' is correctly imported
    },
  },
});
