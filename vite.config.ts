// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import type { IncomingMessage, ServerResponse } from "http";
import type { ViteDevServer } from "vite";
import fs from "fs";

const securityHeaders = [
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  configureServer(server: ViteDevServer) {
    server.middlewares.use((req: IncomingMessage, res: ServerResponse, next: () => void) => {
      // Add security headers for all paths
      securityHeaders.forEach(({ key, value }) => {
        res.setHeader(key, value);
      });

      // Serve apple-app-site-association as JSON
      if (req.url === "/.well-known/apple-app-site-association") {
        res.setHeader("Content-Type", "application/json");
        try {
          const filePath = path.join(__dirname, "public/.well-known/apple-app-site-association");
          const content = fs.readFileSync(filePath, "utf-8");
          res.end(content);
          return;
        } catch (error) {
          console.error("Error serving apple-app-site-association:", error);
          res.statusCode = 404;
          res.end("File not found");
          return;
        }
      }
      
      next();
    });
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
