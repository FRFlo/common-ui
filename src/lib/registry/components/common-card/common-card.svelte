<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  type Props = HTMLAttributes<HTMLElement> & { children?: Snippet };
  let { class: className = '', children, ...rest }: Props = $props();
</script>
<section class="rounded-xl border border-border bg-card p-6 text-card-foreground shadow-sm {className}" {...rest}>{@render children?.()}</section>
