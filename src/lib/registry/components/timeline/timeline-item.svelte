<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLLiAttributes } from "svelte/elements";
	import { cn } from "cn";
	import { getOrientation } from "./context";

	let { children, class: className, ...rest }: HTMLLiAttributes & { children: Snippet } = $props();
	const orientation = getOrientation();
</script>

<li class={cn("group relative flex shrink-0", orientation() === "horizontal" ? "w-32 flex-col items-center" : "w-full flex-row items-start gap-3", className)} {...rest}>
	{@render children()}
</li>
