<script lang="ts">
	import type { Snippet } from "svelte";
	let { children, subtle = false }: { children: Snippet; subtle?: boolean } = $props();
</script>

<span
	class={subtle
		? "mt-0.5 text-[10px] text-muted-foreground/70"
		: "mt-1 text-xs font-medium text-muted-foreground"}>{@render children()}</span
>
