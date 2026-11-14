export type Skill = {
	name: string;
	level: number;
	icon: string;
};

export type SkillCategory = {
	id: 'lang' | 'frame' | 'tools';
	icon: string;
	skills: Skill[];
};

export const categories: [SkillCategory, ...SkillCategory[]] = [
	{
		id: 'lang',
		icon: 'fa6-brands--square-js',
		skills: [
			{ name: 'HTML5', level: 99, icon: 'simple-icons--html5' },
			{ name: 'CSS3', level: 98, icon: 'simple-icons--css3' },
			{ name: 'JavaScript', level: 90, icon: 'fa6-brands--square-js' },
			{ name: 'PHP', level: 75, icon: 'akar-icons--php-fill' },
			{ name: 'Python', level: 50, icon: 'fa6-brands--python' },
			{ name: 'SQL', level: 80, icon: 'mdi--sql-query' }
		]
	},
	{
		id: 'frame',
		icon: 'devicon-plain--svelte',
		skills: [
			{ name: 'Svelte', level: 75, icon: 'devicon-plain--svelte' },
			{ name: 'React', level: 70, icon: 'akar-icons--react-fill' },
			{ name: 'React Native', level: 40, icon: 'tabler--brand-react-native' },
			{ name: 'Three.js', level: 25, icon: 'tabler--brand-threejs' },
			{ name: 'D3.js', level: 25, icon: 'icon-d3' },
			{ name: 'Tailwind CSS', level: 90, icon: 'simple-icons--tailwindcss' }
		]
	},
	{
		id: 'tools',
		icon: 'devicon-plain--git',
		skills: [
			{ name: 'Git', level: 90, icon: 'devicon-plain--git' },
			{ name: 'WordPress', level: 80, icon: 'devicon-plain--wordpress' },
			{ name: 'Figma', level: 80, icon: 'fa6-brands--figma' },
			{ name: 'Photoshop', level: 75, icon: 'devicon-plain--photoshop' },
			{ name: 'IA', level: 90, icon: 'icon-ai' }
		]
	}
];
