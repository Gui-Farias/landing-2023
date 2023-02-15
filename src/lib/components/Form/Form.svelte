<script>
  import Input from '$lib/atoms/Input/Input.svelte';
  
  import './style.scss';
</script>

<form action="" class="form">
  <Input name='Nome'/>
  <Input name='Email' type='email'/>
  <Input name='Mensagem' type='textarea'/>

  <button class="btn btn-primary">Enviar Email</button>
</form> 
