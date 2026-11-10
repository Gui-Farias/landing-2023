<script lang="ts">
	import './style.scss';
	import { t, locale } from 'svelte-i18n';

	import pt from '$lib/language/icon-pt.png';
	import en from '$lib/language/icon-en.png';
	import ThemeToggle from './ThemeToggle.svelte';

	let menuOpen = false;
	let menuToggle: HTMLButtonElement;

	function closeMenu() {
		menuOpen = false;
	}

	function dismissMenu() {
		closeMenu();
		menuToggle.focus();
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && menuOpen) {
			event.preventDefault();
			dismissMenu();
		}
	}

	function handleFocusout(event: FocusEvent & { currentTarget: HTMLElement }) {
		if (event.relatedTarget instanceof Node && !event.currentTarget.contains(event.relatedTarget)) {
			closeMenu();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<nav class="nav-main header__menu" aria-label={$t('menu.navigation')} on:focusout={handleFocusout}>
	<button
		bind:this={menuToggle}
		type="button"
		class="nav-main__toggle"
		aria-label={$t(menuOpen ? 'menu.close' : 'menu.open')}
		aria-controls="main-menu-panel"
		aria-expanded={menuOpen}
		on:click={() => (menuOpen = !menuOpen)}
	>
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			aria-hidden="true"
		>
			<path d={menuOpen ? 'M6 6l12 12M18 6L6 18' : 'M4 6h16M4 12h16M4 18h16'} />
		</svg>
	</button>

	<div
		class="nav-main__scrim"
		class:nav-main__scrim--open={menuOpen}
		role="presentation"
		on:click={dismissMenu}
	></div>

	<div id="main-menu-panel" class="nav-main__panel" class:nav-main__panel--open={menuOpen}>
		<ul class="nav-main__list">
			<li class="nav-main__item"><a href="#about" on:click={closeMenu}>{$t('menu.about')}</a></li>
			<li class="nav-main__item">
				<a href="#services" on:click={closeMenu}>{$t('menu.service')}</a>
			</li>
			<li class="nav-main__item"><a href="#work" on:click={closeMenu}>{$t('menu.work')}</a></li>
			<li class="nav-main__item">
				<a href="#contact" on:click={closeMenu}>{$t('menu.contact')}</a>
			</li>
		</ul>

		<div class="nav-main__controls">
			<ul class="nav-main__lang" aria-label={$t('menu.languages')}>
				<li>
					<button
						type="button"
						on:click={() => ($locale = 'pt')}
						aria-label="Site em português"
						aria-pressed={$locale === 'pt'}
						lang="pt"
					>
						<img src={pt} alt="" />
					</button>
				</li>
				<li>
					<button
						type="button"
						on:click={() => ($locale = 'en')}
						aria-label="Site in English"
						aria-pressed={$locale === 'en'}
						lang="en"
					>
						<img src={en} alt="" />
					</button>
				</li>
			</ul>
			<ThemeToggle />
		</div>
	</div>
</nav>

<style>
	button {
		cursor: pointer;
	}
</style>
