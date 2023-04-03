<script>
	import Logo from '$lib/atoms/Logo/Logo.svelte';
	import SkipLink from '$lib/atoms/skipLink/skip-link.svelte';
	import MainMenu from '$lib/components/main-menu/MainMenu.svelte';
  
  import './style.scss'
</script>

<SkipLink/>
<header class="header">
  <Logo />
  <MainMenu />
</header>
