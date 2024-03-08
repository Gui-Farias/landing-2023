<script>
  import Logo from "$lib/atoms/Logo/Logo.svelte";
	import Triangles from "$lib/atoms/triangles/triangles.svelte";

  import iconMessage from '$lib/images/icon-message.png';

  import './style.scss';

  const dataAtual = new Date();
  const anoAtual = dataAtual. getFullYear();
</script>

<footer class="footer">
  <div class="footer__triangles">
    <Triangles />
  </div>
  

  <a href="/">
    <Logo />
  </a>

  <div class="footer__email">
    <a href="mailto:ola@guifarias.com">
      <h2 class="title title--h2"> <img src={iconMessage} alt="" aria-hidden="true"> ola@guifarias.com</h2>
    </a>
  </div>

  <div class="footer__copy">
    <p>© {anoAtual} - HTML Template Guilherme Farias</p>
  </div>
</footer>
