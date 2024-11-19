<script lang="ts">
	import type { PageData } from './$types';
	interface Props {
		data: PageData;
	}
	import { json } from '@sveltejs/kit';

	let { data }: Props = $props();

	const schema: string = JSON.stringify([
		{
			'@context': 'https://schema.org/',
			'@type': 'Article',
			author: [
				{
					'@type': 'Person',
					name: 'Alex Ahlgreen Westergaard'
				}
			],
			headline: data.title,
			datePublished: new Date(data.date).toISOString(),
			publisher: {
				'@type': 'Organization',
				name: 'Finansteori'
			},
			mainEntityOfPage: `http://finansteori.dk/${data.slug}`
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
				},
				{
					'@type': 'ListItem',
					position: '2',
					name: data.title,
					item: `http://finansteori.dk/${data.slug}`
				}
			]
		}
	]);
</script>

<svelte:head>
	<link rel="canonical" href="http://finansteori.dk/{data.slug}" />

	<title>{data.title}</title>
	<meta property="og:site_name" content="Finansteori" />
	<meta property="og:url" content="http://finansteori.dk/{data.slug}" />
	<meta property="og:title" content={data.title.replaceAll('"', '&quot;')} />
	<meta property="og:type" content="article" />
	{#if data.date}
		<meta property="og:article:published_time" content={new Date(data.date).toISOString()} />
	{/if}

	{@html `<script type="application/ld+json">${schema}</script>`}
</svelte:head>

<div class="mb-6 flex items-center justify-center gap-x-4 gap-y-2">
	{#if data.date}
		<span class="text-sm font-light italic">
			Udgivet: {new Date(data.date).toLocaleDateString('da-DK', { dateStyle: 'medium' })}
		</span>
	{/if}

	{#if data.category}
		<span class="text-sm font-light italic">
			Kategori: {data.category}
		</span>
	{/if}
</div>

<h1>{data.title}</h1>

<div class="wp-article">
	{@html data.body}
</div>
