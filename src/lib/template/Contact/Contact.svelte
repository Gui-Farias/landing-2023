<script>
  import { t } from 'svelte-i18n';

import Cloud from '$lib/atoms/Cloud/Cloud.svelte';
import Form from '$lib/components/Form/Form.svelte';
import SectionText from '$lib/components/section-text/SectionText.svelte';
import SocialMenu from '$lib/components/social-menu/social-menu.svelte';
import './style.scss';

</script>

<div class="contact__cloud">
  <Cloud />
</div>
<section class="contact" id="contact">
  <div class="container">
    <h2 class="title title--h2">{$t('contact.title')}</h2>
    <div class="contact__text">
      <div class="contact__content">
        <SectionText title={$t('contact.subTitle')} h={3} text={$t('contact.text')} secondary/>
  
        <Form />
      </div>
      <div class="contact__social">
        <h3 class="title title--h3 blue">{$t('contact.online')}</h3>
        <SocialMenu />
      </div>
    </div>
  </div>
</section>
