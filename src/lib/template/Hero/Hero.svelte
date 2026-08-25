<script lang="ts">
	import { t } from 'svelte-i18n';

	import './style.scss';

	import { onMount } from 'svelte';

	let canvasTitle: HTMLCanvasElement;

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
			this.force = -this.effect.mouse.radius / this.distance;

			if (this.distance < this.effect.mouse.radius) {
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
			x: 0,
			y: 0
		};

		constructor(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
			this.context = context;
			this.canvas = canvas;
			this.canvasWidth = canvas.width;
			this.canvasHeight = canvas.height;
			this.titleX = this.canvasWidth / 2;
			this.titleY = this.canvasHeight / 2;

			window.addEventListener('mousemove', this.handleMouseMove);
		}

		handleMouseMove = (event: MouseEvent) => {
			const rect = this.canvas.getBoundingClientRect();
			this.mouse.x = event.x - rect.x;
			this.mouse.y = event.y - rect.y;
		};

		destroy() {
			window.removeEventListener('mousemove', this.handleMouseMove);
		}

		drawTitle(title: string) {
			this.context.fillStyle = '#FF731D';
			this.context.font = '110px Audiowide';
			this.context.textAlign = 'center';
			this.context.textBaseline = 'middle';
			this.context.fillText(title, this.titleX, this.titleY);
			this.convertToParticles();
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
		if (window.innerWidth <= 728 || !canvasTitle) {
			return;
		}

		const ctx = canvasTitle.getContext('2d');

		if (!ctx) {
			return;
		}

		const context = ctx;

		canvasTitle.width = canvasTitle.offsetWidth;
		canvasTitle.height = canvasTitle.offsetHeight;

		const effect = new Effect(context, canvasTitle);
		let animationFrame = 0;

		effect.drawTitle('Guilherme Farias');
		effect.render();

		function animate() {
			context.clearRect(0, 0, canvasTitle.width, canvasTitle.height);
			effect.render();
			animationFrame = requestAnimationFrame(animate);
		}

		animate();

		return () => {
			cancelAnimationFrame(animationFrame);
			effect.destroy();
		};
	});
</script>

<section class="hero">
	<canvas bind:this={canvasTitle} id="canvasTitle" aria-label="Guilherme Farias"></canvas>
	<h1 class="title title--h1 orange hero__title">Guilherme Farias</h1>

	<h2 class="title title--h2 white">{$t('hero.dev')}</h2>
</section>
