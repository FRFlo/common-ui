<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  type Props = HTMLAttributes<HTMLSpanElement> & { variant?: 'primary' | 'secondary' | 'outline'; children?: Snippet };
  let { variant = 'secondary', class: className = '', children, ...rest }: Props = $props();
  const variants = { primary: 'bg-primary text-primary-foreground', secondary: 'bg-secondary text-secondary-foreground', outline: 'border border-border text-foreground' };
</script>
<span class="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium {variants[variant]} {className}" {...rest}>{@render children?.()}</span>
