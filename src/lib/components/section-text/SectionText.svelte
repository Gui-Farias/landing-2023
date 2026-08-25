<script lang="ts">
	import Btn from '../btn/btn.svelte';
	import './style.scss';

	export let secondary = false;
	export let title = 'Hello World';
	export let h = 2;
	export let text = 'lorem ipsum';
	export let text2 = '';
	export let text3 = '';
	export let btn = 'false';
	export let link = '';
	export let list: string[] | string = [];

	$: services = Array.isArray(list) ? list : list ? [list] : [];
</script>

<div class="section-text section-text--{secondary ? 'secondary' : 'primary'}">
	{#if h == 3}
		<h3 class="title title--h3">{title}</h3>
	{:else}
		<h2 class="title title--h2">{title}</h2>
	{/if}
	<p class="paragraphy">
		{text}
		{#if text2}
			<br /><br />
			{text2}
		{/if}
		{#if text3}
			<br /><br />
			{text3}
		{/if}
	</p>
	{#if services.length}
		<ul class="section-text__list">
			{#each services as service}
				<li class="section-text__item">
					<span>
						{service}
					</span>
				</li>
			{/each}
		</ul>
	{/if}
	{#if btn != 'false'}
		<Btn text={btn} {link} />
	{/if}
</div>
