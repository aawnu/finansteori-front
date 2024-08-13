<script>
	import Finansteori from '$lib/icons/finansteori.svelte'
</script>

<header>
	<div class="container mx-auto">
		<div class="p-4">
			<h1 class="font-yrsa text-xl font-medium">
				<a href="/"><Finansteori class="h-12" type="logo" /></a>
			</h1>
		</div>
	</div>
</header>

<main>
	<slot />
</main>
