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

<section class="work reveal-on-scroll" id="work" aria-labelledby="work-heading" tabindex="-1">
	<h2 class="title title--h2 white" id="work-heading">{$t('work.title')}</h2>

	<Project
		title={titleVoid}
		text={$t('proj.void.text')}
		btn={$t('btn.site', { values: { project: titleVoid } })}
		link={linkVoid}
		pc={pcVoid}
		mobile={mobileVoid}
	/>
	<Project
		title={titleOcta}
		text={$t('proj.octa.text')}
		btn={$t('btn.site', { values: { project: titleOcta } })}
		link={linkOcta}
		pc={pcOcta}
		mobile={mobileOcta}
		invert
	/>
</section>
