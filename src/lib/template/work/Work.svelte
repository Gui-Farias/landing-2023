<script>
  import Project from "$lib/components/project/Project.svelte";

  import pcDani from '$lib/images/proj/pc-dani.png';
  import mobileDani from '$lib/images/proj/mobile-dani.png';

  import pcCord from '$lib/images/proj/pc-cord.png';
  import mobileCord from '$lib/images/proj/mobile-cord.png';

  import pcLive from '$lib/images/proj/pc-live.png';
  import mobileLive from '$lib/images/proj/mobile-live.png';

  import './style.scss';

  const titleDani = 'Daniela Alves Psicologa';
  const textDani = `Saude mental é  muito importante e algo que todos precisamos, esse site é o primeiro passo para voce agendar uma conversa com a psicologa Daniela Alves.`;
  const btnDani = 'Visite o Site';
  const linkDani = 'https://danielapsicologia.com.br/';

  const titleCord = 'Cordeiro Locações';
  const textCord = `Para quem busca alugar caminhões e maquinas para a sua obra, Cordeiro Locações tem ótimos preços com diversos modelos e opções.`;
  const btnCord = 'Visite o Site';
  const linkCord = 'http://cordeiro-locacoes.vercel.app';

  const titleLive = 'Live Incentive';
  const textLive = `Durante meus serviços pela Live Incentive uma agencia de promoção e incentivo, pude desenvolver o site deles, mostrando ótimos cases de sucesso e informações sobre o mesmo.`;
  const btnLive = 'Visite o Site';
  const linkLive = 'http://liveincentive.com.br';
</script>

<div class="work" id="work">
  <h2 class="title title--h2 white">Meus Trabalhos</h2>

  <Project title={titleDani} text={textDani} btn={btnDani} link={linkDani} pc={pcDani} mobile={mobileDani}/>
  <Project title={titleCord} text={textCord} btn={btnCord} link={linkCord} pc={pcCord} mobile={mobileCord} invert/>
  <Project title={titleLive} text={textLive} btn={btnLive} link={linkLive} pc={pcLive} mobile={mobileLive}/>


</div>
