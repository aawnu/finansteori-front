<script lang="ts">
	import { routing } from '../cache/routes';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Finansteori</title>
	<meta
		name="description"
		content="Tag kontrol over din økonomi, før den tager kontrol over dig."
	/>
</svelte:head>

<div class="container flex items-center py-12">
	<div class="space-y-2">
		<h1
			class="max-w-screen-md text-center font-lora text-4xl font-bold leading-tight md:text-left md:text-6xl"
		>
			Kontroller din økonomi, før den kontrollere dig.
		</h1>
		<p
			class="max-w-screen-sm text-center text-lg font-light leading-relaxed md:text-left md:text-2xl"
		>
			22% af unge danskere mellem 18 og 35 har problemer med deres økonomi ifølge Finans Danmark i
			2023.
		</p>
		<p class="!mt-4 max-w-screen-sm font-medium italic leading-relaxed text-red-400">
			* Artiklerne på denne hjemmeside er en genskabelse af en kopi fra 2022, være opmærksom på at
			nogle informationer kan være udløbet. Alt investering bære risikoen for at miste sine penge,
			invester kun de penge du kan undvære.
		</p>
	</div>
</div>

<div class="container space-y-4 py-4 text-xl md:text-2xl">
	{#each data.articles as article}
		<a
			href={'/' + article.route}
			class="block leading-snug text-primary hover:font-bold hover:text-primary-300"
		>
			<span class="leading-snug" role="heading" aria-level="1">{article.title}</span>
			{#if article.date}
				<span
					class="ml-1 inline-block rounded-lg bg-slate-100 px-2 py-1 text-xs !font-normal italic leading-tight text-foreground md:text-sm"
				>
					{new Date(article.date).toLocaleDateString('da-DK', { dateStyle: 'medium' })}
				</span>
			{/if}
		</a>
	{/each}
</div>
