<script>
	import { t } from 'svelte-i18n';
	import Logo from '$lib/atoms/Logo/Logo.svelte';
	import Triangles from '$lib/atoms/triangles/triangles.svelte';

	import './style.scss';

	const dataAtual = new Date();
	const anoAtual = dataAtual.getFullYear();
</script>

<footer class="footer">
	<div class="footer__triangles">
		<Triangles />
	</div>

	<a href="/" aria-label={$t('footer.home')}>
		<Logo />
	</a>

	<div class="footer__email">
		<a class="title title--h2" href="mailto:gui.farias@outlook.com.br">
			gui.farias@outlook.com.br
		</a>
	</div>

	<div class="footer__copy">
		<p>© {anoAtual} - HTML Template Guilherme Farias</p>
	</div>
</footer>
