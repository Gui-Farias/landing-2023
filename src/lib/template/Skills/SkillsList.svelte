<script lang="ts">
	import { t } from 'svelte-i18n';

	import type { SkillCategory } from './skills';

	export let category: SkillCategory;
	export let inactive: boolean;
	export let interactive: boolean;
</script>

<section
	id="skills-panel-{category.id}"
	aria-labelledby="skills-heading-{category.id}"
	class="skills-panel"
	class:skills-panel--interactive={interactive}
	class:skills-panel--inactive={inactive}
	inert={inactive}
	aria-hidden={inactive || undefined}
>
	<h3 id="skills-heading-{category.id}" class="skills-panel__heading">
		{$t('skill.' + category.id + '.name')}
	</h3>
	{#if !interactive}
		<p>{$t('skill.' + category.id + '.description')}</p>
	{/if}

	<ul class="skills-panel__list" role="list">
		{#each category.skills as skill, index (skill.name)}
			<li class="skills-panel__item">
				<span class="skills-icon {skill.icon}" aria-hidden="true"></span>
				<span id="skills-label-{category.id}-{index}">
					{skill.name === 'IA' ? $t('skill.ai') : skill.name}
				</span>
				<span class="skills-panel__value" aria-hidden="true">{skill.level}%</span>
				<div
					class="skills-panel__track"
					role="progressbar"
					aria-labelledby="skills-label-{category.id}-{index}"
					aria-valuemin={0}
					aria-valuemax={100}
					aria-valuenow={skill.level}
				>
					<span class="skills-panel__fill" style:inline-size={skill.level + '%'}></span>
				</div>
			</li>
		{/each}
	</ul>
</section>
