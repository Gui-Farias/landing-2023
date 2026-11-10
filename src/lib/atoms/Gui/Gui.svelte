<script>
	import { t } from 'svelte-i18n';
	import Gui from '$lib/images/Guilherme-Farias.webp';
</script>

<img src={Gui} alt={$t('about.portrait')} class="gui-photo" />

<style>
	.gui-photo {
		max-width: 420px;
		width: 80%;
	}

	@media only screen and (min-width: 828px) {
		.gui-photo {
			width: 100%;
		}
	}
</style>
