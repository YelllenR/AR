<script lang="ts">
	import { projects } from './projects';
	import { onMount } from 'svelte';

	let projectSlides: NodeListOf<Element> | any[];
	let dots: NodeListOf<Element> | any[];

	let id: number | null;

	onMount(() => {
		projectSlides = Array.from(document.querySelectorAll('.projectItem'));
		dots = Array.from(document.querySelectorAll('.dot'));

		projectSlides.forEach(() => {
			projectSlides[0].classList.add('showGalery');
		});
	});

	function displaySlide(idProject: Event) {
		const targetProject = idProject.target as HTMLButtonElement;

		if (id === Number(targetProject.dataset.projectid)) {
			id = null;
		} else {
			id = Number(targetProject.dataset.projectId);
		}
	}
</script>

<section class="projectMainContainer">
	<div class="projectContainer">
		<h2 class="projectContainer__title">PROJECTS</h2>

		<div class="projectCarousel">
			<div class="carouselContainer">
				{#each projects as { projectTitle, projectDescription, projectPicture, projectStacks }, index}
					<article class="projectItem fade" class:showGalery={id === index}>
						<h3 class="projectItem__projectName">{projectTitle}</h3>
						<p class="projectItem__projectDescription">{projectDescription}</p>
						<p class="stacks">{projectStacks}</p>
						<div class="projectItem__imageProjectsGallery">
							<img class="projectItem__projectVisual" src={projectPicture} alt="project visual" />
						</div>
					</article>
				{/each}

				<div class="dotContainer">
					{#each projects as { projectId }, index}
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<span class="dot" on:click={displaySlide} data-project-id={index}>{projectId} </span>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
