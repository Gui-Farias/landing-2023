<script>
	import SectionText from "$lib/components/section-text/SectionText.svelte";


  import './style.scss'

  const title = 'Gui Farias';
  const text = `Olá, sou Gui Farias, tenho 22 anos e sou formado em Análise e Desenvolvimento de Sistemas pela faculdade Impacta, sou apaixonado por tecnologia e sua capacidade de inovação. Tenho mais de 5 anos de experiência como Desenvolvedor WEB.`;
  const text2 = `Além de programar, eu amo criar. Quando não estou no computador, estou criando aventuras de RPG, desenhando ou transformando esses desenhos em código. Também adoro sair para passeios de bicicleta ou skate.`;

  
  const btn = 'Baixar CV'

</script>


<div class="bio">
  <SectionText title={title} text={text} text2={text2} btn={btn} secondary/>
</div>
