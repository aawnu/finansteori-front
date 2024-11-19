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

<div class="container flex min-h-[45vh] flex-col items-center justify-center py-24">
	<h1 class="text-center font-lora text-4xl font-black !leading-tight md:text-5xl lg:text-7xl">
		<span class="inline md:block">Kontroller <u>din</u> økonomi,</span>
		<span class="inline md:block">før <i>den</i> kontrollere dig.</span>
	</h1>
	<p class="mt-2 max-w-lg md:max-w-screen-sm lg:max-w-screen-md text-center text-lg md:text-xl font-light italic !leading-snug lg:text-3xl">
		Har du styr på din økonomi og hvordan du formidler den imod en bedre fremtid?
	</p>
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
