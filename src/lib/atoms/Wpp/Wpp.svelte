<script>
	import { t } from 'svelte-i18n';

	import Wpp from '$lib/images/icon-wpp.png';
	import { whatsappLink } from '$lib/whatsapp';

	export let floating = false;
</script>

<a
	class:floating
	href={floating ? whatsappLink() : whatsappLink('Olá, estou vindo do seu site e gostaria ...')}
	aria-label={$t('contact.whatsappLabel')}
	target="_blank"
	rel="noopener noreferrer"
>
	<img src={Wpp} alt="" />
	{#if floating}
		<span>WhatsApp</span>
	{/if}
</a>

<style>
	.floating {
		position: fixed;
		right: calc(1rem + env(safe-area-inset-right, 0px));
		bottom: calc(1rem + env(safe-area-inset-bottom, 0px));
		z-index: 110;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		box-sizing: border-box;
		min-width: 3.5rem;
		min-height: 3.5rem;
		padding: 0.5rem 0.875rem;
		border: 1px solid var(--theme-accent);
		border-radius: 2rem;
		background: var(--theme-surface);
		color: var(--theme-text);
		box-shadow: 0 4px 12px rgb(0 0 0 / 40%);
		font-weight: 600;
	}

	.floating img {
		width: 1.75rem;
		height: 1.75rem;
		object-fit: contain;
		filter: var(--theme-icon-filter);
	}

	.floating:hover {
		background: var(--whatsapp-hover);
	}

	.floating:focus-visible {
		outline: 3px solid var(--theme-text);
		outline-offset: 2px;
		box-shadow: 0 0 0 6px var(--theme-surface);
	}

	@media (max-width: 480px) {
		.floating span {
			display: none;
		}
	}
</style>
