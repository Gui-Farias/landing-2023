<script>
    import { t } from 'svelte-i18n';
    
    import './style.scss';
	import SectionText from '$lib/components/section-text/SectionText.svelte';
  
    $:title = $t('service.title');
    $:text = $t('service.text');
    $:list = $t('service.list');
  
  </script>
  
  <section class="servics animaItemHide itemHideTop" id="services">
  
    <div class="servics__text">
      <SectionText title={title} text={text} list={list}/>
    </div>
  
  </section>
  