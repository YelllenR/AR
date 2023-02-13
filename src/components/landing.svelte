<script lang="ts">
	import { fly, slide } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
	import { inview } from 'svelte-inview';
	import AnimationStart from '$lib/animate/animationStart.svelte';

	let isInView: boolean;
	const texts = ['Aurélie', '', 'ROSE'];
</script>

<section
	id="landing-page"
	use:inview={{ unobserveOnEnter: true, rootMargin: '-50%' }}
	on:change={({ detail }) => {
		isInView = detail.inView;
	}}
>
	{#if isInView}
		<div class="container" in:slide={{ duration: 800, delay: 600, easing: backOut }}>
			<div class="content">
				<div class="texts">
					<AnimationStart>
						{#each texts as text, i}
							<div class="overflow">
								<span
									class="text"
									in:fly={{ y: 250, duration: 800, delay: 500 * i, easing: backOut }}
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
