<script>
	import { t } from 'svelte-i18n';
</script>

<a href="#main-content" class="skip-link">{$t('skip')}</a>

<style>
	.skip-link {
		background-color: var(--color-primary);
		color: var(--color-dark);
		opacity: 0;
		padding: 6px 12px;
		position: relative;
		top: -50px;
		z-index: 100;
	}

	.skip-link:focus {
		top: 12px;
		opacity: 1;
	}
</style>
