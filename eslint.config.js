import svelte from "eslint-plugin-svelte";
import tsParser from "@typescript-eslint/parser";
import { readFileSync } from "node:fs";

const oxlintConfig = JSON.parse(readFileSync(new URL("./.oxlintrc.json", import.meta.url), "utf8"));
const svelteRules = Object.fromEntries(
	Object.entries(oxlintConfig.rules).filter(([name]) => name.startsWith("svelte/")),
);

export default [
	...svelte.configs["flat/base"],
	{
		files: ["**/*.svelte"],
		languageOptions: { parserOptions: { parser: tsParser } },
		rules: svelteRules,
	},
	{ ignores: ["node_modules/**", ".svelte-kit/**", "build/**"] },
];
