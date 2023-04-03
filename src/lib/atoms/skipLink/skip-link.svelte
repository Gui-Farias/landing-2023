<script>
  import { t } from 'svelte-i18n';

</script>

<a href="#about" class="skip-link">{$t('skip')} </a>

<style>
  .skip-link{
    background-color: var(--color-primary);
    padding: 6px 12px;
    position: relative;
    top: -50px;
    z-index: 100;
  }

  .skip-link:focus{
    top: 0;
  }


</style>
