# Common UI

Un registre public pour créer des composants Svelte complexes et adapter ceux de shadcn-svelte aux besoins de nos projets. Les composants sont installés avec shadcn-svelte et utilisent les variables Tailwind CSS du projet qui les accueille.

La collection est actuellement vide. Le projet fournit la structure nécessaire pour créer les premiers composants et les publier sur [ui.frflo.ovh](https://ui.frflo.ovh).

## Développer

Prérequis : Bun et Node.js.

```bash
bun install
bun run dev
```

```bash
bun run check           # vérification Svelte et TypeScript
bun run build:registry  # génération du registre dans static/r
bun run build           # génération du registre et du site statique
```

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

La commande construit le site et le registre, puis les publie sur le Worker configuré dans `wrangler.jsonc`. Pour déployer automatiquement à chaque push, connectez le dépôt à Cloudflare Workers Builds : commande de build `bun install --frozen-lockfile && bun run check && bun run build`, commande de déploiement `bunx wrangler deploy`.

Licence MIT : voir [LICENSE](LICENSE).
