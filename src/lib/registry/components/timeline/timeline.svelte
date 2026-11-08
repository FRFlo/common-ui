<script lang="ts">
	import { setContext, type Snippet } from "svelte";
	import type { HTMLOlAttributes } from "svelte/elements";
	import { cn } from "cn";
	import { timelineContext, type Orientation } from "./context";

	let { children, orientation = "horizontal", class: className, ...rest }: HTMLOlAttributes & {
		children: Snippet;
		orientation?: Orientation;
	} = $props();
	setContext(timelineContext, () => orientation);
</script>

<ol
	class={cn("flex w-full list-none p-0", orientation === "horizontal" ? "items-start overflow-x-auto px-6 pt-6 pb-8" : "flex-col items-stretch px-6 py-6", className)}
	data-orientation={orientation}
	{...rest}
>
	{@render children()}
</ol>
