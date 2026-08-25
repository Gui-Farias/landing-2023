<script>
	import Triangles from '$lib/atoms/triangles/triangles.svelte';
	import SectionText from '$lib/components/section-text/SectionText.svelte';

	import './style.scss';

	export let title = '';
	export let text = '';
	export let btn = '';
	export let link = '';
	export let pc = '';
	export let mobile = '';
	export let invert = false;
</script>

<div class="project {invert ? 'project-invert' : ''}">
	<div class="project__text">
		<SectionText {title} h={3} {text} {btn} {link} />
	</div>
	<div class="project__image">
		<img src={pc} alt="" />
		<img src={mobile} alt="" class="project__image-mobile" />
	</div>
	<div class="project__triangles">
		<Triangles />
	</div>
</div>
