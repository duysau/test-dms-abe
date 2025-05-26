import { defineConfig, loadEnv } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import tsNameof from "vite-plugin-ts-nameof";

export default defineConfig((context) => {
  const env = loadEnv(context.mode, process.cwd(), "");
  return {
    server: {
      port: 3000,
    },
    define: {
      "process.env": env,
    },
    base: "/dms-abe",
    build: {
      outDir: "build",
      rollupOptions: {
        plugins: [
          {
            name: "disable-treeshake",
            transform(code, id) {
              if (id.endsWith("scss.js")) {
                return { moduleSideEffects: "no-treeshake" };
              }
            },
          },
        ],
      },
    },
    resolve: {
      alias: {
        path: "path-browserify",
        app: resolve(__dirname, "src", "app"),
        components: resolve(__dirname, "src", "components"),
        hooks: resolve(__dirname, "src", "hooks"),
        pages: resolve(__dirname, "src", "pages"),
        layout: resolve(__dirname, "src", "layout"),
        config: resolve(__dirname, "src", "config"),
        core: resolve(__dirname, "src", "core"),
        assets: resolve(__dirname, "src", "assets"),
        locales: resolve(__dirname, "src", "locales"),
        services: resolve(__dirname, "src", "services"),
      },
    },
    plugins: [
      react({
        babel: {
          parserOpts: {
            plugins: ["decorators-legacy"],
          },
        },
      }),
      svgr(),
      tsNameof(),
    ],
  };
});
