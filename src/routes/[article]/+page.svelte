<script lang="ts">
	import type { PageData } from './$types';
	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
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
</svelte:head>

<div class="mb-6">
	<span class="text-sm font-light italic">
		{#if data.date}
			Udgivet: {new Date(data.date).toLocaleDateString('da-DK', { dateStyle: 'medium' })}
		{:else}
			Udgivet: &mdash;&quest;&mdash;
		{/if}
	</span>
</div>

<h1>{data.title}</h1>

<div class="wp-article">
	{@html data.body}
</div>
