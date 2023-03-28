<script>
  import { t } from 'svelte-i18n';
	import SectionText from "$lib/components/section-text/SectionText.svelte";

  import './style.scss'

  const title = 'Gui Farias';
  $:text = $t('about.text');
  $:text2 = $t('about.text2');

  $:btn = $t('btn.cv');

</script>


<div class="bio">
  <SectionText title={title} text={text} text2={text2} btn={btn} secondary/>
</div>
