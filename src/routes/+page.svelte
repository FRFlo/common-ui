<script lang="ts">
	import { resolve } from "$app/paths";
	import * as Timeline from "../lib/registry/components/timeline/index";
</script>

<svelte:head>
	<title>Common UI — composants Svelte</title>
	<meta
		name="description"
		content="Une collection de composants Svelte conçus pour s’adapter au thème de vos projets."
	/>
</svelte:head>

<div class="page">
	<header class="header shell">
		<a class="brand" href={resolve("/")} aria-label="Common UI, accueil"
			><span class="brand-mark" aria-hidden="true">✳</span> Common UI</a
		>
		<a class="header-link" href="https://github.com/FRFlo/common-ui"
			>GitHub <span aria-hidden="true">↗</span></a
		>
	</header>

	<main class="shell">
		<section class="hero" aria-labelledby="title">
			<div class="eyebrow"><span></span> UNE LIBRAIRIE EN CONSTRUCTION</div>
			<h1 id="title">Des composants.<br /><em>Votre identité.</em></h1>
			<p class="intro">
				Des composants Svelte complexes et des adaptations de shadcn-svelte, pensés pour vos projets
				et leurs couleurs.
			</p>
			<div class="actions">
				<a class="primary-link" href="#collection"
					>Découvrir la collection <span aria-hidden="true">↘</span></a
				>
				<a class="secondary-link" href="https://github.com/FRFlo/common-ui"
					>Voir le projet <span aria-hidden="true">↗</span></a
				>
			</div>
		</section>

		<section class="collection" id="collection" aria-labelledby="collection-title">
			<div class="section-heading">
				<div>
					<span class="section-label">LA COLLECTION</span>
					<h2 id="collection-title">Timeline.</h2>
				</div>
				<span class="count">01 / COMPOSANT</span>
			</div>
			<div class="timeline-demo">
				<div class="timeline-heading">
					<div>
						<h3>Prochains examens</h3>
						<p>Un exemple de frise horizontale, inspiré de Naurio.</p>
					</div>
					<a href="https://github.com/FRFlo/common-ui#timeline">Documentation ↗</a>
				</div>
				<Timeline.Root aria-label="Prochains examens">
					<Timeline.Item active class="w-24"
						><Timeline.Title active>Maintenant</Timeline.Title></Timeline.Item
					>
					<Timeline.Connector />
					<Timeline.Item
						><Timeline.Title>Mathématiques</Timeline.Title><Timeline.Description
							>12 juin</Timeline.Description
						><Timeline.Description subtle>09:00 - 11:00 (2h)</Timeline.Description></Timeline.Item
					>
					<Timeline.Connector />
					<Timeline.Item
						><Timeline.Title>Physique</Timeline.Title><Timeline.Description
							>15 juin</Timeline.Description
						><Timeline.Description subtle>14:00 - 15:30 (1h30)</Timeline.Description></Timeline.Item
					>
					<Timeline.Connector transition label="Changement vers la période suivante" />
					<Timeline.Item
						><Timeline.Title>Informatique</Timeline.Title><Timeline.Description
							>22 juin</Timeline.Description
						><Timeline.Description subtle>10:00 - 12:00 (2h)</Timeline.Description></Timeline.Item
					>
					<Timeline.Connector trailing />
				</Timeline.Root>
			</div>
		</section>
		<section class="principles" aria-label="Principes de la bibliothèque">
			<div>
				<span>01</span>
				<h3>Conçus pour Svelte</h3>
				<p>Des interfaces complexes pensées pour les besoins de vos projets.</p>
			</div>
			<div>
				<span>02</span>
				<h3>Adaptés à votre thème</h3>
				<p>Les couleurs suivent les variables Tailwind CSS de vos projets.</p>
			</div>
			<div>
				<span>03</span>
				<h3>Pensés pour vos besoins</h3>
				<p>Adaptez les composants shadcn-svelte à votre façon de travailler.</p>
			</div>
		</section>
	</main>
	<footer class="shell footer">
		<span>✳ &nbsp; Common UI</span><span>Svelte · Tailwind CSS · shadcn-svelte</span><a
			href="https://github.com/FRFlo/common-ui">GitHub ↗</a
		>
	</footer>
</div>
