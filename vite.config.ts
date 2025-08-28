import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import type { IncomingMessage, ServerResponse } from "http";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    middlewares: [
      (req: IncomingMessage, res: ServerResponse, next: () => void) => {
        if (req.url === '/.well-known/apple-app-site-association') {
          res.writeHead(200, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          });
          const response = {
            "applinks": {
              "apps": [],
              "details": [
                {
                  "appID": "9KQPGL866P.com.storylandapp.storyland.development",
                  "paths": ["/auth","/*"]
                },
                {
                  "appID": "9KQPGL866P.com.storylandapp.storyland.staging",
                  "paths": ["/auth","/*"]
                },
                {
                  "appID": "9KQPGL866P.com.storylandapp.storyland",
                  "paths": ["/auth", "/*"]
                }
              ]
            }
          };
          res.end(JSON.stringify(response));
          return;
        }
        next();
      }
    ],
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
