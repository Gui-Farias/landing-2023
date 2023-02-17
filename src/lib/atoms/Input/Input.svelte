<script>
  import './style.scss';

  export let name = 'name';
  export let type = 'text';
</script>

<label for={name} class="form-label">
  {#if type === 'textarea'}
    <textarea name={name} id={name} rows="6" class="form-input" required placeholder={name}></textarea>
    {:else}
    <input type={type} name={name} id={name} class="form-input" required placeholder={name}>
  {/if}
  <span class="form-span">
    {name}
  </span>
</label>
