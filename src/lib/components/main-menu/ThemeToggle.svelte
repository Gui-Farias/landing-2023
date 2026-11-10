<script>
	import { onMount } from 'svelte';
	import { t } from 'svelte-i18n';

	let light = false;
	$: label = $t(light ? 'theme.useDark' : 'theme.useLight');

	onMount(() => {
		light = document.documentElement.dataset.theme === 'light';
	});

	function toggleTheme() {
		light = !light;
		const theme = light ? 'light' : 'dark';
		document.documentElement.dataset.theme = theme;

		try {
			localStorage.setItem('guifarias-theme', theme);
		} catch {
			// The theme still changes for the current page.
		}
	}
</script>

<button type="button" aria-label={label} title={label} on:click={toggleTheme}>
	<svg
		width="42"
		height="42"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="1.8"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		{#if light}
			<path d="M20.9 13.3A9 9 0 0 1 10.7 3.1 9 9 0 1 0 20.9 13.3Z" />
		{:else}
			<circle cx="12" cy="12" r="4" />
			<path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
		{/if}
	</svg>
</button>

<style>
	button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-width: 44px;
		min-height: 44px;
		border-radius: 50%;
		color: var(--theme-accent);
		cursor: pointer;
	}

	button:hover {
		color: var(--theme-accent-hover);
	}

	button:focus-visible {
		outline: 2px solid var(--theme-accent);
		outline-offset: 2px;
	}
</style>
