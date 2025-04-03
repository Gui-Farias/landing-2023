<script>
  import { t } from 'svelte-i18n';

import Cloud from '$lib/atoms/Cloud/Cloud.svelte';
import Form from '$lib/components/Form/Form.svelte';
import SectionText from '$lib/components/section-text/SectionText.svelte';
import SocialMenu from '$lib/components/social-menu/social-menu.svelte';
import './style.scss';

import Eu from '$lib/images/Eu.webp';
  
import { onMount, onDestroy } from 'svelte';
  let observer;

  // Define the callback function
  const callback = (entries, observer) => {
    // Do something when an observed element intersects the viewport
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // animation for cloud entres
        let cloud = document.querySelector('.contact__cloud');
        cloud?.classList.add('cloud-show');

        setTimeout(() => {
          entry.target.classList.add('contact-clip');
        }, 1400)

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

 let contact = document.getElementById('contact');
 observer.observe(contact);
})

onDestroy(() => {
  observer?.disconnect();
});
</script>

<div class="all-contact">
  <div class="contact__cloud">
    <Cloud />
  </div>
  <section class="contact animaItemHide itemHideTop" id="contact">
    <div class="container">
      <h2 class="title title--h2">{$t('contact.title')}</h2>
      <div class="contact__text">
        <div class="contact__content">
          <SectionText title={$t('contact.subTitle')} h={3} text={$t('contact.text')} secondary/>
    
          <Form />
        </div>
        <div class="contact__social">
          <h3 class="title title--h3 blue">{$t('contact.online')}</h3>
          <img src={Eu} alt="" class="contact__eu">
          <SocialMenu />
        </div>
      </div>
    </div>
  </section>
</div>
