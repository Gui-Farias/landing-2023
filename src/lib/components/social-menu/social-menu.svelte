<script>
  
  import Codepen from '$lib/atoms/Codepen/Codepen.svelte';
	import GitHub from '$lib/atoms/GitHub/GitHub.svelte';
	import Insta from '$lib/atoms/Insta/Insta.svelte';
  import Linkedin from '$lib/atoms/Likedin/Linkedin.svelte';
	import Wpp from '$lib/atoms/Wpp/Wpp.svelte';

  import './style.scss'
</script>



<nav class="social-menu">
  <ul class="social-menu__list">
    <li class="social-menu__item"> <Linkedin /> </li>
    <li class="social-menu__item"> <Codepen /> </li>
    <li class="social-menu__item"> <GitHub /> </li>
    <li class="social-menu__item"> <Insta /> </li>
    <li class="social-menu__item"> <Wpp /> </li>
  </ul>
</nav>
