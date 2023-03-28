<script>
  import { t } from 'svelte-i18n';

	import SectionText from "$lib/components/section-text/SectionText.svelte";
  import iconHtml from '$lib/images/icon-lang/icon-html.png';
  import iconJs from '$lib/images/icon-lang/icon-js.png';
  import iconSvelte from '$lib/images/icon-lang/icon-svelte.png';
  import iconReact from '$lib/images/icon-lang/icon-react.png';
  import iconJquery from '$lib/images/icon-lang/icon-jquery.png';
  import iconCss from '$lib/images/icon-lang/icon-css3.png';
  import iconSass from '$lib/images/icon-lang/icon-sass.png';
  import iconTail from '$lib/images/icon-lang/icon-tailwindcss.png';
  import iconBootstrap from '$lib/images/icon-lang/icon-bootstrap.png';
  import iconWp from '$lib/images/icon-lang/icon-wp.png';
  import iconGit from '$lib/images/icon-lang/icon-git.png';
  import iconPhp from '$lib/images/icon-lang/icon-php.png';
  import iconSql from '$lib/images/icon-lang/icon-sql.png';
  import iconFig from '$lib/images/icon-lang/icon-fig.png';
  
	import Triangles from "$lib/atoms/triangles/triangles.svelte";

  import './style.scss';

  $:title = $t('service.title');
  $:text = $t('service.text');
  $:text2 = $t('service.text2');
  $:list = $t('service.list');

</script>

<section class="service-skil" id="services">
  <div class="service-skil__js">
    <img src={iconHtml} alt="">
    <img src={iconJs} alt="">
    <img src={iconSvelte} alt="">
    <img src={iconReact} alt="">
    <img src={iconJquery} alt="">
  </div>

  <div class="service-skil__tria">
    <Triangles />
  </div>

  <div class="service-skil__text">
    <SectionText title={title} text={text} text2={text2} list={list}/>
  </div>

  <div class="service-skil__css">
    <img src={iconCss} alt="">
    <img src={iconSass} alt="">
    <img src={iconTail} alt="">
    <img src={iconBootstrap} alt="">
    <img src={iconWp} alt="">
  </div>
  
  <div class="service-skil__back">
    <img src={iconGit} alt="">
    <img src={iconPhp} alt="">
    <img src={iconSql} alt="">
    <img src={iconFig} alt="">
  </div>
</section>
