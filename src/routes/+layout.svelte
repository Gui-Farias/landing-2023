<script lang="ts">
	import Header from '$lib/template/Header/Header.svelte';
	import Contact from '$lib/template/Contact/Contact.svelte';
	import Footer from '$lib/template/footer/Footer.svelte';

	import './style.scss';

	import en from '$lib/language/en.json';
	import pt from '$lib/language/pt.json';
	import { addMessages, init } from 'svelte-i18n';

	addMessages('en', en);
	addMessages('pt', pt);

	init({
		fallbackLocale: 'pt',
		initialLocale: 'pt'
	});

	import { onMount } from 'svelte';

	let itemsAnima: NodeListOf<HTMLElement>;

	function animaScroll() {
		// Loop através de cada item e verifica se está na tela
		itemsAnima?.forEach((item) => {
			const rect = item.getBoundingClientRect();
			const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

			// Se o item estiver pelo menos 85% visível, adiciona a classe 'visible'
			rect.top < viewportHeight * 0.85 && rect.bottom > 0
				? item.classList.add('visible')
				: item.classList.remove('visible');
		});
	}

	// Pega os items e adiciona o evento
	onMount(() => {
		itemsAnima = document.querySelectorAll('.animaItemHide');
		window.addEventListener('scroll', animaScroll);
		animaScroll();

		return () => {
			window.removeEventListener('scroll', animaScroll);
		};
	});
</script>

<div class="container">
	<Header />

	<slot />
</div>
<Contact />
<Footer />
