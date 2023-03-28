<script>
  import './style.scss'
  import { t, locale } from 'svelte-i18n';

  import pt from '$lib/language/icon-pt.png';
  import en from '$lib/language/icon-en.png';

</script>


<nav class="nav-main header__menu">
  <ul class="nav-main__list">
    <li class="nav-main__item"><a href="#about">{$t('menu.about')}</a></li>
    <li class="nav-main__item"><a href="#services">{$t('menu.service')}</a></li>
    <li class="nav-main__item"><a href="#work">{$t('menu.work')}</a></li>
    <li class="nav-main__item"><a href="#contact">{$t('menu.contact')}</a></li>
    <button on:click={() => ($locale = 'pt')} aria-label="Site em portugues" lang='pt'> <img src={pt}> </button>
    <button on:click={() => ($locale = 'en')} aria-label="Site in English" lang='en'> <img src={en}> </button>
  </ul>
</nav>

<style>
  button {
    cursor: pointer;
  }
</style>
