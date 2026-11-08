<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "cn";

	let { children, class: className, ...rest }: HTMLAttributes<HTMLDivElement> & { children: Snippet } = $props();
</script>

<div class={cn("mt-3 flex flex-col items-center text-center", className)} {...rest}>{@render children()}</div>
