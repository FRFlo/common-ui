<script lang="ts">
	import * as Timeline from "../lib/registry/components/timeline/index";

</script>

<svelte:head>
	<title>Common UI — composants Svelte</title>
	<meta name="description" content="Une collection de composants Svelte pour vos projets." />
</svelte:head>

<main class="catalogue" aria-label="Collection de composants">
	<section class="component" aria-labelledby="horizontal-title">
		<h1 id="horizontal-title">Timeline horizontale</h1>
		<div class="preview">
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

	<section class="component" aria-labelledby="vertical-title">
		<h2 id="vertical-title">Timeline verticale</h2>
		<div class="preview vertical-preview">
			<Timeline.Root orientation="vertical" aria-label="Étapes du projet">
				<Timeline.Item><Timeline.Indicator active aria-hidden="true" /><Timeline.Content><Timeline.Title active>En cours</Timeline.Title></Timeline.Content></Timeline.Item>
				<Timeline.Connector />
				<Timeline.Item><Timeline.Indicator aria-hidden="true" /><Timeline.Content><Timeline.Title>À venir</Timeline.Title></Timeline.Content></Timeline.Item>
			</Timeline.Root>
		</div>
	</section>

	<footer class="footer" aria-label="Liens utiles">
		<a href="https://github.com/FRFlo/common-ui#timeline">Documentation <span aria-hidden="true">↗</span></a>
		<a href="https://github.com/FRFlo/common-ui">GitHub <span aria-hidden="true">↗</span></a>
	</footer>
</main>
