<script lang="ts">
	import { onMount } from 'svelte';
	import { t } from 'svelte-i18n';

	import SkillsCircle from './SkillsCircle.svelte';
	import SkillsList from './SkillsList.svelte';
	import { categories, type SkillCategory } from './skills';
	import './icons.scss';
	import './style.scss';

	let interactive = false;
	let hasInteracted = false;
	let selected: SkillCategory | null = null;

	function toggleCategory(category: SkillCategory) {
		hasInteracted = true;
		selected = selected?.id === category.id ? null : category;
	}

	onMount(() => {
		interactive = true;
	});
</script>

<section class="skills" aria-labelledby="skills-heading">
	<h2 id="skills-heading" class="title title--h2 white">{$t('skill.title')}</h2>

	{#if interactive}
		<div class="skills__categories" role="group" aria-label={$t('skill.categories')}>
			{#each categories as category (category.id)}
				<button
					type="button"
					aria-expanded={selected?.id === category.id}
					aria-controls="skills-panel-{category.id}"
					on:click={() => toggleCategory(category)}
				>
					{$t('skill.' + category.id + '.name')}
				</button>
			{/each}
		</div>
	{/if}

	<div
		class="skills__layout"
		class:skills__layout--interactive={interactive}
		class:skills__layout--expanded={selected !== null}
		class:skills__layout--animated={hasInteracted}
	>
		{#if interactive}
			<div class="skills__wheel">
				<SkillsCircle {categories} {selected} onSelect={toggleCategory} />
			</div>
		{/if}

		<div class="skills__details">
			<div class="skills__panels">
				{#each categories as category (category.id)}
					<SkillsList
						{category}
						inactive={interactive && selected?.id !== category.id}
						{interactive}
					/>
				{/each}
			</div>
		</div>
	</div>
</section>
