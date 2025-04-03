<script>
  import { t } from 'svelte-i18n';

  import Project from "$lib/components/project/Project.svelte";

  import pcVoid from '$lib/images/proj/pc-void.webp';
  import mobileVoid from '$lib/images/proj/mobile-void.webp';

  import pcCord from '$lib/images/proj/pc-cord.webp';
  import mobileCord from '$lib/images/proj/mobile-cord.webp';

  import pcBg from '$lib/images/proj/pc-bg.webp';
  import mobileBg from '$lib/images/proj/mobile-bg.webp';

  import './style.scss';

  const titleVoid = 'Void Agency';
  const linkVoid = 'https://voidagency.com.br';

  const titleCord = 'Gui Locações';
  const linkCord = 'https://gui-locacoes.vercel.app';

  const titleBg = 'BG Softhouse';
  const linkBg = 'https://bg-softhouse.vercel.app';
</script>


<section class="work animaItemHide itemHideTop" id="work" >
  <h2 class="title title--h2 white">{$t('work.title')}</h2>

  <Project title={titleVoid} text={$t('proj.void.text')} btn={$t('btn.site')} link={linkVoid} pc={pcVoid} mobile={mobileVoid} />
  <Project title={titleBg} text={$t('proj.bg.text')} btn={$t('btn.site')} link={linkBg} pc={pcBg} mobile={mobileBg} invert />
  <Project title={titleCord} text={$t('proj.cord.text')} btn={$t('btn.site')} link={linkCord} pc={pcCord} mobile={mobileCord} />


</section>
