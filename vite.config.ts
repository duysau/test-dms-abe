import { defineConfig, loadEnv } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

export default defineConfig((context) => {
  const env = loadEnv(context.mode, process.cwd(), "");
  return {
    plugins: [react()],
    server: {
      port: 3000,
    },
    define: {
      "process.env": env,
    },
    base: "/dms-abe",
    resolve: {
      alias: {
        app: resolve(__dirname, "src", "app"),
        components: resolve(__dirname, "src", "components"),
        hooks: resolve(__dirname, "src", "hooks"),
        pages: resolve(__dirname, "src", "pages"),
        config: resolve(__dirname, "src", "config"),
        core: resolve(__dirname, "src", "core"),
      },
    },
  };
});
