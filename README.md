# Common UI

Un registre public pour créer des composants Svelte complexes et adapter ceux de shadcn-svelte aux besoins de nos projets. Les composants sont installés avec shadcn-svelte et utilisent les variables Tailwind CSS du projet qui les accueille.

La collection comprend une timeline horizontale. Les composants sont publiés sur [ui.frflo.ovh](https://ui.frflo.ovh).

## Développer

Prérequis : Bun et Node.js.

```bash
bun install
bun run dev
```

```bash
bun run fmt             # formatage du projet
bun run fmt:check       # vérification du formatage
bun run lint            # lint strict Svelte et Tailwind (avertissements interdits)
bun run check           # vérification Svelte et TypeScript
bun run test            # tests des composants avec Vitest
bun run test:coverage   # tests et couverture
bun run test:e2e        # tests Chromium (après build)
bun run build:registry  # génération du registre dans static/r
bun run build           # génération du registre et du site statique
```

Pour les tests navigateur, installez Chromium une fois avec `bunx playwright install chromium`, puis lancez `bun run build` et `bun run test:e2e`.

## Ajouter un composant

1. Créez son dossier dans `src/lib/registry/components/`.
2. Ajoutez une entrée dans `registry.json` : fichiers, dépendances npm (`dependencies`) et autres composants (`registryDependencies`).
3. Utilisez les couleurs sémantiques Tailwind du projet consommateur et documentez les variables nécessaires : elles ne sont pas toutes fournies par Tailwind par défaut.
4. Lancez `bun run build:registry`, puis testez l'installation depuis un projet Svelte distinct initialisé avec shadcn-svelte.
5. Ajoutez une présentation du composant sur le site.

Les fichiers JSON produits contiennent le code source. Les changements ultérieurs ne mettent pas automatiquement à jour les copies déjà installées. Documentation : [registres shadcn-svelte](https://www.shadcn-svelte.com/docs/registry/getting-started).

## Publication sur Cloudflare Workers

```bash
bunx wrangler login
bun run deploy
```

La commande construit le site et le registre, puis les publie sur le Worker configuré dans `wrangler.jsonc`. Pour déployer automatiquement à chaque push, connectez le dépôt à Cloudflare Workers Builds : commande de build `bun install --frozen-lockfile && bun run build`, commande de déploiement `bunx wrangler deploy`. Le workflow GitHub sert aux vérifications uniquement.

Licence MIT : voir [LICENSE](LICENSE).

## Timeline

Installez le composant dans un projet configuré avec shadcn-svelte :

```bash
bunx shadcn-svelte@latest add https://ui.frflo.ovh/r/timeline.json
```

Composez les unités selon vos données ; le filtrage, le tri et le formatage des dates restent à la charge de l’application :

```svelte
<script lang="ts">
  import * as Timeline from "$lib/components/timeline";
</script>

<Timeline.Root orientation="vertical" aria-label="Prochains examens">
  <Timeline.Item>
    <Timeline.Indicator active aria-hidden="true" />
    <Timeline.Content><Timeline.Title active>Maintenant</Timeline.Title></Timeline.Content>
  </Timeline.Item>
  <Timeline.Connector />
  <Timeline.Item>
    <Timeline.Indicator aria-hidden="true" />
    <Timeline.Content>
      <Timeline.Title>Mathématiques</Timeline.Title>
      <Timeline.Description>12 juin</Timeline.Description>
      <Timeline.Description subtle>09:00 - 11:00</Timeline.Description>
    </Timeline.Content>
  </Timeline.Item>
  <Timeline.Connector variant="transition" label="Changement de période" />
  <Timeline.Item>
    <Timeline.Indicator class="h-6 w-6">2</Timeline.Indicator>
    <Timeline.Content><a href="/examens">Voir les examens</a></Timeline.Content>
  </Timeline.Item>
  <Timeline.Connector variant="trailing" />
</Timeline.Root>
```

`Root` accepte `orientation="horizontal"` (par défaut) ou `"vertical"`. Composez chaque `Item` avec un `Indicator` et un `Content`, puis des titres, descriptions ou tout autre contenu. Les indicateurs décoratifs peuvent recevoir `aria-hidden="true"` ; laissez leur contenu accessible lorsqu’il porte du sens. `Connector` accepte les variantes `line` (par défaut), `transition` et `trailing` ; donnez un `label` aux transitions significatives. Chaque partie accepte `class` et les attributs HTML de son élément ; les classes Tailwind sont fusionnées avec `cn`. Les couleurs utilisent les variables sémantiques `background`, `foreground`, `primary`, `border` et `muted-foreground` du projet hôte.

Le lint Tailwind utilise `@shadcn/lint` pour interdire les valeurs arbitraires, les couleurs brutes et les styles en ligne. Les classes des templates Svelte sont vérifiées par ESLint.
