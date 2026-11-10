<script>
	import { t } from 'svelte-i18n';

	import './style.scss';
</script>

<section class="skills">
	<div class="skills__box skills__lang reveal-on-scroll">
		<h2>{$t('skill.lang')}</h2>
		<ul class="skills__list" role="list">
			<li class="skills__item">
				<div class="icon">
					<div class=" simple-icons--html5"></div>
					<p class="icon-name">HTML5</p>
				</div>
				<div class="progress">
					<div class="bar html5"></div>
				</div>
				<div class="percentage">99%</div>
			</li>
			<li class="skills__item">
				<div class="icon">
					<div class="simple-icons--css3"></div>
					<p class="icon-name">CSS3</p>
				</div>
				<div class="progress">
					<div class="bar css3"></div>
				</div>
				<div class="percentage">98%</div>
			</li>
			<li class="skills__item">
				<div class="icon">
					<div class="fa6-brands--square-js"></div>
					<p class="icon-name">JS</p>
				</div>
				<div class="progress">
					<div class="bar js"></div>
				</div>
				<div class="percentage">90%</div>
			</li>
			<li class="skills__item">
				<div class="icon">
					<div class="mdi--sql-query"></div>
					<p class="icon-name">SQL</p>
				</div>
				<div class="progress">
					<div class="bar sql"></div>
				</div>
				<div class="percentage">80%</div>
			</li>
			<li class="skills__item">
				<div class="icon">
					<div class="akar-icons--php-fill"></div>
					<p class="icon-name">PHP</p>
				</div>
				<div class="progress">
					<div class="bar php"></div>
				</div>
				<div class="percentage">75%</div>
			</li>
			<li class="skills__item">
				<div class="icon">
					<div class="fa6-brands--python"></div>
					<p class="icon-name">Python</p>
				</div>
				<div class="progress">
					<div class="bar python"></div>
				</div>
				<div class="percentage">50%</div>
			</li>
		</ul>
	</div>

	<div class="skills__box skills__frame reveal-on-scroll">
		<h2>{$t('skill.frame')}</h2>
		<ul class="skills__list" role="list">
			<li class="skills__item">
				<div class="icon">
					<div class="devicon-plain--svelte"></div>
					<p class="icon-name">Svelte</p>
				</div>
				<div class="progress">
					<div class="bar svelte"></div>
				</div>
				<div class="percentage">75%</div>
			</li>
			<li class="skills__item">
				<div class="icon">
					<div class="akar-icons--react-fill"></div>
					<p class="icon-name">React</p>
				</div>
				<div class="progress">
					<div class="bar react"></div>
				</div>
				<div class="percentage">70%</div>
			</li>
			<li class="skills__item">
				<div class="icon">
					<div class="tabler--brand-react-native"></div>
					<p class="icon-name">ReactNative</p>
				</div>
				<div class="progress">
					<div class="bar react-native"></div>
				</div>
				<div class="percentage">40%</div>
			</li>
			<li class="skills__item">
				<div class="icon">
					<div class="tabler--brand-threejs"></div>
					<p class="icon-name">ThreeJS</p>
				</div>
				<div class="progress">
					<div class="bar threejs"></div>
				</div>
				<div class="percentage">25%</div>
			</li>
			<li class="skills__item">
				<div class="icon">
					<div class="icon-d3" aria-hidden="true"></div>
					<p class="icon-name">D3.js</p>
				</div>
				<div class="progress">
					<div class="bar d3js"></div>
				</div>
				<div class="percentage">25%</div>
			</li>
		</ul>
	</div>

	<div class="skills__box skills__tools reveal-on-scroll">
		<h2>{$t('skill.tools')}</h2>
		<ul class="skills__list" role="list">
			<li class="skills__item">
				<div class="icon">
					<div class="icon-ai" aria-hidden="true"></div>
					<p class="icon-name">{$t('skill.ai')}</p>
				</div>
				<div class="progress">
					<div class="bar ai"></div>
				</div>
				<div class="percentage">90%</div>
			</li>
			<li class="skills__item">
				<div class="icon">
					<div class="simple-icons--tailwindcss"></div>
					<p class="icon-name">Tailwindcss</p>
				</div>
				<div class="progress">
					<div class="bar tailwind"></div>
				</div>
				<div class="percentage">90%</div>
			</li>
			<li class="skills__item">
				<div class="icon">
					<div class="devicon-plain--git"></div>
					<p class="icon-name">Git</p>
				</div>
				<div class="progress">
					<div class="bar git"></div>
				</div>
				<div class="percentage">90%</div>
			</li>
			<li class="skills__item">
				<div class="icon">
					<div class="devicon-plain--wordpress"></div>
					<p class="icon-name">Wordpress</p>
				</div>
				<div class="progress">
					<div class="bar wordpress"></div>
				</div>
				<div class="percentage">80%</div>
			</li>
			<li class="skills__item">
				<div class="icon">
					<div class="fa6-brands--figma"></div>
					<p class="icon-name">Figma</p>
				</div>
				<div class="progress">
					<div class="bar figma"></div>
				</div>
				<div class="percentage">80%</div>
			</li>
			<li class="skills__item">
				<div class="icon">
					<div class="devicon-plain--photoshop"></div>
					<p class="icon-name">Photoshop</p>
				</div>
				<div class="progress">
					<div class="bar photoshop"></div>
				</div>
				<div class="percentage">75%</div>
			</li>
		</ul>
	</div>
</section>
