<script>
	import { t } from 'svelte-i18n';

	import Project from '$lib/components/project/Project.svelte';

	import pcVoid from '$lib/images/proj/pc-void.webp';
	import mobileVoid from '$lib/images/proj/mobile-void.webp';

	import pcOcta from '$lib/images/proj/pc-octa.webp';
	import mobileOcta from '$lib/images/proj/mobile-octa.webp';

	import pcMyhub from '$lib/images/proj/pc-myhub.webp';
	import mobileMyhub from '$lib/images/proj/mobile-myhub.webp';

	import pcCidade from '$lib/images/proj/pc-cidade.webp';
	import mobileCidade from '$lib/images/proj/mobile-cidade.webp';
	
	import pcDreamix from '$lib/images/proj/pc-dreamix.webp';
	import mobileDreamix from '$lib/images/proj/mobile-dreamix.webp';

	import pcRodaroda from '$lib/images/proj/pc-roda.webp';
	import mobileRodaroda from '$lib/images/proj/mobile-roda.webp';

	import './style.scss';

	const titleVoid = 'Void Agency';
	const linkVoid = 'https://voidagency.com.br';

	const titleOcta = 'Octa Estúdio';
	const linkOcta = 'https://octaestudio.com/';

	const titleMyhub = 'MyHub';
	const linkMyhub = 'https://myhub.com/';

	const titleCidade = 'Cidade Dorme';
	const linkCidade = 'https://cidade.jogaejoga.com.br';

	const titleDreamix = 'Dreamix';
	const linkDreamix = 'https://dreamix.jogaejoga.com.br';

	const titleRodaroda = 'Rodaroda';
	const linkRodaroda = 'https://rodaroda.jogaejoga.com.br';
</script>

<section class="work reveal-on-scroll" id="work" aria-labelledby="work-heading" tabindex="-1">
	<h2 class="title title--h2 white" id="work-heading">{$t('work.title')}</h2>

	<Project
		title={titleOcta}
		text={$t('proj.octa.text')}
		btn={$t('btn.site', { values: { project: titleOcta } })}
		link={linkOcta}
		pc={pcOcta}
		mobile={mobileOcta}
	/>
	<Project
		title={titleVoid}
		text={$t('proj.void.text')}
		btn={$t('btn.site', { values: { project: titleVoid } })}
		link={linkVoid}
		pc={pcVoid}
		mobile={mobileVoid}
		invert
	/>
	<Project
		title={titleMyhub}
		text={$t('proj.myhub.text')}
		link={linkMyhub}
		pc={pcMyhub}
		mobile={mobileMyhub}
	/>
	<Project
		title={titleCidade}
		text={$t('proj.cidade.text')}
		btn={$t('btn.site', { values: { project: titleCidade } })}
		link={linkCidade}
		pc={pcCidade}
		mobile={mobileCidade}
		invert
	/>
	<Project
		title={titleDreamix}
		text={$t('proj.dreamix.text')}
		btn={$t('btn.site', { values: { project: titleDreamix } })}
		link={linkDreamix}
		pc={pcDreamix}
		mobile={mobileDreamix}
	/>
	<Project
		title={titleRodaroda}
		text={$t('proj.rodaroda.text')}
		btn={$t('btn.site', { values: { project: titleRodaroda } })}
		link={linkRodaroda}
		pc={pcRodaroda}
		mobile={mobileRodaroda}
		invert
	/>
</section>
