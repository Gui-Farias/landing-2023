
<script>
  import Header from '$lib/template/Header/Header.svelte';
  import Contact from '$lib/template/Contact/Contact.svelte';  
  import Footer from '$lib/template/footer/Footer.svelte';
  
  import './style.scss';

  
  import { onMount, onDestroy } from 'svelte';
  let observer;

  // Define the callback function
  const callback = (entries, observer) => {
    // Do something when an observed element intersects the viewport
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // The observed element is intersecting the viewport
        entry.target.classList.add('visible');
      }
    });
  };

  // Define the options object
  const options = {
    root: null, // Use the viewport as the root element
    rootMargin: "0px", // No margin around the viewport
    threshold: 0.3, // Trigger the callback when the observed element is fully visible
  };
  
  
onMount(() => {
 // Create a new IntersectionObserver instance
 observer = new IntersectionObserver(callback, options);

 let sections = document.querySelectorAll('section');
 sections.forEach(section => {
   observer.observe(section);
 });
})

onDestroy(() => {
  observer?.disconnect();
});



import { register, init, getLocaleFromNavigator, locale } from 'svelte-i18n';


register('en', () => import('$lib/language/en.json'));
register('pt', () => import('$lib/language/pt.json'));

init({
  fallbackLocale: 'pt',
  initialLocale: getLocaleFromNavigator(),
});

$: $locale = 'pt';
</script>

<div class="container">
  
  <Header />

  <slot/>

</div>
<Contact />
<Footer />
