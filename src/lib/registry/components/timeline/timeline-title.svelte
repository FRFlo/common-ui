<script lang="ts">
	import type { Snippet } from 'svelte';
	let { children, active = false }: { children: Snippet; active?: boolean } = $props();
</script>

<span class="line-clamp-2 px-2 text-sm {active ? 'font-semibold text-primary' : 'font-medium text-foreground'}">{@render children()}</span>
