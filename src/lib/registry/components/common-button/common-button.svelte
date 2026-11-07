<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLButtonAttributes } from 'svelte/elements';
  type Props = HTMLButtonAttributes & { variant?: 'primary' | 'secondary' | 'outline' | 'ghost'; size?: 'sm' | 'md' | 'lg'; children?: Snippet };
  let { variant = 'primary', size = 'md', class: className = '', children, type = 'button', ...rest }: Props = $props();
  const variants = {
    primary: 'bg-primary text-primary-foreground hover:opacity-90',
    secondary: 'bg-secondary text-secondary-foreground hover:opacity-80',
    outline: 'border border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground',
    ghost: 'text-foreground hover:bg-accent hover:text-accent-foreground'
  };
  const sizes = { sm: 'h-8 px-3 text-xs', md: 'h-10 px-4 text-sm', lg: 'h-12 px-6 text-base' };
</script>
<button {type} class="inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 {variants[variant]} {sizes[size]} {className}" {...rest}>{@render children?.()}</button>
