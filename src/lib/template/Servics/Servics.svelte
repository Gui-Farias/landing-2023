<script lang="ts">
	import { json, t } from 'svelte-i18n';

	import './style.scss';
	import SectionText from '$lib/components/section-text/SectionText.svelte';

	$: title = $t('service.title');
	$: text = $t('service.text');
	$: list = $json('service.list') as string[];
</script>

<section
	class="servics reveal-on-scroll"
	id="services"
	aria-labelledby="services-heading"
	tabindex="-1"
>
	<SectionText {title} headingId="services-heading" {text} {list} />
</section>
