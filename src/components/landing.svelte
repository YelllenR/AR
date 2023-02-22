<script lang="ts">
	export const prerender = true;
	import { fly, slide } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
	import { inview } from 'svelte-inview';
	import AnimationStart from '$lib/animate/animationStart.svelte';

	let isInView: boolean;
	const texts = ['Aurélie', '', 'ROSE'];
</script>

<section
	id="landing-page"
	use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
	on:change={({ detail }) => {
		isInView = detail.inView;
	}}
>
	{#if isInView}
		<div class="container" in:slide={{ duration: 400, easing: backOut }}>
			<div class="content">
				<div class="texts">
					<AnimationStart>
						{#each texts as text, i}
							<div class="overflow">
								<span
									class="text"
									in:fly={{ y: 300, duration: 800, delay: 650 * i, easing: backOut }}
								>
									{text}
								</span>
							</div>
						{/each}
					</AnimationStart>
				</div>
			</div>
		</div>
	{/if}
</section>
