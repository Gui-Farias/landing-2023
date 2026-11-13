<script lang="ts">
	import { onMount, tick } from 'svelte';
	import { t } from 'svelte-i18n';

	import Input from '$lib/atoms/Input/Input.svelte';
	import { whatsappLink } from '$lib/whatsapp';

	import './style.scss';

	let ready = false;
	let errors = { name: false, message: false };

	onMount(() => {
		ready = true;
	});

	async function openWhatsApp(event: SubmitEvent & { currentTarget: HTMLFormElement }) {
		event.preventDefault();
		const form = event.currentTarget;

		const values = new FormData(form);
		const name = String(values.get('name') ?? '').trim();
		const message = String(values.get('message') ?? '').trim();
		errors = { name: !name, message: !message };

		if (errors.name || errors.message) {
			const firstInvalid = errors.name ? 'name' : 'message';
			await tick();
			form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
			return;
		}

		const text = $t('form.whatsappText', { values: { name, message } });
		window.location.assign(whatsappLink(text));
	}

	function clearValidation({ target }: Event) {
		if (!(target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement)) return;
		if (target.name === 'name' || target.name === 'message') {
			if (target.value.trim()) errors[target.name] = false;
		}
	}
</script>

{#if ready}
	<form
		method="post"
		class="form"
		id="form"
		aria-labelledby="contact-form-heading"
		aria-describedby="contact-form-hint"
		novalidate
		on:submit={openWhatsApp}
		on:input={clearValidation}
	>
		<p class="visually-hidden" role="status">
			{errors.name || errors.message ? $t('form.fixErrors') : ''}
		</p>
		<Input
			name="name"
			label={$t('form.name')}
			autocomplete="name"
			error={errors.name ? $t('form.nameRequired') : undefined}
		/>
		<Input
			name="message"
			label={$t('form.message')}
			type="textarea"
			error={errors.message ? $t('form.messageRequired') : undefined}
		/>

		<button type="submit" class="btn btn-primary" id="btn-submit">{$t('btn.form')}</button>
	</form>
{:else}
	<div class="form">
		<a class="btn btn-primary" target="_blank" rel="noopener noreferrer" href={whatsappLink()}>
			{$t('btn.form')}
		</a>
	</div>
{/if}
