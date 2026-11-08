<script lang="ts">
	import type { HTMLLiAttributes } from "svelte/elements";
	import { cn } from "cn";
	import { getOrientation } from "./context";

	let { variant = "line", label, class: className, ...rest }: HTMLLiAttributes & { variant?: "line" | "transition" | "trailing"; label?: string } = $props();
	const orientation = getOrientation();
</script>

{#if variant === "transition"}
	<li class={cn("flex shrink-0 items-center justify-center", orientation() === "horizontal" ? "min-h-20 min-w-16 flex-1 self-stretch" : "min-h-8 w-4", className)} {...rest}>
		<span role="separator" aria-label={label} aria-orientation={orientation() === "horizontal" ? "vertical" : "horizontal"} class={cn("block rounded-full bg-border", orientation() === "horizontal" ? "h-full w-0.5" : "h-0.5 w-4")}></span>
	</li>
{:else}
	<li aria-hidden="true" class={cn("shrink-0", orientation() === "horizontal" ? "mt-2 h-0.5 min-w-16 flex-1" : "ml-2 min-h-8 w-0.5", variant === "trailing" ? (orientation() === "horizontal" ? "bg-gradient-to-r from-border to-transparent" : "bg-gradient-to-b from-border to-transparent") : "bg-border", className)} {...rest}></li>
{/if}
