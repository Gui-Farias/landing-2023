<script lang="ts">
	import { onMount } from 'svelte';
	import { t } from 'svelte-i18n';

	import SkillsCircle from './SkillsCircle.svelte';
	import SkillsList from './SkillsList.svelte';
	import { categories, type SkillCategory } from './skills';
	import './icons.scss';
	import './style.scss';

	let interactive = false;
	let compact = false;
	let hasInteracted = false;
	let chosenCategory: SkillCategory | null = null;

	$: selected = compact && !hasInteracted ? categories[0] : chosenCategory;

	function toggleCategory(category: SkillCategory) {
		chosenCategory = selected?.id === category.id ? null : category;
		hasInteracted = true;
	}

	onMount(() => {
		const compactViewport = matchMedia('(width < 828px)');
		const updateCompact = () => (compact = compactViewport.matches);

		updateCompact();
		interactive = true;
		compactViewport.addEventListener('change', updateCompact);
		return () => compactViewport.removeEventListener('change', updateCompact);
	});
</script>

<section class="skills" aria-labelledby="skills-heading">
	<h2 id="skills-heading" class="title title--h2 white">{$t('skill.title')}</h2>

	{#if interactive && !compact}
		<div class="skills__categories" role="group" aria-label={$t('skill.categories')}>
			{#each categories as category (category.id)}
				<button
					type="button"
					aria-expanded={selected?.id === category.id}
					aria-controls="skills-panel-{category.id}"
					on:click={() => toggleCategory(category)}
					class="btn btn-primary"
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
				<SkillsCircle {categories} {selected} {compact} onSelect={toggleCategory} />
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
