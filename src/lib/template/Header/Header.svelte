<script>
	import Logo from '$lib/atoms/Logo/Logo.svelte';
	import SkipLink from '$lib/atoms/skipLink/skip-link.svelte';
	import MainMenu from '$lib/components/main-menu/MainMenu.svelte';

	import './style.scss';

	let scrollY = 0;
</script>

<svelte:window bind:scrollY />

<header class="header-shell" class:header-shell--scrolled={scrollY > 0}>
	<div class="container">
		<SkipLink />
		<div class="header">
			<Logo />
			<MainMenu />
		</div>
	</div>
</header>
