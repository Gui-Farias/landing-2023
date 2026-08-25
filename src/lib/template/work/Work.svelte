<script>
	import { t } from 'svelte-i18n';

	import Project from '$lib/components/project/Project.svelte';

	import pcVoid from '$lib/images/proj/pc-void.webp';
	import mobileVoid from '$lib/images/proj/mobile-void.webp';

	import pcOcta from '$lib/images/proj/pc-octa.webp';
	import mobileOcta from '$lib/images/proj/mobile-octa.webp';

	import './style.scss';

	const titleVoid = 'Void Agency';
	const linkVoid = 'https://voidagency.com.br';

	const titleOcta = 'Octa Estúdio';
	const linkOcta = 'https://octaestudio.com/';
</script>

<section class="work animaItemHide itemHideTop" id="work">
	<h2 class="title title--h2 white">{$t('work.title')}</h2>

	<Project
		title={titleVoid}
		text={$t('proj.void.text')}
		btn={$t('btn.site')}
		link={linkVoid}
		pc={pcVoid}
		mobile={mobileVoid}
	/>
	<Project
		title={titleOcta}
		text={$t('proj.octa.text')}
		btn={$t('btn.site')}
		link={linkOcta}
		pc={pcOcta}
		mobile={mobileOcta}
		invert
	/>
</section>
