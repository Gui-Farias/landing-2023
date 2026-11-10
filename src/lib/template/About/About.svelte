<script>
	import { t } from 'svelte-i18n';
	import Gui from '$lib/atoms/Gui/Gui.svelte';
	import SocialMenu from '$lib/components/social-menu/social-menu.svelte';
	import Bio from '$lib/organism/bio/Bio.svelte';

	import './style.scss';
</script>

<section class="about" id="about" aria-labelledby="about-heading" tabindex="-1">
	<div class="about__bio reveal-on-scroll">
		<Bio />
	</div>
	<div class="about__photo reveal-on-scroll">
		<Gui />
		<SocialMenu label={$t('about.socialLabel')} />
	</div>
</section>
