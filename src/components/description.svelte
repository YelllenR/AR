<script lang="ts">
	export const prerender = true;
	import type { TransitionConfig } from 'svelte/transition';
	import AnimationStart from '$lib/animate/animationStart.svelte';
	import { description } from './description';
	import { fly, slide } from 'svelte/transition';
	import { inview } from 'svelte-inview';

	let isInView: boolean;

	type TypewriterParams = { speed?: number };

	type Typewriter = (node: Element, params?: TypewriterParams) => TransitionConfig;

	const typewriter: Typewriter = (node, { speed = 1 } = {}) => {
		const describe = node.textContent ?? '';
		const duration = describe.length / (speed * 0.01);
		const delay = 100;
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

<section
	id="description"
	use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
	on:change={({ detail }) => {
		isInView = detail.inView;
	}}
>
	{#if isInView}
		<div
			class="descriptionContainer"
			in:slide={{ duration: 600, delay: 800 }}
			out:slide={{ duration: 600, delay: 600 }}
		>
			<h2 in:typewriter class="describe">Informations personnelles</h2>
			<div class="informationsContainer">
				<div class="skillsDescriptions">
					<AnimationStart>
						{#each description as { skillsList, skillsTitle, skillsSubTitle }}
							<div class="containerOfSkills">
								<h3 transition:typewriter class="skills">{skillsTitle}</h3>
								<h4 class="subtitle" in:fly={{ x: 300, duration: 800, delay: 1900 }}>{skillsSubTitle}</h4>
								<ul class="listOfSkills" in:fly={{ x: 300, duration: 800, delay: 1900 }}>
									{#each skillsList as skills}
										<li class="SkillsList">
											{skills}
										</li>
									{/each}
								</ul>
							</div>
						{/each}
					</AnimationStart>

					<AnimationStart>
						<h3 in:typewriter class="spokenLang">Anglais courant</h3>
					</AnimationStart>

					<div class="otherDescriptions">
						<AnimationStart>
							<h3 in:typewriter class="hobbyTitle">Centre d'intérêts</h3>
							<p in:fly={{ x: 300, duration: 800, delay: 1900 }} class="hobbies">
								Sport : Course à pied, squash
							</p>
							<p in:fly={{ x: 300, duration: 800, delay: 1900 }} class="hobbies">
								Lecture : Psychologie
							</p>
							<p in:fly={{ x: 300, duration: 800, delay: 1900 }} class="hobbies">
								Musique : Classique, Blues, Rock
							</p>
						</AnimationStart>
					</div>
				</div>
			</div>
		</div>
	{/if}
</section>
