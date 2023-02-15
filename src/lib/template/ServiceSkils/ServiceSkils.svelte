<script>
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


  import './style.scss';

  const title = 'Serviços e skills';
  const text = `Sou um desenvolvedor WEB experiente com mais de 4 anos de experiência e diversos sites prontos e onlines. `
  const text2 = `Possuo habilidades sólidas em HTML, CSS (Scss, Bootstrap, Tailwind), JS ES6 (Jquery, React, Svelte), PHP (Wordpress), além de conhecimento avançado em UI/UX, regras SEO, analytics e WCAG (acessibilidade) .`
  const list = 
  ['Desenvolvimento de sites responsivo', 
  'Desenvolvimento de e-commerce.', 
  'Atualizações em site no ar.', 
  'Melhoraria no SEO, performance e acessibilidade.', 
  'Gerenciamento de campanha Google ADS.', 
  'Criação de HTML para email marketing.', 
  'Criação e suporte a email com @empresa']
</script>

<div class="service-skil" id="services">
  <div class="service-skil__js">
    <img src={iconHtml} alt="">
    <img src={iconJs} alt="">
    <img src={iconSvelte} alt="">
    <img src={iconReact} alt="">
    <img src={iconJquery} alt="">
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
</div>
