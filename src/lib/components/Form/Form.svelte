<script>
  import Input from '$lib/atoms/Input/Input.svelte';
  import emailjs from '@emailjs/browser';


  import './style.scss';

  import { onMount } from 'svelte';

 onMount(() => {
   
   //   const submitButton = document.getElementById("btn-submit");
   
//   submitButton.addEventListener("click", (event) => {
//     event.preventDefault();

//     const name = document.getElementById("Nome:")?.value;
//     const email = document.getElementById("Email:")?.value;
//     const mesage = document.getElementById("Mensagem:")?.value;

//     if (!name || !email || !mesage) {
//       alert('Por favor preencha todo os campos do formulario!')
//     } else {
//       console.log('ok');
//     }

//   });
})

function sendEmail(e) {
  emailjs.init('JL8Mpz8IZ3POXOuvS');

  const serviceID = 'default_service';
  const templateID = 'template_03020sb';

  var templateParams = {
    name: e.target[0].value,
    email: e.target[1].value,
    message: e.target[2].value
  };

  emailjs.send(serviceID, templateID, templateParams)
    .then((response) => {
      console.log("Email enviado com sucesso", response.status, response.text);
      alert("Sua mensagem foi enviada, obrigado!");
      document.getElementById('form').reset(); // Clear the form fields
    }, (error) => {
      console.error("Error:", error);
      alert("Oops! Algo deu errado com sua mensagem, por favor atualizar e mandar novamente");
    });
  }
 

</script>

<form action="" class="form" id="form" on:submit|preventDefault={sendEmail}>
  <Input name='Nome:'/>
  <Input name='Email:' type='email'/>
  <Input name='Mensagem:' type='textarea'/>

  <button class="btn btn-primary" id="btn-submit">Enviar Email</button>
</form> 
