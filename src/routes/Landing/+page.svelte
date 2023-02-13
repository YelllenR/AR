<script lang="ts">
	import { fly, slide } from 'svelte/transition';
	import { backInOut, backOut } from 'svelte/easing';
	import AnimationStart from '$lib/animate/animationStart.svelte';
	import Description from '../Description/+page.svelte';
	import Experiences from '../Experiences/+page.svelte';
	import Training from '../Training/+page.svelte';
	import Projects from '../Projects/+page.svelte';
	import Stacks from '../Stacks/+page.svelte';
	import Contact from '../Contact/+page.svelte';

	const texts = ['Aurélie', '', 'ROSE'];
</script>

<AnimationStart>
	<section id="landing-page">
		<div class="container">
			<div class="content">
				<div class="texts">
					{#each texts as text, i}
						<div class="overflow">
							<span
								class="text"
								in:fly={{ y: 250, duration: 800, delay: 300 * i, easing: backOut }}
							>
								{text}
							</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>
</AnimationStart>

<!-- <Description />
<Experiences />

<Training />
<Projects />
<Stacks />
<Contact /> -->
