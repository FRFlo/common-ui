<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "cn";

	let { children, subtle = false, class: className, ...rest }: HTMLAttributes<HTMLSpanElement> & { children: Snippet; subtle?: boolean } = $props();
</script>

<span class={cn(subtle ? "mt-0.5 text-xs text-muted-foreground/70" : "mt-1 text-xs font-medium text-muted-foreground", className)} {...rest}>{@render children()}</span>
