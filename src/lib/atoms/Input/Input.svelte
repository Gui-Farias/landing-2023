<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	import './style.scss';

	export let name: string;
	export let label: string;
	export let type = 'text';
	export let autocomplete: HTMLInputAttributes['autocomplete'] = undefined;
	export let error: string | undefined = undefined;
</script>

<div class="form-field">
	<label for={name} class="form-label">{label}</label>
	{#if type === 'textarea'}
		<textarea
			{name}
			id={name}
			rows="6"
			class="form-input"
			required
			aria-invalid={error ? true : undefined}
			aria-describedby={error ? name + '-error' : undefined}></textarea>
	{:else}
		<input
			{type}
			{name}
			id={name}
			{autocomplete}
			class="form-input"
			required
			aria-invalid={error ? true : undefined}
			aria-describedby={error ? name + '-error' : undefined}
		/>
	{/if}
	{#if error}
		<p class="form-error" id={name + '-error'}>{error}</p>
	{/if}
</div>
