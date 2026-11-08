<script lang="ts">
	import * as Timeline from "../lib/registry/components/timeline/index";
</script>

<svelte:head>
	<title>Common UI — composants Svelte</title>
	<meta name="description" content="Une collection de composants Svelte pour vos projets." />
</svelte:head>

<main
	class="flex min-h-screen w-full flex-col bg-background px-6 pb-6 text-foreground"
	aria-label="Collection de composants"
>
	<section class="py-6" aria-labelledby="timeline-title">
		<h1 id="timeline-title" class="text-3xl tracking-tight text-primary sm:text-4xl">Timeline</h1>
		<h2 class="mt-6 mb-3 text-sm font-medium">Horizontale</h2>
		<div class="w-full overflow-hidden rounded-xl border border-border bg-background">
			<Timeline.Root aria-label="Prochains examens">
				<Timeline.Item class="w-24"><Timeline.Indicator active aria-hidden="true" /><Timeline.Content><Timeline.Title active>Maintenant</Timeline.Title></Timeline.Content></Timeline.Item>
				<Timeline.Connector />
				<Timeline.Item><Timeline.Indicator aria-hidden="true" /><Timeline.Content><Timeline.Title>Mathématiques</Timeline.Title><Timeline.Description>12 juin</Timeline.Description><Timeline.Description subtle>09:00 - 11:00 (2h)</Timeline.Description></Timeline.Content></Timeline.Item>
				<Timeline.Connector />
				<Timeline.Item><Timeline.Indicator aria-hidden="true" /><Timeline.Content><Timeline.Title>Physique</Timeline.Title><Timeline.Description>15 juin</Timeline.Description><Timeline.Description subtle>14:00 - 15:30 (1h30)</Timeline.Description></Timeline.Content></Timeline.Item>
				<Timeline.Connector variant="transition" label="Changement vers la période suivante" />
				<Timeline.Item><Timeline.Indicator aria-hidden="true" /><Timeline.Content><Timeline.Title>Informatique</Timeline.Title><Timeline.Description>22 juin</Timeline.Description><Timeline.Description subtle>10:00 - 12:00 (2h)</Timeline.Description></Timeline.Content></Timeline.Item>
				<Timeline.Connector variant="trailing" />
			</Timeline.Root>
		</div>

	</section>

	<footer class="mt-auto flex flex-wrap items-center justify-end gap-4 pt-6 text-sm" aria-label="Liens utiles">
		<a class="text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary" href="https://github.com/FRFlo/common-ui#timeline">Documentation <span aria-hidden="true">↗</span></a>
		<a class="hover:text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary" href="https://github.com/FRFlo/common-ui">GitHub <span aria-hidden="true">↗</span></a>
	</footer>
</main>
