<script lang="ts">
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<svelte:head>
	<link rel="canonical" href="http://finansteori.dk/" />

	<title>Finansteori</title>
	<meta
		name="description"
		content="Tag kontrol over din økonomi, før den tager kontrol over dig."
	/>
	<meta property="og:site_name" content="Finansteori" />
	<meta property="og:url" content="http://finansteori.dk/" />
	<meta property="og:title" content="Finansteori" />
	<meta property="og:type" content="website" />
</svelte:head>

<div class="container flex min-h-[45vh] items-center py-12">
	<div class="space-y-2">
		<h1
			class="max-w-screen-md text-center font-lora text-4xl font-bold !leading-tight md:text-left md:text-6xl"
		>
			Kontroller din økonomi, før den kontrollere dig.
		</h1>
		<p
			class="max-w-screen-sm text-center text-lg font-light !leading-relaxed md:text-left md:text-2xl"
		>
			22% af unge danskere mellem 18 og 35 har problemer med deres økonomi ifølge Finans Danmark i
			2023.
		</p>
	</div>
</div>

<div class="container space-y-4 py-4 text-xl md:text-2xl">
	{#each data.articles as article}
		<a href={'/' + article.route} class="block text-primary hover:text-primary-highlight">
			<span role="heading" aria-level="1">{article.title}</span>
			{#if article.date}
				<Badge variant="secondary">
					{new Date(article.date).toLocaleDateString('da-DK', { dateStyle: 'medium' })}
				</Badge>
			{/if}
		</a>
	{/each}
</div>
