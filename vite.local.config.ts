import { cloudflare } from "@cloudflare/vite-plugin";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		cloudflare({
			configPath: "./caller/wrangler.jsonc",
			auxiliaryWorkers: [{ configPath: "./wrangler.jsonc" }],
		}),
	],
	server: {
		port: 8787,
		strictPort: true,
	},
});
