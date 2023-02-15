<script>

  import './style.scss'

  export let text = 'My text';
  export let link = '';

</script>

{#if link != ''}
<a href={link} target="_blank" rel="noopener noreferrer">
  <button class="btn btn-primary">
    {text}
  </button>
</a>
{:else}
<button class="btn btn-primary">
  {text}
</button>
{/if}
