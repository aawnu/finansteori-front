<script lang="ts">
	import Finansteori from '$lib/icons/finansteori.svelte';
	import InstagramLogo from 'phosphor-svelte/lib/InstagramLogo';
	import LinkedinLogo from 'phosphor-svelte/lib/LinkedinLogo';
	import Button from '$lib/components/ui/button/button.svelte';
	import '../app.scss';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="min-h-[calc(100vh-4rem)]">
	<header>
		<div class="container flex items-center justify-between py-4 md:py-8">
			<a href="/">
				<Finansteori class="h-16" original />
			</a>

			<nav class="flex items-center justify-end gap-x-2">
				<Button href="https://instagram.com/finansteori" variant="outline" size="icon">
					<InstagramLogo class="text-xl" />
				</Button>
				<Button href="https://linkedin.com/company/finansteoridk" variant="outline" size="icon">
					<LinkedinLogo class="text-xl" />
				</Button>
			</nav>
		</div>
	</header>

	{@render children?.()}
</div>

<footer>
	<div class="container mt-6 flex items-center justify-between border-t-2 py-6">
		<div>2024 &copy; Finansteori</div>
		<div>
			<a class="hover:text-primary-highlight text-primary" href="/ansvar">Ansvarsfraskrivelse</a>
		</div>
	</div>
</footer>
