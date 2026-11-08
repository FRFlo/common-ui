<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	let { children, class: className = '', ...rest }: HTMLAttributes<HTMLDivElement> & { children: Snippet } = $props();
</script>

<div class="w-full overflow-x-auto pb-8 pt-6 {className}" {...rest}>
	<ol class="flex min-w-full items-start px-6">
		{@render children()}
	</ol>
</div>
