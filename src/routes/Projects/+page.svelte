<script lang="ts">
	import { projects } from './projects';
	import { onMount } from 'svelte';
	import { mount_component } from 'svelte/internal';

	let slideStartIndex = 1;
	let projectSlides: string | any[];
	let dots: any;

	onMount(() => {
		projectSlides = Array.from(document.getElementsByClassName('projectItem'));

		dots = document.getElementsByClassName('dot');
	});

	const displaySlide = (n: number) => {
		let index;

		// onMount(() => {
			if (n > projectSlides.length) {
				return (slideStartIndex = 1);
			}

			if (n < 1) {
				return (slideStartIndex = projectSlides.length);
			}

			for (index = 0; index < projectSlides.length; index++) {
				projectSlides[index].style.display = 'none';
			}

			for (index = 0; index < dots.length; index++) {
				dots[index].className = dots[index].className.replace(' active', '');
			}

			projectSlides[slideStartIndex - 1].style.display = 'block';
			dots[slideStartIndex - 1].className += ' active';
		// });
	};


	displaySlide(slideStartIndex);

	const actualSlide = (n: number) => {
		displaySlide((slideStartIndex = n));
		console.log("ok actual")
	};

	const addSlides = (n: number) => {
		displaySlide((slideStartIndex += n));
		console.log("ok add")
	};


</script>

<section class="projectMainContainer">
	<div class="projectContainer">
		<h2 class="projectContainer__title">PROJECTS</h2>

		<div class="projectCarousel">
			<div class="carouselContainer">
				{#each projects as { projectTitle, projectDescription, projectPicture, projectStacks }}
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
			</div>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<i class="fas fa-arrow-right nextSlide" on:click={() => addSlides(1)} />
			<i class="fas fa-arrow-left previousSlide" />

			<div class="dotContainer">
				{#each projects as { projectId }, index}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<span class="dot" on:click={() => actualSlide(index)} />
				{/each}
			</div>
		</div>
	</div>
</section>
