// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const AASA_RESPONSE = {
  applinks: {
    apps: [],
    details: [
      {
        appID: "9KQPGL866P.com.storylandapp.storyland.development",
        paths: ["/auth", "/*"],
      },
      {
        appID: "9KQPGL866P.com.storylandapp.storyland.staging",
        paths: ["/auth", "/*"],
      },
      {
        appID: "9KQPGL866P.com.storylandapp.storyland",
        paths: ["/auth", "/*"],
      },
    ],
  },
};

function aasaPlugin() {
  const handler = (req: any, res: any, next: any) => {
    if (req.url === "/.well-known/apple-app-site-association") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.end(JSON.stringify(AASA_RESPONSE));
      return;
    }
    next();
  };

  return {
    name: "aasa-endpoint",
    configureServer(server: any) {
      server.middlewares.use(handler);
    },
    configurePreviewServer(server: any) {
      server.middlewares.use(handler);
    },
  };
}

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    aasaPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));