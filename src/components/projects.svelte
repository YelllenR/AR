<script lang="ts">
	export const prerender = true;
	import { projects } from './projects';
	// import img from '../lib/images/bg.jpg'; 
	let informations = false;
	let clickedOnCardProject: number | null;

	function displayInformations(idProject: Event) {
		const targetProject = idProject.target as HTMLButtonElement;
		if (clickedOnCardProject === Number(targetProject.dataset.projectid)) {
			clickedOnCardProject = null;
			informations = true;
		} else {
			clickedOnCardProject = Number(targetProject.dataset.projectId);
			informations = true;
		}
	}
</script>

<section class="projectMainContainer">
	<div class="projectContainer">
		<h2 class="projectContainer__title">PROJECTS</h2>
		
		<div class="cardContainer">
			{#each projects as { projectTitle, projectDescription, projectStacks, link }, index}
				<article class="cardItems" class:showInformations={clickedOnCardProject === index}>
					<div class="projectData">
						<h3 class="projectName">{projectTitle}</h3>
						
						<p class="projectDescription">{projectDescription}</p>
						<p class="stacks">{projectStacks}</p>
						<a href={link} target="blank">
							<button class="githubLink">Repo github</button>
						</a>

					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
