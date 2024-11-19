<script lang="ts">
	import Stock from '$lib/components/icons/stock.svelte';
	import Writing from '$lib/components/icons/writing.svelte';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const schema: string = JSON.stringify([
		{
			'@context': 'https://schema.org/',
			'@type': 'WebSite',
			name: 'Finansteori',
			url: 'http://finansteori.dk/',
			description: 'Hjemmeside om økonomi og investering for private, både begyndere og øvede.',
			audience: {
				'@type': 'Audience',
				audienceType: 'Anyone'
			},
			conditionsOfAccess: 'None',
			contentLocation: {
				'@type': 'Place',
				name: 'Danmark',
				alternateName: 'Denmark'
			},
			contributor: {
				'@type': 'Person',
				name: 'Alex Ahlgreen Westergaard',
				url: 'http://aaw.nu',
				alternativeName: 'AAW'
			},
			copyrightHolder: {
				'@type': 'Person',
				name: 'Alex Ahlgreen Westergaard',
				alternativeName: 'AAW'
			},
			copyrightYear: '2020',
			creator: {
				'@type': 'Person',
				name: 'Alex Ahlgreen Westergaard'
			},
			dateCreated: '2020-05-01T00:00:00.000Z',
			educationalLevel: {
				'@type': 'DefinedTerm'
			},
			genre: 'Finance',
			headline: 'Kontroller din økonomi, før den kontrollere dig.',
			inLanguage: 'da',
			isAccessibleForFree: 'True',
			isFamilyFriendly: 'True',
			maintainer: {
				'@type': 'Organization',
				name: 'Northbased',
				url: 'https://northbased.net'
			},
			typicalAgeRange: '16-35'
		},
		{
			'@context': 'https://schema.org/',
			'@type': 'BreadcrumbList',
			itemListElement: [
				{
					'@type': 'ListItem',
					position: '1',
					name: 'Finansteori',
					item: 'http://finansteori.dk/'
				}
			]
		}
	]);
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

	{@html `<script type="application/ld+json">${schema}</script>`}
</svelte:head>

<div class="container flex flex-col items-center justify-center py-8 md:py-12 lg:py-24">
	<h1 class="text-center font-lora text-4xl font-black !leading-tight md:text-5xl lg:text-7xl">
		<span class="inline sm:block">Kontroller <u>din</u> økonomi,</span>
		<span class="inline sm:block">før <i>den</i> kontrollere dig.</span>
	</h1>
	<p
		class="mt-2 max-w-lg text-center text-lg font-light italic !leading-snug md:max-w-screen-sm md:text-xl lg:max-w-screen-md lg:text-3xl"
	>
		Har du styr på din økonomi og hvordan du formidler den bedst muligt imod en bedre fremtid?
	</p>
</div>

{#if data.articles.stock.length > 0}
	<div class="container px-0 py-12">
		<div
			class="grid auto-rows-fr grid-cols-[repeat(auto-fill,_minmax(min-content,250px))] justify-center gap-4"
		>
			<div class="flex flex-col items-center justify-center p-8">
				<Stock class="h-12 lg:h-24" />
				<span class="mt-1 text-3xl font-thin"> Aktier </span>
			</div>
			{#each data.articles.stock as article}
				<a
					href={'/' + article.route}
					class="group flex flex-col items-start justify-center rounded-lg border p-8 text-lg transition-all hover:bg-primary hover:text-background"
				>
					{#if article.date}
						<span
							class="mb-2 block border-b border-b-transparent text-sm font-medium text-primary group-hover:border-b-white group-hover:font-black group-hover:text-background"
						>
							{new Date(article.date).toLocaleDateString('da-DK', { dateStyle: 'medium' })}
						</span>
					{/if}
					{article.title}
				</a>
			{/each}
		</div>
	</div>
{/if}

<!-- {#if data.articles.economy.length > 0}
	<div class="container px-0 py-12">
		<div
			class="grid auto-rows-fr grid-cols-[repeat(auto-fill,_minmax(min-content,250px))] justify-center gap-4"
		>
			<div class="flex flex-col items-center justify-center p-8">
				<Stock class="h-12 lg:h-24" />
				<span class="mt-1 text-3xl font-thin"> Økonomi </span>
			</div>
			{#each data.articles.economy as article}
				<a
					href={'/' + article.route}
					class="group flex flex-col items-start justify-center rounded-lg border p-8 text-lg transition-all hover:bg-primary hover:text-background"
				>
					{#if article.date}
						<span
							class="mb-2 block border-b border-b-transparent text-sm font-medium text-primary group-hover:border-b-white group-hover:font-black group-hover:text-background"
						>
							{new Date(article.date).toLocaleDateString('da-DK', { dateStyle: 'medium' })}
						</span>
					{/if}
					{article.title}
				</a>
			{/each}
		</div>
	</div>
{/if}

{#if data.articles.owner.length > 0}
	<div class="container px-0 py-12">
		<div
			class="grid auto-rows-fr grid-cols-[repeat(auto-fill,_minmax(min-content,250px))] justify-center gap-4"
		>
			<div class="flex flex-col items-center justify-center p-8">
				<Stock class="h-12 lg:h-24" />
				<span class="mt-1 text-3xl font-thin"> Selvstændig </span>
			</div>
			{#each data.articles.owner as article}
				<a
					href={'/' + article.route}
					class="group flex flex-col items-start justify-center rounded-lg border p-8 text-lg transition-all hover:bg-primary hover:text-background"
				>
					{#if article.date}
						<span
							class="mb-2 block border-b border-b-transparent text-sm font-medium text-primary group-hover:border-b-white group-hover:font-black group-hover:text-background"
						>
							{new Date(article.date).toLocaleDateString('da-DK', { dateStyle: 'medium' })}
						</span>
					{/if}
					{article.title}
				</a>
			{/each}
		</div>
	</div>
{/if} -->

{#if data.articles.other}
	<div class="container px-0 py-12">
		<div
			class="grid auto-rows-fr grid-cols-[repeat(auto-fill,_minmax(min-content,250px))] justify-center gap-4"
		>
			<div class="flex flex-col items-center justify-center p-8">
				<Writing class="h-12 lg:h-24" />
				<span class="mt-1 text-3xl font-thin"> Andet </span>
			</div>
			{#each data.articles.other as article}
				<a
					href={'/' + article.route}
					class="group flex flex-col items-start justify-center rounded-lg border p-8 text-lg transition-all hover:bg-primary hover:text-background"
				>
					{#if article.date}
						<span
							class="mb-2 block border-b border-b-transparent text-sm font-medium text-primary group-hover:border-b-white group-hover:font-black group-hover:text-background"
						>
							{new Date(article.date).toLocaleDateString('da-DK', { dateStyle: 'medium' })}
						</span>
					{/if}
					{article.title}
				</a>
			{/each}
		</div>
	</div>
{/if}
