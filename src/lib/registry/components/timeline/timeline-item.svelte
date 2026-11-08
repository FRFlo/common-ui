<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLLiAttributes } from 'svelte/elements';

	let { children, active = false, class: className = '', ...rest }: HTMLLiAttributes & { children: Snippet; active?: boolean } = $props();
</script>

<li class="group relative flex w-32 shrink-0 flex-col items-center {className}" {...rest}>
	<span aria-hidden="true" class="z-10 h-4 w-4 rounded-full ring-4 ring-background shadow-sm transition-colors duration-300 {active ? 'bg-primary' : 'bg-muted-foreground/30 group-hover:bg-primary'}"></span>
	<div class="mt-3 flex flex-col items-center text-center">{@render children()}</div>
</li>
