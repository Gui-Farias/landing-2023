<script>
  import './style.scss';

  export let name = 'name';
  export let type = 'text';
</script>

<label for={name} class="form-label">
  <span class="form-span">
    {name}
  </span>
  {#if type === 'textarea'}
    <textarea name={name} id={name} rows="6" class="form-input"></textarea>
    {:else}
    <input type={type} name={name} id={name} class="form-input">
  {/if}
</label>
