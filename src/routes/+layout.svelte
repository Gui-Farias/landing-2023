<script lang="ts">
	import Header from '$lib/template/Header/Header.svelte';
	import Contact from '$lib/template/Contact/Contact.svelte';
	import Footer from '$lib/template/footer/Footer.svelte';
	import Wpp from '$lib/atoms/Wpp/Wpp.svelte';

	import './style.scss';

	import en from '$lib/language/en.json';
	import pt from '$lib/language/pt.json';
	import { addMessages, dictionary, init } from 'svelte-i18n';

	// The app ships complete dictionaries. Avoid merging repeated lists on reload.
	dictionary.set({});
	addMessages('en', en);
	addMessages('pt', pt);

	init({
		fallbackLocale: 'pt',
		initialLocale: 'pt'
	});

	import { onMount } from 'svelte';

	onMount(() => {
		if (!('IntersectionObserver' in window)) return;

		const observer = new IntersectionObserver((entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					entry.target.classList.add('revealed');
					observer.unobserve(entry.target);
				}
			}
		});
		document.querySelectorAll('.reveal-on-scroll').forEach((item) => observer.observe(item));
		return () => observer.disconnect();
	});
</script>

<Header />

<main id="main-content" tabindex="-1">
	<div class="container">
		<slot />
	</div>
	<Contact />
</main>
<Footer />
<Wpp floating />
