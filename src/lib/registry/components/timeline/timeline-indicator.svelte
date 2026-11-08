<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "cn";

	let { children, active = false, class: className, ...rest }: HTMLAttributes<HTMLSpanElement> & { children?: Snippet; active?: boolean } = $props();
</script>

<span class={cn("z-10 flex h-4 w-4 shrink-0 items-center justify-center rounded-full shadow-sm ring-4 ring-background transition-colors duration-300", active ? "bg-primary" : "bg-muted-foreground/30 group-hover:bg-primary", className)} {...rest}>
	{#if children}{@render children()}{/if}
</span>
