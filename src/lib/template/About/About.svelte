
<script>
	import Gui from "$lib/atoms/Gui/Gui.svelte";
	import SocialMenu from "$lib/components/social-menu/social-menu.svelte";
	import Bio from "$lib/organism/bio/Bio.svelte";

  import './style.scss';
  
</script>

<section class="about " id="about" >
  <div class="about__photo animaItemHide itemHideTop">
    <Gui />
    <SocialMenu/>
  </div>
  <div class="about__bio animaItemHide itemHideTop">
    <Bio />
  </div>
  
</section>
