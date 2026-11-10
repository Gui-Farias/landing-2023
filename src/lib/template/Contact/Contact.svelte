<script lang="ts">
	import { t } from 'svelte-i18n';

	import Cloud from '$lib/atoms/Cloud/Cloud.svelte';
	import Form from '$lib/components/Form/Form.svelte';
	import SectionText from '$lib/components/section-text/SectionText.svelte';
	import SocialMenu from '$lib/components/social-menu/social-menu.svelte';
	import './style.scss';

	import Eu from '$lib/images/Eu.webp';

	import { onMount } from 'svelte';
	let contact: HTMLElement;
	let cloud: HTMLDivElement;

	onMount(() => {
		if (
			!('IntersectionObserver' in window) ||
			matchMedia('(prefers-reduced-motion: reduce)').matches
		)
			return;

		let clipTimer: number | undefined;
		const observer = new IntersectionObserver(
			(entries) => {
				if (!entries.some((entry) => entry.isIntersecting)) return;
				cloud.classList.add('cloud-show');
				clipTimer = window.setTimeout(() => contact.classList.add('contact-clip'), 1400);
				observer.disconnect();
			},
			{ threshold: 0.3 }
		);
		observer.observe(contact);
		return () => {
			observer.disconnect();
			window.clearTimeout(clipTimer);
		};
	});
</script>

<div class="all-contact">
	<div class="contact__cloud" bind:this={cloud} aria-hidden="true">
		<Cloud />
	</div>
	<section
		class="contact"
		id="contact"
		aria-labelledby="contact-heading"
		tabindex="-1"
		bind:this={contact}
	>
		<div class="container">
			<h2 class="title title--h2" id="contact-heading">{$t('contact.title')}</h2>
			<div class="contact__text">
				<div class="contact__content">
					<SectionText
						title={$t('contact.subTitle')}
						headingId="contact-form-heading"
						h={3}
						text={$t('contact.text')}
						secondary
					/>

					<Form />
				</div>
				<div class="contact__social">
					<h3 class="title title--h3 blue">{$t('contact.online')}</h3>
					<img src={Eu} alt="" class="contact__eu" />
					<SocialMenu label={$t('contact.socialLabel')} />
				</div>
			</div>
		</div>
	</section>
</div>
