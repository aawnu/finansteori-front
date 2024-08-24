<script>
	import Finansteori from '$lib/icons/finansteori.svelte';
	import '../app.scss';
</script>

<div class="min-h-[calc(100vh-4rem)]">
	<header>
		<div class="container flex items-center justify-center py-8 md:justify-start">
			<a href="/">
				<Finansteori class="h-16" original />
			</a>
		</div>
	</header>

	<slot />
</div>

<footer>
	<div class="container mt-6 flex items-center justify-between border-t-2 border-t-slate-200 py-6">
		<div>2024 &copy; Finansteori</div>
		<div>
			<a class="text-primary hover:text-primary-300" href="/ansvar">Ansvarsfraskrivelse</a>
		</div>
	</div>
</footer>
