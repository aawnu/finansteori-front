<script lang="ts">
	import Sun from 'phosphor-svelte/lib/Sun';
	import Moon from 'phosphor-svelte/lib/Moon';

	import { toggleMode } from 'mode-watcher';
	import { Button } from '$lib/components/ui/button/index.js';
</script>

<Button on:click={toggleMode} variant="outline" size="icon">
	<Sun class="rotate-0 scale-100 text-xl transition-all dark:-rotate-90 dark:scale-0" />
	<Moon class="absolute rotate-90 scale-0 text-xl transition-all dark:rotate-0 dark:scale-100" />
	<span class="sr-only">Toggle theme</span>
</Button>
