<script>
  import { t } from 'svelte-i18n';

  import Input from '$lib/atoms/Input/Input.svelte';
  import emailjs from '@emailjs/browser';


  import './style.scss';

  import { onMount } from 'svelte';

 onMount(() => {
   
})

function sendEmail(e) {
  emailjs.init('PjfDy2itT3FG_Arvm');

  const serviceID = 'default_service';
  const templateID = 'template_uvfo2el';

  var templateParams = {
    name: e.target[0].value,
    email: e.target[1].value,
    message: e.target[2].value
  };

  emailjs.send(serviceID, templateID, templateParams)
    .then((response) => {
      console.log("Email enviado com sucesso", response.status, response.text);
      alert("Sua mensagem foi enviada, obrigado!");
      document.getElementById('form')?.reset(); // Clear the form fields
    }, (error) => {
      console.error("Error:", error);
      alert("Oops! Algo deu errado com sua mensagem, por favor atualizar e mandar novamente");
    });
  }
 
</script>

<form action="" class="form" id="form" on:submit|preventDefault={sendEmail}>
  <Input name={$t('form.name')}/>
  <Input name='Email:' type='email'/>
  <Input name={$t('form.message')} type='textarea'/>

  <button class="btn btn-primary" id="btn-submit">{$t('btn.form')}</button>
</form> 
