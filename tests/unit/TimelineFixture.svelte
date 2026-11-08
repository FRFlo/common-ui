<script lang="ts">
	import * as Timeline from "../../src/lib/registry/components/timeline/index";
</script>

<Timeline.Root aria-label="Étapes" class="px-2" data-testid="root">
	<Timeline.Item class="w-24" data-testid="item">
		<Timeline.Indicator active class="h-6 w-6" data-testid="indicator">1</Timeline.Indicator>
		<Timeline.Content class="gap-2" data-testid="content">
			<Timeline.Title active class="text-lg" data-testid="title">Départ</Timeline.Title>
			<Timeline.Description data-testid="description">Détail</Timeline.Description>
			<Timeline.Description subtle data-testid="subtle">Précision</Timeline.Description>
			<a href="/next">Lien libre</a>
		</Timeline.Content>
	</Timeline.Item>
	<Timeline.Connector data-testid="line" />
	<Timeline.Item><Timeline.Indicator aria-hidden="true" data-testid="default-indicator" /><Timeline.Content><Timeline.Title data-testid="default-title">Suite</Timeline.Title></Timeline.Content></Timeline.Item>
	<Timeline.Connector variant="transition" label="Nouvelle période" class="custom-transition" data-testid="transition" />
	<Timeline.Connector variant="trailing" data-testid="trailing" />
</Timeline.Root>
