<script>
	import Finansteori from '$lib/icons/finansteori.svelte';
	import '../app.scss';
</script>

<div class="min-h-[calc(100vh-4rem)]">
	<header>
		<div class="container py-4">
			<a href="/">
				<Finansteori class="h-16" original />
			</a>
		</div>
	</header>

	<slot />
</div>

<footer>
	<div class="container py-2">2024 &copy; Finansteori</div>
</footer>
