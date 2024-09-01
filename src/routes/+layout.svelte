<script>
	import Finansteori from '$lib/icons/finansteori.svelte';
	import InstagramLogo from 'phosphor-svelte/lib/InstagramLogo';
	import LinkedinLogo from 'phosphor-svelte/lib/LinkedinLogo';
	import Lightswitch from '$lib/components/lightswitch.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import '../app.scss';
</script>

<ModeWatcher defaultMode="system" />

<div class="min-h-[calc(100vh-4rem)]">
	<header>
		<div class="container flex items-center justify-between py-8">
			<a href="/">
				<Finansteori class="h-16" original />
			</a>

			<nav class="flex items-center justify-end gap-x-2">
				<Lightswitch />
				<div class="mx-2 w-0 border-r-2">&nbsp;</div>
				<Button href="https://instagram.com/finansteori" variant="outline" size="icon">
					<InstagramLogo class="text-xl" />
				</Button>
				<Button href="https://linkedin.com/company/finansteoridk" variant="outline" size="icon">
					<LinkedinLogo class="text-xl" />
				</Button>
			</nav>
		</div>
	</header>

	<slot />
</div>

<footer>
	<div class="container mt-6 flex items-center justify-between border-t-2 py-6">
		<div>2024 &copy; Finansteori</div>
		<div>
			<a class="hover:text-primary-highlight text-primary" href="/ansvar">Ansvarsfraskrivelse</a>
		</div>
	</div>
</footer>
