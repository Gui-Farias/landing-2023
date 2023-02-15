<script>
  import Form from '$lib/components/Form/Form.svelte';
import SectionText from '$lib/components/section-text/SectionText.svelte';
	import SocialMenu from '$lib/components/social-menu/social-menu.svelte';
import './style.scss';


const title = 'Entre em contato'
const text = `Tem uma empresa ou um negócio e pretende desenvolver um site ou aplicativo para alavancar ele, uma proposta de trabalho ou até mesmo sugestões, críticas, entre em contato por esse formulário, que ficarei grato em responder!`
</script>

<div class="contact" id="contact">
  <div class="container">
    <h2 class="title title--h2">Contato</h2>
    <div class="contact__text">
      <div class="contact__content">
        <SectionText title={title} h={3} text={text} secondary/>
  
        <Form />
      </div>
      <div class="contact__social">
        <h3 class="title title--h3 blue">Encontre me online tambem!</h3>
        <SocialMenu />
      </div>
    </div>
  </div>
</div>
