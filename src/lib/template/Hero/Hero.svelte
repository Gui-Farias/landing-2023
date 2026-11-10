<script lang="ts">
	import { t } from 'svelte-i18n';

	import './style.scss';

	import { onMount } from 'svelte';

	let canvasTitle: HTMLCanvasElement;
	let canvasReady = false;
	const title = 'Guilherme Farias';

	class Particle {
		effect: Effect;
		x: number;
		y: number;
		color: string;
		originX: number;
		originY: number;
		size: number;
		distanceX = 0;
		distanceY = 0;
		velocityX = 0;
		velocityY = 0;
		force = 0;
		angle = 0;
		distance = 0;
		friction = Math.random() * 0.6 + 0.15;
		ease = Math.random() * 0.1 + 0.005;

		constructor(effect: Effect, x: number, y: number, color: string) {
			this.effect = effect;
			this.x = Math.random() * this.effect.canvasWidth;
			this.y = 0;
			this.color = color;
			this.originX = x;
			this.originY = y;
			this.size = this.effect.gap;
		}

		draw() {
			this.effect.context.fillStyle = this.color;
			this.effect.context.fillRect(this.x, this.y, this.size, this.size);
		}

		update() {
			this.distanceX = this.effect.mouse.x - this.x;
			this.distanceY = this.effect.mouse.y - this.y;
			this.distance = this.distanceX * this.distanceX + this.distanceY * this.distanceY;
			if (this.distance > 0 && this.distance < this.effect.mouse.radius) {
				this.force = -this.effect.mouse.radius / this.distance;
				this.angle = Math.atan2(this.distanceY, this.distanceX);
				this.velocityX += this.force * Math.cos(this.angle);
				this.velocityY += this.force * Math.sin(this.angle);
			}

			this.x += (this.velocityX *= this.friction) + (this.originX - this.x) * this.ease;
			this.y += (this.velocityY *= this.friction) + (this.originY - this.y) * this.ease;
		}
	}

	class Effect {
		context: CanvasRenderingContext2D;
		canvas: HTMLCanvasElement;
		canvasWidth: number;
		canvasHeight: number;
		titleX: number;
		titleY: number;
		particles: Particle[] = [];
		gap = 3;
		mouse = {
			radius: 2000,
			x: -Infinity,
			y: -Infinity
		};

		constructor(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
			this.context = context;
			this.canvas = canvas;
			this.canvasWidth = canvas.width;
			this.canvasHeight = canvas.height;
			this.titleX = this.canvasWidth / 2;
			this.titleY = this.canvasHeight / 2;
		}

		handleMouseMove = (event: MouseEvent) => {
			const rect = this.canvas.getBoundingClientRect();
			this.mouse.x = event.x - rect.x;
			this.mouse.y = event.y - rect.y;
		};

		paintTitle() {
			this.context.fillStyle = '#FF731D';
			this.context.font = '110px Audiowide';
			this.context.textAlign = 'center';
			this.context.textBaseline = 'middle';
			this.context.fillText(title, this.titleX, this.titleY, this.canvasWidth - 8);
		}

		convertToParticles() {
			const pixel = this.context.getImageData(0, 0, this.canvasWidth, this.canvasHeight).data;
			this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
			for (let y = 0; y < this.canvasHeight; y += this.gap) {
				for (let x = 0; x < this.canvasWidth; x += this.gap) {
					const index = (y * this.canvasWidth + x) * 4;
					const alpha = pixel[index + 3];
					if (alpha > 0) {
						const red = pixel[index];
						const green = pixel[index + 1];
						const blue = pixel[index + 2];
						const color = `rgb(${red}, ${green}, ${blue})`;
						this.particles.push(new Particle(this, x, y, color));
					}
				}
			}
		}

		render() {
			this.particles.forEach((particle) => {
				particle.update();
				particle.draw();
			});
		}
	}

	onMount(() => {
		const context = canvasTitle.getContext('2d');
		if (!context) return;

		const animationAllowed = matchMedia(
			'(min-width: 828px) and (prefers-reduced-motion: no-preference)'
		);
		let effect: Effect | undefined;
		let frame = 0;
		let deadline = 0;

		function animate(now: number) {
			if (!effect || !context) return;
			context.clearRect(0, 0, canvasTitle.width, canvasTitle.height);
			if (now < deadline) {
				effect.render();
				frame = requestAnimationFrame(animate);
			} else {
				effect.paintTitle();
				frame = 0;
			}
		}

		function schedule(duration: number) {
			deadline = performance.now() + duration;
			if (!frame) frame = requestAnimationFrame(animate);
		}

		function syncCanvas() {
			const width = canvasTitle.parentElement?.clientWidth ?? 0;
			if (animationAllowed.matches && effect?.canvasWidth === width) return;

			cancelAnimationFrame(frame);
			frame = 0;
			effect = undefined;
			canvasReady = false;
			if (!animationAllowed.matches || width <= 8 || !context) return;

			canvasTitle.width = width;
			effect = new Effect(context, canvasTitle);
			effect.paintTitle();
			effect.convertToParticles();
			canvasReady = true;
			schedule(1400);
		}

		function moveParticles(event: PointerEvent) {
			if (!effect || event.pointerType !== 'mouse') return;
			if (!frame) {
				for (const particle of effect.particles) {
					particle.x = particle.originX;
					particle.y = particle.originY;
					particle.velocityX = 0;
					particle.velocityY = 0;
				}
			}
			effect.handleMouseMove(event);
			schedule(550);
		}

		syncCanvas();
		animationAllowed.addEventListener('change', syncCanvas);
		window.addEventListener('resize', syncCanvas);
		canvasTitle.addEventListener('pointermove', moveParticles);
		return () => {
			cancelAnimationFrame(frame);
			animationAllowed.removeEventListener('change', syncCanvas);
			window.removeEventListener('resize', syncCanvas);
			canvasTitle.removeEventListener('pointermove', moveParticles);
		};
	});
</script>

<section class="hero" class:hero--animated={canvasReady}>
	<canvas bind:this={canvasTitle} id="canvasTitle" height="150" aria-hidden="true"></canvas>
	<h1 class="title title--h1 orange hero__title" class:visually-hidden={canvasReady}>{title}</h1>

	<h2 class="title title--h2 white">{$t('hero.dev')}</h2>
</section>
