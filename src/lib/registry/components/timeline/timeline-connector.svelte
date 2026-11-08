<script lang="ts">
	let { transition = false, label, trailing = false }: { transition?: boolean; label?: string; trailing?: boolean } = $props();
</script>

{#if transition}
	<li class="flex min-h-20 min-w-16 flex-1 self-stretch items-center justify-center" role="separator" aria-label={label}>
		<span class="block h-full w-0.5 rounded-full bg-border" title={label}></span>
	</li>
{:else if trailing}
	<li aria-hidden="true" class="mt-2 flex h-0.5 min-w-8 flex-1 bg-border"><span class="ml-auto h-0.5 w-16 translate-x-full bg-gradient-to-r from-border to-transparent"></span></li>
{:else}
	<li aria-hidden="true" class="mt-2 h-0.5 min-w-16 flex-1 bg-border"></li>
{/if}
