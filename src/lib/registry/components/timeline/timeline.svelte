<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLOlAttributes } from "svelte/elements";
	import { cn } from "cn";

	let { children, class: className, ...rest }: HTMLOlAttributes & {
		children: Snippet;
	} = $props();
</script>

<ol
	class={cn("flex w-full list-none items-start overflow-x-auto p-0 px-6 pt-6 pb-8", className)}
	{...rest}
>
	{@render children()}
</ol>
