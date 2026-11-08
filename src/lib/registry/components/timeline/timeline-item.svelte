<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLLiAttributes } from "svelte/elements";
	import { cn } from "cn";

	let { children, class: className, ...rest }: HTMLLiAttributes & { children: Snippet } = $props();
</script>

<li class={cn("group relative flex w-32 shrink-0 flex-col items-center", className)} {...rest}>
	{@render children()}
</li>
