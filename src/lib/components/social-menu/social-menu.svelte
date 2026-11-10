<script>
	import Codepen from '$lib/atoms/Codepen/Codepen.svelte';
	import GitHub from '$lib/atoms/GitHub/GitHub.svelte';
	import Linkedin from '$lib/atoms/Likedin/Linkedin.svelte';
	import Wpp from '$lib/atoms/Wpp/Wpp.svelte';

	import './style.scss';

	export let label;
</script>

<nav class="social-menu" aria-label={label}>
	<ul class="social-menu__list">
		<li class="social-menu__item"><Linkedin /></li>
		<li class="social-menu__item"><Codepen /></li>
		<li class="social-menu__item"><GitHub /></li>
		<li class="social-menu__item"><Wpp /></li>
	</ul>
</nav>
