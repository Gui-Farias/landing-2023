<script>
  import { t } from 'svelte-i18n';
	import SectionText from "$lib/components/section-text/SectionText.svelte";

  import './style.scss'

  const title = 'Gui Farias';
  $:text = $t('about.text');
  $:text2 = $t('about.text2');
  $:text3 = $t('about.text3');

  $:btn = $t('btn.cv');

</script>


<div class="bio">
  <SectionText title={title} text={text} text3={text3} text2={text2} btn={btn} secondary/>
</div>
