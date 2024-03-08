
<script>
  import Header from '$lib/template/Header/Header.svelte';
  import Contact from '$lib/template/Contact/Contact.svelte';  
  import Footer from '$lib/template/footer/Footer.svelte';
  
  import './style.scss';

  import { register, init, getLocaleFromNavigator, locale } from 'svelte-i18n';


  register('en', () => import('$lib/language/en.json'));
  register('pt', () => import('$lib/language/pt.json'));

  init({
    fallbackLocale: 'pt',
    initialLocale: getLocaleFromNavigator(),
  });

  $: $locale = 'pt';



  import { onMount } from 'svelte';
  import { afterUpdate } from 'svelte';

  let itemsAnima;

  function animaScroll() {
    // Loop através de cada item e verifica se está na tela
    itemsAnima.forEach(item => {
        const rect = item.getBoundingClientRect();
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

        // Se o item estiver pelo menos 85% visível, adiciona a classe 'visible'
        rect.top < viewportHeight * 0.85 && rect.bottom > 0 ? item.classList.add('visible') :item.classList.remove('visible') 
    });
  }

  // Pega os items e adiciona o evento 
  onMount(() => {
    itemsAnima = document.querySelectorAll('.animaItemHide');
    window.addEventListener('scroll', animaScroll);
  });
  

  // Remove o evento quando o componente é desmontado
  afterUpdate(() => {
    return () => {
        window.removeEventListener('scroll', animaScroll);
    };
  });
</script>

<div class="container">
  
  <Header />

  <slot/>

</div>
<Contact />
<Footer />
