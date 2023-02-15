<script>
	import SectionText from "$lib/components/section-text/SectionText.svelte";

  import './style.scss';


  export let title = title;
  export let text = text;
  export let btn = btn;
  export let link = link;
  export let pc = pc;
  export let mobile = mobile;
  export let invert = false;
</script>


<div class="project {invert ? 'project-invert' : ''}">
  <div class="project__text">
    <SectionText title={title} h={3} text={text} btn={btn} link={link}/>
  </div>
  <div class="project__image">
    <img src={pc} alt="">
    <img src={mobile} alt="" class="project__image-mobile">
  </div>
</div>
