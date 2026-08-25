<script lang="ts">
	import { t } from 'svelte-i18n';

	import Input from '$lib/atoms/Input/Input.svelte';
	import emailjs from '@emailjs/browser';

	import './style.scss';

	function sendEmail(event: SubmitEvent) {
		emailjs.init('PjfDy2itT3FG_Arvm');

		const form = event.currentTarget;

		if (!(form instanceof HTMLFormElement)) {
			return;
		}

		const [name, email, message] = Array.from(form.elements).filter(
			(element): element is HTMLInputElement | HTMLTextAreaElement =>
				element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement
		);

		const serviceID = 'default_service';
		const templateID = 'template_uvfo2el';

		const templateParams = {
			name: name?.value ?? '',
			email: email?.value ?? '',
			message: message?.value ?? ''
		};

		emailjs.send(serviceID, templateID, templateParams).then(
			(response) => {
				console.log('Email enviado com sucesso', response.status, response.text);
				alert('Sua mensagem foi enviada, obrigado!');
				form.reset();
			},
			(error) => {
				console.error('Error:', error);
				alert('Oops! Algo deu errado com sua mensagem, por favor atualizar e mandar novamente');
			}
		);
	}
</script>

<form action="" class="form" id="form" on:submit|preventDefault={sendEmail}>
	<Input name={$t('form.name')} />
	<Input name="Email:" type="email" />
	<Input name={$t('form.message')} type="textarea" />

	<button class="btn btn-primary" id="btn-submit">{$t('btn.form')}</button>
</form>
