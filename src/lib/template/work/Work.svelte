<script>
  import { t } from 'svelte-i18n';

  import Project from "$lib/components/project/Project.svelte";

  import pcDani from '$lib/images/proj/pc-dani.webp';
  import mobileDani from '$lib/images/proj/mobile-dani.webp';

  import pcCord from '$lib/images/proj/pc-cord.webp';
  import mobileCord from '$lib/images/proj/mobile-cord.webp';

  import pcLive from '$lib/images/proj/pc-live.webp';
  import mobileLive from '$lib/images/proj/mobile-live.webp';

  import './style.scss';

  const titleDani = 'Daniela Alves Psicologa';
  const linkDani = 'https://danielapsicologia.com.br/';

  const titleCord = 'Cordeiro Locações';
  const linkCord = 'http://cordeiro-locacoes.vercel.app';

  const titleLive = 'Live Incentive';
  const linkLive = 'http://liveincentive.com.br';
</script>

<section class="work" id="work">
  <h2 class="title title--h2 white">{$t('work.title')}</h2>

  <Project title={titleDani} text={$t('proj.dani.text')} btn={$t('btn.site')} link={linkDani} pc={pcDani} mobile={mobileDani}/>
  <Project title={titleCord} text={$t('proj.cord.text')} btn={$t('btn.site')} link={linkCord} pc={pcCord} mobile={mobileCord} invert/>
  <Project title={titleLive} text={$t('proj.live.text')} btn={$t('btn.site')} link={linkLive} pc={pcLive} mobile={mobileLive}/>


</section>
