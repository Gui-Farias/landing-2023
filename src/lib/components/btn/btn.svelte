<script>
  import { t } from 'svelte-i18n';

  import './style.scss'

  import cv from '$lib/gui-farias-cv.pdf';
  import cvEn from '$lib/cv-guiFarias-english.pdf';

  export let text = 'My text';
  export let link = '';

</script>

{#if link != ''}
<a href={link} target="_blank" rel="noopener noreferrer" aria-label="{text}">
  <button class="btn btn-primary">
    {text}
  </button>
</a>
{:else if text == 'Baixar CV'}
<a href={cv} target="_blank" rel="noopener noreferrer" download='gui-farias-cv.pdf' aria-label="{text}">
  <button class="btn btn-primary">
    {text}
  </button>
</a>
{:else if text == 'Download CV'}
<a href={cvEn} target="_blank" rel="noopener noreferrer" download='cv-guiFarias-english.pdf' aria-label="{text}">
  <button class="btn btn-primary">
    {text}
  </button>
</a>
{:else}
<button class="btn btn-primary">
  {text}
</button>
{/if}
