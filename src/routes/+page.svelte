<script lang="ts">
  import Button from '../lib/registry/components/common-button/common-button.svelte';
  import Badge from '../lib/registry/components/common-badge/common-badge.svelte';
  import Card from '../lib/registry/components/common-card/common-card.svelte';
  let theme = $state<'default' | 'ocean'>('default');
</script>

<svelte:head><title>Common UI — des composants à votre image</title><meta name="description" content="Un registre Svelte de composants adaptés à votre thème." /></svelte:head>
<div class:ocean={theme === 'ocean'} class="min-h-screen bg-background text-foreground">
  <header class="mx-auto flex max-w-6xl items-center justify-between border-b border-border px-6 py-5">
    <a href="./" class="text-lg font-bold tracking-tight">◈ Common UI</a>
    <span class="text-sm text-muted-foreground">Svelte · Tailwind CSS · shadcn-svelte</span>
  </header>
  <main class="mx-auto max-w-6xl px-6 py-16 sm:py-24">
    <div class="max-w-3xl">
      <Badge variant="outline">Un registre à personnaliser</Badge>
      <h1 class="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl">Vos composants.<br />Vos couleurs.</h1>
      <p class="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">Une base de composants Svelte qui s’adapte aux variables de thème de chacun de vos projets.</p>
      <div class="mt-8 flex flex-wrap gap-3"><Button onclick={() => document.getElementById('composants')?.scrollIntoView({ behavior: 'smooth' })}>Explorer les composants ↓</Button><Button variant="outline" onclick={() => theme = theme === 'default' ? 'ocean' : 'default'}>Changer le thème de démo</Button></div>
    </div>
    <div id="composants" class="mt-24 scroll-mt-8">
      <div class="mb-8 flex flex-wrap items-end justify-between gap-4"><div><p class="text-sm font-medium text-muted-foreground">01 / LES FONDATIONS</p><h2 class="mt-2 text-3xl font-semibold tracking-tight">Premiers composants</h2></div><p class="text-sm text-muted-foreground">Trois points de départ, une infinité de thèmes.</p></div>
      <div class="grid gap-4 md:grid-cols-3">
        <Card><p class="text-sm text-muted-foreground">01 — ACTION</p><h3 class="mt-4 text-xl font-semibold">Bouton</h3><p class="mt-2 text-sm text-muted-foreground">Une action claire, en plusieurs variantes.</p><div class="mt-8 flex flex-wrap gap-2"><Button size="sm">Continuer</Button><Button variant="outline" size="sm">Annuler</Button></div><code class="mt-6 block text-xs text-muted-foreground">common-button</code></Card>
        <Card><p class="text-sm text-muted-foreground">02 — ÉTAT</p><h3 class="mt-4 text-xl font-semibold">Badge</h3><p class="mt-2 text-sm text-muted-foreground">Un indicateur compact pour vos contenus.</p><div class="mt-8 flex flex-wrap gap-2"><Badge variant="primary">Nouveau</Badge><Badge>En cours</Badge><Badge variant="outline">Brouillon</Badge></div><code class="mt-6 block text-xs text-muted-foreground">common-badge</code></Card>
        <Card><p class="text-sm text-muted-foreground">03 — CONTENU</p><h3 class="mt-4 text-xl font-semibold">Carte</h3><p class="mt-2 text-sm text-muted-foreground">Une surface simple pour organiser vos idées.</p><div class="mt-8 rounded-lg border border-border bg-muted p-4 text-sm">Une carte, votre contenu.</div><code class="mt-6 block text-xs text-muted-foreground">common-card</code></Card>
      </div>
    </div>
    <div class="mt-20 border-t border-border pt-8 text-sm leading-7 text-muted-foreground">Les couleurs proviennent du thème du projet. Consultez le README pour installer les composants et configurer vos variables.</div>
  </main>
</div>
