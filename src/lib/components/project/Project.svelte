<script lang="ts">
	import { t } from 'svelte-i18n';
	import Triangles from '$lib/atoms/triangles/triangles.svelte';
	import SectionText from '$lib/components/section-text/SectionText.svelte';

	import './style.scss';

	type Preview = { src: string; width: number; height: number };

	export let title = '';
	export let text = '';
	export let btn = 'false';
	export let link = '';
	export let pc: Preview;
	export let mobile: Preview;
	export let invert = false;
</script>

<article class="project {invert ? 'project-invert' : ''}">
	<div class="project__text">
		<SectionText {title} h={3} {text} {btn} {link} />
	</div>
	<div class="project__image">
		<img {...pc} alt={$t('proj.preview', { values: { project: title } })} loading="lazy" />
		<img {...mobile} alt="" class="project__image-mobile" loading="lazy" />
	</div>
	<div class="project__triangles">
		<Triangles />
	</div>
</article>
