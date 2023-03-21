<script>

  import './style.scss'

  import cv from '$lib/gui-farias-cv.pdf';

  export let text = 'My text';
  export let link = '';

</script>

{#if link != ''}
<a href={link} target="_blank" rel="noopener noreferrer">
  <button class="btn btn-primary">
    {text}
  </button>
</a>
{:else if text == 'Baixar CV'}
<a href={cv} target="_blank" rel="noopener noreferrer" download='gui-farias-cv.pdf'>
  <button class="btn btn-primary">
    {text}
  </button>
</a>
{:else}
<button class="btn btn-primary">
  {text}
</button>
{/if}
