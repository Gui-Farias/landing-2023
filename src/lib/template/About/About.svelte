
<script>
	import Gui from "$lib/atoms/Gui/Gui.svelte";
	import SocialMenu from "$lib/components/social-menu/social-menu.svelte";
	import Bio from "$lib/organism/bio/Bio.svelte";

  import './style.scss';
  
</script>

<section class="about animaItemHide itemHideTop" id="about" >
  <div class="about__photo">
    <Gui />
    <SocialMenu/>
  </div>
  
  <Bio />
  
</section>
