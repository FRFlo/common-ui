<script lang="ts">
	import type { HTMLLiAttributes } from "svelte/elements";
	import { cn } from "cn";

	let { variant = "line", label, class: className, ...rest }: HTMLLiAttributes & { variant?: "line" | "transition" | "trailing"; label?: string } = $props();
</script>

{#if variant === "transition"}
	<li class={cn("flex min-h-20 min-w-16 shrink-0 flex-1 items-center justify-center self-stretch", className)} {...rest}>
		<span role="separator" aria-label={label} aria-orientation="vertical" class="block h-full w-0.5 rounded-full bg-border"></span>
	</li>
{:else}
	<li aria-hidden="true" class={cn("mt-2 h-0.5 min-w-16 shrink-0 flex-1", variant === "trailing" ? "bg-gradient-to-r from-border to-transparent" : "bg-border", className)} {...rest}></li>
{/if}
