<script lang="ts">
	import { fly } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
	import AnimationStart from '$lib/animate/animationStart.svelte';

	const texts = ['Aurélie', '', 'ROSE'];
</script>

<section id="landing-page">
	<AnimationStart>
		<div class="container">
			<div class="content">
				<div class="texts">
					{#each texts as text, i}
						<div class="overflow">
							<span
								class="text"
								in:fly={{ y: 250, duration: 900, delay: 600 * i, easing: backOut }}
							>
								{text}
							</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</AnimationStart>
</section>
