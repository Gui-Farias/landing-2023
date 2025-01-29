<script>
  import { t } from 'svelte-i18n';
	import SectionText from "$lib/components/section-text/SectionText.svelte";

  import './style.scss'

  const anoAtual = new Date().getFullYear();
  const mesAtual = new Date().getMonth();
  
  const yearsOld = anoAtual - (mesAtual > 4 ? 2000 : 2001)

  const title = 'Gui Farias';
  $:text = $t('about.text', {values: {yearsOld}});
  $:text2 = $t('about.text2');
  $:text3 = $t('about.text3');

  $:btn = $t('btn.cv');

</script>


<div class="bio">
  <SectionText title={title} text={text} text3={text3} text2={text2} btn={btn} secondary/>
</div>
