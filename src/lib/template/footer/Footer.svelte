<script>
  import Logo from "$lib/atoms/Logo/Logo.svelte";

  import iconMessage from '$lib/images/icon-message.png';

  import './style.scss';
</script>

<footer class="footer">
  <Logo />

  <div class="footer__email">
    <a href="mailto:hello@guifarias.com.br">
      <h2 class="title title--h2"> <img src={iconMessage} alt="" aria-hidden="true"> hello@guifarias.com.br</h2>
    </a>
  </div>

  <div class="footer__copy">
    <p>© 2023 - HTML Template by Guilherme Farias</p>
  </div>
</footer>
