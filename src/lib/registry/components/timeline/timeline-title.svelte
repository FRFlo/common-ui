<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "cn";

	let { children, active = false, class: className, ...rest }: HTMLAttributes<HTMLSpanElement> & { children: Snippet; active?: boolean } = $props();
</script>

<span class={cn("line-clamp-2 text-sm", active ? "font-semibold text-primary" : "font-medium text-foreground", className)} {...rest}>{@render children()}</span>
