<script lang="ts">
	import type { TransitionConfig } from 'svelte/transition';
	import AnimationStart from '$lib/animate/animationStart.svelte';
	import { description } from './description';
	type TypewriterParams = { speed?: number };

	type Typewriter = (node: Element, params?: TypewriterParams) => TransitionConfig;

	const typewriter: Typewriter = (node, { speed = 1 } = {}) => {
		const describe = node.textContent ?? '';
		const duration = describe.length / (speed * 0.01);
		const delay = 1000;
		return {
			duration,
			delay,
			tick: (t) => {
				const index = Math.trunc(describe.length * t);
				node.textContent = describe.slice(0, index);
			}
		};
	};
</script>

<section id="description" class="invisible">
	<div class="descriptionContainer">
		<AnimationStart>
			<h2 in:typewriter class="describe">Informations personnelles</h2>
		</AnimationStart>

		<div class="contentDescriptions">
			{#each description as { HarskillsTitle, SoftskillsTitle, Harskills, Softskills, spokenLang, interestList, interestTitle }}
				<AnimationStart>
					<h3 class="softskills">{SoftskillsTitle}</h3>
				</AnimationStart>
			{/each}
		</div>
	</div>
</section>
