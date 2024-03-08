<script>
  import { t } from 'svelte-i18n';

  import Project from "$lib/components/project/Project.svelte";

  import pcDani from '$lib/images/proj/pc-dani.webp';
  import mobileDani from '$lib/images/proj/mobile-dani.webp';

  import pcCord from '$lib/images/proj/pc-cord.webp';
  import mobileCord from '$lib/images/proj/mobile-cord.webp';

  import pcBg from '$lib/images/proj/pc-bg.png';
  import mobileBg from '$lib/images/proj/mobile-bg.webp';

  import './style.scss';

  const titleDani = 'Daniela Alves Psicologa';
  const linkDani = 'https://danielapsicologia.com.br/';

  const titleCord = 'Cordeiro Locações';
  const linkCord = 'http://cordeiro-locacoes.vercel.app';

  const titleBg = 'BG Softhouse';
  const linkBg = 'https://bgsofthouse.com.br';
</script>

<section class="work animaItemHide itemHideTop" id="work" >
  <h2 class="title title--h2 white">{$t('work.title')}</h2>

  <Project title={titleBg} text={$t('proj.bg.text')} btn={$t('btn.site')} link={linkBg} pc={pcBg} mobile={mobileBg}/>
  <Project title={titleDani} text={$t('proj.dani.text')} btn={$t('btn.site')} link={linkDani} pc={pcDani} mobile={mobileDani} invert/>
  <Project title={titleCord} text={$t('proj.cord.text')} btn={$t('btn.site')} link={linkCord} pc={pcCord} mobile={mobileCord} />


</section>
