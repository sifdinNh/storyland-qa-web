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

const ASSETLINKS_RESPONSE = [
  {
    "relation": ["delegate_permission/common.handle_all_urls"],
    "target": {
      "namespace": "android_app",
      "package_name": "com.storylandapp.storyland",
      "sha256_cert_fingerprints": [
        "06:75:93:DF:FE:CD:41:01:9E:20:99:C7:CC:AB:27:3D:6B:78:BB:F2:1D:5D:16:8D:69:4B:BB:41:04:A0:AE:4E",
        "FA:C6:17:45:DC:09:03:78:6F:B9:ED:E6:2A:96:2B:39:9F:73:48:F0:BB:6F:89:9B:83:32:66:75:91:03:3B:9C"
      ]
    }
  },
  {
    "relation": ["delegate_permission/common.handle_all_urls"],
    "target": {
      "namespace": "android_app",
      "package_name": "com.storylandapp.storyland.development",
      "sha256_cert_fingerprints": [
        "FA:C6:17:45:DC:09:03:78:6F:B9:ED:E6:2A:96:2B:39:9F:73:48:F0:BB:6F:89:9B:83:32:66:75:91:03:3B:9C"
      ]
    }
  }
];

function aasaMiddlewarePlugin() {
  const handler = (req: any, res: any, next: any) => {
    if (req.url === "/.well-known/apple-app-site-association") {
      res.writeHead(200, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        'Content-Disposition': 'inline',
        "Cache-Control": "no-cache"
      });
      res.end(JSON.stringify(AASA_RESPONSE));
      return;
    }
    
    if (req.url === "/.well-known/assetlinks.json") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.end(JSON.stringify(ASSETLINKS_RESPONSE));
      return;
    }
    
    next();
  };

  return {
    name: "vite-aasa-middleware",
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
    aasaMiddlewarePlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));