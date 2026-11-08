import { mergeConfig, defineConfig } from "vitest/config";
import viteConfig from "./vite.config.ts";

export default mergeConfig(
	viteConfig,
	defineConfig({
		resolve: { conditions: ["browser"] },
		test: {
			environment: "jsdom",
			include: ["tests/unit/**/*.test.ts"],
			setupFiles: ["./tests/unit/setup.ts"],
			coverage: {
				provider: "v8",
				include: ["src/lib/registry/components/timeline/**/*.{svelte,ts}"],
			},
		},
	}),
);
