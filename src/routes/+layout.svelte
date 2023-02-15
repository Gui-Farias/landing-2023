
<script>
	import Contact from '$lib/template/Contact/Contact.svelte';

  
  import Footer from '$lib/template/footer/Footer.svelte';
import Header from '$lib/template/Header/Header.svelte';
  
  import './style.scss'
</script>

<div class="container">
  
  <Header />

  <slot/>

</div>

<Contact />
<Footer />
