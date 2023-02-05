<script lang="ts">
	import { projects } from './projects';
	import { fade, slide } from 'svelte/transition';
	import Carousel from 'svelte-carousel';

	let carousel;
</script>

<section class="projectMainContainer">
	<div class="projectContainer">
		<h2 class="projectContainer__title">PROJECTS</h2>

		<div class="projectCarousel">
			<Carousel>
				{#each projects as { projectId, projectTitle, projectDescription, projectPicture, projectStacks }, projectIndex}
					<article class="projectData projectItem">
						<h3 class="projectData__projectName">{projectTitle}</h3>
						<p class="projectData__projectDescription">{projectDescription}</p>

						<div class="stacksContainer">
							<h4 class="stacksTitle">Stacks utilisés</h4>
							<p class="stacks">{projectStacks}</p>
						</div>

						<div class="projectData__imageProjectsGallery">
							<img class="projectVisual" src={projectPicture} alt="project visual" />
						</div>
					</article>
				{/each}
			</Carousel>
		</div>
	</div>
</section>
