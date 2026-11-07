# Common UI

Un registre public de composants Svelte à copier dans ses projets avec shadcn-svelte. Les composants utilisent les couleurs sémantiques du projet qui les accueille : changez son thème CSS et ils changent avec lui.

**Common UI est un nom provisoire.** Le projet commence avec un bouton, un badge et une carte ; leur code est modifiable après installation.

## Développer

Prérequis : Bun et Node.js. Depuis ce dossier :

```bash
bun install
bun run dev
```

La page d'accueil présente les composants et permet de basculer entre deux thèmes de démonstration. Les commandes utiles :

```bash
bun run check           # vérification Svelte et TypeScript
bun run build:registry  # génération des fichiers static/r/*.json
bun run build           # génère le registre et construit le site statique
```

## Installer un composant

Dans un projet Svelte avec Tailwind CSS 4 et shadcn-svelte initialisé (`bunx shadcn-svelte@latest init`) :

```bash
bunx shadcn-svelte@latest add https://frflo.github.io/common-ui/r/common-button.json
bunx shadcn-svelte@latest add https://frflo.github.io/common-ui/r/common-badge.json
bunx shadcn-svelte@latest add https://frflo.github.io/common-ui/r/common-card.json
```

Le site doit d'abord être publié par GitHub Pages. Pour tester localement, lancez `bun run build:registry` puis `bun run dev` dans ce projet et remplacez le domaine par `http://localhost:5173`.

Avec les alias par défaut de SvelteKit récents, un exemple d'utilisation après installation est :

```svelte
<script lang="ts">
  import Button from '#lib/components/common-button/common-button.svelte';
  import Badge from '#lib/components/common-badge/common-badge.svelte';
  import Card from '#lib/components/common-card/common-card.svelte';
</script>

<Card>
  <Badge>Nouveau</Badge>
  <h2>Mon projet</h2>
  <Button onclick={() => alert('Bonjour !')}>Continuer</Button>
</Card>
```

Le chemin dépend de vos alias `components.json`. Le bouton accepte les variantes `primary`, `secondary`, `outline`, `ghost` et les tailles `sm`, `md`, `lg`. Le badge accepte `primary`, `secondary`, `outline`. Les attributs HTML et les classes supplémentaires sont transmis aux éléments ; en cas de classes Tailwind contradictoires, préférez modifier le code copié ou les variantes.

## Contrat de thème

Les composants utilisent les classes Tailwind correspondant aux couleurs `background`, `foreground`, `primary`, `primary-foreground`, `secondary`, `secondary-foreground`, `accent`, `accent-foreground`, `card`, `card-foreground`, `border` et `ring`. Ces couleurs doivent exister dans le thème Tailwind du projet consommateur. L'initialisation shadcn-svelte les fournit normalement ; ce ne sont pas des couleurs intégrées à Tailwind par défaut. Les composants ne modifient pas les variables du projet à l'installation.

Le fichier `src/routes/layout.css` donne un exemple de déclaration `@theme inline`, de variables claires et sombres, ainsi qu'un thème de démonstration. Il appartient au site de ce dépôt : adaptez les valeurs au CSS de chaque projet.

## Ajouter un composant

1. Créez son dossier dans `src/lib/registry/components/`.
2. Ajoutez une entrée dans `registry.json` : fichiers, dépendances npm (`dependencies`) et autres composants (`registryDependencies`).
3. Lancez `bun run build:registry`, puis testez l'installation dans un projet distinct.
4. Ajoutez une démonstration et documentez les variables de thème nécessaires.

Les fichiers JSON produits contiennent le code source. Les changements ultérieurs ne mettent pas automatiquement à jour les copies déjà installées.

## Publication

Le workflow GitHub Actions vérifie le projet, construit le registre et déploie le site sur GitHub Pages depuis `main`. Pour changer de propriétaire ou de nom de dépôt, adaptez `homepage` dans `registry.json`, les URL ci-dessus et `PAGES_BASE` dans le workflow.

Licence MIT : voir [LICENSE](LICENSE).
