<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "cn";
	import { getOrientation } from "./context";

	let { children, class: className, ...rest }: HTMLAttributes<HTMLDivElement> & { children: Snippet } = $props();
	const orientation = getOrientation();
</script>

<div class={cn("flex flex-col", orientation() === "horizontal" ? "mt-3 items-center text-center" : "items-start text-left", className)} {...rest}>{@render children()}</div>
