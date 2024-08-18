<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>{data.title}</title>
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
