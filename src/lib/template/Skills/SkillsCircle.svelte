<script lang="ts">
	import { t } from 'svelte-i18n';

	import type { SkillCategory } from './skills';

	export let categories: SkillCategory[];
	export let selected: SkillCategory | null;
	export let onSelect: (category: SkillCategory) => void;

	const size = 368;
	const center = size / 2;
	const innerRadius = 108;
	const outerRadius = 158;
	const radius = (innerRadius + outerRadius) / 2;
	const labelRadius = 172;
	const gap = 7;

	function point(angle: number, distance: number) {
		const radians = (angle * Math.PI) / 180;
		return [
			Math.round((center + distance * Math.cos(radians)) * 100) / 100,
			Math.round((center + distance * Math.sin(radians)) * 100) / 100
		];
	}

	function arcPath(start: number, end: number, distance: number, reverse = false) {
		const first = point(reverse ? end : start, distance);
		const last = point(reverse ? start : end, distance);
		const largeArc = end - start > 180 ? 1 : 0;
		const sweep = reverse ? 0 : 1;
		return `M ${first.join(' ')} A ${distance} ${distance} 0 ${largeArc} ${sweep} ${last.join(' ')}`;
	}

	$: featured = selected ?? categories[0];
	$: total = categories.reduce((sum, category) => sum + category.skills.length, 0);
	$: availableAngle = 360 - gap * categories.length;
	$: arcs = categories.map((category, index) => {
		const previousCount = categories
			.slice(0, index)
			.reduce((sum, previous) => sum + previous.skills.length, 0);
		const start = -90 + gap / 2 + (previousCount / total) * availableAngle + index * gap;
		const end = start + (category.skills.length / total) * availableAngle;
		const angleSteps = Math.ceil((end - start) / 5);
		const angles = Array.from(
			{ length: angleSteps + 1 },
			(_, step) => start + ((end - start) * step) / angleSteps
		);
		const points = [
			...angles.map((angle) => point(angle, outerRadius)),
			...angles.reverse().map((angle) => point(angle, innerRadius))
		];
		const clip = points.map((coordinate) => coordinate.map(asPercent).join(' '));
		const middle = (start + end) / 2;
		const [iconX, iconY] = point(middle, radius).map(asPercent);
		const icons = category.skills.map((skill, index) => {
			const angle = start + ((end - start) * (index + 0.5)) / category.skills.length;
			const [x, y] = point(angle, radius).map(asPercent);
			return { skill, x, y };
		});

		return {
			category,
			path: arcPath(start, end, radius),
			labelPath: arcPath(start, end, labelRadius, middle > 0 && middle < 180),
			outline: points.map((coordinate) => coordinate.join(',')).join(' '),
			clip: 'polygon(' + clip.join(',') + ')',
			iconX,
			iconY,
			icons
		};
	});

	function asPercent(coordinate: number) {
		return `${(coordinate / size) * 100}%`;
	}
</script>

<div class="skills-wheel" role="group" aria-label={$t('skill.categories')}>
	{#each arcs as { category, clip, iconX, iconY, icons } (category.id)}
		<button
			type="button"
			class="skills-wheel__button"
			data-category={category.id}
			style:clip-path={clip}
			tabindex="-1"
			aria-label={$t('skill.' + category.id + '.name')}
			aria-expanded={category.id === selected?.id}
			aria-controls="skills-panel-{category.id}"
			on:click={() => onSelect(category)}
		>
			<span
				class="skills-wheel__icon skills-wheel__icon--compact skills-icon {category.icon}"
				style:left={iconX}
				style:top={iconY}
				aria-hidden="true"
			></span>
			{#each icons as { skill, x, y } (skill.name)}
				<span
					class="skills-wheel__icon skills-wheel__icon--technology skills-icon {skill.icon}"
					style:left={x}
					style:top={y}
					aria-hidden="true"
				></span>
			{/each}
		</button>
	{/each}

	<svg class="skills-wheel__graphic" viewBox="0 0 {size} {size}" aria-hidden="true">
		{#each arcs as { category, path, labelPath, outline } (category.id)}
			<g
				data-category={category.id}
				class:skills-wheel__arc--selected={category.id === selected?.id}
			>
				<path class="skills-wheel__arc" d={path} />
				<path id="skills-arc-{category.id}" d={labelPath} fill="none" />
				<text dy=".34em">
					<textPath href="#skills-arc-{category.id}" startOffset="50%">
						{$t('skill.' + category.id + '.short')}
					</textPath>
				</text>
				<polygon class="skills-wheel__focus" points={outline} />
			</g>
		{/each}
	</svg>

	{#if featured}
		{#key featured.id}
			<div class="skills-wheel__center">
				<span class="skills-icon {featured.icon}" aria-hidden="true"></span>
				<p class="skills-wheel__name">{$t('skill.' + featured.id + '.name')}</p>
				<p class="skills-wheel__description">{$t('skill.' + featured.id + '.description')}</p>
			</div>
		{/key}
	{/if}
</div>
